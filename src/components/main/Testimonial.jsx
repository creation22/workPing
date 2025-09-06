import React from "react";
import { MarqueeDemo } from "../ui/Marquee";

function Testimonial() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        What Our Users Say
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Join thousands of professionals who have transformed their work-life balance with WorkPing
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                        <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                        <div className="text-slate-600 dark:text-slate-300">Happy Users</div>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                        <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                        <div className="text-slate-600 dark:text-slate-300">Satisfaction Rate</div>
                    </div>
                    <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                        <div className="text-3xl font-bold text-purple-600 mb-2">4.9★</div>
                        <div className="text-slate-600 dark:text-slate-300">Average Rating</div>
                    </div>
                </div>

                {/* Marquee Testimonials */}
                <div className="mb-16">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white text-center mb-8">
                            Real Stories from Real Users
                        </h2>
                        <MarqueeDemo/>
                    </div>
                </div>

                {/* Featured Testimonial */}
                <div className="mb-16">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">💬</span>
                            </div>
                            <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                                "WorkPing has completely changed how my family understands my work schedule. 
                                No more interruptions during important calls, and my wife knows exactly when I'm available. 
                                It's like having a personal assistant for work-life balance!"
                            </blockquote>
                            <div className="flex items-center justify-center">
                                <img 
                                    className="w-12 h-12 rounded-full mr-4" 
                                    src="https://avatar.vercel.sh/featured" 
                                    alt="Featured User"
                                />
                                <div className="text-left">
                                    <div className="font-semibold">Jennifer Martinez</div>
                                    <div className="text-blue-100">Product Manager @ TechCorp</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-slate-200 dark:border-slate-700">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Ready to Join Them?
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6">
                            Start your journey to better work-life balance today. 
                            Join thousands of professionals who trust WorkPing.
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                            Get Started Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial; 