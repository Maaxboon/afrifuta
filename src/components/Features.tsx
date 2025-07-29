import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Search, 
  Video, 
  MessageCircle, 
  Trophy, 
  Shield,
  ArrowRight 
} from "lucide-react";

const Features = () => {
  const playerFeatures = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Professional Profiles",
      description: "Create comprehensive profiles with stats, videos, and achievements to showcase your talent."
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Highlights",
      description: "Upload and share your best moments. Let your skills speak louder than words."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Find Opportunities",
      description: "Discover trials, tryouts, and career opportunities from verified scouts and clubs."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Direct Communication",
      description: "Connect directly with scouts, agents, and club representatives."
    }
  ];

  const scoutFeatures = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Advanced Search",
      description: "Find players by position, age, skill level, and location with powerful filters."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Profiles",
      description: "Access authentic player information through our verification system."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Post Opportunities",
      description: "Share trials, contracts, and development programs with talented players."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Talent Pipeline",
      description: "Build relationships and maintain a pipeline of promising athletes."
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container px-4">
        {/* Players Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              For <span className="bg-gradient-hero bg-clip-text text-transparent">Players</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to showcase your talent and connect with opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {playerFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center text-white mb-4 group-hover:shadow-glow transition-all duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-hero hover:shadow-glow transition-all duration-300">
              Create Player Profile
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Scouts Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              For <span className="bg-gradient-accent bg-clip-text text-transparent">Scouts & Clubs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover and connect with Africa's most promising football talent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {scoutFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center text-white mb-4 group-hover:shadow-glow transition-all duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300">
              Join as Scout/Club
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;