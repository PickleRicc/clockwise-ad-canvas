
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
                  ${isActive(item.to) ? "nav-link nav-link-active" : "nav-link nav-link-inactive"}
                  group transition-all duration-200
                `}
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </SidebarContent>
      
      <SidebarFooter className="px-3 py-4">
        <Link to="/" className="nav-link nav-link-inactive w-full group">
          <LogOut className="w-5 h-5 group-hover:translate-x-[-2px] transition-transform" />
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
          className="absolute right-0 translate-x-1/2 top-24 bg-clockwise-800 border-clockwise-700 hover:bg-clockwise-700 shadow-md"
        >
          <PanelLeftClose className="h-4 w-4 block sidebar-open:hidden" />
          <PanelLeftOpen className="h-4 w-4 hidden sidebar-open:block" />
        </Button>
      </SidebarTrigger>
    </Sidebar>
  );
}

export default AppSidebar;
