import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

export default async function HomePage() {
	const cookieStore = await cookies();
	const token = cookieStore.get('SGPS_SESSION_TOKEN');

	if (!token?.value) {
		redirect("/login");
	}

	redirect("/administracion");
};