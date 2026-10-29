import "./globals.css";
export const metadata = { title: "Fari Mazhar - International Web Developer | Next.js Expert", description: "I build $10k+ websites for USA, UAE, UK startups. Next.js, AI, SaaS." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
