import { Navbar } from 'flowbite-react';
import { Routes } from 'react-router-dom';

// import { Image } from "../src/assets/1174274.jpg"

export const Navbar1 =() => {
  
  return (
    <>
    <Navbar fluid rounded className="Navbar1 bg-indigo-400">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-extrabold dark: text-black ">Fadhilah</span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="#Home" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#About">About Me</Navbar.Link>
        <Navbar.Link href="#Contact">Project</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}