import React from 'react'

export default function Contact({ config }) {
  const { contact } = config

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Contact
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Information */}
          <div className="bg-primary text-white p-6 rounded-xl animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-4">
              {contact.heading}
            </h3>

            <p className="text-white/90">
              {contact.description}
            </p>

            <ul className="mt-4 text-sm space-y-2">
              <li>Email: {contact.email}</li>
              <li>Location: {contact.location}</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up delay-100">
            <form
              action="https://formsubmit.co/akhilkailas2001@gmail.com"
              method="POST"
              className="space-y-4"
            >

              {/* Subject of the email you receive */}
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Message"
              />

              {/* Reply directly to the person who submitted the form */}
              <input
                type="hidden"
                name="_replyto"
                value=""
              />

              {/* Email template */}
              <input
                type="hidden"
                name="_template"
                value="table"
              />

              {/* Your Name */}
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>

                <input
                  name="name"
                  id="name"
                  type="text"
                  required
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>

              {/* Your Email */}
              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>

                <input
                  name="email"
                  id="email"
                  type="email"
                  required
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="abc@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-2">
                  Your Message
                </label>

                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Hello Akhil, I'd like to discuss."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-colors w-full"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
