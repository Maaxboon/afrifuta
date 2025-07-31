import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Calendar, Users, Trophy, Clock } from "lucide-react";

const Opportunities = () => {
  const opportunities = [
    {
      title: "Youth Academy Trial - FC Barcelona",
      club: "FC Barcelona",
      type: "Trial",
      location: "Barcelona, Spain",
      deadline: "2024-02-15",
      positions: ["Defender", "Midfielder"],
      ageRange: "16-18",
      description: "Open trial for defensive players and midfielders aged 16-18. Opportunity to join our youth academy program.",
      benefits: ["Full scholarship", "Professional training", "Career development"]
    },
    {
      title: "Scholarship Program - Manchester United",
      club: "Manchester United",
      type: "Scholarship",
      location: "Manchester, England", 
      deadline: "2024-03-01",
      positions: ["Forward", "Midfielder"],
      ageRange: "17-20",
      description: "Full scholarship program for talented forwards and midfielders. Includes education and professional training.",
      benefits: ["University education", "Professional coaching", "Living allowance"]
    },
    {
      title: "Professional Contract - Kaizer Chiefs",
      club: "Kaizer Chiefs",
      type: "Contract",
      location: "Johannesburg, South Africa",
      deadline: "2024-02-28",
      positions: ["Goalkeeper", "Defender"],
      ageRange: "18-25",
      description: "Professional contract opportunity for experienced goalkeepers and defenders.",
      benefits: ["Professional salary", "Medical coverage", "Career advancement"]
    },
    {
      title: "Academy Development - Ajax Cape Town",
      club: "Ajax Cape Town",
      type: "Academy",
      location: "Cape Town, South Africa",
      deadline: "2024-03-15",
      positions: ["All positions"],
      ageRange: "14-18", 
      description: "Development program for young talent across all positions. Focus on technical skills and tactical understanding.",
      benefits: ["World-class coaching", "Educational support", "Player development"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Trial": return "bg-blue-100 text-blue-800";
      case "Scholarship": return "bg-green-100 text-green-800";
      case "Contract": return "bg-purple-100 text-purple-800";
      case "Academy": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Opportunities</h1>
          <p className="text-muted-foreground">Discover trials, scholarships, and professional contracts</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Find Opportunities
            </CardTitle>
            <CardDescription>Filter opportunities by type, location, and requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input placeholder="Search opportunities..." />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Opportunity Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trial">Trial</SelectItem>
                  <SelectItem value="scholarship">Scholarship</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="academy">Academy</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="africa">Africa</SelectItem>
                  <SelectItem value="americas">Americas</SelectItem>
                  <SelectItem value="asia">Asia</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-gradient-hero hover:shadow-glow transition-all duration-300">
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg mb-2">{opportunity.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Trophy className="h-4 w-4" />
                      {opportunity.club}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {opportunity.location}
                    </div>
                  </div>
                  <Badge className={getTypeColor(opportunity.type)}>
                    {opportunity.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm mb-1">
                        <Users className="h-4 w-4" />
                        <span className="font-medium">Positions:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.positions.map((position, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {position}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 text-sm mb-1">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">Age Range:</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {opportunity.ageRange}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">Deadline:</span>
                      <span className="text-red-600">{opportunity.deadline}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-sm font-medium mb-2 block">Benefits:</span>
                    <div className="flex flex-wrap gap-1">
                      {opportunity.benefits.map((benefit, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 bg-gradient-hero hover:shadow-glow transition-all duration-300">
                      Apply Now
                    </Button>
                    <Button variant="outline">Save</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Opportunities
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Opportunities;