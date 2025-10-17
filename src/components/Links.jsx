"use client";

export function ButtonAnchor({ children, onClickHandler }) {
  return (
    <a href="#" className="block bg-secondary text-background font-bold my-4 p-4 text-xl" onClick={onClickHandler}>{children}</a>
  );
}

export function FormButton({ type, value, onClickHandler }) {
  return (
    <input type={type} value={value} className="block bg-secondary text-background font-bold my-4 p-4 text-xl" onClick={type != "submit" ? onClickHandler : undefined} />
  );
}

export function Anchor({ children, title, selected, onClickHandler }) {
  return (
    <a href="#" className={selected ? "bold text-secondary" : "underline"} title={title} onClick={onClickHandler}>{children}</a>
  );
}