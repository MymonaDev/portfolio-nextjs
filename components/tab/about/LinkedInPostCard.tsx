import React from "react";
import Image from "next/image";
import Link from "next/link";

import nextjs_contribution from "@/assets/awards/Nextjs_contribution.png";

function LinkedInPostCard() {
  const linkedinPostUrl =
    "https://www.linkedin.com/posts/mahbubdev_nextjs-opensource-developerjourney-activity-7397659416604532737-yxh4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-Kc1MByI-ZiaWbN1BHX1K2L_BFiUgYfMM";

  return (
    <>
      <div className="w-[100%] relative h-[22.3rem] overflow-hidden group mx-auto dark:bg-black  bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col">
        <div className="w-full h-full ">
          <Image
            src={nextjs_contribution}
            alt="Next.js Contribution"
            width={600}
            height={600}
            className="h-full w-full object-contain transition-all duration-300 rounded-md"
          />
        </div>
        <article className="p-8 w-full h-full overflow-hidden z-10  absolute top-0 flex flex-col justify-end rounded-md   bg-[#0077b5] bg-opacity-0  opacity-0 group-hover:opacity-100 bg-gradient-to-b from-[#0077b5] to-[#0077b5]/40 text-white  transition-all duration-300">
          <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2">
            <h1 className="md:text-2xl font-semibold">Next.js Contribution</h1>
            <p className=" text-[0.9rem] sm:text-[1rem] leading-[23px]">
              First Pull Request approved in the official Next.js repository
            </p>
            <Link
              href={linkedinPostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-white text-[#0077b5] rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              View Post
            </Link>
          </div>
        </article>
        <article className="p-2 w-full h-[20%] flex flex-col justify-center items-center  overflow-hidden  absolute bottom-0 rounded-b-md bg-gradient-to-t from-[#0077b5]  opacity-100 group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-300 text-white">
          <h1 className="md:text-2xl font-bold text-white drop-shadow-lg">Next.js Contribution</h1>
          <p className="sm:text-base text-sm text-white drop-shadow-md">
            First PR approved in Next.js repository
          </p>
        </article>
      </div>
    </>
  );
}

export default LinkedInPostCard;

