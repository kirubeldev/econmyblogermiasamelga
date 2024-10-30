'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { MdOutlineArrowOutward } from "react-icons/md";
import Navs from '@/app/componets/nav';
import { useRouter } from 'next/navigation';

const EditBlog = ({ params, accessToken }) => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [articleFile, setArticleFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch blog data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3002/api/blog/${params.id}`);
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setTitle(data.title);
        setDescription(data.description);
        setCategory(data.category);
        setCoverImage(data.coverImage);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [params]);
 

  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setLoading(true); // Start loading

    const dataToSend = {
        title: title,
        description: description,
        category: category,
        coverImage: coverImage, // Include this if you have a valid URL or base64 string for the image
        articleFile: articleFile, // Include this if you have a valid URL or base64 string for the file
    };

    try {
        const res = await fetch(`http://localhost:3002/api/blog/${params.id}`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json', // Set content type to JSON
            },
            body: JSON.stringify(dataToSend) // Convert the data object to a JSON string
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(`Failed to update the blog post: ${errorData.message || 'Unknown error'}`);
        }

        // Refetch the updated data
        const updatedData = await res.json();
        console.log("Post updated successfully:", updatedData);
        
        // Update local state with new values
        setTitle(updatedData.blog.title);
        setDescription(updatedData.blog.description);
        setCategory(updatedData.blog.category);
        setStatus(updatedData.blog.status);
        setCoverImage(updatedData.blog.coverImage);
router.push("/admin/posts")
    } catch (error) {
        console.error("Error updating the post:", error.message);
    } finally {
        setLoading(false); // Stop loading
    }
};


  
  
  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(URL.createObjectURL(file));
  };

  const handleArticleFileChange = (e) => {
    setArticleFile(e.target.files[0]);
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
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col lg:flex-row w-full mx-auto md:px-0 lg:gap-[40px] items-start'>
              <div className='w-full'>
                <div className='flex w-full flex-col my-4'>
                  <label htmlFor="articleTitle">Article Title</label>
                  <input 
                    type="text" 
                    id="articleTitle" 
                    className='border outline-none px-3 py-1 rounded-md w-full md:w-[545px]' 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="category">Category</label>
                  <select 
                    id="category" 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border outline-none px-3 py-1 rounded-md w-full md:w-[545px]"
                  >
                    <option value="Business ">Business </option>
                    <option value="Economy">Economy</option>
                    <option value="Mindset">Mindset</option>
                    <option value="Health and Wellbeing">Health and Wellbeing</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-col mt-3 w-full'>
                <label htmlFor="coverImage">Upload Cover Image</label>
                <input 
                  type="file" 
                  accept='image/*'
                  id="coverImage" 
                  className='border outline-none px-3 py-1 rounded-md w-full md:w-[545px]' 
                  onChange={handleCoverImageChange}
                />
                {coverImage && (
                  <div className='mb-4'>
                    <img src={coverImage} alt="Cover Preview" className='w-full h-[200px] object-cover border rounded-md' />
                  </div>
                )}
              </div>
            </div>
            
            <div className='flex flex-col mb-4'>
              <label htmlFor="description">Description</label>
              <ReactQuill 
                theme="snow"
                value={description}
                onChange={setDescription}
                placeholder="Write your article description here..."
                className="rounded-md mb-12 h-[400px] max-w-6xl"
              />
            </div>
            <div className='flex items-center gap-6 mt-8 justify-end'>
              <Link href="/admin/post" className='border px-[20px] py-[8px] rounded-md'>Cancel</Link>
              <button 
                type="submit" 
                className='border px-[20px] py-[8px] rounded-2xl' 
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
