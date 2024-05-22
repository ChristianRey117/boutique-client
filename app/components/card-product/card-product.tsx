"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Card from "react-bootstrap/Card";

export function CardProduct({ id, title, text, price, image, quantity }: any) {
  const router = useRouter();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {title}
          </p>
        </Card.Title>
        <Card.Text>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {text}
          </p>
        </Card.Text>
        <span className="bg-zinc-700 rounded-full text-[0.8rem] px-2 py-0 text-white">
          Available: {quantity}
        </span>

        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Price</span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            ${price}
          </span>
        </button>

        <button
          className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
          onClick={() => {
            router.push("/pages/product-details/get?id=" + id);
          }}
        >
          <span>Show </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            details
          </span>
        </button>
      </Card.Body>
    </Card>
  );
}
