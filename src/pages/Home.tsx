import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import {
  CheckCircle,
  Calendar,
  Sparkles,
  BarChart3,
  MessageCircle,
  Brain,
  Shield,
  Heart,
  ChevronRight,
  Clock,
  BookOpen,
  Moon,
  Wind,
  AlertTriangle,
  Lock,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroBg from "@/assets/hero-bg.jpg";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-sage-light text-sage-dark text-sm font-medium mb-6">
              AI-Powered Wellbeing Support
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
              Find your calm, <br className="hidden sm:block" />
              <span className="text-primary">one day at a time</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Calmnest helps you build sustainable wellbeing routines through personalised daily check-ins and guided self-care activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Join Early Access <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/demo">View Demo</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Modern life is overwhelming
            </h2>
            <p className="text-lg text-muted-foreground">
              You're not alone if you feel this way.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: "Constant stress", description: "Juggling work, life, and everything in between" },
              { icon: Clock, title: "No time for self-care", description: "Wellbeing always falls to the bottom of the list" },
              { icon: Calendar, title: "Inconsistent routines", description: "Starting habits but struggling to maintain them" },
              { icon: MessageCircle, title: "Lack of structure", description: "Not knowing where to begin or what to focus on" },
            ].map((item, index) => (
              <div
                key={index}
                className="card-calm text-center group hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-sage-light flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="w-7 h-7 text-sage-dark group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-sage-light text-sage-dark text-sm font-medium mb-4">
                The Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
                Your personal wellbeing companion
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Calmnest gives you daily check-ins to understand how you're feeling, then creates a personalised 7-day calm plan tailored to your needs.
              </p>
              <ul className="space-y-4">
                {[
                  "Quick daily check-ins that take just 2 minutes",
                  "AI-generated personalised routines for your goals",
                  "Guided activities for stress, focus, sleep, and reflection",
                  "Weekly summaries to track your progress",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="card-calm shadow-elevated p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Your 7-Day Calm Plan</p>
                    <p className="text-sm text-muted-foreground">Personalised for you</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {["Morning breathing exercise", "Midday focus session", "Evening reflection journal"].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-sage-light/50">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              What you get with Calmnest
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple tools designed to fit into your daily life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Daily Check-in",
                description: "A gentle 2-minute reflection to understand how you're feeling and what you need today.",
              },
              {
                icon: BookOpen,
                title: "Guided Routines",
                description: "Breathing exercises, journaling prompts, focus sessions, and sleep rituals tailored to you.",
              },
              {
                icon: BarChart3,
                title: "Weekly Summary",
                description: "See your patterns and progress over time with insights that help you understand yourself better.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card-calm group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl bg-sage-light flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              How it works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to a calmer you.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Check-in", description: "Tell us how you're feeling in a quick daily reflection", icon: MessageCircle },
              { step: "2", title: "Get your plan", description: "Receive a personalised 7-day calm plan based on your needs", icon: Calendar },
              { step: "3", title: "Follow routines", description: "Complete gentle activities with guided routine cards", icon: BookOpen },
              { step: "4", title: "Reflect & grow", description: "Review your progress and celebrate your journey", icon: BarChart3 },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="card-calm text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-semibold">
                    {item.step}
                  </div>
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-sky-light text-sky text-sm font-medium mb-4">
                  Powered by AI
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
                  Why AI makes a difference
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our AI learns from your check-ins to provide truly personalised support. It spots patterns in your mood and energy, suggesting routines that work best for you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-sage-light/50">
                    <Sparkles className="w-6 h-6 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Personalised recommendations</p>
                      <p className="text-sm text-muted-foreground">Routines tailored to your unique patterns and preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-sage-light/50">
                    <Brain className="w-6 h-6 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Pattern recognition</p>
                      <p className="text-sm text-muted-foreground">Understand what affects your wellbeing over time</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-calm shadow-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-charcoal-light" />
                  <p className="text-sm font-medium text-muted-foreground">Important note</p>
                </div>
                <p className="text-foreground leading-relaxed">
                  Calmnest uses AI to personalise your wellbeing routines based on your inputs. It does not diagnose, treat, or provide medical advice. Our AI is designed for self-guided support, not clinical care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="section-padding bg-sage-light">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Your safety comes first
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Calmnest is designed for self-guided wellbeing support. It is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <div className="card-calm max-w-2xl mx-auto text-left">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">If you're in danger or crisis</p>
                  <p className="text-muted-foreground mb-4">
                    If you or someone you know is in immediate danger, please contact local emergency services (999 in the UK) or a crisis helpline immediately.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Calmnest is not an emergency service and cannot provide real-time crisis support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              See Calmnest in action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore how the app helps you build calmer days.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Daily Check-in", description: "A gentle reflection to start your day" },
              { title: "Your 7-Day Plan", description: "Personalised routines tailored to you" },
              { title: "Routine Cards", description: "Guided activities for calm and focus" },
            ].map((item, index) => (
              <div key={index} className="card-calm">
                <div className="aspect-[4/3] bg-sage-light/50 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      {index === 0 && <MessageCircle className="w-8 h-8 text-primary" />}
                      {index === 1 && <Calendar className="w-8 h-8 text-primary" />}
                      {index === 2 && <BookOpen className="w-8 h-8 text-primary" />}
                    </div>
                    <p className="text-sm text-muted-foreground">Screenshot placeholder</p>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/demo">
                View Full Demo <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Frequently asked questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Is Calmnest a replacement for therapy or medical advice?",
                answer: "No. Calmnest is a self-guided wellbeing tool designed to help you build healthy routines and reflect on your mood. It is not a substitute for professional medical advice, diagnosis, or treatment. If you have mental health concerns, please consult a qualified healthcare professional.",
              },
              {
                question: "Who is Calmnest for?",
                answer: "Calmnest is designed for anyone looking to build consistent wellbeing routines, manage everyday stress, improve focus, develop better sleep habits, or practice self-reflection. It's ideal for busy professionals, students, and anyone seeking structured self-care.",
              },
              {
                question: "How is my data used?",
                answer: "Your data is used solely to personalise your Calmnest experience. We do not sell your data to third parties. Your check-ins and reflections are processed to generate your personalised plans and summaries. See our Privacy Policy for full details.",
              },
              {
                question: "Is my information private and secure?",
                answer: "Yes. We take privacy seriously. Your data is encrypted and stored securely. We follow industry best practices for data protection. You can request deletion of your data at any time.",
              },
              {
                question: "Can I use Calmnest at work?",
                answer: "Absolutely! Many of our routines are designed to fit into a work day, including focus sessions and quick stress-relief exercises. We're also developing a workplace version for teams and organisations.",
              },
            ].map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-calm border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline px-6 py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-6 pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary-foreground mb-4">
              Ready to find your calm?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join our early access programme and be the first to experience Calmnest.
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
