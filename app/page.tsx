import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Briefcase, Users, Trophy, Clock } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Professional workspace"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6">Professional Excellence</h1>
          <p className="text-xl mb-8">Delivering Outstanding Results for Your Business</p>
          <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, title: "Professional", text: "Years of expertise in the industry" },
              { icon: Users, title: "Client-Focused", text: "Tailored solutions for your needs" },
              { icon: Trophy, title: "Excellence", text: "Award-winning service quality" },
              { icon: Clock, title: "Timely", text: "Meeting deadlines consistently" },
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <Card className="p-8">
            <ContactForm />
          </Card>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}