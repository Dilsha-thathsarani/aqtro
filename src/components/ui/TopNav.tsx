"use client";

import {
  Search,
  Bell,
  Settings,
  User,
  Calendar,
  CheckSquare,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function TopNav() {
  const router = useRouter();
  return (
    <div className="border-b bg-gray-100">
      <div className="flex h-16 items-center px-4 bg-white border-b">
        <div className="ml-8 flex space-x-2">
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <Calendar className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <CheckSquare className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <Users className="h-5 w-5" />
          </Button>
        </div>
        <div className="mx-auto text-xl font-semibold text-lime-500">aqtro</div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="flex space-x-8">
          <Button
            variant="ghost"
            className="hover:bg-transparent hover:text-lime-500 text-lime-500"
            onClick={() => router.push("/")}
          >
            Activity
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-transparent hover:text-lime-500"
          >
            Contacts
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-transparent hover:text-lime-500"
          >
            Companies
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-transparent hover:text-lime-500"
          >
            Deals
          </Button>
        </div>
      </div>
    </div>
  );
}
