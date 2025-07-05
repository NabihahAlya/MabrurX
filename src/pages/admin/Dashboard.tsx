import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";

// Impor komponen-komponen kita
import { StatCard } from "./components/StatCard";
import { RecentActivity } from "./components/RecentActivity";
import { PilgrimsTable } from "./components/PilgrimsTable";
import { PilgrimsStatusAccordion } from "./components/PilgrimsStatusAccordion";

// Impor ikon
import { Users, CheckCircle, AlertCircle, XCircle } from "lucide-react";

// Komponen utama yang sekarang menjadi "wadah" dengan Tabs
export default function AdminDashboard() {
  const { toast } = useToast();

  // --- SEMUA DATA DUMMY KITA GABUNGKAN DI SINI ---

  // Data untuk Tab Rangkuman
  const summaryData = {
    totalPilgrims: 150,
    successfulPilgrims: 120,
    incompletePilgrims: 25,
    failedPilgrims: 5,
  };

  // Data untuk Tab Jamaah Berhasil
  const successfulPilgrims = [
    { id: 1, name: "Budi Santoso", passport: "A1234567", status: "Berhasil", completionDate: "2025-07-01" },
    { id: 2, name: "Citra Lestari", passport: "B8765432", status: "Berhasil", completionDate: "2025-07-01" },
    { id: 3, name: "Dewi Anggraini", passport: "C2345678", status: "Berhasil", completionDate: "2025-07-02" },
  ];

  // Data untuk Tab Jamaah Bermasalah
  const incompletePilgrims = [
    { id: 4, name: "Ahmad Yani", status: "Belum Lengkap", missingRituals: ["Lempar Jumroh Aqabah"] },
    { id: 5, name: "Siti Aminah", status: "Belum Lengkap", missingRituals: ["Tawaf Ifadah", "Sa'i"] },
    { id: 6, name: "Hasan Abdullah", status: "Gagal", missingRituals: ["Wukuf di Arafah", "Mabit di Muzdalifah"] },
  ];

  // State untuk form di Tab Broadcast
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendBroadcast = () => {
    console.log("Broadcast Sent:", { subject, message });
    toast({
      title: "Pesan Terkirim!",
      description: "Pesan broadcast telah berhasil dikirim ke semua jamaah.",
    });
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-mabrurx-navy mb-4">
        Manajemen Travel
      </h1>
      
      <Tabs defaultValue="rangkuman" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="rangkuman">Rangkuman</TabsTrigger>
          <TabsTrigger value="berhasil">Jamaah Berhasil</TabsTrigger>
          <TabsTrigger value="bermasalah">Jamaah Bermasalah</TabsTrigger>
          <TabsTrigger value="broadcast">Broadcast Pesan</TabsTrigger>
        </TabsList>

        {/* --- KONTEN TAB 1: RANGKUMAN --- */}
        <TabsContent value="rangkuman" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Jamaah"
              value={summaryData.totalPilgrims}
              icon={<Users className="h-8 w-8 text-mabrurx-navy" />}
            />
            <StatCard
              title="Berhasil"
              value={summaryData.successfulPilgrims}
              icon={<CheckCircle className="h-8 w-8 text-green-500" />}
            />
            <StatCard
              title="Belum Lengkap"
              value={summaryData.incompletePilgrims}
              icon={<AlertCircle className="h-8 w-8 text-yellow-500" />}
            />
            <StatCard
              title="Gagal"
              value={summaryData.failedPilgrims}
              icon={<XCircle className="h-8 w-8 text-red-500" />}
            />
          </div>
          <div className="mt-8">
            <RecentActivity />
          </div>
        </TabsContent>

        {/* --- KONTEN TAB 2: JAMAAH BERHASIL --- */}
        <TabsContent value="berhasil" className="mt-4">
           <Card>
            <CardHeader>
              <CardTitle>Daftar Jamaah Berhasil</CardTitle>
              <CardDescription>Berikut adalah daftar semua jamaah yang telah menyelesaikan seluruh ritual.</CardDescription>
            </CardHeader>
            <CardContent>
              <PilgrimsTable pilgrims={successfulPilgrims} />
            </CardContent>
          </Card>
        </TabsContent>

        {/* --- KONTEN TAB 3: JAMAAH BERMASALAH --- */}
        <TabsContent value="bermasalah" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Daftar Jamaah Belum Lengkap / Gagal</CardTitle>
              <CardDescription>Klik pada nama jamaah untuk melihat detail kekurangan ritualnya.</CardDescription>
            </CardHeader>
            <CardContent>
              <PilgrimsStatusAccordion pilgrims={incompletePilgrims} />
            </CardContent>
          </Card>
        </TabsContent>

        {/* --- KONTEN TAB 4: BROADCAST --- */}
        <TabsContent value="broadcast" className="mt-4">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Kirim Pesan Broadcast</CardTitle>
              <CardDescription>Pesan ini akan dikirimkan ke semua jamaah yang terdaftar di sistem.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Judul Pesan</Label>
                <Input id="subject" placeholder="Contoh: Jadwal Lempar Jumroh" value={subject} onChange={(e) => setSubject(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Isi Pesan</Label>
                <Textarea id="message" placeholder="Tulis pesan Anda di sini..." className="min-h-[150px]" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
            </CardContent>
            <CardFooter>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="ml-auto bg-mabrurx-gold hover:bg-mabrurx-gold/90" disabled={!subject || !message}>
                    Kirim Pesan
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Konfirmasi Pengiriman</AlertDialogTitle>
                    <AlertDialogDescription>
                      Apakah Anda yakin ingin mengirim pesan ini ke semua jamaah? Tindakan ini tidak dapat dibatalkan.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Batal</AlertDialogCancel>
                    <AlertDialogAction onClick={handleSendBroadcast}>Ya, Kirim Sekarang</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
