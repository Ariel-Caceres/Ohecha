import { useEffect, useRef, useState } from "react"
import { CardCategory } from "./CardCategory"
import { apiUrl } from "../enviroment"
import type { UUID } from "../types/uuid";


export interface MovieInterface {
    title: string;
    description: string;
    airDate: Date;
    rating: number;
    imgUrlCover: string;
    id: UUID
}

export interface GenreMovies {
    name: string;
    data: MovieInterface[];
}




export const ScrollCategories = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [genre, setGenre] = useState<GenreMovies[]>([])


    const getGenreMovie = async () => {
        try {
            const res = await fetch(`${apiUrl}products/genres`)
            const data = await res.json()

            setGenre(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        (async () => {
            await getGenreMovie()
        })();
    }, [])



    const scrollLeft = () => {
        if (ref.current) {
            ref.current.scrollBy({ left: -300, behavior: "smooth" })
        }
    }

    const scrollRight = () => {
        if (ref.current) {
            ref.current?.scrollBy({ left: 400, behavior: "smooth" })
        }
    }


    return (
        <div className="w-full h-[500px] bg-black justify-center items-center relative pb-7 cursor-pointer ">
            <span>pelis</span>
            <button onClick={scrollLeft} className="absolute top-1/2 cursor-pointer rounded-xl p-2 left-0 z-2 translate-y-[-50%] border-black border-2 bg-gray-600 text-white">
                <i className="fa-solid fa-chevron-left text-[20px]"></i>
            </button>

            <div ref={ref} className="h-full flex  overflow-hidden gap-4 ">
                {genre[1]?.data?.map((a, i) => <CardCategory movie={a} key={i} />)}
            </div>

            <button onClick={scrollRight} className="absolute translate-y-[-50%] top-1/2 right-0 cursor-pointer border-2 border-black rounded-xl p-2 text-white bg-gray-600">
                <i className="fa-solid fa-chevron-right text-[20px]"></i>
            </button>

        </div >
    )
}