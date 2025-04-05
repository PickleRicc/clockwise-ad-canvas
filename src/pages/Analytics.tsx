
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Download, Info, Calendar } from 'lucide-react';

const data = [
  { name: 'Jan', impressions: 400000, clicks: 24000, conversions: 800 },
  { name: 'Feb', impressions: 500000, clicks: 32500, conversions: 950 },
  { name: 'Mar', impressions: 600000, clicks: 42000, conversions: 1200 },
  { name: 'Apr', impressions: 800000, clicks: 60000, conversions: 1900 },
  { name: 'May', impressions: 750000, clicks: 52500, conversions: 1600 },
  { name: 'Jun', impressions: 900000, clicks: 67500, conversions: 2100 },
  { name: 'Jul', impressions: 850000, clicks: 59500, conversions: 1800 },
];

const platformData = [
  { name: 'Facebook', value: 40 },
  { name: 'Google', value: 30 },
  { name: 'Twitter', value: 15 },
  { name: 'Reddit', value: 15 },
];

const COLORS = ['#4267B2', '#DB4437', '#1DA1F2', '#FF4500'];

const demographicData = [
  { age: '18-24', male: 10, female: 15 },
  { age: '25-34', male: 25, female: 30 },
  { age: '35-44', male: 20, female: 22 },
  { age: '45-54', male: 15, female: 12 },
  { age: '55-64', male: 10, female: 8 },
  { age: '65+', male: 5, female: 3 },
];

const Analytics = () => {
  return (
    <div className="p-6 space-y-8">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-500 mt-1">
            Track performance metrics across all your campaigns and platforms.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Last 30 Days
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">2.4M</CardTitle>
            <CardDescription className="flex items-center gap-1">
              Total Impressions
              <Info className="h-3.5 w-3.5 text-gray-400" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-10">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <Line 
                    type="monotone" 
                    dataKey="impressions" 
                    stroke="#0A2342" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 text-sm text-green-600 flex items-center">
              ↑ 12% from previous period
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">156K</CardTitle>
            <CardDescription className="flex items-center gap-1">
              Total Clicks
              <Info className="h-3.5 w-3.5 text-gray-400" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-10">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <Line 
                    type="monotone" 
                    dataKey="clicks" 
                    stroke="#E6AF2E" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 text-sm text-green-600 flex items-center">
              ↑ 8% from previous period
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl">4,950</CardTitle>
            <CardDescription className="flex items-center gap-1">
              Total Conversions
              <Info className="h-3.5 w-3.5 text-gray-400" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-10">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <Line 
                    type="monotone" 
                    dataKey="conversions" 
                    stroke="#4CAF50" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 text-sm text-amber-600 flex items-center">
              ↑ 3% from previous period
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="w-full max-w-md grid grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription>Track key metrics over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="impressions"
                      stroke="#0A2342"
                      activeDot={{ r: 8 }}
                      name="Impressions"
                    />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="clicks"
                      stroke="#E6AF2E"
                      name="Clicks"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="conversions"
                      stroke="#4CAF50"
                      name="Conversions"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="platforms" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Distribution</CardTitle>
                <CardDescription>Impressions by platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={platformData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {platformData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Platform Performance</CardTitle>
                <CardDescription>CTR and Conversion Rate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { name: 'Facebook', ctr: 4.2, convRate: 2.8 },
                        { name: 'Google', ctr: 5.1, convRate: 3.2 },
                        { name: 'Twitter', ctr: 3.8, convRate: 1.9 },
                        { name: 'Reddit', ctr: 4.5, convRate: 2.4 },
                      ]}
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
                      <Bar dataKey="ctr" name="CTR (%)" fill="#0A2342" />
                      <Bar dataKey="convRate" name="Conv. Rate (%)" fill="#E6AF2E" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="demographics" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Audience Demographics</CardTitle>
              <CardDescription>Age and gender distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={demographicData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="male" name="Male" fill="#0A2342" />
                    <Bar dataKey="female" name="Female" fill="#E6AF2E" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
