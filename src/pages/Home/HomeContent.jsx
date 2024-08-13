import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

const HomeContent = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
            <HomeLeft></HomeLeft>
            <div className=" col-span-2 ">middle</div>
            <HomeRight></HomeRight>
        </div>
    );
};

export default HomeContent;