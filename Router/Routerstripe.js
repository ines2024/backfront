const express = require('express');
const Stripe = require ('stripe');
const stripe = Stripe('sk_test_51OKMt4Hga6nX9tkrTPoRtqDGbs7E9Qk48qw5mZQQcs5XYGuAZLZTt71h2WQzf5t3nfe73LXQfPn5W4QVhO3Idwdp00aehYz0Zi')

const routerPayment= express.Router()

routerPayment.post('/create-checkout-session', async(req,res)=>{
    console.log(req.body)
    const line_items=req.body.basket.map(item=>{
        return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.product.name,
                        images : [item.product.image],

                        description: item.product.description,
                        metadata:{
                            id:item.product._id
                        }
                    },
                    unit_amount: item.product.price*100,
                },
                quantity: item.quantity,
            }

    })
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:3000/Success',
        cancel_url: 'http://localhost:3000/Cancel',
    });
    res.send({url:session.url });
})
module.exports= routerPayment