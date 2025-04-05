
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart3, 
  Settings, 
  UserPlus, 
  LogOut,
  PanelLeftOpen,
  PanelLeftClose
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

type NavItem = {
  name: string;
  to: string;
  icon: React.ElementType;
};

const mainNav: NavItem[] = [
  { name: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { name: 'Campaigns', to: '/campaigns', icon: UserPlus },
  { name: 'Analytics', to: '/analytics', icon: BarChart3 },
  { name: 'Settings', to: '/settings', icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar className="border-r border-clockwise-800">
      <SidebarHeader className="py-6 px-3 flex justify-center">
        <Logo />
      </SidebarHeader>
      
      <SidebarContent>
        <div className="space-y-1 px-3">
          {mainNav.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.to}
                className={`
                  ${isActive(item.to) 
                    ? "nav-link nav-link-active bg-clockwise-400/20" 
                    : "nav-link nav-link-inactive hover:bg-clockwise-400/10"}
                  group transition-all duration-200
                `}
                onClick={() => isMobile ? document.querySelector('[data-mobile="true"]')?.dispatchEvent(new Event('close')) : null}
              >
                <Icon className="w-5 h-5 group-hover:text-clockwise-400 transition-colors" />
                <span className={isActive(item.to) ? "text-clockwise-400" : ""}>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </SidebarContent>
      
      <SidebarFooter className="px-3 py-4">
        <Link to="/" className="nav-link nav-link-inactive w-full group hover:bg-clockwise-400/10">
          <LogOut className="w-5 h-5 group-hover:text-clockwise-400 group-hover:translate-x-[-2px] transition-all" />
          <span>Logout</span>
        </Link>
        <div className="mt-4 px-4 py-3 rounded bg-clockwise-800/50 backdrop-blur-sm">
          <p className="text-xs text-gray-300">Need help?</p>
          <p className="text-xs text-gray-400 mt-1">Contact support@clockwise.capital</p>
        </div>
      </SidebarFooter>
      
      <SidebarTrigger>
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute right-0 translate-x-1/2 top-24 bg-clockwise-400 border-clockwise-300 hover:bg-clockwise-500 text-white shadow-md"
        >
          <PanelLeftClose className="h-4 w-4 block sidebar-open:hidden" />
          <PanelLeftOpen className="h-4 w-4 hidden sidebar-open:block" />
        </Button>
      </SidebarTrigger>
    </Sidebar>
  );
}

export default AppSidebar;
