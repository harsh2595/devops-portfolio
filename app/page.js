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
        link: "https://github.com/harsh2595/node-ecs-app",
    },
    {
        title: "Node.js on EKS with Monitoring",
        desc: "Deployed Node app with Prometheus & Grafana.",
        impact: "Real-time monitoring & alerting",
        details: "EKS, Prometheus, Grafana",
        link: "https://github.com/harsh2595/node-eks-app-monitoring",
    },
    {
        title: "GitHub Actions Pipeline for Python Dockerized App",
        desc: "GitHub Actions Pipeline triggred on push",
        impact: "Auto Deployment of python app",
        details: "Docker, python, GitHub Actions",
        link: "https://github.com/harsh2595/github-actions-practice.git",
    }
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
                <h1 className="font-bold">Harsh Kashyap | DevOps Engineer </h1>

                <div className="flex items-center gap-5">
                    <button onClick={() => setDark(!dark)} className="border px-3 py-1 rounded">
                        {dark ? "Light" : "Dark"}
                    </button>

                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            {/* Hero */}
            <section className="text-center py-24 px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                >
                    DevOps Engineer 🚀
                </motion.h2>

                <p className="mb-3">AWS • Kubernetes • Terraform • CI/CD • Docker • Monitoring</p>

                <a
                    href="/resume.pdf"
                    download
                    className="inline-block mt-4 px-6 py-2 bg-blue-500 rounded hover:bg-blue-600"
                >
                    Download Resume
                </a>
            </section>

            {/* Projects */}
            <section id="projects" className="py-20 px-6 scroll-mt-24">
                <h3 className="text-3xl font-bold text-center mb-10">Projects</h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 border rounded-xl">
                            <h4 className="font-bold mb-2">{p.title}</h4>
                            <p className="text-sm mb-2">{p.desc}</p>
                            <p className="text-green-400 text-xs mb-2">{p.impact}</p>

                            <div className="flex justify-between">
                                <button onClick={() => setActiveProject(p)} className="text-blue-400 text-sm">
                                    Details
                                </button>

                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm border px-2 rounded"
                                >
                                    Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                {activeProject && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
                        <div className="bg-white text-black p-6 rounded max-w-md">
                            <h4 className="font-bold">{activeProject.title}</h4>
                            <p>{activeProject.desc}</p>
                            <p className="text-green-600">{activeProject.impact}</p>
                            <p>{activeProject.details}</p>

                            <a href={activeProject.link} target="_blank" className="text-blue-500">
                                View Repo
                            </a>

                            <button onClick={() => setActiveProject(null)} className="block mt-4">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </section>

            {/* Experience */}
            <section id="experience" className="py-20 px-6 scroll-mt-24">
                <h3 className="text-3xl font-bold text-center mb-10">💼 Experience</h3>

                <div className="max-w-2xl mx-auto space-y-4">
                    <div className="p-4 border rounded">
                        <h4 className="font-bold">DevOps Engineer (1 Year)</h4>
                        <p className="text-sm">AWS, Kubernetes, CI/CD, Monitoring</p>
                    </div>

                    <div className="p-4 border rounded">
                        <h4 className="font-bold">QA Engineer (2.5 Years)</h4>
                        <p className="text-sm">Automation Testing, API Testing</p>
                    </div>

                    <div className="p-4 border rounded">
                        <h4 className="font-bold">Civil Engineer (1.3 Years)</h4>
                        <p className="text-sm">Project Execution & Site Management</p>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="py-20 px-6 text-center scroll-mt-24">
                <h3 className="text-3xl font-bold mb-10">Skills</h3>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Cloud */}
                    <div className="p-6 rounded-xl border bg-white/5 backdrop-blur">
                        <h4 className="font-semibold mb-4 text-blue-400">☁️ Cloud</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["AWS", "EC2", "ECS", "EKS", "S3", "IAM", "VPC", "CloudWatch", "ALB", "Route53"].map(s => (
                                <span key={s} className="px-3 py-1 text-sm border rounded-full">{s}</span>
                            ))}
                        </div>
                    </div>

                    {/* Containers */}
                    <div className="p-6 rounded-xl border bg-white/5 backdrop-blur">
                        <h4 className="font-semibold mb-4 text-green-400">🐳 Containers</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["Docker", "Docker Compose", "Containerization", "Image Optimization"].map(s => (
                                <span key={s} className="px-3 py-1 text-sm border rounded-full">{s}</span>
                            ))}
                        </div>
                    </div>

                    {/* Kubernetes */}
                    <div className="p-6 rounded-xl border bg-white/5 backdrop-blur">
                        <h4 className="font-semibold mb-4 text-purple-400">☸️ Kubernetes</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["Kubernetes", "Helm", "HPA", "VPA", "Ingress", "RBAC", "ConfigMaps", "Secrets", "PVC", "Scaling"].map(s => (
                                <span key={s} className="px-3 py-1 text-sm border rounded-full">{s}</span>
                            ))}
                        </div>
                    </div>

                    {/* CI/CD */}
                    <div className="p-6 rounded-xl border bg-white/5 backdrop-blur">
                        <h4 className="font-semibold mb-4 text-yellow-400">⚙️ CI/CD</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["Jenkins", "GitHub Actions", "CI/CD Pipelines", "Automation", "Build & Deploy", "Pipeline Optimization"].map(s => (
                                <span key={s} className="px-3 py-1 text-sm border rounded-full">{s}</span>
                            ))}
                        </div>
                    </div>

                    {/* IaC */}
                    <div className="p-6 rounded-xl border bg-white/5 backdrop-blur">
                        <h4 className="font-semibold mb-4 text-pink-400">🏗️ Infrastructure as Code</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["Terraform", "Terraform Modules", "State Management", "Infra Automation", "Provisioning"].map(s => (
                                <span key={s} className="px-3 py-1 text-sm border rounded-full">{s}</span>
                            ))}
                        </div>
                    </div>

                    {/* Monitoring */}
                    <div className="p-6 rounded-xl border bg-white/5 backdrop-blur">
                        <h4 className="font-semibold mb-4 text-red-400">📊 Monitoring & Logging</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["Prometheus", "Grafana", "Alerting", "OpenSearch", "ELK Stack", "Logging", "Observability"].map(s => (
                                <span key={s} className="px-3 py-1 text-sm border rounded-full">{s}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8"></div>
                    {/* OS & Tools */}
                    <div className="p-6 rounded-xl border bg-white/5 backdrop-blur">
                        <h4 className="font-semibold mb-4 text-gray-400">🖥️ OS & Tools</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["Linux", "Bash", "Shell Scripting", "Git", "GitHub", "Nginx", "SSL", "REST APIs"].map(s => (
                                <span key={s} className="px-3 py-1 text-sm border rounded-full">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 px-6 scroll-mt-24 bg-gradient-to-b from-gray-900 to-black">
                <h3 className="text-3xl font-bold text-center mb-10 text-white">📞 Contact</h3>

                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

                    {/* Left Side - Contact Info */}
                    <div className="text-center md:text-left text-gray-300 space-y-4">

                        {/* Email */}
                        <p>
                            📧
                            <a
                                href="mailto:harshkashyap.hk996@gmail.com"
                                className="ml-2 hover:text-blue-400 transition"
                            >
                                harshkashyap.hk996@gmail.com
                            </a>
                        </p>

                        {/* Phone */}
                        <p>
                            📱
                            <a
                                href="tel:+919045347984"
                                className="ml-2 hover:text-green-400 transition"
                            >
                                +91-9045347984
                            </a>
                        </p>
                    </div>

                    {/* Right Side - Social Links */}
                    <div className="flex gap-6">
                        <a
                            href="https://github.com/harsh2595"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-gray-600 px-6 py-2 rounded-lg text-white hover:bg-white hover:text-black transition duration-300"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/harsh-kashyap-099213213/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-blue-500 px-6 py-2 rounded-lg text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300"
                        >
                            LinkedIn
                        </a>
                    </div>

                </div>
            </section>

            <footer className="text-center p-6 text-sm opacity-60">
                © {new Date().getFullYear()} Harsh Kashyap | DevOps Engineer
            </footer>
        </div>
    );
}