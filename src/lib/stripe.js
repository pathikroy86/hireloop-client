import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1TmNO06wamBNBdGa7ZaNBKEV',
    'seeker_premium': 'price_1TmOg66wamBNBdGanB2lzM4k',
    'recruiter_growth': 'price_1TmOmC6wamBNBdGacanc1LtF',
    'recruiter_enterprise': 'price_1TmOoS6wamBNBdGa2jXzq2Ov'
}