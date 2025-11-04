"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Palette, Search, Zap, TrendingUp, Star, CheckCircle2 } from "lucide-react";
import Link from "next/link";


export default function HomePage() {
  const services = [
    {
      icon: Palette,
      title: "Website Design & Branding",
      description: "Custom, responsive websites and unique brand identities that make you stand out.",
      features: [
        " Custom Website Development-Responsive, user-friendly websites",
        "Website Maintenance & Updates -Ongoing updates, security, backups  &  optimization to ensure your site runs smoothly.",
        "Branding Materials- Creative designs for flyers, brochures, business   cards, and social media to boost your brand.",
      ],
    },
    {
      icon: Search,
      title: "Search & Visibility Marketing",
      description: "Get found online with strategic SEO and content optimization.",
      features: [
        "On-page & local SEO optimization",
        "Content strategy & optimization",
        "Marketing campaigns",
        "Monthly performance reports",
      ],
    },
    {
      icon: Zap,
      title: "Business Systems & Automation",
      description: "Streamline operations with smart automation and AI-powered solutions.",
      features: ["CRM setup & integration", "Workflow automation", "AI chatbots & assistants", "API integrations"],
    },
    {
      icon: TrendingUp,
      title: "Digital Strategy & Growth",
      description: "Tailored consulting to optimize processes and accelerate growth.",
      features: [
        "Business process optimization",
        "consulting & implementation",
        "Growth roadmaps",
        "Digital transformation strategy",
      ],
    },
  ]

  const testimonials = [
    {
      name: "Membe Sandra",
      role: "CEO, Sandys Closet",
      content: "Elevate X transformed our online presence. Our website traffic increased by 200% in just 3 months!",
      rating: 5,
    },
    {
      name: "Micheal Awa",
      role: "Founder, GrowthCo",
      content: "The automation solutions saved us 20 hours per week. Incredible ROI and professional service.",
      rating: 5,
    },
    {
      name: "Amina Diallo",
      role: "Marketing Director",
      content: "Their SEO expertise helped us rank #1 for our key terms. Highly recommend their services!",
      rating: 5,
    },
  ]

  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Happy Clients" },
    { value: "24/7", label: "Support Available" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - White Background */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
                Driving Digital <span className="text-brand-green">Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Transform your business with cutting-edge solutions. We help businesses thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white group">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img src="/professional-black-male-tech-entrepreneur-working-.jpg" alt="Digital Excellence" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Grey Background */}
      <section className="bg-brand-grey text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-brand-green mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - White Background */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold animate-fade-in-up">
              Our <span className="text-brand-green">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
              Comprehensive digital solutions tailored to elevate your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={`delay-${(index + 1) * 100}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Grey Background */}
      <section className="bg-brand-light-grey py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold animate-fade-in-up">
              Why Choose <span className="text-brand-green">ElevateX</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
              We deliver results that matter to your business
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Skilled professionals with years of experience in digital transformation",
              },
              {
                title: "Proven Results",
                description: "Track record of delivering measurable growth for our clients",
              },
              {
                title: "Local Expertise",
                description: "Deep understanding of the Cameroon market and business landscape",
              },
              {
                title: "Cutting-Edge Tech",
                description: "Latest tools and technologies including AI and automation",
              },
              {
                title: "Transparent Pricing",
                description: "Clear, upfront pricing with no hidden fees or surprises",
              },
              {
                title: "24/7 Support",
                description: "Always available to help you succeed and answer questions",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="animate-fade-in-up hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <CheckCircle2 className="h-12 w-12 text-brand-green mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - White Background */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold animate-fade-in-up">
              What Our <span className="text-brand-green">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
              Real results from real businesses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="animate-fade-in-up hover:shadow-xl transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-brand-green text-brand-green" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Grey Background */}
      <section className="bg-brand-grey text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to <span className="text-brand-green">Elevate</span> Your Business?
            </h2>
            <p className="text-xl text-gray-300">
              Let's discuss how we can help you achieve your digital goals. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-brand-grey"
              >
                <Link href="/packages">View Packages & its Benefits</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
