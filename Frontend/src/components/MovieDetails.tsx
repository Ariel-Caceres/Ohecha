import { useParams } from "react-router-dom"
import { apiUrl } from "../enviroment"
import { useEffect, useState } from "react"
import type { UUID } from "../types/uuid";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";


export interface MovieInterface {
    id: UUID,
    title: string;
    description: string;
    airDate: Date;
    rating: number;
    imgUrlCover: string;
    imgUrlPanoramic: string;
    cast: string,
    language: string
    movieGenre: MovieGenre[]
}

export interface MovieGenre {
    createdAt: Date
    id: UUID
    updatedAt: Date
    genre: GenreInterface
}

export interface GenreInterface {
    id: UUID
    createdAt: Date
    updatedAt: Date
    name: string
}

export const MovieDetails = () => {
    const { id } = useParams()
    // const location = useLocation()
    const [movie, setMovie] = useState<MovieInterface>()
    const [mostrarTrailer, setMostrarTrailer] = useState<boolean>(false)
    useEffect(() => {
        const getMovieById = async () => {
            try {
                const res = await fetch(`${apiUrl}products/movie/${id}`)
                if (!res.ok) throw new Error("Error al traer la película")
                const data = await res.json()

                setMovie(data)
                console.log(data)
            } catch (e) {
                console.log(e)
            }
        }
        getMovieById()
    }, [])

    const devolverItems = (parametro) => {
        return <div className="flex items-center gap-2 px-2 py-2 rounded-2xl bg-gray-700/50">
            <span className="block w-2 h-2 bg-red-600 rounded-full"></span>
            <span className="text-[18px]">
                {parametro}
            </span>
        </div>
    }

    if (!movie) return <div>Cargando...</div>
    console.log(movie)
    return (
        <>
            <div className=" h-full relative  bg-black flex  flex-col w-full justify-center  ">
                <Navbar />


                <div className=" relative h-[55vh] text-white w-full  flex justify-center">
                    <div className="absolute right-0 top-0 rounded-2xl z-10">

                        <div className="absolute inset-0 bg-linear-to-r from-black via-black/30 to-transparent z-10"></div>
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent z-10"></div>

                        <div className="h-[55vh] w-[1350px]  ">
                            <img src={movie?.imgUrlPanoramic} alt="" className=" w-full h-full  object-cover object-top" />
                        </div>



                    </div>
                    <div className="flex relative  z-20 w-[90%] justify-center box-content  ">
                        <div className="absolute top 0 z-20 w-full justify-center bottom-0">
                            <div className=" bg-linear-to-b mt-85  z-20 text-white w-full text-2xl">
                                <div className="">
                                    <div className="">
                                        <h1 className="text-4xl font-bold ">
                                            {movie.title}
                                        </h1>
                                    </div>
                                    <div className="flex  gap-1 mt-4 flex-wrap">
                                        {devolverItems(movie.language)}
                                        {devolverItems(movie.rating)}
                                        {devolverItems(new Date(movie.airDate).getFullYear())}
                                        {movie.movieGenre.map((g, i) => (
                                            devolverItems(<span key={i}>{g.genre.name}</span>)
                                        ))}
                                    </div>
                                    <div className="px-5 py-3 bg-red-500 w-1/6 rounded-2xl flex justify-center mt-10">
                                        <button>Play Now</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>




            </div>

            <div className=" text-xl flex flex-col  h-3/5 w z-20  text-white  justify-center items-center  ">
                <div className="w-[90%]">

                    <div className="mt-10 flex flex-col gap-10 w-[90%] justify-center  ">
                        <div className="flex gap-10">
                            <div className="flex">
                                <button className="text-2xl">
                                    <i className="fa-solid fa-share-nodes"></i>
                                    <span className="text-[22px]">Share</span>

                                </button>
                            </div>
                            <div className="flex ">
                                <button className="text-2xl">
                                    <i className="fa-solid fa-heart"></i>
                                    <span className="text-[22px]">Add to favorites</span>
                                </button>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-[20px] py-10">
                            <div className="gap-10">
                                <span className="border-b border-red-500">Overview</span>
                                <p>{movie.description}</p>
                                <p>A species of parasitic aliens descends on Earth and quickly infiltrates humanity by entering the brains of vulnerable targets; insatiable beings that gain total control of their host and are capable of transforming themselves to feed on unsuspecting prey. High school student Shinichi Izumi falls victim to one of these parasites, but the creature fails to take over his brain and ends up in his right hand.
                                </p>
                            </div>

                        </div>
                        <div className="flex flex-col">

                            <span>Cast:</span>
                            <span>{movie.cast}</span>
                            <div className="flex gap-2">
                                <div className="w-[200px] h-[200px] bg-red-200 justify-center items-center flex text-8xl rounded-2xl">🐈</div>
                                <div className="w-[200px] h-[200px] bg-red-200 justify-center items-center flex text-8xl rounded-2xl">🐈</div>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 w-full cursor-pointer" onClick={() => setMostrarTrailer(!mostrarTrailer)}>
                        <div className="justify-between flex">
                            <span className="text-3xl ">
                                Trailer:
                            </span>
                            <span> {mostrarTrailer ? <i className="fa-solid fa-circle-up"></i> : <i className="fa-solid fa-circle-down"></i>}</span>
                        </div>

                        {mostrarTrailer &&
                            <div className="py-6 flex justify-center">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/xpBhJdTvN3E?si=cx8ui-mJgaxji0Rl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        }
                    </div>
                </div>

            </div>
            <Footer />
        </>

    )
}