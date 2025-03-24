import Image from "next/image"
import { Nav } from "./nav"
export const MenuSideBar = () =>{
    return(
        <aside className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <section className="bg-base-200 text-base-content min-h-full w-80 flex flex-col items-center justify-center p-4">
              {/* Sidebar content here */}
              <Image src="/ana-main.jpg" alt="logo" width={200} height={200} className="rounded-full"/>
              <Nav />
              <footer>
                <label className="toggle text-base-content">
                    <input type="checkbox" value="dracula" className="theme-controller" />
                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>
                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
                    </label>
                </footer>
            </section>
        </aside>
    )
}