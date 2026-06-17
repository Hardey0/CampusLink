import React from "react";
import { AppIcon } from "../../components/icons";
import ThemeToggle from "../../components/UI/ThemeToggle";
import { Button, Badge, Card, Tabs, Avatar, Modal, Logo } from "../../components/UI";

export default function PLugSettings() {
  return (
    <main className="lg:ml-60 bg-bg-secondary min-h-screen px-6 py-7 lg:px-8 md:mb-0 mb-20">
      <div className="max-w-4xl">
        <div className="bg-card rounded-2xl border-2 border-border p-8">
          <h1 className="text-3xl font-bold text-primary-navy mb-4 inline-flex items-center gap-3">
            <AppIcon name="settings" className="w-8 h-8" />
            Settings
          </h1>
          <p className="text-lg text-muted mb-6">
            This is the Settings section.
          </p>
          <div className="bg-accent-strong/30 border-l-4 border-accent-strong p-4 rounded mb-5">
            <p className="text-accent-strong/90 font-semibold inline-flex items-center gap-2">
              <AppIcon name="settings" className="w-4 h-4" />
              Developers: Add your Settings code here
            </p>
            <p className="text-accent-strong/70 text-sm mt-2">
              This is where you'll build user account settings, privacy
              controls, notification preferences, theme selection, and security
              options.
            </p>
          </div>

          <ThemeToggle />

          <div className="bg-bg text-text mt-6 p-6">
            <div className="bg-card border border-border p-4 rounded-xl">
              <h1 className="text-text text-lg">Hello</h1>
              <p className="text-muted">This is dark mode</p>

              <button className="mt-3 bg-primary text-black px-4 py-2 rounded-lg">
                Action
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
