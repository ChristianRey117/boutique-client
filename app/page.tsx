"use client";
import { motion } from "framer-motion";
import React from "react";
import { CardProduct } from "./components/card-product/card-product";
import { ImagesSlider } from "./components/images-slider/images-slider";
import ProductsList from "./sections/products-list/products-list";
import Colletion from "./components/collection/colletion";
import { useRouter } from "next/navigation";
export default function Home() {
  const _router = useRouter();
  const images = [
    "/images/hero1.jpg",
    "/images/hero2.jpeg",
    "/images/hero3.jpg",
    "/images/hero4.jpg",
  ];

  return (
    <div>
      <div id={"hero"}>
        <ImagesSlider className="h-[40rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Your favorite <br /> store
            </motion.p>
            <button
              className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
              onClick={() => _router.push("/pages/login")}
            >
              <span>Join now →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </motion.div>
        </ImagesSlider>
      </div>

      <div>
        <Colletion></Colletion>
      </div>

      <div>
        <ProductsList limit={8}></ProductsList>
      </div>
    </div>
  );
}
