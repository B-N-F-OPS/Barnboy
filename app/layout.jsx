import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} >
      <head>
        <title>BarnBoy</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
