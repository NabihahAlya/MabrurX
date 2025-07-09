
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhoneCall, Siren, BellPlus } from "lucide-react";


export const KesehatanTab = () => {
    const dataKesehatan = [
        { name: "Eko Prasetyo", tensi: "140/90", gula: 180, suhu: 37.8, status: "Perhatian Khusus" },
        { name: "Rina Wati", tensi: "120/80", gula: 110, suhu: 36.5, status: "Sehat" },
        { name: "Joko Susilo", tensi: "130/85", gula: 150, suhu: 37.1, status: "Stabil" },
    ];
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Rekap Data Kesehatan Harian</CardTitle>
          <CardDescription>Pemantauan kondisi kesehatan jamaah secara real-time.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nama</TableHead>
                        <TableHead>Tensi</TableHead>
                        <TableHead>Gula Darah</TableHead>
                        <TableHead>Suhu (°C)</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {dataKesehatan.map(item => (
                        <TableRow key={item.name}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.tensi}</TableCell>
                            <TableCell>{item.gula}</TableCell>
                            <TableCell>{item.suhu}</TableCell>
                            <TableCell>
                                <Badge variant={item.status === "Perhatian Khusus" ? "destructive" : "secondary"}>{item.status}</Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
      <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle>Alarm & Notifikasi Obat</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
                <p className="text-center text-sm text-muted-foreground">Kirim pengingat minum obat ke jamaah.</p>
                <Button className="w-full"><BellPlus className="mr-2 h-4 w-4"/> Kirim Notifikasi Massal</Button>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Kontak Darurat</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
                 <Button variant="destructive" className="w-full"><Siren className="mr-2 h-4 w-4"/> Panggil Tim Medis</Button>
                 <Button variant="outline" className="w-full"><PhoneCall className="mr-2 h-4 w-4"/> Hubungi Koordinator</Button>
            </CardContent>
        </Card>
      </div>
    </div>
  );
};