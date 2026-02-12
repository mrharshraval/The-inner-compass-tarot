"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Calendar, Clock, User, Mail, MessageSquare } from "lucide-react"

export function BookingForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "clarity",
        date: "",
        time: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSuccess(true)
        console.log("Form submitted:", formData)
    }

    if (isSuccess) {
        return (
            <div className="text-center py-16 px-6">
                <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-purple">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="font-serif text-3xl text-brand-indigo mb-4">Request Received</h3>
                <p className="text-brand-black/70 mb-8 max-w-md mx-auto">
                    Thank you, {formData.name}. I have received your booking request for the {formData.service === 'clarity' ? 'Clarity Reading' : 'Deep Dive'}. I will be in touch shortly to confirm the appointment.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline">
                    Book Another Session
                </Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-brand-black/70 uppercase tracking-wide">Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-black/40" />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-brand-black/10 rounded-xl focus:outline-none focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/50 transition-all placeholder:text-brand-black/20"
                            placeholder="Your name"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-brand-black/70 uppercase tracking-wide">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-black/40" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-brand-black/10 rounded-xl focus:outline-none focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/50 transition-all placeholder:text-brand-black/20"
                            placeholder="your@email.com"
                        />
                    </div>
                </div>
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-brand-black/70 uppercase tracking-wide">Service Type</label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-brand-black/10 rounded-xl focus:outline-none focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/50 transition-all appearance-none"
                >
                    <option value="clarity">The Clarity Reading (30 mins - $45)</option>
                    <option value="deep-dive">The Deep Dive (60 mins - $80)</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium text-brand-black/70 uppercase tracking-wide">Preferred Date</label>
                    <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-black/40" />
                        <input
                            type="date"
                            id="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-brand-black/10 rounded-xl focus:outline-none focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/50 transition-all text-brand-black/80"
                        />
                    </div>
                </div>

                {/* Time */}
                <div className="space-y-2">
                    <label htmlFor="time" className="text-sm font-medium text-brand-black/70 uppercase tracking-wide">Preferred Time</label>
                    <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-black/40" />
                        <select
                            id="time"
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-brand-black/10 rounded-xl focus:outline-none focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/50 transition-all appearance-none text-brand-black/80"
                        >
                            <option value="">Select a time...</option>
                            <option value="morning">Morning (9am - 12pm)</option>
                            <option value="afternoon">Afternoon (12pm - 4pm)</option>
                            <option value="evening">Evening (4pm - 8pm)</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-brand-black/70 uppercase tracking-wide">Intention / Questions</label>
                <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-brand-black/40" />
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-brand-black/10 rounded-xl focus:outline-none focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/50 transition-all placeholder:text-brand-black/20 resize-none"
                        placeholder="Briefly describe what you're seeking clarity on..."
                    />
                </div>
            </div>

            <Button
                type="submit"
                className={`w-full py-6 text-lg rounded-xl shadow-lg transition-all duration-300 ${isSubmitting ? 'opacity-80 cursor-wait' : 'hover:-translate-y-1 shadow-brand-purple/20'}`}
                disabled={isSubmitting}
            >
                {isSubmitting ? "Submitting Request..." : "Request Session"}
            </Button>

            <p className="text-center text-xs text-brand-black/40 mt-4">
                *Payment details will be sent upon confirmation.
            </p>
        </form>
    )
}
