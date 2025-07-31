import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin, Calendar, Trophy } from "lucide-react";

const FindPlayers = () => {
  const players = [
    {
      name: "Kwame Asante",
      position: "Midfielder",
      age: 19,
      country: "Ghana",
      verified: true,
      image: "/placeholder.svg"
    },
    {
      name: "Amara Diallo", 
      position: "Forward",
      age: 17,
      country: "Senegal",
      verified: true,
      image: "/placeholder.svg"
    },
    {
      name: "Tendai Mukamuri",
      position: "Defender", 
      age: 18,
      country: "Zimbabwe",
      verified: false,
      image: "/placeholder.svg"
    },
    {
      name: "Fatima Kone",
      position: "Goalkeeper",
      age: 20,
      country: "Ivory Coast", 
      verified: true,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Find Players</h1>
          <p className="text-muted-foreground">Discover talented footballers from across Africa</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search Players
            </CardTitle>
            <CardDescription>Use filters to find players that match your criteria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input placeholder="Search by name..." />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="goalkeeper">Goalkeeper</SelectItem>
                  <SelectItem value="defender">Defender</SelectItem>
                  <SelectItem value="midfielder">Midfielder</SelectItem>
                  <SelectItem value="forward">Forward</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ghana">Ghana</SelectItem>
                  <SelectItem value="nigeria">Nigeria</SelectItem>
                  <SelectItem value="senegal">Senegal</SelectItem>
                  <SelectItem value="kenya">Kenya</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-gradient-hero hover:shadow-glow transition-all duration-300">
                <Filter className="h-4 w-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                      {player.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{player.name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {player.country}
                      </div>
                    </div>
                  </div>
                  {player.verified && (
                    <Badge variant="secondary">Verified</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Position:</span>
                    <Badge variant="outline">{player.position}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Age:</span>
                    <span className="text-sm font-medium">{player.age} years</span>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1">View Profile</Button>
                    <Button size="sm" variant="outline">Message</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Players
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindPlayers;