import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Target, 
  Heart, 
  Globe, 
  Users, 
  Trophy, 
  Star,
  ArrowRight,
  MapPin,
  Calendar,
  Award
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "5,000+", label: "Active Players" },
    { icon: <Globe className="w-6 h-6" />, number: "50+", label: "Countries" },
    { icon: <Trophy className="w-6 h-6" />, number: "500+", label: "Opportunities" },
    { icon: <Award className="w-6 h-6" />, number: "100+", label: "Partner Clubs" }
  ];

  const team = [
    {
      name: "Kwame Mensah",
      role: "Founder & CEO",
      bio: "Former professional footballer with 15 years of experience in African football development.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Scouting",
      bio: "International scout with extensive network across European and African football.",
      image: "/placeholder.svg"
    },
    {
      name: "Mohamed Al-Hassan",
      role: "Technical Director",
      bio: "Software engineer passionate about using technology to transform football in Africa.",
      image: "/placeholder.svg"
    },
    {
      name: "Fatima Diop",
      role: "Head of Operations",
      bio: "Operations expert focused on building sustainable football ecosystems across the continent.",
      image: "/placeholder.svg"
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Opportunity for All",
      description: "We believe every talented footballer deserves a chance to showcase their skills and pursue their dreams, regardless of their background or location."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Authentic Connections",
      description: "We facilitate genuine relationships between players, scouts, and clubs built on trust, transparency, and mutual respect."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "African Excellence",
      description: "We celebrate and promote the incredible talent across Africa, connecting it with opportunities worldwide while staying rooted in our heritage."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Innovation & Growth",
      description: "We continuously innovate to provide the best tools and experiences that help players and scouts achieve their goals."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4" variant="secondary">About AfriFuta</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connecting Dreams to
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Global Opportunities
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            AfriFuta is more than a platform – we're a movement dedicated to unlocking the incredible 
            football talent across Africa and connecting it with opportunities worldwide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To democratize football opportunities across Africa by creating a transparent, 
                accessible platform that connects talented players with scouts, agents, and clubs worldwide.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We're building bridges between raw talent and professional opportunities, ensuring that 
                geographical location or economic circumstances don't limit a player's potential to succeed.
              </p>
              <Button size="lg" className="bg-gradient-hero hover:shadow-glow transition-all duration-300" asChild>
                <Link to="/join">
                  Join Our Mission
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at AfriFuta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate individuals dedicated to transforming African football
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our <span className="text-primary">Story</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                AfriFuta was born from a simple yet powerful observation: Africa is home to some of the world's 
                most talented footballers, yet many never get the opportunity to showcase their skills to the 
                global football community.
              </p>
              <p>
                Our founder, Kwame Mensah, experienced this firsthand during his playing career. Despite his talent, 
                he struggled to connect with the right opportunities due to limited visibility and networking 
                constraints. This experience sparked the vision for AfriFuta.
              </p>
              <p>
                Today, we're proud to be the leading platform connecting African football talent with global 
                opportunities. Every day, we work to ensure that talent, not geography or connections, 
                determines a player's success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Part of the Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a player with dreams or a scout seeking talent, AfriFuta is your gateway to success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-hero hover:shadow-glow transition-all duration-300" asChild>
              <Link to="/join">Join AfriFuta Today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/opportunities">Explore Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;