import React from 'react'
import { Search } from "lucide-react";
import ToggleMenu from "./ToggleMenu";


const Header = () => {
  return (
    <div className="md:mx-10 px-4 pt-6"> 
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <ToggleMenu />

        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Searching for ...."
            className="w-full bg-gray-200 py-3 px-4 rounded-md outline-none focus:ring-1 ring-orange-400"
          />
          <Search
            className="absolute right-4 top-3.5 text-gray-400"
            size={20}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
