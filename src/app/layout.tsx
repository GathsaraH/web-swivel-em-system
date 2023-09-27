"use client";
import TopBar from "@/components/TopBar/TopBar";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  flexGrow: 1,
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RootStack spacing={2}>
        <TopBar />
        <div>{children}</div>
      </RootStack>
    </html>
  );
}
