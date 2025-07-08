
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const MonitoringIbadahTab = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle>Verifikasi Checklist Ibadah</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Tabel atau daftar verifikasi rukun & wajib akan ditampilkan di sini.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Poin Mabrur & Catatan Akhlak</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Komponen untuk poin dan catatan akhlak akan ditampilkan di sini.</p>
        </CardContent>
      </Card>
      <Card className="col-span-1 lg:col-span-3">
        <CardHeader>
          <CardTitle>Feed Notifikasi Jadwal</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Daftar pengingat jadwal akan ditampilkan di sini.</p>
        </CardContent>
      </Card>
    </div>
  );
};