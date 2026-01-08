import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, Trash2, Mail, Clock, Server } from "lucide-react";

const sections = [
  {
    icon: Eye,
    title: "What We Collect",
    content: [
      "**Account information**: Name, email address when you sign up for early access or contact us.",
      "**Check-in data**: Your responses to daily check-ins, including mood, energy levels, and reflections. This data is used solely to personalise your experience.",
      "**Usage data**: How you interact with Calmnest, including which routines you complete and when. This helps us improve the product.",
      "**Device information**: Basic device and browser information for technical support and security purposes.",
    ],
  },
  {
    icon: Server,
    title: "How We Use Your Data",
    content: [
      "**Personalisation**: Your check-in responses are processed by our AI to generate personalised plans and recommendations.",
      "**Product improvement**: Aggregated, anonymised data helps us understand how people use Calmnest and what features to build.",
      "**Communication**: We use your email to send important updates about your account and, with your consent, product news.",
      "**Support**: Your information helps us respond to your questions and provide technical assistance.",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "All data is encrypted in transit using TLS and at rest using industry-standard encryption.",
      "We use secure, reputable cloud infrastructure with regular security audits.",
      "Access to user data is strictly limited to authorised personnel on a need-to-know basis.",
      "We regularly review and update our security practices to protect your information.",
    ],
  },
  {
    icon: Shield,
    title: "We Never Sell Your Data",
    content: [
      "**Your data is not for sale.** We will never sell, rent, or trade your personal information to third parties.",
      "We do not share your individual data with advertisers or data brokers.",
      "Any third-party services we use (e.g., hosting, analytics) are carefully vetted and bound by strict data protection agreements.",
    ],
  },
  {
    icon: Clock,
    title: "Data Retention",
    content: [
      "We retain your account data for as long as your account is active.",
      "Check-in and routine data is retained to provide your historical insights and patterns.",
      "If you delete your account, we will delete your personal data within 30 days, except where we're legally required to retain it.",
      "Anonymised, aggregated data may be retained for product analytics.",
    ],
  },
  {
    icon: Trash2,
    title: "Your Rights & Data Deletion",
    content: [
      "**Access**: You can request a copy of your personal data at any time.",
      "**Correction**: You can update or correct your information through your account settings or by contacting us.",
      "**Deletion**: You can request deletion of your account and all associated personal data.",
      "**Portability**: You can request your data in a portable format.",
      "To exercise any of these rights, please email us at privacy@calmnest.com.",
    ],
  },
];

export default function Privacy() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding hero-gradient">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-sage-light text-sage-dark text-sm font-medium mb-6">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your privacy matters to us. This policy explains how we collect, use, and protect your data.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      {/* Privacy First Banner */}
      <section className="py-6 bg-primary">
        <div className="container-wide">
          <div className="flex items-center justify-center gap-3 text-primary-foreground">
            <Shield className="w-5 h-5" />
            <p className="font-medium">Privacy-First by Design</p>
            <span className="text-primary-foreground/70">—</span>
            <p className="text-primary-foreground/80">Your wellbeing data stays yours</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="card-calm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-sage-light flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                </div>
                <ul className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground leading-relaxed">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item.replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong class="text-foreground">$1</strong>'
                          ),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Section */}
            <div className="card-calm bg-sage-light border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">Contact Us</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to reach out.
                  </p>
                  <p className="text-foreground font-medium">privacy@calmnest.com</p>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center text-sm text-muted-foreground">
              <p>
                We may update this Privacy Policy from time to time. We'll notify you of any significant changes.
              </p>
              <p className="mt-2">
                <Link to="/contact" className="text-primary hover:underline">
                  Questions? Get in touch →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
