import { useQuery } from "@tanstack/react-query";

export const useTestReactQueryQuery = () =>
  useQuery({
    queryKey: ["todos"],
    queryFn: async () =>
      await (
        await fetch("https://jsonplaceholder.typicode.com/todos/1")
      ).json(),
  });
