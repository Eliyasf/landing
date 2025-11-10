"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  const slidedata = [
    {
      id: 1,
      name: "Eliyas Fikru",
      role: "Student",
      comment:
        "lorem ipsum naplu gbnali partug samper sol partos de martoslorem ipsum naplu gbnali partug samper sol partos de martos",
        color:"orange"
    },
    {
      id: 2,
      name: "Ayub Mohammed",
      role: "Marketing",
      comment:
        "lorem ipsum naplu gbnali partug samper sol partos de martoslorem ipsum naplu gbnali partug samper sol partos de martos",
        color:"green"
    },
    {
      id: 3,
      name: "Fethya Mohammed",
      role: "Sociologist",
      comment:
        "lorem ipsum naplu gbnali partug samper sol partos de martoslorem ipsum naplu gbnali partug samper sol partos de martos",
        color:"pink"
    },
    {
      id: 4,
      name: "Zekariyas Ewnetu",
      role: "Videographer",
      comment:
        "lorem ipsum naplu gbnali partug samper sol partos de martoslorem ipsum naplu gbnali partug samper sol partos de martos",
        color:"blue"
    },
    {
      id: 5,
      name: "Natnael Yilma",
      role: "Graphics Designer",
      comment:
        "lorem ipsum naplu gbnali partug samper sol partos de martoslorem ipsum naplu gbnali partug samper sol partos de martos",
        color:"aqua"
    },
  ];

  return (
    <>
    <h1 className="text-center text-4xl font-bold">What clients say!</h1>
      <Swiper className="flex justify-center items-center    p-8 bg-gray-50 h-[300px]"
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={24}
        slidesPerView={3}
      >
        {slidedata.map((item) => (
          <SwiperSlide key={item.id} className="flex flex-col !h-[200px] mt-16  w-[450px] justify-center bg-white items-center p-4 gap-2 rounded-lg shadow-md">
            <div className="flex justify-start items-center p-4 gap-2">
              <div className="flex justify-center items-center font-bold rounded-full p-4 w-[50px] h-[50px]" style={{
                backgroundColor:item.color
              }}>{item.name[0]}</div>
              <div className="flex flex-col justify-center items-start p-2 ">
                <p className="text-orange-500 font-bold">{item.name}</p>
                <p className="text-gray-400">{item.role}</p>
              </div>
            </div>

            <p>{item.comment}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
