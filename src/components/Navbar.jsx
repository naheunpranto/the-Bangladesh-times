import Image from "next/image";
import Link from "next/link";
import userAvater from "@/assets/user.png"
import NavLink from "./NavLink";

 

const Navbar = () => {
    return (
        <div className="flex justify-between container mx-auto mt-4">
            <div></div>
            <ul className="flex justify-between items-center gap-4 text-gray-700">
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/career'} className={"text-yellow-500"}>Career</NavLink></li>
            </ul>

            <div className="flex justify-between items-center gap-2">
                <Image 
                    src={userAvater} 
                    alt="User Avater"
                    width={41}
                    height={41}
                />
                <button className="btn bg-gray-800 text-white"><Link href={"/login"}>Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;