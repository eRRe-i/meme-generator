
import { ImageHandler } from "./MainContent"

export default function MemeContent({imageState}:ImageHandler) 
{
    
    return (
        <div className="relative flex flex-col justify-center mx-3">
            
            <img id="Image" className="object-fit aspect-video" src={imageState} alt="" />
            
            <div className="absolute top-0 left-0 flex flex-col w-full h-full justify-between items-center">
                <h2 className="mt-1 uppercase text-4xl text-white font-outline-white"> Shut up </h2>
                <h2 className="mb-1 uppercase text-4xl text-white font-outline-white"> and take my money </h2>
            </div>
        </div>
    )
}