"use client";
import { useState, useEffect, useRef } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Heading from "../miniWodgets/Heading";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const CategoryManagement = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    image: null,
    imagePreview: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const formRef = useRef(null);

  // Fetch categories from API
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/categories`);
      if (!response.ok) throw new Error("Failed to fetch categories");

      const data = await response.json();
      setCategories(data);
      toast.success("Categories loaded successfully!");
    } catch (error) {
      toast.error("Error fetching categories!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: file, imagePreview: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.image) {
      toast.warning("Please fill all the fields and upload an image!");
      return;
    }

    setLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("image", formData.image);

    try {
      let response;
      if (isEditing) {
        response = await fetch(`${API_BASE_URL}/categories/${formData.id}`, {
          method: "PUT",
          body: formDataToSend,
        });
      } else {
        response = await fetch(`${API_BASE_URL}/categories`, {
          method: "POST",
          body: formDataToSend,
        });
      }

      if (!response.ok) throw new Error("Failed to save category");

      const updatedCategory = await response.json();
      setCategories(
        isEditing
          ? categories.map((item) =>
              item.id === updatedCategory.id ? updatedCategory : item
            )
          : [...categories, updatedCategory]
      );

      toast.success(
        isEditing
          ? "Category updated successfully!"
          : "Category added successfully!"
      );
    } catch (error) {
      toast.error("Error saving category!");
      console.error(error);
    } finally {
      setLoading(false);
      resetForm();
    }
  };

  // Reset Form
  const resetForm = () => {
    setFormData({
      id: null,
      name: "",
      image: null,
      imagePreview: "",
    });
    setIsEditing(false);
  };

  // Handle edit
  const handleEdit = (category) => {
    setFormData({
      id: category.id,
      name: category.name,
      image: null,
      imagePreview: category.image,
    });
    setIsEditing(true);

    // Scroll to the form
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("Failed to delete category");

        setCategories(categories.filter((item) => item.id !== id));
        toast.success("Category deleted successfully!");
      } catch (error) {
        toast.error("Error deleting category!");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <ToastContainer />

      {loading && (
        <div className="text-center text-orange-600 animate-spin text-3xl">
          🔄
        </div>
      )}

      {/* Form Section */}
      <div ref={formRef} className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4 text-orange-600">
          {isEditing ? "Edit Category" : "Add Category"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Category Name"
            className="w-full p-2 border rounded focus:border-orange-600 focus:ring-2 focus:ring-orange-600"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 border rounded"
          />
          {formData.imagePreview && (
            <img
              src={formData.imagePreview}
              alt="Preview"
              className="w-16 h-16 rounded-full mx-auto mt-2"
            />
          )}

          <button
            type="submit"
            className="w-full p-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
          >
            {isEditing ? "Save" : "Add"}
          </button>
        </form>
      </div>

     
    </div>
  );
};

export default CategoryManagement;
