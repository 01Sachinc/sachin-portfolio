import React from 'react';
import { Github, Linkedin, Mail, Twitter, Cpu } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-bg border-t border-white/5 pt-16 pb-8">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-primary-600 rounded flex items-center justify-center">
                                <Cpu className="text-white w-5 h-5" />
                            </div>
                            <span className="text-white font-bold text-lg">Sachin <span className="text-primary-500">C S</span></span>
                        </div>
                        <p className="text-slate-400 max-w-sm mb-6">
                            Java Full Stack Developer specializing in Spring Boot microservices,
                            cloud architecture, and DevOps automation. Building the future of enterprise software.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/sachincs" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/sachincs" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:sachin.cs.dev@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-slate-400 hover:text-primary-500 transition-colors">About</a></li>
                            <li><a href="#skills" className="text-slate-400 hover:text-primary-500 transition-colors">Skills</a></li>
                            <li><a href="#projects" className="text-slate-400 hover:text-primary-500 transition-colors">Projects</a></li>
                            <li><a href="#contact" className="text-slate-400 hover:text-primary-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Newsletter</h4>
                        <p className="text-slate-400 text-sm mb-4">Subscribe to receive tech updates and news.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary-500 w-full"
                            />
                            <button className="bg-primary-600 hover:bg-primary-700 p-2 rounded-lg transition-colors">
                                <Mail size={18} className="text-white" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} Sachin C S. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm flex items-center gap-2">
                        Built with <span className="text-primary-500 font-medium">React</span> & <span className="text-primary-500 font-medium">AWS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
