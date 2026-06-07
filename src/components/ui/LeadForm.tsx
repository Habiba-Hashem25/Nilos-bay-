import { useState } from "react";
import { Gift, Send } from "lucide-react";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // هنا بعدين تربطيه ب API
    alert("🎉 You're in! We'll contact you soon.");
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-black via-neutral-900 to-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Headline */}
        <div className="inline-flex items-center gap-2 mb-4 text-gold">
          <Gift className="w-5 h-5" />
          <span className="uppercase tracking-widest text-sm">
            Limited Offer
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold font-display">
          Win a Free Experience at{" "}
          <span className="text-gradient-gold">Nilos Bay</span>
        </h2>

        <p className="mt-4 text-muted-foreground">
          Enter your details for a chance to win a free drink, bowling game or
          Nile boat ride 🎁
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-4 bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="p-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none"
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <select
            required
            className="p-3 rounded-lg bg-black/40 border border-white/10"
            onChange={(e) =>
              setForm({ ...form, interest: e.target.value })
            }
          >
            <option value="">What do you love most?</option>
            <option>Dining</option>
            <option>Coffee</option>
            <option>Bowling</option>
            <option>Boat Ride</option>
          </select>

          <button
            type="submit"
            className="mt-4 bg-gradient-gold text-black font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 transition"
          >
            Join & Win <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}