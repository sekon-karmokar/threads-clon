import FeedCard from "../components/helper/FeedCard";

const Home = () => {
  return (
    <>
   
        <button className="flex justify-between w-full items-center border-b pb-4 mt-3">
          <span className="flex  items-center text-[14px] text-gray-400">
            <img
              src="https://scontent.cdninstagram.com/v/t51.2885-19/412752615_1284138722210960_5126960237436347596_n.jpg?stp=dst-jpg_s150x150&_nc_cat=103&ccb=1-7&_nc_sid=07cfa3&_nc_ohc=v2r-iPaSRmUAX_llVHh&_nc_ht=scontent.cdninstagram.com&oh=00_AfD7nT4Bt7TOs0HSNdN9pRgceUhTYQB6KnKr7Je8UG7SsQ&oe=65F877E1"
              className="w-9 h-9 rounded-full mr-3"
              alt=""
            />
            Start a duplicate thread..
          </span>
          <span className=" bg-[rgba(0,0,0,0.3)] text-white px-[18px] py-2 rounded-3xl text-[14px] font-semibold">
            Post
          </span>
        </button>
        <FeedCard />
        <FeedCard /> <FeedCard />
        <FeedCard />

    </>
  );
};

export default Home;
