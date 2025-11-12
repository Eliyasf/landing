import Link from "next/link";
import { PrimaryBtn } from "./buttons";
import NavLink from "./navlink";

export default function Navigation(){
    return(

        <nav className="navigation">


        <h1 className="text-brand font-bold">Logo</h1>

            <ul className="list-none navigation-link">
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/About">About</NavLink></li>
        <li><NavLink href="/Service">Service</NavLink></li>
        <li><NavLink href="/ContactUs">Contact Us</NavLink></li>
            </ul>
        
          <PrimaryBtn> 
            Sign Up 
            </PrimaryBtn>

           

        </nav>
      
    );
}