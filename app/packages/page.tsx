import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Sparkles, Rocket, Crown } from "lucide-react"
import Link from "next/link"

export default function PackagesPage() {
  const packages = [
    {
      name: "Starter",
      icon: Sparkles,
      price: "150-250,000 FCFA",
      period: "one-time",
      description: "Perfect for small businesses getting started online",
      features: [
        "Basic Custom website or landing page",
        "Basic SEO setup",
        "Basic branding materials (logo + business card, etc)",
        "1 month support",
        "Social media integration",
      ],
      popular: false,
    },
    {
      name: "Standard",
      icon: Rocket,
      price: "300-400,000 FCFA",
      period: "one-time",
      description: "Ideal for growing businesses ready to scale",
      features: [
        "Full website design & e-commerce options",
        "Advanced SEO optimization",
        "CRM integration",
        "3 months support",
        "Email marketing setup",
        "Detailed analytics & growth consulting",
        "Content management training",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "pricing",
      description: "Complete digital transformation for established businesses",
      features: [
        "Unlimited pages",
        "Full SEO & marketing strategy",
        "Custom automation workflows",
        "AI chatbot integration",
        "5 months support",
        "Priority support",
        "Dedicated account manager",
        "Monthly strategy sessions",
        "Custom integrations",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-brand-grey text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
              Choose Your <span className="text-brand-green">Package</span>
            </h1>
            <p className="text-xl text-gray-300 text-pretty">
              Transparent pricing. Select the package that fits your business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`animate-fade-in-up hover:shadow-2xl transition-all duration-300 relative ${
                  pkg.popular
                    ? "border-4 border-brand-green scale-105 md:scale-110"
                    : "border-2 hover:border-brand-green"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-green text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div className="inline-flex p-4 rounded-2xl bg-brand-green/10 text-brand-green mx-auto mb-4">
                    <pkg.icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    {pkg.period !== "pricing" && <span className="text-muted-foreground ml-2">/ {pkg.period}</span>}
                  </div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    size="lg"
                    className={`w-full ${
                      pkg.popular
                        ? "bg-brand-green hover:bg-brand-green/90 text-white"
                        : "bg-transparent border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                    }`}
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light-grey py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold animate-fade-in-up">
              Additional <span className="text-brand-green">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
              Enhance your package with these optional add-ons
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
    
              {
                title: "Social Media Management",
                price: "150,000 FCFA/month",
                description: "Complete social media strategy and posting",
              },
              { title: " Photo & Video Production", price: "150,000 FCFA", description: "Professional product/service video & photos" },
            
            ].map((addon, index) => (
              <Card
                key={index}
                className="animate-fade-in-up hover:shadow-lg transition-all duration-300 border-2 hover:border-brand-green"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{addon.title}</CardTitle>
                  <div className="text-2xl font-bold text-brand-green">{addon.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-grey text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold">
              Not Sure Which <span className="text-brand-green">Package</span>?
            </h2>
            <p className="text-xl text-gray-300">
              Let's discuss your needs and create a custom solution that fits your budget and goals.
            </p>
            <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
