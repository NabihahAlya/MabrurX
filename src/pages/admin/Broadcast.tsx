import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";

export default function Broadcast() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSendBroadcast = () => {
    // Logika untuk mengirim broadcast
    console.log("Broadcast Sent:", { subject, message });
    toast({
      title: "Pesan Terkirim!",
      description: "Pesan broadcast telah berhasil dikirim ke semua jamaah.",
    });
    // Reset form
    setSubject("");
    setMessage("");
  };

  return (
    <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-mabrurx-navy mb-6">
          Kirim Pesan Broadcast
        </h1>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Buat Pesan Baru</CardTitle>
            <CardDescription>
              Pesan ini akan dikirimkan ke semua jamaah yang terdaftar di sistem.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Judul Pesan</Label>
              <Input 
                id="subject" 
                placeholder="Contoh: Jadwal Lempar Jumroh"
                value={subject}
                onChange={(e) => setSubject(e.target.value)} 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Isi Pesan</Label>
              <Textarea 
                id="message" 
                placeholder="Tulis pesan Anda di sini..." 
                className="min-h-[150px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button 
                  className="ml-auto bg-mabrurx-gold hover:bg-mabrurx-gold/90"
                  disabled={!subject || !message}
                >
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
                  <AlertDialogAction onClick={handleSendBroadcast}>
                    Ya, Kirim Sekarang
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>
      </div>
  );
}
