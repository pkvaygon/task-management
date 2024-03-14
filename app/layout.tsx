import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import SideBar from '../components/Sidebar/Sidebar';
import Header from "@/components/Header/Header";

const poppins = Poppins({ weight: ["500"], subsets: ["devanagari"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  dashtasks,
  dashprojects,
  dashteam

}: Readonly<{
  children: React.ReactNode;
  dashtasks: React.ReactNode;
  dashprojects: React.ReactNode;
  dashteam: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <main className="flex justify-start items-start">
            <section className="w-1/5">
             <SideBar/>
            </section>
            <section className="w-4/5 p-2 flex flex-col gap-2">
              <Header/>
              <div className="flex flex-col gap-2">
                {children}
                <div className={`h-[600px] w-full  grid grid-cols-2 grid-rows-2 gap-2`}>
                  {dashtasks}
                  {dashprojects}
                  {dashteam}
                </div>
              </div>
            </section>
          </main>
        </Providers>
      </body>
    </html>
  );
}
