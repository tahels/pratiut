import { ShieldCheck, FileText, Wrench, BookOpen } from "lucide-react";

/**
 * דף בית - PLACEHOLDER
 * דף זה הוא מקומי בלבד ויוחלף בעמוד הסופי לאחר קבלת התיאור והסברים לאתר.
 */
export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* רקע גרדיאנט עדין */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-bl from-accent/5 via-background to-primary/5"
      />
      <div aria-hidden className="absolute inset-0 bg-dots opacity-40" />

      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20">
        {/* Status badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-foreground">
          <span className="size-2 animate-pulse rounded-full bg-accent" />
          הפרויקט בשלב הקמה
        </div>

        {/* כותרת ראשית */}
        <h1 className="mb-6 max-w-3xl text-center font-display text-5xl font-bold tracking-tight md:text-7xl">
          <span className="text-primary">פרטיות</span>
          <span className="block text-2xl font-normal text-muted-foreground md:text-3xl mt-3">
            ייעוץ DPO והגנת פרטיות
          </span>
        </h1>

        <p className="mb-12 max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
          התשתית הטכנית מוכנה. תוכן האתר והעיצוב הסופיים יוטמעו לאחר אישור התיאור והסברי האתר.
        </p>

        {/* כרטיסי תכולה עתידית */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="size-6" />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <footer className="mt-20 text-center text-sm text-muted-foreground">
          <p className="font-mono">
            Next.js 15 · TypeScript · Tailwind · RTL
          </p>
          <p className="mt-2">
            תחת מטריית{" "}
            <a
              href="https://webcommerce.co.il"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Webcommerce
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}

const features = [
  {
    icon: ShieldCheck,
    title: "ייעוץ DPO",
    description: "ליווי מקצועי בעמידה בחוק הגנת הפרטיות ותיקון 13",
  },
  {
    icon: FileText,
    title: "סקרי ציות",
    description: "בחינת מצב הארגון ותכנית עבודה לציות מלא",
  },
  {
    icon: Wrench,
    title: "כלים אינטראקטיביים",
    description: "הערכת בשלות, מחוללי מדיניות ורשימות תיוג",
  },
  {
    icon: BookOpen,
    title: "מאגר ידע",
    description: "מאמרים, מקרי בוחן ומדריכים בתחום הפרטיות",
  },
];
