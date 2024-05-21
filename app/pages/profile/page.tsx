"use client";
import React, { useEffect, useState } from "react";
import { CardProduct } from "../../components/card-product/card-product";
import { ImagesSlider } from "../../components/images-slider/images-slider";
import ProductsList from "../../sections/products-list/products-list";
import { InputText } from "primereact/inputtext";
import { Toast, Tooltip } from "react-bootstrap";
import { FileUpload } from "primereact/fileupload";

export default function ProductsPage() {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    fetch("http://localhost:3000/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const submitAction = (event: any) => {
    event.preventDefault();
    const name = event.target.name.value;
    const lastName = event.target.lastName.value;
    const password = event.target.password.value;
    const address = event.target.address.value;

    const dataUser = {
      name: name,
      lastName: lastName,
      password: password,
      address: address,
    };

    fetch("http://localhost:3000/users/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataUser),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
      });
  };
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
            <form onSubmit={submitAction}>
              <div>
                <div className="flex flex-column gap-2 mb-4">
                  <label htmlFor="username">Name</label>
                  <InputText
                    id="name"
                    aria-describedby="username-help"
                    defaultValue={user?.name}
                  />
                  <small id="username-help">Enter your name.</small>
                </div>

                <div className="flex flex-column gap-2 mb-4">
                  <label htmlFor="username">Last Name</label>
                  <InputText
                    id="lastName"
                    aria-describedby="username-help"
                    defaultValue={user?.lastName}
                  />
                  <small id="username-help">Enter your last name.</small>
                </div>

                <div className="flex flex-column gap-2 mb-4">
                  <label htmlFor="username">Password</label>
                  <InputText
                    id="password"
                    aria-describedby="username-help"
                    type="password"
                    defaultValue={user?.password}
                  />
                  <small id="username-help">Enter your new password.</small>
                </div>

                <div className="flex flex-column gap-2 mb-4 ">
                  <label htmlFor="username">Address</label>
                  <InputText
                    id="address"
                    aria-describedby="username-help"
                    type="text"
                    className="p-inputtext-lg"
                    defaultValue={user?.address}
                  />
                  <small id="username-help">Enter your new address.</small>
                </div>

                <div className="mb-5 col-12">
                  <FileUpload
                    name="image"
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

export interface IUser {
  id: number;
  name: string;
  lastName: string;
  password: string;
  address: string;
}
