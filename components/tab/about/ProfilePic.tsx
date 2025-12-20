import { assets } from "@/assets/assets";
import Image from "next/image";

const ProfilePic = () => {
  return (
    <>
      <div className="relative mt-4 group mx-auto dark:bg-black  bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col">
        <div className="w-full  rounded-t-md  overflow-hidden transition-all duration-300">
          <Image
            src={assets.mahbub}
            alt="Mymona Khatun"
            className="h-full w-full  scale-105 group-hover:scale-100 object-contain transition-all duration-300"
            loading="lazy"
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 25vw, 300px"
            width={300}
            height={400}
          />
        </div>
        <article className="relative overflow-hidden  flex-grow">
          <div className="info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300">
            <p className="md:text-2xl font-semibold">Mymona Khatun</p>
            <p className="sm:text-base text-sm">Software Engineer</p>
          </div>
          <button className="absolute h-10 -bottom-8 opacity-0 group-hover:opacity-100 cursor-pointer group-hover:bottom-3  text-3xl font-medium transition-all duration-300 w-full text-center">
            Software Engineer
          </button>
        </article>
      </div>
    </>
  );
};

export default ProfilePic;
