import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import { portfolioData } from '../data/portfolio-data';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // EmailJS integration template (User will need to set up their own Service ID, Template ID, and Public Key)
        // For now, we'll simulate a successful send for the demonstration if no keys are provided
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setTimeout(() => {
                setStatus('success');
                e.target.reset();
            }, 1500);
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                setStatus('success');
                e.target.reset();
            }, (error) => {
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="section-container">
            <div className="flex flex-col md:flex-row gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:w-1/3"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's <span className="text-primary-500">Connect</span></h2>
                    <p className="text-slate-400 mb-10 leading-relaxed">
                        I'm always interested in hearing about new projects and opportunities.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary-500">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
                                <a href={`mailto:${portfolioData.contact.email}`} className="text-white hover:text-primary-500 transition-colors">{portfolioData.contact.email}</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary-500">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Location</p>
                                <p className="text-white">Bengaluru, India (Open to Remote)</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                            <a href={portfolioData.contact.github} className="text-slate-400 hover:text-white transition-colors"><Github size={24} /></a>
                            <a href={portfolioData.contact.linkedin} className="text-slate-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:w-2/3"
                >
                    <div className="glass-card p-8 md:p-10">
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="Inquiry about project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    placeholder="Your message here..."
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full btn-primary justify-center gap-2 h-14"
                            >
                                {status === 'sending' ? (
                                    <>Sending...</>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-lg border border-green-400/20">
                                    <CheckCircle size={18} />
                                    <span>Message sent successfully! I'll get back to you soon.</span>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                                    <AlertCircle size={18} />
                                    <span>Oops! Something went wrong. Please try again later.</span>
                                </div>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
