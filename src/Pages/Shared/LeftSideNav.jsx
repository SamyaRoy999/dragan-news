import { useEffect, useState } from "react";

const LeftSideNav = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("/data/categories.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch categories");
                }
                return res.json();
            })
            .then((data) => setCategory(data))
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    return (
        <div>
            <h2 className="text-xl font-bold text-[#403F3F]">All Categories</h2>
            <button className="btn btn-xs sm:btn-sm text-[#403F3F] md:btn-md w-full lg:btn-lg my-5">
                National News
            </button>
            <div className="flex justify-center">
                <ul className="text-xl font-medium text-[#9F9F9F]">
                    {category.map((item) => (
                        <li key={item.id} className="pb-7">
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LeftSideNav;