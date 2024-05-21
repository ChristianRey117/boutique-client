"use client";
import React, { useEffect, useState } from "react";
import { CardProduct } from "../../components/card-product/card-product";
import { ImagesSlider } from "../../components/images-slider/images-slider";
import ProductsList from "../../sections/products-list/products-list";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";
import { ICollections } from "@/app/components/collection/colletion";
export default function ProductsPage() {
  const [selectedCity, setSelectedCity] = useState();
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedName, setSelectedName] = useState<string>();

  const filterCategories = (category: any) => {
    setSelectedCategory(category.name);
  };

  const filterName = (name: string) => {
    console.log("name before", name);
    setSelectedName(name);
  };
  useEffect(() => {
    fetch("http://localhost:3000/collections")
      .then((res) => res.json())
      .then((data) => {
        setCategories(
          data.map((collection: any) => {
            return {
              id: collection.id,
              name: collection.nameColletion,
            };
          })
        );
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
                onChange={(e) => filterCategories(e.value)}
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
                  filterName(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProductsList
          collection={selectedCategory}
          nameProductFilter={selectedName}
        ></ProductsList>
      </div>
    </div>
  );
}
