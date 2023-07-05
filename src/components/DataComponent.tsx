import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export function DataComponent() {
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: async () =>
      await (
        await fetch("https://jsonplaceholder.typicode.com/todos/1")
      ).json(),
  });
  if (query.isLoading) {
    return (
      <Box display={"flex"} justifyContent={"center"}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Box textAlign={"center"}>
      <Typography>{query.data.title}</Typography>
      <Typography>{query.data.id}</Typography>
    </Box>
  );
}
