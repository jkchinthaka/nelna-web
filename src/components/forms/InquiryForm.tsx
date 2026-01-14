"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FormInputs = {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  volume: string;
  message: string;
};

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-8 text-center bg-leaf-50 rounded-2xl ring-1 ring-leaf-200"
      >
        <div className="size-16 rounded-full bg-leaf-100 flex items-center justify-center mb-4">
          <CheckCircle2 className="size-8 text-leaf-600" />
        </div>
        <h3 className="font-display text-2xl font-bold text-leaf-900 mb-2">Inquiry Received!</h3>
        <p className="text-leaf-700/80 mb-6 max-w-sm">
          Thank you for your interest in Nelna Mango. Our export team will review your requirements and respond within 24 hours.
        </p>
        <Button
          variant="secondary"
          onClick={() => setStatus("idle")}
          className="bg-white hover:bg-white/80"
        >
          Send Another Inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="John Doe"
            {...register("name", { required: true })}
            error={!!errors.name}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Work Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            error={!!errors.email}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            placeholder="Global Fruits Ltd."
            {...register("company", { required: true })}
            error={!!errors.company}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country">Target Market (Country)</Label>
          <Input
            id="country"
            placeholder="Dubai, UAE"
            {...register("country", { required: true })}
            error={!!errors.country}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="volume">Expected Volume (Monthly)</Label>
        <select
          id="volume"
          className={cn(
            "flex h-12 w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mango-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
            errors.volume && "border-red-500 focus-visible:ring-red-500"
          )}
          {...register("volume", { required: true })}
        >
          <option value="">Select volume...</option>
          <option value="Sample">Sample Request (Air Freight)</option>
          <option value="<1ton">Less than 1 Ton</option>
          <option value="1-5tons">1 - 5 Tons</option>
          <option value="5-10tons">5 - 10 Tons</option>
          <option value=">10tons">10+ Tons (Container Load)</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Requirements</Label>
        <textarea
          id="message"
          className={cn(
            "flex min-h-30 w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm ring-offset-background placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mango-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-y",
            errors.message && "border-red-500 focus-visible:ring-red-500"
          )}
          placeholder="Please specify preferred varieties, packaging requirements, or any certification needs..."
          {...register("message", { required: true })}
        />
      </div>

      <Button
        type="submit"
        className="w-full h-14 text-lg font-semibold shadow-lg shadow-mango-500/20"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <><Loader2 className="mr-2 size-5 animate-spin" /> Processing...</>
        ) : (
          <><Send className="mr-2 size-5" /> Submit Export Inquiry</>
        )}
      </Button>

      <AnimatePresence>
        {status === "error" ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200"
          >
            <AlertCircle className="size-4" />
            Something went wrong. Please try again.
          </motion.div>
        ) : null}
      </AnimatePresence>
    </form>
  );
}

function Label({ htmlFor, children }: { htmlFor: string, children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-xs font-semibold uppercase tracking-wider text-muted ml-1">
      {children}
    </label>
  );
}

function Input({ className, error, ...props }: React.ComponentProps<"input"> & { error?: boolean }) {
  return (
    <div className="relative">
      <input
        className={cn(
          "flex h-12 w-full rounded-xl border border-input bg-surface px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mango-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
          error && "border-red-500 focus-visible:ring-red-500",
          className
        )}
        {...props}
      />
      {error && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
          <AlertCircle className="size-4" />
        </div>
      )}
    </div>
  );
}
