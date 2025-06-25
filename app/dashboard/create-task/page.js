"use client"
import { db } from "@/config/firbase.config";
import { Button, Card, CardContent, CardHeader, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import * as yup from "yup";


const schema = yup.object().shape({
    title : yup.string().required("Tittle is required").min(5),
    description: yup.string().required("Description is required").min(10)
})

export default function CreateTask({userId}){
    const {data : session }=useSession();
        console.log(session)
        const userIdentifier2 = userId || (session?.user?.id)

    const {handleSubmit, handleChange, touched, values, errors } = useFormik({
        initialValues: {
            title: "",
            description: "",
        },
        onSubmit: async()=>{
            await addDoc(collection(db, "tasks"),{
                user : userIdentifier2,
                title: values.title,
                description: values.description,
                timecreated : new Date().getTime(),
            }).then(()=>{
                alert("Task added")
              })
              .catch(e=>{
                console.error(e);
                alert("You encountered an unknown error")
              });
        },
        validationSchema: schema,

    })
    return(
       <div className="min-h-screen"> 
         <Card sx={{maxWidth:600, margin:"auto", mt:5, p:3}}>
            <CardHeader title="Add Task"/>
            <CardContent>
                <form onSubmit={handleSubmit} 
                className="flex flex-col gap-4">
                    <div>
                    <TextField
                    fullWidth
                    label="Title"
                    type="text"
                    id="title"
                    placeholder="Enter Task Title"
                    onChange={handleChange}
                    value={values.title}/>
                    {touched.title && errors.title ? <span className="text-red-600 text-sm">{errors.title}</span>:null}
                    </div>
                    <div>
                    <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Description"
                    type="text"
                    id="description"
                    placeholder="Enter Description"
                    onChange={handleChange}
                    value={values.description}/>
                     {touched.description && errors.description ? <span className="text-red-600 text-sm">{errors.description}</span>:null}
                    </div>
                    <Button type="submit" variant="contained" color="primary">Submit Task</Button>
                </form>
            </CardContent>
        </Card>
       </div>
    )
}