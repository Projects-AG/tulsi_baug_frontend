import React, { useState, useEffect } from "react";

const SaleBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date (example: 3 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side - Sale Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">
                SALE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Extra Sale 30% off
              </h2>
            </div>
            <p className="text-gray-600 text-sm">
              Get ready for unbeatable deals on your favorite products!
            </p>
          </div>

          {/* Right Side - Countdown Timer */}
          <div className="flex items-center gap-2">
            <div className="text-center bg-white rounded-lg px-4 py-3 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">
                {String(timeLeft.days).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500 uppercase">Days</div>
            </div>
            <span className="text-2xl font-bold text-gray-400">:</span>
            <div className="text-center bg-white rounded-lg px-4 py-3 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500 uppercase">Hours</div>
            </div>
            <span className="text-2xl font-bold text-gray-400">:</span>
            <div className="text-center bg-white rounded-lg px-4 py-3 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500 uppercase">Mins</div>
            </div>
            <span className="text-2xl font-bold text-gray-400">:</span>
            <div className="text-center bg-white rounded-lg px-4 py-3 shadow-sm">
              <div className="text-2xl font-bold text-gray-900">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500 uppercase">Secs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;
