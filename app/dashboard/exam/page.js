"use client";
import * as yup from "yup";
import { useFormik } from "formik";

const schema = yup.object().shape({
  Firstname: yup.string().required("Firstname is required").min(3),
  Surname: yup.string().required("Surname is required").min(3),
  Email: yup.string().required("Email is required").min(5),
  PhoneNo: yup.string().required("PhoneNo is required").min(11),
});
export default function Form() {
  const { handleSubmit, handleChange, touched, values, errors } = useFormik({
    initialValues: {
      Firstname: "",
      Surname: "",
      Email: "",
      PhoneNo: "",
    },
    onSubmit: () => {
      alert(" Form submitted");
    },
    validationSchema: schema,
  });
  return (
    <main className="min-h-screen">
      <div className="w-auto p-2 mt-5 flex justify-center items-center bg-gray-200">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1 className="text-4xl">EXAM FORM</h1>
          <div className="flex flex-col">
            <label className="text-2xl flex justify-center">First Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="border rounded-md py-1 px-6"
              id="Firstname"
              onChange={handleChange}
              value={values.Firstname}
            />
            {touched.Firstname && errors.Firstname ? (
              <span className="text-red-600 text-sm">{errors.Firstname}</span>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label className="text-2xl flex justify-center">Surname</label>
            <input
              type="text"
              placeholder="Enter your Surname"
              className="border rounded-md py-1 px-6"
              id="Surname"
              onChange={handleChange}
              value={values.Surname}
            />
            {touched.Surname && errors.Surname ? (
              <span className="text-red-600 text-sm">{errors.Surname}</span>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label className="text-2xl flex justify-center">Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              className="border rounded-md py-1 px-6"
              id="Email"
              onChange={handleChange}
              value={values.Email}
            />
            {touched.Email && errors.Email ? (
              <span className="text-red-600 text-sm">{errors.Email}</span>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label className="text-2xl flex justify-center">Phone No</label>
            <input
              type="number"
              placeholder="Enter your number"
              className="border rounded-md py-1 px-6"
              id="PhoneNo"
              onChange={handleChange}
              value={values.PhoneNo}
            />
            {touched.PhoneNo && errors.PhoneNo ? (
              <span className="text-red-600 text-sm">{errors.PhoneNo}</span>
            ) : null}
          </div>

          <input
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 rounded-2xl py-2 px-2"
          />
        </form>
      </div>
    </main>
  );
}
