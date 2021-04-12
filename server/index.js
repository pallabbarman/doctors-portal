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
        appointmentCollection.find({ date: date.date }).toArray((err, documents) => {
            res.send(documents);
        });
    });

    app.post('/addADoctor', (req, res) => {
        const { file } = req.files;
        const { name } = req.body;
        const { email } = req.body;
        console.log(name, email, file);
        file.mv(`${__dirname}/doctors/${file.name}`, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).send({ msg: 'Failed to upload Image' });
            }
            doctorCollection.insertOne({ name, email, img: file.name }).then((result) => {
                res.send(result.insertedCount > 0);
            });
        });
    });

    app.get('/doctors', (req, res) => {
        doctorCollection.find({}).toArray((err, documents) => {
            res.send(documents);
        });
    });
});

app.get('/', (req, res) => {
    res.send('Hello, Doctors portal server side is working!');
});
app.listen(process.env.PORT || port);
