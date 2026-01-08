import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Sparkles, Users, Building } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    audience: "Individual",
    description: "Perfect for individuals looking to build personal wellbeing routines.",
    price: "Free",
    period: "during early access",
    features: [
      "Daily check-ins",
      "Personalised 7-day plans",
      "Core routine library",
      "Weekly summaries",
      "Basic mood tracking",
    ],
    cta: "Join Early Access",
    ctaLink: "/contact",
    popular: false,
    icon: Sparkles,
  },
  {
    name: "Plus",
    audience: "Individual",
    description: "For those who want deeper insights and more advanced features.",
    price: "TBC",
    period: "per month",
    features: [
      "Everything in Starter",
      "Extended routine library",
      "Advanced analytics",
      "Custom routine creation",
      "Priority support",
      "Monthly wellbeing report",
    ],
    cta: "Join Waitlist",
    ctaLink: "/contact",
    popular: true,
    icon: Sparkles,
  },
  {
    name: "Partner",
    audience: "Organisations",
    description: "Bring Calmnest to your team with tools designed for workplace wellbeing.",
    price: "Custom",
    period: "per organisation",
    features: [
      "Everything in Plus",
      "Team dashboard",
      "Anonymous aggregated insights",
      "Admin controls",
      "Onboarding support",
      "Dedicated account manager",
    ],
    cta: "Contact Us",
    ctaLink: "/contact",
    popular: false,
    icon: Building,
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding hero-gradient">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-sage-light text-sage-dark text-sm font-medium mb-6">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose the plan that fits your needs. All plans include our core features with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Early Access Banner */}
      <section className="py-6 bg-primary">
        <div className="container-wide">
          <div className="flex items-center justify-center gap-3 text-primary-foreground">
            <Sparkles className="w-5 h-5" />
            <p className="font-medium">Early Access Pricing for Pilots</p>
            <span className="text-primary-foreground/70">—</span>
            <p className="text-primary-foreground/80">Join now and lock in special rates</p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`card-calm relative ${
                  tier.popular ? "ring-2 ring-primary shadow-elevated" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sage-light flex items-center justify-center">
                    <tier.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{tier.name}</h3>
                    <p className="text-xs text-muted-foreground">{tier.audience}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {tier.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-display font-semibold text-foreground">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-muted-foreground ml-2 text-sm">{tier.period}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.popular ? "hero" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to={tier.ctaLink}>
                    {tier.cta}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cream-dark">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
              Pricing FAQs
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Is Calmnest really free during early access?",
                a: "Yes! Our Starter plan is completely free during the early access period. We want you to experience the full value of Calmnest before we finalise pricing.",
              },
              {
                q: "What happens after early access ends?",
                a: "Early access users will receive special pricing when we launch. We'll give you plenty of notice before any changes, and your data will always be yours.",
              },
              {
                q: "Can I switch plans later?",
                a: "Absolutely. You can upgrade or downgrade your plan at any time. We'll make sure the transition is seamless.",
              },
              {
                q: "Is there a contract for the Partner plan?",
                a: "We offer flexible terms for organisations. Contact us to discuss what works best for your team.",
              },
            ].map((item, index) => (
              <div key={index} className="card-calm">
                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
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
              Start your calm journey today
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join early access and be among the first to experience Calmnest.
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
