// import { Layout } from "@/components/layout/Layout"; // <-- 1. HAPUS BARIS INI
import { StatCard } from "./components/StatCard";
import { Users, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { RecentActivity } from "./components/RecentActivity";

export default function AdminDashboard() {
  const summaryData = {
    totalPilgrims: 150,
    successfulPilgrims: 120,
    incompletePilgrims: 25,
    failedPilgrims: 5,
  };

  return (
    // <Layout>  <-- 2. HAPUS TAG PEMBUKA INI
      <>
        <h1 className="text-3xl font-bold text-mabrurx-navy mb-6">
          Dashboard Admin
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Jamaah"
            value={summaryData.totalPilgrims}
            icon={<Users className="h-8 w-8 text-mabrurx-navy" />}
          />
          <StatCard
            title="Berhasil"
            value={summaryData.successfulPilgrims}
            icon={<CheckCircle className="h-8 w-8 text-green-500" />}
            linkTo="/admin/successful-pilgrims"
          />
          <StatCard
            title="Belum Lengkap"
            value={summaryData.incompletePilgrims}
            icon={<AlertCircle className="h-8 w-8 text-yellow-500" />}
            linkTo="/admin/incomplete-pilgrims"
          />
          <StatCard
            title="Gagal"
            value={summaryData.failedPilgrims}
            icon={<XCircle className="h-8 w-8 text-red-500" />}
            linkTo="/admin/incomplete-pilgrims"
          />
        </div>

        <div className="mt-8">
            <RecentActivity />
        </div>
      </>
    // </Layout> <-- 3. HAPUS TAG PENUTUP INI
  );
}
