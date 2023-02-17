import MemeForms from "./MemeForms"
import MemeContent from "./MemeContent"
import { useState } from "react"
import { memes } from "./data"


export interface ImageHandler {
    imageState: string
    setImageState: ()=>void
    firstString: string
    setFirstStringState: (event:React.FormEvent<HTMLInputElement>)=>void
    secondString: string
    setSecondStringState: (event:React.FormEvent<HTMLInputElement>)=>void
}


export default function MainContent() {

    const [imgSrc, setImgSrc] = useState(()=>{return "https://resizedimgs.vivareal.com/fit-in/870x653/named.images.sp/da8a435c9958b007dfbc0c6f72ef0c9f/%7Bdescription%7D.jpg"})

    const handler = () => {
        setImgSrc(()=>{
            return memes.data.memes[Math.floor(Math.random()*memes.data.memes.length)].url
        });
    }

    const [firstString, setFirstString] = useState("")
    const [secondString, setSecondString] = useState("")

    const firstStringHandler = (event:React.FormEvent<HTMLInputElement>) => {
        const newString = event.currentTarget.value
        setFirstString(string => newString)
        console.log(newString)
    }


    const secondStringHandler = (event:React.FormEvent<HTMLInputElement>) => {
        const newString = event.currentTarget.value
        setSecondString(string => newString)
        console.log(newString)
    }

    
    return (
        <main className="MainContent">
            <MemeForms imageState={imgSrc} setImageState={handler} firstString={firstString} secondString={secondString} setFirstStringState={firstStringHandler}  setSecondStringState={secondStringHandler}/>
            <MemeContent imageState={imgSrc} setImageState={handler} firstString={firstString} secondString={secondString} setFirstStringState={firstStringHandler}  setSecondStringState={secondStringHandler} />
        </main>
    )
}