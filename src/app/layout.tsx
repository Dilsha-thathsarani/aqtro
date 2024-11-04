"use client";

import { Inter } from "next/font/google";

import { SidebarProvider } from "../components/ui/SidebarProvider";
import { Toaster } from "../components/ui/toaster";
import { TooltipProvider } from "../components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/ui/Layout";
import Index from "./page";
import NewApp from "@/components/ui/NewApp";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <SidebarProvider>
              <Layout>{children}</Layout>
            </SidebarProvider>
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
