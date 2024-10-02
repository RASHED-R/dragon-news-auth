
import Header from "../../components/shared/Header/Header";
import Navbar from "../../components/shared/Navbar/Navbar";
import HomeRight from "../Home/HomeRight";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className=" grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-4xl"> News details</h2>
                    <p>{id}</p>
                </div>
                <div className="">
                    <HomeRight></HomeRight>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;