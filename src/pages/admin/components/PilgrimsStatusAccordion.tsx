import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface IncompletePilgrim {
  id: number;
  name: string;
  status: "Belum Lengkap" | "Gagal";
  missingRituals: string[];
}

interface PilgrimsStatusAccordionProps {
  pilgrims: IncompletePilgrim[];
}

export function PilgrimsStatusAccordion({ pilgrims }: PilgrimsStatusAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {pilgrims.map((pilgrim) => (
        <AccordionItem key={pilgrim.id} value={`item-${pilgrim.id}`} className="border rounded-lg px-4 bg-white">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-4">
              <span className="font-medium">{pilgrim.name}</span>
              <Badge variant={pilgrim.status === 'Belum Lengkap' ? 'outline' : 'destructive'}
                     className={pilgrim.status === 'Belum Lengkap' ? 'text-yellow-600 border-yellow-600' : ''}>
                {pilgrim.status}
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pl-2">
              <h4 className="font-semibold mb-2">Detail Kekurangan:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {pilgrim.missingRituals.map((ritual, index) => (
                  <li key={index}>{ritual}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-2">
                <Button size="sm">Kirim Notifikasi</Button>
                <Button size="sm" variant="outline">Tandai Selesai</Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}