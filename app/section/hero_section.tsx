import Image from "next/image";
import {PrimaryBtn } from "../components/buttons";

function Hero(){
    return(
        <>
        
        <section className="hero">
            <div className="w-[50%] herotext">
                <h1 className="text-[32px]">We create solutions for your business</h1>
    <p className="w-[80%]">Lorem, ipsum dolor sit amet consectetur adipisicing 
        elit. Laborum ducimus quaerat cupiditate accusantium
        inventore mollitia dolorum modi tenetur 
        accusamus repudiandae esse, animi quia ipsum. Praesentium?</p>
        <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
            <Image src="/images/hero.jpg" alt="hero section image"
            width={250}
            height={250}/>
        </section>
        </>
    );
}

export default Hero;