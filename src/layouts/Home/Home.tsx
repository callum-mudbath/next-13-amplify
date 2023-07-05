"use client";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataComponent } from "@/components/DataComponent";
import { Divider } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box paddingTop={4}>
        <Typography
          variant="h2"
          component="h1"
          textAlign={"center"}
          gutterBottom
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
      </Box>
    </Container>
  );
}
