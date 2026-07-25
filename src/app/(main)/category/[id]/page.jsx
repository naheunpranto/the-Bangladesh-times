import LeftSidebar from "@/components/Homepage/news/LeftSidebar";
import NewsCard from "@/components/Homepage/news/NewsCard";
import RightSidebar from "@/components/Homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";


const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "parasRes");

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-[60px]">
      <div className=" col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>

      <div className="col-span-6">
        <h2 className="font-semibold text-[20px]">All News</h2>
        <div className="space-y-4 mt-6">
          {news.length > 0 ? (
            news.map((n) => {
              return (
                <NewsCard key={n._id} news={n}></NewsCard>
              );
            })
          ) : (
            <h2 className="font-bold text-4xl text-center my-7"> 
              No news found
            </h2>
          )}
        </div>
      </div>

      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
