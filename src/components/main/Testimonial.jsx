import React from "react";
import { MarqueeDemo } from "../ui/Marquee";

function Testimonial() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                        What Our Users Say
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Join thousands of professionals who have transformed their work-life balance with WorkPing
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
                    <div className="text-center p-6 bg-gray-50 rounded-xl shadow-lg border border-gray-200">
                        <div className="text-3xl font-bold text-black mb-2">10K+</div>
                        <div className="text-gray-600">Happy Users</div>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-xl shadow-lg border border-gray-200">
                        <div className="text-3xl font-bold text-black mb-2">98%</div>
                        <div className="text-gray-600">Satisfaction Rate</div>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-xl shadow-lg border border-gray-200">
                        <div className="text-3xl font-bold text-black mb-2">4.9★</div>
                        <div className="text-gray-600">Average Rating</div>
                    </div>
                </div>

                <div className="mb-16">
                    <div className="bg-gray-50 rounded-2xl shadow-xl p-8 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-black text-center mb-8">
                            Real Stories from Real Users
                        </h2>
                        <MarqueeDemo/>
                    </div>
                </div>

                <div className="mb-16">
                    <div className="bg-black rounded-2xl p-8 text-white max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">👨‍💼</span>
                            </div>
                            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                                "At WorkPing, we believe that technology should bring families closer, not create barriers. 
                                Our mission is to help professionals maintain healthy work-life boundaries while keeping their loved ones informed. 
                                Every feature we build is designed with family connection in mind."
                            </blockquote>
                            <div className="flex items-center justify-center">
                                <div className="text-center">
                                    <div className="font-semibold">Srajan Gupta</div>
                                    <div className="text-gray-300">Founder, WorkPing</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
  <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-200">
    <h3 className="text-2xl font-bold text-black mb-4">
      We’d Love Your Feedback
    </h3>
    <p className="text-gray-600 mb-6">
      Share your thoughts, suggestions, or ideas for new features to help us improve our product!
    </p>
    
    {/* Button to open Google Form */}
    <div className="flex justify-center">
      <a
        href="https://forms.gle/3sHm7GLRSPVXHB3w9"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
      >
        Give Feedback
      </a>
    </div>
  </div>
</div>


            </div>
        </div>
    );
}

export default Testimonial; 