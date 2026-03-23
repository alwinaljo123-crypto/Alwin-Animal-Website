"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

export default function ContributionForm() {
  const [formData, setFormData] = useState({ name: "", age: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Allow it to fetch from standard local backend if running locally
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contribute`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFeedback("Thank you for your contribution!");
        setFormData({ name: "", age: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setFeedback(data.message || "Something went wrong.");
      }
    } catch (err) {
      // In production API calls might go to a different URL
      console.error(err);
      setStatus("error");
      setFeedback("Failed to connect to the server.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto w-full glass-panel rounded-3xl p-8 border border-emerald-500/20 bg-emerald-950/30 backdrop-blur-xl shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[80px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-600/10 rounded-full blur-[80px] -z-10" />

      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200 mb-2">
          Join the Cause
        </h2>
        <p className="text-emerald-100/70">
          Contribute to the protection of endangered species. Every voice matters.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-emerald-200/80">Name</label>
            <input
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-emerald-950/50 border border-emerald-800/50 rounded-xl px-4 py-3 text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-emerald-700"
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-emerald-200/80">Age (Optional)</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="w-full bg-emerald-950/50 border border-emerald-800/50 rounded-xl px-4 py-3 text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-emerald-700"
              placeholder="Your age"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-emerald-200/80">Subject</label>
          <input
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full bg-emerald-950/50 border border-emerald-800/50 rounded-xl px-4 py-3 text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-emerald-700"
            placeholder="What is this regarding?"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-emerald-200/80">Message</label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-emerald-950/50 border border-emerald-800/50 rounded-xl px-4 py-3 text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-emerald-700 resize-none"
            placeholder="Share your thoughts or ask how you can help..."
          />
        </div>

        <button
          disabled={status === "loading"}
          type="submit"
          className="w-full group mt-4 relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-8 font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
        >
          <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          {status === "loading" ? (
            <Loader2 className="w-5 h-5 animate-spin mr-2" />
          ) : (
            <>
              <span className="mr-2">Send Contribution</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>

        {feedback && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center text-sm font-medium ${status === "success" ? "text-emerald-400" : "text-red-400"}`}
          >
            {feedback}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}
