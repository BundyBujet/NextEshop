"use client";
import { useState } from "react";

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // const filteredProducts =
    //   allProducts &&
    //   allProducts.filter((product) =>
    //     product.name.toLowerCase().includes(term.toLowerCase())
    //   );
    // setSearchData(filteredProducts);
  };

  return (
    <input
      type="text"
      placeholder="Search Product..."
      value={searchTerm}
      onChange={handleSearchChange}
      className="h-[40px] w-full px-2 focus-visible:border-blue-500 border-[2px] rounded-md"
    />
  );
}
