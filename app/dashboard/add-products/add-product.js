"use client"
import {Alert, Button, Card,CardContent,CardHeader,TextField,} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { db } from "@/config/firbase.config";




const schema = yup.object().shape({
    productname: yup.string().required("Tittle is required").min(5),
    description: yup.string().required("Description is required").min(10),
    price: yup.string().required("Price is required").min(4)
})

export default function AddProduct({userId}) {
    const {data : session }=useSession();
    console.log(session)
    const userIdentifier = userId || (session?.user?.id)

     const {handleSubmit, handleChange, touched, values, errors } = useFormik({
            initialValues: {
                productname: "",
                description: "",
                price:"",
            },
            onSubmit: async ()=>{
              await addDoc(collection(db, "products"), {
                user : userIdentifier,
                productname : values.productname,
                description : values.description,
                price : values.price,
                timecreated : new Date().getTime(),
              }).then(()=>{
                alert("product added")
              })
              .catch(e=>{
                console.error(e);
                alert("You encountered an unknown error")
              });
            },
            validationSchema: schema,
     })
  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mt: 5, p: 2 }} className="min-h-screen">
      <CardHeader title="Add products" />
      <CardContent>
        <form  onSubmit={handleSubmit} 
        className="flex flex-col gap-4">
          <div>
            <TextField
              fullWidth
              type="text"
              label="Product name"
              id="productname"
              placeholder="Enter product name"
              onChange={handleChange}
              value={values.product}
            />
             {touched.product && errors.product ? <span className="text-red-600 text-sm">{errors.product}</span>:null}
          </div>
          <div>
            <TextField
              fullWidth
              multiline
              rows={3}
              type="text"
              label="Description"
              id="description"
              placeholder="Enter product description"
              onChange={handleChange}
              value={values.description}
            />
            {touched.description && errors.description ? <span className="text-red-600">{errors.description}</span>:null}
          </div>
          <div>
            <TextField
              fullWidth
              type="number"
              label="price"
              id="price"
              placeholder="Enter price"
              onChange={handleChange}
              value={values.price}
            />
             {touched.price && errors.price? <span className="text-red-600">{errors.price}</span>:null}
          </div>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Product
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
