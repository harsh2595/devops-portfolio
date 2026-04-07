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
];

export default function Portfolio() {
    const [dark, setDark] = useState(true);
    const [activeProject, setActiveProject] = useState(null);

    return (
        <div className={`${dark ? "bg-gray-950 text-white" : "bg-white text-black"} min-h-screen relative`}>

            {/* Background Glow */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

            {/* Navbar */}
            <nav className="flex justify-between items-center px-6 py-4 sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
                <h1 className="font-bold">Harsh Kashyap</h1>

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

                <p className="mb-3">4.7 Years Experience | AWS • Kubernetes • Terraform • CI/CD</p>

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
                <h3 className="text-3xl font-bold text-center mb-10">🚀 Projects</h3>

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
            <section id="skills" className="py-16 px-6 text-center scroll-mt-24">
                <h3 className="text-2xl font-bold mb-6">⚡ Skills</h3>

                <div className="flex flex-wrap justify-center gap-3">
                    {["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus", "Grafana", "Linux"].map((s) => (
                        <span key={s} className="border px-3 py-1 rounded">
                            {s}
                        </span>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-16 px-6 text-center scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4">Contact</h3>

                <p className="mb-3">harshkashyap.hk996@gmail.com</p>

                <div className="flex justify-center gap-4">
                    <a
                        href="https://github.com/harsh2595"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border px-4 py-2 rounded"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/harsh-kashyap-099213213/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border px-4 py-2 rounded"
                    >
                        LinkedIn
                    </a>
                </div>
            </section>

            <footer className="text-center p-6 text-sm opacity-60">
                © {new Date().getFullYear()} Harsh Kashyap
            </footer>
        </div>
    );
}