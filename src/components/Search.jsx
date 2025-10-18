"use client";

import Image from "next/image";

/**
 * Componente sencillo que consiste de una barra de búsqueda: un campo de texto, y un
 * botón para enviar la consulta de búsqueda.
 * 
 * Actualmente la búsqueda no está implementada, así que muestra una alerta de
 * funcionalidad no implementada.
 */
export default function SearchBar () {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    alert("Funcionalidad no implementada aun.");
  };

  return (
    <form id="form_buscar" action="#" method="GET" className="border-solid border-1 py-1 px-2 my-8 flex items-center" onSubmit={handleSubmitForm}>
        <input type="search" className="" placeholder="Buscar" />
        <button form="form_buscar" type="submit" className="ml-2"><Image width={176} height={196} className="w-4 h-4 my-auto" src="/img/search.png" alt="Buscar" /></button>
    </form>
  );
}