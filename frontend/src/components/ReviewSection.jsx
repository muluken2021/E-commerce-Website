import React, { useState } from 'react';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import ReviewForm from './ReviewForm';

const initialReviews = [
  { id: 1, name: 'Muluken Kassaw', rating: 5, time: '1 week ago', avatar: 'https://i.pravatar.cc/40?img=11', comment: 'Absolutely fantastic product. Build quality is exceptional and it arrived ahead of schedule. Would definitely purchase again and recommend to friends.', helpful: 24 },
  { id: 2, name: 'Abel Alemu',     rating: 4, time: '3 weeks ago', avatar: 'https://i.pravatar.cc/40?img=8',  comment: 'Great product overall. Functions exactly as advertised. Minor packaging issue but the product itself is top notch. Very happy with the purchase.', helpful: 18 },
  { id: 3, name: 'Mahder Belay',   rating: 5, time: '5 weeks ago', avatar: 'https://i.pravatar.cc/40?img=45', comment: 'Premium quality and great value. The design is modern and elegant. Highly recommend this to anyone who wants reliable performance at a fair price.', helpful: 31 },
];

const RatingBar = ({ stars, count, total }) => (
  <div className="flex items-center gap-3 text-[12px]">
    <span className="w-3 text-gray-600 font-semibold">{stars}</span>
    <Star size={11} fill="#fbbf24" className="text-yellow-400 flex-shrink-0" />
    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-yellow-400 rounded-full transition-all"
        style={{ width: `${total ? (count / total) * 100 : 0}%` }}
      />
    </div>
    <span className="w-6 text-gray-400">{count}</span>
  </div>
);

export default function ReviewsSection({ productReviews = [], reviewsCount }) {
  const formattedReviews = productReviews.map((review) => ({
    id: review.id,
    name: review.author,
    time: review.date,
    rating: review.rating,
    comment: review.comment,
    helpful: review.helpfulCount,
    avatar: `https://i.pravatar.cc/40?u=${review.author}`,
  }));

  const [reviews, setReviews] = useState(
    formattedReviews.length > 0 ? formattedReviews : initialReviews
  );

  // 2. Safe calculation to prevent NaN if the reviews array is empty
  const total = reviews.length;
  const avg = total > 0 
    ? (reviews.reduce((s, r) => s + r.rating, 0) / total).toFixed(1) 
    : "0.0";

  // 3. Handler to accept a new review from the ReviewForm
  const handleAddReview = (newReviewData) => {
    const newReview = {
      id: Date.now(), // Generate a temporary ID until backend handles it
      helpful: 0,
      avatar: 'https://i.pravatar.cc/40?img=12', // Placeholder avatar
      time: 'Just now',
      ...newReviewData
    };
    
    // Add the new review to the top of the list
    setReviews([newReview, ...reviews]);
  };

  return (
    <div className="space-y-8">
      {/* Summary */}
      <div className="flex flex-col sm:flex-row gap-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
        <div className="text-center flex-shrink-0">
          <p className="text-5xl font-black text-gray-900">{avg}</p>
          <div className="flex gap-0.5 justify-center my-2">
            {Array(5).fill(0).map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < Math.round(Number(avg)) ? 'text-yellow-400' : 'text-gray-200'} 
                fill={i < Math.round(Number(avg)) ? '#fbbf24' : '#e5e7eb'} 
              />
            ))}
          </div>
          <p className="text-[12px] text-gray-400">{total} reviews</p>
        </div>
        <div className="flex-1 space-y-2">
          {[5, 4, 3, 2, 1].map((s) => (
            <RatingBar 
              key={s} 
              stars={s} 
              // Update from 'sample' to 'reviews' state
              count={reviews.filter((r) => r.rating === s).length} 
              total={total} 
            />
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="space-y-6">
        {/* Update from 'sample' to 'reviews' state */}
        {reviews.map((r) => (
          <div key={r.id} className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <p className="text-[13px] font-bold text-gray-900">{r.name}</p>
                  <p className="text-[11px] text-gray-400">{r.time}</p>
                </div>
              </div>
              <div className="flex gap-0.5 flex-shrink-0">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    size={12} 
                    className={i < r.rating ? 'text-yellow-400' : 'text-gray-200'} 
                    fill={i < r.rating ? '#fbbf24' : '#e5e7eb'} 
                  />
                ))}
              </div>
            </div>
            <p className="text-[13px] text-gray-600 leading-relaxed mb-4">{r.comment}</p>
            <div className="flex items-center gap-3 text-[11px] text-gray-400">
              <span>Helpful?</span>
              <button className="flex items-center gap-1 hover:text-green-600 transition-colors">
                <ThumbsUp size={12} /> {r.helpful}
              </button>
              <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                <ThumbsDown size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Pass the handler down to the form */}
      <ReviewForm onAddReview={handleAddReview} />
    </div>
  );
}