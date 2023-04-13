import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Wireframe Showcase | Mediawave",
  description: "Prototype basic concepts in wireframe context",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grid gap-8">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
