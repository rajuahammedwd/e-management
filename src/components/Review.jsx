
const Review = ({review}) => {
    const {userName, userImg, review:userReview, rating} = review;
    return (
      <div className="flex flex-col justify-center items-center text-center  shadow-lg px-5 py-10 mb-20">
        <div className="flex justify-center items-center rounded-full w-[220px] h-[220px]">
          <img
            className="mx-auto border w-[200px] h-[200px] rounded-full"
                    src={userImg}
            alt="UserImg"
          />
        </div>

        <p className="text-[#A2A2A2]">{userReview}</p>
        <h2 className="text-3xl font-bold mt-5">{userName}</h2>
        <p>{rating}</p>
      </div>
    );
};

export default Review;