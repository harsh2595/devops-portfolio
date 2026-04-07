"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "AWS ECS + Terraform",
        desc: "Provisioned production infra with ECS, ALB & auto scaling.",
        impact: "Reduced infra setup time by 70%",
        details: "Terraform modules, CloudWatch, service discovery",
        link: "https://github.com/harsh2595",
    },
    {
        title: "CI/CD Pipeline",
        desc: "Automated build & deployment using GitHub Actions.",
        impact: "Cut deployment time from 30 mins → 5 mins",
        details: "Docker build, test, push, deploy",
        link: "#",
    },
    {
        title: "Dockerized App",
        desc: "Full-stack app containerized with optimized builds.",
        impact: "Improved performance by 40%",
        details: "Multi-stage builds, env configs",
        link: "#",
    },
    {
        title: "Kubernetes Deployment",
        desc: "Deployed scalable apps using Kubernetes.",
        impact: "Handled auto scaling with zero downtime",
        details: "Ingress, services, HPA",
        link: "#",
    },
    {
        title: "Monitoring Stack",
        desc: "Implemented Prometheus + Grafana.",
        impact: "Real-time alerting reduced downtime",
        details: "Dashboards, alert rules",
        link: "#",
    },
    {
        title: "Nginx + SSL",
        desc: "Configured reverse proxy with HTTPS.",
        impact: "Improved security & performance",
        details: "SSL, headers, load balancing",
        link: "#",
    },
];

export default function Portfolio() {
    const [dark, setDark] = useState(true);
    const [activeProject, setActiveProject] = useState(null);

    return (
        <div className={dark ? "bg-gray-900 text-white" : "bg-white text-black"}>
            {/* Navbar */}
            <nav className="flex justify-between items-center p-6 shadow-md sticky top-0 z-50">
                <h1 className="text-xl font-bold">Harsh Kashyap | DevOps Engineer </h1>
                <div className="space-x-4 flex items-center">
                    <button onClick={() => setDark(!dark)} className="border px-3 py-1 rounded">
                        {dark ? "Light" : "Dark"}
                    </button>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            {/* Hero */}
            <section className="text-center py-20 px-6">
                <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold mb-4">
                    Hi, I'm Harsh 👋
                </motion.h2>
                <p className="text-lg mb-4">AWS | Terraform | Docker | Kubernetes | CI/CD</p>
                <p className="text-sm opacity-70">I build scalable, automated & production-ready cloud systems.</p>
            </section>

            {/* Projects */}
            <section id="projects" className="py-16 px-6">
                <h3 className="text-2xl font-bold mb-8 text-center"> Projects</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-2xl shadow-lg border cursor-pointer"
                            onClick={() => setActiveProject(project)}
                        >
                            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                            <p className="mb-2">{project.desc}</p>
                            <p className="text-green-400 text-sm">{project.impact}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                {activeProject && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                        <div className="bg-white text-black p-6 rounded-xl max-w-md">
                            <h4 className="text-xl font-bold mb-2">{activeProject.title}</h4>
                            <p>{activeProject.desc}</p>
                            <p className="text-green-600 my-2">{activeProject.impact}</p>
                            <p className="text-sm">{activeProject.details}</p>
                            <a href={activeProject.link} className="text-blue-500 block mt-2">View Code</a>
                            <button onClick={() => setActiveProject(null)} className="mt-4 px-4 py-2 bg-gray-800 text-white rounded">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </section>

            {/* Skills */}
            <section id="skills" className="py-16 px-6 text-center">
                <h3 className="text-2xl font-bold mb-6"> Skills</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {["AWS", "Docker", "Terraform", "Kubernetes", "Jenkins", "Prometheus", "Grafana", "Linux"].map((s) => (
                        <span key={s} className="border px-4 py-2 rounded">{s}</span>
                    ))}
                </div>
            </section>



            {/* Contact */}
            <section id="contact" className="py-16 px-6 text-center">
                <h3 className="text-2xl font-bold mb-4">📩 Contact</h3>
                <p>harsh@email.com</p>
                <div className="mt-2">
                    <a href="#" className="text-blue-500 mr-3">GitHub</a>
                    <a href="#" className="text-blue-500">LinkedIn</a>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center p-6 text-sm opacity-60">
                © {new Date().getFullYear()} Harsh Kashyap | DevOps Engineer
            </footer>
        </div>
    );
}