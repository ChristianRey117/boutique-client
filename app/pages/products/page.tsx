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
            <h1>Our Products</h1>
          </div>

          <div className="col-12 mb-4">
            <h3>You can use filters</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <FloatLabel>
              <Dropdown
                inputId="dd-city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={categories}
                optionLabel="name"
                className="w-full"
              />
              <label
                htmlFor="dd-city"
                style={{ color: "white", fontSize: "1rem" }}
              >
                Category
              </label>
            </FloatLabel>
          </div>
          <div className="col-6">
            <div className="p-inputgroup flex-1">
              <span className="p-inputgroup-addon">
                <i className="bi bi-tag"></i>
              </span>
              <InputText
                placeholder="Username"
                style={{ color: "white" }}
                onChange={(e: any) => {
                  filterCategories(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProductsList></ProductsList>
      </div>
    </div>
  );
}
