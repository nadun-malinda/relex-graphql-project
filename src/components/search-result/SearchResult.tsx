import Image from "next/image";
import Link from "next/link";

import { useRepositories } from "@/hooks/useRepositories";

interface SearchResultProps {
  query?: string;
}

export async function SearchResult({ query }: SearchResultProps) {
  const { loading, error, data } = await useRepositories({ searchText: query });

  console.log("loading: ", loading);
  console.log("error: ", error);
  console.log("data: ", data);

  if (loading) {
    return <p>Loading ?????</p>;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {data.search.edges.length === 0 && <>No data</>}

      {data.search.edges.map((edge: any) => (
        <div key={edge.node.id} className="bg-teal p-4 rounded-lg">
          <h3 className="text-lg">{edge.node.name}</h3>
          <p className="text-sm">by: {edge.node.owner.login}</p>

          <h4>Stargazers ({edge.node.stargazers.totalCount})</h4>
          <div className="flex flex-wrap gap-0.5 mb-4 mt-2">
            {edge.node.stargazers.nodes.map((stargazer: any) => (
              <Image
                key={stargazer.id}
                width={24}
                height={24}
                src={stargazer.avatarUrl}
                alt={`Image of ${stargazer.name}`}
                className="rounded-md shadow-md"
              />
            ))}
          </div>
          <Link href={edge.node.nameWithOwner}>{edge.node.nameWithOwner}</Link>
        </div>
      ))}
    </div>
  );
}
