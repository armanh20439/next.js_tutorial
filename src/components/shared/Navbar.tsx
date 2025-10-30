"use client"
import Link from 'next/link'

import {
    NavigationMenu,
    NavigationMenuContent,

    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,

} from "@/components/ui/navigation-menu"
import { Switch } from '../ui/switch'
import { Button } from '../ui/button'


import MobileMenu from './MobileMenu';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const pathname = usePathname();
    
    return (

        <header className='py-4 shadow-md'>
            <nav className=' flex justify-between  items-center  px-4 sm:px-6 lg:px-8'>
                <div className='text-xl font-bold'>
                    <Link href="/">Daily News</Link>
                </div>
                <NavigationMenu className='hidden lg:flex'>
                    <NavigationMenuList>
                        <NavigationMenuItem className="flex items-center space-x-8">

                            <NavigationMenuLink className={`${pathname === '/news' ? 'text-red-500 font-semibold' : ''} hover:text-orange-700`} href="/news">News</NavigationMenuLink>
                            <NavigationMenuLink className={`${pathname === '/services' ? 'text-red-500 font-semibold' : ''} hover:text-orange-700`} href="/services">
                                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className='text-gray-600 shadow-md px-5 py-4 space-y-2 rounded-md'>
                                        <li><NavigationMenuLink href="services/web">Web Development</NavigationMenuLink></li>
                                        <li><NavigationMenuLink href="services/app">Mobile Apps</NavigationMenuLink></li>
                                        <li> <NavigationMenuLink href="services/seo" >SEO</NavigationMenuLink></li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuLink>
                            <NavigationMenuLink className={`${pathname === '/about' ? 'text-red-500 font-semibold' : ''} hover:text-orange-700`} href="/about">About</NavigationMenuLink>
                            <NavigationMenuLink className={`${pathname === '/contract' ? 'text-red-500 font-semibold' : ''} hover:text-orange-700`} href="/contract">Contract</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className='hidden lg:flex items-center space-x-4'>
                    <div className='flex items-center'>
                        <span className='mr-2'>Dark Mode</span>
                        <Switch />
                    </div>
                    <Button variant="default">LogIn</Button>
                </div>
                {/* mobile nav */}
                <MobileMenu></MobileMenu>

            </nav>
        </header>

    )
}

export default Navbar
