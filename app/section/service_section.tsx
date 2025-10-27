import { Service_card } from "../components/cards";

export default function Service(){
    return(
        <section className="mt-[42px]">
        <h1 className="text-center font-bold text-[28px]">We provide the best service</h1>
        <div className="flex justify-center item-center gap-[16px] p-4">
           <Service_card title="See/team" description="Lorem ipsum dolor sit
 amet consectetur adipisicing 
elit. Fugiat at numquam 
possimus sit non aperiam! "/> 

<Service_card title="Marketing" description="Lorem ipsum dolor sit
 amet consectetur adipisicing 
elit. Fugiat at numquam 
possimus sit non aperiam! "/> 

<Service_card title="Viral catagory" description="Lorem ipsum dolor sit
 amet consectetur adipisicing 
elit. Fugiat at numquam 
possimus sit non aperiam! "/> 

<Service_card title="Others" description="Lorem ipsum dolor sit
 amet consectetur adipisicing 
elit. Fugiat at numquam 
possimus sit non aperiam! "/> 
        </div>
        </section>
    );
} 