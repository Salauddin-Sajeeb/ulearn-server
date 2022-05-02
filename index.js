const express = require('express');
const app = express()
const cors = require('cors');
app.use(cors());
app.use(express.json());
require('dotenv').config();
const port = process.env.PORT || 9000

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vewtb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

async function run() {
    try {
        await client.connect()
        const database = client.db("Ulearn");

        const collection1 = database.collection("Lession1");
        const collection2 = database.collection('exercise4');
        const collection3 = database.collection('L1ex2');
        const collection4 = database.collection('L1ex4');
        const collection5 = database.collection('L1ex5');
        const collection6 = database.collection('L1ex6a');
        const collection7 = database.collection('L1ex6b');
        const collection8 = database.collection('L2ex3');
        const collection9 = database.collection('L2ex5');
        const collection10 = database.collection('L2ex6');

        app.get('/lession1', async (req, res) => {
            const cursor = collection1.find({});
            const products = await cursor.toArray();
            res.send(products);
        })
        app.get('/exercise4', async (req, res) => {
            const cursor = collection2.find({});
            const product = await cursor.toArray();
            res.send(product)
        })
        app.get('/L1ex2', async (req, res) => {
            const cursor = collection3.find({});
            const product = await cursor.toArray();
            res.send(product)
        })
        app.get('/L1ex4', async (req, res) => {
            const cursor = collection4.find({});
            const product = await cursor.toArray();
            res.send(product)
        })
        app.get('/L1ex5', async (req, res) => {
            const cursor = collection5.find({});
            const product = await cursor.toArray();
            res.send(product)
        })
        app.get('/L1ex6a', async (req, res) => {
            const cursor = collection6.find({});
            const product = await cursor.toArray();
            res.send(product)
        })
        app.get('/L1ex6b', async (req, res) => {
            const cursor = collection7.find({});
            const product = await cursor.toArray();
            res.send(product)
        })
        app.get('/L2ex3', async (req, res) => {
            const cursor = collection8.find({});
            const product = await cursor.toArray();
            res.send(product)
        })
        app.get('/L2ex5', async (req, res) => {
            const cursor = collection9.find({});
            const product = await cursor.toArray();
            res.send(product)
        })
        app.get('/L2ex6', async (req, res) => {
            const cursor = collection10.find({});
            const product = await cursor.toArray();
            res.send(product)
        })
    }
    finally {

    }

}
run().catch(console.dir)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})