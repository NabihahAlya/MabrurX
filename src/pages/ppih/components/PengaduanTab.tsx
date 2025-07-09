
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const PengaduanTab = () => {
    const [selectedTiket, setSelectedTiket] = useState<any>(null);
    const pengaduan = [
        { id: "T001", pelapor: "Hasanudin", kategori: "Katering", status: "Selesai", detail: "Makanan siang hari ini tidak sesuai dengan jadwal." },
        { id: "T002", pelapor: "Ahmad Subagja", kategori: "Akomodasi", status: "Diproses", detail: "AC di kamar 301 tidak dingin." },
        { id: "T003", pelapor: "Rina Wati", kategori: "Transportasi", status: "Baru", detail: "Bus untuk ziarah terlambat 30 menit." },
    ];
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Daftar Laporan Pengaduan</CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID Tiket</TableHead>
                        <TableHead>Pelapor</TableHead>
                        <TableHead>Kategori</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Aksi</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {pengaduan.map(p => (
                        <TableRow key={p.id}>
                            <TableCell>{p.id}</TableCell>
                            <TableCell>{p.pelapor}</TableCell>
                            <TableCell>{p.kategori}</TableCell>
                            <TableCell><Badge>{p.status}</Badge></TableCell>
                            <TableCell className="text-right">
                                <Button variant="outline" size="sm" onClick={() => setSelectedTiket(p)}>Lihat Detail</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
      <Card>
          <CardHeader>
              <CardTitle>Detail Tiket</CardTitle>
              <CardDescription>{selectedTiket ? `Tiket ${selectedTiket.id}` : "Pilih tiket untuk melihat detail."}</CardDescription>
          </CardHeader>
          <CardContent>
              {selectedTiket ? (
                  <div className="space-y-4">
                      <div>
                          <p className="text-sm font-medium">Pelapor</p>
                          <p className="text-muted-foreground">{selectedTiket.pelapor}</p>
                      </div>
                       <div>
                          <p className="text-sm font-medium">Masalah</p>
                          <p className="text-muted-foreground">{selectedTiket.detail}</p>
                      </div>
                      <Button className="w-full">Tandai Selesai</Button>
                  </div>
              ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                      <p>Detail akan muncul di sini.</p>
                  </div>
              )}
          </CardContent>
      </Card>
    </div>
  );
};
