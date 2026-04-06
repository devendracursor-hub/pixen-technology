"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  projectType: "Website Development",
  budget: "Under INR 50,000",
  details: ""
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setSubmitState("error");
        setMessage(result.error ?? "Unable to send inquiry right now.");
        return;
      }

      setSubmitState("success");
      setMessage("Inquiry sent successfully. We will contact you soon.");
      setFormData(initialForm);
    } catch {
      setSubmitState("error");
      setMessage("Network issue. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card mesh-panel grid gap-4 p-6">
      <div className="rounded-2xl border border-emerald-300/40 bg-emerald-50 p-4 text-sm text-emerald-800">
        Response time: within 24 business hours. For urgent requests, use WhatsApp.
      </div>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Full Name
        <input
          required
          name="name"
          value={formData.name}
          onChange={(event) => setFormData({ ...formData, name: event.target.value })}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm outline-none ring-accent/30 focus:ring"
          placeholder="Your name"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Email Address
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm outline-none ring-accent/30 focus:ring"
          placeholder="you@company.com"
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Project Type
        <select
          name="projectType"
          value={formData.projectType}
          onChange={(event) => setFormData({ ...formData, projectType: event.target.value })}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm outline-none ring-accent/30 focus:ring"
        >
          <option>Website Development</option>
          <option>Web Application</option>
          <option>Mobile App</option>
          <option>Custom Software</option>
          <option>UI/UX Design</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Budget Range
        <select
          name="budget"
          value={formData.budget}
          onChange={(event) => setFormData({ ...formData, budget: event.target.value })}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm outline-none ring-accent/30 focus:ring"
        >
          <option>Under INR 50,000</option>
          <option>INR 50,000 - 2,00,000</option>
          <option>INR 2,00,000 - 5,00,000</option>
          <option>INR 5,00,000+</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Project Details
        <textarea
          required
          rows={5}
          name="details"
          value={formData.details}
          onChange={(event) => setFormData({ ...formData, details: event.target.value })}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm outline-none ring-accent/30 focus:ring"
          placeholder="Tell us your requirements, timeline, and goals."
        />
      </label>

      <button type="submit" disabled={submitState === "submitting"} className="btn-primary mt-1 w-fit">
        {submitState === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>

      {message ? (
        <p
          className={`text-sm ${submitState === "success" ? "text-emerald-700" : "text-rose-700"}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
