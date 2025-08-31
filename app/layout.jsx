import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main>
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
