import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Upload, MessageSquare, Trophy } from "lucide-react";

const PlayerDashboard = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Player Dashboard</h1>
          <p className="text-muted-foreground">Manage your profile and opportunities</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Profile Completion</span>
                  <Badge variant="secondary">75%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Verification Status</span>
                  <Badge variant="outline">Pending</Badge>
                </div>
                <Button className="w-full" variant="outline">
                  Complete Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upload Content */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Share your highlights and showcase your skills
                </p>
                <Button className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300">
                  Upload Highlights
                </Button>
                <Button className="w-full" variant="outline">
                  Update Stats
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Messages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>New Messages</span>
                  <Badge>3</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Scout Inquiries</span>
                  <Badge variant="secondary">1</Badge>
                </div>
                <Button className="w-full" variant="outline">
                  View Messages
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Opportunities */}
          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Available Opportunities
              </CardTitle>
              <CardDescription>
                Trials and opportunities matching your profile
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Youth Academy Trial - FC Barcelona</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Open trial for defensive players aged 16-18
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge>Spain</Badge>
                    <Button size="sm">Apply</Button>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Scholarship Program - Manchester United</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Full scholarship for talented midfielders
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge>England</Badge>
                    <Button size="sm">Apply</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlayerDashboard;