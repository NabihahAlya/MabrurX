import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const LogistikTab = () => {
    const perjalanan = [
        { kloter: "JKS-01", maskapai: "Garuda Indonesia", status: "Tiba di Jeddah", waktu: "05/07/2025 23:00" },
        { kloter: "SUB-05", maskapai: "Saudia Airlines", status: "Menuju Madinah", waktu: "06/07/2025 08:00" },
        { kloter: "UPG-02", maskapai: "Lion Air", status: "Berangkat", waktu: "06/07/2025 11:00" },
    ];

  return (
    <div className="grid gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Status Perjalanan Kloter</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Kloter</TableHead>
                            <TableHead>Maskapai</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Perkiraan Waktu (Lokal)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {perjalanan.map(p => (
                            <TableRow key={p.kloter}>
                                <TableCell>{p.kloter}</TableCell>
                                <TableCell>{p.maskapai}</TableCell>
                                <TableCell><Badge>{p.status}</Badge></TableCell>
                                <TableCell>{p.waktu}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Peta Lokasi & Akomodasi</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="w-full h-64 bg-slate-200 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Tampilan Peta Interaktif Akan Muncul di Sini</p>
                </div>
            </CardContent>
        </Card>
    </div>
  );
};