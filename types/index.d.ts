export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SidebarNavItem = {
  title: string;
  icon?: keyof typeof Icons;
  href: string;
};
