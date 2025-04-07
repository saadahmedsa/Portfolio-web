"use client";

import React, { useState } from "react";

function Contact() {
  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "117d8fce-feb9-44dc-bf60-625006809b96");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setNames("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="w-full bg-gray-900 text-white py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold">GET IN TOUCH</h1>
        <h5 className="text-lg mt-4 max-w-2xl mx-auto">
          I would like to know the final requirements of your project. Please get in touch with me and share details about your project.
        </h5>
        <form onSubmit={onSubmit} className="mt-10 w-full max-w-md mx-auto flex flex-col gap-4">
          <input
            required
            placeholder="Name"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setNames(e.target.value)}
            value={names}
          />
          <input
            required
            placeholder="Email"
            type="email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            required
            placeholder="Leave a comment here"
            className="w-full p-3 h-32 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button type="submit" className="mt-5 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Send message
          </button>
          <p className="mt-5 text-lg text-purple-400">{result}</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
