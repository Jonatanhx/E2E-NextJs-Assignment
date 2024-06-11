import Footer from "@/react-components/Footer";
import Header from "@/react-components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-400 flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
