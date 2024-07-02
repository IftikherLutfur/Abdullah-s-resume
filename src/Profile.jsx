import Banner from "./Components/Banner";
import Left from "./Components/Left";
import Projects from "./Components/Projects";
import Right from "./Components/Right";

const Profile = () => {
    return (
        <div className="min-h-screen">
            <div>
                <Banner/>
            </div>
            <div className="flex justify-around px-4 py-4">
                <Left/>
                <Right/>
            </div>
            <Projects/>
        </div>
    );
};

export default Profile;