import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

import LandingAdministracionContent from './PageContent';

export default async function LandingAdministracion() {
	const cookieStore = await cookies();
	const token = cookieStore.get('SGPS_SESSION_TOKEN');
	const userId = cookieStore.get('SGPS_SESSION_USER');

	if (!token?.value || !userId?.value) {
		redirect("/login");
	}

	console.log("URL: " + `${process.env.API_ROOT}/user/${userId?.value}`);
	const response = await fetch(`${process.env.API_ROOT}/user/${userId?.value}`, {
		method: "GET",
		credentials: "include",
		headers: {
			Cookie: `SGPS_SESSION_TOKEN=${token?.value}; SGPS_SESSION_USER=${userId?.value}`
		}
	});
	const data = await response.json();

	return <LandingAdministracionContent user={data} />
};