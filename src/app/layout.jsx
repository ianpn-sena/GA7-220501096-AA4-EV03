import { cookies } from 'next/headers';

import NavigationMenu from "@/components/Header";
import About from "@/components/Footer";

export const metadata = {
  title: "Software de Gestión de Proyectos de Software - JM Team Consulting",
  description: "Gestor de proyectos interno de software para el personal de JM Team Consulting.",
};

import "./globals.css";

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get('SGPS_SESSION_TOKEN');

  return (
    <html lang="es">
      <body className="bg-foreground text-background">
        <NavigationMenu authenticated={ token?.value ? true : false } />
        <div className="bg-background text-primary text-center p-8">
          {children}
        </div>
        <About />
      </body>
    </html>
  );
}
