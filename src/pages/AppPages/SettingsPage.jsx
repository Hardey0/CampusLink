import React from "react";
import { AppIcon } from "../../components/icons";
import ThemeToggle from "../../components/UI/ThemeToggle";
import { Button, Badge, Card, Tabs, Avatar, Modal, Logo } from "../../components/UI";

export default function SettingsPage() {
  return (
    <main className="lg:ml-60 bg-gray-100 min-h-screen px-6 py-7 lg:px-8 md:mb-0 mb-20">
      <div className="max-w-4xl">
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-navy mb-4 inline-flex items-center gap-3">
            <AppIcon name="settings" className="w-8 h-8" />
            Settings
          </h1>
          <p className="text-lg text-gray-500 mb-6">
            This is the Settings section.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-5">
            <p className="text-green-700 font-semibold inline-flex items-center gap-2">
              <AppIcon name="settings" className="w-4 h-4" />
              Developers: Add your Settings code here
            </p>
            <p className="text-green-600 text-sm mt-2">
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

          <p className="bg-bg text-sm text-text mt-4">
            No one shall be subjected to arbitrary arrest, detention or exile.
          </p>

          <h1 className="font-heading text-2xl">
            Dashboard
          </h1>

          <h2 className="font-mono text-lg">
            My Tasks
          </h2>

          <div>
            <Button size="sm" variant="card" className="m-2">
              Click me
            </Button>
            <Badge>New</Badge>
          </div>
          <Card>
            <h2 className="text-xl font-semibold mb-2">Card Title</h2>
            <p className="text-gray-600">This is a card component.</p>
          </Card>

          <Tabs
            tabs={[
              { id: "tab1", label: "Tab 1" },
              { id: "tab2", label: "Tab 2" },
              { id: "tab3", label: "Tab 3" },
            ]}
            activeTab="tab1"
            onChange={(id) => console.log("Selected tab:", id)}
          />

          <Avatar initials="JD" size="lg" variant="blue" className="mt-4" />

          <Modal isOpen={false} onClose={() => { }} title="Example Modal">
            <p>This is a modal component.</p>
          </Modal>

          <Logo className="text-text" />
        </div>
      </div>
    </main>
  );
}
