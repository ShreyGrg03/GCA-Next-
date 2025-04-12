import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

export async function POST(request: NextRequest) {
    try {
        console.log("Creating order...")
        const body = await request.json()
        console.log("Body: ", body)
        const order = await razorpay.orders.create({
            amount: 2500 * 100,
            currency: "INR",
            receipt: "receipt_" + Math.random().toString(36).substring(7)
        })
        return NextResponse.json({ orderId: order.id }, { status: 200 })
    } catch (error) {
        console.error(" "+error);
    }
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
}