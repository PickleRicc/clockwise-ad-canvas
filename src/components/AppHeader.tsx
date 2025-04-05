
import React from 'react';
import { Bell, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const AppHeader = () => {
  const userName = "Eli Mikel";
  
  return (
    <header className="flex items-center justify-between h-16 px-6 border-b bg-white/90 backdrop-blur-sm">
      <div className="flex items-center gap-6 w-full">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            type="search" 
            placeholder="Search campaigns, analytics..." 
            className="pl-10 bg-gray-50/80 border-gray-200 transition-all focus:ring-clockwise-400"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="icon" 
            className="relative bg-gray-50/80 border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full animate-pulse"></span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="gap-2 bg-gray-50/80 border-gray-200 text-gray-800 hover:bg-gray-100 transition-colors"
              >
                <Avatar className="h-7 w-7 border border-clockwise-200">
                  <AvatarFallback className="bg-clockwise-100 text-clockwise-800 font-semibold text-sm">
                    EM
                  </AvatarFallback>
                </Avatar>
                <span>{userName}</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
