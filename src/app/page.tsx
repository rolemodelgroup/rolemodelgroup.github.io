import { Raleway } from "next/font/google";
import { FaStar } from "react-icons/fa6";
import { clsx } from "clsx";

const raleway = Raleway({ subsets: ["latin"], weight: ["400"] });
const titleClassName = clsx(raleway.className, "text-4xl py-2 font-bold flex flex-row");
const subtitleClassname = clsx(raleway.className, "text-xs");

export default function Home() {
  return (
    <div className="text-white fixed bottom-0 right-0 mr-16 mb-16 flex flex-col justify-end items-end">
      <h1 className={titleClassName}><FaStar className="pr-1" />role model group</h1>
      <h3 className={subtitleClassname}>where the magic happens</h3>
    </div>
  );
}
