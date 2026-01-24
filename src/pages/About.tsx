import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Shield,
  Lock,
  Leaf,
  ChevronRight,
  Sparkles,
  Target,
  Users,
  Linkedin,
  Twitter,
} from "lucide-react";

const values = [
  {
    icon: Lock,
    title: "Privacy-First",
    description: "Your data belongs to you. We never sell your information and always give you control over what you share and how long we keep it.",
  },
  {
    icon: Shield,
    title: "Safety-First",
    description: "We design with care, including clear guidance on when to seek professional support. Calmnest is not a replacement for clinical care.",
  },
  {
    icon: Heart,
    title: "Compassion-Led",
    description: "Every feature is built with empathy. We understand that wellbeing is personal and that everyone's journey looks different.",
  },
  {
    icon: Sparkles,
    title: "Evidence-Informed",
    description: "Our routines are grounded in wellbeing research—breathing techniques, journaling practices, and sleep hygiene principles.",
  },
];

const teamMembers = [
  {
    name: "Donatus Abbah",
    role: "Founder & CEO",
    bio: "Experienced in product development and passionate about making wellbeing support accessible. Building Calmnest to bridge the gap between self-care and professional support.",
    placeholder: true,
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding hero-gradient">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-sage-light text-sage-dark text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
              Building a calmer world, <span className="text-primary">one routine at a time</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Calmnest was founded on a simple belief: everyone deserves accessible tools to support their daily wellbeing, without needing to navigate complex apps or expensive services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We're on a mission to make self-guided wellbeing support accessible to everyone. In a world that moves fast, we believe in the power of small, consistent moments of calm.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Calmnest combines thoughtful design with AI personalisation to help you build routines that actually stick—without the pressure of perfection or the guilt of missing a day.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're building for the millions of people who know they need to prioritise their wellbeing but struggle to find the time or structure to make it happen.
                </p>
              </div>
              <div className="card-calm shadow-card flex items-center justify-center aspect-square">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-3xl bg-sage-light flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-12 h-12 text-primary" />
                  </div>
                  <p className="font-display text-2xl text-foreground">Calmnest</p>
                  <p className="text-muted-foreground">Your wellbeing companion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
              Why now?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Mental health awareness has never been higher, yet practical, accessible tools remain out of reach for many. Traditional approaches often require significant time, money, or access to professionals.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              AI technology now enables personalised, adaptive support that meets people where they are. We saw an opportunity to create something that fills the gap between "doing nothing" and "seeing a therapist"—a daily companion for the moments in between.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Calmnest isn't therapy. It's structure. It's accountability. It's a gentle nudge to take 5 minutes for yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
                Meet the Team
              </h2>
              <p className="text-lg text-muted-foreground">
                The people behind Calmnest.
              </p>
            </div>
            <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="card-calm shadow-card text-center">
                  <div className="w-24 h-24 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              We're a small team with big ambitions. Interested in joining us?{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-sage-light">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-calm hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary-foreground mb-4">
              Join us on this journey
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Be part of our early access community and help shape the future of Calmnest.
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
