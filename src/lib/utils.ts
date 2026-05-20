import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn - מאחד class names עם תמיכה ב-Tailwind merge
 * שימוש: cn("px-2", isActive && "bg-blue-500", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * formatDate - פורמט תאריך בעברית
 */
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("he-IL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * slugify - יצירת slug ידידותי ל-URL מטקסט עברי
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\u0590-\u05FFa-z0-9\-]/g, "")
    .replace(/--+/g, "-");
}
