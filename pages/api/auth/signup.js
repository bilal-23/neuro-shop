import { hashPassword } from '../../../util/auth';
import { connectToDatabase } from '../../../util/database';

async function handler(req, res) {
    if (req.method !== 'POST') {
        console.log("working");
        res.status(400).json({ error: 'Invalid method request' });
        return;
    }
    const email = req.body.email;
    const password = req.body.password;
    //data validation
    if (!email.trim() || !password.trim() || password.trim().length < 6 || email.trim().length < 10) {
        res.status(422).json({ error: 'Invalid input' })
        return;
    }

    const encryptedPassword = await hashPassword(password);

    const newUserAccount = {
        email: email,
        password: encryptedPassword,
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
        const existingUser = await db.collection('users').findOne({ email: email });
        if (existingUser) {
            client.close()
            res.status(422).json({ error: 'User already exist' })
            return;
        }
        const result = await db.collection('users').insertOne(newUserAccount);
        client.close();
        res.status(201).json({ message: 'Account Created', error: null });
    }
    catch (error) {
        client.close();
        res.status(400).json({ error: 'Something went wrong', message: error.message })
    }
}
export default handler;