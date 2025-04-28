"use client";
import React, { useState } from "react";
import { Rating } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Ratings = () => {
  const totalReviews = 1325;
  const overallRating = 4.5;

  const ratingsDistribution = [
    { stars: 5, count: 800 },
    { stars: 4, count: 350 },
    { stars: 3, count: 100 },
    { stars: 2, count: 50 },
    { stars: 1, count: 25 },
  ];

  const review = [
    {
      name: "food",
      rating: 4.1,
    },
    {
      name: "services",
      rating: 4.5,
    },
    {
      name: "ambience",
      rating: 3.7,
    },
    {
      name: "Cleanliness",
      rating: 4.3,
    },
    {
      name: "value",
      rating: 3.9,
    },
  ];
  return (
    <div
      id="review"
      className="w-[100%] mx-auto bg-white shadow-md rounded-lg  border-black "
    >
      <h2 className="text-lg font-bold bg-orange-600 text-white py-2 px-4 rounded-t-lg">
        What {totalReviews.toLocaleString()} people are saying
      </h2>
      <p className=" text-sm m-2 mx-8">Overall Rating and Reviews</p>
      <div className="flex flex-row mx-2">
        {" "}
        <div className="mb-4  font-semibold text-sm w-[50%] p-2 px-4">
          <p className="ml-3">
            Reviews can only be made by diners who have eaten at this restaurant
          </p>
          <div className="flex items-center ">
            <div className="text-2xl font-bold ml-3 text-orange-600">
              <Rating
                value={overallRating}
                precision={0.1}
                readOnly
                sx={{ color: "orange" }}
              />
            </div>{" "}
            {overallRating}
            <div className="ml-2 text-gray-600">based on recent ratings</div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2 text-sm">
            {review.map((item, i) => (
              <div className="flex items-center flex-col" key={i}>
                <span className="ml-2 font-bold">{item.rating}</span>
                <span className="font-medium text-gray-800">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[50%]">
          {ratingsDistribution.map((rating) => (
            <div
              key={rating.stars}
              className="flex items-center space-x-1  mb-2"
            >
              <div className="w-5 text-gray-700 font-medium">
                {rating.stars}
              </div>
              <div className="flex-1 border-[1px] rounded-md">
                <div
                  className="bg-orange-600 h-2 rounded-md"
                  style={{
                    width: `${(rating.count / totalReviews) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="w-12 text-right text-gray-700">
                {((rating.count / totalReviews) * 100).toFixed(1)}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ratings;

const reviews = [
  {
    id: 1,
    user: {
      name: "Anthony",
      location: "Philadelphia",
      avatar: "A",
      reviewsCount: 1,
    },
    rating: 1,
    date: "January 14, 2025",
    details: { food: 1, service: 1, ambience: 1 },
    reviewText:
      "I waited 30 minutes after my reservation time and there were still ten parties ahead of us for seating.",
    helpfulCount: 0,
    response: null,
  },
  {
    id: 2,
    user: {
      name: "Francesca",
      location: "San Francisco",
      avatar: "F",
      reviewsCount: 1,
    },
    rating: 2,
    date: "January 1, 2025",
    details: { food: 2, service: 2, ambience: 3 },
    reviewText:
      "Had reservations at 9 but got seated at 10. Food was cold when it was brought out.",
    helpfulCount: 1,
    response: {
      responder: "STK - San Francisco",
      responseText:
        "Hi Francesca - I'm sorry your holiday did not go as planned. I hope ...",
    },
  },
];

import Avatar from "@mui/material/Avatar";

export const ReviewList = ({ reviews }) => {
  const getColorFromName = (name) => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
    ];
    const index = name ? name.charCodeAt(0) % colors.length : 0;
    return colors[index];
  };
  return (
    <div className="max-w-2xl mx-auto py-6">
      <h2 className="text-lg font-semibold mb-4">{reviews.length} Reviews</h2>

      <select className="block mb-6 border border-gray-300 rounded-md p-2 text-sm w-full max-w-xs">
        <option>Lowest rating</option>
        <option>Highest rating</option>
        <option>Most recent</option>
      </select>

      {reviews.map((review, i) => (
        <div key={i} className="border-b border-gray-200 pb-6 mb-6">
          {/* User Info */}
          <div className="flex items-center space-x-4 mb-4">
            <Avatar className={`text-white ${getColorFromName(review?.user)}`}>
              {review?.user ? review.user.charAt(0).toUpperCase() : "?"}
            </Avatar>
            <div>
              <div className="font-semibold">{review.user}</div>
            </div>
          </div>

          {/* Review Details */}
          <div className="mb-4">
            <Rating value={review.rating} readOnly precision={0.5} />
            <div className="text-sm text-gray-500">Dined on {review.date}</div>
          </div>

          <p className="text-gray-700 text-sm mb-4">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: new Date().toISOString().split("T")[0], // Current date (YYYY-MM-DD)
    rating: 0,
    comment: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle rating change
  const handleRatingChange = (event, newValue) => {
    setFormData({ ...formData, rating: newValue });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || formData.rating === 0 || !formData.comment) {
      toast.warning("Please fill all fields and select a rating!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit feedback");

      toast.success("Feedback submitted successfully!");
      setFormData({
        name: "",
        date: new Date().toISOString().split("T")[0],
        rating: 0,
        comment: "",
      });
    } catch (error) {
      toast.error("Error submitting feedback!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <ToastContainer />
      {loading && (
        <div className="text-center text-orange-600 animate-spin text-3xl">
          🔄
        </div>
      )}

      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-orange-600">
          Submit Your Feedback
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border rounded focus:border-orange-600 focus:ring-2 focus:ring-orange-600"
            required
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />

          <div className="flex items-center space-x-3">
            <span className="text-gray-600">Your Rating:</span>
            <Rating
              name="rating"
              value={formData.rating}
              onChange={handleRatingChange}
              size="large"
            />
          </div>

          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Write your feedback..."
            className="w-full p-2 border rounded focus:border-orange-600 focus:ring-2 focus:ring-orange-600"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full p-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};
