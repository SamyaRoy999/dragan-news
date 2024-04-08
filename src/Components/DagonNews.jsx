import PropTypes from 'prop-types';
import {Link} from "react-router-dom"
import { FaRegEye } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";

const DagonNews = ({ newsData }) => {
    const { rating, total_view,_id, title, author, image_url, details } = newsData;
    console.log(newsData);
    return (
        <div className='border-2 p-5 mb-5 rounded-lg border-gray-600'>
            <div className="flex  justify-between w-full pb-6">
                <div className="flex items-center gap-2">
                    <div className="avatar">
                        <div className=" w-16 rounded-full">
                            <img src={author.img} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <p className='text-[#403F3F] font-bold text-base'>{author.name}</p>
                        <p className='text-[#403F3F] text-sm font-light'>{author.published_date}</p>
                    </div>
                </div>
                <div className=" flex gap-3 items-center">
                    <CiBookmark className=' text-3xl' />
                    <IoShareSocialOutline className=' text-2xl' />
                </div>
            </div>
            <h4 className='pb-6 text-xl font-extrabold text-[#403F3F]'>{title}</h4>
            <div className='pb-6 flex justify-center'>
                <img src={image_url} alt="" />
            </div>
            {details.length > 200
                ? <p>{details.slice(0, 200)}<Link to={`/singlePage/${_id}`} className=' text-red-600'> Read More....</Link></p>
                : <p className=' text-base font-medium text-[#706F6F]'>{details}</p>}

            <div className='flex justify-between items-center'>
                <div className=" flex gap-2 items-center">
                    <div className="  rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>{rating.number}</p>
                </div>
                <p className='flex items-center gap-2'><FaRegEye /> <span>{total_view}</span></p>
            </div>
        </div>
    )
}

export default DagonNews

DagonNews.propTypes = {
    newsData: PropTypes.any
};