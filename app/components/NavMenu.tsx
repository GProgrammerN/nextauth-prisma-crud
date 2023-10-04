import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import ButtonGoogle from "./GoogleAuthButton";

function AuthenticationButton() {
    const { data: session } = useSession()

    if (session) {
        return (<>
            {session?.user?.name} <br />
            <button onClick={() => signOut()}>Sign out</button>
        </>
        )
    }
    return (
        <>
            <p>You're not signed in. <br /></p>
            <ButtonGoogle />
        </>
    )
}