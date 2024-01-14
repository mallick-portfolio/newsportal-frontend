"use client";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .nullable()
      .email("Must be a valid email")
      .required("Email must required"),
    password: yup.string().required("Password must required"),
  });
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const { errors, values, handleChange, touched, handleSubmit } = formik;
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex justify-center h-auto mt-10 ">
        <Card className="py-4 w-[400px]">
          <CardHeader className="pb-0 pt-2 px-4 justify-center ">
            <h4 className="font-bold text-2xl text-center">Login</h4>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardBody className="overflow-visible flex gap-y-4 flex-col py-6">
              <Input
                onChange={handleChange}
                type="email"
                color={errors.email && touched.email ? "danger" : "default"}
                isInvalid={errors.email && touched.email}
                label="Email"
                name="email"
                value={values.email}
                variant="bordered"
                className="max-w-lg"
                errorMessage={`${
                  errors.email && touched.email ? errors.email : ""
                }`}
              />

              <Input
                value={values.password}
                variant="bordered"
                name="password"
                onChange={handleChange}
                isInvalid={errors.password && touched.password}
                type="password"
                color={
                  errors.password && touched.password ? "danger" : "default"
                }
                label="Password"
                className="max-w-lg"
                errorMessage={`${
                  errors.password && touched.password ? errors.password : ""
                }`}
              />

              <Button type="submit" color="primary">
                Submit
              </Button>
            </CardBody>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
