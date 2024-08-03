import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        setStatus('');

        emailjs.sendForm('service_xvosrfu', 'template_5jl2wr1', e.target, 'lOVxkBCA5wVw_F4Lr')
            .then((result) => {
                console.log(result.text);
                setStatus('Your message has been sent!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error(error.text);
                setStatus('An error occurred. Please try again.');
            })
            .finally(() => {
                setSending(false);
            });
    };

    return (
        <div>
            <div className="relative w-full h-full">
                <img src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Background" className="object-cover" />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-md p-6 sm:p-8 relative z-10"
                        data-v0-t="card"
                    >
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">Contact Us</h3>
                            <p className="text-sm text-muted-foreground">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-white">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="email"
                                        placeholder="Enter your email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="message"
                                    placeholder="Enter your message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
                                disabled={sending}
                            >
                                {sending ? 'Sending...' : 'Send Message'}
                            </button>
                            {status && <p className="mt-2 text-center text-sm">{status}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
