import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("exitShown")) {
      setShown(true);
      return;
    }
    let done = false;
    const trigger = () => {
      if (done) return;
      done = true;
      setOpen(true);
      setShown(true);
      sessionStorage.setItem("exitShown", "1");
      cleanup();
    };
    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) trigger();
    };
    const t = window.setTimeout(trigger, 30000);
    const cleanup = () => {
      window.clearTimeout(t);
      document.removeEventListener("mouseout", onMouseOut);
    };
    document.addEventListener("mouseout", onMouseOut);
    return cleanup;
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-[hsl(var(--navy)/0.6)] backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full bg-white rounded-xl overflow-hidden border border-[hsl(var(--border-warm))] shadow-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 rounded-lg inline-flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="bg-[hsl(var(--navy))] px-8 py-7">
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--amber))]/15 inline-flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-[hsl(var(--amber))]" />
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight leading-snug">
                Free resources to help you scale smarter
              </h3>
            </div>
            <div className="bg-[hsl(var(--canvas))] px-8 py-7">
              <p className="text-sm leading-relaxed text-[hsl(var(--body-text))] mb-6">
                Get practical guides, templates, and checklists built for service
                businesses growing past $2M.
              </p>
              <Link
                to="/resources"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Explore Free Resources
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
