import Image from "next/image";
import list from "./list.module.css";
import { PrimaryBtn, SecondaryBtn } from "../components/buttons";

export default function Solution() {
  const solution = ["Contact us", "Consult", "Place order", "Payment"];
  return (
    <section className="flex gap-[115px] justify-center items-center bg-[#ef6a2d5e] h-[400px] p-4">
      <Image
        src="/images/hero.jpg"
        alt="solution section image"
        width={350}
        height={350}
      />
      <div className="self-start mt-4 flex flex-col gap-[24px] items-start">
        <h2 className="font-bold text-[22px]">Simple solution</h2>
        <p className="w-[300px] text-[12px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          non. amet consectetur adipisicing
        </p>

        <ol type="1" className={list.list}>
          {solution.map((item, index) => (
            <li className={list.listItem} key={index}>
              {item}
            </li>
          ))}
        </ol>
        <div>
          <PrimaryBtn>Get Started</PrimaryBtn>
          <SecondaryBtn>Read more</SecondaryBtn>
        </div>
      </div>
    </section>
  );
}
