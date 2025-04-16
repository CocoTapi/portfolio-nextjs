import BtnMedium from "@/components/UI/btnMedium";
import Link from "next/link";

export default function NotFoundProject(): JSX.Element {
    return (
        <main className="not-found">
            <h1>Not Found</h1>
            <p>Unfortunately, we could not find the requested page or resource.</p>

            <Link href="/">
                <BtnMedium>Back to Home</BtnMedium>
            </Link>
        </main>
    )
}