import React, { useState } from "react";
import { Mail, Star } from "lucide-react";

const emails = [
  {
    sender: "Khester Mesa",
    subject: "auxghlann invited you to auxghlann/tutorial_git",
    preview: "GitHub home @auxghlann has invited you...",
    time: "10:53 AM",
    priority: "High"
  },
  {
    sender: "Dragonpay",
    subject: "Payment Confirmation for Transaction Ref: MVA7MPUUU5",
    preview: "Congratulations! This is to confirm...",
    time: "Jul 20",
    priority: "High"
  },
  {
    sender: "BDO Online Banking",
    subject: "BDO Online Banking Username Retrieved",
    preview: "Hello! You've requested to retrieve...",
    time: "Jul 19",
    priority: "Medium"
  },
  {
    sender: "Warframe",
    subject: "Only THREE DAYS until TennoCon 2025!",
    preview: "Get ready for huge reveals, live music...",
    time: "Jul 17",
    priority: "Low"
  },
  {
    sender: "LinkedIn",
    subject: "Careers, SM Hotels and Conventions Corp.",
    preview: "SM Hotels and Conventions Corp. HUMAN...",
    time: "Jul 16",
    priority: "Medium"
  },
  {
    sender: "Grammarly Insights",
    subject: "✨ Your week of writing + 50% off Pro!",
    preview: "Pick up where you left off to keep...",
    time: "Jul 16",
    priority: "Low"
  },
];

const EmailItem = ({ sender, subject, preview, time }) => (
  <div className="flex items-center p-4 border-b hover:bg-gray-50 transition duration-200 hover:shadow-md hover:scale-[1.01] transform">
    
    
    <div className="flex-1">
      <div className="font-semibold text-sm text-gray-800">{sender}</div>
      <div className="text-sm text-gray-700">
        <span className="font-medium text-gray-900">{subject} - </span>
        <span className="text-gray-500">{preview}</span>
      </div>
    </div>
    <div className="text-xs text-gray-500 ml-4 whitespace-nowrap">{time}</div>
  </div>
);

export default function GmailClone() {
  const [selectedPriority, setSelectedPriority] = useState("High");

  const priorities = ["High", "Medium", "Low"];

  const filteredEmails = emails.filter(email => email.priority === selectedPriority);

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
      

      <div className="px-6 pt-6">
        <div className="mb-6 flex justify-center gap-6">
          {priorities.map(priority => (
            <button
              key={priority}
              className={`px-6 py-2 text-base font-medium rounded-md relative transition duration-200 ${
                selectedPriority === priority
                  ? "text-blue-800 border-b-2 border-blue-500"
                  : "text-gray-700 hover:bg-gray-100 hover:text-blue-800"
              }`}
              onClick={() => setSelectedPriority(priority)}
            >
              {priority} Priority
            </button>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          {filteredEmails.length > 0 ? (
            filteredEmails.map((email, index) => (
              <EmailItem key={index} {...email} />
            ))
          ) : (
            <div className="p-6 text-center text-gray-500">No emails in this category.</div>
          )}
        </div>
      </div>
    </div>
  );
}
