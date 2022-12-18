import Head from "next/head"
import ImageComp from "/src/image-component/ImageComp"
import Description from "/src/description-component/Description"

export default function Home() {
    return (
        <>
            <Head>
                <title>Frontend Mentor | Stats preview card component</title>
                <meta charset="UTF-8" />
                <meta
                    name="description"
                    content="Stats preview card component build with Next.js"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon.png"
                />
            </Head>
            <main>
                <ImageComp />
                <Description />
            </main>
        </>
    )
}
