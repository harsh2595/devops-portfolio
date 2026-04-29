import {
    ArrowUpRight,
    Briefcase,
    Cloud,
    ExternalLink,
    Layers3,
    Mail,
    Phone,
    Server,
    Wrench,
} from "lucide-react";

export const contact = {
    email: "harshkashyap.hk996@gmail.com",
    phone: "+91 90453 47984",
    phoneHref: "tel:+919045347984",
    emailHref: "mailto:harshkashyap.hk996@gmail.com",
    github: "https://github.com/harsh2595",
    linkedin: "https://www.linkedin.com/in/harsh-kashyap-099213213/",
    location: "India",
};

export const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Get in Touch", href: "/get-in-touch" },
];

export const projects = [
    {
        title: "AWS ECS EC2 Cluster using Terraform",
        desc: "Deployed a scalable ECS cluster on EC2 using Terraform modules with ALB, Auto Scaling, and ECR.",
        impact: "Automated infra provisioning and improved scalability",
        details: "Terraform, ECS, ALB, ASG, ECR",
        category: "Infrastructure Automation",
        link: "https://github.com/harsh2595/terraform-ecsec2",
    },
    {
        title: "OpenSearch Cluster and Terraform State",
        desc: "Managed an OpenSearch cluster with Terraform including drift detection and remote state handling.",
        impact: "Reliable infrastructure with stronger state consistency",
        details: "Terraform, OpenSearch, Remote State",
        category: "Platform Reliability",
        link: "https://github.com/harsh2595/terraform-opensearch-aws",
    },
    {
        title: "Kubernetes Deployment with Helm",
        desc: "Shipped workloads with Helm, HPA, RBAC, and Ingress for repeatable cluster operations.",
        impact: "Improved release confidence with zero-downtime deployments",
        details: "Kubernetes, Helm, HPA, RBAC, Ingress",
        category: "Container Orchestration",
        link: "https://github.com/harsh2595/k8s-learning",
    },
    {
        title: "Node.js App on ECS (CI/CD)",
        desc: "Built a CI/CD workflow with Jenkins, Docker, and ECS for automated delivery.",
        impact: "Reduced deployment time and manual release effort",
        details: "Jenkins, Docker, ECS",
        category: "Delivery Pipelines",
        link: "https://github.com/harsh2595/node-ecs-app",
    },
    {
        title: "Node.js on EKS with Monitoring",
        desc: "Deployed a Node.js application on EKS with Prometheus and Grafana observability.",
        impact: "Enabled real-time monitoring and faster issue detection",
        details: "EKS, Prometheus, Grafana",
        category: "Observability",
        link: "https://github.com/harsh2595/node-eks-app-monitoring",
    },
    {
        title: "GitHub Actions Pipeline for Python Dockerized App",
        desc: "Created a GitHub Actions pipeline that builds and deploys a Dockerized Python app on every push.",
        impact: "Accelerated automated delivery for application updates",
        details: "Docker, Python, GitHub Actions",
        category: "Automation",
        link: "https://github.com/harsh2595/github-actions-practice.git",
    },
];

export const experiences = [
    {
        title: "DevOps Engineer",
        period: "2 years",
        summary: "Worked with AWS, Kubernetes, CI/CD pipelines, monitoring, and production deployments.",
    },
    {
        title: "QA Engineer",
        period: "2.5 years",
        summary: "Handled automation testing, API validation, and release quality across delivery cycles.",
    },
    {
        title: "Civil Engineer",
        period: "1.3 years",
        summary: "Managed project execution, coordination, and site operations with a delivery-first mindset.",
    },
];

export const skillGroups = [
    {
        title: "Cloud",
        icon: Cloud,
        accent: "text-sky-300",
        items: ["AWS", "EC2", "ECS", "EKS", "S3", "IAM", "VPC", "CloudWatch", "ALB", "Route 53"],
    },
    {
        title: "Containers",
        icon: Server,
        accent: "text-emerald-300",
        items: ["Docker", "Docker Compose", "Containerization", "Image Optimization"],
    },
    {
        title: "Kubernetes",
        icon: Layers3,
        accent: "text-cyan-300",
        items: ["Kubernetes", "Helm", "HPA", "VPA", "Ingress", "RBAC", "ConfigMaps", "Secrets", "PVC"],
    },
    {
        title: "CI/CD",
        icon: ArrowUpRight,
        accent: "text-amber-300",
        items: ["Jenkins", "GitHub Actions", "CI/CD Pipelines", "Automation", "Build and Deploy"],
    },
    {
        title: "Infrastructure as Code",
        icon: Wrench,
        accent: "text-rose-300",
        items: ["Terraform", "Modules", "State Management", "Infra Automation", "Provisioning"],
    },
    {
        title: "Monitoring",
        icon: ExternalLink,
        accent: "text-orange-300",
        items: ["Prometheus", "Grafana", "Alerting", "OpenSearch", "ELK Stack", "Observability"],
    },
];

export const stats = [
    { value: "6+", label: "Hands-on infrastructure and automation projects" },
    { value: "AWS", label: "Cloud-native delivery and operations focus" },
    { value: "CI/CD", label: "Automation-first engineering mindset" },
];

export const highlights = [
    {
        title: "Cloud automation",
        text: "Provisioning, deployment workflows, observability, and operations hardening across AWS environments.",
    },
    {
        title: "Reliable delivery",
        text: "Reducing manual steps while making releases safer, repeatable, and easier to monitor.",
    },
];

export const contactCards = [
    {
        label: "Email",
        value: contact.email,
        href: contact.emailHref,
        icon: Mail,
        accent: "text-cyan-200",
    },
    {
        label: "Phone",
        value: contact.phone,
        href: contact.phoneHref,
        icon: Phone,
        accent: "text-emerald-200",
    },
    {
        label: "LinkedIn",
        value: "Connect professionally",
        href: contact.linkedin,
        icon: Briefcase,
        accent: "text-sky-200",
    },
];
