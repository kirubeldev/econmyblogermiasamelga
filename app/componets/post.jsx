'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight, MdOutlineArrowOutward } from "react-icons/md";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navs from './nav';

const Postjob = ({ accessToken }) => {
    const [description, setDescription] = useState('');
    const [formData, setFormData] = useState({
      title: '',
      category: 'Business & Innovation', // Default category
      status: 'draft', // Default status
      language: 'English', // Default language
    });
    const [coverImage, setImage] = useState(null);
    const [pdf, setPdf] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImage(file);
      }
    };
  
    const handlePdfChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setPdf(file);
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setMessage('');
  
      const data = new FormData();
      data.append('title', formData.title);
      data.append('category', formData.category);
      data.append('status', formData.status);
      data.append('language', formData.language);
      data.append('description', description);
  
      if (coverImage) {
        data.append('coverImage', coverImage);
      }
      if (pdf) {
        data.append('pdf', pdf);
      }
  
      for (let pair of data.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }
  
      try {
        const response = await fetch('http://localhost:3002/api/blog/', {
          method: 'POST',
          body: data,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText);
        }
  
        const result = await response.json();
        console.log(result);
        setMessage('Blog post created successfully!');
        setDescription('');
        setFormData('')
        setImage(null);
        setPdf(null);
        setLoading(false);
   
      } catch (error) {
        console.error('Error uploading files:', error);
        setMessage(error.message || 'Error uploading files. Please try again.');
      } finally {
        setLoading(false);
      }

      
    };
  
    useEffect(() => {
      return () => {
        if (coverImage) URL.revokeObjectURL(coverImage);
        if (pdf) URL.revokeObjectURL(pdf);
      };
    }, [coverImage, pdf]);
  return (
    <div className="bg-gray-100 pb-8">
      <div className="bg-[#A70E28] top-0 md:fixed w-full z-10">
        <Navs />
      </div>
      <div className="mx-auto w-full flex items-center justify-center">
        <div className="max-w-6xl flex items-center justify-center flex-col mx-auto px-5 lg:px-0">
          <div className="mt-[130px] flex items-center px-5">
            <p>Blogs</p> 
            <MdKeyboardArrowRight /> 
            <p>Create Blog</p>
          </div>
          <div>
            <p className="mt-7 text-[40px]">Create New Article</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row w-full mx-auto md:px-0 lg:gap-[40px] items-start">
              <div className="w-full">
                <div className="flex w-full flex-col my-4">
                  <label htmlFor="articleTitle" className="font-medium">Article Title</label>
                  <input 
                    type="text" 
                    id="articleTitle" 
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="border outline-none px-3 py-1 rounded-md w-full md:w-[545px]" 
                    placeholder="Title" 
                    required
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="category" className="font-medium">Category</label>
                  <select 
                    id="category" 
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="border outline-none px-3 py-1 rounded-md w-full md:w-[545px]"
                  >
                    <option value="Business & Innovation">Business & Innovation</option>
                    <option value="Economy">Economy</option>
                    <option value="Entrepreneur">Entrepreneur</option>
                    <option value="Health">Health</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col mt-3 w-full">
                <div className="flex flex-col mb-4">
                  <label htmlFor="coverImage" className="font-medium">Upload Cover Image</label>
                  <input 
                    type="file" 
                    accept="image/*"
                    id="coverImage" 
                    onChange={handleImageChange}
                    className="border outline-none px-3 py-1 rounded-md w-full md:w-[545px] bg-transparent" 
                  />
                  {coverImage && <img src={URL.createObjectURL(coverImage)} alt="Preview" className="mt-2 w-24 h-24 object-cover" />}
                </div>
               

                
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="articleFile" className="font-medium">Upload Article File</label>
              <input 
                type="file" 
                accept=".pdf"
                id="articleFile" 
                onChange={handlePdfChange}
                className="border outline-none px-3 py-1 rounded-md w-full md:w-[545px] bg-transparent transition duration-200 ease-in-out hover:border-[#A70E28] focus:border-[#A70E28]" 
              />
              {pdf && (
                <iframe
                  src={URL.createObjectURL(pdf)} // Displaying the PDF preview
                  title="PDF Preview"
                  className="mt-2 w-full h-40 border border-gray-300"
                />
              )}
            </div>
            <div className="flex flex-col mb-4 lg:pr-5">
              <label htmlFor="language" className="font-medium">Language</label>
              <select 
                id="language" 
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="border outline-none px-3 py-1 rounded-md md:w-full w-[200px]"
              >
                <option value="English">English</option>
                <option value="Amharic">Amharic</option>
              </select>
            </div>
            {/* React Quill Text Editor for Description */}
            <div className="flex flex-col mb-4">
              <label htmlFor="description" className="font-medium">Description</label>
              <ReactQuill 
                theme="snow"
                value={description}
                onChange={setDescription}
                placeholder="Write your article description here..."
                className="rounded-md mb-12 h-[200px]"
              />
            </div>
            <div className="flex items-center gap-6">
              <button 
                type="submit" 
                className={`bg-[#A70E28] text-white px-4 py-2 rounded-md hover:bg-[#A70E28] transition duration-200 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Publishing...' : 'Publish Article'}
              </button>
              <Link href="/admin/posts" className="flex items-center gap-2">
                <span className="text-[#A70E28] font-medium">Go Back</span>
                <MdOutlineArrowOutward />
              </Link>
            </div>
            {message && <p className="mt-4 text-red-600">{message}</p>} {/* Displaying success/error message */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Postjob
