"use client";

import { AppSidebar } from "./AppSidebar";
import { TopNav } from "./TopNav";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-background">
      <AppSidebar />
      <div className="flex-1">
        <TopNav />
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
