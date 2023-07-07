"use client";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Link from "next/link";
import { DataComponent } from "components/DataComponent";
import { ZustandUserComponent } from "components/ZustandUserComponent";

export default function RootPage() {
  return (
    <Container maxWidth="lg">
      <Box paddingTop={4}>
        <Typography
          variant="h2"
          component="h1"
          textAlign={"center"}
          gutterBottom
          data-testid="home"
        >
          Next.js example using App Router{" "}
        </Typography>
        <Box textAlign={"center"}>
          <Link href={"/about"}>About Page</Link>
        </Box>
        <Typography marginTop={18} textAlign={"center"} typography={"h4"}>
          This data is fetched via react-query
        </Typography>
        <Divider sx={{ maxWidth: "300px", margin: "1rem auto" }} />
        <DataComponent />

        <Typography marginTop={18} textAlign={"center"} typography={"h4"}>
          Adding a user to zustand
        </Typography>

        <ZustandUserComponent />
      </Box>
    </Container>
  );
}
