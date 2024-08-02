import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmail = () => {
        const mailtoLink = `mailto:support@yourdomain.com?subject=Contact%20Us&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
            <main className="flex-grow">
                <section className="py-16 px-4">
                    <div className="container mx-auto text-center">
                        <h1 className="text-5xl font-heading font-extrabold mb-4">Contact Us</h1>
                        <p className="text-xl mb-8">We'd love to hear from you. Please fill out the form below and we'll get in touch with you shortly.</p>
                        <div className="max-w-md mx-auto">
                            <div className="mb-4">
                                <label className="block text-left text-gray-300 mb-2" htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-700 bg-gray-800 text-gray-300 rounded-md"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-left text-gray-300 mb-2" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-700 bg-gray-800 text-gray-300 rounded-md"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-left text-gray-300 mb-2" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    className="w-full px-3 py-2 border border-gray-700 bg-gray-800 text-gray-300 rounded-md"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows="5"
                                    required
                                />
                            </div>
                            <button
                                onClick={handleEmail}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md"
                            >
                                Send Email
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;