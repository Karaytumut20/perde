import FadeIn from "@/components/animations/FadeIn";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Sol: Bilgi */}
          <div>
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-primary">
                Let&apos;s talk <br /> 
                <span className="text-gray-400">acoustics.</span>
              </h1>
              <p className="text-xl text-gray-500 font-light mb-12 max-w-md">
                Have a project in mind? Our global team of acoustic experts is ready to help you find the perfect solution.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-surface rounded-full"><Mail size={20} /></div>
                  <div>
                    <h3 className="font-bold text-lg">Email Us</h3>
                    <p className="text-gray-500">sales@acousticlab.com</p>
                    <p className="text-gray-500">support@acousticlab.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-surface rounded-full"><Phone size={20} /></div>
                  <div>
                    <h3 className="font-bold text-lg">Call Us</h3>
                    <p className="text-gray-500">+1 (555) 123-4567</p>
                    <p className="text-xs text-gray-400 mt-1">Mon-Fri, 9am - 6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-surface rounded-full"><MapPin size={20} /></div>
                  <div>
                    <h3 className="font-bold text-lg">Global HQ</h3>
                    <p className="text-gray-500">
                      123 Design District Blvd,<br />
                      Los Angeles, CA 90012
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sağ: Form */}
          <div className="bg-surface p-8 md:p-12 rounded-2xl">
            <FadeIn delay={0.4}>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-black transition-colors bg-white" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-black transition-colors bg-white" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-black transition-colors bg-white" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Project Type</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-black transition-colors bg-white appearance-none">
                        <option>Office Design</option>
                        <option>Education</option>
                        <option>Hospitality</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-black transition-colors bg-white resize-none" placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-black transition-all flex items-center justify-center gap-2 group">
                  Send Message
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
}
