import React from "react";
import { AppIcon } from "../../components/icons";

export default function MessagesPage() {
  return (
    <main className="lg:ml-60 bg-gray-100 min-h-screen px-6 py-7 lg:px-8 md:mb-0 mb-20">
      <div className="max-w-4xl">
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-navy mb-4 inline-flex items-center gap-3">
            <AppIcon name="messages" className="w-8 h-8" />
            Messages
          </h1>
          <p className="text-lg text-gray-500 mb-6">
            This is the Messages section.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-700 font-semibold inline-flex items-center gap-2">
              <AppIcon name="settings" className="w-4 h-4" />
              Developers: Add your Messages code here
            </p>
            <p className="text-green-600 text-sm mt-2">
              This is where you'll build the messaging system for users to
              communicate with tutors, group members, and other students.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
