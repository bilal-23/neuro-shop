import { connectToDatabase } from '../../../util/database';
async function handler(req, res) {
    const { productId } = req.query;
    let client;
    //connecting to database
    try {
        client = await connectToDatabase();
    }
    catch (error) {
        res.status(403).json({ error: 'Failed to connect to databse' })
        return;
    }
    //find the product with id same as give in query 
    try {
        const product = await client.db().collection('products').findOne({ productId: productId });
        client.close();
        res.status(200).json({ product: product });
        return;
    }
    catch (err) {
        client.close();
        res.status(404).json({ error: 'Product not found' });
        return;
    }
}
export default handler;