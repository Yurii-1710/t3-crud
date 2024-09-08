import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"



const Navbar = () => {
  return (
    <div className="bg-slate-800">
      <NavigationMenu className="mx-6 bg-teal-900">
        <NavigationMenuList>
          <NavigationMenuItem className="space-x-4">
            <NavigationMenuTrigger>
              <Link href='/'>Home</Link>
            </NavigationMenuTrigger>
            <NavigationMenuTrigger>
              <Link href='/students'>Students</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Navbar