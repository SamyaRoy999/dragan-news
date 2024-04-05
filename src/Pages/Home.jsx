import NewsSlider from "../Components/NewsSlider"
import Header from "./Shared/Header"
import LeftSideNav from "./Shared/LeftSideNav"
import Nabebar from "./Shared/Nabebar"
import RightSideNav from "./Shared/RightSideNav"


const Home = () => {
    return (
        <div className="font-Poppin font-bold">
            <Header></Header>
            <Nabebar></Nabebar>
            <NewsSlider />
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 ">
                <div className=" col-span-1 border border-red-300"><LeftSideNav /></div>
                <div className="col-span-1  md:col-span-2 border border-red-300">newse chanter section</div>
                <div className="col-span-1 border border-red-300"><RightSideNav /></div>
            </div>
        </div>
    )
}

export default Home