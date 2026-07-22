import LeftSidebar from "@/components/Homepage/news/LeftSidebar";
import RightSidebar from "@/components/Homepage/news/RightSidebar";

 


async function getCategories ()  {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
  const data = await res.json();
  return data.data;
}



export default async function Home() {

  const categories = await getCategories()
  console.log(categories.news_category, "categories");

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-[60px]">
      <div className=" col-span-3">
        <LeftSidebar categories={categories} activeId={null}/>
      </div>

      <div className="font-bold text-3xl bg-purple-500 col-span-6">
        Dragon News
      </div>

      <div className="col-span-3">
        <RightSidebar/>
      </div>

    </div>
  );
}
