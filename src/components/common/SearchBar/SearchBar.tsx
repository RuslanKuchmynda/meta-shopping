import React from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  resultsCount?: number;
  totalCount?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  resultsCount,
  totalCount,
}) => {
  return (
    <div className="w-full max-w-md mx-auto mt-8 mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-3 pl-12 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FFFF6D] focus:ring-2 focus:ring-[#FFFF6D]/20 transition-all duration-300"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      {searchTerm && resultsCount !== undefined && totalCount !== undefined && (
        <div className="text-center mt-2 text-gray-400">
          Found {resultsCount} of {totalCount}{" "}
          {resultsCount === 1 ? "product" : "products"}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
