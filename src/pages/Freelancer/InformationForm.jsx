import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import TextField from "../../components/TextField";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setInformation } from "../../state/freelancer.state";

const InformationForm = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.freelancer.token);
  const informationSchema = yup.object().shape({
    headline: yup.string().required("Headline is required"),
    skills: yup
      .array()
      .min(1, "Skills must have at least 1 item")
      .required("Skills are required"),
    scope: yup.string().required("Scope is required"),
    budget: yup.number().required("Budget is required"),
    profilePhoto: yup.mixed().required("Profile Photo is required"),
    whatsappNo: yup
      .string()
      .matches(/^\d{10}$/, "Mobile number must be a 10-digit number")
      .required("Whatsapp Number is required"),
  });
  const initialValues = {
    headline: "",
    skills: [],
    scope: "",
    budget: "",
    profilePhoto: null,
  };
  const handleFormSubmit = async (values, onSubmitProps) => {
    const formData = new FormData();
    formData.append("profilePhoto", values.profilePhoto);
    formData.append("budget", values.budget);
    formData.append("headline", values.headline);
    formData.append("scope", values.scope);
    formData.append("skills", values.skills);
    formData.append("whatsappNo", values.whatsappNo);
    try {
      const response = await axios.patch(
        "http://localhost:3000/freelancer/information",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      const information = response.data;
      dispatch(
        setInformation({
          information: information.data,
        })
      );
      onSubmitProps.resetForm();
    } catch (e) {}
  };
  return (
    <div className="border-2-white my-5 w-[90%] border-2 border-dashed bg-ablack px-8 py-10 sm:w-1/2 sm:px-20">
      <h1 className="text-center font-lable text-3xl text-awhite sm:text-4xl">
        Please fill information form
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={informationSchema}
        onSubmit={handleFormSubmit}
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
            <input
              type="file"
              name="profilePhoto"
              accept="image/png, image/gif, image/jpeg"
              id="profilePhoto"
              required
              className="text-white"
              multiple={false}
              onChange={(event) => {
                setFieldValue("profilePhoto", event.currentTarget.files[0]);
              }}
            />
            <TextField
              value={values.headline}
              label="Headline of your profile"
              onBlur={handleBlur}
              onChange={handleChange}
              name="headline"
              variant="outlined"
              fullWidth
              error={Boolean(touched.headline && errors.headline)}
              helperText={touched.headline && errors.headline}
            />

            <TextField
              value={values.scope}
              label="Scope of your project"
              onBlur={handleBlur}
              onChange={handleChange}
              name="scope"
              variant="outlined"
              fullWidth
              error={Boolean(touched.scope && errors.scope)}
              helperText={touched.scope && errors.scope}
            />

            <TextField
              value={values.budget}
              label="Budget of your project"
              onBlur={handleBlur}
              type="number"
              onChange={handleChange}
              name="budget"
              variant="outlined"
              fullWidth
              error={Boolean(touched.budget && errors.budget)}
              helperText={touched.budget && errors.budget}
            />

            <TextField
              value={values.whatsappNo}
              label="Your WhatsApp Number"
              onBlur={handleBlur}
              type="tel"
              onChange={handleChange}
              name="whatsappNo"
              variant="outlined"
              fullWidth
              error={Boolean(touched.whatsappNo && errors.whatsappNo)}
              helperText={touched.whatsappNo && errors.whatsappNo}
            />

            <FieldArray
              name="skills"
              render={(arrayHelpers) => (
                <div>
                  {values.skills.map((skills, index) => (
                    <div
                      key={index}
                      className={`${index == 0 ? "mt-0" : "mt-1"} flex gap-1`}
                    >
                      <TextField
                        required
                        name={`skills[${index}]`}
                        label={`skill no.${index + 1}`}
                        onChange={handleChange}
                      />
                      <button
                        disabled={values.skills?.length === 1}
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                        className="simple-button"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="simple-button "
                    onClick={() => arrayHelpers.push("")}
                  >
                    Add Skill
                  </button>
                </div>
              )}
            />

            <ErrorMessage
              name="skills"
              component="div"
              className="text-xs text-red-500"
            />
            <button
              className="custom-button hover:shadow-[0.25rem_0.25rem_0_#fff] active:translate-x-0 active:shadow-none"
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default InformationForm;
