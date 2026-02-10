import { useEffect, useRef, useState } from "react";
import { apiUrl } from "../enviroment";
import type { UUID } from "../types/uuid";
import { useNavigate } from "react-router-dom";
interface MovieInterface {
    title: string;
    airDate: Date;
    imgPanoramic: string,
    rating: number;
    id: UUID
}

export const ScrollBar = () => {
    // const Navigate = useNavigate()
    const carouselRef = useRef<HTMLDivElement>(null);
    const [movies, setMovies] = useState<MovieInterface[]>([])
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -1500, behavior: "smooth" });
        }

    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 1300, behavior: "smooth" });
        }
    };


    const fetchData = async () => {
        try {
            const res = await fetch(`${apiUrl}products/movieLatest`)
            if (!res) {
                return
            }
            const data = await res.json()
            setMovies(data)
        } catch (e) {
            console.log("error ene lefech", e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const imagenes = {
        items: movies.map((m, i) => (
            <div className="bg-amber-100  relative h-full flex rounded-2xl overflow-hidden flex-col w-full min-w-2/3" key={i}>
                <div className="w-full h-full ">
                    <img src={m.imgPanoramic} alt="" className="w-full  h-full" />
                </div>
                <div className="absolute  w-full h-full bg-linear-to-b from-transparent to-black text-white">
                    <div className="absolute bottom-5 left-5 flex-col gap-2 flex w-full">
                        <span className="text-2xl">{m.title}</span>
                        <div className="gap-5 flex">
                            <span className=""><span>⭐</span>{m.rating}</span>
                            <span>📅{new Date(m.airDate).getFullYear()}</span>
                        </div>
                        <button className="border-2 p-2 rounded-xl w-1/4 cursor-pointer hover:bg-red-800 border-black bg-red-500 transition-all ease-in-out duration-300" >
                            <span className="text-xl">Watch</span>
                        </button>
                    </div>
                </div>
            </div>
        ))
    }



    return (

        <div className="w-full h-[70vh] justify-center items-center relative " onDrag={scrollLeft}>
            <button onClick={scrollLeft} className=" absolute translate-y-[-50%] left-[230px] top-1/2 cursor-pointer z-2 text-white ">
                <i className="fa-solid fa-chevron-left text-[30px]"></i>
            </button>
            <div ref={carouselRef} className="h-full  flex overflow-x-hidden w-full gap-8 ">

                {imagenes.items}

            </div>
            <button onClick={scrollRight} className="absolute right-[270px]  top-1/2 cursor-pointer translate-y-[-50%] z-2 text-white">
                <i className="fa-solid fa-chevron-right text-[30px]"></i>
            </button>
        </div >
    )
}