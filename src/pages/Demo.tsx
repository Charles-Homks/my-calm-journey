import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Calendar,
  BookOpen,
  BarChart3,
  ChevronRight,
  CheckCircle,
  Wind,
  Moon,
  Brain,
  PenTool,
} from "lucide-react";

const demoScreens = [
  {
    title: "Daily Check-in",
    description: "A quick 2-minute reflection that captures your mood, energy, and focus. The AI uses your responses to personalise your daily plan.",
    icon: MessageCircle,
    mockup: (
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">Morning Check-in</span>
        </div>
        <p className="text-sm text-muted-foreground">How would you describe your mood right now?</p>
        <div className="flex gap-3">
          {[
            { emoji: "😊", label: "Good" },
            { emoji: "😐", label: "Okay" },
            { emoji: "😔", label: "Low" },
            { emoji: "😤", label: "Stressed" },
          ].map((item, i) => (
            <div key={i} className={`flex flex-col items-center gap-1 p-3 rounded-xl cursor-pointer transition-all ${i === 0 ? 'bg-primary/20 ring-2 ring-primary' : 'bg-muted hover:bg-muted/80'}`}>
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Energy level</p>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-to-r from-primary/50 to-primary rounded-full" />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Your 7-Day Plan",
    description: "Based on your check-in, Calmnest generates a personalised calm plan with routines scheduled across your week.",
    icon: Calendar,
    mockup: (
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">This Week</span>
          <span className="text-xs text-primary font-medium">Personalised for you</span>
        </div>
        <div className="space-y-2">
          {[
            { day: "Monday", routine: "Morning Breathing", time: "8:00 AM", done: true },
            { day: "Tuesday", routine: "Focus Session", time: "10:00 AM", done: true },
            { day: "Wednesday", routine: "Evening Journal", time: "9:00 PM", done: false },
            { day: "Thursday", routine: "Sleep Ritual", time: "10:30 PM", done: false },
            { day: "Friday", routine: "Gratitude Reflection", time: "8:00 AM", done: false },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${item.done ? 'bg-primary text-primary-foreground' : 'border-2 border-muted-foreground'}`}>
                {item.done && <CheckCircle className="w-3 h-3" />}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{item.routine}</p>
                <p className="text-xs text-muted-foreground">{item.day} · {item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Routine Cards",
    description: "Each routine is a guided activity with clear instructions. Choose from breathing, journaling, focus sessions, and sleep rituals.",
    icon: BookOpen,
    mockup: (
      <div className="p-6 space-y-4">
        <div className="p-4 rounded-xl bg-sage-light/50 border border-primary/20">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Wind className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Box Breathing</p>
              <p className="text-xs text-muted-foreground">4 minutes · Stress Relief</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">Breathe in for 4 seconds, hold for 4, exhale for 4, hold for 4. Repeat.</p>
          <div className="flex items-center justify-center py-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
              <span className="text-lg font-medium text-primary">4s</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: Moon, label: "Sleep Ritual" },
            { icon: Brain, label: "Focus Session" },
            { icon: PenTool, label: "Journaling" },
            { icon: Wind, label: "Breathing" },
          ].map((item, i) => (
            <div key={i} className="p-3 rounded-lg bg-muted/50 flex items-center gap-2">
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-xs text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Weekly Summary",
    description: "Review your mood patterns, routine completion, and progress over time. Understand what's working and celebrate your wins.",
    icon: BarChart3,
    mockup: (
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Weekly Summary</span>
          <span className="text-xs text-primary font-medium">+15% vs last week</span>
        </div>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground">Routines completed</span>
              <span className="font-medium text-foreground">12/14</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[86%] bg-primary rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground">Check-ins logged</span>
              <span className="font-medium text-foreground">7/7</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-full bg-primary rounded-full" />
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Mood trend</p>
            <div className="flex gap-1 items-end h-16">
              {[50, 65, 55, 70, 80, 75, 90].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-primary rounded-t" style={{ height: `${h}%` }} />
                  <span className="text-[10px] text-muted-foreground">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const demoIncludes = [
  "Full daily check-in experience",
  "AI-generated 7-day calm plan",
  "Sample breathing and journaling routines",
  "Weekly summary with mood patterns",
  "Preview of focus and sleep modules",
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
              See how Calmnest works
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore the core screens of Calmnest and see how daily check-ins, personalised plans, and guided routines come together to support your wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Screens */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid gap-16">
            {demoScreens.map((screen, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center">
                      <screen.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                      {screen.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {screen.description}
                  </p>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="card-calm shadow-card overflow-hidden">
                    <div className="bg-muted/30 p-2 flex items-center gap-2 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                    <div className="w-3 h-3 rounded-full bg-primary/50" />
                      </div>
                      <span className="text-xs text-muted-foreground ml-2">Calmnest App</span>
                    </div>
                    <div className="min-h-[300px] bg-card">
                      {screen.mockup}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              What's included in the demo
            </h2>
            <p className="text-lg text-muted-foreground">
              Get a complete preview of the Calmnest experience.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="card-calm shadow-card">
              <ul className="space-y-4">
                {demoIncludes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* A Day with Calmnest */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
                A day with Calmnest
              </h2>
              <p className="text-lg text-muted-foreground">
                Here's how the app fits into your daily routine.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                {[
                  { time: "Morning", activity: "2-minute check-in to set your intention for the day" },
                  { time: "Midday", activity: "Optional 5-minute focus reset or breathing exercise" },
                  { time: "Evening", activity: "Reflection and gratitude journaling before bed" },
                  { time: "Weekly", activity: "Review your summary and see your progress patterns" },
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
              Ready to experience Calmnest?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Request early access and start building your calm today.
            </p>
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
          </div>
        </div>
      </section>
    </Layout>
  );
}
