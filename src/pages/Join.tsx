import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Join AfriFuta</h1>
            <p className="text-muted-foreground">Choose your account type to get started</p>
          </div>
          
          <Tabs defaultValue="player" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="player">Player</TabsTrigger>
              <TabsTrigger value="scout">Scout/Club</TabsTrigger>
            </TabsList>
            
            <TabsContent value="player">
              <Card>
                <CardHeader>
                  <CardTitle>Create Player Account</CardTitle>
                  <CardDescription>Showcase your talent to scouts worldwide</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="goalkeeper">Goalkeeper</SelectItem>
                        <SelectItem value="defender">Defender</SelectItem>
                        <SelectItem value="midfielder">Midfielder</SelectItem>
                        <SelectItem value="forward">Forward</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300">
                    Create Player Account
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="scout">
              <Card>
                <CardHeader>
                  <CardTitle>Create Scout/Club Account</CardTitle>
                  <CardDescription>Discover and recruit talented players</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="orgName">Organization Name</Label>
                    <Input id="orgName" placeholder="FC Barcelona" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name</Label>
                    <Input id="contactName" placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="scout@club.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="orgType">Organization Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="club">Football Club</SelectItem>
                        <SelectItem value="academy">Academy</SelectItem>
                        <SelectItem value="agent">Agent</SelectItem>
                        <SelectItem value="scout">Scout</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300">
                    Create Scout Account
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Join;