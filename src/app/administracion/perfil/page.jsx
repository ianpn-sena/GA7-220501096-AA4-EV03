import { cookies } from 'next/headers';
import { redirect } from "next/navigation";

import PerfilContent from "./PageContent";

export default async function PerfilPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('SGPS_SESSION_TOKEN');

	if (!token?.value) {
		redirect("/login");
	}
  
  return <PerfilContent />;
};