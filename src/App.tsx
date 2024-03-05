import { Navbar1 } from "./component/navbar"
import './App.css';
import Gambar from "./assets/fadhilah.jpg"


function App() {
  

  return (
    <>
    <div className="Navbar11">
    <Navbar1 />
    </div>
    <section className="seluruhcode">
    <section>
      <div className="container m-auto py-20 flex ">
        <div>
          <h1 className="font-bold text-4xl text-black">Hello, Nurfadhilah Ramadhan</h1>
          <h1 className="font-bold text-4xl mt-1 gradiant-text">I'm Full Stack Web Developer</h1>
          <p  className="mt-4 text-black "> I'm from indonesia. Now i'm loking forward to colaborate with you</p>
          <a target="_blank" href="https://github.com/fadhilahr">
          <button  
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 
                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
                dark:focus:ring-blue-800 font-medium rounded-lg 
                text-sm px-9 py-4 m-7 text-center me-2 mb-2">Github</button></a>
        </div>
        <img className="imagesaya min-w-[300px} h-auto p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={Gambar} width={180} height={200} />
      </div>
    </section>
    <section>
      <h1 className="relative flex justify-center aboutme font-bold text-4xl text-white">About Me</h1>  
      <h6 className="relative flex justify-center kecil mt-0 text-white py-0.5"></h6>
      <div className="container m-auto px-4 py-10 flex gap-1">
{/*           
          <div className="flex gap-4 mx-auto">
             <img className=" h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={} width={180} />
             <img className=" h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={} width={220} />
             <img className=" h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={} width={220} />
             <img className=" h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={} width={150} />
          </div> */}
      </div>
      <h1 className="mt-4 text-white m-12 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis necessitatibus saepe quos labore, laboriosam itaque! Assumenda vitae est delectus ea at eveniet, necessitatibus nulla adipisci suscipit sint dolorum quae minima, earum repellendus ipsam, enim dolores consequuntur consequatur possimus et mollitia tenetur quod nam quasi. Deleniti voluptates vitae perferendis iure esse.</h1>
      
    
    </section>
    </section>
  </>
  )
}

export default App;