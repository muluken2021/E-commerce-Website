import React, { useState } from "react";
import { Star } from "lucide-react";
import Swal from "sweetalert2"; // ✅ import SweetAlert2
import "sweetalert2/dist/sweetalert2.min.css"; // optional but ensures styles

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    if (!rating || !review.trim()) {
      // ❌ show error popup
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please add a rating and write your review.",
      });
      return;
    }

    // ✅ show success popup
    Swal.fire({
      icon: "success",
      title: "Thank you!",
      text: "Your review has been submitted.",
      timer: 1500,
      showConfirmButton: false,
    });

    console.log({ rating, review });

    // reset
    setRating(0);
    setReview("");
  };

  return (
    <div className="mt-16">
      <h3 className="text-xl font-bold text-gray-800">
        Write Your Review
      </h3>

      <div className="mt-6 rounded-[2rem] border border-gray-300 bg-[#f9f9f9] p-6 md:p-8">
        <div className="flex flex-col gap-8">

          {/* ⭐ Rating */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
            <span className="text-lg font-medium text-gray-700">
              Your Rating
            </span>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={26}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className={`cursor-pointer transition-colors ${
                    star <= (hover || rating)
                      ? "text-brand-500 fill-brand-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ✍️ Review Text */}
          <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-8">
            <span className="text-lg font-medium text-gray-700 whitespace-nowrap">
              Your Review
            </span>

            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review here..."
              className="h-32 w-full md:max-w-xl rounded-xl border border-gray-400 bg-transparent p-4 text-sm outline-none focus:border-brand-500"
            />
          </div>

          {/* 🚀 Submit */}
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="rounded-xl bg-brand-500 px-10 py-3 font-bold text-white transition hover:bg-brand-600 active:scale-95"
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
