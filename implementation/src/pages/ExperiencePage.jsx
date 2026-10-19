import { Link } from "react-router-dom";
import Navbar from "../parts/navbar.jsx";
import "./ExperiencePage.css";
const experiences = [
  {
    number: "01",
    category: "LIVE MUSIC",
    title: "FEEL THE SOUND.",
    description:
      "Lose track of time between live performances, unexpected collaborations, and artists you will want to listen to on repeat.",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=85",
    alt: "Live music performance with atmospheric concert lighting",
    tag: "SOUND WITHOUT BORDERS",
  },
  {
    number: "02",
    category: "ART AFTER DARK",
    title: "SEE THINGS DIFFERENTLY.",
    description:
      "Explore glowing installations, experimental visuals, and immersive spaces that transform as the sun goes down.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    alt: "Atmospheric outdoor landscape",
    tag: "A WORLD OF ITS OWN",
  },
  {
    number: "03",
    category: "FOOD & PEOPLE",
    title: "STAY A LITTLE LONGER.",
    description:
      "Discover independent food spots, find your new favourite hangout, and make friends you never expected to meet.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
    alt: "Outdoor gathering with warm evening atmosphere",
    tag: "GOOD TASTE, GOOD COMPANY",
  },
];

const essentials = [
  {
    number: "01",
    title: "COME COMFORTABLE",
    description:
      "Wear shoes you can dance in, bring an extra layer for the evening, and leave room for spontaneous plans.",
  },
  {
    number: "02",
    title: "FOLLOW YOUR CURIOSITY",
    description:
      "Choose a few performances you cannot miss, then leave the rest of your schedule open to discovery.",
  },
  {
    number: "03",
    title: "BE HERE, RIGHT NOW",
    description:
      "Take the photos you want, put your phone away sometimes, and enjoy the moments that cannot be planned.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="experience-page">
      <Navbar />

      <section className="experience-hero">
        <div className="experience-hero-glow" />

        <div className="experience-hero-inner">
          <p className="eyebrow">
            <span className="experience-live-dot" />
            MORE THAN A MUSIC FESTIVAL / 2027
          </p>

          <h1 className="experience-title">
            COME FOR
            <br />
            THE MUSIC.
            <br />
            <span>STAY FOR</span>
            <br />
            <em>THE FEELING.</em>
          </h1>

          <div className="experience-hero-bottom">
            <p>
              Three days outside of ordinary life.
              <br />
              One weekend you will wish could last longer.
            </p>

            <a href="#discover" className="experience-scroll">
              DISCOVER THE EXPERIENCE <span>↓</span>
            </a>
          </div>
        </div>

        <span className="experience-hero-side">
          CHASE THE LAST LIGHT ®
        </span>
      </section>

      <section className="experience-intro" id="discover">
        <div className="experience-section-label">
          <span className="eyebrow">01 / THE ATMOSPHERE</span>
          <span className="experience-label-note">
            LESS ROUTINE. MORE FEELING.
          </span>
        </div>

        <div className="experience-intro-grid">
          <h2>
            NOT JUST
            <br />
            <span>A PLACE.</span>
            <br />
            A FEELING.
          </h2>

          <div className="experience-intro-copy">
            <span className="experience-sparkle">✳</span>
            <p>
              The best moments rarely happen according to plan. They happen
              between the songs, under an unfamiliar sky, or when you discover
              something you never knew you were looking for.
            </p>
            <p>
              AFTERGLOW is a festival concept built around those moments:
              independent music, creative expression, and the freedom to
              simply be there.
            </p>
          </div>
        </div>
      </section>

      <section className="experience-discover">
        <div className="experience-section-label">
          <span className="eyebrow">02 / FIND YOUR MOMENT</span>
          <span className="experience-label-note">
            THERE IS NO WRONG WAY THROUGH.
          </span>
        </div>

        <div className="experience-card-list">
          {experiences.map((item) => (
            <article className="experience-feature" key={item.number}>
              <div className="experience-feature-image">
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="experience-image-number">
                  {item.number}
                </span>
                <span className="experience-image-tag">
                  {item.tag} ↗
                </span>
              </div>

              <div className="experience-feature-copy">
                <p className="eyebrow">
                  {item.number} / {item.category}
                </p>
                <h2>{item.title}</h2>
                <p className="experience-description">
                  {item.description}
                </p>
                <span className="experience-handwritten">
                  Follow the feeling.
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-essentials">
        <div className="experience-essentials-heading">
          <p className="eyebrow">03 / BEFORE YOU ARRIVE</p>

          <h2>
            A FEW
            <br />
            <span>GOOD THINGS</span>
            <br />
            TO KNOW.
          </h2>

          <p className="experience-essentials-lede">
            No complicated plans needed. Just bring yourself, a little
            curiosity, and an open mind.
          </p>
        </div>

        <div className="experience-essentials-list">
          {essentials.map((item) => (
            <article className="experience-essential" key={item.number}>
              <span className="experience-essential-number">
                {item.number}
              </span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <span className="experience-essential-star">✳</span>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-final-cta">
        <div className="experience-cta-orb" />

        <p className="eyebrow">18 — 20 JUNE 2027 · AMSTERDAM</p>

        <h2>
          MEET US
          <br />
          <span>AT GOLDEN HOUR.</span>
        </h2>

        <p className="experience-cta-copy">
          Three days. New sounds. Unplanned memories.
          <br />
          Your next favourite weekend starts here.
        </p>

        <Link to="/schedule" className="pill-button">
          EXPLORE THE SCHEDULE <span>↗</span>
        </Link>

        <p className="experience-concept-note">
          FICTIONAL FESTIVAL CONCEPT · CREATED FOR A FRONTEND PORTFOLIO
        </p>
      </section>
    </main>
  );
}