import React from "react";
import { AnimatedShinyTextUse } from "../ui/AnimateShinyText";
import { SparklesTextUse } from "../ui/SparklesTextUse";

function frontPage() {
    return (
        <div id="start" className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-4">
                <div className="mb-2">
                    <AnimatedShinyTextUse/>
                </div>
                
                <div className="text-center mb-6">
                    <div className="mb-2">
                        <SparklesTextUse/>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                        Let Your Loved Ones Know You're Working
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Seamless Telegram extension that keeps your family connected to your work status
                    </p>
                </div>

                <div className="text-center">
                    <div className="bg-gray-50 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-200">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            Download Our Chrome Extension
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Get started in seconds and never worry about your family wondering if you're working again.
                        </p>
                            <a 
      href="https://chromewebstore.google.com/detail/workping/fknebhdaeggbjkkiallkdcaggfnbiddn" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
        Download Extension
      </button>
    </a>
                    </div>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center p-6">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">⚡</span>
                        </div>
                        <h3 className="text-lg font-semibold text-black mb-2">Instant Updates</h3>
                        <p className="text-gray-600">Automatic status updates to your Telegram</p>
                    </div>
                    
                    <div className="text-center p-6">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🔒</span>
                        </div>
                        <h3 className="text-lg font-semibold text-black mb-2">Privacy First</h3>
                        <p className="text-gray-600">Your data stays secure and private</p>
                    </div>
                    
                    <div className="text-center p-6">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🎯</span>
                        </div>
                        <h3 className="text-lg font-semibold text-black mb-2">Easy Setup</h3>
                        <p className="text-gray-600">One-click installation and configuration</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default frontPage