import { NavLink } from "react-router-dom";
import { Home, Users, UserCheck, Send } from "lucide-react";
import { cn } from "@/lib/utils";

// Komponen untuk setiap item link di sidebar
function SidebarLink({ to, icon, children }: { to: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          isActive && "bg-muted text-primary"
        )
      }
    >
      {icon}
      {children}
    </NavLink>
  );
}

// Komponen utama Sidebar Admin
export function AdminSidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <span className="text-mabrurx-navy">MabrurX Admin</span>
          </NavLink>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <SidebarLink to="/admin/dashboard" icon={<Home className="h-4 w-4" />}>
              Dashboard
            </SidebarLink>
            <SidebarLink to="/admin/successful-pilgrims" icon={<UserCheck className="h-4 w-4" />}>
              Jamaah Berhasil
            </SidebarLink>
            <SidebarLink to="/admin/incomplete-pilgrims" icon={<Users className="h-4 w-4" />}>
              Jamaah Bermasalah
            </SidebarLink>
            <SidebarLink to="/admin/broadcast" icon={<Send className="h-4 w-4" />}>
              Broadcast
            </SidebarLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
