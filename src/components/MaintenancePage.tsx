import { MaintenanceCard } from "./MaintenanceCard";

export function MaintenancePage() {
  return (
    <main className="min-h-dvh bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_38%),linear-gradient(135deg,_#0f172a,_#111827_55%,_#020617)] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100dvh-5rem)] max-w-7xl items-center justify-center">
        <MaintenanceCard />
      </div>
    </main>
  );
}
