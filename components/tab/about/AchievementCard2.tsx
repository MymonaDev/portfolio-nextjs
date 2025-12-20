import Image from "next/image";

import awards from "@/assets/awards/awards.jpg";
function AchievementCard2() {
  return (
    <>
      <div className="w-[100%] relative h-[22.3rem] overflow-hidden group mx-auto dark:bg-black  bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col">
        <div className="w-full h-full ">
          <Image
            src={awards}
            alt="shoes"
            width={600}
            height={600}
            className="h-full w-full  scale-105 group-hover:scale-100 object-cover transition-all duration-300 rounded-md"
          />
        </div>
        <article className="p-8 w-full h-full overflow-hidden z-10  absolute top-0 flex flex-col justify-end rounded-md   bg-[#0077b5] bg-opacity-0  opacity-0 group-hover:opacity-100 bg-gradient-to-b from-[#0077b5] to-[#0077b5]/40 text-white  transition-all duration-300">
          <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2">
            <h1 className="md:text-2xl font-semibold">Got the certificate</h1>
            <p className=" text-[0.9rem] sm:text-[1rem] leading-[1.4375rem]">
              Received the certificate from AIT
            </p>
          </div>
        </article>
        <article className="p-2 w-full h-[20%] flex flex-col justify-center items-center  overflow-hidden  absolute bottom-0 rounded-b-md bg-gradient-to-t from-[#0077b5]  opacity-100 group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-300 text-white">
          <h1 className="md:text-2xl font-bold text-white drop-shadow-lg">Got the certificate</h1>
          <p className="sm:text-base text-sm text-white drop-shadow-md">
            Received the certificate from AIT
          </p>
        </article>
      </div>
    </>
  );
}

export default AchievementCard2;
