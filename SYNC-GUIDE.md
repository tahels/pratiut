# 🔄 מדריך סינכרון בין מחשבים

> מדריך מהיר לעבודה ממחשב נייד + מחשב שולחני + שותפות עם ראובן.

---

## 🎯 העיקרון

**GitHub = מקור האמת היחיד.** הקוד תמיד שם, ושני המחשבים מסונכרנים דרכו.

```
         ┌──────────────────┐
         │   GitHub Repo    │  ← מקור האמת
         └────────┬─────────┘
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
   ┌────────┐ ┌────────┐ ┌────────┐
   │ נייד   │ │ שולחני │ │ ראובן  │
   └────────┘ └────────┘ └────────┘
```

---

## ✅ הגדרה ראשונית (פעם אחת בלבד, בכל מחשב)

### 1. התקן Git
- **Windows**: [git-scm.com](https://git-scm.com/download/win)
- **macOS**: `brew install git` או הורד מהקישור
- **Linux**: `sudo apt install git`

### 2. הגדר זהות
```bash
git config --global user.name "תהל"
git config --global user.email "tahel@webcommerce.co.il"

# שמירת סיסמה (לא תצטרך להזין כל פעם)
git config --global credential.helper store
```

### 3. שכפל את הריפו (פעם אחת בכל מחשב)
```bash
cd ~/Documents   # או היכן שתרצה
git clone https://github.com/<USERNAME>/pratiut.git
cd pratiut
npm install
```

---

## 📅 שגרת יומיום

### 🌅 בתחילת עבודה (בכל מחשב)

```bash
cd ~/Documents/pratiut
git pull origin main
npm install  # רק אם package.json השתנה
npm run dev
```

**למה?** ייתכן שמהמחשב השני או מראובן הגיעו שינויים.

### 🌙 בסוף יום עבודה / לפני מעבר מחשב

```bash
git status                        # מה השתנה?
git add .                         # הוסף הכל
git commit -m "תיאור השינוי"      # שמור snapshot
git push origin main              # שלח ל-GitHub
```

**עכשיו** המחשב השני יוכל למשוך עם `git pull`.

---

## 🚨 מצבים בעייתיים ופתרונות

### "שכחתי לעשות push במחשב הקודם"

```bash
# אם אין שינויים מקומיים שטרם נשמרו:
git pull origin main

# אם יש שינויים מקומיים שכן נשמרו:
git stash                    # שמור זמנית
git pull origin main         # משוך מעודכן
git stash pop                # החזר את השינויים
```

### "יש קונפליקט בין המחשבים"

```bash
git pull origin main
# Git יסמן קבצים בקונפליקט
# פתח אותם, מצא את הסימונים <<<<<<< ======= >>>>>>>
# החלט מה להשאיר, שמור
git add .
git commit -m "fix: resolved merge conflict"
git push
```

### "טעיתי, רוצה לחזור אחורה"

```bash
# ביטול שינויים שטרם הוקומיטו:
git checkout .

# ביטול הקומיט האחרון (נשמר ב-history):
git reset --soft HEAD~1

# ביטול מוחלט של הקומיט האחרון (סכנה!):
git reset --hard HEAD~1
```

---

## 🤝 עבודה עם ראובן

### Branching לפיצ'רים גדולים

```bash
# צור branch חדש
git checkout -b feature/contact-form

# עבוד, commit ו-push כרגיל
git push origin feature/contact-form

# ב-GitHub: פתח Pull Request
# ראובן ייתן Code Review, מאשרים, ממזגים
```

### עבודה במקביל על אותו קובץ

- **תקשרו לפני** מי עובד על מה
- השתמשו ב-branches נפרדים
- Pull Request עם Code Review מונע 90% מהקונפליקטים

---

## 🔧 כלים מומלצים

### VS Code Extensions
- **GitLens** — סטטיסטיקות וגרפים של Git
- **GitHub Pull Requests** — ניהול PRs מתוך VS Code
- **Git Graph** — תצוגה גרפית של ה-history

### GUI Clients (לאלו שמעדיפים)
- **GitHub Desktop** — חינמי, פשוט
- **SourceTree** — חינמי, מתקדם יותר
- **Fork** — בתשלום, איכותי

---

## ⚡ קיצורי דרך שימושיים

הוסף ל-`~/.gitconfig`:

```ini
[alias]
    s = status
    a = add .
    c = commit -m
    p = push
    l = pull
    co = checkout
    br = branch
    last = log -1 HEAD
    unstage = reset HEAD --
```

**שימוש**:
```bash
git s                        # במקום git status
git c "תיאור"                # במקום git commit -m
git p                        # במקום git push
```

---

## 🎓 משאבים נוספים

- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials)
- [GitHub Docs בעברית](https://docs.github.com/en)

---

## 📞 צריך עזרה?

אם נתקעת — אל תילחץ. שלח לי את הפלט של:
```bash
git status
git log --oneline -5
```

ואני אעזור לאבחן.
