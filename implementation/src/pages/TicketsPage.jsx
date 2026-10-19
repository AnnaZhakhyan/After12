import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../parts/navbar.jsx";
import "./TicketsPage.css";

const tickets = [
{
id: "early",
number: "01",
name: "EARLY BIRD",
price: 89,
description: "For the ones who plan their summer nights ahead.",
tag: "LIMITED RELEASE",
features: [
"Access to all 3 festival days",
"All music stages",
"Art installations & experiences",
"Digital festival guide",
],
},
{
id: "general",
number: "02",
name: "GENERAL ADMISSION",
price: 119,
description: "Three days. Endless discoveries. One unforgettable summer.",
tag: "MOST POPULAR",
features: [
"Access to all 3 festival days",
"All music stages",
"Art installations & experiences",
"Digital festival guide",
"Access to festival food village",
],
},
{
id: "last",
number: "03",
name: "LAST CHANCE",
price: 149,
description: "For the spontaneous ones. We saved you a spot.",
tag: "FINAL RELEASE",
features: [
"Access to all 3 festival days",
"All music stages",
"Art installations & experiences",
"Digital festival guide",
"Access to festival food village",
],
},
];

export default function TicketsPage() {
const [selectedTicket, setSelectedTicket] = useState("general");
const [quantity, setQuantity] = useState(1);
const [showConfirmation, setShowConfirmation] = useState(false);

const selected = tickets.find((ticket) => ticket.id === selectedTicket);
const total = selected.price * quantity;

function handleContinue() {
setShowConfirmation(true);
}

return (
<main className="tickets-page">
<Navbar />

  <section className="tickets-hero">
    <div className="tickets-hero-top">
      <span>AMSTERDAM · 18—20 JUNE 2027</span>
      <span>YOUR SUMMER STARTS HERE ↘</span>
    </div>

    <div className="tickets-hero-content">
      <p className="tickets-eyebrow">THREE DAYS OUT OF THE ORDINARY</p>
      <h1>
        YOUR NIGHT.
        <br />
        <span>YOUR SUMMER.</span>
      </h1>
      <p className="tickets-hero-description">
        Three days of music, art, unexpected encounters and nights
        that turn into stories. Find your ticket to AFTER12.
      </p>

      <a href="#ticket-options" className="tickets-scroll-link">
        FIND YOUR TICKET <span>↓</span>
      </a>
    </div>

    <div className="tickets-hero-footer">
      <span>18.06 — 20.06.2027</span>
      <span>AMSTERDAM, THE NETHERLANDS</span>
      <span>UNTIL THE LAST SONG.</span>
    </div>
  </section>

  <section className="tickets-intro" id="ticket-options">
    <div>
      <p className="tickets-eyebrow">01 / CHOOSE YOUR EXPERIENCE</p>
      <h2>
        GOOD THINGS
        <br />
        <span>DON'T WAIT.</span>
      </h2>
    </div>
    <p>
      Every ticket gets you three days inside the AFTER12 universe.
      Pick your release, gather your people and leave the rest to us.
    </p>
  </section>

  <section className="ticket-grid">
    {tickets.map((ticket) => (
      <article
        className={`ticket-card ${
          selectedTicket === ticket.id ? "ticket-card-selected" : ""
        } ${ticket.id === "general" ? "ticket-card-featured" : ""}`}
        key={ticket.id}
      >
        <div className="ticket-card-top">
          <span className="ticket-number">{ticket.number}</span>
          <span className="ticket-tag">{ticket.tag}</span>
        </div>

        <div className="ticket-card-heading">
          <p className="ticket-date">18—20 JUN 2027</p>
          <h3>{ticket.name}</h3>
          <p className="ticket-description">{ticket.description}</p>
        </div>

        <div className="ticket-price">
          <span>€</span>
          {ticket.price}
          <small> / PERSON</small>
        </div>

        <div className="ticket-divider" />

        <p className="ticket-includes-label">WHAT'S INCLUDED</p>
        <ul className="ticket-features">
          {ticket.features.map((feature) => (
            <li key={feature}>
              <span>✳</span>
              {feature}
            </li>
          ))}
        </ul>

        <button
          className={`ticket-select-button ${
            selectedTicket === ticket.id ? "is-selected" : ""
          }`}
          onClick={() => {
            setSelectedTicket(ticket.id);
            setShowConfirmation(false);
          }}
        >
          {selectedTicket === ticket.id ? "SELECTED ✓" : "CHOOSE TICKET ↗"}
        </button>

        <div className="ticket-card-bottom">
          <span>AFTER12®</span>
          <span>ADMIT ONE · 3 DAYS</span>
        </div>
      </article>
    ))}
  </section>

  <section className="ticket-checkout" id="checkout">
    <div className="checkout-copy">
      <p className="tickets-eyebrow">02 / YOUR FESTIVAL PLANS</p>
      <h2>
        MAKE IT
        <br />
        <span>HAPPEN.</span>
      </h2>
      <p>
        Your people are waiting. Choose how many tickets you need
        and get ready for three days you'll talk about all summer.
      </p>
    </div>

    <div className="checkout-panel">
      <div className="checkout-panel-header">
        <span>YOUR SELECTION</span>
        <span>AFTER12® 2027</span>
      </div>

      <div className="checkout-selected-ticket">
        <div>
          <p className="checkout-ticket-name">{selected.name}</p>
          <p className="checkout-ticket-date">18—20 JUNE 2027 · AMSTERDAM</p>
        </div>
        <strong>€{selected.price}</strong>
      </div>

      <div className="checkout-quantity">
        <div>
          <span>NUMBER OF TICKETS</span>
          <small>Maximum 6 per order</small>
        </div>

        <div className="quantity-controls">
          <button
            type="button"
            aria-label="Remove one ticket"
            disabled={quantity <= 1}
            onClick={() => {
              setQuantity((current) => current - 1);
              setShowConfirmation(false);
            }}
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            aria-label="Add one ticket"
            disabled={quantity >= 6}
            onClick={() => {
              setQuantity((current) => current + 1);
              setShowConfirmation(false);
            }}
          >
            +
          </button>
        </div>
      </div>

      <div className="checkout-total">
        <span>TOTAL</span>
        <strong>€{total}</strong>
      </div>

      <button
        className="checkout-button"
        onClick={handleContinue}
      >
        RESERVE YOUR SPOT <span>↗</span>
      </button>

      {showConfirmation && (
        <div className="checkout-demo-message" role="status">
          <strong>You're one step closer to AFTER12.</strong>
          <p>
            This is a portfolio demo. No booking or payment has
            been made.
          </p>
        </div>
      )}

      <p className="checkout-disclaimer">
        DEMO CHECKOUT · NO PAYMENT WILL BE TAKEN
      </p>
    </div>
  </section>

  <section className="tickets-faq">
    <p className="tickets-eyebrow">A FEW THINGS TO KNOW</p>
    <h2>BEFORE YOU <span>GO.</span></h2>

    <div className="ticket-faq-list">
      <details>
        <summary>What dates does my ticket cover? <span>+</span></summary>
        <p>
          All ticket types listed here provide admission for all three
          festival days: 18, 19 and 20 June 2027.
        </p>
      </details>

      <details>
        <summary>Can I choose which artists to see? <span>+</span></summary>
        <p>
          Absolutely. Explore the schedule and plan your own festival
          experience across the different stages.
        </p>
      </details>

      <details>
        <summary>Is this a real ticket purchase? <span>+</span></summary>
        <p>
          No. AFTER12 is a fictional portfolio project. The selection
          and checkout interactions are demonstrations only.
        </p>
      </details>
    </div>
  </section>

  <footer className="tickets-footer">
    <Link to="/" className="tickets-footer-logo">AFTER12<span>®</span></Link>
    <p>THREE DAYS. A THOUSAND STORIES.</p>
    <div className="tickets-footer-links">
      <Link to="/experience">EXPERIENCE</Link>
      <Link to="/schedule">SCHEDULE</Link>
      <Link to="/tickets">TICKETS</Link>
    </div>
    <span className="tickets-copyright">© AFTER12 FESTIVAL 2027</span>
  </footer>
</main>

);
}