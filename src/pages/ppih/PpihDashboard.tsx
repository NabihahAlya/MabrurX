
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Impor komponen-komponen untuk setiap Tab
import { MonitoringIbadahTab } from "./components/MonitoringIbadahTab";
import { BimbinganTab } from "./components/BimbinganTab";
import { KesehatanTab } from "./components/KesehatanTab";
import { LogistikTab } from "./components/LogistikTab";
import { AdministrasiTab } from "./components/AdministrasiTab";
import { PengaduanTab } from "./components/PengaduanTab";
import { EvaluasiTab } from "./components/EvaluasiTab";

export default function PpihDashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "monitoring";

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  const tabs = [
    { value: "monitoring", label: "Monitoring Ibadah", Component: MonitoringIbadahTab },
    { value: "bimbingan", label: "Bimbingan & Pembinaan", Component: BimbinganTab },
    { value: "kesehatan", label: "Manajemen Kesehatan", Component: KesehatanTab },
    { value: "logistik", label: "Koordinasi & Logistik", Component: LogistikTab },
    { value: "administrasi", label: "Administrasi", Component: AdministrasiTab },
    { value: "pengaduan", label: "Layanan Pengaduan", Component: PengaduanTab },
    { value: "evaluasi", label: "Evaluasi & Pelaporan", Component: EvaluasiTab },
  ];

  return (
    <Tabs 
      value={activeTab} 
      onValueChange={handleTabChange} 
      className="w-full"
    >
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <TabsList className="p-2">
          {tabs.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {tabs.map(tab => (
        <TabsContent key={tab.value} value={tab.value} className="mt-4">
          <tab.Component />
        </TabsContent>
      ))}
    </Tabs>
  );
}