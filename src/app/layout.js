// app/layout.js
import "./globals.css";

export const metadata = {
  title: "TON App",
  description: "A simple app to connect TON wallet and make transactions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
