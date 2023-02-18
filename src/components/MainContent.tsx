import MemeForms from "./MemeForms"
import MemeContent from "./MemeContent"
import { useState } from "react"
import { memes } from "./data"
import axios from "axios"


type Image = undefined | string

export interface ImageHandler {

    imageSrc: Image
    setImageState: () => void

    imageLink: string
    imageLinkHandler: (event: React.FormEvent<HTMLInputElement>) => void

    topString: string
    topStringHandler: (event: React.FormEvent<HTMLInputElement>) => void

    bottomString: string
    bottomStringHandler: (event: React.FormEvent<HTMLInputElement>) => void
}


export default function MainContent() {

    const [imgSrc, setImgSrc] = useState<Image>(() => { return undefined })

    const getUrl = async () => {
        const res = await axios.get("https://meme-api.com/gimme")
        return res.data.url
    }

    async function imgHandler(): Promise<void> {

        if (imageLink === "") {
            const url = await getUrl()
            setImgSrc(prevUrl => url)
        } else {
            setImgSrc(imageLink)
        }


    }

    const [topString, setTopString] = useState("")

    const topStringHandler = (event: React.FormEvent<HTMLInputElement>) => {
        const newString = event.currentTarget.value
        setTopString(string => newString)
    }

    const [bottomString, setBottomString] = useState("")

    const bottomStringHandler = (event: React.FormEvent<HTMLInputElement>) => {
        const newString = event.currentTarget.value
        setBottomString(string => newString)
    }

    const [imageLink, setImageLink] = useState("")

    const imageLinkHandler = (event: React.FormEvent<HTMLInputElement>) => {
        const newString = event.currentTarget.value
        setImageLink(string => newString)
    }

    return (
        <main className="MainContent">
            <MemeForms
                imageSrc={imgSrc}
                setImageState={imgHandler}

                imageLink={imageLink}
                imageLinkHandler={imageLinkHandler}

                topString={topString}
                topStringHandler={topStringHandler}

                bottomString={bottomString}
                bottomStringHandler={bottomStringHandler}
            />
            <MemeContent
                imageSrc={imgSrc}
                setImageState={imgHandler}

                imageLink={imageLink}
                imageLinkHandler={imageLinkHandler}

                topString={topString}
                topStringHandler={topStringHandler}

                bottomString={bottomString}
                bottomStringHandler={bottomStringHandler} />
        </main>
    )
}