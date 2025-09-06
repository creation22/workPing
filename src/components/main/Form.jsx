import React, { useState } from 'react';

function Form() {
    // State management
    const [chatIds, setChatIds] = useState(['']);
    const [workModeOnMessage, setWorkModeOnMessage] = useState('Starting work mode! 🚀');
    const [workModeOffMessage, setWorkModeOffMessage] = useState('Work mode ended. Time to relax! 😊');
    const [dailySummaryEnabled, setDailySummaryEnabled] = useState(false);
    const [summaryTime, setSummaryTime] = useState('18:00');
    const [errors, setErrors] = useState({});

    // Add new chat ID
    const addChatId = () => {
        setChatIds([...chatIds, '']);
    };

    // Remove chat ID
    const removeChatId = (index) => {
        if (chatIds.length > 1) {
            const newChatIds = chatIds.filter((_, i) => i !== index);
            setChatIds(newChatIds);
        }
    };

    // Update chat ID
    const updateChatId = (index, value) => {
        const newChatIds = [...chatIds];
        newChatIds[index] = value;
        setChatIds(newChatIds);
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};
        
        // Validate chat IDs
        chatIds.forEach((chatId, index) => {
            if (!chatId.trim()) {
                newErrors[`chatId_${index}`] = 'Chat ID is required';
            } else if (!/^-?\d+$/.test(chatId.trim())) {
                newErrors[`chatId_${index}`] = 'Chat ID must be a valid number';
            }
        });

        // Validate messages
        if (!workModeOnMessage.trim()) {
            newErrors.workModeOnMessage = 'Work Mode ON message is required';
        }
        if (!workModeOffMessage.trim()) {
            newErrors.workModeOffMessage = 'Work Mode OFF message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const formData = {
                chatIds: chatIds.filter(id => id.trim()),
                workModeOnMessage: workModeOnMessage.trim(),
                workModeOffMessage: workModeOffMessage.trim(),
                dailySummary: {
                    enabled: dailySummaryEnabled,
                    time: dailySummaryEnabled ? summaryTime : null
                }
            };
            console.log('Form submitted:', formData);
            // Here you would typically send the data to your backend
            alert('Settings saved successfully!');
        }
    };

    return (
        <div className="min-h-screen bg-white py-8">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
                    <div className="px-8 py-6 border-b border-gray-200">
                        <h1 className="text-3xl font-bold text-black mb-2">
                            Work Mode Settings
                        </h1>
                        <p className="text-gray-600">
                            Configure your Telegram notifications and work mode messages
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-8">
                        {/* Chat IDs Section */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-black">
                                    Chat IDs
                                </h2>
                                <button
                                    type="button"
                                    onClick={addChatId}
                                    className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                                >
                                    <span className="text-lg">+</span>
                                    Add Chat ID
                                </button>
                            </div>
                            <p className="text-sm text-gray-600">
                                Add one or more Telegram chat IDs that will receive your work mode notifications
                            </p>
                            
                            <div className="space-y-3">
                                {chatIds.map((chatId, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                value={chatId}
                                                onChange={(e) => updateChatId(index, e.target.value)}
                                                placeholder="Enter chat ID (e.g., -123456789)"
                                                className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 ${
                                                    errors[`chatId_${index}`]
                                                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                        : 'border-gray-300 focus:border-black focus:ring-black'
                                                } bg-white text-black`}
                                            />
                                            {errors[`chatId_${index}`] && (
                                                <p className="text-red-500 text-sm mt-1">{errors[`chatId_${index}`]}</p>
                                            )}
                                        </div>
                                        {chatIds.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeChatId(index)}
                                                className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-lg transition-colors duration-200"
                                            >
                                                <span className="text-lg">×</span>
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-black">
                                Work Mode Messages
                            </h2>
                            <p className="text-sm text-gray-600">
                                These messages will be sent to all configured chat IDs
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Work Mode ON Message */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Work Mode ON Message
                                    </label>
                                    <textarea
                                        value={workModeOnMessage}
                                        onChange={(e) => setWorkModeOnMessage(e.target.value)}
                                        placeholder="Enter message for when work mode starts..."
                                        rows={3}
                                        className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 resize-none ${
                                            errors.workModeOnMessage
                                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                : 'border-gray-300 focus:border-black focus:ring-black'
                                        } bg-white text-black`}
                                    />
                                    {errors.workModeOnMessage && (
                                        <p className="text-red-500 text-sm">{errors.workModeOnMessage}</p>
                                    )}
                                </div>

                                {/* Work Mode OFF Message */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Work Mode OFF Message
                                    </label>
                                    <textarea
                                        value={workModeOffMessage}
                                        onChange={(e) => setWorkModeOffMessage(e.target.value)}
                                        placeholder="Enter message for when work mode ends..."
                                        rows={3}
                                        className={`w-full px-4 py-3 border rounded-lg transition-colors duration-200 resize-none ${
                                            errors.workModeOffMessage
                                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                : 'border-gray-300 focus:border-black focus:ring-black'
                                        } bg-white text-black`}
                                    />
                                    {errors.workModeOffMessage && (
                                        <p className="text-red-500 text-sm">{errors.workModeOffMessage}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-black">
                                Daily Summary
                            </h2>
                            
                            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        id="dailySummary"
                                        checked={dailySummaryEnabled}
                                        onChange={(e) => setDailySummaryEnabled(e.target.checked)}
                                        className="w-5 h-5 text-black bg-white border-gray-300 rounded focus:ring-black focus:ring-2"
                                    />
                                    <label htmlFor="dailySummary" className="text-sm font-medium text-gray-700">
                                        Send daily summary at the end of the day
                                    </label>
                                </div>
                                
                                {dailySummaryEnabled && (
                                    <div className="ml-8 space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Summary Time
                                        </label>
                                        <input
                                            type="time"
                                            value={summaryTime}
                                            onChange={(e) => setSummaryTime(e.target.value)}
                                            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:border-black focus:ring-black"
                                        />
                                        <p className="text-xs text-gray-500">
                                            Daily summary will include total work sessions and hours
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-end pt-6 border-t border-gray-200">
                            <button
                                type="submit"
                                className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                            >
                                Save Settings
                            </button>
                        </div>
                    </form>
                </div>

                {/* Next Steps - After Form */}
                <div className="text-center mt-12">
                    <div className="bg-white rounded-2xl p-8 text-black max-w-2xl mx-auto border border-gray-200 shadow-xl">
                        <h3 className="text-2xl font-bold mb-4">Next Steps</h3>
                        <p className="text-gray-600 mb-6">
                            Awesome! You've set up your preferences, watched the tutorial, and are ready to download the extension to start using WorkPing!!
                        </p>
                        <button className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl">
                            Download Extension Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
