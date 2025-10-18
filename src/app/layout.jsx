import { cookies } from 'next/headers';

import NavigationMenu from "@/components/Header";
import About from "@/components/Footer";

/**
 * Metadatos para la aplicación entera, ya que hacen parte del Layout global.
 */
export const metadata = {
  title: "Software de Gestión de Proyectos de Software - JM Team Consulting",
  description: "Gestor de proyectos interno de software para el personal de JM Team Consulting.",
};

// Estilos globales
import "./globals.css";

/**
 * Layout raíz de la aplicación. Es usado por toda las páginas.
 * 
 * Implícitamente contiene y carga ./page.jsx dentro de si misma.
 * 
 * Mantiene informaión de estado de sesión ya que el header global de este
 * Layout condicionalmente muestra o esconde botones dependiendo de la presencia
 * o ausencia de una sesión.
 */
export default async function RootLayout({ children }) {
  // Obtiene información de sesión.
  const cookieStore = await cookies();
  const token = cookieStore.get('SGPS_SESSION_TOKEN');

  // Define el HTML de este Layout global compartido.
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
