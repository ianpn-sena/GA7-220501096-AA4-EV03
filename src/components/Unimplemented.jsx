"use client";

/**
 * Muestra una alerta de "funcionalidad no implementada".
 * 
 * Usado por los distintos elementos clickeables en este módulo.
 */
const handleButtonClick = (e) => {
  e.preventDefault();
  alert("Funcionalidad no implementada aun.");
};

/**
 * Define un botón que se comporta como un enlace HTML (una ancla, anrhor) que muestra
 * un mensaje de funcionalidad no implementada al hacerle click.
 */
export function ButtonAnchor({ children }) {
  return (
    <a href="#" className="block bg-secondary text-background font-bold my-4 p-4 text-xl" onClick={handleButtonClick}>{children}</a>
  );
}

/**
 * Define un botón de formulario que responde a clicks si es de tipo "submit",
 * con un mensaje de funcionalidad no implementada.
 */
export function FormButton({ type, value }) {
  return (
    <input type={type} value={value} className="block bg-secondary text-background font-bold my-4 p-4 text-xl" onClick={type != "submit" ? handleButtonClick : undefined} />
  );
}

/**
 * Define un enlace que muestra un mensaje de funcionalidad no implementada.
 */
export function Anchor({ children, title, selected }) {
  return (
    <a href="#" className={selected ? "bold text-secondary" : "underline"} title={title} onClick={handleButtonClick}>{children}</a>
  );
}