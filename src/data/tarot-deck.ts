export type TarotCard = {
    id: number;
    name: string;
    image: string; // Path to card image
    meaning: string;
    isMajor: boolean;
    suit?: 'Wands' | 'Cups' | 'Swords' | 'Pentacles';
};

const MAJOR_ARCANA = [
    { name: "The Fool", meaning: "New beginnings, optimism, trust in life", filename: "young-traveler-cliff-dog.jpg" },
    { name: "The Magician", meaning: "Action, the power to manifest", filename: "robed-figure-altar-elements.jpg" },
    { name: "The High Priestess", meaning: "Inaction, going within, the subconscious", filename: "seated-figure-pillars-scroll-moon.jpg" },
    { name: "The Empress", meaning: "Abundance, nurturing, fertility, life in bloom!", filename: "regal-woman-throne-nature.jpg" },
    { name: "The Emperor", meaning: "Structure, stability, rules and power", filename: "powerful-figure-stone-throne-ram.jpg" },
    { name: "The Hierophant", meaning: "Institutions, tradition, society and its rules", filename: "pope-figure-two-acolytes-pillars.jpg" },
    { name: "The Lovers", meaning: "Sexuality, passion, choice, uniting", filename: "man-woman-garden-angel.jpg" },
    { name: "The Chariot", meaning: "Movement, progress, integration", filename: "armored-figure-chariot-sphinxes.jpg" },
    { name: "Strength", meaning: "Courage, subtle power, integration of animal self", filename: "woman-taming-lion.jpg" },
    { name: "The Hermit", meaning: "Meditation, solitude, consciousness", filename: "old-man-lantern-mountain.jpg" },
    { name: "Wheel of Fortune", meaning: "Cycles, change, ups and downs", filename: "wheel-sphinx-creatures-clouds.jpg" },
    { name: "Justice", meaning: "Fairness, equality, balance", filename: "seated-figure-sword-scales-pillars.jpg" },
    { name: "The Hanged Man", meaning: "Surrender, new perspective, enlightenment", filename: "man-upside-down-tree-halo.jpg" },
    { name: "Death", meaning: "End of a cycle, beginnings, change, metamorphosis", filename: "skeleton-knight-white-horse-flag.jpg" },
    { name: "Temperance", meaning: "Balance, moderation, being sensible", filename: "angel-pouring-water-cups.jpg" },
    { name: "The Devil", meaning: "Addiction, materialism, playfulness", filename: "horned-figure-chains-couple.jpg" },
    { name: "The Tower", meaning: "Sudden upheaval, broken pride, disaster", filename: "tower-lightning-falling-figures.jpg" },
    { name: "The Star", meaning: "Hope, faith, rejuvenation", filename: "woman-pouring-water-stars-bird.jpg" },
    { name: "The Moon", meaning: "Unconscious, illusions, intuition", filename: "moon-face-towers-wolf-dog.jpg" },
    { name: "The Sun", meaning: "Joy, success, celebration, positivity", filename: "sun-face-child-white-horse.jpg" },
    { name: "Judgement", meaning: "Reflection, reckoning, awakening", filename: "angel-trumpet-dead-rising-graves.jpg" },
    { name: "The World", meaning: "Fulfillment, harmony, completion", filename: "dancer-wreath-four-creatures.jpg" },
];

const SUITS = ['Wands', 'Cups', 'Swords', 'Pentacles'] as const;
const RANKS = [
    "Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Page", "Knight", "Queen", "King"
];

// Descriptive filenames for minor arcana mapped by rank
const MINOR_DESCRIPTIONS: Record<string, Record<string, string>> = {
    Wands: {
        Ace: "hand-cloud-flowering-wand.jpg",
        Two: "figure-globe-castle-two-wands.jpg",
        Three: "figure-cliff-three-wands-ships.jpg",
        Four: "canopy-four-wands-celebration.jpg",
        Five: "five-figures-battle-wands.jpg",
        Six: "victor-wreath-horse-six-wands.jpg",
        Seven: "figure-defending-wand-high-ground.jpg",
        Eight: "eight-wands-flying-air.jpg",
        Nine: "wounded-figure-nine-wands-defense.jpg",
        Ten: "figure-carrying-ten-wands-village.jpg",
        Page: "messenger-tall-wand-desert.jpg",
        Knight: "knight-charging-wand-desert.jpg",
        Queen: "queen-throne-lions-sunflower-wand.jpg",
        King: "king-throne-salamander-wand.jpg",
    },
    Cups: {
        Ace: "hand-cloud-overflowing-cup-dove.jpg",
        Two: "couple-exchanging-cups-lion-caduceus.jpg",
        Three: "three-women-raising-cups-garden.jpg",
        Four: "figure-tree-three-cups-hand-cloud.jpg",
        Five: "cloaked-figure-spilled-cups-bridge.jpg",
        Six: "children-garden-cups-flowers.jpg",
        Seven: "silhouette-seven-cups-visions-clouds.jpg",
        Eight: "figure-walking-away-stacked-cups-moon.jpg",
        Nine: "satisfied-figure-nine-cups-arc.jpg",
        Ten: "family-rainbow-ten-cups-home.jpg",
        Page: "messenger-cup-fish-ocean.jpg",
        Knight: "knight-white-horse-offering-cup.jpg",
        Queen: "queen-throne-sea-cup.jpg",
        King: "king-throne-turbulent-sea-cup.jpg",
    },
    Swords: {
        Ace: "hand-cloud-upright-sword-crown.jpg",
        Two: "blindfolded-figure-crossed-swords-moon.jpg",
        Three: "heart-pierced-three-swords-rain.jpg",
        Four: "knight-tomb-three-swords-wall.jpg",
        Five: "figure-three-swords-defeated-figures.jpg",
        Six: "figure-boat-six-swords-ferryman.jpg",
        Seven: "figure-sneaking-five-swords-camp.jpg",
        Eight: "bound-blindfolded-eight-swords.jpg",
        Nine: "figure-bed-head-hands-nine-swords.jpg",
        Ten: "figure-face-down-ten-swords-back.jpg",
        Page: "messenger-upright-sword-windswept.jpg",
        Knight: "knight-charging-sword-stormy.jpg",
        Queen: "queen-throne-upright-sword-clouds.jpg",
        King: "king-throne-upright-sword-butterfly.jpg",
    },
    Pentacles: {
        Ace: "hand-cloud-golden-pentacle-garden.jpg",
        Two: "figure-juggling-two-pentacles-ships.jpg",
        Three: "sculptor-working-archway-figures.jpg",
        Four: "figure-clutching-four-pentacles-city.jpg",
        Five: "two-figures-snow-stained-glass.jpg",
        Six: "merchant-scales-giving-coins.jpg",
        Seven: "farmer-resting-seven-pentacles-bush.jpg",
        Eight: "craftsman-workbench-eight-pentacles.jpg",
        Nine: "woman-falcon-vineyard-nine-pentacles.jpg",
        Ten: "family-dogs-archway-ten-pentacles.jpg",
        Page: "messenger-studying-pentacle-field.jpg",
        Knight: "knight-heavy-horse-pentacle-field.jpg",
        Queen: "queen-throne-garden-pentacle-rabbit.jpg",
        King: "king-throne-bulls-pentacle-castle.jpg",
    }
}

// Meaning keywords for generation context
const SUIT_MEANINGS = {
    Wands: "creativity, action",
    Cups: "emotions, relationships",
    Swords: "intellect, conflict",
    Pentacles: "material aspects, career"
};

export const TAROT_DECK: TarotCard[] = [
    // Major Arcana
    ...MAJOR_ARCANA.map((card, index) => ({
        id: index,
        name: card.name,
        image: `/tarot-cards/major/${card.filename}`,
        meaning: card.meaning,
        isMajor: true
    })),
    // Minor Arcana
    ...SUITS.flatMap((suit, suitIndex) =>
        RANKS.map((rank, rankIndex) => ({
            id: 22 + (suitIndex * 14) + rankIndex,
            name: `${rank} of ${suit}`,
            image: `/tarot-cards/minor/${suit.toLowerCase()}/${MINOR_DESCRIPTIONS[suit][rank]}`,
            meaning: `Energy of ${rank} in the realm of ${SUIT_MEANINGS[suit]}`,
            isMajor: false,
            suit: suit
        }))
    )
];
