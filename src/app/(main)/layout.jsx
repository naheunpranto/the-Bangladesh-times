import BreakingNews from "@/components/BreakingNews";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

 

const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <BreakingNews/>
            <Navbar/>
            {children}
        </div>
    );
};

export default MainLayout;