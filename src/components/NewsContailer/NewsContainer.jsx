import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
const NewsContainer = ({ news }) => {
    console.log(news);
    const { image_url, title, author, details, _id } = news;
    return (
        <div className="bg-base-100 border  rounded-md">
            <div className=" w-full bg-slate-200  p-4 grid grid-cols-2  items-center">
                <div className="flex flex-row gap-4">
                    <img className=" w-10 h-10 rounded-full" src={author.img} alt="" />
                    <div>
                        <p className=" text-base font-bold">{author?.name || 'No Author'}</p>
                        <p className=" text-sm text-gray-400">{author?.published_date?.slice(0, 10) || "No Date"}</p>
                    </div>
                </div>
                <div className="flex justify-end gap-2 text-xl ">
                    <span className="cursor-pointer"><CiBookmark /></span>
                    <span className="cursor-pointer"><CiShare2 /></span>
                </div>

            </div>
            <div className=" p-4">
                <h2 className="card-title mb-5">{title}</h2>
                <div>
                    <figure>
                        <img
                            src={image_url}
                            alt="Shoes" />
                    </figure>
                    <div className=" mt-8">
                        {
                            details.length > 200 ? <p>{details.slice(1, 200)} <Link to={`/news/${_id}`} className=" text-blue-500 font-bold">Read More...</Link></p> : <p>{details}</p>
                        }

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsContainer;