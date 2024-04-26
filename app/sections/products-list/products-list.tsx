"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardProduct } from "../../components/card-product/card-product";

export default function ProductsList() {

  useEffect(()=>{
},[])

fetch('https://662a68c267df268010a3d00f.mockapi.io/products').then(res=> res.json()).then(data =>{
    console.log(data)
})
  return (
    <div>
     

      <div>
        <CardProduct title={"Air Jordan 4 Retro Reimagined"} text={"The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases."} price={100} image={"https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/f206c8a8-0d74-48a0-95a1-6f677415bf75/women-s-air-jordan-4-vivid-sulphur-aq9129-101-release-date.jpg"}></CardProduct>
      </div>
  </div>
    
  );
}
