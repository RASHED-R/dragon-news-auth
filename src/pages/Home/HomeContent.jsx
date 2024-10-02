
import { useLoaderData } from "react-router-dom";
import NewsContainer from "../../components/NewsContailer/NewsContainer";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

const HomeContent = () => {
    const news = useLoaderData();

    return (
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
            <HomeLeft></HomeLeft>
            <div className=" col-span-2 flex flex-col gap-5 ">
                {
                    news?.map(aNews => <NewsContainer key={aNews._id} news={aNews}></NewsContainer>)
                }
            </div>
            <HomeRight></HomeRight>
        </div>
    );
};

export default HomeContent;