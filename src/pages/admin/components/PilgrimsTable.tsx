import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Definisikan tipe data untuk satu jamaah
interface Pilgrim {
  id: number;
  name: string;
  passport: string;
  status: "Berhasil" | "Belum Lengkap" | "Gagal";
  completionDate?: string;
}

interface PilgrimsTableProps {
  pilgrims: Pilgrim[];
}

export function PilgrimsTable({ pilgrims }: PilgrimsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nama Jamaah</TableHead>
          <TableHead>No. Paspor</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Tgl. Selesai</TableHead>
          <TableHead className="text-right">Aksi</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pilgrims.map((pilgrim) => (
          <TableRow key={pilgrim.id}>
            <TableCell className="font-medium">{pilgrim.name}</TableCell>
            <TableCell>{pilgrim.passport}</TableCell>
            <TableCell>
              <Badge variant={pilgrim.status === 'Berhasil' ? 'default' : 'destructive'} 
                     className={pilgrim.status === 'Berhasil' ? 'bg-green-500' : ''}>
                {pilgrim.status}
              </Badge>
            </TableCell>
            <TableCell>{pilgrim.completionDate || "-"}</TableCell>
            <TableCell className="text-right">
              <Button variant="outline" size="sm">Lihat Detail</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}