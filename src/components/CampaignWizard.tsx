
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Check,
  ChevronRight,
  Calendar,
  Target,
  Image,
  CreditCard,
  PenTool,
  Facebook,
  Twitter,
  MessageCircle,
  Search,
  ChevronsRight,
  ArrowLeft,
  Database
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

interface WizardStep {
  id: string;
  title: string;
  icon: React.ElementType;
}

const steps: WizardStep[] = [
  { id: 'details', title: 'Campaign Details', icon: PenTool },
  { id: 'platforms', title: 'Platforms', icon: Facebook },
  { id: 'budget', title: 'Budget & Schedule', icon: CreditCard },
  { id: 'targeting', title: 'Targeting', icon: Target },
  { id: 'creative', title: 'Creative Assets', icon: Image },
];

const CampaignWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [campaignData, setCampaignData] = useState({
    name: '',
    description: '',
    platforms: {
      facebook: true,
      google: true,
      twitter: false,
      reddit: false
    },
    budget: '',
    dailyBudget: true,
    startDate: '',
    endDate: '',
    targeting: {
      age: {
        min: '25',
        max: '65'
      },
      gender: 'all',
      interests: '',
      location: 'United States'
    },
    airtableSync: false
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCampaignData({
      ...campaignData,
      [name]: value
    });
  };

  const handlePlatformToggle = (platform: string) => {
    setCampaignData({
      ...campaignData,
      platforms: {
        ...campaignData.platforms,
        [platform]: !campaignData.platforms[platform as keyof typeof campaignData.platforms]
      }
    });
  };

  const handleAirtableToggle = () => {
    setCampaignData({
      ...campaignData,
      airtableSync: !campaignData.airtableSync
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      toast.success('Campaign created successfully!');
      navigate('/campaigns');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Details
        return (
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="name">Campaign Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="ETF Awareness Q2 2023"
                value={campaignData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Campaign to increase awareness of our ETF offerings..."
                value={campaignData.description}
                onChange={handleInputChange}
                rows={4}
              />
            </div>
            <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
              <h4 className="text-sm font-medium text-blue-800">Clockwise Capital Brand Guidelines</h4>
              <p className="text-xs text-blue-600 mt-1">
                All campaigns should follow our brand guidelines. Use approved messaging and visuals only.
              </p>
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <Switch
                id="airtable-sync"
                checked={campaignData.airtableSync}
                onCheckedChange={handleAirtableToggle}
              />
              <div>
                <Label htmlFor="airtable-sync" className="flex items-center gap-1">
                  <Database className="h-4 w-4" />
                  Sync with Airtable
                </Label>
                <p className="text-xs text-gray-500">Import campaign details from Airtable</p>
              </div>
            </div>
          </div>
        );
      case 1: // Platforms
        return (
          <div className="space-y-6 py-2">
            <div className="space-y-1">
              <Label className="text-base">Select platforms for this campaign</Label>
              <p className="text-sm text-gray-500">Choose where your ads will appear</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className={`border-2 cursor-pointer transition-colors ${campaignData.platforms.facebook ? 'border-blue-600 bg-blue-50' : 'border-transparent hover:border-gray-300'}`}
                onClick={() => handlePlatformToggle('facebook')}>
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${campaignData.platforms.facebook ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <Facebook className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Facebook</h3>
                    <p className="text-xs text-gray-500">Reach over 2 billion users</p>
                  </div>
                  {campaignData.platforms.facebook && (
                    <Check className="h-5 w-5 text-blue-600 ml-auto" />
                  )}
                </CardContent>
              </Card>
              
              <Card className={`border-2 cursor-pointer transition-colors ${campaignData.platforms.google ? 'border-red-600 bg-red-50' : 'border-transparent hover:border-gray-300'}`}
                onClick={() => handlePlatformToggle('google')}>
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${campaignData.platforms.google ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <Search className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Google</h3>
                    <p className="text-xs text-gray-500">Target based on search intent</p>
                  </div>
                  {campaignData.platforms.google && (
                    <Check className="h-5 w-5 text-red-600 ml-auto" />
                  )}
                </CardContent>
              </Card>
              
              <Card className={`border-2 cursor-pointer transition-colors ${campaignData.platforms.twitter ? 'border-sky-600 bg-sky-50' : 'border-transparent hover:border-gray-300'}`}
                onClick={() => handlePlatformToggle('twitter')}>
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${campaignData.platforms.twitter ? 'bg-sky-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <Twitter className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Twitter</h3>
                    <p className="text-xs text-gray-500">Connect with trending conversations</p>
                  </div>
                  {campaignData.platforms.twitter && (
                    <Check className="h-5 w-5 text-sky-600 ml-auto" />
                  )}
                </CardContent>
              </Card>
              
              <Card className={`border-2 cursor-pointer transition-colors ${campaignData.platforms.reddit ? 'border-orange-600 bg-orange-50' : 'border-transparent hover:border-gray-300'}`}
                onClick={() => handlePlatformToggle('reddit')}>
                <CardContent className="p-4 flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${campaignData.platforms.reddit ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Reddit</h3>
                    <p className="text-xs text-gray-500">Engage with niche communities</p>
                  </div>
                  {campaignData.platforms.reddit && (
                    <Check className="h-5 w-5 text-orange-600 ml-auto" />
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 2: // Budget & Schedule
        return (
          <div className="space-y-6 py-2">
            <div className="space-y-4">
              <div>
                <Label htmlFor="budget">Budget</Label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <Input
                    type="text"
                    name="budget"
                    id="budget"
                    className="pl-7"
                    placeholder="5,000"
                    value={campaignData.budget}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="budget-type"
                  checked={campaignData.dailyBudget}
                  onCheckedChange={() => setCampaignData({...campaignData, dailyBudget: !campaignData.dailyBudget})}
                />
                <Label htmlFor="budget-type">
                  {campaignData.dailyBudget ? 'Daily budget' : 'Total budget'}
                </Label>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start-date">Start Date</Label>
                <div className="relative">
                  <Input
                    id="start-date"
                    name="startDate"
                    type="date"
                    value={campaignData.startDate}
                    onChange={handleInputChange}
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="end-date">End Date</Label>
                <div className="relative">
                  <Input
                    id="end-date"
                    name="endDate"
                    type="date"
                    value={campaignData.endDate}
                    onChange={handleInputChange}
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-3 rounded-md border border-amber-100">
              <h4 className="text-sm font-medium text-amber-800">Budget Recommendation</h4>
              <p className="text-xs text-amber-600 mt-1">
                Based on your selected platforms and goals, we recommend a budget of at least $5,000 for optimal results.
              </p>
            </div>
          </div>
        );
      case 3: // Targeting
        return (
          <div className="space-y-6 py-2">
            <div className="space-y-2">
              <Label>Target Location</Label>
              <Tabs defaultValue="us" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="us" className="flex-1">United States</TabsTrigger>
                  <TabsTrigger value="global" className="flex-1">Global</TabsTrigger>
                  <TabsTrigger value="custom" className="flex-1">Custom</TabsTrigger>
                </TabsList>
                <TabsContent value="us" className="pt-4">
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="text-sm text-gray-600">
                      Your campaign will target users in the United States.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="global" className="pt-4">
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <p className="text-sm text-gray-600">
                      Your campaign will target users worldwide.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="custom" className="pt-4">
                  <Input placeholder="Search for countries, regions, or cities..." />
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-2">
              <Label>Age Range</Label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age-min" className="text-xs text-gray-500">
                    Minimum Age
                  </Label>
                  <Input
                    id="age-min"
                    name="age.min"
                    type="number"
                    min="18"
                    max="65"
                    placeholder="18"
                    value={campaignData.targeting.age.min}
                    onChange={(e) => setCampaignData({
                      ...campaignData,
                      targeting: {
                        ...campaignData.targeting,
                        age: {
                          ...campaignData.targeting.age,
                          min: e.target.value
                        }
                      }
                    })}
                  />
                </div>
                <div>
                  <Label htmlFor="age-max" className="text-xs text-gray-500">
                    Maximum Age
                  </Label>
                  <Input
                    id="age-max"
                    name="age.max"
                    type="number"
                    min="18"
                    max="65"
                    placeholder="65"
                    value={campaignData.targeting.age.max}
                    onChange={(e) => setCampaignData({
                      ...campaignData,
                      targeting: {
                        ...campaignData.targeting,
                        age: {
                          ...campaignData.targeting.age,
                          max: e.target.value
                        }
                      }
                    })}
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="interests">Interests & Keywords</Label>
              <Textarea
                id="interests"
                name="interests"
                placeholder="investing, retirement planning, ETF, financial freedom, wealth management..."
                value={campaignData.targeting.interests}
                onChange={(e) => setCampaignData({
                  ...campaignData,
                  targeting: {
                    ...campaignData.targeting,
                    interests: e.target.value
                  }
                })}
                rows={3}
              />
              <p className="text-xs text-gray-500">
                Separate multiple interests with commas
              </p>
            </div>
          </div>
        );
      case 4: // Creative
        return (
          <div className="space-y-6 py-2">
            <div className="space-y-2">
              <Label>Upload Ad Creatives</Label>
              <Card className="border-dashed border-2 p-6">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Image className="h-6 w-6 text-gray-500" />
                  </div>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Upload files</h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Drag and drop files or click to browse
                  </p>
                  <div className="mt-6">
                    <Button variant="outline" className="text-sm">
                      Browse files
                    </Button>
                  </div>
                </div>
              </Card>
              <p className="text-xs text-gray-500">
                Accepted formats: JPG, PNG, GIF. Maximum file size: 10MB
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="headline">Ad Headline</Label>
              <Input
                id="headline"
                placeholder="Invest in Your Future with Clockwise Capital ETFs"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Ad Description</Label>
              <Textarea
                id="description"
                placeholder="Low-fee ETFs that help you achieve your financial goals. Start investing today with Clockwise Capital."
                rows={3}
              />
            </div>
            
            <div className="bg-green-50 p-3 rounded-md border border-green-100">
              <h4 className="text-sm font-medium text-green-800">Ready to Launch</h4>
              <p className="text-xs text-green-600 mt-1">
                Your campaign is almost ready! Review all details before submitting.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Create New Campaign</h2>
          <Button variant="outline" className="flex items-center gap-1" onClick={() => navigate('/campaigns')}>
            <ArrowLeft className="h-4 w-4" />
            Back to Campaigns
          </Button>
        </div>
        
        <div className="relative mt-8">
          <div className="absolute left-0 top-1/2 h-0.5 w-full bg-gray-200 -translate-y-1/2" />
          
          <ol className="relative z-10 flex justify-between">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;

              return (
                <li key={step.id} className="flex flex-col items-center relative">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isActive
                        ? 'bg-gold text-gray-900 ring-4 ring-gold-100'
                        : isCompleted
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {isCompleted ? <Check className="h-6 w-6" /> : <StepIcon className="h-5 w-5" />}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium ${
                      isActive ? 'text-gray-900' : isCompleted ? 'text-gray-700' : 'text-gray-500'
                    }`}
                  >
                    {step.title}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          {renderStepContent()}
          
          <div className="mt-8 flex justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              Back
            </Button>
            
            <Button 
              onClick={handleNext} 
              className="bg-gold hover:bg-gold-400 text-black font-medium"
            >
              {currentStep === steps.length - 1 ? (
                <span className="flex items-center gap-1">
                  Create Campaign
                  <ChevronsRight className="h-4 w-4" />
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  Next
                  <ChevronRight className="h-4 w-4" />
                </span>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CampaignWizard;
