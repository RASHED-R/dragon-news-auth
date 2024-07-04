import Header from "../../components/shared/Header/Header";
import Navbar from "../../components/shared/Navbar/Navbar";
import NewsLatest from "../../components/shared/NewsLatest/NewsLatest";
import HomeContent from "./HomeContent";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <NewsLatest></NewsLatest>
            <Navbar></Navbar>
            <HomeContent></HomeContent>
        </div>
    );
};

export default Home;