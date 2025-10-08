import React from "react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-primary">Contact Us</h1>
      <p className="mb-8 text-muted-foreground">
        Have a question, feedback, or need support? Fill out the form below or email us at <a href="mailto:sani21.good.bad@gmail.com" className="text-primary underline">sani21.good.bad@gmail.com</a> and we’ll get back to you as soon as possible.
      </p>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input id="name" name="name" type="text" required className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input id="email" name="email" type="email" required className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea id="message" name="message" rows={5} required className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <button type="submit" className="bg-primary text-primary-foreground px-6 py-2 rounded font-semibold hover:bg-primary/90 transition-colors">Send Message</button>
      </form>
    </div>
  )
}
