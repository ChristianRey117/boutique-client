"use client";
import React, { useEffect, useState } from "react";
import { CardProduct } from "../../components/card-product/card-product";
import { ImagesSlider } from "../../components/images-slider/images-slider";
import ProductsList from "../../sections/products-list/products-list";
import { InputText } from "primereact/inputtext";
import { Toast, Tooltip } from "react-bootstrap";
import { FileUpload } from "primereact/fileupload";

export default function ProductsPage() {
  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-12 mb-4">
          <h1>Hello! Name User</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="col-12 mb-5">
            <h3>You can update your information</h3>
          </div>
          <div className="col-12">
            <form action="">
              <div>
                <div className="flex flex-column gap-2 mb-4">
                  <label htmlFor="username">Name</label>
                  <InputText id="username" aria-describedby="username-help" />
                  <small id="username-help">Enter your name.</small>
                </div>

                <div className="flex flex-column gap-2 mb-4">
                  <label htmlFor="username">Last Name</label>
                  <InputText id="username" aria-describedby="username-help" />
                  <small id="username-help">Enter your last name.</small>
                </div>

                <div className="flex flex-column gap-2 mb-4">
                  <label htmlFor="username">Password</label>
                  <InputText
                    id="username"
                    aria-describedby="username-help"
                    type="password"
                  />
                  <small id="username-help">Enter your new password.</small>
                </div>

                <div className="flex flex-column gap-2 mb-4 ">
                  <label htmlFor="username">Address</label>
                  <InputText
                    id="username"
                    aria-describedby="username-help"
                    type="password"
                    className="p-inputtext-lg"
                  />
                  <small id="username-help">Enter your new address.</small>
                </div>

                <div className="mb-5 col-12">
                  <FileUpload
                    name="demo[]"
                    url="/api/upload"
                    multiple
                    accept="image/*"
                    maxFileSize={1000000}
                  />
                </div>

                <div>
                  <button className="btn btn-success">Update Info</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
