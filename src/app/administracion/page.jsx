import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

import LandingAdministracionContent from './PageContent';

/**
 * Página de aterrizaje (portal) para usuarios que hacen parte de la administración
 * general.
 * 
 * Solo es mostrada si existe una sesión activa. Si no hay una sesión activa, entonces
 * se redirige a la página de login.
 * 
 * Muestra un mensaje de bienvenida, incluyendo el nombre del usuario autenticado.
 * 
 * En caso de existir una sesión, se obtiene información sobre el registro User (usuario)
 * autenticado, y se pasa esta información a componentes hijos.
 */
export default async function LandingAdministracion() {
	// Obtiene las dos variables importantes de sesión.
	const cookieStore = await cookies();
	const token = cookieStore.get('SGPS_SESSION_TOKEN');
	const userId = cookieStore.get('SGPS_SESSION_USER');

	// Redirige a la página de login si no se pudieron encontrar las variables de sesión.
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

	// Se pasa el usuario al componente principal de lado de cliente de esta página.
	return <LandingAdministracionContent user={data} />;
};