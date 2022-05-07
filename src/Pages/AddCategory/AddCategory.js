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
        <div className='addCategory-style my-5'>
            <h2>Different Category Books Added</h2>
            <form className='box-model d-flex flex-column w-25 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='email' {...register("email")} />
                <input className='mb-2' placeholder='quantity' {...register("quantity")} />
                <input className='mb-2' placeholder=' supplier' {...register("supplier")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='photo url' type="text" {...register("img")} />
                <textarea className='mb-2' placeholder=' description'{...register("description")} />
                <div className='submit-style'>
                    <input type="submit" value="Add Category" />
                </div>
            </form>

        </div>
    );
};

export default AddCategory;