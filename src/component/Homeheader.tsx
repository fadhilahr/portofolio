import Foto from "../assets/fadhilah.jpg"


export const HomeHeader = () => {
    return (
        <div className="clafl">
            <div className="flex justify-evenly items-center bg-gradient-to-b from-blue1 to-xblack h-[90vh]">
                <img src={Foto} className="flex flex-col w-[300px]" />
                <h1 
                    className=" text-xwhite text-[3rem]">
                        Hello! I'm  
                        <span className="text-blue2">
                        Nurfadhilah  
                        </span>
                        <span>
                    <img 
                        src="https://media.tenor.com/nebZyl8oN7IAAAAi/wave-hello.gif" 
                        width={300} className="w-[70px] inline">
                    </img>
                        </span>
            
                </h1>
            <div>
               <br /> <a href="#about" className="bg-gradient-to-tr from-blue2 to-blue1 p-2 rounded-md mt-6 w-[12rem] text-center text-xwhite transition-all duration-500 hover:shadow-[0px_0px_30px_-10px_rgba(0,0,0,1)] hover:scale-105 text-[1.2rem]">About Me</a>

            </div>

        </div>
        </div>
    )
}