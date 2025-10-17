import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

export default async function LandingAdministracion() {
	const cookieStore = await cookies();
	const token = cookieStore.get('SGPS_SESSION_TOKEN');

	if (!token?.value) {
		redirect("/login");
	}

	return (
		<main className="flex items-center bg-background text-primary text-center p-8 sm:min-h-[500px]">
			<div className="mx-auto">
				<h1 className="text-4xl font-bold mb-16">¡Bienvenido, «<span className="text-secondary">Dirección General</span>»!</h1>
				<p className="text-2xl">Seleccione una opción en el menú superior para continuar.</p>
			</div>
		</main>
	);
};