'use client'

import { useState, useEffect, useRef } from 'react'
import './Home.css'

/* ============================================================
   HERO
   ============================================================ */
const SLIDES = [
  {
    id: 'video',
    type: 'video',
    bg: '#1a0f05',
    accent: '#f5c4a0',
    announceBg: '#1a0f05',
    announceText: '#f5e0c8',
    announceMsg: 'Free delivery on orders above ₹299 · 100% Natural · FSSAI Certified',
    heroBg: '#1a0f05',
  },
  { type: 'flavour', flavour: 'Jeera',   bg: '#6F4A2D', accent: '#f5deb3', textColor: '#fff8f0', tagline: 'Earthy & Warm',     headline: 'Jeera\nFlavour',   sub: 'The classic Indian spice — bold, aromatic and guilt-free.',       badge: 'High Fibre · 0% Maida · Low GI', imgPlaceholderColor: '#d4873a' },
  { type: 'flavour', flavour: 'Garlic',  bg: '#E1ACAC', accent: '#f4c89a', textColor: '#fff5f0', tagline: 'Bold & Punchy',      headline: 'Garlic\nFlavour',  sub: 'Intense roasted garlic in every crisp, wholesome bite.',         badge: 'High Fibre · 0% Maida · Low GI', imgPlaceholderColor: '#a03535' },
  { type: 'flavour', flavour: 'Moringa', bg: '#004225', accent: '#b5e5a0', textColor: '#f0fff0', tagline: "Nature's Superfood", headline: 'Moringa\nFlavour', sub: 'Packed with nutrients, light on calories, rich in flavour.',      badge: 'High Fibre · 0% Maida · Low GI', imgPlaceholderColor: '#3d7a34' },
  { type: 'flavour', flavour: 'Onion',   bg: '#A888B5', accent: '#f0c4f0', textColor: '#fff0ff', tagline: 'Sweet & Savoury',    headline: 'Onion\nFlavour',   sub: 'Caramelised onion warmth baked into every thin crisp.',          badge: 'High Fibre · 0% Maida · Low GI', imgPlaceholderColor: '#8c4f8c' },
  { type: 'flavour', flavour: 'Methi',   bg: '#FFA55D', accent: '#d4e89a', textColor: '#f5fff0', tagline: 'Distinctly Desi',    headline: 'Methi\nFlavour',   sub: 'The bittersweet charm of fenugreek in a roasted crisp.',         badge: 'High Fibre · 0% Maida · Low GI', imgPlaceholderColor: '#637d25' },
  { type: 'flavour', flavour: 'Curry',   bg: '#468432', accent: '#d4e89a', textColor: '#f5fff0', tagline: 'Distinctly Desi',    headline: 'Curry\nFlavour',   sub: 'Aromatic curry flavour in every crunchy bite.',                  badge: 'High Fibre · 0% Maida · Low GI', imgPlaceholderColor: '#637d25' },
]

const DURATION = 7000

function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const intervalRef = useRef(null)
  const progressRef = useRef(null)

  const goTo = (index) => {
    setCurrent(index)
    setProgress(0)
    setAnimKey(k => k + 1)
  }
  const goNext = () => goTo((current + 1) % SLIDES.length)
  const goPrev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length)

  useEffect(() => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(goNext, DURATION)
    return () => clearInterval(intervalRef.current)
  }, [current])

  useEffect(() => {
    setProgress(0)
    const start = Date.now()
    progressRef.current = setInterval(() => {
      setProgress(Math.min(((Date.now() - start) / DURATION) * 100, 100))
    }, 30)
    return () => clearInterval(progressRef.current)
  }, [current])

  const slide = SLIDES[current]

  return (
    <section className="hero" style={{ '--hero-bg': slide.bg, '--hero-accent': slide.accent }}>
      {/* Progress bar */}
      <div className="hero-progress">
        <div className="hero-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="hero-bg-layer" key={`bg-${current}`} />
      <div className="hero-grain" />

      <div className="hero-inner" key={animKey}>
        {slide.type === 'video' ? (
  /* ── VIDEO SLIDE — full background ── */
  <div className="hero-video-slide">
    {/* Video fills full background */}
    <video
      className="hero-video-bg"
      autoPlay
      muted
      loop
      playsInline
      poster="/images/video-poster.jpg"
    >
      <source src="/videos/brand-story.mp4" type="video/mp4" />
    </video>

    {/* Dark overlay so text is readable */}
    <div className="hero-video-overlay" />

    {/* Centered content over video */}
    <div className="hero-video-content">
      <p className="hero-eyebrow">WIN-DIA · FIBRERICH</p>
      <h1 className="hero-title video-title">
        Start Your<br /><em>Second</em> Inning
      </h1>
      <p className="hero-desc">
        Guilt-free snacking rooted in Indian flavours.<br />
        High fibre. Zero maida. Tested low GI.
      </p>

      {/* Play button to unmute / control video */}
      <button
        className="hero-play-btn"
        onClick={() => setIsPlaying(!isPlaying)}
        aria-label="Play video"
      >
        {isPlaying
          ? <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
          : <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><polygon points="5,3 19,12 5,21"/></svg>
        }
      </button>
      <p className="hero-video-label">Watch Our Story</p>

      <div className="hero-stats">
        <div className="stat">
          <span className="stat-num">0 mg</span>
          <span className="stat-label">Cholestrol</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">Low</span>
          <span className="stat-label">Glycaemic Index</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">5</span>
          <span className="stat-label">Flavours</span>
        </div>
      </div>
      <a href="#shop" className="hero-cta">Shop Now</a>
    </div>
  </div>
) : (
          /* ── FLAVOUR SLIDE ── */
          <div className="hero-flavour-slide">
            <div className="hero-img-wrap">
              <div
                className="hero-product-card"
                style={{ background: `linear-gradient(145deg, ${slide.imgPlaceholderColor}, ${slide.bg})` }}
              >
                <div className="packet-shine" />
                <div className="packet-logo">WIN-DIA</div>
                <div className="packet-sub">FIBRERICH</div>
                <div className="packet-name">Thins</div>
                <div className="packet-flavour">{slide.flavour.toUpperCase()} FLAVOUR</div>
                <div className="packet-badges">
                  <span>High Fibre</span>
                  <span>0% Maida</span>
                  <span>Roasted</span>
                  <span>Low GI</span>
                </div>
                <div className="packet-weight">Net Weight: 40g</div>
              </div>
              <div className="hero-blob blob1" style={{ background: slide.accent }} />
              <div className="hero-blob blob2" style={{ background: slide.accent }} />
            </div>

            <div className="hero-content" style={{ color: slide.textColor }}>
              <p className="hero-eyebrow" style={{ color: slide.accent }}>{slide.tagline}</p>
              <h1 className="hero-title flavour-title">
                {slide.headline.split('\n').map((line, i) => (
                  <span key={i} className={i === 0 ? 'title-small' : 'title-big'}>
                    {line}<br />
                  </span>
                ))}
              </h1>
              <p className="hero-desc">{slide.sub}</p>
              <div className="hero-badge-pill">{slide.badge}</div>
              <div className="hero-actions">
                <a href="#shop" className="hero-cta">Shop Now</a>
                <a
                  href="#flavours"
                  className="hero-cta-ghost"
                  style={{ borderColor: slide.accent, color: slide.accent }}
                >
                  All Flavours
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Arrows */}
      <button className="hero-arrow hero-arrow-left" onClick={goPrev} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <polyline points="15,18 9,12 15,6"/>
        </svg>
      </button>
      <button className="hero-arrow hero-arrow-right" onClick={goNext} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <polyline points="9,6 15,12 9,18"/>
        </svg>
      </button>

      {/* Dots */}
      <div className="hero-dots">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={s.type === 'video' ? 'Video slide' : s.flavour}
            style={i === current ? { background: slide.accent } : {}}
          />
        ))}
      </div>

      {/* Flavour nav pills */}
      <div className="hero-flavour-nav">
        {SLIDES.slice(1).map((s, i) => (
          <button
            key={i}
            className={`flavour-pill${current === i + 1 ? ' active' : ''}`}
            onClick={() => goTo(i + 1)}
            style={current === i + 1 ? { background: s.accent, color: s.bg } : {}}
          >
            {s.flavour}
          </button>
        ))}
      </div>
    </section>
  )
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
const reviews = [
  { stars: 5, quote: "I bought these for healthier snacking, but they've become a small ritual in our home. Every evening tea now feels incomplete without them.",                           author: "Priya Mehta",    location: "Bengaluru", product: "Garlic Thins"  },
  { stars: 5, quote: "Finding something wholesome that my whole family enjoys is rare. These crisps somehow bring together flavour, tradition, and comfort in every bite.",                author: "Anjali Rao",     location: "Mysuru",    product: "Moringa Thins" },
  { stars: 5, quote: "The first bite reminded me of homemade snacks we grew up with. It feels comforting to find something traditional that fits today's lifestyle.",                      author: "Rohit",          location: "Bangalore", product: "Methi Thins"   },
  { stars: 5, quote: "What started as curiosity turned into a pantry essential. They've become my go-to for busy days, quiet evenings, and everything in between.",                        author: "Meera Krishnan", location: "Chennai",   product: "Curry Thins"   },
  { stars: 5, quote: "Some snacks satisfy cravings. These feel different — wholesome, familiar, and made with care you can actually taste.",                                               author: "Nisha Patel",    location: "Hyderabad", product: "Methi Thins"   },
]

const TERRACOTTA = '#E2703A'
const LIGHT      = '#F5EDE6'

function getPosition(index, current, total) {
  let diff = index - current
  if (diff >  total / 2) diff -= total
  if (diff < -total / 2) diff += total
  if (diff ===  0) return { x:    0, scale: 1,    opacity: 1,   z: 10, shadow: '0 28px 56px rgba(226,112,58,0.35)', active: true  }
  if (diff ===  1) return { x:  236, scale: 0.86, opacity: 1,   z:  6, shadow: '0 6px 20px rgba(200,140,110,0.2)',  active: false }
  if (diff === -1) return { x: -236, scale: 0.86, opacity: 1,   z:  6, shadow: '0 6px 20px rgba(200,140,110,0.2)',  active: false }
  if (diff ===  2) return { x:  400, scale: 0.74, opacity: 0.7, z:  3, shadow: 'none', active: false }
  if (diff === -2) return { x: -400, scale: 0.74, opacity: 0.7, z:  3, shadow: 'none', active: false }
  return { x: diff > 0 ? 560 : -560, scale: 0.65, opacity: 0, z: 0, shadow: 'none', active: false }
}

function Testimonials() {
  const [current, setCurrent] = useState(0)
  const startXRef = useRef(null)
  const autoRef   = useRef(null)

  const next = () => setCurrent(c => (c + 1) % reviews.length)
  const prev = () => setCurrent(c => (c - 1 + reviews.length) % reviews.length)

  const startAuto = () => { clearInterval(autoRef.current); autoRef.current = setInterval(next, 3500) }
  const stopAuto  = () => clearInterval(autoRef.current)

  useEffect(() => { startAuto(); return () => clearInterval(autoRef.current) }, [])

  return (
    <section className="tc-section">
      <span className="tc-label">Testimonials</span>
      <h2 className="tc-heading">Loved by thousands</h2>
      <p className="tc-sub">Real people · Real results</p>

      <div
        className="tc-stage"
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
        onTouchStart={e => { startXRef.current = e.touches[0].clientX }}
        onTouchEnd={e => {
          const dx = e.changedTouches[0].clientX - startXRef.current
          if (dx < -40) next(); else if (dx > 40) prev()
        }}
        onMouseDown={e => { startXRef.current = e.clientX }}
        onMouseUp={e => {
          const dx = e.clientX - startXRef.current
          startXRef.current = null
          if (dx < -30) next(); else if (dx > 30) prev()
        }}
      >
        <div className="tc-track">
          {reviews.map((review, i) => {
            const pos = getPosition(i, current, reviews.length)
            return (
              <div
                key={i}
                className={`tc-card ${pos.active ? 'tc-card--active' : 'tc-card--side'}`}
                style={{
                  transform: `translateX(${pos.x}px) scale(${pos.scale})`,
                  opacity: pos.opacity,
                  zIndex: pos.z,
                  boxShadow: pos.shadow,
                  background: pos.active ? TERRACOTTA : LIGHT,
                }}
                onClick={() => { if (i !== current) setCurrent(i) }}
              >
                <div className="tc-card__top">
                  <div className="tc-card__stars">{'★'.repeat(review.stars)}</div>
                  <span className="tc-card__quote-mark">"</span>
                  <p className="tc-card__quote">{review.quote}</p>
                </div>
                <div className="tc-card__bottom">
                  <div className="tc-card__line" />
                  <p className="tc-card__author">{review.author}</p>
                  <p className="tc-card__location">{review.location}</p>
                  <span className="tc-card__tag">{review.product}</span>
                </div>
              </div>
            )
          })}
        </div>
        <button className="tc-nav tc-nav--prev" onClick={prev} aria-label="Previous">&#8249;</button>
        <button className="tc-nav tc-nav--next" onClick={next} aria-label="Next">&#8250;</button>
      </div>

      <div className="tc-dots">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`tc-dot${i === current ? ' tc-dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      <p className="tc-counter">{current + 1} of {reviews.length}</p>
    </section>
  )
}

/* ============================================================
   EXPORT
   ============================================================ */
export default function HomeSections() {
  return (
    <>
      <HeroSection />
      <Testimonials />
    </>
  )
}
