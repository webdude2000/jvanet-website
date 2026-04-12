"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function buildMailto(): string {
    const subject = encodeURIComponent(form.subject || "Website Enquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    return `mailto:hello@jvanet.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      action={buildMailto()}
      method="GET"
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/40 transition-colors duration-200"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/40 transition-colors duration-200"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text text-sm focus:outline-none focus:border-accent/40 transition-colors duration-200 appearance-none"
        >
          <option value="" disabled>Select a topic</option>
          <option value="General Enquiry">General Enquiry</option>
          <option value="Product Enquiry">Product Enquiry</option>
          <option value="Consulting Services">Consulting Services</option>
          <option value="Partnership">Partnership</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/40 transition-colors duration-200 resize-none"
          placeholder="Tell us about your project or enquiry..."
        />
      </div>

      <button
        type="submit"
        className="btn-primary rounded-lg px-8 py-3 text-sm font-display font-semibold text-accent tracking-wide"
      >
        Send Message
      </button>
    </form>
  );
}
