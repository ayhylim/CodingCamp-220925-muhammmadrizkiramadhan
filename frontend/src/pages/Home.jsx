import React from "react";
import { Card } from "../components/ui/card";
import { MapPin } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Hi 👋, Welcome To My Website
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ini adalah website portofolio saya
          </p>
        </div>
      </section>

      {/* Headquarters Section */}
      <section className="bg-white py-16 px-6 border-t-2 border-gray-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Headquarter</h2>
          <div className="flex justify-center space-x-16">
            {["Jakarta", "Bandung", "Surabaya"].map((city) => (
              <div key={city} className="text-center">
                <div className="w-24 h-24 border-2 border-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-lg font-medium text-gray-700">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Trusted Travel Agent's
            </h2>
            <p className="text-xl text-gray-600">
              Your happiness is our happiness
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-8 bg-gray-200">
                <div className="aspect-video flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4"></div>
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </Card>
              <div className="mt-6">
                <p className="text-lg italic text-gray-600 mb-4">
                  "Liburan jadi menyenangkan bersama Travel Agentku."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Florence Hughes</p>
                    <p className="text-sm text-gray-500">Ibu Rumah Tangga, 26</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
              <p className="text-gray-600 mb-6">
                Sales akan menghubungi anda 1x24 jam setelah data kami terima.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    placeholder="First and last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What are you interested in?
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select option</option>
                    <option>Domestic Travel</option>
                    <option>International Travel</option>
                    <option>Business Travel</option>
                  </select>
                </div>
                
                <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-900 transition-colors duration-200">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Use this space to provide users with more information about your offer. 
              Consider it a follow-up to your headline and explain the benefits of your service or product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                number: "1",
                title: "Your first feature, written in the form of a benefit statement."
              },
              {
                number: "2", 
                title: "Your second feature, written in the form of a benefit statement."
              },
              {
                number: "3",
                title: "Your third feature written, in the form of a benefit statement."
              }
            ].map((item) => (
              <div key={item.number} className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold">{item.number}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-blue-500" />,
                title: "Bali",
                description: "Travel dan wisata di Bali, kunjungi cagar budaya dan kuliner yang menarik"
              },
              {
                icon: <MapPin className="w-8 h-8 text-blue-500" />,
                title: "Japan", 
                description: "Travel dan wisata di Japan, kunjungi cagar budaya dan kuliner yang menarik"
              },
              {
                icon: <MapPin className="w-8 h-8 text-blue-500" />,
                title: "Singapore",
                description: "This description supports and extends the bullet point above."
              },
              {
                icon: <MapPin className="w-8 h-8 text-blue-500" />,
                title: "Bandung",
                description: "This description supports and extends the bullet point above."
              },
              {
                icon: <MapPin className="w-8 h-8 text-blue-500" />,
                title: "Surabaya",
                description: "This description supports and extends the bullet point above."
              },
              {
                icon: <MapPin className="w-8 h-8 text-blue-500" />,
                title: "Third Feature",
                description: "This description supports and extends the bullet point above."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your Closing Argument Headline
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Suspendisse egestas rhoncus urna in bibendum. Donec urna neque, euismod sed 
            justo quis, convallis dapibus risus. Phasellus fringilla odio vel erat fringilla.
          </p>
          <button className="bg-gray-800 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-900 transition-colors duration-200">
            CALL TO ACTION
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-900 font-semibold text-lg mb-2">moqups</p>
          <div className="flex justify-center space-x-6 text-gray-500 text-sm">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
          <p className="text-gray-400 text-sm mt-2">© 2019 Moqups</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;