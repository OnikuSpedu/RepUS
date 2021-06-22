import React from 'react'
import { useForm } from "react-hook-form";

function Hero({ setQuery }) {
    return (
        <div className="px-4 md:px-8">
            <div>
                Find Your Elected Officials
            </div>
            
            <Searchbar setQuery={setQuery} />
        </div>
    )
}

export default Hero

function Searchbar({ setQuery }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = ({query}) => {
        setQuery(query)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="" {...register("query")} />

            <button type="submit">Submit</button>
        </form>
    )
}