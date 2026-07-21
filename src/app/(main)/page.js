 


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
        <h2 className="font-semibold text-[20px]">All categories</h2>
        <ul className="flex flex-col gap-3 mt-[20px]">
          {
            categories.news_category.map(category => {
              return <li key={category.id} className="bg-slate-100 p-2 rounded-md font-semibold text-center text-[20px]">{category.category_name}</li>
            })
          }
        </ul>
      </div>

      <div className="font-bold text-3xl bg-purple-500 col-span-6">
        Dragon News
      </div>

      <div className="font-bold text-3xl bg-yellow-500 col-span-3">
        Login with
      </div>

    </div>
  );
}
