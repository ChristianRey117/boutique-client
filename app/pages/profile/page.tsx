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
    <div>
      <div className="container m-5">
        <div className="row">
          <div className="col-12 mb-4">
            <h1>Hello! Name User</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="flex flex-column gap-2">
              <label htmlFor="username">Username</label>
              <InputText id="username" aria-describedby="username-help" />
              <small id="username-help">
                Enter your username to reset your password.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
