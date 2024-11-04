import { Card, CardContent } from "@/components/ui/Card";
import { Activity, Users } from "lucide-react";
import { Overview } from "@/components/ui/Overview";
import { RecentSales } from "@/components/ui/RecentSales";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1">
        <main className="p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium">Total Workflows</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">250</div>
                  <p className="text-xs text-gray-500">135 active workflows</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium">Errors</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">+35</div>
                  <p className="text-xs text-gray-500">+10% from last month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium">Employees</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">35</div>
                  <p className="text-xs text-gray-500">32 currently active</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
            <Card className="col-span-4 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Overview</h3>
                </div>
                <Overview />
              </CardContent>
            </Card>

            <Card className="col-span-3 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Recent Sales</h3>
                </div>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
