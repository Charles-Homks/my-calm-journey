import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  BookOpen,
  Calendar,
  BarChart3,
  Wind,
  Moon,
  Brain,
  PenTool,
  ChevronRight,
  Sparkles,
  Users,
  Building,
} from "lucide-react";

const modules = [
  {
    icon: MessageCircle,
    title: "Daily Check-ins",
    description: "Start each day with a gentle 2-minute reflection. Our AI asks thoughtful questions to understand how you're feeling, what's on your mind, and what support you might need.",
    features: ["Mood tracking", "Energy levels", "Stress indicators", "Sleep quality"],
  },
  {
    icon: BookOpen,
    title: "Routine Library",
    description: "Access a curated collection of guided activities designed by wellbeing experts. Each routine is crafted to fit into your day, whether you have 2 minutes or 20.",
    features: [
      { icon: Wind, label: "Breathing exercises" },
      { icon: PenTool, label: "Journaling prompts" },
      { icon: Moon, label: "Sleep rituals" },
      { icon: Brain, label: "Focus sessions" },
    ],
  },
  {
    icon: Calendar,
    title: "Personalised Plans",
    description: "Based on your check-ins, Calmnest creates a personalised 7-day calm plan. Each plan adapts to your goals, whether you want to reduce stress, improve sleep, or boost focus.",
    features: ["AI-generated plans", "Adaptive scheduling", "Goal tracking", "Progress adjustments"],
  },
  {
    icon: BarChart3,
    title: "Weekly Summaries",
    description: "Every week, receive insights about your wellbeing journey. See patterns in your mood, celebrate your wins, and understand what routines work best for you.",
    features: ["Mood patterns", "Routine completion", "Personal insights", "Trend analysis"],
  },
];

const roadmap = [
  { status: "now", title: "Individual Wellbeing", description: "Personal check-ins, routines, and plans for everyday calm" },
  { status: "soon", title: "Advanced Analytics", description: "Deeper insights into your wellbeing patterns over time" },
  { status: "future", title: "Workplace Edition", description: "Team wellbeing tools for organisations and HR leaders" },
  { status: "future", title: "Community Features", description: "Optional shared challenges and group accountability" },
];

export default function Product() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding hero-gradient">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-sage-light text-sage-dark text-sm font-medium mb-6">
              Product Overview
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
              Everything you need for <span className="text-primary">daily calm</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover the features that make Calmnest your trusted wellbeing companion. From daily check-ins to personalised plans, we've designed every detail with your peace of mind in focus.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-24">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center">
                      <module.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                      {module.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {module.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 p-3 rounded-xl bg-sage-light/50"
                      >
                        {typeof feature === "string" ? (
                          <>
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </>
                        ) : (
                          <>
                            <feature.icon className="w-4 h-4 text-primary" />
                            <span className="text-sm text-foreground">{feature.label}</span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="card-calm shadow-card aspect-square flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-3xl bg-sage-light flex items-center justify-center mx-auto mb-4">
                        <module.icon className="w-12 h-12 text-primary" />
                      </div>
                      <p className="text-muted-foreground">Feature illustration</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Product Roadmap
            </h2>
            <p className="text-lg text-muted-foreground">
              We're constantly improving Calmnest. Here's what we're working on.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {roadmap.map((item, index) => (
                <div key={index} className="card-calm flex items-start gap-4">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "now"
                        ? "bg-primary text-primary-foreground"
                        : item.status === "soon"
                        ? "bg-sky-light text-sky"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.status === "now" ? "Available" : item.status === "soon" ? "Coming Soon" : "Planned"}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {item.status === "future" && item.title.includes("Workplace") && (
                    <Building className="w-5 h-5 text-muted-foreground" />
                  )}
                  {item.status === "future" && item.title.includes("Community") && (
                    <Users className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary-foreground mb-4">
              Experience Calmnest today
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              See how these features work together to support your wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-card text-foreground hover:bg-card/90"
                asChild
              >
                <Link to="/demo">
                  View Demo <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/contact">Join Early Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
