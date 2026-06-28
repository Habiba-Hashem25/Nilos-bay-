
import heroImg from "@/assets/hero.jpg";
import mezzeImg from "@/assets/mezze.jpg";
import mokhitoImg from "@/assets/mokhito.jpg";
import wardahImg from "@/assets/wardah.jpg";
import kimsImg from "@/assets/kims.jpg";
import secondCupImg from "@/assets/secondcup.jpg";
import nilerraImg from "@/assets/nilerra.jpg";
import uncleZackImg from "@/assets/unclezack.jpg";
import inLaneImg from "@/assets/inlane.jpg";
import abazaImg from "@/assets/abaza.jpg";
import { Phone, MapPin, Clock, Star, Utensils, Coffee, Music, Ship, Instagram, ArrowRight, Sparkles, MessageCircle, ClipboardList, Loader2, CheckCircle2, Home } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";



const PHONE = "01064011110";
const PHONE_DISPLAY = "010 6401 1110";
const ADDRESS = "26J9+CFQ, Ad Doqi A, Dokki, Giza Governorate";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Nilos+Bay+Dokki+Giza";

type Tenant = {
  name: string;
  category: string;
  desc: string;
  img: string;
  instagram: string;
  handle: string;
  icon: React.ComponentType<{ className?: string }>;
};

const tenants: Tenant[] = [
  {
    name: "Mokhito",
    category: "Mocktails & Bites",
    desc: "Signature mojitos, fresh mocktails and laid-back Nile-side bites.",
    img: mokhitoImg,
    instagram: "https://www.instagram.com/mokhitoeg",
    handle: "@mokhitoeg",
    icon: Sparkles,
  },
  {
    name: "Wardah",
    category: "Restaurant",
    desc: "Modern Egyptian dining with a fresh, floral twist on classics.",
    img: wardahImg,
    instagram: "https://www.instagram.com/wardah_eg",
    handle: "@wardah_eg",
    icon: Utensils,
  },
  {
    name: "Kim's Coffee",
    category: "Specialty Coffee",
    desc: "Hand-crafted specialty brews and cozy corners by the river.",
    img: kimsImg,
    instagram: "https://www.instagram.com/kimscoffeeegy",
    handle: "@kimscoffeeegy",
    icon: Coffee,
  },
  {
    name: "Second Cup",
    category: "Café",
    desc: "Your favorite Canadian coffeehouse — espresso, lattes & sweet treats.",
    img: secondCupImg,
    instagram: "https://www.instagram.com/secondcupegypt",
    handle: "@secondcupegypt",
    icon: Coffee,
  },
  {
    name: "Nilerra",
    category: "Restaurant",
    desc: "Mediterranean plates and grills with a sweeping Nile view.",
    img: nilerraImg,
    instagram: "https://www.instagram.com/nilerra_resturant",
    handle: "@nilerra_resturant",
    icon: Utensils,
  },
  {
    name: "Darnoura",
    category: "Restaurant",
    desc: "Authentic Levantine flavors — mezze, grills and warm hospitality.",
    img: mezzeImg,
    instagram: "https://www.instagram.com/darnoura.eg",
    handle: "@darnoura.eg",
    icon: Utensils,
  },
  {
    name: "Uncle Zack",
    category: "Burgers & Comfort",
    desc: "Smashed burgers, loaded fries and feel-good comfort food.",
    img: uncleZackImg,
    instagram: "https://www.instagram.com/uncle.zack.eg",
    handle: "@uncle.zack.eg",
    icon: Utensils,
  },
  {
    name: "In Lane Bowling",
    category: "Bowling & Entertainment",
    desc: "Roll a few frames Nile-side — perfect for friends, dates and groups.",
    img: inLaneImg,
    instagram: "https://www.instagram.com/inlanebowlingnilos",
    handle: "@inlanebowlingnilos",
    icon: Music,
  },
  {
    name: "Abaza Boats",
    category: "Nile Boat Rides",
    desc: "Step from the bay onto the river — private boat rides on the Nile.",
    img: abazaImg,
    instagram: "https://www.instagram.com/abaza_boats",
    handle: "@abaza_boats",
    icon: Ship,
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Stats />
      <Tenants />
      <Experience />
      <GuestList />
      <Visit />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-gradient-gold">Nilos Bay</span>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Dokki</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#tenants" className="hover:text-foreground transition">Venues</a>
          <a href="#experience" className="hover:text-foreground transition">Experience</a>
          <a href="#feedback" className="hover:text-foreground transition">Feedback</a>
          <a href="#visit" className="hover:text-foreground transition">Visit</a>
        </nav>
        <a
          href="#visit"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 text-sm font-semibold text-foreground hover:bg-background/80 transition"
        >
          <MapPin className="h-4 w-4" /> Visit
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Egyptian feast on the Nile at sunset at Nilos Bay"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 w-full">
        <div className="max-w-3xl animate-float-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-gold" /> 4.6 · Open 24 hours
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05]">
            A taste of the <span className="text-gradient-gold">Nile</span>,
            <br /> any time you crave it.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
            Nilos Bay is Dokki's all-day Nile-side food court — sizzling grills,
            soulful Egyptian classics and Mediterranean mezze, served until sunrise.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#tenants"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-gold hover:scale-[1.03] transition"
            >
              Discover the Bay <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur px-7 py-3.5 text-base font-semibold text-foreground hover:bg-background/80 transition"
            >
              <MapPin className="h-4 w-4" /> Plan Your Visit
            </a>
            <a
              href={`https://wa.me/2${PHONE}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-background/50 backdrop-blur px-7 py-3.5 text-base font-semibold text-gold hover:bg-background/80 transition"
            >
              <MessageCircle className="h-4 w-4" /> Contact Us · {PHONE_DISPLAY}
            </a>
            <a
              href="#feedback"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur px-7 py-3.5 text-base font-semibold text-foreground hover:bg-background/80 transition"
            >
              <ClipboardList className="h-4 w-4" /> Share Feedback
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { icon: Star, label: "4.6 ★ Rating", sub: "39 Google reviews" },
    { icon: Clock, label: "Open 24 Hours", sub: "Every single day" },
    { icon: Utensils, label: "9 Venues", sub: "Cafés, dining & fun" },
    { icon: Ship, label: "On the Nile", sub: "Bowling & boat rides" },
  ];
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground shrink-0">
              <s.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold text-foreground">{s.label}</div>
              <div className="text-sm text-muted-foreground">{s.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Tenants() {
  return (
    <section id="tenants" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Inside the Bay</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Nine venues. <span className="text-gradient-gold">One Nile-side address.</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          Café crawls, long dinners, late-night bowling and sunset boat rides — all under
          the lights of Nilos Bay.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tenants.map((t) => (
          <article
            key={t.name}
            className="group rounded-2xl overflow-hidden bg-card border border-border/60 shadow-elegant hover:-translate-y-1 hover:border-gold/40 transition duration-300 flex flex-col"
          >
            <div className="relative aspect-[5/4] overflow-hidden">
              <img
                src={t.img}
                alt={`${t.name} at Nilos Bay`}
                loading="lazy"
                width={1024}
                height={820}
                className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur px-3 py-1 text-xs font-semibold text-gold">
                <t.icon className="h-3.5 w-3.5" /> {t.category}
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-display text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{t.desc}</p>
              <a
                href={t.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all"
              >
                <Instagram className="h-4 w-4" /> {t.handle}
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-14 text-center">
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3.5 font-semibold text-primary-foreground shadow-gold hover:scale-[1.03] transition"
        >
          <Phone className="h-4 w-4" /> Call us · {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={heroImg}
            alt="Nile sunset at Nilos Bay"
            loading="lazy"
            width={1920}
            height={1080}
            className="rounded-3xl shadow-elegant object-cover aspect-[4/3]"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-card border border-border/60 px-6 py-4 shadow-gold">
            <div className="text-3xl font-display font-bold text-gold">8,500+</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Monthly visitors</div>
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gold">The Experience</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
            Where Cairo nights meet the river breeze.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Nilos Bay brings together nine independent venues — from morning coffee at
            Kim's and Second Cup, to dinner at Wardah, Nilerra and Darnoura, drinks at
            Mokhito, burgers at Uncle Zack, bowling with friends and a private boat ride
            on the Nile with Abaza Boats.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "9 cafés, restaurants & entertainment venues",
              "Bowling alley & private Nile boat rides",
              "Spacious Nile-side seating for groups & families",
              "Open 24/7, every day of the year",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-gold shrink-0" />
                <span className="text-foreground">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="bg-card/40 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Visit Us</p>
          <h2 className="mt-3 font-display text-4xl font-bold">Plan your visit</h2>
          <p className="mt-4 text-muted-foreground">
            We're easy to find on the Nile in Dokki. Walk in, or call ahead — your table
            (or your takeaway bag) will be ready.
          </p>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
          <InfoCard icon={MapPin} title="Location" lines={[ADDRESS, "Giza, Egypt"]} cta="Get Directions" href={MAPS_URL} />
          <InfoCard icon={Clock} title="Hours" lines={["Open 24 hours", "7 days a week"]} />
          <InfoCard icon={MessageCircle} title="Contact Us" lines={["WhatsApp", PHONE_DISPLAY]} cta="Chat on WhatsApp" href={`https://wa.me/2${PHONE}`} />
          <InfoCard icon={Instagram} title="Follow the Venues" lines={["9 venues on Instagram"]} cta="See the lineup" href="#tenants" />
        </div>
      </div>
    </section>
  );
}

function GuestList() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    visit_date: "",
    venue_interest: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setErrorMsg("Name and phone are required.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    const { error } = await supabase.from("guest_submissions").insert({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || null,
      visit_date: form.visit_date || null,
      venue_interest: form.venue_interest || null,
      notes: form.notes.trim() || null,
    });
    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or WhatsApp us.");
      return;
    }
    setStatus("success");
    setForm({ name: "", phone: "", email: "", visit_date: "", venue_interest: "", notes: "" });
  }

  const inputClass =
    "w-full rounded-lg border border-border/60 bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-gold/60 transition";
return (
    <section id="feedback" className="border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Feedback Form</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
            We'd love your <span className="text-gradient-gold">feedback</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We genuinely care about your experience and would love to hear your feedback.
            Your review helps us improve and continue delivering the level of service our guests deserve.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Drop your details and we'll keep you updated — priority seating, event invites,
            and first dibs on Nile boat rides. We only message about Nilos Bay; never spam.
          </p>
          <ul className="mt-8 space-y-3 text-foreground">
            {[
              "Early access to events & live nights",
              "WhatsApp updates only when something good is on",
            ].map((l) => (
              <li key={l} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-gold shrink-0" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3 rounded-3xl border border-border/60 bg-card/40 p-6 md:p-10 shadow-elegant">
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="mx-auto h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">You're on the list.</h3>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                Thanks for joining! We'll WhatsApp you soon. Meanwhile, explore the venues
                or message us directly.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <a
                  href="#tenants"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-[1.03] transition"
                >
                  Explore the venues <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`https://wa.me/2${PHONE}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-sm font-semibold text-gold hover:bg-background/50 transition"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp us
                </a>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-muted-foreground hover:text-foreground transition"
              >
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone (WhatsApp) *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="01x xxxx xxxx"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email (optional)</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Visit Date</label>
                <input
                  type="date"
                  value={form.visit_date}
                  onChange={(e) => setForm({ ...form, visit_date: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Experience At</label>
                <select
                  value={form.venue_interest}
                  onChange={(e) => setForm({ ...form, venue_interest: e.target.value })}
                  className={inputClass}
                >
                  <option value="">Choose a venue (optional)</option>
                  {tenants.map((t) => (
                    <option key={t.name} value={t.name}>{t.name} · {t.category}</option>
                  ))}
                  <option value="All / Not sure">All / Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Feedback</label>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Tell us about your experience — what you loved, what we can improve…"
                  className={inputClass}
                />
              </div>
              {status === "error" && (
                <p className="text-sm text-destructive">{errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-gold hover:scale-[1.01] transition disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === "loading" ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>
                ) : (
                  <>Send feedback <ArrowRight className="h-4 w-4" /></>
                )}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to receive occasional WhatsApp updates from Nilos Bay.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  cta,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  cta?: string;
  href?: string;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-background/60 p-6 hover:border-gold/40 transition">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-display text-xl font-semibold">{title}</h3>
      </div>
      <div className="mt-4 space-y-1 text-muted-foreground">
        {lines.map((l) => (
          <p key={l}>{l}</p>
        ))}
      </div>
      {cta && href && (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:gap-2 transition-all"
        >
          {cta} <ArrowRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div>
          <div className="font-display text-2xl font-bold text-gradient-gold">Nilos Bay</div>
          <p className="text-sm text-muted-foreground mt-1">Nile-side food court · Dokki, Giza</p>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nilos Bay. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Index;