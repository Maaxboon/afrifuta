import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Users, Plus, MessageSquare, Target } from "lucide-react";

const ScoutDashboard = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Scout Dashboard</h1>
          <p className="text-muted-foreground">Discover and recruit talented players</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Quick Stats */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Players Viewed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">3 closing soon</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">24 pending review</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">5 unread</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Player Search */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Players
              </CardTitle>
              <CardDescription>
                Find players by position, age, and location
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="Search by name, position, or location..." />
                  <Button>Search</Button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">Kwame Asante</h4>
                      <p className="text-sm text-muted-foreground">Midfielder • Ghana • 19 years</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge>Verified</Badge>
                      <Button size="sm">View Profile</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">Amara Diallo</h4>
                      <p className="text-sm text-muted-foreground">Forward • Senegal • 17 years</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge>Verified</Badge>
                      <Button size="sm">View Profile</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">Tendai Mukamuri</h4>
                      <p className="text-sm text-muted-foreground">Defender • Zimbabwe • 18 years</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Pending</Badge>
                      <Button size="sm">View Profile</Button>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full" variant="outline">
                  View All Players
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300">
                <Plus className="h-4 w-4 mr-2" />
                Create Opportunity
              </Button>
              
              <Button className="w-full" variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                Messages
              </Button>
              
              <Button className="w-full" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Saved Players
              </Button>
              
              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-2">Recent Activity</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">3 new applications received</p>
                  <p className="text-muted-foreground">2 players saved to favorites</p>
                  <p className="text-muted-foreground">1 opportunity closing tomorrow</p>
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

export default ScoutDashboard;