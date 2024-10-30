'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight, MdOutlineArrowOutward } from "react-icons/md";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navs from './nav';
import { useRouter } from 'next/navigation';

const Postjob = ({ accessToken }) => {
  const router = useRouter()
    const [description, setDescription] = useState('');
    const [formData, setFormData] = useState({
      title: '',
      category: 'Business ', // Default category
      status: 'draft', // Default status
      language: 'English', // Default language
    });
    const [coverImage, setImage] = useState(null);
    const [pdf, setPdf] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [showDialog, setShowDialog] = useState(false); // State for success dialog
  
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
        setShowDialog(true); // Show success dialog
        setDescription('');
        setFormData({
          title: '',
          category: 'Business ',
          status: 'draft',
          language: 'English',
        });
        setImage(null);
        setPdf(null);
  
        setTimeout(() => setShowDialog(false), 2000); // Hide dialog after 2 seconds
        router.push("admin/posts")
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
                      <option value="Business ">Business </option>
                      <option value="Economy">Economy</option>
                      <option value="Mindset">Mindset</option>
                      <option value="Health and Wellbeing">Health and Wellbeing</option>
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
                    src={URL.createObjectURL(pdf)}
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
              {message && <p className="mt-4 text-red-600">{message}</p>}
            </form>
          </div>
          {showDialog && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
    <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full text-center">
      <img 
        src="https://plus.unsplash.com/premium_photo-1663840297376-c73ed09e98f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uZ3JhdHVsYXRpb25zfGVufDB8fDB8fHww" 
        alt="Congratulations" 
        className="mx-auto mb-4 w-16 h-16 object-cover"
      />
      <p className="text-green-600 text-lg font-medium">Blog post created successfully!</p>
    </div>
  </div>
)}

        </div>
      </div>
    );
    
};

export default Postjob;
