import { buffer } from 'micro';
import { connectToDatabase } from "../../util/database";


// establish connection to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_SIGNING_SECRET

const fulfillOrder = async (session) => {
    //Connect to database
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

    //Order Object
    const orderObject = {
        orderId: session.id,
        email: session.metadata.email,
        amount: session.amount_total / 100,
        amount_shipping: session.total_details.amount_shipping / 100,
        images: JSON.parse(session.metadata.images),
        shippingDetails: session.metadata.shippingDetails,
        timestamp: new Date(),
    }

    //Upload order data to mongoDB 
    try {
        const db = client.db();
        const itemExist = await db.collection('orders').findOne({ orderId: session.id });

        if (itemExist) {
            res.status(201).json({ message: 'Item Already Added', error: null });
            return;
        }
        const result = await db.collection('orders').insertOne({ ...orderObject });
        client.close();
        res.status(201).json({ message: 'Order Successfully Added', error: null });
    }
    catch (error) {
        client.close();
        res.status(400).json({ error: 'Something went wrong', message: error.message })
    }
    return;
}

async function handler(req, res) {
    if (req.method === 'POST') {
        const requestBuffer = await buffer(req)
        const payload = requestBuffer.toString()
        const sig = req.headers['stripe-signature']

        let event
        //verify that the event POSTED came from stripe
        try {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
        } catch (err) {
            return res.status(400).send(`Webhook error: ${err.message}`)
        }

        //handle the checkout session completed
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object

            //fulfill the order
            return fulfillOrder(session)
                .then(() => res.status(200))
                .catch((err) => {
                    res.status(400).send(`webhook error: ${err.message}`)
                })
        }
    }
}

// async function handler(req, res) {
//     if (req.method === 'POST') {
//         const requestBuffer = await buffer(req)
//         const payload = requestBuffer.toString()
//         const sig = req.headers['stripe-signature']

//         let event
//         //verify that the event POSTED came from stripe
//         event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)


//         //handle the checkout session completed
//         if (event.type === 'checkout.session.completed') {
//             const session = event.data.object

//             //fulfill the order
//             return fulfillOrder(session)
//                 .then(() => res.status(200))
//                 .catch((err) => {
//                     res.status(400).send(`webhook error event: ${err.message}`)
//                 })
//         }
//     }
// }

export default handler;
export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
}