import React from 'react';

function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                            <span className="text-black font-bold text-lg">W</span>
                        </div>
                        <span className="text-xl font-semibold">WorkPing</span>
                    </div>

                    <div className="flex items-center space-x-6">
                        <a
                            href="https://linkedin.com/company/workping"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <span className="hidden sm:inline">LinkedIn</span>
                        </a>

                        <a
                            href="https://twitter.com/workping"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                            <span className="hidden sm:inline">Twitter</span>
                        </a>

                        <a
                            href="https://chrome.google.com/webstore/detail/workping/your-extension-id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-lg transition-colors duration-200"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            <span>Chrome Extension</span>
                        </a>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 WorkPing. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
