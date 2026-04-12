import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import BusinessDetails from "@/components/contact/BusinessDetails";

export const metadata: Metadata = {
  title: "Contact — JVANET PTY LTD",
  description:
    "Get in touch with JVANET PTY LTD. Based in Brisbane, Australia — building AI-powered products and providing enterprise IT consulting.",
};

export default function ContactPage() {
  return (
    <main className="pt-24 pb-24 md:pt-32 md:pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 md:mb-20 max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-6">
            Contact
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Whether you have a project in mind or want to explore how AI can
            transform your operations, we&apos;d like to hear from you.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <aside>
            <BusinessDetails />
          </aside>
        </div>
      </div>
    </main>
  );
}
