import "./globals.css";
import RecoilRootWrapper from "@/components/recoil/RecoilWrapper";
import Providers from "@/components/react-query/Providers";
import Footer from "@/components/footer/Footer";
// import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();

  const excludedPaths = ["/", "/signin", "/survey", "/location", "/ootd/post"];

  // const shouldShowFooter = !excludedPaths.includes(pathname);

  return (
    <html>
      <head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </head>
      <body className="">
        <div className="flex flex-col items-center bg-[#403e3e]">
          <div className="block max-w-[500px] min-h-screen w-full h-full bg-white">
            <Providers>
              <RecoilRootWrapper>
                <main className="flex flex-col justify-center items-center">
                  {children}
                </main>
              </RecoilRootWrapper>
            </Providers>
            {/* {shouldShowFooter && <Footer />} */}
          </div>
        </div>
      </body>
    </html>
  );
}
