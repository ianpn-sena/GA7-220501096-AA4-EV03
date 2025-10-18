"use client";

import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';
import Link from "next/link";

/**
 * Define un header compartido por toda la aplicación.
 * Muestra enlaces de navegación importantes que deben estar siempre presentes.
 * 
 * La propiedad "authenticated" es un boolean que es pasado desde el layout global.
 */
export default function NavigationMenu({ authenticated }) {
    // Se lee la ruta actual relativa a la raíz del host
    const pathname = usePathname();

    /**
     * Funcionalidad ejecutada al hacer click en el botón "Cerrar Sesión".
     * 
     * Le solicita al backend que elimine la sesión vigente, en caso de existir.
     * Y, por último, redirige a la portada/raíz de la aplicación.
     */
    const handleLogoutClick = async (e) => {
      // Previene los handlers de evento onClick por defecto del DOM.
      e.preventDefault();

      // Se intenta enviar una solicitud de finalización de sesión al backend.
      try {
          // Aquí es importante credentials: include para recibir las cookies de sesión.
          const response = await fetch(`${process.env.API_ROOT}/logout`, {
              method: "GET",
              credentials: "include"
          });

          // Se muestra una alerta si hubo errores con la solicitud (ej. servidor caído.)
          if (!response.ok) {
              throw new Error("Error cerrando sesión.");
          }

          // Cierre de sesión exitoso. Se redirige y re-carga desde la ruta raíz.
          window.location.href = "/";
      } catch (e) {
          // Se encontraron errores en la solicitud. Se muestran en consola y por alerta.
          console.log(e);
          alert(`Error encontrado:\n\n${e.message}`);
      }
    };

    // Define y regresa el HTML de este componente.
    // Note que el botón "Cerrar Sesión" solo aparece si hay una sesión vigente.
    return (
        <nav className="block sm:flex justify-between p-4 text-center sm:text-start">
            <ul className="block">
                <li className="block lg:inline-block m-4"><Link href="/administracion/proyectos" className={pathname == "/administracion/proyectos" ? "underline font-extrabold" : "underline"}>Administrar Proyectos</Link></li>
                <li className="block lg:inline-block m-4"><Link href="/administracion/administradores" className={pathname == "/administracion/administradores" ? "underline font-extrabold" : "underline"}>Administrar Administradores de Proyectos</Link></li>
                <li className="block lg:inline-block m-4"><Link href="/administracion/desarrolladores" className={pathname == "/administracion/desarrolladores" ? "underline font-extrabold" : "underline"}>Administrar Desarrolladores</Link></li>
            </ul>
            <ul className="block">
                <li className="block lg:inline-block m-4"><Link href="/administracion/perfil" className={pathname == "/administracion/perfil" ? "underline font-extrabold" : "underline"}>Perfil</Link></li>
                { authenticated && (
                <li className="block lg:inline-block m-4"><a href="#" className="underline" onClick={handleLogoutClick}>Cerrar Sesión</a></li>
                )}
            </ul>
        </nav>
    );
}