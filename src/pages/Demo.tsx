import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Play,
  MessageCircle,
  Calendar,
  BookOpen,
  BarChart3,
  ChevronRight,
} from "lucide-react";

const screenshots = [
  {
    title: "Daily Check-in",
    description: "Answer a few gentle questions about how you're feeling today. Takes just 2 minutes.",
    icon: MessageCircle,
  },
  {
    title: "Your 7-Day Plan",
    description: "Receive a personalised calm plan based on your check-in, tailored to your goals.",
    icon: Calendar,
  },
  {
    title: "Routine Card + Summary",
    description: "Follow guided routines and see your weekly progress with insights.",
    icon: BookOpen,
  },
];

export default function Demo() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding hero-gradient">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-sage-light text-sage-dark text-sm font-medium mb-6">
              Product Demo
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
              See Calmnest in action
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Watch how Calmnest helps you build sustainable wellbeing routines, one day at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="card-calm shadow-elevated overflow-hidden">
              <div className="aspect-video bg-sage-light flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 shadow-card cursor-pointer hover:scale-105 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-lg font-medium text-foreground mb-1">Demo Video</p>
                  <p className="text-sm text-muted-foreground">Coming soon - Video placeholder</p>
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6">
              Our demo video will walk you through a typical day with Calmnest.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              A glimpse inside the app
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the key screens that make Calmnest your daily wellbeing companion.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {screenshots.map((item, index) => (
              <div key={index} className="card-calm hover:shadow-elevated transition-all duration-300">
                <div className="aspect-[3/4] bg-sage-light/50 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-4 border-2 border-dashed border-primary/20 rounded-lg flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Screenshot placeholder</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Feels Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
                  What a day with Calmnest looks like
                </h2>
                <div className="space-y-6">
                  {[
                    { time: "Morning", activity: "Quick 2-minute check-in to set your intention" },
                    { time: "Midday", activity: "5-minute focus routine to reset and recharge" },
                    { time: "Evening", activity: "Gentle reflection and gratitude journaling" },
                    { time: "Weekly", activity: "Review your patterns and celebrate progress" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-20 flex-shrink-0">
                        <span className="text-sm font-medium text-primary">{item.time}</span>
                      </div>
                      <div className="flex-1 pb-6 border-b border-border last:border-0">
                        <p className="text-foreground">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-calm shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Weekly Summary</p>
                    <p className="text-sm text-muted-foreground">Your wellbeing at a glance</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Check-ins completed", value: "7/7", percentage: 100 },
                    { label: "Routines finished", value: "12/14", percentage: 86 },
                    { label: "Average mood", value: "Good", percentage: 75 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium text-foreground">{item.value}</span>
                      </div>
                      <div className="h-2 bg-sage-light rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary-foreground mb-4">
              Ready to try Calmnest?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join our early access programme and start building your calm today.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-card text-foreground hover:bg-card/90"
              asChild
            >
              <Link to="/contact">
                Join Early Access <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
