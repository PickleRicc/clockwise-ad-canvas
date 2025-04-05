
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Jan', facebook: 4000, google: 2400, twitter: 1800, reddit: 1000 },
  { name: 'Feb', facebook: 5000, google: 2700, twitter: 2200, reddit: 1300 },
  { name: 'Mar', facebook: 6000, google: 3500, twitter: 2500, reddit: 1700 },
  { name: 'Apr', facebook: 8000, google: 4200, twitter: 2800, reddit: 2100 },
  { name: 'May', facebook: 7500, google: 4500, twitter: 3200, reddit: 2300 },
  { name: 'Jun', facebook: 9000, google: 5000, twitter: 3800, reddit: 2500 },
  { name: 'Jul', facebook: 8500, google: 5200, twitter: 3900, reddit: 2700 },
];

interface OverviewChartProps {
  title?: string;
  description?: string;
}

const OverviewChart = ({ 
  title = "Campaign Performance", 
  description = "Impressions across all platforms over time"
}: OverviewChartProps) => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorFacebook" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4267B2" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4267B2" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorGoogle" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DB4437" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#DB4437" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorTwitter" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1DA1F2" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#1DA1F2" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorReddit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF4500" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FF4500" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="facebook"
                stroke="#4267B2"
                fillOpacity={1}
                fill="url(#colorFacebook)"
              />
              <Area
                type="monotone"
                dataKey="google"
                stroke="#DB4437"
                fillOpacity={1}
                fill="url(#colorGoogle)"
              />
              <Area
                type="monotone"
                dataKey="twitter"
                stroke="#1DA1F2"
                fillOpacity={1}
                fill="url(#colorTwitter)"
              />
              <Area
                type="monotone"
                dataKey="reddit"
                stroke="#FF4500"
                fillOpacity={1}
                fill="url(#colorReddit)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default OverviewChart;
