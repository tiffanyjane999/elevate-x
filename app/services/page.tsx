import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Search, Zap, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Palette,
      title: "Website Design & Branding",
      description:
        "Create a stunning online presence that captures your brand essence and converts visitors into customers.",
      features: [
        "Custom Website Development :Responsive, user-friendly websites",
        "Website Maintenance & Updates :Ongoing updates, security, backups & optimization to ensure your site runs smoothly",
        "Branding Materials Creative designs for flyers, brochures, business cards, and social media to boost your brand",
      
  
    
      ],
      benefits: [
        "Stand out from competitors",
        "Build trust with professional design",
        "Increase conversion rates",
        "Mobile-first approach",
      ],
    },
    {
      icon: Search,
      title: "Search & Visibility Marketing",
      description:
        "Get found by your ideal customers with strategic SEO and content optimization that drives organic traffic.",
      features: [
        "Comprehensive SEO audits",
        "On-page optimization",
        "Local SEO for businesses",
        "Content strategy & creation",
        "Keyword research & targeting",
        "Monthly performance reports",
      ],
      benefits: [
        "Rank higher on Google",
        "Attract qualified leads",
        "Reduce advertising costs",
        "Build long-term visibility",
      ],
    },
    {
      icon: Zap,
      title: "Business Systems & Automation",
      description:
        "Streamline operations and save time with intelligent automation solutions powered by modern technology.",
      features: [
        "CRM setup & integration",
        "Workflow automation",
        "AI chatbots & virtual assistants",
        "API integrations",
        "Email marketing automation",
        "Custom business tools",
      ],
      benefits: [
        "Save 20+ hours per week",
        "Reduce human error",
        "Scale without hiring",
        "Improve customer experience",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Strategy & Growth",
      description:
        "Get expert guidance to optimize your digital presence and accelerate business growth with data-driven strategies.",
      features: [
        "Business process analysis",
        "consulting & implementation",
        "Growth roadmap development",
        "Digital transformation strategy",
        "Technology stack recommendations",
        "Ongoing strategic support",
      ],
      benefits: ["Make informed decisions", "Stay ahead of competitors", "Maximize ROI", "Future-proof your business"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-brand-grey text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
              Our <span className="text-brand-green">Services</span>
            </h1>
            <p className="text-xl text-gray-300 text-pretty">
              Comprehensive digital solutions designed to elevate your business and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section - Alternating Backgrounds */}
      {services.map((service, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? "bg-background" : "bg-brand-light-grey"}`}>
          <div className="container mx-auto px-4">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div
                className={`space-y-6 ${index % 2 === 1 ? "md:order-2 animate-slide-in-right" : "animate-slide-in-left"}`}
              >
                <div className="inline-flex p-4 rounded-2xl bg-brand-green/10 text-brand-green">
                  <service.icon className="h-12 w-12" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                <p className="text-lg text-muted-foreground">{service.description}</p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">What's Included:</h3>
                  <ul className="grid gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white group">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              <Card
                className={`${index % 2 === 1 ? "md:order-1 animate-slide-in-left" : "animate-slide-in-right"} border-2 hover:border-brand-green transition-colors`}
              >
                <CardHeader>
                  <CardTitle>Key Benefits</CardTitle>
                  <CardDescription>Why choose this service</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-lg bg-brand-green/5 hover:bg-brand-green/10 transition-colors"
                      >
                        <div className="h-2 w-2 rounded-full bg-brand-green flex-shrink-0" />
                        <span className="font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-brand-grey text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Get <span className="text-brand-green">Started</span>?
            </h2>
            <p className="text-xl text-gray-300">
              Choose a service or contact us for a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
                <Link href="/packages">View Packages</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-brand-grey"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
