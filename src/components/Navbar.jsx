"use client";

import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  console.log(user, "user");

  return (
    <div className="flex justify-between container mx-auto mt-4">
      <div></div>
      <ul className="flex justify-between items-center gap-4 text-gray-700">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"} className={"text-yellow-500"}>
            Career
          </NavLink>
        </li>
      </ul>

      {isPending? ("Loading...") : user ? (
        <div className="flex justify-between items-center gap-2">
          <h2>Hello, {user.name}</h2>
          <Image
            src={user.image || userAvatar}
            alt="User Avatar"
            width={41}
            height={41}
          />
          <button className="btn bg-gray-800 text-white" onClick={async () =>await authClient.signOut()}>Logout</button>
        </div>
      ) : (
        <button className="btn bg-gray-800 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
