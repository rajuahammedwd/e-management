
import Banner from "./Banner";
import Reviews from "./Reviews";
import ServicePlan from "./ServicePlan";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <ServicePlan />
            <Reviews />
        </div>
    );
};

export default Home;