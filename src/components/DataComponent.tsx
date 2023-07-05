"use client";
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
    return <CircularProgress size="md" />;
  }
  return (
    <Box paddingTop={6} textAlign={"center"}>
      <Typography textAlign={"center"} typography={"h4"}>
        This data is fetched via react-query
      </Typography>
      <Divider sx={{ maxWidth: "300px", margin: "1rem auto" }} />
      <Typography>{query.data.title}</Typography>
      <Typography>{query.data.id}</Typography>
    </Box>
  );
}
