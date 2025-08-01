import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Join = () => {
  const [playerData, setPlayerData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    password: "",
  });
  
  const [scoutData, setScoutData] = useState({
    orgName: "",
    contactName: "",
    email: "",
    orgType: "",
    password: "",
  });
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePlayerSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: playerData.email,
        password: playerData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            full_name: `${playerData.firstName} ${playerData.lastName}`,
            role: 'player',
            position: playerData.position,
          },
        },
      });

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Please check your email to verify your account!",
        });
        navigate("/signin");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleScoutSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: scoutData.email,
        password: scoutData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            full_name: scoutData.contactName,
            role: 'scout',
            organization: scoutData.orgName,
            organization_type: scoutData.orgType,
          },
        },
      });

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Please check your email to verify your account!",
        });
        navigate("/signin");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

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
                  <form onSubmit={handlePlayerSignup} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John"
                          value={playerData.firstName}
                          onChange={(e) => setPlayerData({...playerData, firstName: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe"
                          value={playerData.lastName}
                          onChange={(e) => setPlayerData({...playerData, lastName: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com"
                        value={playerData.email}
                        onChange={(e) => setPlayerData({...playerData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position</Label>
                      <Select 
                        value={playerData.position} 
                        onValueChange={(value) => setPlayerData({...playerData, position: value})}
                      >
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
                      <Input 
                        id="password" 
                        type="password"
                        value={playerData.password}
                        onChange={(e) => setPlayerData({...playerData, password: e.target.value})}
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300"
                      disabled={loading}
                    >
                      {loading ? "Creating Account..." : "Create Player Account"}
                    </Button>
                  </form>
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
                  <form onSubmit={handleScoutSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="orgName">Organization Name</Label>
                      <Input 
                        id="orgName" 
                        placeholder="FC Barcelona"
                        value={scoutData.orgName}
                        onChange={(e) => setScoutData({...scoutData, orgName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Name</Label>
                      <Input 
                        id="contactName" 
                        placeholder="John Smith"
                        value={scoutData.contactName}
                        onChange={(e) => setScoutData({...scoutData, contactName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="scoutEmail">Email</Label>
                      <Input 
                        id="scoutEmail" 
                        type="email" 
                        placeholder="scout@club.com"
                        value={scoutData.email}
                        onChange={(e) => setScoutData({...scoutData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="orgType">Organization Type</Label>
                      <Select 
                        value={scoutData.orgType} 
                        onValueChange={(value) => setScoutData({...scoutData, orgType: value})}
                      >
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
                      <Label htmlFor="scoutPassword">Password</Label>
                      <Input 
                        id="scoutPassword" 
                        type="password"
                        value={scoutData.password}
                        onChange={(e) => setScoutData({...scoutData, password: e.target.value})}
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300"
                      disabled={loading}
                    >
                      {loading ? "Creating Account..." : "Create Scout Account"}
                    </Button>
                  </form>
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