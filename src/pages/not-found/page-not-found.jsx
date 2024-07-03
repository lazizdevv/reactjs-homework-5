import notFound from "../../assets/page-not-found.jpg";

export const PageNotFound = () => {
    return(
        <div className="container">
            <img src={notFound} alt="404" className="w-[700px] h-1/2 ml-auto mr-auto"/>
        </div>
    )
}