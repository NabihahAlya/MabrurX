import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, PieChart, BarChart } from "lucide-react";

export const EvaluasiTab = () => {
    return (
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Rangkuman & Laporan</CardTitle>
                    <CardDescription>Visualisasi data dan unduh laporan.</CardDescription>
                </div>
                <Button><Download className="mr-2 h-4 w-4"/> Unduh Laporan PDF</Button>
            </CardHeader>
            <CardContent className="grid gap-6 sm:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2"><PieChart className="h-5 w-5"/> Tingkat Kepuasan</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="w-full h-48 bg-slate-200 rounded-md flex items-center justify-center">
                             <p className="text-muted-foreground text-sm">Grafik Kepuasan</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2"><BarChart className="h-5 w-5"/> Status Kesehatan Kloter</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="w-full h-48 bg-slate-200 rounded-md flex items-center justify-center">
                             <p className="text-muted-foreground text-sm">Grafik Kesehatan</p>
                        </div>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Indikator Kemabruran Jamaah</CardTitle>
                <CardDescription>Skor rata-rata berdasarkan penilaian ibadah dan akhlak.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center pt-8">
                <div className="relative h-40 w-40">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path className="text-slate-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                        <path className="text-green-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="85, 100" strokeDashoffset="-5"></path>
                    </svg>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className="text-4xl font-bold">85%</span>
                        <p className="text-xs text-muted-foreground">Sangat Baik</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
    );
  };