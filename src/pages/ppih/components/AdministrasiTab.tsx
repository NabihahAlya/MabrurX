
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const AdministrasiTab = () => {
    const dokumen = [
        { name: "Ahmad Subagja", paspor: "OK", visa: "OK", vaksin: "OK" },
        { name: "Siti Nurbaya", paspor: "OK", visa: "OK", vaksin: "OK" },
        { name: "Hasanudin", paspor: "OK", visa: "Belum", vaksin: "OK" },
    ];
  return (
    <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
            <CardHeader>
                <CardTitle>Validasi Dokumen Jamaah</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nama</TableHead>
                            <TableHead>Paspor</TableHead>
                            <TableHead>Visa</TableHead>
                            <TableHead>Vaksin</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {dokumen.map(d => (
                            <TableRow key={d.name}>
                                <TableCell>{d.name}</TableCell>
                                <TableCell><Badge className={d.paspor === "OK" ? "bg-green-500" : ""}>{d.paspor}</Badge></TableCell>
                                <TableCell><Badge variant={d.visa === "OK" ? "default" : "destructive"} className={d.visa === "OK" ? "bg-green-500" : ""}>{d.visa}</Badge></TableCell>
                                <TableCell><Badge className={d.vaksin === "OK" ? "bg-green-500" : ""}>{d.vaksin}</Badge></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Feedback & Rating Jamaah</CardTitle>
                <CardDescription>Rangkuman kepuasan jamaah.</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">Rating Keseluruhan</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400"/>
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400"/>
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400"/>
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400"/>
                    <Star className="w-8 h-8 text-yellow-400/50"/>
                </div>
                <p className="text-4xl font-bold mt-2">4.8</p>
            </CardContent>
        </Card>
    </div>
  );
};
