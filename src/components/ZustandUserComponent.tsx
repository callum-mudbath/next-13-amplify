import { useUserStore } from "@/hooks/testUserHook";
import { Box, Button } from "@mui/material";

export function ZustandUserComponent() {
  const addUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} flexDirection={"column"}>
        <Button onClick={() => addUser({ name: "testing" })}>Add user</Button>
        <Box textAlign={"center"}>{JSON.stringify(user)}</Box>
      </Box>
    </>
  );
}
