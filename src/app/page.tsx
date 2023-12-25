import { SearchResult } from "@/components/search-result/SearchResult";
import { Search } from "@/components/search/Search";

interface SearchParams {
  query?: string;
}

interface SearchResultProps {
  searchParams?: SearchParams;
}

export default function Home({ searchParams }: SearchResultProps) {
  const query = searchParams?.query || "";

  return (
    <main>
      <div className="flex m-auto align-middle justify-center mb-10">
        <Search focusOnLoad placeholder="Search for a GitHub repository..." />
      </div>

      <SearchResult query={query} />
    </main>
  );
}
