const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    const { items, email, shippingDetails } = req.body

    const transformedItems = items.map(item => {
        return {
            description: item.description,
            quantity: item.quantity,
            price_data: {
                currency: 'inr',
                unit_amount: 10 * 100,
                product_data: {
                    name: item.name,
                    images: [item.image]
                },
            },

        }
    })

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/error`,
        metadata: {
            email: email,
            images: JSON.stringify(items.map(item => item.image)),
            shippingDetails: shippingDetails
        }
    })

    res.status(200).json({ id: session.id })
}