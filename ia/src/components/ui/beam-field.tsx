'use client';

import { motion } from "framer-motion";

export function BeamField() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-xl border border-white/5 bg-transparent">
      {/* Light grid lines overlaid subtly */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Scanning scanning line/beam */}
      <motion.div 
        className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
        animate={{ left: ["8%", "92%", "40%", "8%"] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} 
      />

      {/* Second reverse scanning beam */}
      <motion.div 
        className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-red-400 to-transparent shadow-[0_0_15px_rgba(239,68,68,0.5)]" 
        animate={{ right: ["8%", "92%", "30%", "8%"] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
      />

      {/* Glowing scanning laser lines going horizontally */}
      <motion.div 
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_10px_rgba(239,68,68,0.4)]"
        animate={{ top: ["5%", "95%", "15%", "5%"] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
      />
    </div>
  );
}

export default BeamField;
