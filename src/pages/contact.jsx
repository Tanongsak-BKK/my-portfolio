import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace these with your actual EmailJS credentials
    // You can get these from https://dashboard.emailjs.com/
    const serviceId = 'service_63sh8sp';
    const templateId = 'template_8wb7pub';
    const publicKey = '5GCQXtMs6JsDFg2WW';

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setStatus('success');
          console.log('SUCCESS!');
          form.current.reset(); // Clear the form
        },
        (error) => {
          setStatus('error');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id="contact" className="relative isolate overflow-hidden bg-[#fdfbf7] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl font-serif">Contact Me</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Send me a message and I'll get back to you soon.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#8d6e63] sm:text-sm sm:leading-6 bg-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#8d6e63] sm:text-sm sm:leading-6 bg-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                Subject
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#8d6e63] sm:text-sm sm:leading-6 bg-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#8d6e63] sm:text-sm sm:leading-6 bg-white"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`paper-button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="mt-4 text-green-600 text-center font-medium">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-600 text-center font-medium">Failed to send message. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
