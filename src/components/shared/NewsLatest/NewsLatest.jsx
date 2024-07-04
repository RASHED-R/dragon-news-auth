import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const NewsLatest = () => {
    return (
        <div className=" bg-border-color p-4 flex">
            <button className="btn btn-error text-white rounded-none px-12">Latest</button>
            <Marquee pauseOnHover={true}>
                <Link className=" mr-4" to={'/'}> I can be a React component, multiple React components, or just some text.....</Link>
                <Link className=" mr-4" to={'/'}> I can be a React component, multiple React components, or just some text.....</Link>
                <Link className=" mr-4" to={'/'}> I can be a React component, multiple React components, or just some text.....</Link>
            </Marquee>
        </div>
    );
};

export default NewsLatest;