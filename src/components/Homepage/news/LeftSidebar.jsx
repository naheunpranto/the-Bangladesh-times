import Link from "next/link";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="font-semibold text-[20px]">All categories</h2>
      <ul className="flex flex-col gap-3 mt-[20px]">
        {categories.news_category.map((category) => {
          return (
            <li
              key={category.category_id}
              className={`${activeId === category.category_id && "bg-purple-500 text-white"}  rounded-md font-semibold text-center text-[20px]`}
            >
              <Link
                href={`/category/${category.category_id}`}
                className="block p-2"
              >
                {" "}
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
