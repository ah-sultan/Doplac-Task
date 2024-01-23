import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doplac Frontend Developer Task",
  description: "Doplac CRM Hiring Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#ECF0F0] pt-[120px]`}>{children}</body>
    </html>
  );
}
