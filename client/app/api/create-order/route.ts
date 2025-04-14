import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

// Initialize Razorpay with environment variables
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

export async function POST(request: NextRequest) {
    try {
        console.log("Creating order...");
        console.log(request.body);
        const order = await razorpay.orders.create({
            amount: 2500 * 100, // Amount in smallest currency unit (paise)
            currency: "INR",
            receipt: "receipt_" + Math.random().toString(36).substring(7)
        });
        
        console.log("Order created:", order.id);
        return NextResponse.json({ orderId: order.id }, { status: 200 });
    } catch (error) {
        console.error("Error creating order:", error);
        return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
    }
}