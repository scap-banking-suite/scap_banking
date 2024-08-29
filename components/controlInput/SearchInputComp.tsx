"use client";

import { SearchIcon } from "@/icons/svgComp/NavbarIcons";
import React, { useEffect, useRef } from "react";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInputComp = ({
  placeholder,
  onChange,
  onClick,
  onKeyDown,
  className,
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Check if Ctrl+/ (Windows/Linux) or Cmd+/ (Mac) is pressed
      if ((e.ctrlKey || e.metaKey) && e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    // Add event listener to the document
    document.addEventListener("keydown", handleGlobalKeyDown);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, []);

  return (
    <div
      className={`flex items-center bg-black bg-opacity-5 rounded-[8px] p-2 h-[28px] w-[160px] focus-within:border-darkBlue focus-within:outline-none focus-within:border ${className}`}
    >
      {/* Search Icon */}
      <div className="mr-2">
        <SearchIcon />
      </div>

      {/* Input */}
      <input
        type="text"
        ref={inputRef}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        onKeyDown={onKeyDown}
        className="flex-grow bg-transparent outline-none placeholder-black placeholder-opacity-20 text-darkBlue text-sm font-normal w-full "
      />

      {/* Command + / Shortcut */}
      <p className="ml-2 flex items-center text-black opacity-20 text-sm font-normal">
        ⌘/
      </p>
    </div>
  );
};

export default SearchInputComp;
