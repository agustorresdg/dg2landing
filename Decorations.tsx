import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FloatingBadgeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FloatingBadge({ children, className = "", delay = 0 }: FloatingBadgeProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute rounded-full border-2 border-ink bg-paper px-4 py-2 text-sm font-black uppercase shadow-sticker ${className}`}
      animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`absolute text-4xl font-black text-ink ${className}`}
      animate={{ scale: [1, 1.18, 1], rotate: [0, 12, 0] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
    >
      ✦
    </motion.span>
  );
}

export function PawPrints({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex gap-3 text-xl ${className}`}>
      <span>🐾</span>
      <span className="translate-y-3">🐾</span>
      <span>🐾</span>
      <span className="translate-y-3">🐾</span>
    </div>
  );
}
