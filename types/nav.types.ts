import { Icons } from "@/components/icons"

export interface NavItem {
    title: string
    href?: string
    disabled?: boolean
    external?: boolean
    icon?: keyof typeof Icons
    identityKey?: string
}

export interface NavItemWithChildren extends NavItem {
    items: NavItemWithChildren[]
}

export interface SecondaryNavItem extends NavItem { }

export interface SidebarNavItem extends NavItemWithChildren { }
