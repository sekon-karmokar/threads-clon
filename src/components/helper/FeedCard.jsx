const FeedCard = () => {
  return (
    <>
      <div className="py-5 border-b">
        <div className="flex w-full">
          <div className="flex flex-col items-center ">
            <img
              src="https://scontent.cdninstagram.com/v/t51.2885-19/412752615_1284138722210960_5126960237436347596_n.jpg?stp=dst-jpg_s150x150&_nc_cat=103&ccb=1-7&_nc_sid=07cfa3&_nc_ohc=v2r-iPaSRmUAX_llVHh&_nc_ht=scontent.cdninstagram.com&oh=00_AfD7nT4Bt7TOs0HSNdN9pRgceUhTYQB6KnKr7Je8UG7SsQ&oe=65F877E1"
              className="w-9 h-9 rounded-full "
              alt=""
            />
            <span className="w-[2px] bg-zinc-200 h-full rounded-lg my-2"></span>
          </div>

          <div className="mx-2 flex flex-col items-start w-full">
            <div className=" flex justify-between w-full">
              <div>
                <h1>Kobitapoembd</h1>
                <span className="block my-1">অপ্রিয় সত্য!🙂</span>
              </div>
              <div className=" flex items-center h-2">
                <span className="mx-[2px] text-[15px] text-gray-400">3w</span>
                <button className="w-9 h-9 hover:bg-slate-100 flex justify-center items-center rounded-full">
                  <svg
                    aria-label="More"
                    role="img"
                    viewBox="0 0 24 24"
                    style={{
                      fill: "currentColor",
                      height: "20px",
                      width: "20px",
                    }}>
                    <title>More</title>
                    <circle cx="12" cy="12" r="1.5"></circle>
                    <circle cx="6" cy="12" r="1.5"></circle>
                    <circle cx="18" cy="12" r="1.5"></circle>
                  </svg>
                </button>
              </div>
            </div>
            <div className="my-2">
              <img
                src="https://images.pexels.com/photos/4661793/pexels-photo-4661793.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt=""
                className=" rounded-xl"
              />
            </div>
            <div>
              <button>like</button>
              <button>like</button>
              <button>like</button>
              <button>like</button>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};
export default FeedCard;
