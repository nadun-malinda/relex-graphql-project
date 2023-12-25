import { GET_REPOSITORIES } from "@/query/repository";
import { useFetch } from "./useFetch";

const url = process.env.GITHUB_API || "https://api.github.com/graphql";

interface InputProps {
  searchText?: string;
}

export async function useRepositories({ searchText }: InputProps) {
  return await useFetch(url, GET_REPOSITORIES, {
    query: searchText,
  });
}
