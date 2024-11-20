import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";


const NewsDetails = () => {
    const detailsNews = useLoaderData();
    const news =(detailsNews.data[0]);
    console.log(news);
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h2 className="text-xl font-semibold my-5">Dragon News</h2>

                    <div className="card bg-base-100 border border-gray-300">
                        <figure className="px-10 pt-10">
                            <img
                                src={news?.image_url}
                                alt="Shoes"
                                className="rounded-md w-full" />
                        </figure>
                        <div className="card-body space-y-4">
                            <h2 className="card-title text-xl font-bold">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="">
                                <Link to={`/category/${news?.category_id}`} className="btn text-white bg-[#D72050]">All News In This Category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3"><RightNav></RightNav></aside>

            </main>
        </div>
    );
};

export default NewsDetails;

// {
//     "_id": "f69a695f037cd9484cecaea37ca71011",
//     "others_info": {
//         "is_todays_pick": false,
//         "is_trending": true
//     },
//     "category_id": "01",
//     "rating": {
//         "number": 4.8,
//         "badge": "Excellent"
//     },
//     "total_view": 400,
//     "title": "Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine",
//     "author": {
//         "name": "Jennifer Wood",
//         "published_date": "2022-08-30 16:38:45",
//         "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//     },
//     "thumbnail_url": "https://i.ibb.co/k8XBcMX/unsplash-Eh-Tc-C9s-YXsw-15.png",
//     "image_url": "https://i.ibb.co/BZZ5WKv/unsplash-Eh-Tc-C9s-YXsw-4.png",
//     "details": "Tucker Carlson has rarely met a dictator's ass he didn't want to kiss, and Vladimir Putin is at the very top of that puckering up list. The Fox News host is something of a folk hero in Russia: Because of the pro-Putin propaganda he so often spews, the Kremlin has encouraged Russia's state TV to air as much of Tucker's face as possible — and they're certain to love his latest rant about how Putin is winning the war in Ukraine, which does not seem to be the case. But on Fox News, what Tucker says goes."
// }