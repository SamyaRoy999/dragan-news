import Marquee from "react-fast-marquee";

const NewsSlider = () => {
    return (
        <div>
            <div className="flex flex-col w-full sm:w-auto sm:flex-row p-4">
                <a href=""
                    className="flex text-white flex-row items-center justify-center w-full px-4 py-4 mb-4 text-lg font-medium bg-[#D72050]  leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1">
                    Latest
                </a>
                <Marquee>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </div>
    )
}

export default NewsSlider