import { motion, type Variants } from "framer-motion";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { maintenanceCopy } from "../constants/maintenanceContent";
import { usePageReload } from "../hooks/usePageReload";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function MaintenanceCard() {
  const handleReload = usePageReload();

  return (
    <motion.section
      aria-labelledby="maintenance-title"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="w-full max-w-xl rounded-3xl border border-white/15 bg-white/10 p-8 text-center shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-10"
    >
      <div className="mb-6 flex justify-center">
        <div className="rounded-full bg-white/15 p-4 text-white/95 ring-1 ring-white/15">
          <AlertTriangle className="h-8 w-8" aria-hidden="true" />
        </div>
      </div>

      <h1 id="maintenance-title" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {maintenanceCopy.title}
      </h1>

      <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
        {maintenanceCopy.description}
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <button
          type="button"
          onClick={handleReload}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/15 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          <RefreshCcw className="h-4 w-4" aria-hidden="true" />
          {maintenanceCopy.actionLabel}
        </button>

        <p className="text-sm text-white/65">{maintenanceCopy.note}</p>
      </div>
    </motion.section>
  );
}
