import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  MessageCircle,
  Star,
  Sparkles,
  ShieldCheck,
  Clock,
  Award,
  Users,
  Stethoscope,
  Smile,
  AlertCircle,
  CheckCircle2,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Calendar,
  Zap,
  Heart,
  Crown,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/use-reveal";

import heroTooth from "@/assets/hero-tooth.png";
import doctorImg from "@/assets/doctor.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import toolMirror from "@/assets/tool-mirror.png";
import toolScaler from "@/assets/tool-scaler.png";

const BRAND = "Apna Dental Care";
const PHONE = "+919999999999";
const WHATSAPP = "919999999999";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apna Dental Care — Pain-Free Dentistry at Affordable Prices" },
      {
        name: "description",
        content:
          "Premium dental clinic offering pain-free root canal, teeth whitening, implants & aligners. 1000+ happy patients. Book a free consultation today.",
      },
      { property: "og:title", content: "Apna Dental Care — Fix Your Smile" },
      {
        property: "og:description",
        content:
          "Advanced dental care with affordable pricing near you. Book on WhatsApp.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster position="top-center" richColors />
      <Header />
      <Hero />
      <ScrollHook />
      <Services />
      <BeforeAfter />
      <WhyUs />
      <Testimonials />
      <Doctor />
      <Booking />
      <UrgencyOffer />
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}

/* ============ HEADER ============ */
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center shadow-soft">
            <Smile className="w-5 h-5 text-primary-foreground" />
          </span>
          <span>{BRAND}</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#results" className="hover:text-foreground transition">Results</a>
          <a href="#doctor" className="hover:text-foreground transition">Doctor</a>
          <a href="#book" className="hover:text-foreground transition">Book</a>
        </nav>
        <a href={`tel:${PHONE}`} className="hidden sm:inline-flex">
          <Button variant="outline" className="gap-2 rounded-full border-primary/30">
            <Phone className="w-4 h-4 text-primary" />
            <span className="font-semibold">Call Now</span>
          </Button>
        </a>
      </div>
    </header>
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-20 md:pb-28 bg-gradient-hero overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-glow animate-glow-pulse" />
      <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-gradient-glow animate-glow-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-7 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-primary/20 shadow-soft animate-fade-up">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-destructive animate-ping-ring" />
              <span className="relative w-2 h-2 rounded-full bg-destructive" />
            </span>
            <span className="text-xs font-semibold text-foreground">Limited slots available today</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Fix Your Smile{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Without Pain
            </span>{" "}
            or High Costs
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Advanced dental care with affordable pricing near you. Trusted by
            <span className="font-semibold text-foreground"> 1000+ happy patients</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#book">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-base font-semibold bg-gradient-primary hover:opacity-95 animate-pulse-cta">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment Now
              </Button>
            </a>
            <a href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%27d%20like%20to%20book%20a%20dental%20appointment`} target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 h-14 text-base font-semibold border-2 border-[oklch(0.62_0.18_145)] text-[oklch(0.45_0.18_145)] hover:bg-[oklch(0.95_0.05_145)]">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <TrustChip icon={<Star className="w-4 h-4 fill-[oklch(0.75_0.16_85)] text-[oklch(0.75_0.16_85)]" />} text="5★ · 1000+ Happy Patients" />
            <TrustChip icon={<ShieldCheck className="w-4 h-4 text-primary" />} text="Certified Dentist" />
            <TrustChip icon={<Clock className="w-4 h-4 text-primary" />} text="Same Day Treatment" />
          </div>
        </div>

        {/* Right — 3D Tooth */}
        <div className="relative h-[420px] sm:h-[520px] flex items-center justify-center perspective-[1200px]">
          {/* Floating tools */}
          <img
            src={toolMirror}
            alt=""
            aria-hidden="true"
            className="absolute top-6 left-2 w-24 sm:w-32 opacity-90 animate-drift-1 drop-shadow-2xl"
          />
          <img
            src={toolScaler}
            alt=""
            aria-hidden="true"
            className="absolute bottom-10 right-2 w-28 sm:w-40 opacity-90 animate-drift-2 drop-shadow-2xl"
          />

          {/* Glow ring behind tooth */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-accent/40 to-primary/30 blur-3xl animate-glow-pulse" />

          {/* The tooth */}
          <div className="relative animate-tilt-rotate">
            <img
              src={heroTooth}
              alt="Premium 3D rendered tooth"
              width={520}
              height={520}
              className="relative w-72 sm:w-[420px] drop-shadow-[0_30px_50px_oklch(0.55_0.18_240/0.4)]"
            />
          </div>

          {/* Floating stat cards */}
          <div className="absolute top-4 right-2 sm:right-8 bg-card/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-strong border border-border animate-float-slow">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[oklch(0.75_0.16_85)]" />
              <div>
                <p className="text-xs text-muted-foreground">Experience</p>
                <p className="font-bold text-sm">5+ Years</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-0 sm:left-4 bg-card/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-strong border border-border animate-float-slow" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-destructive" />
              <div>
                <p className="text-xs text-muted-foreground">Patients</p>
                <p className="font-bold text-sm">1000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustChip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      {icon}
      <span>{text}</span>
    </div>
  );
}

/* ============ SCROLL HOOK ============ */
function ScrollHook() {
  const problems = [
    { icon: <Zap className="w-8 h-8" />, label: "Tooth Pain", color: "oklch(0.65 0.22 25)" },
    { icon: <AlertCircle className="w-8 h-8" />, label: "Yellow Teeth", color: "oklch(0.75 0.16 85)" },
    { icon: <Sparkles className="w-8 h-8" />, label: "Broken / Missing", color: "oklch(0.55 0.18 240)" },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Still ignoring your dental problem?
        </h2>
        <p className="reveal text-muted-foreground text-lg mb-12">It only gets worse — and more expensive.</p>

        <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-10">
          {problems.map((p, i) => (
            <div
              key={p.label}
              className="reveal bg-card rounded-2xl p-5 sm:p-8 shadow-medium border border-border card-3d"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl mx-auto mb-3 grid place-items-center text-primary-foreground animate-pop-in"
                style={{ background: p.color, animationDelay: `${i * 0.15}s` }}
              >
                {p.icon}
              </div>
              <p className="font-semibold text-sm sm:text-base">{p.label}</p>
            </div>
          ))}
        </div>

        <p className="reveal text-xl sm:text-2xl font-semibold">
          We fix all of this in just{" "}
          <span className="text-primary underline decoration-accent decoration-4 underline-offset-4">a few visits.</span>
        </p>
      </div>
    </section>
  );
}

/* ============ SERVICES ============ */
function Services() {
  const services = [
    { icon: <Sparkles className="w-7 h-7" />, title: "Teeth Cleaning", desc: "Sparkling smile in just 30 minutes — zero pain." },
    { icon: <Zap className="w-7 h-7" />, title: "Root Canal Treatment", desc: "Pain-free root canal in just 1–2 sittings." },
    { icon: <Smile className="w-7 h-7" />, title: "Teeth Whitening", desc: "Up to 8 shades brighter — same-day results." },
    { icon: <Crown className="w-7 h-7" />, title: "Braces / Aligners", desc: "Straighten teeth invisibly — confidence guaranteed." },
    { icon: <Stethoscope className="w-7 h-7" />, title: "Dental Implants", desc: "Permanent natural-looking replacement teeth." },
    { icon: <Heart className="w-7 h-7" />, title: "Kids Dentistry", desc: "Gentle care your child will actually look forward to." },
  ];
  return (
    <section id="services" className="py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="reveal text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Services</p>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Everything your smile needs.</h2>
          <p className="reveal text-muted-foreground text-lg">Premium care, transparent pricing, zero surprises.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative bg-gradient-card rounded-3xl p-7 shadow-soft border border-border card-3d cursor-pointer"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground grid place-items-center mb-5 shadow-medium group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              <ChevronRight className="absolute top-7 right-7 w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ BEFORE / AFTER ============ */
function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <section id="results" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <p className="reveal text-sm font-semibold text-primary uppercase tracking-wider mb-3">Real Results</p>
        <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">See the transformation.</h2>
        <p className="reveal text-muted-foreground text-lg mb-12">Drag the slider — real patient. Real results.</p>

        <div
          ref={ref}
          onMouseMove={(e) => dragging.current && move(e.clientX)}
          onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchMove={(e) => move(e.touches[0].clientX)}
          className="reveal relative aspect-[4/3] sm:aspect-[16/10] max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-strong cursor-ew-resize select-none border-4 border-card"
        >
          <img src={beforeImg} alt="Before treatment" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 overflow-hidden shine-overlay" style={{ width: `${pos}%` }}>
            <img src={afterImg} alt="After treatment" loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }} />
          </div>
          {/* Labels */}
          <span className="absolute top-4 left-4 bg-destructive/90 text-destructive-foreground text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Before</span>
          <span className="absolute top-4 right-4 bg-[oklch(0.62_0.18_145)] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">After</span>
          {/* Divider */}
          <div className="absolute top-0 bottom-0 w-1 bg-white shadow-strong pointer-events-none" style={{ left: `calc(${pos}% - 2px)` }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-strong grid place-items-center border-4 border-primary">
              <ChevronRight className="w-4 h-4 -rotate-180 text-primary" />
              <ChevronRight className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
        <p className="reveal text-xs text-muted-foreground mt-6 italic">*Results may vary from person to person.</p>
      </div>
    </section>
  );
}

/* ============ WHY US ============ */
function WhyUs() {
  const points = [
    { icon: <Award className="w-7 h-7" />, title: "5+ Years Experience", desc: "Trusted hands, modern techniques." },
    { icon: <Users className="w-7 h-7" />, title: "1000+ Happy Patients", desc: "Real smiles, real reviews." },
    { icon: <Stethoscope className="w-7 h-7" />, title: "Modern Equipment", desc: "Latest sterilized technology." },
    { icon: <ShieldCheck className="w-7 h-7" />, title: "Affordable Pricing", desc: "Transparent — no hidden costs." },
  ];
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="reveal text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why Choose Us</p>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold">Care you can trust.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="reveal bg-card rounded-2xl p-6 shadow-soft border border-border text-center hover:shadow-strong hover:-translate-y-1 transition-all duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-medium">
                {p.icon}
              </div>
              <h3 className="font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ TESTIMONIALS ============ */
function Testimonials() {
  const reviews = [
    { name: "Priya Sharma", text: "Painless root canal — I was so nervous but it was over before I knew it. Highly recommend!", rating: 5 },
    { name: "Rahul Verma", text: "Got my teeth whitened. Friends actually noticed. The clinic is super clean and modern.", rating: 5 },
    { name: "Anjali Mehta", text: "Took my 7-year-old here. The doctor was so patient with her. We're regulars now.", rating: 5 },
    { name: "Suresh K.", text: "Affordable, professional, and honest pricing. No upselling. Loved my experience.", rating: 5 },
    { name: "Neha Gupta", text: "Got aligners — my smile transformed in 8 months. Worth every rupee.", rating: 5 },
  ];
  const loop = [...reviews, ...reviews];
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="text-center max-w-2xl mx-auto px-4 mb-14">
        <p className="reveal text-sm font-semibold text-primary uppercase tracking-wider mb-3">Patient Stories</p>
        <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold">Loved by 1000+ smiles.</h2>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-5 animate-marquee w-max">
          {loop.map((r, i) => (
            <div key={i} className="w-[320px] sm:w-[360px] bg-gradient-card rounded-2xl p-6 shadow-medium border border-border shrink-0">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-[oklch(0.75_0.16_85)] text-[oklch(0.75_0.16_85)]" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90 mb-4">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center font-bold text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ DOCTOR ============ */
function Doctor() {
  return (
    <section id="doctor" className="py-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal relative">
          <div className="absolute -inset-4 bg-gradient-primary rounded-[2rem] blur-2xl opacity-30" />
          <div className="relative aspect-square max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-strong border-4 border-card">
            <img src={doctorImg} alt="Dr. Arjun Sharma" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl px-5 py-3 shadow-strong border border-border">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[oklch(0.62_0.18_145)]" />
              <div>
                <p className="text-xs text-muted-foreground">BDS, MDS</p>
                <p className="font-bold text-sm">Certified Dentist</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="reveal text-sm font-semibold text-primary uppercase tracking-wider mb-3">Meet Your Dentist</p>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">Dr. Arjun Sharma</h2>
          <p className="reveal text-lg text-muted-foreground leading-relaxed mb-6">
            With over 5 years of experience and 1000+ smiles transformed, Dr. Arjun
            blends modern dental science with a warm, gentle approach.
          </p>
          <blockquote className="reveal border-l-4 border-primary pl-5 italic text-xl text-foreground/90 font-medium">
            "We treat patients like family, not just cases."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ============ BOOKING ============ */
function Booking() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    if (trimmedName.length < 2) {
      toast.error("Please enter your name");
      return;
    }
    if (!/^[0-9+\s\-()]{10,15}$/.test(trimmedPhone)) {
      toast.error("Please enter a valid phone number");
      return;
    }
    if (!service) {
      toast.error("Please select a service");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/public/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, phone: trimmedPhone, service }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Submission failed");

      toast.success("Appointment request submitted", {
        description:
          "Your appointment request has been submitted successfully. Our clinic will contact you soon.",
      });
      setName("");
      setPhone("");
      setService("");
    } catch (err) {
      toast.error("Something went wrong", {
        description: "Please try again or contact us on WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="reveal text-sm font-semibold text-primary uppercase tracking-wider mb-3">Book In 10 Seconds</p>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">Reserve your slot today.</h2>
          <p className="reveal text-muted-foreground text-lg mb-8">
            Quick. Simple. Zero pressure. We'll only contact you to confirm your appointment.
          </p>
          <div className="space-y-3">
            <a href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%27d%20like%20to%20book%20a%20dental%20appointment`} target="_blank" rel="noreferrer" className="reveal flex items-center gap-4 bg-[oklch(0.62_0.18_145)] text-white p-4 rounded-2xl hover:opacity-95 transition shadow-medium">
              <div className="w-12 h-12 rounded-xl bg-white/20 grid place-items-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">WhatsApp Instant Booking</p>
                <p className="text-sm opacity-90">Reply within 5 minutes</p>
              </div>
            </a>
            <a href={`tel:${PHONE}`} className="reveal flex items-center gap-4 bg-card border border-border p-4 rounded-2xl hover:shadow-medium transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold">Click to Call</p>
                <p className="text-sm text-muted-foreground">{PHONE}</p>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="reveal bg-gradient-card rounded-3xl p-7 sm:p-9 shadow-strong border border-border space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-semibold">Your Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required minLength={2} maxLength={60} placeholder="Enter full name" className="h-12 rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="font-semibold">Phone Number</Label>
            <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required pattern="[0-9+\s\-()]{10,15}" placeholder="+91 98765 43210" className="h-12 rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service" className="font-semibold">Service Needed</Label>
            <Select value={service} onValueChange={setService} required>
              <SelectTrigger id="service" className="h-12 rounded-xl">
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Teeth Cleaning">Teeth Cleaning</SelectItem>
                <SelectItem value="Root Canal">Root Canal</SelectItem>
                <SelectItem value="Teeth Whitening">Teeth Whitening</SelectItem>
                <SelectItem value="Braces / Aligners">Braces / Aligners</SelectItem>
                <SelectItem value="Dental Implants">Dental Implants</SelectItem>
                <SelectItem value="Something Else">Something Else</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" disabled={loading} size="lg" className="w-full h-14 rounded-xl text-base font-bold bg-gradient-primary hover:opacity-95">
            {loading ? "Submitting..." : "Book Your Slot Now"}
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            🔒 No spam. We'll only contact you for your appointment.
          </p>
        </form>
      </div>
    </section>
  );
}

/* ============ URGENCY OFFER ============ */
function UrgencyOffer() {
  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
        <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6">
          <Clock className="w-4 h-4" />
          <span className="text-xs font-semibold uppercase tracking-wider">Limited Time Offer</span>
        </div>
        <h2 className="reveal text-3xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-[1.05]">
          Get Free Consultation This Week
        </h2>
        <p className="reveal text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Limited time offer for new patients. Valued at ₹500 — yours free.
        </p>

        {/* Static countdown vibe */}
        <div className="reveal flex justify-center gap-3 sm:gap-4 mb-9">
          {[
            { v: "02", l: "Days" },
            { v: "14", l: "Hours" },
            { v: "37", l: "Mins" },
            { v: "52", l: "Secs" },
          ].map((b) => (
            <div key={b.l} className="bg-white/15 backdrop-blur-md rounded-2xl px-4 py-3 sm:px-5 sm:py-4 min-w-[70px] sm:min-w-[90px] border border-white/20">
              <p className="text-2xl sm:text-4xl font-bold tabular-nums">{b.v}</p>
              <p className="text-[10px] sm:text-xs uppercase opacity-80 tracking-wider mt-1">{b.l}</p>
            </div>
          ))}
        </div>

        <a href="#book" className="reveal inline-block">
          <Button size="lg" className="rounded-full h-14 px-10 text-base font-bold bg-white text-primary hover:bg-white/90 animate-pulse-cta">
            Claim Your Free Slot
          </Button>
        </a>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg mb-4">
            <span className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center">
              <Smile className="w-5 h-5" />
            </span>
            <span>{BRAND}</span>
          </div>
          <p className="text-sm text-background/70 leading-relaxed">
            Premium dental care, affordable pricing. Trusted by 1000+ happy patients.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Visit Us</h4>
          <p className="text-sm text-background/70 flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
            123 Main Street, Sector 21,<br />Your City, India 110001
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Get In Touch</h4>
          <div className="space-y-2 text-sm text-background/70">
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-background transition">
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <a href={`https://wa.me/${WHATSAPP}`} className="flex items-center gap-2 hover:text-background transition">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
          <div className="flex gap-3 mt-4">
            <SocialIcon><Instagram className="w-4 h-4" /></SocialIcon>
            <SocialIcon><Facebook className="w-4 h-4" /></SocialIcon>
            <SocialIcon><Youtube className="w-4 h-4" /></SocialIcon>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Find Us</h4>
          <div className="aspect-video rounded-xl bg-background/10 border border-background/20 grid place-items-center text-xs text-background/60">
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6" />
              <span>Google Map</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-background/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-sm text-background/70 italic">"Your smile is safe with us."</p>
        <p className="text-xs text-background/50">© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
      </div>
    </footer>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="w-9 h-9 rounded-full bg-background/10 hover:bg-background/20 grid place-items-center transition">
      {children}
    </a>
  );
}

/* ============ STICKY WHATSAPP ============ */
function StickyWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%27d%20like%20to%20book%20a%20dental%20appointment`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[oklch(0.62_0.18_145)] animate-ping-ring" />
      <span className="relative flex items-center gap-2 bg-[oklch(0.62_0.18_145)] text-white px-4 py-3 sm:px-5 sm:py-4 rounded-full shadow-strong hover:scale-105 transition-transform">
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline font-semibold text-sm">Chat with us</span>
      </span>
    </a>
  );
}
