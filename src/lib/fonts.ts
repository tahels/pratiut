import { Heebo, Frank_Ruhl_Libre, JetBrains_Mono } from "next/font/google";

/**
 * Heebo - פונט גוף עברי נקי ומודרני
 * נבחר עבור קריאות מצוינת בטקסטים ארוכים
 */
export const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-heebo",
  display: "swap",
});

/**
 * Frank Ruhl Libre - פונט תצוגה עברי סריפ
 * מעניק תחושה ספרותית/משפטית סמכותית לכותרות
 * מתאים למותג מקצועי בתחום פרטיות ומשפט
 */
export const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-frank-ruhl",
  display: "swap",
});

/**
 * JetBrains Mono - לקטעי קוד וטקסטים טכניים
 */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});
