import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 max-w-md w-full text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 p-4 rounded-full">
            <AlertTriangle className="w-8 h-8" />
          </div>
        </div>

        <h1 className="text-2xl font-semibold mb-3">We’ll Be Back Soon</h1>
        <p className="text-sm text-white/80 mb-6">
          Our system is currently undergoing scheduled maintenance.
          We’re working to improve your experience and will be back shortly.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 transition rounded-xl py-2"
          >
            <RefreshCcw className="w-4 h-4" />
            Refresh Page
          </button>

          <p className="text-xs text-white/60">
            Thank you for your patience.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
