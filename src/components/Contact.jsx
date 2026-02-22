import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef()
    const [status, setStatus] = useState('idle') // idle, sending, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')

        // EmailJS Integration
        // service_id: service_q4j9tq8
        // template_id: YOUR_TEMPLATE_ID
        // public_key: YOUR_PUBLIC_KEY

        emailjs.sendForm(
            'service_q4j9tq8',
            'YOUR_TEMPLATE_ID',
            formRef.current,
            'YOUR_PUBLIC_KEY'
        )
            .then(() => {
                setStatus('success')
                setFormData({ name: '', email: '', subject: '', message: '' })
                setTimeout(() => setStatus('idle'), 5000)
            })
            .catch((error) => {
                console.error('Email failed:', error)
                setStatus('error')
                setTimeout(() => setStatus('idle'), 5000)
            })
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const contactInfo = [
        { icon: <Mail className="text-neon-blue" />, title: "Email", value: "cssachin83@gmail.com", link: "mailto:cssachin83@gmail.com" },
        { icon: <Phone className="text-neon-blue" />, title: "Phone", value: "+91 8496001030", link: "tel:8496001030" },
        { icon: <MapPin className="text-neon-blue" />, title: "Location", value: "Bangalore, India", link: "#" }
    ]

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-4 font-heading tracking-tighter uppercase italic text-slate-900 dark:text-white">Get In Touch</h2>
                    <div className="h-1.5 w-32 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_rgba(0,242,255,0.8)]"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 font-heading uppercase">Connect With Me</h3>
                        <p className="text-slate-600 dark:text-gray-400 mb-10 text-lg leading-relaxed">
                            Have a project in mind or just want to chat about DevOps? Feel free to reach out. I'm always open to discussing new opportunities and technical challenges.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((info, idx) => (
                                <div key={idx} className="flex items-center gap-6 group">
                                    <div className="p-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl group-hover:neon-border transition-all">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-slate-500 dark:text-gray-500 text-xs font-mono uppercase tracking-widest mb-1">{info.title}</h4>
                                        <a href={info.link} className="text-slate-900 dark:text-white text-lg font-bold hover:text-neon-blue transition-colors">
                                            {info.value}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-6 mt-12">
                            <a href="https://github.com/01Sachinc" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full hover:neon-border group transition-all">
                                <Github className="text-slate-400 dark:text-gray-400 group-hover:text-neon-blue" size={24} />
                            </a>
                            <a href="https://linkedin.com/in/sachinc" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full hover:neon-border group transition-all">
                                <Linkedin className="text-slate-400 dark:text-gray-400 group-hover:text-neon-blue" size={24} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-6 shadow-lg dark:shadow-none relative"
                    >
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-20 bg-green-500/10 backdrop-blur-md flex flex-col items-center justify-center text-center p-6"
                                >
                                    <CheckCircle size={64} className="text-green-500 mb-4" />
                                    <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase font-heading">Message Sent!</h4>
                                    <p className="text-slate-600 dark:text-gray-400 mt-2">I'll get back to you as soon as possible.</p>
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-20 bg-red-500/10 backdrop-blur-md flex flex-col items-center justify-center text-center p-6"
                                >
                                    <AlertCircle size={64} className="text-red-500 mb-4" />
                                    <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase font-heading">Transmission Failed</h4>
                                    <p className="text-slate-600 dark:text-gray-400 mt-2">Something went wrong. Please try emailing me directly.</p>
                                    <button onClick={() => setStatus('idle')} className="mt-4 text-neon-blue underline font-mono text-sm">Return to Form</button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-slate-500 dark:text-gray-500 uppercase">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-slate-200 dark:bg-black/40 border border-slate-300 dark:border-white/10 rounded-none px-4 py-3 text-slate-900 dark:text-white focus:neon-border outline-none transition-all"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-slate-500 dark:text-gray-500 uppercase">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-slate-200 dark:bg-black/40 border border-slate-300 dark:border-white/10 rounded-none px-4 py-3 text-slate-900 dark:text-white focus:neon-border outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2 text-left">
                            <label className="text-xs font-mono text-slate-500 dark:text-gray-500 uppercase">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-slate-200 dark:bg-black/40 border border-slate-300 dark:border-white/10 rounded-none px-4 py-3 text-slate-900 dark:text-white focus:neon-border outline-none transition-all"
                                required
                            />
                        </div>
                        <div className="space-y-2 text-left">
                            <label className="text-xs font-mono text-slate-500 dark:text-gray-500 uppercase">Your Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full bg-slate-200 dark:bg-black/40 border border-slate-300 dark:border-white/10 rounded-none px-4 py-3 text-slate-900 dark:text-white focus:neon-border outline-none transition-all resize-none"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className={`w-full py-4 font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,242,255,0.3)] ${status === 'sending'
                                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                                    : 'bg-neon-blue text-black hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black'
                                }`}
                        >
                            {status === 'sending' ? (
                                <>Uploading Payload... <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}><Send size={18} /></motion.div></>
                            ) : (
                                <>Send Message <Send size={18} /></>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-blue/5 blur-[120px] rounded-full -z-10"></div>
        </section>
    )
}

export default Contact
