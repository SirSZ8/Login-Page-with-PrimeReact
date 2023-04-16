/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const LoginPage = () => {
  const [user, setUser] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <div className="h-screen flex justify-content-center align-items-center">
        <Card title="Login">
          <div className="grid">
            <div className="field col-12 md:col-12 p-inputgroup">
              <label className="col-12 mb-2 md:col-2 md:mb-0">Email</label>
              <InputText
                name="email"
                isInvalid={!user.email}
                isValid={user.email}
                onChange={handleInput}
                value={user.email || ""}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="field col-12 md:col-12 p-inputgroup">
              <label className="col-12 mb-2 md:col-2 md:mb-0">Password</label>
              <InputText
                name="password"
                isInvalid={!user.password}
                isValid={user.password}
                onChange={handleInput}
                value={user.password || ""}
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="card flex justify-content-center">
            <Button label="Submit" />
          </div>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
