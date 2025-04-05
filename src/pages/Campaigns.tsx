
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import CampaignTable from '@/components/CampaignTable';
import { 
  PlusCircle, 
  Search, 
  Filter,
  Calendar,
  Download,
  SlidersHorizontal,
  MenuIcon
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import PlatformBadge from '@/components/PlatformBadge';
import { useIsMobile } from '@/hooks/use-mobile';

const Campaigns = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [filtersOpen, setFiltersOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="p-3 md:p-6 space-y-4 md:space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Campaigns</h1>
          <p className="text-gray-500 mt-1 text-sm md:text-base">
            Manage your advertising campaigns across all platforms.
          </p>
        </div>
        <Link to="/campaigns/new">
          <Button className="btn-primary flex items-center gap-2 w-full sm:w-auto">
            <PlusCircle className="h-4 w-4" />
            Create Campaign
          </Button>
        </Link>
      </header>

      <div className="bg-white p-3 md:p-4 rounded-lg border shadow-sm">
        {/* Mobile filters toggle */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full mb-3 gap-2 flex items-center justify-center">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[85vh] rounded-t-xl">
              <SheetHeader className="mb-4">
                <SheetTitle>Campaign Filters</SheetTitle>
              </SheetHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Status</label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Status: All" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="paused">Paused</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Date Range</label>
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="border rounded-md p-3"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Platform</label>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="rounded-full h-8">
                      All
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full h-8 flex items-center gap-1">
                      <PlatformBadge platform="facebook" showLabel={false} size="sm" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full h-8 flex items-center gap-1">
                      <PlatformBadge platform="google" showLabel={false} size="sm" />
                      Google
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full h-8 flex items-center gap-1">
                      <PlatformBadge platform="twitter" showLabel={false} size="sm" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full h-8 flex items-center gap-1">
                      <PlatformBadge platform="reddit" showLabel={false} size="sm" />
                      Reddit
                    </Button>
                  </div>
                </div>
                <Button className="w-full mt-4" onClick={() => setFiltersOpen(false)}>
                  Apply Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        )}

        {/* Search bar - always visible */}
        <div className="relative flex-1 mb-3 md:mb-0">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search campaigns..."
            className="pl-10"
          />
        </div>
        
        {/* Desktop filters */}
        {!isMobile && (
          <>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3">
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <SelectValue placeholder="Status: All" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="gap-2 w-full sm:w-auto">
                    <Calendar className="h-4 w-4" />
                    <span className="hidden sm:inline">Date Range</span>
                    <span className="sm:hidden">Date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              
              <Button variant="outline" className="gap-2 w-full sm:w-auto">
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Export</span>
                <span className="sm:hidden">Export</span>
              </Button>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="text-sm text-gray-500 flex items-center mr-1">
                Platform:
              </div>
              <Button variant="outline" size="sm" className="rounded-full h-8">
                All
              </Button>
              <Button variant="outline" size="sm" className="rounded-full h-8 flex items-center gap-1">
                <PlatformBadge platform="facebook" showLabel={false} size="sm" />
                Facebook
              </Button>
              <Button variant="outline" size="sm" className="rounded-full h-8 flex items-center gap-1">
                <PlatformBadge platform="google" showLabel={false} size="sm" />
                Google
              </Button>
              <Button variant="outline" size="sm" className="rounded-full h-8 flex items-center gap-1">
                <PlatformBadge platform="twitter" showLabel={false} size="sm" />
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="rounded-full h-8 flex items-center gap-1">
                <PlatformBadge platform="reddit" showLabel={false} size="sm" />
                Reddit
              </Button>
              
              <Button variant="ghost" size="sm" className="gap-1 ml-auto">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>Advanced Filters</span>
              </Button>
            </div>
          </>
        )}
      </div>

      <CampaignTable />
    </div>
  );
};

export default Campaigns;
