import { useState } from "react"
import type { UUID } from "../types/uuid"
import { useNavigate } from "react-router-dom"

interface CardCategoryProps {
    title: string,
    description: string,
    id: UUID,
    airDate: Date,
    rating: number,
    imgUrlCover: string
}
export const CardCategory = ({ movie }: { movie: CardCategoryProps }) => {
    const [mostrarDetalles, setMostrarDetalles] = useState<boolean>(false)
    const navigate = useNavigate()
    return (
        <div className=" bg-amber-100  relative h-full flex rounded-2xl overflow-hidden flex-col w-1/5" onClick={() => navigate(`/movie/${movie.id}`)} >
            <div className="w-full  h-full " onMouseEnter={() => setMostrarDetalles(true)} onMouseLeave={() => setMostrarDetalles(false)}>
                <img src={movie.imgUrlCover} alt="" className={`w-full h-full ${mostrarDetalles ? "scale-125 transition-all ease-in-out duration-300" : "transition-all ease-in-out duration-300"}`} />
            </div>
            <div className={`absolute   w-full h-full bg-linear-to-b from-transparent to-black text-white ${mostrarDetalles ? "opacity-100 " : "hidden"}`} onMouseLeave={() => setMostrarDetalles(false)} onMouseOver={() => setMostrarDetalles(true)}>
                <div className="absolute bottom-5 left-5 flex-col gap-2 flex w-full">
                    <div className={``}>
                        <span className="text-2xl">{movie.title}</span>
                    </div>
                    <div>
                        <span className="">📅 {new Date(movie.airDate).getFullYear()}</span>
                        <span>⭐{movie.rating}</span>
                    </div>
                    <div>
                        <p>
                            {movie.description}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}   