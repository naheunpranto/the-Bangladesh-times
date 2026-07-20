import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

 

const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <Navbar/>
            {children}
        </div>
    );
};

export default MainLayout;