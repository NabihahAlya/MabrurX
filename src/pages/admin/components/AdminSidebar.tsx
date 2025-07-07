import { NavLink } from "react-router-dom";
import { LayoutGrid } from "lucide-react"; // Mengganti ikon menjadi lebih generik
import { cn } from "@/lib/utils";

// Komponen untuk setiap item link di sidebar
function SidebarLink({ to, icon, children }: { to: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      // 'end' prop memastikan link hanya aktif jika path-nya sama persis
      end 
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          isActive && "bg-muted text-primary" // Style untuk link yang aktif
        )
      }
    >
      {icon}
      {children}
    </NavLink>
  );
}

// Komponen utama Sidebar Admin yang sudah disederhanakan
export function AdminSidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            {/* Anda bisa mengganti ini dengan logo jika ada */}
            <span className="text-mabrurx-navy">MabrurX Admin</span>
          </NavLink>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {/* --- HANYA SATU LINK MENU UTAMA --- */}
            <SidebarLink to="/admin/dashboard" icon={<LayoutGrid className="h-4 w-4" />}>
              Manajemen Travel
            </SidebarLink>
            {/* Link-link lain seperti Jamaah Berhasil, Broadcast, dll. sudah dihapus */}
          </nav>
        </div>
      </div>
    </div>
  );
}
