import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fabrizzio Portillo",
  description: "Explora mis experiencia, proyectos y habilidades como desarrollador",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
