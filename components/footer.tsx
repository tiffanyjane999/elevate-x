import Link from "next/link";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.5 3h2v8.6a3.5 3.5 0 1 1-2-3.3V7a5 5 0 1 0 2 4.3V3h-2v0z" />
    </svg>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.52 3.48a11.9 11.9 0 0 0-16.84 0 11.8 11.8 0 0 0-3.37 8.41c0 2.34.61 4.52 1.77 6.42L2 22l4.2-1.37a11.81 11.81 0 0 0 7.3 2.64h.01a11.91 11.91 0 0 0 8.41-3.48 11.9 11.9 0 0 0 0-16.83zm-9.34 15.4a9.55 9.55 0 0 1-5.13-1.43l-.37-.23-3.12 1.02 1.04-3.05-.24-.38a9.54 9.54 0 0 1-1.45-5.13 9.53 9.53 0 0 1 16.5-6.71 9.55 9.55 0 0 1-6.43 16.69zm5.55-7.5c-.31-.15-1.85-.91-2.13-1.02-.28-.1-.48-.15-.68.15-.2.31-.78 1.02-.96 1.23-.18.2-.36.22-.67.07a8.33 8.33 0 0 1-2.45-1.52 9.3 9.3 0 0 1-1.72-2.13c-.18-.31-.02-.48.13-.63.13-.13.3-.34.45-.5a1.14 1.14 0 0 0 .15-.25c.05-.2 0-.37-.1-.52-.1-.15-.68-1.63-.94-2.23-.25-.58-.5-.5-.68-.5-.18 0-.37 0-.57 0-.2 0-.52.07-.8.38-.28.3-1.07 1.05-1.07 2.57 0 1.52 1.1 3 1.25 3.22.15.22 2.15 3.28 5.2 4.6.73.31 1.3.5 1.75.64.74.23 1.41.2 1.94.12.59-.1 1.85-.75 2.11-1.47.26-.7.26-1.3.18-1.46-.07-.15-.28-.23-.58-.38z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-grey text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-brand-green">Elev</span>
              <span className="text-white">ateX</span>
            </div>
            <p className="text-sm text-gray-400">Driving Digital Excellence...</p>

            <div className="flex gap-4">
              <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/yourbusiness" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/elevatex103?utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@elevate.x1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition-colors">
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a href="https://wa.me/237679580762" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition-colors">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-brand-green transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-brand-green transition-colors">Services</Link></li>
              <li><Link href="/packages" className="text-gray-400 hover:text-brand-green transition-colors">Packages</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-brand-green transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Website Design & Branding</li>
              <li className="text-gray-400">Search & Visibility Marketing</li>
              <li className="text-gray-400">Business Systems & Automation</li>
              <li className="text-gray-400">Digital Strategy & Growth</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Douala, Cameroon</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+237 679 580 762</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@elevatex.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Elevate X. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
