import { Clock } from "lucide-react";

export function UrgencyBar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-alert text-alert-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 text-sm font-semibold">
        <Clock className="h-4 w-4" />
        <span>Oferta por tempo Limitado!</span>
      </div>
    </div>
  );
}
