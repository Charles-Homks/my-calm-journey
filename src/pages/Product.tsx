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
  Zap,
  CheckCircle,
} from "lucide-react";

const modules = [
  {
    icon: MessageCircle,
    title: "Daily Check-ins",
    description: "Start each day with a gentle 2-minute reflection. Answer thoughtful questions about your mood, energy, and focus. Your responses are processed by our AI to understand what support you need.",
    features: [
      "Mood tracking across 4 states",
      "Energy level slider",
      "Focus and stress indicators",
      "Optional sleep quality log",
    ],
  },
  {
    icon: BookOpen,
    title: "Routine Library",
    description: "Access a curated collection of guided activities designed for busy schedules. Each routine includes clear instructions, timers, and progress tracking.",
    features: [
      { icon: Wind, label: "Breathing exercises (2-10 mins)" },
      { icon: PenTool, label: "Journaling prompts" },
      { icon: Moon, label: "Sleep wind-down rituals" },
      { icon: Brain, label: "Focus and concentration sessions" },
    ],
  },
  {
    icon: Calendar,
    title: "Personalised Plans",
    description: "Based on your check-ins, Calmnest creates a 7-day calm plan. Each plan adapts to your goals—whether you want to reduce stress, improve sleep, or boost focus.",
    features: [
      "AI-generated weekly schedules",
      "Flexible timing options",
      "Goal tracking and adjustments",
      "Progress-based recommendations",
    ],
  },
  {
    icon: BarChart3,
    title: "Weekly Summaries",
    description: "Every week, receive insights about your wellbeing journey. See patterns in your mood, understand what routines work best, and celebrate your consistency.",
    features: [
      "Mood trend visualisation",
      "Routine completion rates",
      "Personalised insights",
      "Week-over-week comparisons",
    ],
  },
];

const roadmap = [
  { status: "now", title: "Core Wellbeing Features", description: "Daily check-ins, routine library, personalised plans, and weekly summaries" },
  { status: "soon", title: "Advanced Analytics", description: "Deeper pattern recognition, long-term trend analysis, and exportable reports" },
  { status: "soon", title: "Custom Routine Builder", description: "Create and save your own routines with personalised timings and prompts" },
  { status: "future", title: "Workplace Edition", description: "Team wellbeing dashboards, anonymous insights, and admin tools for organisations" },
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
              Calmnest combines daily check-ins, guided routines, and AI personalisation to help you build sustainable wellbeing habits. Here's what's inside.
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
                  <ul className="space-y-3">
                    {module.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        {typeof feature === "string" ? (
                          <>
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </>
                        ) : (
                          <>
                            <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-foreground">{feature.label}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="card-calm shadow-card p-8">
                    <div className="aspect-square flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 rounded-3xl bg-sage-light flex items-center justify-center mx-auto mb-4">
                          <module.icon className="w-12 h-12 text-primary" />
                        </div>
                        <p className="text-lg font-medium text-foreground">{module.title}</p>
                        <p className="text-muted-foreground text-sm">Core module</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-sage-light flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
                Powered by AI Personalisation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Calmnest uses machine learning to understand your patterns and recommend routines that work for you—not generic advice.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Brain, title: "Pattern Recognition", description: "Identifies what affects your mood and energy based on check-in data" },
                { icon: Zap, title: "Adaptive Plans", description: "Your 7-day plan evolves based on what routines you complete and enjoy" },
                { icon: BarChart3, title: "Trend Analysis", description: "Spots long-term patterns to help you understand your wellbeing" },
              ].map((item, index) => (
                <div key={index} className="card-calm text-center">
                  <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Product Roadmap
            </h2>
            <p className="text-lg text-muted-foreground">
              We're constantly improving Calmnest. Here's what we're working on next.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {roadmap.map((item, index) => (
                <div key={index} className="card-calm flex items-start gap-4">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
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
                    <Building className="w-5 h-5 text-muted-foreground flex-shrink-0" />
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
                <Link to="/contact">
                  Request Access <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/demo">View Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
