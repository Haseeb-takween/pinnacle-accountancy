"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  enquiryType: z.string().min(1, "Please select an enquiry type"),
  message: z.string().min(10, "Please tell us a bit more (at least 10 characters)"),
});

type FormValues = z.infer<typeof schema>;

const enquiryTypes = [
  "Self-Assessment",
  "Business Accounting",
  "Payroll",
  "VAT",
  "Bookkeeping",
  "Company Formation",
  "Other",
];

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultEnquiry?: string;
}

export function ConsultationDialog({ open, onOpenChange, defaultEnquiry }: ConsultationDialogProps) {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
  const {
    register, handleSubmit, formState: { errors, isSubmitting }, setValue, reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormValues) {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, formType: "consultation" }),
    });
    if (res.ok) {
      setSubmittedEmail(data.email);
      reset();
    } else {
      toast.error("Something went wrong. Please try again or call us on 020 7123 4567.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setSubmittedEmail(null); }}>
      <DialogContent className="sm:max-w-md bg-white text-foreground border border-border shadow-xl">
        <DialogHeader className="pr-8">
          <DialogTitle style={{ fontFamily: "var(--font-display)" }} className="text-xl text-foreground">
            Book a free 30-minute consultation
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Tell us a bit about what you need. We&apos;ll be in touch within one business day.
          </DialogDescription>
        </DialogHeader>

        {submittedEmail ? (
          <div className="py-8 text-center" role="alert" aria-live="polite">
            <div className="w-12 h-12 rounded-full bg-[#E4EEE8] flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)" }} className="font-semibold text-lg mb-2">Consultation booked</h3>
            <p className="text-muted-foreground text-sm mb-5">
              We&apos;ve received your free consultation request. A confirmation email has been sent to{" "}
              <span className="font-medium text-foreground">{submittedEmail}</span>.
              We&apos;ll be in touch within one business day to arrange a time.
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={() => setSubmittedEmail(null)}
              className="px-6"
            >
              Book another consultation
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <div className="space-y-1.5">
              <Label htmlFor="d-fullName" className="text-foreground">Full name <span className="text-primary">*</span></Label>
              <Input
                id="d-fullName"
                {...register("fullName")}
                className="h-11 w-full rounded-[0.3125rem] border border-border bg-white px-3.5 text-sm focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                placeholder="Jane Smith"
              />
              {errors.fullName && <p className="text-destructive text-xs" role="alert">{errors.fullName.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="d-email" className="text-foreground">Email <span className="text-primary">*</span></Label>
              <Input
                id="d-email"
                type="email"
                {...register("email")}
                className="h-11 w-full rounded-[0.3125rem] border border-border bg-white px-3.5 text-sm focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                placeholder="jane@example.com"
              />
              {errors.email && <p className="text-destructive text-xs" role="alert">{errors.email.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="d-phone" className="text-foreground">Phone <span className="text-primary">*</span></Label>
              <Input
                id="d-phone"
                type="tel"
                {...register("phone")}
                className="h-11 w-full rounded-[0.3125rem] border border-border bg-white px-3.5 text-sm focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                placeholder="020 7000 0000"
              />
              {errors.phone && <p className="text-destructive text-xs" role="alert">{errors.phone.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="d-enquiryType" className="text-foreground">Type of enquiry <span className="text-primary">*</span></Label>
              <Select
                defaultValue={defaultEnquiry}
                onValueChange={(v) => setValue("enquiryType", v ?? "", { shouldValidate: true })}
              >
                <SelectTrigger
                  id="d-enquiryType"
                  className="h-11 w-full min-w-0 rounded-[0.3125rem] border border-border bg-white px-3.5 text-sm focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 data-placeholder:text-muted-foreground/70"
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="rounded-[0.3125rem] border border-border bg-white shadow-lg">
                  {enquiryTypes.map((t) => (
                    <SelectItem key={t} value={t} className="rounded-sm focus:bg-[#E4EEE8] focus:text-foreground">
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.enquiryType && <p className="text-destructive text-xs" role="alert">{errors.enquiryType.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="d-message" className="text-foreground">Message <span className="text-primary">*</span></Label>
              <Textarea
                id="d-message"
                {...register("message")}
                className="min-h-[96px] w-full rounded-[0.3125rem] border border-border bg-white px-3.5 py-3 text-sm focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                rows={3}
                placeholder="Tell us a bit about what you need..."
              />
              {errors.message && <p className="text-destructive text-xs" role="alert">{errors.message.message}</p>}
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending…" : "Book free consultation"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
