import React from "react";

const CategoriesTabel = () => {
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
    <div>
      {/* Table Section */}
      <div className="bg-white shadow-md p-6 rounded-lg">
        <Heading text="Category List" />

        <table className="w-full border border-gray-200">
          <thead className="bg-orange-600 text-white">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-100">
                <td>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-12 h-12"
                  />
                </td>
                <td>{category.name}</td>
                <td>
                  <button
                    onClick={() => handleEdit(category)}
                    className="mr-2 text-orange-600"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="text-red-600"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriesTabel;
