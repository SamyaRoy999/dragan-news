import Header from "./Shared/Header"
import Nabebar from "./Shared/Nabebar"
import RightSideNav from "./Shared/RightSideNav"


const SinglePages = () => {
    return (
        <div>
            <Header></Header>
            <Nabebar></Nabebar>
            <div className=" grid grid-cols-1  lg:grid-cols-4">
                <div className=" col-span-3">
                    hi my name program
                </div>
                <div className=" col-span-1">
                        <RightSideNav/>
                </div>
            </div>
        </div>
    )
}

export default SinglePages