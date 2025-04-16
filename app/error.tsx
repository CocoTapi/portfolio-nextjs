'use client'

import BtnMedium from "@/components/UI/btnMedium"
import Link from "next/link"

export default function Error(): JSX.Element{
    //console.log(error);

    return  (
        <main className="error">
            <h1>An error occurred!</h1>
            <p>Failed to fetch data. Please try again later.</p>

            <Link href="/">
                <BtnMedium>Back to Home</BtnMedium>
            </Link>
        </main>
    )
}