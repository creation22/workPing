import React from "react";
import { HeroVideoDialogDemoTopInBottomOut } from '../ui/VideosectionUse';

function Guide() {
  return (
    <div
      id="tut"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            How to Get Started
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Follow these simple steps to set up WorkPing and keep your loved ones
            informed about your work status.
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
                To get started, you need the Telegram Chat IDs of the people you want
                to receive your work updates (family, friends, or anyone important).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Section - How to */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  How to Find Your Chat ID:
                </h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 leading-relaxed space-y-1">
                  <li>Open Telegram and tap on the search bar.</li>
                  <li>
                    Search for{" "}
                    <a
                      href="https://t.me/userinfobot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      @UserInfoBot
                    </a>{" "}
                    and click <strong>Start</strong>. The bot will reply with your Chat
                    ID.
                  </li>
                  <li>Copy the Chat ID and paste it into WorkPing.</li>
                  <li>
                    Also, start our chatbot{" "}
                    <a
                      href="https://t.me/workping22bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      @workping22bot
                    </a>{" "}
                    once. After that, it can send you updates anytime.
                  </li>
                </ul>

                {/* Telegram Buttons */}
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href="https://t.me/userinfobot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.999 15.17l-.554 3.908c.793 0 1.137-.342 1.55-.753l3.722-3.546 7.711 5.625c1.41.776 2.413.37 2.762-1.308l5.01-23.52c.459-2.139-.774-2.969-2.133-2.431L1.507 9.681c-2.09.84-2.064 2.053-.356 2.602l7.993 2.471 18.514-11.662-17.659 12.078z" />
                    </svg>
                    Open @UserInfoBot
                  </a>

                  <a
                    href="https://t.me/workping22bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.999 15.17l-.554 3.908c.793 0 1.137-.342 1.55-.753l3.722-3.546 7.711 5.625c1.41.776 2.413.37 2.762-1.308l5.01-23.52c.459-2.139-.774-2.969-2.133-2.431L1.507 9.681c-2.09.84-2.064 2.053-.356 2.602l7.993 2.471 18.514-11.662-17.659 12.078z" />
                    </svg>
                    Start @workping22bot
                  </a>
                </div>
              </div>

              {/* Right Section - Pro Tips */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Pro Tips:
                </h3>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 leading-relaxed space-y-1">
                  <li>You can add more than one Chat ID.</li>
                  <li>Get a daily summary of your work activity.</li>
                  <li>Your privacy is always safe and protected.</li>
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
              Follow along with our step-by-step video guide to set up WorkPing in
              just a few minutes.
            </p>

            {/* Video Component */}
            <div className="flex justify-center">
              <div className="w-full max-w-3xl">
                <HeroVideoDialogDemoTopInBottomOut />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
