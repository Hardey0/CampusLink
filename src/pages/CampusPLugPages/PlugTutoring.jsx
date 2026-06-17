import React from "react";
import { AppIcon } from "../../components/icons";

export default function PlugTutoring() {
  return (
    <main className="lg:ml-60 bg-bg-secondary min-h-screen px-6 py-7 lg:px-8 md:mb-0 mb-20">
      <div className="max-w-4xl">
        <div className="bg-card rounded-2xl border-2 border-border p-8">
          <h1 className="text-3xl font-bold text-primary-navy mb-4 inline-flex items-center gap-3">
            <AppIcon name="home" className="w-8 h-8" />
            Plug Tutoring Page
          </h1>
          <p className="text-lg text-muted mb-6">
            This is the Plug Tutoring page section.
          </p>
          <div className="bg-accent-strong/30 border-l-4 border-accent-strong p-4 rounded">
            <p className="text-accent-strong/90 font-semibold inline-flex items-center gap-2">
              <AppIcon name="settings" className="w-4 h-4" />
              Developers: Add your Plug Tutoring page code here
            </p>
            <p className="text-accent-strong/70 text-sm mt-2">
              This is where you'll build the Plug Tutoring dashboard with featured
              courses, recommendations, and user highlights.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
