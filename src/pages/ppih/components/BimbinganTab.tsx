
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BookOpen, Video } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const BimbinganTab = () => {
    const [isNilaiOpen, setIsNilaiOpen] = useState(false);
    const [selectedAsesmen, setSelectedAsesmen] = useState<any>(null);
    const { toast } = useToast();

    const konten = [
        { title: "Video Manasik Tawaf", type: "Video", duration: "15 menit" },
        { title: "Modul Lengkap Sa'i", type: "Modul", duration: "30 menit baca" },
        { title: "Doa-doa di Arafah", type: "Video", duration: "25 menit" },
    ];
    const asesmen = [
        { name: "Ahmad Subagja", kloter: "21", skor: 85, status: "Lulus" },
        { name: "Siti Nurbaya", kloter: "21", skor: 92, status: "Lulus" },
        { name: "Hasanudin", kloter: "22", skor: 68, status: "Remedial" },
    ];

    const handleOpenNilai = (item: any) => {
        setSelectedAsesmen(item);
        setIsNilaiOpen(true);
    };

    const handleKontenClick = (title: string) => {
        toast({
            title: "Konten Dibuka",
            description: `Anda membuka konten "${title}".`,
        })
    }

  return (
    <>
        <div className="grid gap-6 lg:grid-cols-2 auto-rows-fr">
        <Card>
            <CardHeader>
            <CardTitle>Galeri Konten Bimbingan</CardTitle>
            <CardDescription>Akses video dan modul pembelajaran untuk jamaah.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {konten.map((item, index) => (
                    <Card key={index} className="cursor-pointer hover:border-primary transition-colors" onClick={() => handleKontenClick(item.title)}>
                        <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                            {item.type === "Video" ? <Video className="h-10 w-10 mb-2 text-primary"/> : <BookOpen className="h-10 w-10 mb-2 text-primary"/>}
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-xs text-muted-foreground">{item.duration}</p>
                        </CardContent>
                    </Card>
                ))}
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
            <CardTitle>Asesmen Ibadah Jamaah</CardTitle>
            <CardDescription>Hasil penilaian pemahaman manasik jamaah.</CardDescription>
            </CardHeader>
            <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nama</TableHead>
                        <TableHead>Skor</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Aksi</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {asesmen.map(item => (
                        <TableRow key={item.name}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.skor}</TableCell>
                            <TableCell><Badge variant={item.status === 'Lulus' ? 'default' : 'destructive'} className={item.status === 'Lulus' ? 'bg-green-500' : ''}>{item.status}</Badge></TableCell>
                            <TableCell className="text-right">
                                <Button variant="outline" size="sm" onClick={() => handleOpenNilai(item)}>Beri Nilai</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </CardContent>
        </Card>
        </div>

        {/* Dialog untuk Memberi Nilai */}
        <Dialog open={isNilaiOpen} onOpenChange={setIsNilaiOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Beri Nilai: {selectedAsesmen?.name}</DialogTitle>
                    <DialogDescription>Masukkan skor asesmen terbaru untuk jamaah ini.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="skor" className="text-right">Skor</Label>
                        <Input id="skor" defaultValue={selectedAsesmen?.skor} className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={() => setIsNilaiOpen(false)}>Simpan Nilai</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </>
  );
};
