import "./globals.css";

export const metadata = {
    title: "Harsh | DevOps Engineer",
    description: "DevOps Portfolio showcasing cloud, CI/CD, and infrastructure projects",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}