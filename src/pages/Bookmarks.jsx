import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import BlogCard from "../components/BlogCard";

const Bookmarks = () => {

    const [blogs, setBlogs] =useState([])
    useEffect(()=>{
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    } ,[blogs])


    const handleDelete = id =>{
        deleteBlog(id)
        // const storedBlogs = getBlogs()
        // setBlogs(storedBlogs)
    }
    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {
            blogs.map((blog, index)=>(
                <BlogCard
                handleDelete ={handleDelete}
                deletable={true} 
                key={index}
                blog={blog}
                />
            ))
        }
    </div>
    );
};

export default Bookmarks;