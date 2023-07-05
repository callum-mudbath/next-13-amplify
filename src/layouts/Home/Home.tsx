"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataComponent } from "@/components/DataComponent";

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
          Material UI - Next.js example using App Router in TypeScript
        </Typography>
        <DataComponent />
      </Box>
    </Container>
  );
}
