
import React from 'react';
import { MoreHorizontal, ArrowUpDown, Edit, Eye, Trash2, PauseCircle, PlayCircle } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import PlatformBadge from './PlatformBadge';
import { Link } from 'react-router-dom';

// Mock data
interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'paused';
  platforms: ('facebook' | 'twitter' | 'google' | 'reddit')[];
  budget: string;
  startDate: string;
  endDate: string;
  impressions: number;
  clicks: number;
  conversions: number;
  ctr: string;
}

const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'ETF Awareness Q2',
    status: 'active',
    platforms: ['facebook', 'google'],
    budget: '$5,000',
    startDate: '2025-03-01',
    endDate: '2025-06-30',
    impressions: 250000,
    clicks: 12500,
    conversions: 350,
    ctr: '5.0%'
  },
  {
    id: '2',
    name: 'Retirement Planning',
    status: 'active',
    platforms: ['facebook', 'twitter', 'google'],
    budget: '$7,500',
    startDate: '2025-02-15',
    endDate: '2025-05-15',
    impressions: 320000,
    clicks: 15000,
    conversions: 420,
    ctr: '4.7%'
  },
  {
    id: '3',
    name: 'Investment Strategies',
    status: 'paused',
    platforms: ['facebook', 'reddit'],
    budget: '$3,200',
    startDate: '2025-01-10',
    endDate: '2025-04-10',
    impressions: 180000,
    clicks: 8200,
    conversions: 210,
    ctr: '4.6%'
  },
  {
    id: '4',
    name: 'Market Insights',
    status: 'active',
    platforms: ['twitter', 'reddit'],
    budget: '$4,800',
    startDate: '2025-03-15',
    endDate: '2025-07-15',
    impressions: 215000,
    clicks: 9800,
    conversions: 285,
    ctr: '4.5%'
  },
  {
    id: '5',
    name: 'Financial Freedom',
    status: 'paused',
    platforms: ['facebook', 'google', 'twitter', 'reddit'],
    budget: '$10,000',
    startDate: '2025-01-01',
    endDate: '2025-06-30',
    impressions: 450000,
    clicks: 23500,
    conversions: 620,
    ctr: '5.2%'
  }
];

const CampaignTable: React.FC = () => {
  return (
    <div className="w-full">
      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">
                <div className="flex items-center space-x-1">
                  <span>Campaign Name</span>
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Platforms</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Date Range</TableHead>
              <TableHead className="text-right">Impressions</TableHead>
              <TableHead className="text-right">Clicks</TableHead>
              <TableHead className="text-right">CTR</TableHead>
              <TableHead className="text-right">Conversions</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCampaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell className="font-medium">
                  <Link to={`/campaigns/${campaign.id}`} className="hover:text-clockwise-500">
                    {campaign.name}
                  </Link>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1 flex-wrap">
                    {campaign.platforms.map((platform) => (
                      <PlatformBadge key={platform} platform={platform} showLabel={false} size="sm" />
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    campaign.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {campaign.status === 'active' ? 'Active' : 'Paused'}
                  </span>
                </TableCell>
                <TableCell>{campaign.budget}</TableCell>
                <TableCell>
                  <div className="text-sm text-gray-600">
                    <div>{new Date(campaign.startDate).toLocaleDateString()}</div>
                    <div>{new Date(campaign.endDate).toLocaleDateString()}</div>
                  </div>
                </TableCell>
                <TableCell className="text-right">{campaign.impressions.toLocaleString()}</TableCell>
                <TableCell className="text-right">{campaign.clicks.toLocaleString()}</TableCell>
                <TableCell className="text-right">{campaign.ctr}</TableCell>
                <TableCell className="text-right">{campaign.conversions.toLocaleString()}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        <span>View Details</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Edit Campaign</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        {campaign.status === 'active' ? (
                          <>
                            <PauseCircle className="mr-2 h-4 w-4 text-amber-600" />
                            <span className="text-amber-600">Pause Campaign</span>
                          </>
                        ) : (
                          <>
                            <PlayCircle className="mr-2 h-4 w-4 text-green-600" />
                            <span className="text-green-600">Activate Campaign</span>
                          </>
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Trash2 className="mr-2 h-4 w-4 text-red-600" />
                        <span className="text-red-600">Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CampaignTable;
