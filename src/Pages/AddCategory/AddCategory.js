import React from 'react';
import './AddCategory.css'
import { useForm } from "react-hook-form";

const AddCategory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/category`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Different Category Books Added</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='email' {...register("email")} />
                <input className='mb-2' placeholder='quantity' {...register("quantity")} />
                <input className='mb-2' placeholder=' supplier' {...register("supplier")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='photo url' type="text" {...register("img")} />
                <textarea className='mb-2' placeholder=' description'{...register("description")} />
                <input type="submit" value="Add Category" />
            </form>

        </div>
    );
};

export default AddCategory;