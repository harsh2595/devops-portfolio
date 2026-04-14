import SiteShell from "../../components/site-shell";
import ProjectGrid from "../../components/project-grid";
import { projects } from "../../lib/site-data";

export const metadata = {
    title: "Projects | Harsh Kashyap",
    description: "DevOps, cloud, Kubernetes, Terraform, and CI/CD projects by Harsh Kashyap.",
};

export default function ProjectsPage() {
    return (
        <SiteShell>
            <section className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Projects</p>
                <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                    Delivery pipelines, infrastructure automation, Kubernetes operations, and observability work in one place.
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                    These projects showcase hands-on DevOps work across AWS, Terraform, Docker, Jenkins, GitHub Actions, EKS, ECS, monitoring, and production-minded deployment practices.
                </p>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <ProjectGrid projects={projects} intro={false} />
            </section>
        </SiteShell>
    );
}
