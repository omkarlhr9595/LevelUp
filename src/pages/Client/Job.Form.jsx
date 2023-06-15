import { Formik, FieldArray } from "formik";
import TextField from "../../components/TextField";
import * as yup from "yup";
import { useSelector } from "react-redux";
import axios from "axios";
const JobForm = () => {
  const token = useSelector((state) => state.client.token);
  const user_id = useSelector((state) => state.client.data._id);
  const jobSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    start_date: yup.date().required("Start Date is required"),
    skills: yup
      .array()
      .min(1, "Skills must have at least 1 item")
      .required("Skills are required"),
    budget: yup.number().required("Budget is required"),
  });
  const initialValues = {
    title: "",
    content: "",
    description: "",
    start_date: "",
    skills: [],
    budget: "",
  };
  const handleFormSubmit = async (values, onSubmitProps) => {
    const body = {
      user_id: user_id,
      title: values.title,
      description: values.description,
      start_date: values.start_date,
      skills: values.skills,
      budget: values.budget,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/client/job",
        body,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      const information = response.data;
      console.log(information);
      onSubmitProps.resetForm();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="w-full  border-2 border-dashed  bg-black  p-5 shadow">
      <h2 className="mb-4 font-lable text-lg font-semibold text-white ">
        Post Content
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={jobSchema}
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <TextField
              value={values.title}
              label="Title of your job"
              onBlur={handleBlur}
              onChange={handleChange}
              name="title"
              variant="outlined"
              fullWidth
              error={Boolean(touched.title && errors.title)}
              helperText={touched.title && errors.title}
            />
            <TextField
              value={values.description}
              label="Description of your job"
              onBlur={handleBlur}
              onChange={handleChange}
              name="description"
              variant="outlined"
              fullWidth
              error={Boolean(touched.description && errors.description)}
              helperText={touched.description && errors.description}
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
              value={values.start_date}
              label="Budget of your project"
              onBlur={handleBlur}
              type="date"
              onChange={handleChange}
              name="start_date"
              variant="outlined"
              fullWidth
              error={Boolean(touched.start_date && errors.start_date)}
              helperText={touched.start_date && errors.start_date}
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
            <button type="submit" className="custom-button-white w-32">
              Post
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default JobForm;
