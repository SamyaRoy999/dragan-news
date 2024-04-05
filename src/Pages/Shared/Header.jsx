import logo from "../../assets/logo.png"
import moment from 'moment'; 
const Header = () => {
    return (
        <div className="text-center m-10">
            <div className="flex justify-center">
                <img src={logo} alt="" />
            </div>
            <p className="text-lg mt-5 mb-2 font-normal text-[#706F6F]">Journalism Without Fear or Favour</p>
            <p className="text-[#403F3F] font-medium text-xl">{ moment().format('dddd , MMMM, Do YYYY')}</p>
        </div>
    )
}

export default Header