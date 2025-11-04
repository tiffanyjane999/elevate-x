import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Lightbulb, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to helping businesses succeed through innovative digital solutions.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships based on trust and results.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of trends, bringing you the latest digital strategy.",
    },
    {
      icon: Award,
      title: "Excellence Always",
      description: "We deliver high-quality work that exceeds expectations, every single time.",
    },
  ]


  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Dark Grey Background */}
      <section className="bg-brand-grey text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
              About <span className="text-brand-green">ElevateX</span>
            </h1>
            <p className="text-xl text-gray-300 text-pretty">
              We're a digital agency passionate about helping businesses in thrive in the digital
              age through innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - White Background */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-brand-green">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Founded with a vision to bridge the digital divide, Elevate X was born from the belief that every
                business deserves access to world-class digital solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                We started as a small team of passionate technologists and have grown into a full-service digital
                agency, serving clients across Cameroon and internationally.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to have helped over 50 businesses transform their digital presence and achieve
                measurable growth.
              </p>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src="/diverse-tech-team-collaborating-in-modern-office-b.jpg"
                alt="Elevate X Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Grey Background */}
      <section className="bg-brand-light-grey py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold animate-fade-in-up">
              Our <span className="text-brand-green">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="animate-fade-in-up hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-brand-green"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-brand-green/10 text-brand-green mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Grey Background */}
      <section className="bg-brand-grey text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Work <span className="text-brand-green">Together</span>?
            </h2>
            <p className="text-xl text-gray-300">Let's discuss how we can help elevate your business to new heights.</p>
            <Button asChild size="lg" className="bg-brand-green hover:bg-brand-green/90 text-white">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
