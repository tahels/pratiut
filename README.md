# פרטיות (Pratiut)

> אתר ייעוץ DPO והגנת פרטיות — תחת מטריית Webcommerce

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4)](https://tailwindcss.com/)

---

## 📋 מצב הפרויקט

🚧 **שלב Foundation** — שלד טכני בלבד. תוכן ועיצוב סופי יוטמעו לאחר אישור התיאור והסברי האתר.

---

## 🛠️ Stack טכנולוגי

| שכבה | טכנולוגיה |
|------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + RTL |
| Components | Radix UI + shadcn/ui pattern |
| Animations | Motion (ex-Framer Motion) |
| Fonts | Heebo + Frank Ruhl Libre + JetBrains Mono |
| Icons | Lucide React |
| Forms | Zod validation |
| Email | Resend |
| Hosting | Vercel |
| DNS | HostGator |

---

## 🚀 התחלת עבודה

### דרישות מקדימות
- Node.js 18.18+ ([הורד כאן](https://nodejs.org/))
- Git ([הורד כאן](https://git-scm.com/))
- חשבון GitHub
- IDE — מומלץ VS Code עם תוספים: Tailwind IntelliSense, ESLint, Prettier

### התקנה ראשונית

```bash
# 1. שכפול הריפוזיטורי
git clone https://github.com/<USERNAME>/pratiut.git
cd pratiut

# 2. התקנת תלויות
npm install

# 3. הגדרת משתני סביבה
cp .env.example .env.local
# ערוך את .env.local והכנס ערכים אמיתיים

# 4. הרצת שרת פיתוח
npm run dev
```

האתר יפעל ב-[http://localhost:3000](http://localhost:3000)

---

## 🔄 Workflow רב-מחשבי (נייד + שולחני + שותף)

**כלל הברזל**: GitHub הוא מקור האמת. כל שינוי חוזר דרכו.

### בתחילת כל יום עבודה
```bash
git pull origin main
```

### בסוף כל יום עבודה
```bash
git add .
git commit -m "תיאור השינוי"
git push origin main
```

### עבודה במקביל עם ראובן
```bash
# צור branch לפיצ'ר
git checkout -b feature/שם-הפיצ'ר

# בסיום
git push origin feature/שם-הפיצ'ר
# פתח Pull Request ב-GitHub
```

### במקרה של קונפליקט
```bash
git pull --rebase origin main
# פתור קונפליקטים ידנית
git rebase --continue
git push
```

---

## 📁 מבנה הפרויקט

```
pratiut/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Layout שורש עם RTL
│   │   ├── page.tsx            # דף הבית
│   │   └── globals.css         # סגנונות גלובליים + design tokens
│   ├── components/
│   │   ├── ui/                 # רכיבי UI גנריים (shadcn-style)
│   │   ├── layout/             # Header, Footer, Navigation
│   │   └── sections/           # סקציות עמודים (Hero, Features, CTA)
│   ├── lib/
│   │   ├── fonts.ts            # הגדרות פונטים
│   │   └── utils.ts            # פונקציות עזר
│   ├── styles/                 # סגנונות נוספים
│   └── types/                  # TypeScript types
├── content/                    # מאמרים, מקרי בוחן (MDX)
├── public/                     # קבצים סטטיים
│   └── images/
├── tailwind.config.ts          # תצורת Tailwind
├── next.config.ts              # תצורת Next.js
└── tsconfig.json               # תצורת TypeScript
```

---

## 📝 פקודות זמינות

```bash
npm run dev          # שרת פיתוח (port 3000)
npm run build        # בנייה ל-production
npm run start        # הרצת build production
npm run lint         # בדיקת ESLint
npm run format       # פורמט קוד ב-Prettier
npm run typecheck    # בדיקת טיפוסי TypeScript
```

---

## 🎨 Design System

### צבעים (Placeholder — להחלפה לפי מיתוג סופי)

| Token | Light | Dark | תפקיד |
|-------|-------|------|--------|
| `--primary` | Deep Petrol | Warm Gold | פעולות ראשיות |
| `--accent` | Warm Gold | Warm Gold | הדגשות |
| `--background` | Cream | Charcoal | רקע ראשי |
| `--foreground` | Charcoal | Cream | טקסט ראשי |
| `--muted` | Light Cream | Dark Slate | רקעים משניים |

הצבעים מוגדרים ב-`src/app/globals.css` כ-HSL variables. החלפת מיתוג = שינוי 6 שורות.

### טיפוגרפיה
- **כותרות** (font-display): Frank Ruhl Libre — סריפ עברי סמכותי
- **גוף** (font-sans): Heebo — סנס-סריפ עברי נקי
- **קוד** (font-mono): JetBrains Mono

### RTL
- `dir="rtl"` מוגדר ב-`<html>` ב-layout
- `direction: rtl` ב-CSS
- Tailwind תומך אוטומטית ב-`me-` / `ms-` (margin-end / margin-start)
- לעטיפת LTR (אנגלית בתוך עברית): `<span className="ltr">text</span>`

---

## 🚢 Deployment ל-Vercel

### שלב 1: חבר את GitHub ל-Vercel
1. כנס ל-[vercel.com](https://vercel.com)
2. התחבר עם GitHub
3. Import את הריפוזיטורי
4. הוסף משתני סביבה מ-`.env.local`
5. Deploy

### שלב 2: חבר את הדומיין
1. ב-Vercel → Settings → Domains → Add `pratiut.co.il`
2. ב-HostGator cPanel → Zone Editor → ערוך רשומות:
   - `A @ → 76.76.21.21` (Vercel IP)
   - `CNAME www → cname.vercel-dns.com`
3. השאר את רשומות ה-MX (אימייל) ללא שינוי

### Auto-deploy
כל push ל-`main` → deploy אוטומטי ל-production
כל push ל-branch אחר → preview URL

---

## 🔒 אבטחה ופרטיות (אירוניה: אתר פרטיות חייב להיות דוגמה)

- ✅ HTTPS אוטומטי (Vercel)
- ✅ Security Headers מוגדרים ב-`next.config.ts` (HSTS, X-Frame-Options, וכו')
- ✅ אין cookies ללא הסכמה (לתכנן Cookie Banner)
- ✅ `.env*` ב-`.gitignore`
- ⚠️ TODO: הוספת CSP (Content Security Policy)
- ⚠️ TODO: מדיניות פרטיות משלנו
- ⚠️ TODO: Cookie Consent Banner

---

## 👥 צוות

| תפקיד | מי |
|--------|----|
| Owner / DPO / CISO / Content | תהל |
| Co-Developer | ראובן |

---

## 📄 רישיון

© Webcommerce. כל הזכויות שמורות.
