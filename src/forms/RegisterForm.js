import React from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from "../components/Button";
import { useState } from 'react';
import TextField from '@mui/material/TextField';




const FormSchema = Yup.object({
    "firstName":Yup.string().required("Required"),
    "lastName":Yup.string().required("Required"),
    "email": Yup.string().email("Must be a valid e-mail format").required(),
    "password": Yup.string().required("Required")
})


export default function RegisterForm( {user={firstName:'Hel', lastName:"Lo", email:'hello@email.com', password:'a'}} ) {

    const initialValues={
        firstName:user?.firstName ?? '',
        lastName:user?.lastName ?? '',
        email:user?.email ?? '',
        password:user?.password ?? ''        
    }

    const handleSubmit =(values,resetForm)=>{
        console.log(values)
        if(!user){
            console.log("Create")
        }else{
            console.log("Edit")
        }
        resetForm(initialValues);
    }

    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize:true

    })

  return (
    <form onSubmit={formik.handleSubmit}>
    <TextField
        fullWidth
        id="firstName"
        name="firstName"
        type="text"
        sx={{ mb: 2, mt: 2 }}
        label="First Name"
        placeholder="Seymour"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
    />
    <TextField
        fullWidth
        id="lastName"
        name="lastName"
        sx={{mb: 2 }}
        type="text"
        label="Last Name"
        placeholder="Nakamoto"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
    />
    <TextField
            fullWidth
            id="email"
            name="email"
            sx={{mb:2, mt:2}}
            label="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}        
        />
    <TextField
            fullWidth
            id="password"
            name="password"
            type="password"
            sx={{mb:2}}
            label="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}        
        />



<Button type="submit" sx={{ width: "100%" }}>Submit</Button>

</form>
  )
}