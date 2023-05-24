import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import state, { setLogin } from "../../state";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import TextField from "../../components/TextField";
import useSWR from "swr";
import axios from "axios";
import { useEffect } from "react";
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

const Freelancer = () => {
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
      .post("http://localhost:3000/freelancer/register", body)
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
        "http://localhost:3000/freelancer/login",
        body
      );
      const loggedIn = response.data;

      onSubmitProps.resetForm();
      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.userdata,
            token: loggedIn.accessToken,
          })
        );
        navigate("/home");
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
    <div className="w-[90%] sm:w-1/3">
      {responseMessage && (
        <div
          class="absolute w-full grid place-items-center top-0 left-0 p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 slide-up"
          role="alert"
        >
          <span class="font-medium">{responseMessage}</span>
        </div>
      )}
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
            <Button className="py-2" type="submit">
              {isLogin ? "Submit" : "Register"}
            </Button>
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

export default Freelancer;
