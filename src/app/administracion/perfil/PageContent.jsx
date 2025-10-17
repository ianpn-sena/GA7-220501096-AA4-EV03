"use client";

import { FormButton } from "@/components/Unimplemented";
import { useEffect, useState } from "react"; 

export default function PerfilContent({ user }) {
  const [ formData, setFormData ] = useState({});

  useEffect(() => {
    setFormData({
      names: user?.names,
      surname: user?.surname,
      document_type_id: user?.document?.documentType?.id,
      document_number: user?.document?.number,
      email: user?.email,
      country_id: user?.contact?.country?.id,
      department_id: user?.contact?.department?.id,
      city_id: user?.contact?.city?.id,
      phone_number: user?.contact?.phoneNumbers?.[0].number,
      address_1: user?.contact?.address1,
      address_2: user?.contact?.address2,
      zip_code: user?.contact?.zipCode
    })
  }, [user]);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const form = e.target;

    if (form.checkValidity()) {
      alert("¡Formulario competado!\n\nPero, funcionalidad no implementada aun.");
      return;
    }

    form.reportValidity();
  };

  return formData ? (
    <main className="flex flex-col items-center bg-background text-primary text-center p-8 sm:min-h-[500px]">
      <h1 className="text-4xl font-extrabold mb-8">Perfil</h1>

      <form id="form_perfil" action="#" method="GET" className="flex flex-col items-center w-full" onSubmit={handleSubmitForm}>
        <div className="grid grid-cols-2 gap-4 my-4 items-center w-full">
          <label htmlFor="names" className="text-right">Nombre(s)</label>
          <input type="text" id="names" name="names" placeholder="Nombre(s)" value={formData.names} className="border-solid border-1 p-1 w-full sm:w-3xs" required disabled />
          <label htmlFor="surname" className="text-right">Apellido(s)</label>
          <input type="text" id="surname" name="surname" placeholder="Apellidos" value={formData.surname} className="border-solid border-1 p-1 w-full sm:w-3xs" required disabled />
          <label htmlFor="document_type_id" className="text-right">Tipo de Documento</label>
          <select id="document_type_id" name="document_type_id" defaultValue="" value={formData.document_type_id} className="border-solid border-1 p-1.5 w-full sm:w-3xs" required disabled>
            <option value="">Seleccione una opción</option>
            <option value="1">Cédula de Ciudadanía</option>
            <option value="2">Cédula de Extranjería</option>
            <option value="3">Pasaporte</option>
            <option value="4">Permiso Especial de Permanencia</option>
          </select>
          <label htmlFor="document_number" className="text-right">Número de Documento</label>
          <input type="text" id="document_number" name="document_number" placeholder="Número de Documento" value={formData.document_number} className="border-solid border-1 p-1 w-full sm:w-3xs" required disabled />
          <label htmlFor="email" className="text-right">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" value={formData.email} className="border-solid border-1 p-1 w-full sm:w-3xs" required disabled />
          <label htmlFor="country_id" className="text-right">País</label>
          <select id="country_id" name="country_id" defaultValue="" value={formData.country_id} className="border-solid border-1 p-1.5 w-full sm:w-3xs" required disabled>
            <option value="">Seleccione una opción</option>
            <option value="1">Colombia</option>
          </select>
          <label htmlFor="department_id" className="text-right">Departamento</label>
          <select id="department_id" name="department_id" defaultValue="" value={formData.department_id} className="border-solid border-1 p-1.5 w-full sm:w-3xs" required disabled>
            <option value="">Seleccione una opción</option>
            <option value="1">Cundinamarca</option>
            <option value="2">Antioquia</option>
            <option value="3">Valle del Cauca</option>
            <option value="4">Bolívar</option>
            <option value="5">Atlántico</option>
          </select>
          <label htmlFor="city_id" className="text-right">Ciudad</label>
          <select id="city_id" name="city_id" defaultValue="" value={formData.city_id} className="border-solid border-1 p-1.5 w-full sm:w-3xs" required disabled>
            <option value="">Seleccione una opción</option>
            <option value="1">Bogotá</option>
            <option value="2">Medellín</option>
            <option value="3">Cali</option>
            <option value="4">Cartagena</option>
            <option value="5">Bogotá</option>
          </select>
          <label htmlFor="phone_number" className="text-right">Número de Teléfono</label>
          <input type="tel" id="phone_number" name="phone_number" placeholder="Número de Teléfono" value={formData.phone_number} className="border-solid border-1 p-1 w-full sm:w-3xs" required disabled/>
          <label htmlFor="address_1" className="text-right">Dirección (primera línea)</label>
          <input type="text" id="address_1" name="address_1" placeholder="Dirección (primera línea)" value={formData.address_1} className="border-solid border-1 p-1 w-full sm:w-3xs" required disabled/>
          <label htmlFor="address_2" className="text-right">Dirección (segunda línea)</label>
          <input type="text" id="address_2" name="address_2" placeholder="Dirección (segunda línea)" value={formData.address_2} className="border-solid border-1 p-1 w-full sm:w-3xs" disabled/>
          <label htmlFor="zip_code" className="text-right">Código ZIP</label>
          <input type="text" id="zip_code" name="zip_code" placeholder="Código ZIP" value={formData.zip_code} className="border-solid border-1 p-1 w-full sm:w-3xs" disabled/>
      </div>
      <div className="flex items-center justify-around w-full sm:w-3/5">
          <FormButton type="submit" value="Actualizar" />
          <FormButton type="button" value="Cambiar Email" />
      </div>
    </form>
    </main>
  ) : <></>;
}