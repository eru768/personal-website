'use client';

import Image from 'next/image';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, replace this with an API call or form backend (e.g., Formspree, Resend, etc.)
    console.log('Submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <section className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">📬 Contact Me</h1>

        {submitted ? (
          <p className="text-green-600 text-center">Sadly this has not been implemented cuz I havent thought of how to do this well :( if you have an implementation method please let me know! </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-10 flex justify-center gap-10">
          <a
            href="https://example.com/linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-20 bg-gray-0 rounded-full flex items-center justify-center hover:bg-gray-300 transition">
            <Image src="/icons/linkedin.png" width={300} height={300} alt="LinkedIn"/>
          </a>
          <a
            href="https://example.com/github"
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-20 bg-gray-0 rounded-full flex items-center justify-center hover:bg-gray-300 transition">
            <Image src="/icons/github.png" width={300} height={300} alt="GitHub"/>
          </a>
        </div>
  </section>
</main>
  );
}
