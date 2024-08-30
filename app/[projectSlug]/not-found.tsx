import MediumButton from "@/components/UI/medium-button";
import Link from "next/link";

export default function NotFoundProject(): JSX.Element {
    return (
        <main className="not-found">
            <h1>Project Not Found</h1>
            <p>Unfortunately, we could not find the requested page or project data.</p>
            <Link href='/' ><MediumButton>Back to Home</MediumButton></Link>
        </main>
    )
}