import { connectToDatabase } from "../../util/database";

async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(400).json({ error: 'Invalid method request' });
        return;
    }
    const email = req.body.email;

    //data validation
    if (!email || email.trim().length < 7 || !email.trim().includes('@')) {
        res.status(422).json({ error: 'Invalid input' })
        return;
    }

    //connecting to data
    let client;
    try {
        client = await connectToDatabase();
        if (!client) throw new Error('Database Connection Failed');
    }
    catch (error) {
        client?.close();
        res.status(503).json({ error: error.message });
        return;
    }
    //setting new user in db
    try {
        const db = client.db();
        const result = await db.collection('newsletter').insertOne({ email: email });
        client.close();
        res.status(201).json({ message: 'Succesully Registered', error: null });
    }
    catch (error) {
        client.close();
        res.status(400).json({ error: 'Something went wrong', message: error.message })
    }
}
export default handler;