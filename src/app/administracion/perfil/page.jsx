import { cookies } from 'next/headers';
import { redirect } from "next/navigation";

import PerfilContent from "./PageContent";

/**
 * Página de vista y modificación de perfil del usuario actualmente autenticado.
 * 
 * La funcionalidad no está completamente implementada, y, actualmente consiste de
 * un formulario de solo lectura que es llenado con datos del usuario autenticado,
 * tomados del backend.
 * 
 * En caso de no existir una sesión vigente, se redirige el usuario a la página de
 * login.
 */
export default async function PerfilPage() {
	// Se obtiene información de sesión.
	const cookieStore = await cookies();
	const token = cookieStore.get('SGPS_SESSION_TOKEN');
	const userId = cookieStore.get('SGPS_SESSION_USER');

	// Si no se encontró una sesión válida, se redirige a la página de login.
	if (!token?.value || !userId?.value) {
		redirect("/login");
	}

	// Hace una solicitud al endpoint de obtención de Usuarios, usando el ID de usuario de la sesión.
	// Esta solicitud envía manualmente el token de sesión como una cookie.
	// No encontré una manera más sencilla de hacer esto sin recurrir a librerías de terceros.
	const response = await fetch(`${process.env.API_ROOT}/user/${userId?.value}`, {
		method: "GET",
		credentials: "include",
		headers: {
			Cookie: `SGPS_SESSION_TOKEN=${token?.value}; SGPS_SESSION_USER=${userId?.value}`
		}
	});
	const data = await response.json();
  
  // Muestra el componente principal de esta página.
  return <PerfilContent user={data} />;
};