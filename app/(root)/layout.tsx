import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-screen-lg mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
