import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

export default async function Home() {
	const cookieStore = await cookies();
	const token = cookieStore.get('SGPS_SESSION');

	if (token) {
		return (
			<p>{ token }</p>
		);
	}

	redirect("/login");
};