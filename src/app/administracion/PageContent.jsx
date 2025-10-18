"use client";

/**
 * Componente que define el contenido de la página de bienvenida para usuarios de la
 * administración general.
 * 
 * El mensaje de bienvenida muestra el nombre del usuario autenticado.
 */
export default function LandingAdministracionContent({ user }) {
	return (
		<main className="flex items-center bg-background text-primary text-center p-8 sm:min-h-[500px]">
			<div className="mx-auto">
				<h1 className="text-4xl font-bold mb-16">¡Bienvenidx, «<span className="text-secondary">{ user?.names } { user?.surname }</span>»!</h1>
				<p className="text-2xl">Seleccione una opción en el menú superior para continuar.</p>
			</div>
		</main>
	);
}