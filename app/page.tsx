"use client";
import { motion } from "framer-motion";
import React from "react";
import { LampContainer } from "./components/ui/lamp-effect/lamp-effect";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BackgroundGradient } from "./components/background-gradient/background-gradient";
import Image from "next/image";
import { Button } from 'primereact/button'; 
import Card from 'react-bootstrap/Card';
import { CardProduct } from "./components/card-product/card-product";
import { ImagesSlider } from "./components/images-slider/images-slider";
import { CardBody, CardContainer, CardItem } from "./components/card-d/card-d";
import Link from "next/link";
import { NavbarDemo } from "./components/navbar-menu/navbar-component-menu";
import Example from "./components/collection/colletion";
import ProductsList from "./sections/products-list/products-list";
import { Avatar } from "primereact/avatar";
export default function Home() {

  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div>
      <div>
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
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
      </div> 

      <div>
      <Example></Example>
      </div>

      <div>
      </div>
        <ProductsList></ProductsList>

      <div>
        <CardProduct title={"Air Jordan 4 Retro Reimagined"} text={"The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases."} price={100} image={"https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/f206c8a8-0d74-48a0-95a1-6f677415bf75/women-s-air-jordan-4-vivid-sulphur-aq9129-101-release-date.jpg"}></CardProduct>
      </div>
      <div>
      <Avatar image="/images/avatar/amyelsner.png" size="xlarge" shape="circle" />
      </div>

      <div className="mt-5">
        <footer style={{backgroundColor:'grey', height:'5rem'}}>Action</footer>
      </div>
  </div>
    
  );
}
