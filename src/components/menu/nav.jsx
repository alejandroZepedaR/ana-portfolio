'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"
export const Nav = () =>{
    const pathname = usePathname();

    const links = [
        {href: '/', label: 'Introduction'},
        {href: '/professional', label: 'Professional Overview'},
        {href: '/academic', label: 'Academic Overview'},
    ]
    
    return(
        <nav>
            <ul className="menu space-y-1">
                {links.map(({href, label}) => {
                    const isActive = pathname === href;
                    return (
                    <li key={`${href}${label}`} className={`flex items-center`}>
                        <Link href={href} className={`${isActive ? 'bg-secondary/50 rounded-3xl hover:bg-secondary' : null}`}>
                            {label}
                        </Link>
                    </li>
                )})}
            </ul>
        </nav>
    )
}