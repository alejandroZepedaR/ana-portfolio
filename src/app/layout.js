import { MenuSideBar } from "../components/menu/menu-side";
import "./globals.css";
import { GiHamburgerMenu } from "react-icons/gi";


export const metadata = {
  title: "Ana Lopez - Professional Portfolio",
  description: "Ana Lopez is a Public Benefits Intern with a strong background in sales and customer service, dedicated to helping clients navigate public assistance programs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <main className="drawer-content flex flex-col p-4">
            <div className="flex items-center space-x-2 lg:hidden mb-1 py-2">
              <label htmlFor="my-drawer-2" className="btn btn-circle btn-primary drawer-button  lg:hidden">
                <GiHamburgerMenu />
              </label>
              <h3 className="font-bold">Ana Lopez</h3>
            </div>
            {children}
          </main>
          <MenuSideBar />
        </div>
      </body>
    </html>
  );
}
