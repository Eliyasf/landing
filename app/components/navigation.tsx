import Link from "next/link";
import { PrimaryBtn } from "./buttons";

export default function Navigation(){
    return(

        <nav className="navigation">


        <h1 className="text-brand font-bold">Logo</h1>

            <ul className="list-none navigation-link">
        <li><Link href='./'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/sevice'>Service</Link></li>
        <li><Link href='/contact'>Contact Us</Link></li>
            </ul>
        
          <PrimaryBtn> 
            Sign Up 
            </PrimaryBtn>

           

        </nav>
      
    );
}