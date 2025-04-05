
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import KpiCard from '@/components/KpiCard';
import OverviewChart from '@/components/OverviewChart';
import PlatformPerformance from '@/components/PlatformPerformance';
import { BarChart3, Percent, DollarSign, Users, TrendingUp, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-8">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Sarah!</h1>
          <p className="text-gray-500 mt-1">
            Here's what's happening with your ad campaigns today.
          </p>
        </div>
        <Link to="/campaigns/new">
          <Button className="btn-primary flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Create Campaign
          </Button>
        </Link>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard
          title="Total Spend"
          value="$126,432"
          icon={DollarSign}
          trend={{ value: "14% from last month", positive: true }}
        />
        <KpiCard
          title="Impressions"
          value="2.4M"
          icon={Users}
          trend={{ value: "11% from last month", positive: true }}
        />
        <KpiCard
          title="Conversions"
          value="3,542"
          icon={TrendingUp}
          trend={{ value: "8% from last month", positive: true }}
        />
        <KpiCard
          title="Conversion Rate"
          value="4.2%"
          icon={Percent}
          trend={{ value: "2% from last month", positive: false }}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-7 gap-6">
        <OverviewChart />
        <PlatformPerformance />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Top Performing Campaigns</h3>
            <div className="space-y-4">
              {[
                { name: "ETF Awareness Q2", platform: "Facebook", budget: "$5,000", performance: 176 },
                { name: "Retirement Planning", platform: "Google", budget: "$7,500", performance: 152 },
                { name: "Financial Freedom", platform: "Twitter", budget: "$10,000", performance: 143 },
              ].map((campaign, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">{campaign.name}</h4>
                    <p className="text-sm text-gray-500">{campaign.platform} | {campaign.budget}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 font-medium">+{campaign.performance}%</span>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link to="/campaigns" className="text-sm text-clockwise-500 hover:text-clockwise-700 font-medium">
                View all campaigns →
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { 
                  message: "Campaign 'ETF Awareness Q2' is performing 32% above target", 
                  time: "2 hours ago",
                  type: "success" 
                },
                { 
                  message: "New creative assets were approved for 'Retirement Planning'", 
                  time: "Yesterday",
                  type: "info" 
                },
                { 
                  message: "Budget increased for 'Financial Freedom' campaign", 
                  time: "2 days ago",
                  type: "warning" 
                },
                { 
                  message: "Weekly performance report is now available", 
                  time: "3 days ago",
                  type: "info" 
                },
              ].map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className={`w-3 h-3 rounded-full mt-1.5 ${
                    activity.type === 'success' ? 'bg-green-500' :
                    activity.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                  }`} />
                  <div>
                    <p className="text-sm">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link to="/analytics" className="text-sm text-clockwise-500 hover:text-clockwise-700 font-medium">
                View all activity →
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
