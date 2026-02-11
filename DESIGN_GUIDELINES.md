# The Inner Compass Tarot - Design Guidelines

## Brand Identity
A modern tarot reading business that balances mysticism with professionalism. The design should feel:
- **Mystical yet Grounded** - Spiritual without being overwhelming
- **Premium & Trustworthy** - Professional service quality
- **Calm & Contemplative** - Inviting introspection
- **Modern & Accessible** - Not overly esoteric

---

## Color Palette

### Primary Colors

**Deep Indigo** `#2D1B4E` (brand-indigo)
- Primary brand color
- Represents intuition, wisdom, third eye chakra
- Use for: Headers, important CTAs, card backs

**Soft Lavender** `#B8A4D4` (brand-lavender)
- Secondary accent color
- Represents spirituality, crown chakra, mysticism
- Use for: Hover states, highlights, subtle accents

**Moonlight White** `#FAFAFA` (brand-moonlight)
- Primary background color
- Represents clarity, purity, illumination
- Use for: Main backgrounds, cards, clean spaces

**Midnight Black** `#0A0A0A` (brand-midnight)
- Primary text color
- Represents mystery, the unknown, shadow work
- Use for: Body text, borders, contrast elements

### Accent Colors (Use Sparingly)

**Celestial Gold** `#D4AF37` (brand-gold)
- Represents divine guidance, enlightenment
- Use for: Premium badges, special highlights, stars

**Deep Purple** `#5B3A8F` (brand-purple)
- Deeper mystical tone
- Use for: Dark cards, alternative backgrounds

**Soft Gray** `#E8E8E8` (brand-gray)
- Neutral separator
- Use for: Subtle backgrounds, borders

---

## Typography

### Font Families
- **Headings**: Serif font (Playfair Display, Lora, or similar)
  - Evokes classic tarot imagery and timeless wisdom
- **Body**: Sans-serif (Inter, Outfit, or similar)
  - Modern, readable, accessible

### Hierarchy
```
H1: 5xl-7xl (48-72px) - Serif, Indigo or Black
H2: 4xl-5xl (36-48px) - Serif, Indigo or Black
H3: 2xl-3xl (24-30px) - Serif, Black
Body: base-lg (16-18px) - Sans, Black/60-70%
Small: sm-xs (12-14px) - Sans, Black/40-60%
```

---

## Component Patterns

### Cards
**Tarot Deck Cards:**
- Background: Deep Indigo gradient
- Border: Soft gold glow
- Back design: Mystical patterns (moons, stars, sacred geometry)

**Service Cards:**
- Background: White with subtle lavender tint
- Border: Indigo/10%
- Hover: Lift with soft shadow, lavender border

**Content Cards:**
- Background: White
- Border: Gray or Indigo/5%
- Padding: Generous (p-8 to p-12)
- Rounded: 2xl to 3xl

### Buttons
**Primary CTA:**
- Background: Deep Indigo
- Text: White
- Hover: Lighter indigo or gold accent
- Rounded: Full (pill shape)

**Secondary:**
- Background: Transparent
- Border: Indigo
- Text: Indigo
- Hover: Lavender background

**Premium:**
- Background: Celestial Gold
- Text: Midnight Black
- Hover: Brighter gold
- Badge: "Most Popular" in gold

### Navigation
**Navbar:**
- Background: Transparent → White/95% on scroll
- Text: Midnight Black
- Active/Hover: Lavender
- Z-index: 100 (always on top)

**Footer:**
- Background: Deep Indigo or Midnight Black
- Text: Moonlight White/60%
- Links: White → Lavender on hover

---

## Spacing & Layout

### Container Widths
- Max width: 1280px (container)
- Content: 768px (prose)
- Wide: 1024px (grids)

### Section Padding
- Desktop: py-24 to py-32
- Mobile: py-16 to py-20

### Grid Gaps
- Cards: gap-8 to gap-12
- Content: gap-6 to gap-8

---

## Imagery & Icons

### Photography Style
- Moody, atmospheric lighting
- Deep shadows with soft highlights
- Mystical elements (candles, crystals, cards)
- Muted, desaturated tones

### Icons
- Line style (not filled)
- Stroke width: 1.5-2px
- Size: 20-24px standard
- Color: Inherit from text

### Tarot Card Design
- Classic Rider-Waite aesthetic
- Gold foil accents
- Deep indigo backs with celestial patterns
- Soft glow effects

---

## Animation Principles

### Timing
- Fast: 150-200ms (micro-interactions)
- Medium: 300-400ms (cards, modals)
- Slow: 500-600ms (page transitions)

### Easing
- Default: ease-out
- Bouncy: spring (for special moments)
- Smooth: ease-in-out (for continuous motion)

### Effects
- **Hover**: Subtle lift (-2 to -4px), shadow, color shift
- **Card Flip**: 3D rotation with perspective
- **Entrance**: Fade + slight scale (0.95 → 1)
- **Exit**: Fade + slight scale (1 → 0.95)

---

## Accessibility

### Contrast Ratios
- Body text: Minimum 4.5:1
- Large text: Minimum 3:1
- Interactive elements: Clear focus states

### Focus States
- Outline: 2px solid Lavender
- Offset: 2px
- Rounded: Match element

### Motion
- Respect `prefers-reduced-motion`
- Provide static alternatives

---

## Responsive Breakpoints

```
sm: 640px   (Mobile landscape)
md: 768px   (Tablet)
lg: 1024px  (Desktop)
xl: 1280px  (Large desktop)
```

---

## Usage Examples

### Hero Section
```tsx
<section className="py-32 bg-gradient-to-b from-brand-moonlight to-brand-lavender/10">
  <h1 className="font-serif text-7xl text-brand-indigo">
    Illuminate Your Path
  </h1>
</section>
```

### Service Card
```tsx
<div className="bg-white p-10 rounded-3xl border border-brand-indigo/10 
                hover:border-brand-lavender hover:-translate-y-1 
                transition-all duration-300">
  <h3 className="font-serif text-2xl text-brand-indigo">
    The Deep Dive
  </h3>
</div>
```

### CTA Button
```tsx
<button className="bg-brand-indigo text-white px-8 py-3 rounded-full
                   hover:bg-brand-purple transition-colors">
  Book Your Reading
</button>
```

---

## Brand Voice

### Tone
- Warm and welcoming
- Wise but not preachy
- Empowering, not predictive
- Grounded in reality

### Language
- Use: "Illuminate", "Clarity", "Journey", "Wisdom", "Guidance"
- Avoid: "Fortune telling", "Predict", "Destiny", "Fate"

---

## Implementation Checklist

- [ ] Update Tailwind config with new color palette
- [ ] Replace current purple with Deep Indigo
- [ ] Add Celestial Gold for premium elements
- [ ] Update all backgrounds to Moonlight White
- [ ] Redesign tarot card backs with mystical patterns
- [ ] Add subtle gradients to hero sections
- [ ] Implement gold accents on premium features
- [ ] Update button styles with new colors
- [ ] Ensure all text meets contrast requirements
- [ ] Add mystical icon set (moon phases, stars, etc.)
