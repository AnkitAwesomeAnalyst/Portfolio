import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
    title: "Ankit Raikwar | Data Scientist & Business Analyst",
    description: "Portfolio of Ankit Raikwar - Transforming Raw Data into Strategic Business Growth.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased bg-slate-900`}>
                {children}
            </body>
        </html>
    );
}
