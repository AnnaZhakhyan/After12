import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Navbar from "./parts/navbar.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import SchedulePage from "./pages/SchedulePage.jsx";
import TicketsPage from "./pages/TicketsPage.jsx";

const artists = [
  {
    number: "01",
    name: "The Marías",
    genre: "DREAM POP",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=85",
    color: "coral",
  },
  {
    number: "02",
    name: "Jungle",
    genre: "ELECTRONIC / SOUL",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=85",
    color: "gold",
  },
  {
    number: "03",
    name: "Men I Trust",
    genre: "INDIE / DREAM POP",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=85",
    color: "pink",
  },
];

function HomePage() {
  const [selectedArtist, setSelectedArtist] = useState(null);

  function moveGlow(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`
    );

    event.currentTarget.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`
    );
  }

  return (
    <main>
      <Navbar />

      <section className="hero" id="home" onMouseMove={moveGlow}>
        <div className="hero-image" />
        <div className="hero-glow" />
        <div className="sun-orb" />

        <div className="hero-topline">
          <span>INDEPENDENT CULTURE FESTIVAL</span>
          <span>AMSTERDAM · 2027</span>
        </div>

        <div className="hero-content">
          <p className="hero-kicker">
            <span className="live-dot" />
            THREE DAYS OUTSIDE OF ORDINARY
          </p>

          <h1 className="hero-title">
            <span className="title-line title-line-one">AFTER</span>
            <span className="title-line title-line-two">
              <span className="title-star">✳ </span> 12
            </span>
          </h1>

          <div className="hero-bottom">
            <p>
              CHASE THE LAST LIGHT.
              <br />
              STAY FOR THE FEELING.
            </p>

            <NavLink className="explore-button" to="/experience">
              <span>ENTER THE AFTER12</span>
              <span className="button-arrow">↘</span>
            </NavLink>
          </div>
        </div>

        <div className="hero-index">
          <span>52° 22' N</span>
          <span className="index-line" />
          <span>4° 54' E</span>
        </div>

        <NavLink to="/experience" className="scroll-cue">
          DISCOVER THE EXPERIENCE
          <span>↓</span>
        </NavLink>

        <span className="hero-side-note">
          SOUNDTRACK TO THE SUNSET ®
        </span>
      </section>

      <div className="ticker" aria-label="Music, art, and after hours">
        <div className="ticker-track" aria-hidden="true">
          {Array.from({ length: 4 }, (_, index) => (
            <span className="ticker-group" key={index}>
              MUSIC WITHOUT BORDERS
              <span className="ticker-symbol">✳</span>
              ART AFTER DARK
              <span className="ticker-symbol">✳</span>
              ALL FEELING, NO RULES
              <span className="ticker-symbol">✳</span>
            </span>
          ))}
        </div>
      </div>

      <section className="experience section-pad" id="experience">
        <div className="section-heading">
          <span className="eyebrow">01 / THE FEELING</span>
          <span className="heading-note">A PLACE TO DISAPPEAR INTO.</span>
        </div>

        <h2 className="manifesto">
          SOME NIGHTS
          <br />
          <span className="manifesto-muted">BECOME</span>{" "}
          <span className="manifesto-highlight">MEMORIES.</span>
        </h2>

        <div className="experience-bottom">
          <div className="experience-image">
            <img
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85"
              alt="Festival crowd enjoying a live music performance"
              loading="lazy"
            />
            <span className="image-stamp">FEEL IT ALL ↗</span>
          </div>

          <div className="experience-copy">
            <span className="big-number">03</span>
            <h3>
              DAYS THAT
              <br />
              DON'T FEEL
              <br />
              LIKE REAL LIFE.
            </h3>
            <p>
              A little less scrolling. A little more feeling.
              Three days of unexpected sounds, open skies,
              strange new friends, and the kind of music
              that follows you home.
            </p>
            <span className="handwritten">
              See you at golden hour.
            </span>
          </div>
        </div>
      </section>

      <section className="lineup section-pad" id="lineup">
        <div className="section-heading">
          <span className="eyebrow">02 / THE SOUND</span>
          <span className="heading-note">YOUR NEXT OBSESSION AWAITS.</span>
        </div>

        <div className="lineup-heading">
          <h2>
            MEET YOUR
            <br />
            <span>NEW FAVOURITES.</span>
          </h2>
          <p>
            A few names to get you started.
            <br />
            The rest? You'll discover them here.
          </p>
        </div>

        <div className="artist-grid">
          {artists.map((artist) => (
            <button
              className={`artist-card ${artist.color}`}
              key={artist.number}
              onClick={() =>
                setSelectedArtist(
                  selectedArtist?.number === artist.number
                    ? null
                    : artist
                )
              }
              aria-expanded={selectedArtist?.number === artist.number}
            >
              <div className="artist-image">
                <img src={artist.image} alt="" loading="lazy" />
                <span className="artist-number">{artist.number}</span>
                <span className="artist-open">
                  {selectedArtist?.number === artist.number ? "−" : "+"}
                </span>
              </div>

              <div className="artist-info">
                <span>{artist.genre}</span>
                <h3>{artist.name}</h3>
              </div>
            </button>
          ))}
        </div>

        {selectedArtist && (
          <div className="artist-detail" aria-live="polite">
            <span>ARTIST SPOTLIGHT / {selectedArtist.number}</span>
            <h3>{selectedArtist.name}</h3>
            <p>
              {selectedArtist.genre} — one of the artists on our
              fictional AFTER12 lineup. More details coming soon.
            </p>
            <button onClick={() => setSelectedArtist(null)}>
              CLOSE SPOTLIGHT ×
            </button>
          </div>
        )}
      </section>

      <section className="final-cta" id="details">
        <div className="cta-orb" />
        <span className="eyebrow">18 — 20 JUNE 2027 · AMSTERDAM</span>

        <h2>
          THE SUN
          <br />
          WILL SET.
          <br />
          <span>WE WON'T.</span>
        </h2>

        <a
          className="cta-button"
          href="mailto:hello@example.com?subject=AFTER12%20festival%20updates"
        >
          KEEP ME IN THE LOOP <span>↗</span>
        </a>

        <p className="concept-note">
          A FICTIONAL FESTIVAL CREATED FOR A SOFTWARE PORTFOLIO :D
        </p>
      </section>

      <footer className="footer">
        <NavLink to="/" className="logo">
          AFTER12<span>®</span>
        </NavLink>
        <p>MADE FOR THE MOMENTS BETWEEN.</p>
        <a href="#home">BACK TO THE LIGHT ↑</a>
      </footer>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/tickets" element={<TicketsPage/>} />
    </Routes>
  );
}