"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Building2, Phone, Mail, MapPin, Map, FileText, Globe, School, Trophy, Sparkles } from "lucide-react"
import { toast } from "sonner"

const formSchema = z.object({
    fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
    organizationName: z.string().min(2, { message: "Organization name is required" }),
    phoneNumber: z.string().min(6, { message: "Valid phone number is required" }),
    email: z.string().email({ message: "Valid email address is required" }),
    address: z.string().min(5, { message: "Address is required" }),
    state: z.string().min(2, { message: "State is required" }),
    city: z.string().min(2, { message: "City is required" }),
    gstin: z.string().optional(),
    sector: z.string({ required_error: "Please select a sector" }),
    website: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
    doctorate: z.enum(["Yes", "No"], { required_error: "Please select an option" }),
    forbes: z.enum(["Yes", "No"], { required_error: "Please select an option" }),
})

type FormValues = z.infer<typeof formSchema>

export default function NominationForm() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            organizationName: "",
            phoneNumber: "",
            email: "",
            address: "",
            state: "",
            city: "",
            gstin: "",
            sector: "",
            website: "",
            doctorate: undefined,
            forbes: undefined,
        },
    })

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)

        try {
            // Send data to the API endpoint
            const response = await fetch('/api/nominations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.message || 'Failed to submit nomination')
            }

            toast("Your nomination has been successfully submitted.")
            form.reset()
            window.location.href = "/payments/payment";
            await new Promise((resolve) => setTimeout(resolve, 1500))
        } catch (error) {
            console.error('Submission error:', error)
            toast(error instanceof Error ? error.message : "There was an error submitting your nomination. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 py-12 px-4">
            <div
                className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJzdGFycyIgd2lkdGg9IjcwIiBoZWlnaHQ9IjcwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIGZpbGw9InRyYW5zcGFyZW50Ii8+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNzdGFycykiLz48L3N2Zz4=')]"
                style={{ opacity: 0.2, pointerEvents: 'none' }}
            ></div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 mb-2">
                        Golden Conference Awards
                    </h1>
                    <p className="text-gray-300">Recognizing excellence and innovation</p>
                </div>

                <Card className="w-full bg-gray-900/70 backdrop-blur-sm border-0 shadow-[0_0_15px_rgba(255,215,0,0.3)] overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400"></div>
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

                    <CardHeader className="space-y-2 text-center pb-8 border-b border-gray-800">
                        <div className="mx-auto bg-gradient-to-br from-amber-400 to-yellow-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                            <Trophy className="h-8 w-8 text-gray-900" />
                        </div>
                        <CardTitle className="text-3xl font-bold text-white">Nomination Form</CardTitle>
                        <CardDescription className="text-lg text-gray-300">
                            Submit your nomination for the Golden Conference Awards
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-8">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-lg font-medium mb-4 text-white flex items-center">
                                            <User className="h-5 w-5 mr-2 text-amber-400" />
                                            Personal Information
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Personal info fields */}
                                            <FormField
                                                control={form.control}
                                                name="fullName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="flex items-center gap-2 text-gray-300">
                                                            <User className="h-4 w-4 text-amber-400" /> Full Name
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Enter your full name"
                                                                {...field}
                                                                className="bg-gray-800/50 border-gray-700 text-white focus:border-amber-400 focus:ring-amber-400/20"
                                                            />
                                                        </FormControl>
                                                        <FormMessage className="text-amber-400" />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="organizationName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="flex items-center gap-2 text-gray-300">
                                                            <Building2 className="h-4 w-4 text-amber-400" /> Organization Name
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Enter organization name"
                                                                {...field}
                                                                className="bg-gray-800/50 border-gray-700 text-white focus:border-amber-400 focus:ring-amber-400/20"
                                                            />
                                                        </FormControl>
                                                        <FormMessage className="text-amber-400" />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="phoneNumber"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="flex items-center gap-2 text-gray-300">
                                                            <Phone className="h-4 w-4 text-amber-400" /> Phone Number
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="tel"
                                                                placeholder="Enter phone number"
                                                                {...field}
                                                                className="bg-gray-800/50 border-gray-700 text-white focus:border-amber-400 focus:ring-amber-400/20"
                                                            />
                                                        </FormControl>
                                                        <FormMessage className="text-amber-400" />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="flex items-center gap-2 text-gray-300">
                                                            <Mail className="h-4 w-4 text-amber-400" /> Email Address
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="email"
                                                                placeholder="Enter email address"
                                                                {...field}
                                                                className="bg-gray-800/50 border-gray-700 text-white focus:border-amber-400 focus:ring-amber-400/20"
                                                            />
                                                        </FormControl>
                                                        <FormMessage className="text-amber-400" />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    {/* Rest of the form remains the same... */}
                                    <div>
                                        <h3 className="text-lg font-medium mb-4 text-white flex items-center">
                                            <MapPin className="h-5 w-5 mr-2 text-amber-400" />
                                            Address Information
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Address fields */}
                                            <FormField
                                                control={form.control}
                                                name="address"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="flex items-center gap-2 text-gray-300">
                                                            <MapPin className="h-4 w-4 text-amber-400" /> Address
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Enter your address"
                                                                {...field}
                                                                className="bg-gray-800/50 border-gray-700 text-white focus:border-amber-400 focus:ring-amber-400/20"
                                                            />
                                                        </FormControl>
                                                        <FormMessage className="text-amber-400" />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="state"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="flex items-center gap-2 text-gray-300">
                                                            <Map className="h-4 w-4 text-amber-400" /> State
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Enter state"
                                                                {...field}
                                                                className="bg-gray-800/50 border-gray-700 text-white focus:border-amber-400 focus:ring-amber-400/20"
                                                            />
                                                        </FormControl>
                                                        <FormMessage className="text-amber-400" />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="city"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="flex items-center gap-2 text-gray-300">
                                                            <MapPin className="h-4 w-4 text-amber-400" /> City
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Enter city"
                                                                {...field}
                                                                className="bg-gray-800/50 border-gray-700 text-white focus:border-amber-400 focus:ring-amber-400/20"
                                                            />
                                                        </FormControl>
                                                        <FormMessage className="text-amber-400" />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="gstin"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="flex items-center gap-2 text-gray-300">
                                                            <FileText className="h-4 w-4 text-amber-400" /> GSTIN
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Enter GSTIN (optional)"
                                                                {...field}
                                                                className="bg-gray-800/50 border-gray-700 text-white focus:border-amber-400 focus:ring-amber-400/20"
                                                            />
                                                        </FormControl>
                                                        <FormMessage className="text-amber-400" />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium mb-4 text-white flex items-center">
                                            <Building2 className="h-5 w-5 mr-2 text-amber-400" />
                                            Organization Details
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Organization fields */}
                                            <FormField
                                                control={form.control}
                                                name="sector"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="flex items-center gap-2 text-gray-300">
                                                            <Building2 className="h-4 w-4 text-amber-400" /> Sector
                                                        </FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white focus:ring-amber-400/20">
                                                                    <SelectValue placeholder="Select Sector" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent className="bg-gray-800 border-gray-700 text-white">
                                                                <SelectItem value="Technology">Technology</SelectItem>
                                                                <SelectItem value="Healthcare">Healthcare</SelectItem>
                                                                <SelectItem value="Fintech">Fintech</SelectItem>
                                                                <SelectItem value="Edtech">Edtech</SelectItem>
                                                                <SelectItem value="Real Estate">Real Estate</SelectItem>
                                                                <SelectItem value="Automobile">Automobile</SelectItem>
                                                                <SelectItem value="Agriculture">Agriculture</SelectItem>
                                                                <SelectItem value="Tourism">Tourism</SelectItem>
                                                                <SelectItem value="Retail">Retail</SelectItem>
                                                                <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage className="text-amber-400" />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="website"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="flex items-center gap-2 text-gray-300">
                                                            <Globe className="h-4 w-4 text-amber-400" /> Website
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="url"
                                                                placeholder="Enter website URL (optional)"
                                                                {...field}
                                                                className="bg-gray-800/50 border-gray-700 text-white focus:border-amber-400 focus:ring-amber-400/20"
                                                            />
                                                        </FormControl>
                                                        <FormMessage className="text-amber-400" />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <h3 className="text-lg font-medium mb-4 text-white flex items-center">
                                        <Sparkles className="h-5 w-5 mr-2 text-amber-400" />
                                        Additional Options
                                    </h3>

                                    <FormField
                                        control={form.control}
                                        name="doctorate"
                                        render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel className="flex items-center gap-2 text-gray-300">
                                                    <School className="h-4 w-4 text-amber-400" /> Are you interested in applying for an Honorary
                                                    Doctorate?
                                                </FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex flex-row space-x-4"
                                                    >
                                                        <div className="flex items-center space-x-2 border border-gray-700 bg-gray-800/30 rounded-md px-4 py-2 hover:bg-gray-800/70 transition-colors">
                                                            <RadioGroupItem
                                                                value="Yes"
                                                                id="doctorateYes"
                                                                className="text-amber-400 border-gray-600"
                                                            />
                                                            <FormLabel htmlFor="doctorateYes" className="font-normal cursor-pointer text-gray-300">
                                                                Yes
                                                            </FormLabel>
                                                        </div>
                                                        <div className="flex items-center space-x-2 border border-gray-700 bg-gray-800/30 rounded-md px-4 py-2 hover:bg-gray-800/70 transition-colors">
                                                            <RadioGroupItem value="No" id="doctorateNo" className="text-amber-400 border-gray-600" />
                                                            <FormLabel htmlFor="doctorateNo" className="font-normal cursor-pointer text-gray-300">
                                                                No
                                                            </FormLabel>
                                                        </div>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage className="text-amber-400" />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="forbes"
                                        render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel className="flex items-center gap-2 text-gray-300">
                                                    <Trophy className="h-4 w-4 text-amber-400" /> Are you interested in being featured in Forbes
                                                    India magazine?
                                                </FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex flex-row space-x-4"
                                                    >
                                                        <div className="flex items-center space-x-2 border border-gray-700 bg-gray-800/30 rounded-md px-4 py-2 hover:bg-gray-800/70 transition-colors">
                                                            <RadioGroupItem value="Yes" id="forbesYes" className="text-amber-400 border-gray-600" />
                                                            <FormLabel htmlFor="forbesYes" className="font-normal cursor-pointer text-gray-300">
                                                                Yes
                                                            </FormLabel>
                                                        </div>
                                                        <div className="flex items-center space-x-2 border border-gray-700 bg-gray-800/30 rounded-md px-4 py-2 hover:bg-gray-800/70 transition-colors">
                                                            <RadioGroupItem value="No" id="forbesNo" className="text-amber-400 border-gray-600" />
                                                            <FormLabel htmlFor="forbesNo" className="font-normal cursor-pointer text-gray-300">
                                                                No
                                                            </FormLabel>
                                                        </div>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage className="text-amber-400" />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full py-6 text-lg font-medium mt-8 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-gray-900 shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                                            Submitting...
                                        </div>
                                    ) : (
                                        "Submit Nomination"
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>

                <div className="text-center mt-6 text-gray-400 text-sm">
                    <p>© 2025 Golden Conference Awards. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}