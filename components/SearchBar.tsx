import React from 'react'
import { useForm } from "react-hook-form";
import { SearchIcon } from "@heroicons/react/outline";

interface SearchBarProps {
    setQuery: (any) => any;
}

function SearchBar({ setQuery } : SearchBarProps) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = ({ query }) => {
        setQuery(query)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row max-w-3xl shadow-2xl rounded-xl focus-within:ring-blue-500 focus-within:ring-2">
            <input defaultValue="" {...register("query")} className="flex-auto p-2 px-4 focus:outline-none rounded-l-xl" placeholder="Your address..."/>

            <button type="submit" className="p-3 text-white bg-blue-600 focus:outline-none rounded-r-xl focus:ring-2 focus:ring-black hover:bg-blue-700">
                <SearchIcon className="w-5 h-5 m-auto" />
            </button>
        </form>
    )
}

export default SearchBar
