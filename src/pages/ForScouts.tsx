import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Search, 
  Shield, 
  Trophy, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Target, 
  Globe,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";

const ForScouts = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Advanced Player Search",
      description: "Use powerful filters to find players by position, age, skill level, location, and performance metrics.",
      benefits: ["Position-specific filters", "Age and location targeting", "Performance analytics", "Video highlights access"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Player Profiles",
      description: "Access authentic player information through our comprehensive verification system.",
      benefits: ["Identity verification", "Skill assessments", "Performance validation", "Background checks"]
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Opportunity Management",
      description: "Post trials, contracts, and development programs to attract the right talent.",
      benefits: ["Custom opportunity posts", "Application management", "Automated matching", "Progress tracking"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Get detailed analytics on player performance, market trends, and recruitment success.",
      benefits: ["Performance metrics", "Market analysis", "Recruitment ROI", "Trend insights"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Direct Communication",
      description: "Connect directly with players, agents, and other stakeholders in the football ecosystem.",
      benefits: ["Secure messaging", "Video calls", "Document sharing", "Communication history"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Access talent from across Africa and connect with international football networks.",
      benefits: ["Pan-African reach", "International connections", "Cross-border scouting", "Network expansion"]
    }
  ];

  const pricingPlans = [
    {
      name: "Scout Basic",
      price: "$49",
      period: "month",
      description: "Perfect for individual scouts",
      features: [
        "Search up to 100 players/month",
        "Basic player profiles",
        "Direct messaging",
        "5 active opportunities",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Club Professional",
      price: "$149",
      period: "month", 
      description: "Ideal for football clubs",
      features: [
        "Unlimited player searches",
        "Advanced analytics",
        "Video call capabilities",
        "20 active opportunities",
        "Priority support",
        "Team collaboration tools"
      ],
      popular: true
    },
    {
      name: "Academy Enterprise",
      price: "$299",
      period: "month",
      description: "For academies and agencies",
      features: [
        "Everything in Professional",
        "Unlimited opportunities",
        "White-label options",
        "API access",
        "Dedicated account manager",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4" variant="secondary">For Scouts & Clubs</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Africa's
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Next Football Stars
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect with verified talent across Africa. Our platform gives you the tools to discover, 
            evaluate, and recruit the continent's most promising footballers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-hero hover:shadow-glow transition-all duration-300" asChild>
              <Link to="/scout-dashboard">Start Scouting Today</Link>
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="text-primary">Scout Smarter</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools you need for successful football recruitment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center text-white mb-4 group-hover:shadow-glow transition-all duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="text-primary">Scouting Plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options to suit scouts, clubs, and academies of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-hero hover:shadow-glow' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discover Your Next Star?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of scouts and clubs already using AfriFuta to find exceptional talent
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-hero hover:shadow-glow transition-all duration-300" asChild>
              <Link to="/join">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForScouts;