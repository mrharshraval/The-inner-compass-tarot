"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowRight, Sun, Sparkles, RefreshCw } from "lucide-react"
import { TAROT_DECK, TarotCard as TarotCardType } from "@/data/tarot-deck"
import { TarotCard } from "@/components/ui/TarotCard"
import { cn } from "@/lib/utils"

export function Hero() {
    const [deck, setDeck] = useState<TarotCardType[]>([])
    const [drawnCards, setDrawnCards] = useState<TarotCardType[]>([])
    const [isShuffling, setIsShuffling] = useState(false)
    const [resetKey, setResetKey] = useState(0) // Forces instant remount on reset
    const [revealedIndices, setRevealedIndices] = useState<number[]>([])

    // Initialize and Shuffle Deck
    useEffect(() => {
        shuffleDeck()
    }, [])

    const shuffleDeck = () => {
        setIsShuffling(true)
        setDrawnCards([])
        setRevealedIndices([])

        // Clear old deck (triggers exit animation)
        setDeck([])

        // Wait for exit animation, then show new shuffled deck
        setTimeout(() => {
            const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5)
            setDeck(shuffled) // New random deck with entrance animation
            setResetKey(prev => prev + 1) // Force remount after deck is set
            setIsShuffling(false)
        }, 200) // Wait for exit animation to complete
    }

    const handleDrawCard = (index: number) => {
        if (drawnCards.length >= 3 || isShuffling) return

        const card = deck[index]
        // Check if already drawn (unlikely with index but good safety)
        if (drawnCards.some(c => c.id === card.id)) return

        setDrawnCards(prev => [...prev, card])
    }

    const handleRevealCard = (index: number) => {
        if (!revealedIndices.includes(index)) {
            setRevealedIndices(prev => [...prev, index])
        }
    }

    const SLOTS = [
        { label: "Persona", delay: 0 },
        { label: "Obstacle", delay: 0.1 },
        { label: "Solution", delay: 0.2 }
    ]

    const isReadingComplete = drawnCards.length === 3

    return (
        <section className="relative w-full flex flex-col items-center pt-24 pb-20 overflow-hidden bg-[#F9F9F9] bg-[image:var(--image-grid-pattern)] min-h-[90vh]">

            {/* Main Content Container - Open Layout (Borderless) */}
            <div className="relative w-full max-w-[1400px] p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 z-10 min-h-[600px]">

                {/* LEFT: Typography / Reading Result */}
                <div className="relative w-full md:w-1/2 text-center md:text-left space-y-6 z-30">
                    <AnimatePresence mode="wait">
                        {!isReadingComplete ? (
                            <motion.div
                                key="intro"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm text-xs font-medium uppercase tracking-widest text-brand-black/60 mb-2">
                                    <span className="w-2 h-2 rounded-full bg-brand-lavender animate-pulse" />
                                    {drawnCards.length === 0 ? "Daily Draw" : "Seek & Find"}
                                </div>

                                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-brand-black leading-[0.9] tracking-tight">
                                    The inner <br />
                                    <span className="font-light italic text-5xl md:text-6xl lg:text-7xl">compass tarot</span>
                                </h1>

                                <p className="text-lg md:text-xl text-brand-black/70 max-w-lg mx-auto md:mx-0 font-sans font-light leading-relaxed">
                                    {drawnCards.length === 0
                                        ? "Focus on a question. Draw 3 cards to reveal your path."
                                        : `Card ${drawnCards.length + 1} of 3: Select for ${SLOTS[drawnCards.length].label}...`
                                    }
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="reading"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-6"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-brand-sand text-xs font-medium uppercase tracking-widest text-brand-black/60 mb-2">
                                    Reading Complete
                                </div>
                                <h2 className="font-serif text-4xl md:text-5xl text-brand-black leading-tight">
                                    Your Path Revealed
                                </h2>
                                <p className="text-lg text-brand-black/80 font-serif italic leading-relaxed">
                                    "The cards suggest a journey from {drawnCards[0]?.name} through {drawnCards[1]?.name}, leading to {drawnCards[2]?.name}."
                                </p>
                                <div className="pt-4 flex gap-4 justify-center md:justify-start">
                                    <Button className="h-12 px-8 rounded-xl bg-brand-black text-white" onClick={shuffleDeck}>
                                        <RefreshCw className="w-4 h-4 mr-2" /> New Reading
                                    </Button>
                                    <Button variant="outline" className="h-12 px-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none transition-all">
                                        <span className="mr-2">✨</span> Book Full Reading
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* RIGHT: Visuals / 3-Card Spread Slots */}
                <div className="relative w-full md:w-1/2 flex flex-col items-center justify-between min-h-[400px] z-10 pt-12">

                    {/* Top: The 3 Slots */}
                    <div className="relative z-20 flex justify-center items-end gap-2 md:gap-4 w-full">
                        {SLOTS.map((slot, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-3">
                                <div className="text-[10px] md:text-xs font-bold text-brand-black/40 uppercase tracking-widest">{slot.label}</div>
                                <div className="relative w-24 h-40 md:w-36 md:h-56 flex items-center justify-center rounded-xl bg-black/5 shadow-inner">
                                    <AnimatePresence mode="popLayout">
                                        {drawnCards[idx] && (
                                            <motion.div
                                                layoutId={`card-${drawnCards[idx].id}`}
                                                className="w-full h-full z-10"
                                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.8, // MATCH DECK EXIT DURATION
                                                    ease: "circOut", // MATCH DECK EXIT CURVE (Smooth glide, no wobble)
                                                    // Separate scale spring for tactile landing 'thud'
                                                    scale: { type: "spring", stiffness: 300, damping: 25 }
                                                }}
                                            >
                                                <TarotCard
                                                    card={drawnCards[idx]}
                                                    isFaceUp={revealedIndices.includes(idx)}
                                                    onClick={() => handleRevealCard(idx)}
                                                    className="w-full h-full text-[10px] md:text-xs shadow-md"
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Placeholder Text */}
                                    {!drawnCards[idx] && (
                                        <div className="absolute inset-0 flex items-center justify-center text-brand-black/20">
                                            <span className="text-2xl opacity-50">+</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FULL WIDTH DECK CONTAINER - Moved outside main content card */}
            <div className="absolute bottom-0 left-0 right-0 h-[240px] z-50 flex items-end justify-center overflow-visible pointer-events-none pb-6">
                <AnimatePresence>
                    {useMemo(() => {
                        const visibleDeck = deck
                            .filter(card => !drawnCards.some(d => d.id === card.id))
                            .slice(0, 45)

                        return visibleDeck.map((card, i) => {
                            // Arc Spread (Fan Shape)
                            const totalCards = visibleDeck.length
                            const centerIndex = (totalCards - 1) / 2

                            const currentAngle = -90 + (i - centerIndex) * 1.5
                            const radian = (currentAngle * Math.PI) / 180
                            const radius = 2200
                            const x = Math.cos(radian) * radius
                            const y = (radius * Math.sin(radian)) + radius + 30
                            const rotate = currentAngle + 90

                            return (
                                <motion.div
                                    key={`${card.id}-${resetKey}`}
                                    layoutId={`card-${card.id}`}
                                    className="absolute bottom-0 left-1/2 origin-bottom cursor-grab active:cursor-grabbing will-change-transform pointer-events-auto"
                                    style={{
                                        marginLeft: -56, // Half of w-28 (112px / 2)
                                        zIndex: i,
                                        x: x,
                                        y: y,
                                        rotate: rotate
                                    }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                                    transition={{ delay: i * 0.01, duration: 0.3, ease: "easeOut" }}
                                    whileHover={{
                                        scale: 1.15,
                                        y: -30,
                                        rotate: rotate,
                                        filter: "drop-shadow(0 15px 30px rgba(91,58,143,0.2))",
                                        transition: { duration: 0.2, ease: "easeOut" }
                                    }}
                                >
                                    <div onClick={(e) => {
                                        e.stopPropagation()
                                        console.log("Click Event on Card:", card.id)
                                        const originalIndex = deck.findIndex(c => c.id === card.id)
                                        handleDrawCard(originalIndex)
                                    }}>
                                        {/* Spine View Card */}
                                        <div
                                            className="w-28 h-48 bg-[#5D2E86] rounded-xl relative overflow-hidden group transition-all duration-200 shadow-[0_4px_12px_rgba(45,27,78,0.4)] border border-white/20"
                                        >
                                            <div className="absolute inset-0 bg-[url('/tarot-back-full.png')] bg-cover bg-center bg-no-repeat" />

                                            {/* Hover Highlight */}
                                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors pointer-events-none" />
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }, [deck, drawnCards, resetKey])}
                </AnimatePresence>

                {/* Deck Instruction - Repositioned */}
                {drawnCards.length < 3 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="absolute bottom-[180px] left-0 right-0 text-center text-brand-black/40 text-xs font-semibold uppercase tracking-[0.25em] pointer-events-none"
                    >
                        Select {3 - drawnCards.length} card{3 - drawnCards.length !== 1 ? "s" : ""}
                    </motion.div>
                )}
            </div>

        </section>
    )
}
