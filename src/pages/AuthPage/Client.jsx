import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import state, { setLogin } from "../../state";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";

const registerSchema = yup.object().shape({
  firstname: yup.string().required("required"),
  lastname: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  repPassword: yup.string().required("required"),
  state: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  state: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const Client = () => {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const register = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let val in values) {
      formData.append(val, values[val]);
    }

    const savedUserResponse = await fetch(
      "http://localhost:3000/freelancer/register",
      {
        method: "POST",
        body: formData,
      }
    );

    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      setPageType("login");
    }
  };

  const login = async (values, onSubmitProps) => {
    const body = {
      email: values.email,
      client_password: values.password,
    };
    const loggedResponse = await fetch(
      "http://localhost:3000/freelancer/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const loggedIn = await loggedResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      console.log(loggedIn.userdata);
      dispatch(
        setLogin({
          user: loggedIn.userdata,
          token: loggedIn.accessToken,
        })
      );
      navigate("/home");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };
  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-[90%] sm:w-1/3">
      <button onClick={() => scrollToDiv("freelancer")}>Go to Div 1</button>
      <h1 className="text-center text-4xl font-display">
        {isLogin ? "LOGIN TO LEVEL UP" : "REGISTER TO LEVEL UP"}
      </h1>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? loginSchema : registerSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10">
            {isRegister && <></>}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                id="email1"
                placeholder="name@levelup.com"
                autoComplete="on"
              />
              <ErrorMessage
                name="email"
                component="label"
                className="text-red-500 mr-3 text-xs"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                id="password1"
                type="password"
                autoComplete="on"
              />
            </div>
            <Button type="submit"> {isLogin ? "Submit" : "Register"}</Button>
            <p
              className="font-lable select-none hover:cursor-pointer"
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
                resetForm();
              }}
            >
              {isLogin
                ? "Don't have an account? Sign Up here."
                : "Already have an account? Login here."}
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Client;
