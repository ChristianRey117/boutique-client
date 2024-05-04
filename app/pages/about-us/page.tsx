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

  const filterCategories = (category: string) => {};
  useEffect(() => {
    fetch("https://662a68c267df268010a3d00f.mockapi.io/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div>
      <div className="container m-5">
        <div className="row">
          <div className="col-12 mb-4">
            <h1>About us</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
