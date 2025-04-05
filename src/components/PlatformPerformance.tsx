
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PlatformBadge from './PlatformBadge';

const data = [
  {
    name: 'CTR (%)',
    facebook: 3.2,
    google: 4.1,
    twitter: 2.8,
    reddit: 3.5,
  },
  {
    name: 'CPC ($)',
    facebook: 1.25,
    google: 1.85,
    twitter: 1.15,
    reddit: 0.95,
  },
  {
    name: 'Conv. Rate (%)',
    facebook: 2.8,
    google: 3.2,
    twitter: 1.9,
    reddit: 2.4,
  },
  {
    name: 'CPA ($)',
    facebook: 35,
    google: 42,
    twitter: 38,
    reddit: 29,
  },
];

interface PlatformPerformanceProps {
  title?: string;
  description?: string;
}

const PlatformPerformance = ({
  title = "Platform Comparison",
  description = "Key metrics across advertising platforms"
}: PlatformPerformanceProps) => {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="flex space-x-2">
          <PlatformBadge platform="facebook" />
          <PlatformBadge platform="google" />
          <PlatformBadge platform="twitter" />
          <PlatformBadge platform="reddit" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="facebook" fill="#4267B2" />
              <Bar dataKey="google" fill="#DB4437" />
              <Bar dataKey="twitter" fill="#1DA1F2" />
              <Bar dataKey="reddit" fill="#FF4500" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlatformPerformance;
