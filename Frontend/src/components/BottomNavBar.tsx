

export const BottomNavBar = () => {


    return (
        <div className="text-gray-200 xl:hidden flex  sticky bottom-0 w-95% gap-4 justify-center items-center backdrop-blur-3xl  py-2 text-md">
            <div className="flex flex-col items-center cursor-pointer">
                <i className="fa-regular fa-house"></i>
                <span>Home</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <i className="fa-solid fa-tv"></i>
                <span>TV shows</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>Search</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <i className="fa-solid fa-film"></i>
                <span>Movies</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <i className="fa-regular fa-clock"></i>
                <span>Latest</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <i className="fa-regular fa-circle-play"></i>
                <span>Continue</span>
            </div>
        </div>
    )

}