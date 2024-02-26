import { useEffect, useState } from "react";
import Review from "../../components/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-20 text-center">
      <div className="mb-20">
        <h5 className="uppercase mb-3  ">
          <span className="text-[#FD7800]">5,000+</span> HAPPY USERS
        </h5>
        <h2 className="text-5xl font-bold mb-4 ">
          See why they love it so much!
        </h2>
        <p className="text-[#A2A2A2] text-xl">
          UDesign is a very powerful theme which suits<br></br> both users with
          no programming
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.slice(0, 3).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
