"use client";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import AnimatedBeam, { Circle } from "./AnimatedBeam";
import AnimatedIntro from "./AnimatedIntro";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  return (
    <section
      id="home"
      className="mt-5 pt-20 flex flex-col items-center justify-center scroll-mt-32 pb-28 relative bg-[size:1.875rem_1.875rem]"
    >
      {/* Gradient blur elements from kaziui */}
      <div
        className={`absolute rotate-[-45deg] sm:rotate-[-60deg] top-[36px] sm:-top-[120px] left-0 blur-[43px] sm:blur-[45px] w-[60px] h-[200px] sm:h-[500px] rounded-full bg-gradient-to-b from-[#0fabca]/60 to-[#0fabca]/20 dark:from-white/90 dark:to-white/10`}
      ></div>
      <div
        className={`absolute rotate-[45deg] sm:rotate-[60deg] top-[36px] sm:-top-[120px] right-0 blur-[43px] sm:blur-[45px] w-[60px] h-[200px] sm:h-[500px] rounded-full bg-gradient-to-b from-[#0fabca]/60 to-[#0fabca]/20 dark:from-white/90 dark:to-white/10`}
      ></div>
      {/* <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      > */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative flex w-full max-w-[31.25rem] mx-auto items-center justify-center overflow-hidden rounded-lg p-5"
        ref={containerRef}
      >
        <motion.div
          className="flex h-full w-full flex-col items-stretch justify-between gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      fill="none"
                      viewBox="0 0 182 178"
                    >
                      <path fill="#007ACC" d="M0 0H181.622V177.081H0z"></path>
                      <path
                        fill="#fff"
                        d="M144.151 73.383c4.03.985 7.691 3.203 10.523 6.373a29.101 29.101 0 014.033 5.686c.052.224-7.262 5.389-11.697 8.27-.161.114-.8-.618-1.524-1.742a9.8 9.8 0 00-3.342-3.558 9.2 9.2 0 00-4.563-1.417c-5.098-.369-8.383 2.438-8.359 7.13a6.742 6.742 0 00.724 3.313c1.122 2.437 3.205 3.9 9.746 6.88 12.042 5.448 17.211 9.04 20.401 14.144a26.592 26.592 0 013.255 10.55 26.9 26.9 0 01-1.285 11.008c-1.631 3.868-4.217 7.206-7.49 9.669-3.273 2.463-7.113 3.96-11.122 4.336a49.112 49.112 0 01-12.818-.139c-6.511-1.125-12.509-4.409-17.116-9.374a31.383 31.383 0 01-4.384-6.821c.492-.384 1.009-.73 1.548-1.034.748-.448 3.579-2.16 6.248-3.786l4.847-2.986 1.013 1.553a23.128 23.128 0 006.39 6.428 15.012 15.012 0 008.302 2.002 15.134 15.134 0 008.067-2.873 7.852 7.852 0 002.171-4.73 7.985 7.985 0 00-1.225-5.091c-1.306-1.965-3.976-3.617-11.563-7.075-5.95-2.108-11.369-5.603-15.853-10.224a23.68 23.68 0 01-4.619-8.84 37.166 37.166 0 01-.294-11.284c.891-4.32 3.023-8.246 6.109-11.249 3.085-3.003 6.974-4.936 11.14-5.537a40.562 40.562 0 0112.737.418zM104.66 80.76l.052 7.234H82.797v65.413H67.342V88.01H45.426v-7.105a73.127 73.127 0 01.19-7.293c.08-.115 13.405-.17 29.56-.14l29.399.085.085 7.204z"
                      ></path>
                    </svg>
                  </TooltipTrigger>
                  <TooltipContent>TypeScript</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Circle>
            <Circle ref={div5Ref} className="p-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="32"
                      viewBox="0 0 256 154"
                    >
                      <defs>
                        <linearGradient
                          id="logosTailwindcssIcon0"
                          x1="-2.778%"
                          x2="100%"
                          y1="32%"
                          y2="67.556%"
                        >
                          <stop offset="0%" stopColor="#2298BD"></stop>
                          <stop offset="100%" stopColor="#0ED7B5"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#logosTailwindcssIcon0)"
                        d="M128 0Q76.8 0 64 51.2Q83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2q19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"
                      ></path>
                    </svg>
                  </TooltipTrigger>
                  <TooltipContent>TailwindCSS</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref} className="p-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Image
                      src="https://user-images.githubusercontent.com/7850794/164965523-3eced4c4-6020-467e-acde-f11b7900ad62.png"
                      alt="framer motion"
                      height={50}
                      width={50}
                      loading="lazy"
                      sizes="50px"
                    />
                  </TooltipTrigger>
                  <TooltipContent>Framer Motion</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="3.7 3.7 43.6 43.6"
                width="30"
              >
                <path
                  d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z"
                  fill="#59529d"
                />
                <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4" />
                <path
                  d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z"
                  fill="#bb4b96"
                />
              </svg> */}
            </Circle>
            <Circle ref={div4Ref} className="h-full w-full p-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              >
                <Image
                  className="rounded-full w-32"
                  src={assets.mahbub}
                  alt="Mymona Khatun"
                  priority
                  sizes="(max-width: 768px) 100vw, 128px"
                  width={128}
                  height={128}
                />
              </motion.div>
            </Circle>
            <Circle ref={div6Ref} className="p-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 128 128"
                    >
                      <path
                        fill="#F0DB4F"
                        d="M1.408 1.408h125.184v125.185H1.408z"
                      ></path>
                      <path
                        fill="#323330"
                        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237"
                      ></path>
                    </svg>
                  </TooltipTrigger>
                  <TooltipContent>JavaScript</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref} className="p-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      fill="none"
                      viewBox="0 0 353 353"
                    >
                      <circle
                        cx="176.5"
                        cy="176.5"
                        r="176.5"
                        fill="#fff"
                      ></circle>
                      <path
                        fill="#000"
                        d="M164.94.095c-.759.069-3.174.31-5.348.483-50.138 4.52-97.101 31.569-126.846 73.143C16.183 96.837 5.59 123.058 1.587 150.83.173 160.526 0 163.39 0 176.535c0 13.145.173 16.008 1.587 25.703C11.18 268.515 58.35 324.2 122.325 344.832c11.456 3.691 23.533 6.21 37.267 7.728 5.348.587 28.468.587 33.816 0 23.706-2.622 43.789-8.487 63.595-18.596 3.037-1.553 3.623-1.967 3.209-2.312-.276-.207-13.216-17.561-28.743-38.538l-28.227-38.124-35.369-52.338c-19.461-28.774-35.472-52.304-35.61-52.304-.138-.034-.276 23.219-.345 51.614-.104 49.716-.138 51.717-.759 52.89-.898 1.691-1.588 2.381-3.037 3.14-1.104.552-2.07.656-7.281.656h-5.969l-1.588-1.001a6.45 6.45 0 01-2.312-2.519l-.724-1.552.069-69.175.103-69.21 1.07-1.345c.552-.725 1.725-1.656 2.553-2.105 1.415-.69 1.967-.759 7.937-.759 7.039 0 8.212.276 10.041 2.277.518.552 19.669 29.395 42.581 64.138 22.912 34.743 54.244 82.182 69.634 105.471l27.95 42.333 1.415-.932c12.526-8.142 25.776-19.735 36.266-31.81 22.326-25.635 36.715-56.893 41.546-90.221 1.414-9.695 1.587-12.558 1.587-25.703s-.173-16.009-1.587-25.704C341.82 84.554 294.65 28.869 230.675 8.237 219.391 4.58 207.383 2.062 193.926.544c-3.313-.346-26.122-.725-28.986-.449zm72.257 106.747c1.656.828 3.002 2.415 3.485 4.071.276.897.345 20.08.276 63.31l-.104 62.033-10.938-16.767-10.973-16.768v-45.093c0-29.154.138-45.542.345-46.335.552-1.932 1.76-3.451 3.416-4.348 1.415-.724 1.932-.793 7.35-.793 5.107 0 6.004.069 7.143.69z"
                      ></path>
                    </svg>
                  </TooltipTrigger>
                  <TooltipContent>Next.js</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Circle>
            <Circle ref={div7Ref} className="p-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35.93"
                      height="32"
                      viewBox="0 0 256 228"
                    >
                      <path
                        fill="#00D8FF"
                        d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86"
                      ></path>
                    </svg>
                  </TooltipTrigger>
                  <TooltipContent>React.js</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Circle>
          </div>
        </motion.div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
          dotted
          gradientStartColor="#0fabca"
          gradientStopColor="#0fabca"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
          dotted
          gradientStartColor="#0fabca"
          gradientStopColor="#0fabca"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
          dotted
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
          reverse
          gradientStartColor="#0fabca"
          gradientStopColor="#0fabca"
          dotted
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
          dotted
          gradientStartColor="#0fabca"
          gradientStopColor="#0fabca"
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
          reverse
          dotted
          gradientStartColor="#0fabca"
          gradientStopColor="#0fabca"
        />
      </motion.div>
      {/* </motion.div> */}
      <AnimatedIntro />
      {/* <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-4xl font-bold text-slate-900 px-2 sm:p-0"
      >
        Hi, I&apos;m Mymona Khatun
      </motion.h3> */}
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-4 px-1 md:text-lg text-gray-700 dark:text-white text-center"
      >
        A Software Engineer specializing in cloud-native services with expertise
        in MERN stack, AWS/GCP, and Docker. Leading teams to deliver
        production-ready solutions.
      </motion.p>
      <div className="flex mt-6">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="#contact">
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-md bg-gradient-to-br from-[#0fabca] to-[#0d9bb8] px-4 py-2 text-zinc-50 ring-2 ring-[#0fabca]/50 ring-offset-2 dark:ring-offset-gray-900 transition-all hover:ring-transparent active:ring-[#0fabca]/70 focus:outline-none focus:ring-2 focus:ring-[#0fabca]/70"
            >
              Hire Now
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-4"
        >
          <Link href="#contact">
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="px-6 py-2 text-[#0fabca] dark:text-[#0fabca] border border-[#0fabca] dark:border-[#0fabca] rounded-md transition-all duration-300 hover:bg-[#0fabca]/10 dark:hover:bg-[#0fabca]/20 focus:outline-none focus:ring-2 focus:ring-[#0fabca]/70 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
