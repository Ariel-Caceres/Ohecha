import { useNavigate } from "react-router-dom"




export const Navbar = () => {
    const navigate = useNavigate()


    return (
        <div className="flex  items-center justify-center text-[#C6C5B9]  ">
            <div className="flex  justify-start p-5 pl-6 w-1/2 items-center">
                <div className="min-w-1/5 " onClick={() => navigate("/")}>
                    <span className="text-[20px] hover:text-white cursor-pointer">📽 Ohecha</span>
                </div>
                <div className="w-2/3 justify-between xl:flex hidden">
                    <ul className=" flex justify-around m-0 p-0 items-center gap-5 w-full   ">
                        <li className="m-0 p-0 cursor-pointer hover:text-white">Movies</li>
                        <li className="m-0 p-0 cursor-pointer hover:text-white">TVShows</li>
                        <li className="m-0 p-0 cursor-pointer hover:text-white">Latest</li>
                        <li className="m-0 p-0 cursor-pointer hover:text-white min-w-[154px]">Continue Watching</li>
                        <li className="m-0 p-0 cursor-pointer hover:text-white">Contact</li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-end w-1/2  items-center">
                <div className="justify-center flex w-1/3 gap-5">
                    <div className="text-[20px] ">
                        <i className="fa-solid fa-magnifying-glass hover:text-white cursor-pointer"></i>
                    </div>

                    <div className="text-[20px]   b">
                        <i className="fa-solid fa-heart hover:text-white cursor-pointer"></i>
                    </div>
                </div>
            </div>
        </div >

    )
}
