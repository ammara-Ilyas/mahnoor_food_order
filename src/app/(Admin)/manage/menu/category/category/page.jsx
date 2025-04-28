import React, { useState } from "react";
import CategoryForm from "@/components/admin/menu/CategoriesForm";
import CategoriesTabel from "@/components/admin/menu/CategoriesTabel";
const page = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <CategoryForm categories={categories} />
      <CategoriesTabel />
    </div>
  );
};

export default page;
