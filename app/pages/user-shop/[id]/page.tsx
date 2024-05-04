"use client";
import React, { useEffect, useState } from "react";

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
            <h1>Your shop</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
