"use client";

import { useRouter } from 'next/navigation';

import { FormButton } from "@/components/Links";
import { FormButton as UnimplementedFormButton } from "@/components/Unimplemented"; 

export default function LoginContent() {
    const router = useRouter();
    
    const postForm = async (form) => {
        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                credentials: "include"
            });

            if (response.status == 401) {
                throw new Error("Combinación de email y contraseña incorrecta.");
            } else if (!response.ok) {
                throw new Error("Error en la solicitud.");
            }

            window.location.href = "/";
        } catch (e) {
            console.log(e);
            alert(`Error encontrado:\n\n${e.message}`);
        }
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        if (form.checkValidity()) {
            postForm(form);
            return;
        }

        form.reportValidity();
    };

    return (
        <main className="flex flex-col items-center bg-background text-primary text-center p-8 sm:min-h-[500px]">
            <h1 className="text-4xl font-extrabold mb-8">Inicio de Sesión</h1>
            
            <form method="POST" action={`${process.env.API_ROOT}/login`} className="flex flex-col items-center w-full" onSubmit={handleSubmitForm}>
                <div className="grid grid-cols-2 gap-4 my-4 items-center w-full">
                    <label htmlFor="email" className="text-right">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" className="border-solid border-1 p-1 w-full sm:w-3xs" required />
                    <label htmlFor="password" className="text-right">Contraseña</label>
                    <input type="password" id="password" name="password" placeholder="Contraseña" className="border-solid border-1 p-1 w-full sm:w-3xs" required />
                </div>
                <div className="flex items-center justify-center gap-8 w-full sm:w-3/5">
                    <FormButton type="submit" value="Cambiar Email" />
                    <UnimplementedFormButton type="button" value="Olvidaste tu contraseña?" />
                </div>
            </form>
        </main>
    );
}