import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
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
