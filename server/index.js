const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('doctors'));
app.use(fileUpload());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nfge0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(() => {
    const appointmentCollection = client.db('doctorsPortal').collection('appointments');
    const doctorCollection = client.db('doctorsPortal').collection('doctors');

    app.post('/addAppointment', (req, res) => {
        const appointment = req.body;
        appointmentCollection.insertOne(appointment).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    app.get('/appointments', (req, res) => {
        appointmentCollection.find({}).toArray((err, documents) => {
            res.send(documents);
        });
    });

    app.post('/appointmentsByDate', (req, res) => {
        const date = req.body;
        const { email } = req.body;
        doctorCollection.find({ email }).toArray((err, documents) => {
            const filter = { date: date.date };
            if (documents.length === 0) {
                filter.email = email;
            }
            appointmentCollection.find(filter).toArray((error, doc) => {
                res.send(doc);
            });
        });
    });

    app.post('/addADoctor', (req, res) => {
        const { file } = req.files;
        const { name } = req.body;
        const { email } = req.body;
        const newImg = file.data;
        const encImg = newImg.toString('base64');

        const image = {
            contentType: file.mimetype,
            size: file.size,
            img: Buffer.from(encImg, 'base64'),
        };

        doctorCollection.insertOne({ name, email, image }).then((result) => {
            res.send(result.insertedCount > 0);
        });
    });

    app.get('/doctors', (req, res) => {
        doctorCollection.find({}).toArray((err, documents) => {
            res.send(documents);
        });
    });

    app.post('/isDoctor', (req, res) => {
        const { email } = req.body;
        doctorCollection.find({ email }).toArray((err, documents) => {
            res.send(documents.length > 0);
        });
    });
});

app.get('/', (req, res) => {
    res.send('Hello, Doctors portal server side is working!');
});
app.listen(process.env.PORT || port);
