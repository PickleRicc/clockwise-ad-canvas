
import React from 'react';
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
  SlidersHorizontal
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
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import PlatformBadge from '@/components/PlatformBadge';

const Campaigns = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="p-6 space-y-6">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Campaigns</h1>
          <p className="text-gray-500 mt-1">
            Manage your advertising campaigns across all platforms.
          </p>
        </div>
        <Link to="/campaigns/new">
          <Button className="btn-primary flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Create Campaign
          </Button>
        </Link>
      </header>

      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search campaigns..."
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Select>
              <SelectTrigger className="w-[180px]">
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
                <Button variant="outline" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="hidden sm:inline">Date Range</span>
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
            
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Export</span>
            </Button>
          </div>
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
      </div>

      <CampaignTable />
    </div>
  );
};

export default Campaigns;
