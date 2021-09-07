import { MongoClient } from "mongodb"

export async function connectToDatabase() {
    const client = await MongoClient.connect(`mongod+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tfip8.mongodb.net/neuro-shop?retryWrites=true&w=majority`)
    return client;
}