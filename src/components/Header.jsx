"use client";

import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function NavigationMenu({ authenticated }) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogoutClick = async (e) => {
      e.preventDefault();

      try {
          const response = await fetch(`${process.env.API_ROOT}/logout`, {
              method: "GET",
              credentials: "include"
          });

          if (!response.ok) {
              throw new Error("Error cerrando sesión.");
          }

          window.location.href = "/";
      } catch (e) {
          console.log(e);
          alert(`Error encontrado:\n\n${e.message}`);
      }
    };

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