
export default function MemeContent(){
    return (
        <div className="relative flex justify-center mx-3 bg-slate-400">
            <div className="relative">
                <img className="object-cover aspect-video" src="https://resizedimgs.vivareal.com/fit-in/870x653/named.images.sp/c224f404e77db7e5ce01081c0f219bae/%7Bdescription%7D.jpg" alt="" />
            </div>
            <div className="absolute top-0 left-0 flex flex-col w-full h-full justify-between items-center">
                <h2 className="mt-1 uppercase text-4xl text-white font-outline-white"> Shut up </h2>
                <h2 className=" mb-1 uppercase text-4xl text-white font-outline-white"> and take my money </h2>
            </div>
        </div>
    )
}