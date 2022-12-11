import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

function Header() {
  return (
    <header>
      <div className="grid items-center grid-cols-3 p-10">
        <Bars3Icon className="w-8 h-8 cursor-pointer" />
        <Link href={"/"} prefetch={false}>
          <h1 className="font-serif text-2xl text-center uppercase">
            {" "}
            <span className="block underline decoration-6 decoration-orange-400">
              International
            </span>{" "}
            The News
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* DarkModeButton */}
           <DarkModeButton/> 
          <button className="hidden px-4 py-2 text-white rounded-full md:inline bg-slate-900 lg:px-8 lg:py-4 dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>
      {/* NavLinks */}
      <NavLinks />
      {/* SearchBox */}
      <SearchBox />
    </header>
  );
}

export default Header;
