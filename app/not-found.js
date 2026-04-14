import Link from "next/link";
import SiteShell from "../components/site-shell";

export default function NotFound() {
    return (
        <SiteShell>
            <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">404</p>
                <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">This page drifted out of the cluster.</h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    The page you were looking for does not exist, or the route has changed.
                </p>
                <Link
                    href="/"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                    Back to homepage
                </Link>
            </section>
        </SiteShell>
    );
}
