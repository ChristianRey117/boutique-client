"use client";
import MessageDialog from "@/app/components/message-dialog/message-dialog";
import { useRouter } from "next/navigation";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export default function ProductsPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const _router = useRouter();

  const submitAction = (event: any) => {
    event.preventDefault();
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        const userFind = data.filter(
          (user: IUser) =>
            user.email == event.target.email.value &&
            user.password == event.target.password.value
        );
        if (userFind[0]?.id) {
          _router.push("/pages/profile");
        } else {
          setModalShow(true);
        }
      });
  };

  return (
    <div className="container m-5">
      <div
        className="row"
        style={{ margin: "15%", display: isLogin ? "" : "none" }}
      >
        <div
          className="col-12"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card style={{ width: "50%" }}>
            <Card.Body>
              <Card.Title className="mb-5" style={{ textAlign: "center" }}>
                Login
              </Card.Title>
              <Card.Text>
                <form onSubmit={submitAction} style={{ padding: "10px" }}>
                  <div className="flex flex-column gap-2 mb-4 ">
                    <label htmlFor="username">Email</label>
                    <InputText
                      id="email"
                      aria-describedby="username-help"
                      type="email"
                      className="p-inputtext-lg"
                      required
                    />
                    <small id="username-help">Enter your email.</small>
                  </div>

                  <div className="flex flex-column gap-2 mb-4 ">
                    <label htmlFor="username">Password</label>
                    <InputText
                      id="password"
                      aria-describedby="username-help"
                      type="password"
                      className="p-inputtext-lg"
                      required
                    />
                    <small id="username-help">Enter your password.</small>
                  </div>

                  <div className="flex flex-column gap-2 mb-4 ">
                    <button className="btn btn-success" type="submit">
                      Login
                    </button>
                  </div>
                </form>

                <div
                  className="flex flex-column gap-2 mb-4 "
                  style={{ marginTop: "5%" }}
                >
                  <button
                    className="btn btn-success"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    Create account
                  </button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div
        className="row"
        style={{ margin: "15%", display: isLogin ? "none" : "" }}
      >
        <div
          className="col-12"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card style={{ width: "50%" }}>
            <Card.Body>
              <Card.Title className="mb-5" style={{ textAlign: "center" }}>
                Create account
              </Card.Title>
              <Card.Text>
                <form action="" style={{ padding: "10px" }}>
                  <div className="flex flex-column gap-2 mb-4 ">
                    <label htmlFor="username">Name</label>
                    <InputText
                      id="name"
                      aria-describedby="username-help"
                      type="name"
                      className="p-inputtext-lg"
                      required
                    />
                    <small id="username-help">Enter your name.</small>
                  </div>

                  <div className="flex flex-column gap-2 mb-4 ">
                    <label htmlFor="username">Last Name</label>
                    <InputText
                      id="lastName"
                      aria-describedby="username-help"
                      type="lastName"
                      className="p-inputtext-lg"
                      required
                    />
                    <small id="username-help">Enter your last name.</small>
                  </div>

                  <div className="flex flex-column gap-2 mb-4 ">
                    <label htmlFor="username">Email</label>
                    <InputText
                      id="email"
                      aria-describedby="username-help"
                      type="email"
                      className="p-inputtext-lg"
                      required
                    />
                    <small id="username-help">Enter your email.</small>
                  </div>

                  <div className="flex flex-column gap-2 mb-4 ">
                    <label htmlFor="username">Password</label>
                    <InputText
                      id="password"
                      aria-describedby="username-help"
                      type="password"
                      className="p-inputtext-lg"
                      required
                    />
                    <small id="username-help">Enter your password.</small>
                  </div>

                  <div className="flex flex-column gap-2 mb-4 ">
                    <button className="btn btn-success" type="submit">
                      Crerate Account
                    </button>
                  </div>
                </form>

                <div
                  className="flex flex-column gap-2 mb-4 "
                  style={{ marginTop: "5%" }}
                >
                  <button
                    className="btn btn-success"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    Login
                  </button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <MessageDialog
        show={modalShow}
        title="Error Login"
        subtitle="Incorrect username or password"
        text="You should write the right password and username!"
        onHide={() => setModalShow(false)}
      ></MessageDialog>
    </div>
  );
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  lastName: string;
  password: string;
  address: string;
}
