import { Outlet } from "react-router-dom";
import { AdminSidebar } from "./components/AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <AdminSidebar />
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-gray-50/50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
