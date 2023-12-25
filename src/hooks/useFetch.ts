interface Error {
  message: string;
}

interface FetchResponse<T> {
  loading: boolean;
  error: Error | null;
  data: T;
}

export async function useFetch<T = any>(
  url: string,
  query: any,
  variables?: any
): Promise<FetchResponse<T>> {
  let responseObj: FetchResponse<T> = {
    loading: true,
    error: null,
    data: [] as T,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_PAT}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      return { ...responseObj, loading: false, data: result.data };
    } else {
      console.error("Error: ", result);
      return { ...responseObj, loading: false, error: result };
    }
  } catch (error) {
    console.error("Error: ", error);
    return {
      ...responseObj,
      loading: false,
      error: { message: "Something went wrong!" },
    };
  }
}
