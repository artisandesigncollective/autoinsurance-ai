import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });
  try {
    const { userEmail, vehicleInfo } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: 'Total Loss Valuation Report & Appraisal Clause Demand', description: `Forensic vehicle valuation for ${vehicleInfo}` },
          unit_amount: 14900,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/builder?canceled=true`,
      customer_email: userEmail,
      metadata: { service: 'AUTOINSURANCE_VALUATION', vehicle: vehicleInfo }
    });
    return res.status(200).json({ url: session.url });
  } catch (error) {
    return res.status(500).json({ error: 'Checkout failed.' });
  }
}
