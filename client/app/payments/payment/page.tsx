"use client"

import { useState, useEffect } from "react"
import Script from "next/script"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { CreditCard, CheckCircle, AlertCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "sonner"

interface RazorpayResponse {
    razorpay_payment_id: string
    razorpay_order_id: string
    razorpay_signature: string
}

interface RazorpayOptions {
    key: string | undefined
    amount: number
    currency: string
    name: string
    description: string
    order_id: string
    handler: (response: RazorpayResponse) => void
    prefill: {
        name: string
        email: string
        contact: string
    }
    notes: {
        address: string
    }
    theme: {
        color: string
    }
    modal: {
        ondismiss: () => void
    }
}

interface RazorpayInstance {
    open: () => void
}

declare global {
    interface Window {
        Razorpay: new (options: RazorpayOptions) => RazorpayInstance
    }
}
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(10, { message: "Please enter a valid phone number." }),
    address: z.string().min(5, { message: "Address must be at least 5 characters." }),
})

export default function RazorpayPage() {
    const AMOUNT = 2500 // Amount in INR
    const [isProcessing, setIsProcessing] = useState(false)
    const [paymentStatus, setPaymentStatus] = useState<"idle" | "success" | "error">("idle")
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
        },
    })

    // Effect to handle redirect after successful payment
    useEffect(() => {
        if (paymentStatus === "success") {
            // Show success message for a moment before redirecting
            const redirectTimeout = setTimeout(() => {
                router.push("/afterpayment")
            }, 1500)
            
            return () => clearTimeout(redirectTimeout)
        }
    }, [paymentStatus, router])

    const handlePayment = async (values: z.infer<typeof formSchema>) => {
        try {
            setIsProcessing(true)
            setPaymentStatus("idle")

            const response = await fetch("/api/create-order", {
                method: "POST",
            })

            if (!response.ok) {
                throw new Error("Failed to create order")
            }

            const data = await response.json()

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: AMOUNT * 100,
                currency: "INR",
                name: "Your Company Name",
                description: "Premium Product Purchase",
                order_id: data.orderId,
                handler: (response: RazorpayResponse) => {
                    setPaymentStatus("success")
                    toast("Payment Successful", {
                        description: `Payment ID: ${response.razorpay_payment_id}`,
                    })
                    
                    // The redirect will be handled by the useEffect above
                },
                prefill: {
                    name: values.name,
                    email: values.email,
                    contact: values.phone,
                },
                notes: {
                    address: values.address,
                },
                theme: {
                    color: "#7c3aed",
                },
                modal: {
                    ondismiss: () => {
                        setIsProcessing(false)
                    },
                },
            }

            const razorpay = new window.Razorpay(options)
            razorpay.open()
        } catch (error) {
            console.error("Error during payment:", error)
            setPaymentStatus("error")
            toast("Payment Failed", {
                description: "There was an error processing your payment. Please try again.",
            })
            setIsProcessing(false)
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3 },
        },
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
            <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />

            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-md">
                <motion.div variants={itemVariants}>
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-t-lg">
                            <CardTitle className="text-2xl font-bold">Secure Checkout</CardTitle>
                            <CardDescription className="text-purple-100">Complete your purchase securely</CardDescription>
                        </CardHeader>

                        <CardContent className="pt-6">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(handlePayment)} className="space-y-4">
                                    <motion.div variants={itemVariants}>
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Full Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="John Doe" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>

                                    <motion.div variants={itemVariants}>
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" placeholder="john@example.com" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>

                                    <motion.div variants={itemVariants}>
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="9999999999" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>

                                    <motion.div variants={itemVariants}>
                                        <FormField
                                            control={form.control}
                                            name="address"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Address</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="123 Main St, City" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="mt-6">
                                        <Separator className="my-4" />
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-600">Product Price</span>
                                                <span className="font-medium">₹{AMOUNT.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-600">Tax</span>
                                                <span className="font-medium">₹0.00</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-600">Shipping</span>
                                                <span className="font-medium">₹0.00</span>
                                            </div>
                                            <Separator className="my-2" />
                                            <div className="flex justify-between items-center font-bold text-lg">
                                                <span>Total</span>
                                                <span className="text-purple-700">₹{AMOUNT.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="mt-6">
                                        <div className="bg-purple-50 p-3 rounded-md border border-purple-100 flex items-center">
                                            <CreditCard className="h-5 w-5 text-purple-600 mr-2" />
                                            <div>
                                                <p className="text-sm text-gray-700 font-medium">Secure Payment via Razorpay</p>
                                                <p className="text-xs text-gray-500">All payment information is encrypted</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="pt-4">
                                        <Button
                                            type="submit"
                                            disabled={isProcessing}
                                            className="w-full py-6 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-all duration-200 flex items-center justify-center"
                                        >
                                            {isProcessing ? (
                                                <div className="flex items-center justify-center">
                                                    <svg
                                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        ></circle>
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        ></path>
                                                    </svg>
                                                    Processing Payment...
                                                </div>
                                            ) : (
                                                <div className="flex items-center">
                                                    Pay ₹{AMOUNT.toFixed(2)} <ArrowRight className="ml-2 h-5 w-5" />
                                                </div>
                                            )}
                                        </Button>
                                    </motion.div>
                                </form>
                            </Form>
                        </CardContent>

                        <CardFooter className="flex flex-col space-y-2 bg-gray-50 rounded-b-lg">
                            {paymentStatus === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="w-full p-2 bg-green-50 text-green-700 rounded-md flex items-center"
                                >
                                    <CheckCircle className="h-5 w-5 mr-2" />
                                    <span className="text-sm">Payment successful! Redirecting to confirmation page...</span>
                                </motion.div>
                            )}

                            {paymentStatus === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="w-full p-2 bg-red-50 text-red-700 rounded-md flex items-center"
                                >
                                    <AlertCircle className="h-5 w-5 mr-2" />
                                    <span className="text-sm">Payment failed. Please try again or contact support.</span>
                                </motion.div>
                            )}

                            <p className="text-xs text-gray-500 text-center w-full">
                                By clicking &quot;Pay&quot;, you agree to our{" "}
                                <a href="/policy" className="text-purple-600 hover:underline">
                                    terms of service
                                </a>{" "}
                                and{" "}
                                <a href="/policy" className="text-purple-600 hover:underline">
                                    privacy policy
                                </a>
                                .
                            </p>
                        </CardFooter>
                    </Card>
                </motion.div>
            </motion.div>
        </div>
    )
}