import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
import LoginContent from './PageContent';

export default async function LoginPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get('SGPS_SESSION');

    console.log("token: " + JSON.stringify(token));

    if (token) {
        redirect("/");
    }

    return <LoginContent />
}