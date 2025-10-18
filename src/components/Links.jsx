"use client";

/**
 * Define un botón que luce como, y se comporta como un enlace HTML.
 * Responde a eventos click con la función prop onClickHandler.
 */
export function ButtonAnchor({ children, onClickHandler }) {
  return (
    <a href="#" className="block bg-secondary text-background font-bold my-4 p-4 text-xl" onClick={onClickHandler}>{children}</a>
  );
}

/**
 * Define un botón de formulario que al hacerle click, ejecuta la función prop
 * onClickHandler pero solo si el botón es de tipo "submit".
 */
export function FormButton({ type, value, onClickHandler }) {
  return (
    <input type={type} value={value} className="block bg-secondary text-background font-bold my-4 p-4 text-xl" onClick={type != "submit" ? onClickHandler : undefined} />
  );
}

/**
 * Define un enlace HTML que ejecuta la función prop onClickHandler al hacerle click.
 */
export function Anchor({ children, title, selected, onClickHandler }) {
  return (
    <a href="#" className={selected ? "bold text-secondary" : "underline"} title={title} onClick={onClickHandler}>{children}</a>
  );
}