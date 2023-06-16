import { Formik } from "formik";
import TextField from "../../components/TextField";
import * as yup from "yup";
import { useSelector } from "react-redux";
import axios from "axios";
const ContentForm = () => {
  const token = useSelector((state) => state.freelancer.token);
  const user_id = useSelector((state) => state.freelancer.information.user_id);
  const whatsappNo = useSelector(
    (state) => state.freelancer.information.whatsappNo
  );
  const contentSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    content: yup.string().required("Content is required"),
    photo: yup.mixed(),
  });
  const initialValues = {
    title: "",
    content: "",
    photo: null,
  };
  const handleFormSubmit = async (values, onSubmitProps) => {
    console.log("sd");
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("user_id", user_id);
    formData.append("content", values.content);
    formData.append("image", values.photo);
    formData.append("whatsappNo", whatsappNo);
    try {
      const response = await axios.post(
        "http://localhost:3000/freelancer/content",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      const information = response.data;
      document.location.reload();
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
        validationSchema={contentSchema}
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
              label="Title of your content"
              onBlur={handleBlur}
              onChange={handleChange}
              name="title"
              variant="outlined"
              fullWidth
              error={Boolean(touched.title && errors.title)}
              helperText={touched.title && errors.title}
            />
            <TextField
              value={values.content}
              label="Your content"
              onBlur={handleBlur}
              onChange={handleChange}
              name="content"
              variant="outlined"
              fullWidth
              textarea
              error={Boolean(touched.content && errors.content)}
              helperText={touched.content && errors.content}
            />

            <div className="flex items-center justify-evenly">
              <div className="w-2/3">
                <label
                  htmlFor="content"
                  className="mb-2 block font-semibold text-white"
                >
                  Image
                </label>
                <input
                  type="file"
                  name="photo"
                  required
                  accept="image/png, image/gif, image/jpeg"
                  id="photo"
                  className="text-white"
                  multiple={false}
                  onChange={(event) => {
                    setFieldValue("photo", event.currentTarget.files[0]);
                  }}
                />
              </div>
              <div className="flex w-1/3 justify-end">
                <button type="submit" className="custom-button-white">
                  Post
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default ContentForm;
