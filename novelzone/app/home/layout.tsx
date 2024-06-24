import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopNav />
      <div
        className="
      mx-auto flex  max-w-screen-xl flex-grow
      items-center gap-8 px-4 sm:px-6 lg:px-8"
      >
        {children}
      </div>
      <BottomNav />
    </>
  );
}
