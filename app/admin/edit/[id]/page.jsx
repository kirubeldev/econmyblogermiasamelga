'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import { MdOutlineArrowOutward } from "react-icons/md";
import Navs from '@/app/componets/nav';

const EditBlog = ({ params, accessToken }) => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState(''); // State for article title
  const [category, setCategory] = useState(''); // State for category
  const [status, setStatus] = useState(''); // State for status
  const [coverImage, setCoverImage] = useState(null); // State for cover image URL
  const [articleFile, setArticleFile] = useState(null); // State for article file
  const [loading, setLoading] = useState(false); // State for loading

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3002/api/blog/${params.id}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setTitle(data.title); // Set title from fetched data
        setDescription(data.description); // Set description from fetched data
        setCategory(data.category); // Set category from fetched data
        setStatus(data.status); // Set status from fetched data
        setCoverImage(data.coverImage); // Set cover image URL from fetched data
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [params]);

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(URL.createObjectURL(file)); // Create a temporary URL for the uploaded image
  };

  const handleArticleFileChange = (e) => {
    setArticleFile(e.target.files[0]);
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("status", status);
  
    // Append the actual file object, not just the URL
    if (coverImage) {
      const fileInput = document.getElementById('coverImage');
      formData.append("coverImage", fileInput.files[0]); // Ensure actual file is sent
    }
  
    // Append article file if present
    if (articleFile) {
      const articleInput = document.getElementById('articleFile');
      formData.append("articleFile", articleInput.files[0]);
    }
  
    try {
      const res = await fetch(`http://localhost:3002/api/blog/${params.id}`, {
        method: "PUT",
        headers: {
          'Authorization': `Bearer ${accessToken}`, // Use backticks for string interpolation
          // No need to set 'Content-Type', it will be set automatically for FormData
        },
        body: formData,
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Failed to update the blog post: ${errorData.message || 'Unknown error'}`);
      }
  
      const data = await res.json(); // Get the response data
      console.log("Post updated successfully:", data);
      // You can add logic here to redirect or show a success message
    } catch (error) {
      console.error("Error updating the post:", error.message); // Log specific error message
    } finally {
      setLoading(false); // Stop loading
    }
  };
  

  return (
    <div>
      <div className='bg-[#A70E28] top-0 md:fixed w-full z-10'>
        <Navs />
      </div>
      <div className='mx-auto w-full flex items-center justify-center'>
        <div className='max-w-6xl flex items-center justify-center flex-col mx-auto px-5 lg:px-0'>
          <div className='mt-[130px] flex items-center px-5'>
            <p>Blogs</p>
            <MdKeyboardArrowRight />
            <p>Edit Blog</p>
          </div>
          <div>
            <p className='mt-7 text-[40px]'>Update Article</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='flex flex-col lg:flex-row w-full mx-auto md:px-0 lg:gap-[40px] items-start'>
              <div className='w-full'>
                <div className='flex w-full flex-col my-4'>
                  <label htmlFor="articleTitle">Article Title</label>
                  <input 
                    type="text" 
                    id="articleTitle" 
                    className='border outline-none px-3 py-1 rounded-md w-full md:w-[545px]' 
                    placeholder='Title' 
                    value={title} // Set the value of the input
                    onChange={(e) => setTitle(e.target.value)} // Handle change
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="category" className="font-medium">Category</label>
                  <select 
                    id="category" 
                    name="category"
                    value={category} // Set the value of the select
                    onChange={(e) => setCategory(e.target.value)} // Handle change
                    className="border outline-none px-3 py-1 rounded-md w-full md:w-[545px]"
                  >
                    <option value="Business & Innovation">Business & Innovation</option>
                    <option value="Economy">Economy</option>
                    <option value="Entrepreneur">Entrepreneur</option>
                    <option value="Health">Health</option>
                  </select>
                </div>
              </div>

              <div className='flex flex-col mt-3 w-full'>
                <div className='flex flex-col mb-4'>
                  <label htmlFor="coverImage">Upload Cover Image</label>
                  <input 
                    type="file" 
                    accept='image/*'
                    id="coverImage" 
                    className='border outline-none px-3 py-1 rounded-md w-full md:w-[545px] bg-transparent' 
                    onChange={handleCoverImageChange} // Handle file change
                  />
                  {coverImage && (
                    <div className='mb-4'>
                      <label>Cover Image Preview</label>
                      <img 
                        src={coverImage} 
                        alt="Cover Preview" 
                        className='w-full h-[200px] object-cover border rounded-md mb-4' 
                      />
                    </div>
                  )}
                </div>
                <div className='flex flex-col mb-4'>
                  <label htmlFor="articleFile">Upload Article File</label>
                  <input 
                    type="file" 
                    accept='.pdf' 
                    id="articleFile" 
                    className='border outline-none px-3 py-1 rounded-md w-full md:w-[545px] bg-transparent transition duration-200 ease-in-out hover:border-[#A70E28] focus:border-[#A70E28]' 
                    // onChange={handleArticleFileChange} // Handle file change
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-col mb-4 lg:pr-5 w-fit'>
              <label htmlFor="status">Status</label>
              <select 
                id="status" 
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)} // Handle change
                className="border outline-none w-fit px-3 py-1 rounded-md md:w-full"
              >
                <option value="Draft">Draft</option>
                <option value="active">Active</option>
              </select>
            </div>

            {/* React Quill Text Editor for Description */}
            <div className='flex flex-col mb-4'>
              <label htmlFor="description">Description</label>
              <ReactQuill 
                theme="snow"
                value={description}
                onChange={setDescription}
                placeholder="Write your article description here..."
                className="rounded-md mb-12 h-[700px] max-w-6xl"
              />
            </div>

            <div className='flex items-center gap-6 mt-8 justify-end'>
              <Link href="/admin/post" className='border px-[20px] py-[8px] rounded-md'>Cancel</Link>
              <button 
                type="submit" 
                className='flex items-center gap-4 border px-[20px] py-[8px] rounded-2xl' 
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Post"}
                <MdOutlineArrowOutward />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;