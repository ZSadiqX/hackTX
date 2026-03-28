"use client";

import { useState } from "react";
// import { useNavigate } from "react-router"; // We use next/navigation in Next.js
import { useRouter } from "next/navigation";
import { Mail, Calendar, Sparkles, CheckCircle2, Clock, Target } from "lucide-react";

export default function Landing() {
  const router = useRouter();
  const [connecting, setConnecting] = useState(false);

  const handleConnect = () => {
    setConnecting(true);
    // Simulate OAuth flow
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="h-10 w-10 text-blue-600" />
            <Sparkles className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Email-to-Day Planner
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect your Gmail and let AI transform your inbox into a structured, prioritized daily schedule
          </p>
        </div>

        {/* Main CTA */}
        <div className="max-w-md mx-auto mb-16">
          <div className="border-2 shadow-lg rounded-xl bg-white overflow-hidden">
            <div className="p-6 pt-6">
              <button
                onClick={handleConnect}
                disabled={connecting}
                className="w-full h-14 text-lg inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 font-medium text-white shadow hover:bg-blue-700/90 disabled:opacity-50 transition-colors"
              >
                {connecting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2 flex-shrink-0" />
                    Connecting to Gmail...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-5 w-5 flex-shrink-0" />
                    Connect Gmail Account
                  </>
                )}
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                Secure OAuth • Read-only access • No emails stored
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div className="border rounded-xl bg-white hover:shadow-lg transition-shadow">
            <div className="p-6 pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">AI-Powered Parsing</h3>
                <p className="text-sm text-gray-600">
                  Identifies implicit tasks like "let me know by EOD" or "can we sync this week?"
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-xl bg-white hover:shadow-lg transition-shadow">
            <div className="p-6 pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Time-Blocked Schedule</h3>
                <p className="text-sm text-gray-600">
                  Generates a structured day plan with buffer time and focus blocks
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-xl bg-white hover:shadow-lg transition-shadow">
            <div className="p-6 pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Smart Prioritization</h3>
                <p className="text-sm text-gray-600">
                  Distinguishes between direct responsibilities and CC'd emails
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes It Different */}
        <div className="max-w-3xl mx-auto pb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-black">What Makes It Different</h2>
          <div className="space-y-4">
            {[
              "Finds hidden action items buried in email threads",
              "Accounts for travel time and buffer between meetings",
              "Flags emails you're CC'd on vs. directly responsible for",
              '"Ignore this" bucket for emails that need no action',
              "Suggests quick draft replies for urgent emails",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                <p className="text-gray-800 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
