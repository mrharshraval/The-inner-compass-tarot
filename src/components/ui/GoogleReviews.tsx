"use client"

import { Star } from "lucide-react"

interface Review {
    name: string
    rating: number
    text: string
    date: string
}

const reviews: Review[] = [
    {
        name: "Sarah M.",
        rating: 5,
        text: "Preeti's reading was incredibly insightful. She helped me gain clarity on a difficult career decision. Highly recommend!",
        date: "2 weeks ago"
    },
    {
        name: "Michael R.",
        rating: 5,
        text: "Amazing experience! The reading was accurate and gave me the guidance I needed. Very professional and compassionate.",
        date: "1 month ago"
    },
    {
        name: "Jennifer L.",
        rating: 5,
        text: "I've had multiple readings with Preeti and each one has been transformative. She has a true gift.",
        date: "2 months ago"
    }
]

export function GoogleReviews() {
    const averageRating = 5.0
    const totalReviews = 47

    return (
        <section className="py-24 px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-midnight/40 mb-4 block">
                        Testimonials
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-brand-indigo mb-6">
                        What Clients Say
                    </h2>

                    {/* Google Rating Summary */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-5xl font-bold text-brand-indigo">{averageRating}</span>
                            <div>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 fill-brand-gold text-brand-gold"
                                        />
                                    ))}
                                </div>
                                <p className="text-sm text-brand-midnight/60 mt-1">
                                    Based on {totalReviews} Google reviews
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-brand-moonlight p-8 rounded-3xl border border-brand-indigo/10 hover:border-brand-lavender/50 transition-all duration-300"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-brand-gold text-brand-gold"
                                    />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-brand-midnight/70 leading-relaxed mb-6">
                                "{review.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-between pt-4 border-t border-brand-midnight/5">
                                <span className="font-medium text-brand-indigo">{review.name}</span>
                                <span className="text-xs text-brand-midnight/40">{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Google Business Link */}
                <div className="text-center mt-12">
                    <a
                        href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand-indigo hover:text-brand-lavender transition-colors text-sm font-medium"
                    >
                        <span>View all reviews on Google</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
