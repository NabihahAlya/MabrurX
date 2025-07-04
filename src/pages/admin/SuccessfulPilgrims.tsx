import { Layout } from "@/components/layout/Layout";
import { PilgrimsTable } from "./components/PilgrimsTable";

export default function SuccessfulPilgrims() {
  // Data dummy untuk jamaah yang berhasil
  const successfulPilgrims = [
    { id: 1, name: "Budi Santoso", passport: "A1234567", status: "Berhasil", completionDate: "2025-07-01" },
    { id: 2, name: "Citra Lestari", passport: "B8765432", status: "Berhasil", completionDate: "2025-07-01" },
    { id: 3, name: "Dewi Anggraini", passport: "C2345678", status: "Berhasil", completionDate: "2025-07-02" },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-mabrurx-navy mb-6">
          Daftar Jamaah Berhasil
        </h1>
        <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
          <PilgrimsTable pilgrims={successfulPilgrims} />
        </div>
      </div>
    </Layout>
  );
}