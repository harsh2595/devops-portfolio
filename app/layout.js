import "./globals.css";

export const metadata = {
    title: {
        default: "Harsh Kashyap | DevOps Engineer",
        template: "%s",
    },
    description: "DevOps portfolio showcasing cloud, CI/CD, Kubernetes, Terraform, and infrastructure automation work.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
