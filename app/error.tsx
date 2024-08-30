'use client'

export default function Error(): JSX.Element{
    //console.log(error);

    return  (
        <main className="error">
            <h1>An error occurred!</h1>
            <p>Failed to fetch data. Please try again later.</p>
        </main>
    )
}