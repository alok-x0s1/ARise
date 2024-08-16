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
        <div className="flex pt-24 flex-col min-h-screen bg-primary text-secondary">
            <main className="flex-grow">
                <section className="py-16 px-4">
                    <div className="container mx-auto text-center">
                        <h1 className="text-5xl font-heading font-extrabold mb-4">Contact Us</h1>
                        <p className="text-xl mb-8">We'd love to hear from you. Please fill out the form below and we'll get in touch with you shortly.</p>
                        <div className="max-w-lg mx-auto shadow-lg border-2 border-gray-400 p-8 rounded text-secondary">
                            <div className="mb-4">
                                <label className="block text-left mb-2" htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="relative block w-full px-3 py-2 border border-gray-400 placeholder-secondary/50 bg-primary-light focus:outline-none focus:ring-red focus:border-red focus:z-10 sm:text-sm rounded-t"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Enter your name'
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-left mb-2" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="relative block w-full px-3 py-2 border border-gray-400 placeholder-secondary/50 bg-primary-light focus:outline-none focus:ring-red focus:border-red focus:z-10 sm:text-sm rounded-t"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter your email'
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-left mb-2" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    className="w-full px-3 py-2 border border-gray-400 bg-primary-light rounded-t outline-none focus:ring-red focus:border-red focus:z-10 sm:text-sm"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows="5"
                                    required
                                    placeholder='Enter your message...'
                                />
                            </div>
                            <button
                                onClick={handleEmail}
                                className="w-full bg-blue hover:bg-blue-secondary duration-300 text-white font-bold py-2 px-4 rounded-md"
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