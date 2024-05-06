"use client";
import React, { useEffect, useState } from "react";
import { CardProduct } from "../../components/card-product/card-product";
import { ImagesSlider } from "../../components/images-slider/images-slider";
import ProductsList from "../../sections/products-list/products-list";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";
export default function ProductsPage() {
  const [selectedCity, setSelectedCity] = useState();
  const [categories, setCategories] = useState();

  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-12 mb-4">
          <h1>About us</h1>
        </div>
      </div>

      <div className="row m-5">
        <div className="col-6">
          <img src="/images/beneficios-trabajo-en-equipo.jpg" alt="" />
        </div>

        <div className="col-6 ">
          <div className="row">
            <div className="col-12 mb-3">
              <h2>Notre mision</h2>
            </div>

            <div className="col-12 mb-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, eos. Dicta velit quod natus, quaerat modi, quas
                pariatur saepe tenetur qui ducimus laboriosam. Corporis facilis
                eius sequi, deleniti rerum veritatis.
              </p>
            </div>

            <div className="col-12 mb-3">
              <h2>Organigrama</h2>
            </div>

            <div className="col-12">
              <img src="/images/organigrama.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2>Notre products</h2>
        </div>

        <div className="col-12">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, dignissimos possimus! Doloribus sit quam, fugit, cum
            accusantium quidem fugiat id tenetur, nemo necessitatibus
            repellendus a corporis dolorem repudiandae. Ullam, accusantium.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            beatae excepturi asperiores quaerat dolorem corporis blanditiis.
            Eligendi cum aperiam animi quasi sed asperiores velit tenetur totam
            porro blanditiis. Tempora, dolor.
          </p>
        </div>
      </div>
    </div>
  );
}
