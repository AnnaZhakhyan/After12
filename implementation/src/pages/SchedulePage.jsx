
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SchedulePage.css";

const days = [
  { id: "friday", label: "FRI", date: "18 JUN", subtitle: "THE ARRIVAL" },
  { id: "saturday", label: "SAT", date: "19 JUN", subtitle: "THE PEAK" },
  { id: "sunday", label: "SUN", date: "20 JUN", subtitle: "THE AFTERGLOW" },
];

const schedule = [
  {
    day: "friday",
    time: "16:00",
    end: "17:00",
    artist: "The Gardeners",
    stage: "SUNSET STAGE",
    type: "LIVE MUSIC",
    description: "An easy-going opening set to ease into the weekend.",
    color: "coral",
  },
  {
    day: "friday",
    time: "17:30",
    end: "18:30",
    artist: "Men I Trust",
    stage: "MAIN STAGE",
    type: "DREAM POP",
    description: "Dreamy melodies and hazy sounds under the evening sky.",
    color: "gold",
  },
  {
    day: "friday",
    time: "19:00",
    end: "20:00",
    artist: "Jungle",
    stage: "MAIN STAGE",
    type: "ELECTRONIC / SOUL",
    description: "Grooves, movement, and a dance floor that keeps growing.",
    color: "pink",
  },
  {
    day: "friday",
    time: "20:30",
    end: "22:00",
    artist: "After Hours Club",
    stage: "NIGHT STAGE",
    type: "DJ SET",
    description: "A late-night soundtrack for people who are not ready to leave.",
    color: "coral",
  },
  {
    day: "saturday",
    time: "14:00",
    end: "15:00",
    artist: "Soft Static",
    stage: "SUNSET STAGE",
    type: "INDIE / ALTERNATIVE",
    description: "Discover your new favourite band before the crowds arrive.",
    color: "gold",
  },
  {
    day: "saturday",
    time: "15:30",
    end: "16:30",
    artist: "The Marías",
    stage: "MAIN STAGE",
    type: "DREAM POP",
    description: "Atmospheric vocals and hypnotic rhythms in the afternoon light.",
    color: "pink",
  },
  {
    day: "saturday",
    time: "17:00",
    end: "18:00",
    artist: "Golden",
    stage: "SUNSET STAGE",
    type: "LIVE ELECTRONIC",
    description: "An experimental set blending warm synths and live percussion.",
    color: "coral",
  },
  {
    day: "saturday",
    time: "19:00",
    end: "20:30",
    artist: "Jungle",
    stage: "MAIN STAGE",
    type: "ELECTRONIC / SOUL",
    description: "One more chance to lose yourself in the rhythm.",
    color: "gold",
  },
  {
    day: "saturday",
    time: "21:00",
    end: "23:00",
    artist: "Midnight Frequency",
    stage: "NIGHT STAGE",
    type: "DJ SET",
    description: "A late-night dance session for the beautifully restless.",
    color: "pink",
  },
  {
    day: "sunday",
    time: "14:00",
    end: "15:00",
    artist: "Sunday People",
    stage: "SUNSET STAGE",
    type: "ACOUSTIC",
    description: "Slow things down with an intimate afternoon performance.",
    color: "coral",
  },
  {
    day: "sunday",
    time: "15:30",
    end: "16:30",
    artist: "Men I Trust",
    stage: "MAIN STAGE",
    type: "DREAM POP",
    description: "Soft sounds and familiar favourites for a final afternoon.",
    color: "gold",
  },
  {
    day: "sunday",
    time: "17:00",
    end: "18:30",
    artist: "The Marías",
    stage: "MAIN STAGE",
    type: "DREAM POP",
    description: "A dreamy closing set as the last light settles over the festival.",
    color: "pink",
  },
];

const filters = ["ALL STAGES", "MAIN STAGE", "SUNSET STAGE", "NIGHT STAGE"];

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState("friday");
  const [activeStage, setActiveStage] = useState("ALL STAGES");
  const [savedSets, setSavedSets] = useState([]);

  const visibleSchedule = schedule.filter(
    (item) =>
      item.day === activeDay &&
      (activeStage === "ALL STAGES" || item.stage === activeStage)
  );

  function toggleSaved(artist, day, time) {
    const id = `${artist}-${day}-${time}`;

    setSavedSets((current) =>
      current.includes(id)
        ? current.filter((saved) => saved !== id)
        : [...current, id]
    );
  }

  const currentDay = days.find((day) => day.id === activeDay);

  return (
    <main className="schedule-page">
      <section className="schedule-hero">
        <div className="schedule-hero-glow" />

        <div className="schedule-hero-inner">
          <p className="eyebrow">
            <span className="schedule-live-dot" />
            PLAN YOUR WEEKEND / 2027
          </p>

          <h1>
            FIND YOUR
            <br />
            <span>RHYTHM.</span>
          </h1>

          <div className="schedule-hero-bottom">
            <p>
              Three days. Different worlds.
              <br />
              Your weekend, your way.
            </p>

            <a href="#timetable" className="schedule-scroll-link">
              EXPLORE THE TIMETABLE <span>↓</span>
            </a>
          </div>
        </div>

        <span className="schedule-hero-note">NO TWO DAYS ALIKE ®</span>
      </section>

      <section className="schedule-intro">
        <div>
          <p className="eyebrow">18 — 20 JUNE 2027 · AMSTERDAM</p>
          <h2>
            MAKE A PLAN.
            <br />
            <span>LEAVE ROOM FOR MAGIC.</span>
          </h2>
        </div>

        <p>
          Pick the performances you cannot miss, save your favourites,
          and leave a little space for the unexpected. This is your
          weekend to explore.
        </p>
      </section>

      <section className="schedule-timetable" id="timetable">
        <div className="schedule-section-heading">
          <p className="eyebrow">01 / THE TIMETABLE</p>
          <span className="schedule-note">YOUR WEEKEND AT A GLANCE</span>
        </div>

        <div className="schedule-day-tabs" role="tablist" aria-label="Festival day">
          {days.map((day) => (
            <button
              key={day.id}
              type="button"
              role="tab"
              aria-selected={activeDay === day.id}
              className={`schedule-day-tab ${
                activeDay === day.id ? "active" : ""
              }`}
              onClick={() => setActiveDay(day.id)}
            >
              <span>{day.label}</span>
              <strong>{day.date}</strong>
              <small>{day.subtitle}</small>
            </button>
          ))}
        </div>

        <div className="schedule-filter-row">
          <div className="schedule-stage-filters" aria-label="Filter by stage">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeStage === filter ? "active" : ""}
                onClick={() => setActiveStage(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <span className="schedule-set-count">
            {visibleSchedule.length} SETS
          </span>
        </div>

        <div className="schedule-list" role="tabpanel">
          {visibleSchedule.map((item) => {
            const savedId = `${item.artist}-${item.day}-${item.time}`;
            const isSaved = savedSets.includes(savedId);

            return (
              <article
                className={`schedule-set ${item.color}`}
                key={savedId}
              >
                <div className="schedule-set-time">
                  <strong>{item.time}</strong>
                  <span>{item.end}</span>
                </div>

                <div className="schedule-set-indicator">
                  <span />
                </div>

                <div className="schedule-set-info">
                  <span className="schedule-set-stage">
                    {item.stage} / {item.type}
                  </span>
                  <h3>{item.artist}</h3>
                  <p>{item.description}</p>
                </div>

                <button
                  type="button"
                  className={`schedule-save ${isSaved ? "saved" : ""}`}
                  onClick={() =>
                    toggleSaved(item.artist, item.day, item.time)
                  }
                  aria-pressed={isSaved}
                  aria-label={`${isSaved ? "Remove" : "Save"} ${item.artist}`}
                >
                  <span>{isSaved ? "✓" : "+"}</span>
                  <small>{isSaved ? "SAVED" : "MY LIST"}</small>
                </button>
              </article>
            );
          })}

          {visibleSchedule.length === 0 && (
            <p className="schedule-empty">
              No performances at this stage on this day. Try another filter.
            </p>
          )}
        </div>

        <div className="schedule-saved-summary">
          <span className="schedule-saved-icon">✳</span>
          <p>
            <strong>{savedSets.length} SETS SAVED</strong>
            <br />
            Build your own festival shortlist as you explore.
          </p>
          {savedSets.length > 0 && (
            <button type="button" onClick={() => setSavedSets([])}>
              CLEAR LIST ×
            </button>
          )}
        </div>

        <p className="schedule-disclaimer">
          FICTIONAL FESTIVAL TIMETABLE · LINEUP AND TIMES ARE CONCEPT CONTENT
        </p>
      </section>

      <section className="schedule-tips">
        <div className="schedule-tips-heading">
          <p className="eyebrow">02 / A LITTLE ADVICE</p>
          <h2>
            GO WITH
            <br />
            <span>THE FLOW.</span>
          </h2>
        </div>

        <div className="schedule-tip">
          <span>01</span>
          <div>
            <h3>DON'T OVERPLAN</h3>
            <p>Leave gaps between sets. Your favourite moment might be one you did not schedule.</p>
          </div>
        </div>

        <div className="schedule-tip">
          <span>02</span>
          <div>
            <h3>FOLLOW THE SOUND</h3>
            <p>If something catches your attention from across the grounds, go see where it leads.</p>
          </div>
        </div>

        <div className="schedule-tip">
          <span>03</span>
          <div>
            <h3>WATCH THE SUNSET</h3>
            <p>Find a spot, take a breath, and enjoy the golden hour between performances.</p>
          </div>
        </div>
      </section>

      <section className="schedule-cta">
        <p className="eyebrow">YOUR WEEKEND IS WAITING</p>
        <h2>
          READY TO
          <br />
          <span>BE THERE?</span>
        </h2>
        <p>
          Three days of music, art, and moments worth remembering.
        </p>

        <Link to="/tickets" className="pill-button">
          FIND YOUR TICKET <span>↗</span>
        </Link>

        <Link to="/experience" className="schedule-back-link">
          EXPLORE THE EXPERIENCE ←
        </Link>
      </section>
    </main>
  );
}
