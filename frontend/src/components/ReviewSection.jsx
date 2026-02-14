import React from 'react';
import { Star } from 'lucide-react';

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
                    className={i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
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

      {/* Write Your Review Form */}
      <div className="mt-16">
        <h3 className="text-xl font-bold text-gray-800">Write Your Review</h3>
        
        <div className="mt-6 rounded-[2rem] border border-gray-300 bg-[#f9f9f9] p-8">
          <div className="flex flex-col gap-6">
            {/* Rating Input */}
            <div className="flex items-center gap-8">
              <span className="text-lg font-medium text-gray-700">Your Rating</span>
              <div className="flex gap-1 text-gray-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="cursor-pointer hover:text-yellow-400" />
                ))}
              </div>
            </div>

            {/* Review Textarea */}
            <div className="flex items-start gap-8">
              <span className="whitespace-nowrap text-lg font-medium text-gray-700">Your Review</span>
              <div className="relative w-full">
                <textarea 
                  placeholder="write your review here ..."
                  className="h-32 w-full max-w-xl rounded-xl border border-gray-400 bg-transparent p-4 text-sm italic outline-none focus:border-orange-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end max-w-xl ml-[120px]">
               <button className="rounded-xl bg-[#eda384] px-10 py-2.5 font-bold text-white transition-colors hover:bg-[#d17a50]">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;