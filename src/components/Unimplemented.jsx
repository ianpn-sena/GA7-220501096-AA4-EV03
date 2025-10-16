"use client";

const handleButtonClick = (e) => {
  e.preventDefault();
  alert("Funcionalidad no implementada aun.");
};

export function ButtonAnchor({ children }) {
  return (
    <a href="#" className="block bg-secondary text-background font-bold my-4 p-4 text-xl" onClick={handleButtonClick}>{children}</a>
  );
}

export function FormButton({ type, value }) {
  return (
    <input type={type} value={value} className="block bg-secondary text-background font-bold my-4 p-4 text-xl" onClick={type != "submit" ? handleButtonClick : undefined} />
  );
}

export function Anchor({ children, title, selected }) {
  return (
    <a href="#" className={selected ? "bold text-secondary" : "underline"} title={title} onClick={handleButtonClick}>{children}</a>
  );
}