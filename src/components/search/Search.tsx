"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";

interface SearchProps {
  focusOnLoad?: boolean;
  placeholder?: string;
}

export function Search({ focusOnLoad = false, placeholder }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce({ value: searchText });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // focus on the input element when the component mounts
    focusOnLoad && inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debouncedSearchText) {
      params.set("query", debouncedSearchText);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, [debouncedSearchText, pathname, replace, searchParams]);

  return (
    <input
      ref={inputRef}
      type="text"
      className="w-full max-w-lg rounded-lg border border-zinc-900/10 bg-white py-4 px-6 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal text-lg"
      placeholder={placeholder}
      onChange={(e) => setSearchText(e.target.value)}
      defaultValue={searchParams.get("query")?.toString()}
    />
  );
}
