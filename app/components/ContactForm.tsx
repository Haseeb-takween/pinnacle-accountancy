"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
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
  hearAboutUs: z.string().optional(),
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

const fieldClass =
  "h-11 w-full rounded-[0.3125rem] border border-border bg-white px-3.5 text-sm text-foreground shadow-none placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20";

const selectTriggerClass =
  "h-11 w-full min-w-0 rounded-[0.3125rem] border border-border bg-white px-3.5 text-sm shadow-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 data-placeholder:text-muted-foreground/70";

export function ContactForm({ defaultEnquiry }: { defaultEnquiry?: string }) {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    trigger,
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      enquiryType: defaultEnquiry ?? "",
      hearAboutUs: "",
    },
  });

  async function onSubmit(data: FormValues) {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, formType: "contact" }),
    });
    if (res.ok) {
      setSubmittedEmail(data.email);
      reset();
    } else {
      toast.error("Something went wrong. Please try again or call us on 020 7123 4567.");
    }
  }

  if (submittedEmail) {
    return (
      <div className="py-12 text-center" role="alert" aria-live="polite">
        <div className="w-14 h-14 rounded-full bg-[#E4EEE8] flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 style={{ fontFamily: "var(--font-display)" }} className="font-semibold text-xl mb-2">Enquiry received</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for getting in touch. A confirmation email has been sent to{" "}
          <span className="font-medium text-foreground">{submittedEmail}</span>.
          We aim to respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="fullName" className="text-foreground">Full name <span className="text-primary">*</span></Label>
          <Input
            id="fullName"
            {...register("fullName")}
            className={fieldClass}
            placeholder="Jane Smith"
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && <p className="text-destructive text-xs" role="alert">{errors.fullName.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-foreground">Email address <span className="text-primary">*</span></Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className={fieldClass}
            placeholder="jane@example.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-destructive text-xs" role="alert">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-foreground">Phone number <span className="text-primary">*</span></Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            className={fieldClass}
            placeholder="020 7000 0000"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="text-destructive text-xs" role="alert">{errors.phone.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="enquiryType" className="text-foreground">Type of enquiry <span className="text-primary">*</span></Label>
          <Select
            defaultValue={defaultEnquiry}
            onValueChange={(v) => {
              setValue("enquiryType", v ?? "", { shouldValidate: true });
              void trigger("enquiryType");
            }}
          >
            <SelectTrigger id="enquiryType" className={selectTriggerClass} aria-invalid={!!errors.enquiryType}>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="rounded-[0.3125rem] border border-border bg-white shadow-lg">
              {enquiryTypes.map((t) => (
                <SelectItem
                  key={t}
                  value={t}
                  className="rounded-sm focus:bg-[#E4EEE8] focus:text-foreground"
                >
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.enquiryType && <p className="text-destructive text-xs" role="alert">{errors.enquiryType.message}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message" className="text-foreground">Message <span className="text-primary">*</span></Label>
        <Textarea
          id="message"
          {...register("message")}
          className="min-h-[120px] w-full rounded-[0.3125rem] border border-border bg-white px-3.5 py-3 text-sm text-foreground shadow-none placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
          rows={5}
          placeholder="Tell us about your situation and what you need help with..."
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-destructive text-xs" role="alert">{errors.message.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="hearAboutUs" className="text-foreground">How did you hear about us?</Label>
        <Input
          id="hearAboutUs"
          {...register("hearAboutUs")}
          className={fieldClass}
          placeholder="Google, referral, LinkedIn…"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto h-11 bg-primary hover:bg-[#0F4732] text-white px-8 rounded-[0.3125rem]"
        >
          {isSubmitting ? "Sending…" : "Send enquiry"}
        </Button>
        <p className="text-xs text-muted-foreground">
          We aim to respond within one business day.
        </p>
      </div>
    </form>
  );
}
