"use client";
import { Poppins } from "next/font/google";
import { styled } from "@mui/material/styles";
import { ReduxProvider } from "../redux/provider";
import { Box, Stack } from "@mui/material";
import TopBar from "@/components/TopBar/TopBar";
const popins = Poppins({ subsets: ["latin"], weight: "400" });
const RootStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  flexGrow: 1,
}));
const RootBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
}));
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <RootStack spacing={2}>
          <TopBar />
          <RootBox>
            <ReduxProvider>{children}</ReduxProvider>
          </RootBox>
        </RootStack>
      </body>
    </html>
  );
}
