import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';
import Swal from 'sweetalert2';

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !text.trim()) {
      Swal.fire({ icon: 'error', title: 'Missing fields', text: 'Please add a rating and write your review.' });
      return;
    }
    Swal.fire({ icon: 'success', title: 'Review submitted!', text: 'Thanks for your feedback.', timer: 1800, showConfirmButton: false });
    setRating(0); setText(''); setName('');
  };

  const labels = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
      <h3 className="text-[15px] font-black text-gray-900 mb-5">Write a Review</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 block">Your Rating</label>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setRating(s)}
                  onMouseEnter={() => setHover(s)}
                  onMouseLeave={() => setHover(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    size={22}
                    className={s <= (hover || rating) ? 'text-yellow-400' : 'text-gray-200'}
                    fill={s <= (hover || rating) ? '#fbbf24' : '#e5e7eb'}
                  />
                </button>
              ))}
            </div>
            {(hover || rating) > 0 && (
              <span className="text-[13px] font-semibold text-gray-600">{labels[hover || rating]}</span>
            )}
          </div>
        </div>

        <div>
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">Name (optional)</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-600 bg-white transition-colors"
          />
        </div>

        <div>
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 block">Your Review</label>
          <textarea
            required
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share your experience with this product..."
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-600 bg-white resize-none transition-colors"
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white px-7 py-3 rounded-xl font-bold text-[14px] transition-all active:scale-[0.97] shadow-lg shadow-brand-900/20"
        >
          <Send size={15} /> Submit Review
        </button>
      </form>
    </div>
  );
}
