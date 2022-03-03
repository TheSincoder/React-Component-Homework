import React from 'react';
import * as Yup from "yup";
import { useFormik} from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';



const FormSchema = Yup.object(
    {
        book: Yup.string().required()
        
    }
);

const initialValues ={
    book: ""
    
};

const handleSubmit=(values)=>{
    console.log(values)
}


export default function BookForm() {
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema:FormSchema,
        onSubmit:(values)=>{handleSubmit(values)}
    })
    
  return (
          <Box sx={{width: '200%'}}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
            fullWidth
            id="book"
            name="book"
            sx={{gridColumn: 1, mb:2, mt:2, }}
            label="Search Book"
            placeholder="Search Book"
            value={formik.values.book}
            onChange={formik.handleChange}
            error={formik.touched.book && Boolean(formik.errors.book)}
            helperText={formik.touched.book && formik.errors.book} 
            InputProps={{endAdornment: (
                <InputAdornment position="end">
            <Button type="submit" color= 'secondary' sx={{width: '100%'}}>Get Book</Button>
            </InputAdornment>
            ),}}/>
        
        {/* <Button sx={{gridColumn: 2}} type="submit" >Get Book</Button> */}
    </form>
    </Box>
  )
};