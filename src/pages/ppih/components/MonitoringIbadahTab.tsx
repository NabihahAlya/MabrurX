
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BellRing, Star, UserPlus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";


export const MonitoringIbadahTab = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedJamaah, setSelectedJamaah] = useState<any>(null);

  const checklistData = [
    { id: 'J001', name: 'Ahmad Subagja', rukun: 80, wajib: 100, rukunDetail: [{name: 'Ihram', done: true}, {name: 'Wukuf', done: true}, {name: 'Tawaf Ifadah', done: true}, {name: 'Sa\'i', done: true}, {name: 'Tahallul', done: false}] },
    { id: 'J002', name: 'Siti Nurbaya', rukun: 100, wajib: 100, rukunDetail: [{name: 'Ihram', done: true}, {name: 'Wukuf', done: true}, {name: 'Tawaf Ifadah', done: true}, {name: 'Sa\'i', done: true}, {name: 'Tahallul', done: true}] },
    { id: 'J003', name: 'Hasanudin', rukun: 60, wajib: 75, rukunDetail: [{name: 'Ihram', done: true}, {name: 'Wukuf', done: true}, {name: 'Tawaf Ifadah', done: true}, {name: 'Sa\'i', done: false}, {name: 'Tahallul', done: false}] },
  ];

  const notifikasi = [
      { icon: <UserPlus className="h-5 w-5 text-green-500" />, message: "Jamaah baru, Budi Santoso, telah ditambahkan ke Kloter 21." , time: "5 menit lalu" },
      { icon: <Star className="h-5 w-5 text-yellow-500" />, message: "Siti Nurbaya mendapatkan 10 Poin Mabrur untuk membantu jamaah lain." , time: "1 jam lalu" },
      { icon: <BellRing className="h-5 w-5 text-blue-500" />, message: "Jadwal lempar Jumroh Aqabah untuk Kloter 1-10 adalah 2 jam dari sekarang.", time: "2 jam lalu" },
  ];

  const handleOpenDetail = (jamaah: any) => {
    setSelectedJamaah(jamaah);
    setIsDetailOpen(true);
  };

  return (
    <>
      <div className="grid gap-6 auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Verifikasi Checklist Ibadah</CardTitle>
            <CardDescription>Monitor progress penyelesaian rukun dan wajib haji per jamaah.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama Jamaah</TableHead>
                  <TableHead>Progress Rukun</TableHead>
                  <TableHead>Progress Wajib</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {checklistData.map(item => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell><Progress value={item.rukun} className="w-full" /></TableCell>
                    <TableCell><Progress value={item.wajib} className="w-full" /></TableCell>
                    <TableCell className="text-right">
                        <Button variant="outline" size="sm" onClick={() => handleOpenDetail(item)}>Detail</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Feed Notifikasi Jadwal</CardTitle>
            <CardDescription>Informasi dan pengingat penting.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
              <div className="space-y-4">
                  {notifikasi.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                          <div className="p-2 bg-muted rounded-full">{item.icon}</div>
                          <div>
                              <p className="text-sm">{item.message}</p>
                              <p className="text-xs text-muted-foreground">{item.time}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </CardContent>
        </Card>
      </div>

      {/* Dialog untuk Detail Checklist */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Detail Checklist: {selectedJamaah?.name}</DialogTitle>
            <DialogDescription>Verifikasi manual penyelesaian rukun haji.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {selectedJamaah?.rukunDetail.map((rukun: any) => (
                <div key={rukun.name} className="flex items-center space-x-2">
                    <Checkbox id={rukun.name} checked={rukun.done} />
                    <Label htmlFor={rukun.name} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {rukun.name}
                    </Label>
                </div>
            ))}
          </div>
          <DialogFooter>
            <Button onClick={() => setIsDetailOpen(false)}>Simpan Perubahan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};