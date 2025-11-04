import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of AI in Business Automation",
    excerpt:
      "Discover how artificial intelligence is revolutionizing business operations and what it means for your company's future.",
    image: "/professional-black-male-tech-entrepreneur-working-.jpg",
    category: "AI & Automation",
    date: "January 15, 2025",
    readTime: "8 min read",
    slug: "future-of-ai-business-automation",
  }

  const blogPosts = [
    {
      title: "10 Essential SEO Strategies for 2025",
      excerpt: "Stay ahead of the competition with these proven SEO tactics that will boost your search rankings.",
      image: "/professional-black-female-marketing-executive.jpg",
      category: "SEO & Marketing",
      date: "January 12, 2025",
      readTime: "6 min read",
      slug: "essential-seo-strategies-2025",
    },
    {
      title: "Building a High-Converting Landing Page",
      excerpt: "Learn the key elements that turn visitors into customers with effective landing page design.",
      image: "/professional-black-female-designer-working-on-lapt.jpg",
      category: "Web Design",
      date: "January 10, 2025",
      readTime: "5 min read",
      slug: "high-converting-landing-page",
    },
    {
      title: "Why Your Business Needs Marketing Automation",
      excerpt: "Discover how automation can save time, reduce costs, and increase your marketing ROI.",
      image: "/diverse-tech-team-collaborating-in-modern-office-b.jpg",
      category: "Automation",
      date: "January 8, 2025",
      readTime: "7 min read",
      slug: "business-needs-marketing-automation",
    },
    {
      title: "The Complete Guide to E-commerce Success",
      excerpt: "Everything you need to know to launch and grow a profitable online store in 2025.",
      image: "/professional-asian-male-developer-coding.jpg",
      category: "E-commerce",
      date: "January 5, 2025",
      readTime: "10 min read",
      slug: "complete-guide-ecommerce-success",
    },
    {
      title: "Branding Mistakes That Cost You Customers",
      excerpt: "Avoid these common branding pitfalls that can damage your reputation and hurt sales.",
      image: "/professional-black-male-tech-ceo-in-modern-office.jpg",
      category: "Branding",
      date: "January 3, 2025",
      readTime: "5 min read",
      slug: "branding-mistakes-cost-customers",
    },
    {
      title: "How to Choose the Right CMS for Your Website",
      excerpt: "Compare WordPress, Shopify, and Webflow to find the perfect platform for your business needs.",
      image: "/modern-digital-workspace-with-laptop-and-design-to.jpg",
      category: "Web Development",
      date: "December 30, 2024",
      readTime: "6 min read",
      slug: "choose-right-cms-website",
    },
  ]

  const categories = ["All", "AI & Automation", "SEO & Marketing", "Web Design", "E-commerce", "Branding"]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Dark Grey Background */}
      <section className="bg-brand-grey text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
              Blog & <span className="text-brand-green">Resources</span>
            </h1>
            <p className="text-xl text-gray-300 text-pretty">
              Expert insights, tips, and strategies to help you succeed in the digital world
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post - White Background */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 animate-fade-in-up">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-brand-green animate-slide-in-left group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium">
                      <Tag className="h-3 w-3" />
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-brand-green transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                    <Button className="bg-brand-green hover:bg-brand-green/90 text-white group/btn">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter - Grey Background */}
      <section className="bg-brand-light-grey py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category === "All" ? "default" : "outline"}
                  className={
                    category === "All"
                      ? "bg-brand-green hover:bg-brand-green/90 text-white"
                      : "hover:border-brand-green hover:text-brand-green"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid - White Background */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 animate-fade-in-up">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-brand-green animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-medium">
                        <Tag className="h-3 w-3" />
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-brand-green transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group/btn hover:border-brand-green hover:text-brand-green bg-transparent"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA - Dark Grey Background */}
      <section className="bg-brand-grey text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold">
              Stay <span className="text-brand-green">Updated</span>
            </h2>
            <p className="text-xl text-gray-300">
              Subscribe to our newsletter for the latest insights, tips, and digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-green"
              />
              <Button className="bg-brand-green hover:bg-brand-green/90 text-white px-8">Subscribe</Button>
            </div>
            <p className="text-sm text-gray-400">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
