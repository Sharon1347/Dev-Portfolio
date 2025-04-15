import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResposiveNav from "@/components/Home/Navbar/ResposiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import AnimatedCursor from "react-animated-cursor"

const font = Sora({
  weight: ['100','200','300','400','500','600','700','800'],
  subsets: ['latin'],
});



export const metadata: Metadata = {
  title: "Sharon Koech | Web Developer & Cybersecurity Enthusiast",
  description: "A tech-savvy web developer specializing in modern, responsive web design and cybersecurity best practices. Explore my projects showcasing UI/UX excellence, secure coding, and innovative web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={font.className}>
        <div className="hidden md:block">
          <AnimatedCursor 
          innerSize={8} 
          outerSize={35} 
          innerScale={2} 
          outerScale={2} 
          outerAlpha={0} 
          innerStyle={{
            backgroundColor: "white",
          }} 
          outerStyle={{
            border: '3px solid white'
          }}/>
        </div>
        <ResposiveNav />
        {children}
        <Footer/>
        <ScrollToTop/>
        </body>
    </html>
  );
}
