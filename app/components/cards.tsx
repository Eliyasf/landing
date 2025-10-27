
type ServiceCardProps = {
  title: string;
  description: string;
};

function Service_card({title,description}:ServiceCardProps){
    return(
        <>
        <div className="w-[200px] h-[150px] p-4 shadow-[0_0_5px_rgb(0,0,0,0.2)] rounded-[12px]">
        <h3 className="font-bold">{title}</h3>
        <p className="text-[12px]">{description}</p>
        </div>
        </>
    );
}


export {Service_card};