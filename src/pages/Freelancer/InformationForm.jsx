import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import TextField from "../../components/TextField";
const informationSchema = yup.object().shape({
  headline: yup.string().required("Headline is required"),
  skills: yup
    .array()
    .min(1, "Skills must have at least 1 item")
    .required("Skills are required"),
  scope: yup.string().required("Scope is required"),
  budget: yup.number().required("Budget is required"),
});
const initialValues = {
  headline: "",
  skills: [],
  scope: "",
  budget: 0,
};
const handleFormSubmit = (values) => {
  // Handle the form submission, e.g., make an API request to update the FreelancerInformation
  console.table(values);
};
const InformationForm = () => {
  return (
    <div className="border-2-white my-5 w-[90%] border-2 border-dashed bg-black px-8 py-10 sm:w-1/2 sm:px-20">
      <h1 className="text-center font-lable text-3xl text-white sm:text-4xl">
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
          resetForm,
        }) => (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
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
                    className="simple-button mt-4"
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
