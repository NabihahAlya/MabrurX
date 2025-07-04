import { Layout } from "@/components/layout/Layout";
import { PilgrimsStatusAccordion } from "./components/PilgrimsStatusAccordion";

export default function IncompletePilgrims() {
  // Data dummy untuk jamaah yang bermasalah
  const incompletePilgrims = [
    { id: 4, name: "Ahmad Yani", status: "Belum Lengkap", missingRituals: ["Lempar Jumroh Aqabah"] },
    { id: 5, name: "Siti Aminah", status: "Belum Lengkap", missingRituals: ["Tawaf Ifadah", "Sa'i"] },
    { id: 6, name: "Hasan Abdullah", status: "Gagal", missingRituals: ["Wukuf di Arafah", "Mabit di Muzdalifah"] },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-mabrurx-navy mb-6">
          Daftar Jamaah Belum Lengkap / Gagal
        </h1>
        <PilgrimsStatusAccordion pilgrims={incompletePilgrims} />
      </div>
    </Layout>
  );
}