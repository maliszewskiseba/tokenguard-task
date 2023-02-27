const SkeletonCard = () => {
  return (
    <section className="bg-gray-700 ">
      <div className="container px-6 py-10 mx-auto animate-pulse">
        <div className="flex w-full gap-4">
          <div className="w-1/3 ">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          </div>
          <div className="w-1/3 ">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          </div>
          <div className="w-1/3 ">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkeletonCard;
