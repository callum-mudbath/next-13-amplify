import { useTestReactQueryQuery } from "@/hooks/testReactQueryQuery";
import { Box, CircularProgress, Typography } from "@mui/material";

export function DataComponent() {
  const query = useTestReactQueryQuery();
  if (query.isLoading) {
    return (
      <Box display={"flex"} justifyContent={"center"}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Box data-testid="dataLoaded" textAlign={"center"}>
      <Typography>{query.data.title}</Typography>
      <Typography>{query.data.id}</Typography>
    </Box>
  );
}
