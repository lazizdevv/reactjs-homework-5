import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <>
        <div className="flex justify-center gap-20 p-10 w-full text-xl bg-gray-200 font-bold underline">
            <Link className="hover:text-white " to={"/"} >home </Link>
            <Link className="hover:text-white " to={"/users"} >users </Link>
            <Link className="hover:text-white " to={"/contact"} >contact </Link>

        </div>
            
        </>
    )
}