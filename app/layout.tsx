import type { Metadata } from "next";
import "./globals.css";
import RecoilRootWrapper from "@/components/RecoilWrapper";
import Providers from "@/components/Providers";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center bg-[#403e3e]">
          <div className="max-w-[500px] min-h-screen w-full h-full bg-white">
            <Providers>
              <RecoilRootWrapper>
                <main className="flex flex-col justify-center items-center">
                  {children}
                </main>
              </RecoilRootWrapper>
            </Providers>

            <footer className="fixed bottom-0">
              <p>© 2024 My Mobile Web Page</p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
