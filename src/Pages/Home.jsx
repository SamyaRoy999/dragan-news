import NewsSlider from "../Components/NewsSlider"
import DagonNews from "../Components/DagonNews"
import Header from "./Shared/Header"
import LeftSideNav from "./Shared/LeftSideNav"
import Nabebar from "./Shared/Nabebar"
import RightSideNav from "./Shared/RightSideNav"

import { useLoaderData } from "react-router-dom";

const Home = () => {
    const news = useLoaderData()
    console.log(news);
    return (
        <div className="font-Poppin font-bold">
            <Header></Header>
            <NewsSlider />
            <Nabebar></Nabebar>
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 ">
                <div className=" col-span-1 border"><LeftSideNav /></div>
                <div className="col-span-1  md:col-span-2 ">
                    {news.map(item => < DagonNews key={item.id} newsData={item} />)}
                </div>
                <div className="col-span-1 border "><RightSideNav /></div>
            </div>
        </div>
    )
}

export default Home