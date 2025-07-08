import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ScrollText, ShieldCheck, HeartPulse, Truck, FileArchive, MessageSquareWarning, BarChart3, PanelLeft } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// Komponen Sidebar untuk Desktop
function PpihSidebar() {
  const navItems = [
    { to: "/ppih/dashboard", icon: <ScrollText className="h-5 w-5" />, label: "Monitoring Ibadah" },
    { to: "/ppih/dashboard?tab=bimbingan", icon: <ShieldCheck className="h-5 w-5" />, label: "Bimbingan" },
    { to: "/ppih/dashboard?tab=kesehatan", icon: <HeartPulse className="h-5 w-5" />, label: "Kesehatan" },
    { to: "/ppih/dashboard?tab=logistik", icon: <Truck className="h-5 w-5" />, label: "Logistik" },
    { to: "/ppih/dashboard?tab=administrasi", icon: <FileArchive className="h-5 w-5" />, label: "Administrasi" },
    { to: "/ppih/dashboard?tab=pengaduan", icon: <MessageSquareWarning className="h-5 w-5" />, label: "Pengaduan" },
    { to: "/ppih/dashboard?tab=evaluasi", icon: <BarChart3 className="h-5 w-5" />, label: "Evaluasi" },
  ];

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <span className="text-lg">Dashboard PPIH</span>
          </NavLink>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {/* Navigasi di sini bisa dibuat lebih dinamis nanti */}
             <NavLink
              to="/ppih/dashboard"
              end
              className={({ isActive }) => cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", isActive && "bg-muted text-primary")}>
              Dashboard Utama
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

// Komponen Header dengan Navigasi Mobile
function PpihHeader() {
    return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                 <NavLink to="/ppih/dashboard" className="flex items-center gap-2 text-lg font-semibold mb-4">
                    Dashboard PPIH
                 </NavLink>
                 {/* Navigasi mobile bisa ditambahkan di sini mengikuti item di sidebar */}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            {/* Bisa ditambahkan search bar atau elemen header lain */}
          </div>
        </header>
    )
}


export default function PpihLayout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <PpihSidebar />
      <div className="flex flex-col">
        <PpihHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}