"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "AWS ECS EC2 Cluster using Terraform",
        desc: "Deployed a scalable ECS cluster on EC2 using Terraform modules with ALB, Auto Scaling, and ECR.",
        impact: "Automated infra provisioning & improved scalability",
        details: "Terraform, ECS, ALB, ASG, ECR",
        link: "https://github.com/harsh2595/terraform-ecsec2",
    },
    {
        title: "OpenSearch Cluster & Terraform State",
        desc: "Managed OpenSearch cluster with Terraform including drift detection & remote state.",
        impact: "Reliable infra with state consistency",
        details: "Terraform, OpenSearch, State Mgmt",
        link: "https://github.com/harsh2595/terraform-opensearch-aws",
    },
    {
        title: "Kubernetes Deployment with Helm",
        desc: "Deployed workloads using Helm with HPA, RBAC, Ingress.",
        impact: "Zero downtime deployments",
        details: "K8s, Helm, HPA, RBAC",
        link: "https://github.com/harsh2595/k8s-learning",
    },
    {
        title: "Node.js App on ECS (CI/CD)",
        desc: "CI/CD pipeline using Jenkins, Docker & ECS.",
        impact: "Reduced deployment time",
        details: "Jenkins, Docker, ECS",
        link: "https://github.com/harsh2595/node-ecs-app.git",
    },
    {
        title: "Node.js on EKS with Monitoring",
        desc: "Deployed Node app with Prometheus & Grafana.",
        impact: "Real-time monitoring & alerting",
        details: "EKS, Prometheus, Grafana",
        link: "https://github.com/harsh2595/node-eks-app-monitoring.git",
    },
];

export default function Portfolio() {
    const [dark, setDark] = useState(true);
    const [activeProject, setActiveProject] = useState(null);

    return (
        <div className={`${dark ? "bg-gray-950 text-white" : "bg-white text-black"} min-h-screen relative overflow-x-hidden`}>

            {/* Background Glow */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

            {/* Navbar */}
            <nav className="flex justify-between items-center px-6 py-4 sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
                <h1 className="text-lg font-bold">Harsh Kashyap</h1>

                <div className="flex items-center gap-5">
                    <button
                        onClick={() => setDark(!dark)}
                        className="border px-3 py-1 rounded hover:bg-white hover:text-black transition"
                    >
                        {dark ? "Light" : "Dark"}
                    </button>

                    <a href="#projects" className="hover:text-blue-400">Projects</a>
                    <a href="#skills" className="hover:text-blue-400">Skills</a>
                    <a href="#contact" className="hover:text-blue-400">Contact</a>
                </div>
            </nav>

            {/* Hero */}
            <section className="text-center py-24 px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                >
                    DevOps Engineer 🚀
                </motion.h2>

                <p className="text-lg mb-4 opacity-80">
                    AWS • Kubernetes • Terraform • CI/CD
                </p>

                <p className="text-sm opacity-60 max-w-xl mx-auto">
                    I build scalable, automated, production-ready cloud systems.
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <a href="#projects" className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
                        View Work
                    </a>
                    <a href="#contact" className="px-6 py-2 border rounded-lg hover:bg-white hover:text-black transition">
                        Contact
                    </a>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-20 px-6 scroll-mt-24">
                <h3 className="text-3xl font-bold mb-12 text-center">🚀 Projects</h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:scale-[1.03] transition overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>

                            <h4 className="text-xl font-semibold mb-3 group-hover:text-blue-400">
                                {project.title}
                            </h4>

                            <p className="text-sm opacity-80 mb-3">{project.desc}</p>

                            <p className="text-green-400 text-xs mb-2">🚀 {project.impact}</p>

                            <p className="text-xs opacity-60 mb-4">{project.details}</p>

                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => setActiveProject(project)}
                                    className="text-blue-400 text-sm hover:underline"
                                >
                                    Details
                                </button>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm border px-3 py-1 rounded hover:bg-white hover:text-black transition"
                                >
                                    Code ↗
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                {activeProject && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                        <div className="bg-white text-black p-8 rounded-xl max-w-lg w-full mx-4">
                            <h4 className="text-xl font-bold mb-3">{activeProject.title}</h4>
                            <p>{activeProject.desc}</p>
                            <p className="text-green-600 my-2">{activeProject.impact}</p>
                            <p className="text-sm">{activeProject.details}</p>

                            <a
                                href={activeProject.link}
                                target="_blank"
                                className="text-blue-500 block mt-3"
                            >
                                View GitHub →
                            </a>

                            <button
                                onClick={() => setActiveProject(null)}
                                className="mt-4 w-full bg-gray-900 text-white py-2 rounded"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </section>

            {/* Skills */}
            <section id="skills" className="py-16 px-6 text-center scroll-mt-24">
                <h3 className="text-2xl font-bold mb-6">⚡ Skills</h3>

                <div className="flex flex-wrap justify-center gap-3">
                    {[
                        "AWS", "EC2", "ECS", "EKS", "Docker", "Kubernetes", "Helm",
                        "Terraform", "Jenkins", "CI/CD", "Prometheus", "Grafana",
                        "Linux", "Bash", "Git", "Nginx"
                    ].map((s) => (
                        <span
                            key={s}
                            className="px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-blue-500 transition text-sm"
                        >
                            {s}
                        </span>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-16 px-6 text-center scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4">Contact</h3>

                <p className="mb-4">harshkashyap.hk996@gmail.com</p>

                <div className="flex justify-center gap-6">
                    <a
                        href="https://github.com/harsh2595"
                        target="_blank"
                        className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white hover:text-black transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white hover:text-black transition"
                    >
                        LinkedIn
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center p-6 text-sm opacity-60">
                © {new Date().getFullYear()} Harsh Kashyap
            </footer>
        </div>
    );
}