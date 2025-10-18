import Image from "next/image";

/**
 * Define un footer compartido por toda la aplicación.
 * Muestra información sobre la empresa que debe estar siempre presente en todas las páginas.
 */
export default function About() {
  return (
    <footer className="block sm:flex justify-between p-8 text-center sm:text-start align-middle">
        <div className="block lg:inline-block my-auto">
            <p>© JM Team Consulting, 2025.</p>
        </div>
        <div className="block lg:inline-block mt-4 sm:mt-0">
            <Image width={96} height={96} className="w-24 h-24 inline" src="/img/logo-footer.png" alt="Logo de empresa JM Team Consulting." title="JM Team" />
        </div>
    </footer>
  );
}