import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../state/client.state.js";
import * as yup from "yup";
import { Formik } from "formik";
import TextField from "../../components/TextField.jsx";
import axios from "axios";
import { useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage.jsx";
import { setLogout } from "../../state/freelancer.state.js";

const registerSchema = yup.object().shape({
  firstname: yup.string().required("required"),
  lastname: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
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
  const [responseMessage, SetResponseMessage] = useState("");

  useEffect(() => {
    if (responseMessage != null) {
      setTimeout(() => {
        SetResponseMessage(null);
      }, 4000);
    }
  }, [responseMessage]);

  const register = async (values, onSubmitProps) => {
    const body = {
      firstName: values.firstname,
      lastName: values.lastname,
      email: values.email,
      password: values.password,
      state: values.state,
    };
    axios
      .post("http://localhost:3000/client/register", body)
      .then((response) => {
        const savedUser = response.data;
        onSubmitProps.resetForm();
        if (savedUser) {
          setPageType("login");
        }
      })
      .catch((error) => {
        SetResponseMessage(error.response.data.message);
        throw new Error(error.response.data.message);
      });
  };

  const login = async (values, onSubmitProps) => {
    const body = {
      email: values.email,
      client_password: values.password,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/client/login",
        body
      );
      const loggedIn = response.data;

      onSubmitProps.resetForm();
      if (loggedIn) {
        dispatch(
          setLogin({
            data: loggedIn.userdata,
            token: loggedIn.accessToken,
          })
        );
        dispatch(setLogout());
        navigate("/client");
      }
    } catch (error) {
      SetResponseMessage(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };
  return (
    <div className="border-2-white my-5 w-[90%] border-2 border-dashed bg-black px-8 py-10 sm:w-1/2 sm:px-20">
      {responseMessage && <ErrorMessage message={responseMessage} />}
      <h1 className="text-center font-lable text-3xl text-white sm:text-4xl">
        {isLogin ? "LOGIN TO AS CLIENT" : "REGISTER AS CLIENT"}
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
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
            {isRegister && (
              <>
                <TextField
                  value={values.firstname}
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="firstname"
                  variant="outlined"
                  fullWidth
                  error={Boolean(touched.firstname && errors.firstname)}
                  helperText={touched.firstname && errors.firstname}
                />
                <TextField
                  value={values.lastname}
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="lastname"
                  variant="outlined"
                  fullWidth
                  error={Boolean(touched.lastname && errors.lastname)}
                  helperText={touched.lastname && errors.lastname}
                />
                <TextField
                  value={values.state}
                  label="State"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="state"
                  variant="outlined"
                  fullWidth
                  error={Boolean(touched.state && errors.state)}
                  helperText={touched.state && errors.state}
                />
              </>
            )}
            <TextField
              value={values.email}
              name="email"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              value={values.password}
              autoComplete="on"
              name="password"
              label="Password"
              onBlur={handleBlur}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              type="password"
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />
            <button className="custom-button-white" type="submit">
              {isLogin ? "Submit" : "Register"}
            </button>
            <p
              className="select-none font-lable text-white hover:cursor-pointer"
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
