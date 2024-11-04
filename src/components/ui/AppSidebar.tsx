"use client";

import { Building2, ChevronLeft, ChevronRight, FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "./SidebarProvider";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function AppSidebar() {
  const { isOpen, toggle } = useSidebar();
  const router = useRouter();

  return (
    <div
      className={cn(
        "relative pb-12 border-r bg-background transition-all duration-300",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-3 top-6 z-10 rounded-full border bg-background shadow-md"
        onClick={toggle}
      >
        {isOpen ? (
          <ChevronLeft className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </Button>

      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2
            className={cn(
              "mb-2 px-4 text-lg font-semibold transition-all",
              isOpen ? "text-left" : "text-center text-sm"
            )}
          >
            {isOpen && "Workspaces"}
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start",
                !isOpen && "justify-center px-2"
              )}
            >
              <FileStack className="h-4 w-4 mr-2" />
              {isOpen && "Project Management"}
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="px-3 py-2">
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => router.push("/new-app")}
              >
                <Building2 className="h-4 w-4 mr-2" />
                Create a workspace
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
