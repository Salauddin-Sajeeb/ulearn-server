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

        app.get('/lession1', async (req, res) => {
            const cursor = collection1.find({});
            const products = await cursor.toArray();
            res.send(products);
        })
    }
    finally {

    }

}
run().catch(console.dir)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})