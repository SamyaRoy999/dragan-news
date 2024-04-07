import { useEffect, useState } from "react"


const LeftSideNav = () => {
    const [catagory, setCatagory] = useState()

    useEffect(() => {

        fetch('/data/categories.json')
            .then(res => res.json())
            .then(data => setCatagory(data))
            
    }, [])
    console.log(catagory);
    return (
        <div>
            <h2 className=" text-xl font-bold text-[#403F3F]">All Caterogy</h2>
            <button className="btn btn-xs sm:btn-sm text-[#403F3F] md:btn-md w-full lg:btn-lg my-5">National News</button>
            <div className=" flex justify-center ">
                <ul className=" text-xl font-medium  text-[#9F9F9F]">
                    {/* {catagory.map(item => (
                        <li key={item.id} className="pb-7"> {item.name} </li>
                    ))} */}
                </ul>
            </div>
        </div>
    )
}

export default LeftSideNav