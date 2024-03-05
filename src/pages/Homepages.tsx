import {Navbar1} from "../component/navbar"
import {HomeHeader} from "../component/Homeheader"
import {About} from "../component/About"


export const HomePage = () => {
    return (
        <>
            <Navbar1 />
            <HomeHeader/>
            <div className="flex flex-col justify-evenly h-[90vh]">
                <div className="bg-xblack flex mx-36 gap-10">
                    <About />
                </div>
            </div>
        </>
    )

}