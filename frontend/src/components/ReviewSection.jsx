import React from 'react';
import { Star } from 'lucide-react';
import ReviewForm from './ReviewForm';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Muluken Kassaw",
      rating: 4.7,
      time: "1 weeks ago",
      avatar: "/api/placeholder/40/40",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et reiciendis at facilis quos mollitia, ratione, quibusdam explicabo quo exercitationem, iusto voluptatibus. Illum perferendis dolorum, aut nam cumque incidunt excepturi."
    },
    {
      id: 2,
      name: "Abel Alemu",
      rating: 4.7,
      time: "3 weeks ago",
      avatar: "/api/placeholder/40/40",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et reiciendis at facilis quos mollitia, ratione, quibusdam explicabo quo exercitationem, iusto voluptatibus. Illum perferendis dolorum, aut nam cumque incidunt excepturi."
    },
    {
      id: 3,
      name: "Mahder Belay",
      rating: 4.7,
      time: "5 weeks ago",
      avatar: "/api/placeholder/40/40",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et reiciendis at facilis quos mollitia, ratione, quibusdam explicabo quo exercitationem, iusto voluptatibus. Illum perferendis dolorum, aut nam cumque incidunt excepturi."
    }
  ];

  return (
    <div className="">
      {/* Review List */}
      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="h-10 w-10 rounded-full object-cover"
              />
              <h4 className="text-lg font-semibold text-gray-800">{review.name}</h4>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i < 5 ? "fill-brand-400 text-brand-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">{review.rating}</span>
              <span className="text-sm text-gray-400">{review.time}</span>
            </div>

            <p className="max-w-3xl text-sm leading-relaxed text-gray-500">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

     <ReviewForm />
    </div>
  );
};

export default ReviewsSection;