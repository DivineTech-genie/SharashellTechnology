import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const rubik = localFont({
  src: "../public/fonts/Rubik/Rubik-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-rubik",
});

const firaSans = localFont({
  src: "../public/fonts/Fira_Sans/FiraSans-Medium.ttf",
  display: "swap",
  variable: "--font-firaSans",
});

export const metadata: Metadata = {
  title: "Sharashell Technology - Saas Development",
  description:
    "Headquartered in the United States, Sharashell Technology is a premier SaaS development company specializing in crafting innovative, scalable software solutions that drive digital transformation for businesses worldwide. We combine cutting-edge technology with strategic insights to deliver cloud-native applications that empower organizations to thrive in the digital economy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${firaSans.variable} antialiased`}>
        {/* <HomeHero headText="" imgSrc="">
          <Navbar />
        </HomeHero> */}
        {children}
      </body>
    </html>
  );
}
