import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: "Adhayan Sharma's Portfolio",
	authors: {
		name: "adhayan",
	},

	description:
		"Based in Bangalore, I am a fullstack developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "Adhayan Sharma",
		description:
			"Based in Bangalore, I am a fullstack developer passionate about building a modern web application that users love.",
		url: "https://next-supabase-vote.vercel.app/",
		siteName: "adhayan",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
