"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "AWS ECS EC2 Cluster using Terraform",
        desc: "Deployed a scalable ECS cluster on EC2 using Terraform modules with ALB, Auto Scaling, and ECR integration for containerized workloads.",
        impact: "Automated infrastructure provisioning and improved deployment scalability",
        details: "Terraform modules, ECS (EC2), ALB, Auto Scaling Groups, ECR",
        link: "https://github.com/harsh2595/terraform-ecsec2",
    },
    {
        title: "OpenSearch Cluster & Terraform State Management",
        desc: "Provisioned and managed an OpenSearch cluster using Terraform with infrastructure import, drift detection, and remote state handling.",
        impact: "Ensured reliable infra management with state consistency and drift control",
        details: "Terraform state management, OpenSearch, infra import, drift detection",
        link: "https://github.com/harsh2595/terraform-opensearch-aws",
    },
    {
        title: "Kubernetes Deployment using Helm",
        desc: "Deployed Kubernetes workloads using Helm charts with HPA, VPA, RBAC, Ingress, and CronJobs for scalable and resilient systems.",
        impact: "Achieved scalable deployments with zero downtime and improved reliability",
        details: "Helm, Kubernetes, HPA, VPA, RBAC, Ingress, ConfigMaps, Secrets, PVCs",
        link: "https://github.com/harsh2595/k8s-learning",
    },
    {
        title: "Node.js App Deployment on ECS with CI/CD",
        desc: "Built and deployed a containerized Node.js application on AWS ECS using Jenkins CI/CD pipeline with Docker and ECR.",
        impact: "Reduced deployment time and enabled continuous delivery",
        details: "Jenkins, Docker, AWS ECS, ECR, CI/CD pipeline",
        link: "https://github.com/harsh2595/node-ecs-app.git",
    },
    {
        title: "Node.js Deployment on EKS with Monitoring",
        desc: "Deployed a Node.js application on EKS with Prometheus and Grafana for real-time monitoring, alerting, and observability.",
        impact: "Improved system observability and reduced downtime via proactive alerting",
        details: "EKS, Prometheus, Grafana, monitoring, alerting",
        link: "https://github.com/harsh2595/node-eks-app-monitoring.git",
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
                <h3 className="text-2xl font-bold mb-6">⚡ Skills</h3>

                <div className="flex flex-wrap justify-center gap-3">
                    {[
                        // ☁️ Cloud
                        "AWS", "EC2", "ECS", "EKS", "S3", "IAM", "VPC", "CloudWatch", "ALB",

                        // 🐳 Containers
                        "Docker", "Docker Compose", "Containerization",

                        // ☸️ Orchestration
                        "Kubernetes", "Helm", "HPA", "VPA", "Ingress", "RBAC",

                        // ⚙️ CI/CD
                        "Jenkins", "GitHub Actions", "CI/CD Pipelines",

                        // 🏗️ Infrastructure as Code
                        "Terraform", "Terraform Modules", "State Management",

                        // 📊 Monitoring & Logging
                        "Prometheus", "Grafana", "ELK Stack", "OpenSearch",

                        // 🖥️ OS & Scripting
                        "Linux", "Shell Scripting", "Bash",

                        // 🔧 Dev Tools
                        "Git", "GitHub", "Nginx", "SSL", "REST APIs"
                    ].map((s) => (
                        <span
                            key={s}
                            className="border px-4 py-2 rounded hover:bg-white hover:text-black transition"
                        >
                            {s}
                        </span>
                    ))}
                </div>
            </section>



            {/* Contact */}
            <section id="contact" className="py-16 px-6 text-center">
                <h3 className="text-2xl font-bold mb-4">📩 Contact</h3>
                <p>harshkashyap.hk996@gmail.com</p>
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