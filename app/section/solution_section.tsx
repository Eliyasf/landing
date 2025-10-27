import Image from "next/image";

export default function Solution(){
    return(
        <section className="flex gap-[15px] justify-center items-center">
            <Image src="/images/hero.jpg" alt="solution section image" width={250} height={250}/>
            <div>
                
                <h2>simple solution</h2>
                <p className="w-[300px] text-[12px]">Lorem, ipsum dolor sit
                     amet consectetur adipisicing
                      elit. Reiciendis, non.
                      amet consectetur adipisicing</p>
                      <ol>
                        <li>Contact us</li>
                        <li>Consult</li>
                        <li>Place order</li>
                        <li>Payment</li>
                      </ol>
            </div>
        </section>
    );
}