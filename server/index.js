const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nfge0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(() => {
    const appointmentCollection = client.db('doctorsPortal').collection('appointments');

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
});

app.get('/', (req, res) => {
    res.send('Hello, Doctors portal server side is working!');
});
app.listen(process.env.PORT || port);
