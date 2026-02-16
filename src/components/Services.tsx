import React from "react";
import { HomeIcon, Circle, Moon } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-vee-soft-gray/50 relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-vee-peach/30 rounded-full translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-vee-lavender/30 rounded-full -translate-x-1/3 blur-3xl"></div>
      
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-cormorant">Massage Services & Prices</h2>
          <p className="max-w-2xl mx-auto opacity-75">
            Choose from our therapeutic massage services tailored to your needs, available as incall or outcall sessions.
          </p>
        </div>

        {/* Booking Fee Notice */}
        











        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Incall Services */}
          <div className="service-card backdrop-blur">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-vee-pink/30 rounded-full flex items-center justify-center mr-3">
                <HomeIcon className="text-pink-600" size={20} />
              </div>
              <h3 className="text-xl font-bold font-cormorant">Incall Services</h3>
            </div>
            <p className="text-sm mb-6 text-vee-text/70">Postcode: IG1 2LT</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Deep Tissue Massage</h4>
                <div className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-gray-100 pb-2">
                  <div className="flex items-center">
                    <Circle className="w-3 h-3 mr-2 text-vee-pink" fill="currentColor" />
                    <span>30 mins</span>
                  </div>
                  <span className="font-semibold">£60</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between mt-2 text-sm">
                  <div className="flex items-center">
                    <Circle className="w-3 h-3 mr-2 text-vee-pink" fill="currentColor" />
                    <span>1 hour</span>
                  </div>
                  <span className="font-semibold">£90</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Classic Relaxation Massage</h4>
                <div className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-gray-100 pb-2">
                  <div className="flex items-center">
                    <Circle className="w-3 h-3 mr-2 text-vee-pink" fill="currentColor" />
                    <span>30 mins</span>
                  </div>
                  <span className="font-semibold">£50</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between mt-2 text-sm">
                  <div className="flex items-center">
                    <Circle className="w-3 h-3 mr-2 text-vee-pink" fill="currentColor" />
                    <span>1 hour</span>
                  </div>
                  <span className="font-semibold">£80</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Swedish Massage</h4>
                <div className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-gray-100 pb-2">
                  <div className="flex items-center">
                    <Circle className="w-3 h-3 mr-2 text-vee-pink" fill="currentColor" />
                    <span>30 mins</span>
                  </div>
                  <span className="font-semibold">£60</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between mt-2 text-sm">
                  <div className="flex items-center">
                    <Circle className="w-3 h-3 mr-2 text-vee-pink" fill="currentColor" />
                    <span>1 hour</span>
                  </div>
                  <span className="font-semibold">£90</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Outcall Services */}
          <div className="service-card backdrop-blur">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-vee-lavender/30 rounded-full flex items-center justify-center mr-3">
                <HomeIcon className="text-purple-600" size={20} />
              </div>
              <h3 className="text-xl font-bold font-cormorant">Outcall Services</h3>
            </div>
            <p className="text-sm mb-6 text-vee-text/70">Mobile to client's location</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Deep Tissue Massage</h4>
                <div className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-gray-100 pb-2">
                  <div className="flex items-center">
                    <Circle className="w-3 h-3 mr-2 text-vee-lavender" fill="currentColor" />
                    <span>30 mins</span>
                  </div>
                  <span className="font-semibold">£100</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between mt-2 text-sm">
                  <div className="flex items-center">
                    <Circle className="w-3 h-3 mr-2 text-vee-lavender" fill="currentColor" />
                    <span>1 hour</span>
                  </div>
                  <span className="font-semibold">£160</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Classic Relaxation Massage</h4>
                <div className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-gray-100 pb-2">
                  <div className="flex items-center">
                    <Circle className="w-3 h-3 mr-2 text-vee-lavender" fill="currentColor" />
                    <span>30 mins</span>
                  </div>
                  <span className="font-semibold">£90</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between mt-2 text-sm">
                  <div className="flex items-center">
                    <Circle className="w-3 h-3 mr-2 text-vee-lavender" fill="currentColor" />
                    <span>1 hour</span>
                  </div>
                  <span className="font-semibold">£150</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Swedish Massage</h4>
                <div className="flex flex-col sm:flex-row sm:justify-between text-sm border-b border-gray-100 pb-2">
                  <div className="flex items-center">
                    <Circle className="w-3 h-3 mr-2 text-vee-lavender" fill="currentColor" />
                    <span>30 mins</span>
                  </div>
                  <span className="font-semibold">£100</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between mt-2 text-sm">
                  <div className="flex items-center">
                    <Circle className="w-3 h-3 mr-2 text-vee-lavender" fill="currentColor" />
                    <span>1 hour</span>
                  </div>
                  <span className="font-semibold">£160</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* After Dark Notice */}
        <div className="max-w-3xl mx-auto mb-10 p-5 bg-vee-lavender/20 border border-vee-lavender/30 rounded-2xl">
          <div className="flex items-start gap-3">
            <Moon className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-semibold mb-1">After Dark Charges</p>
              <p className="opacity-80">
                Please note that massages done after the hours of 9:30 PM to 12:30 AM onwards attract an extra fee of £20.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm font-semibold mb-8">CASH ONLY PLEASE, THANK YOU!</p>
        
        <div className="text-center">
          <button
            onClick={() => {
              (window as any).wahanda?.openOnlineBookingWidget("https://widget.treatwell.co.uk/place/502481/menu/");
            }}
            className="inline-flex items-center px-8 py-3 bg-vee-pink text-vee-text rounded-full hover:bg-pink-300 transition-all shadow-sm hover:shadow">

            Book Your Session
          </button>
          <p className="mt-4 text-sm opacity-75">
            You can also call directly at <a href="tel:+447733219034" className="underline">+44 7733 219034</a>
          </p>
        </div>
      </div>
    </section>);

};

export default Services;