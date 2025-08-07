import "./globals.css";
import SideBar from "./components/sidebar";


export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-50">
      <body>
        <SideBar />
        <main className="min-h-[80vh]">
          {children}
        </main>
        {/* <Footer /> */}
        {/* <div className="flex justify-center bg-gray-50 my-8">
          <a
            href="/"
            rel="noopener noreferrer"
            className="w-20 h-20 rounded-full flex items-center justify-center hover:bg-gray-300 transition">
            <img src="/icons/linkedin.png" alt="Home" className="w-6 h-6" />
          </a>
        </div> */}
      </body>
    </html>
  );
}
