import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

export const generateMetadata = async ({params}) => {
  const {id} = await params;
  console.log(id, "params");
  const news = await getNewsDetailsById(id);
  console.log(news, "news");

  return {
    title: news.title,
    description: news.details,
  }
}


const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id, "params");
  const news = await getNewsDetailsById(id);
  // console.log(news, "news");
  return (
    <div className="max-w-5xl mx-auto my-8">
      <h2 className="mb-5">News Details page</h2>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          {/* Author info */}
          <div className="bg-[#F3F3F3] flex justify-between items-center p-5">
            <div className="flex items-center gap-4">
              <Image
                src={news.author?.img}
                alt={news.author?.name}
                height={40}
                width={40}
                className="rounded-full"
              />
              <div>
                <h2 className="font-semibold">{news.author?.name}</h2>
                <h2 className="text-xs text-[#706F6F]">
                  {news.author?.published_date}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <CiBookmark className="h-[24] w-[24]" />
              <CiShare2 className="h-[24] w-[24]" />
            </div>
          </div>

          <h2 className="card-title">{news.title}</h2>
          <figure>
            <Image
              src={news.image_url}
              alt={news.title}
              width={518}
              height={262}
              className="w-full"
            />
          </figure>
          <h2 className="card-title">{news.title}</h2>
          
          <p className="text-[#706F6F]">{news.details}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="flex items-center gap-1">
                <CiStar />
                {news.rating.number}
              </h2>
              <h2 className="flex items-center gap-1">
                <FaEye />
                {news.total_view}
              </h2>
            </div>

            <Link href={`/category/${news.category_id}`}>
              <button className="btn bg-[#D72050] text-white">All news in this category</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
