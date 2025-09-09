import React from "react";
import { HeroVideoDialogDemoTopInBottomOut } from '../ui/VideosectionUse';

function Guide() {
    return (
        <div id="tut" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        How to Get Started
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Follow these simple steps to set up WorkPing and keep your loved ones informed about your work status
                    </p>
                </div>

                {/* Step 1: Add Chat IDs */}
                <div className="mb-16">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                                1
                            </div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
                                Add the Chat IDs of Your Close Ones
                            </h2>
                        </div>
                        
                        <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6 mb-6">
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            Start by adding the Telegram Chat IDs of the people you want to keep informed about your work status. This could include family members, close friends, or anyone who needs updates when you’re working
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">How to find Chat IDs:</h3>
                                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        Open Telegram and go to the Search bar. 
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        Search for @UserInfoBot, click Start, or send hi. The bot will provide your Chat ID. 
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        Copy the Chat ID and paste it into WorkPing.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        Don’t forget to start our chatbot @workping22bot  you only need to do this once, and then it will be able to send you messages
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Pro Tips:</h3>
                                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        You can add multiple chat IDs
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        Receive a daily summary of your work mode activity 
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        Your privacy is always protected
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 2: Watch Tutorial */}
                <div className="mb-16">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                                2
                            </div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
                                Watch Our Setup Tutorial
                            </h2>
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-300 mb-8 text-center">
                            Follow along with our step-by-step video guide to set up WorkPing in just a few minutes
                        </p>

                        {/* Video Component */}
                        <div className="flex justify-center">
                            <div className="w-full max-w-3xl">
                                <HeroVideoDialogDemoTopInBottomOut/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Guide; 