import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

/**
 * La página principal de la aplicación; componente raíz.
 * Es incluido implícitamente por el Layout global (ver ""./layout.jsx").
 * 
 * Si el usuario actual tiene una sesión vigente, muestra el dashboard para
 * el usuario administrador general. De lo contrario, redirige a la página de login.
 */
export default async function HomePage() {
	// Obtiene cookie de sesión
	const cookieStore = await cookies();
	const token = cookieStore.get('SGPS_SESSION_TOKEN');

	// Redirige a login si no existe una cookie válida
	if (!token?.value) {
		redirect("/login");
	}

	// De lo contrario, si existe una cookie válida, redirige al dashboard de la adminsitración.
	redirect("/administracion");
};