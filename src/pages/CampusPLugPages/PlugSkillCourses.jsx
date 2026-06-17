import React, { useState } from "react";
import { AppIcon } from "../../components/icons";
import { Button } from "../../components/UI/Button";

const courses = [
  {
    id: 1,
    icon: "🎨",
    title: "UI/UX Design Fundamentals",
    desc: "Learn Figma, design systems, user research, prototyping, and real-world design thinking.",
    price: "₦5,000",
    enrolled: 27,
    duration: "6 hrs",
    modules: 12,
    level: "Beginner",
    status: "live",
  },
  {
    id: 2,
    icon: "💻",
    title: "Full-Stack Web Development",
    desc: "Build real web apps with HTML, CSS, JavaScript, React, Node.js and MongoDB from scratch.",
    price: "₦8,000",
    enrolled: 18,
    duration: "12 hrs",
    modules: 18,
    level: "Intermediate",
    status: "live",
  },
  {
    id: 3,
    icon: "📊",
    title: "Data Analysis with Python",
    desc: "Pandas, NumPy, Matplotlib and real datasets. Build dashboards and analysis projects.",
    price: "₦6,500",
    enrolled: 22,
    duration: "8 hrs",
    modules: 10,
    level: "Intermediate",
    status: "live",
  },
  {
    id: 4,
    icon: "🎤",
    title: "Public Speaking & Debate",
    desc: "Master persuasion, debate formats, body language, and public presentation techniques.",
    price: "₦3,500",
    enrolled: 15,
    duration: "4 hrs",
    modules: 8,
    level: "All Levels",
    status: "live",
  },
  {
    id: 5,
    icon: "📱",
    title: "Mobile App Development (React Native)",
    desc: "Build cross-platform iOS and Android apps. Currently 70% complete.",
    price: "₦9,000",
    enrolled: 0,
    duration: "~10 hrs",
    modules: 15,
    level: "Advanced",
    status: "draft",
  },
];

export default function ProviderSkillCourses() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCourses = activeTab === "all" 
    ? courses 
    : activeTab === "published" 
      ? courses.filter(c => c.status === "live")
      : courses.filter(c => c.status === "draft");

  return (
    <main className="lg:ml-60 bg-bg-secondary min-h-screen px-6 py-7 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-text tracking-tight">Skill Courses</h1>
            <p className="text-muted">Create and manage your campus learning courses</p>
          </div>
          <Button className="rounded-xl">+ Create Course</Button>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard value="4" label="Published Courses" change="↑ 1 this month" />
          <StatCard value="87" label="Total Students" change="↑ 12 this week" />
          <StatCard value="₦395k" label="Course Revenue" change="↑ ₦58k this month" />
          <StatCard value="4.8⭐" label="Avg. Rating" change="34 reviews" />
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border mb-6 overflow-x-auto pb-1">
          {[
            { label: "All (5)", value: "all" },
            { label: "Published (4)", value: "published" },
            { label: "Draft (1)", value: "draft" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-3 border-b-2 font-medium whitespace-nowrap transition-all ${
                activeTab === tab.value
                  ? "border-primary text-primary"
                  : "border-transparent text-muted hover:text-text"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Create New Hint */}
        <div className="mt-12 border-2 border-dashed border-border rounded-3xl p-12 text-center hover:border-primary hover:bg-primary-soft/30 transition cursor-pointer">
          <div className="text-5xl mb-4">📹</div>
          <h3 className="font-semibold text-lg text-text">Create a new course</h3>
          <p className="text-muted mt-2">Record modules, add quizzes and set your price. Students across your campuses will be able to enroll.</p>
        </div>
      </div>
    </main>
  );
}

/* ====================== SUB COMPONENTS ====================== */

function StatCard({ value, label, change }) {
  return (
    <div className="bg-card border border-border rounded-3xl p-6">
      <div className="text-3xl font-bold text-text">{value}</div>
      <div className="text-sm text-muted mt-1">{label}</div>
      {change && <div className="text-xs text-primary mt-2">{change}</div>}
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary transition-all group">
      <div className="h-40 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-6xl relative">
        {course.icon}
        <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full ${
          course.status === "live" ? "bg-primary-soft text-primary" : "bg-warning-soft text-warning"
        }`}>
          {course.status === "live" ? "Live" : "Draft"}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-text leading-tight mb-2">{course.title}</h3>
        <p className="text-sm text-muted line-clamp-3 mb-5">{course.desc}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-xs bg-bg-hover px-3 py-1 rounded-full">{course.duration}</span>
          <span className="text-xs bg-bg-hover px-3 py-1 rounded-full">{course.modules} Modules</span>
          <span className="text-xs bg-bg-hover px-3 py-1 rounded-full">{course.level}</span>
        </div>

        <div className="flex justify-between items-end">
          <div>
            <p className="text-primary font-bold text-lg">{course.price}</p>
            <p className="text-xs text-muted">{course.enrolled} enrolled</p>
          </div>

          <div className="flex gap-2">
            <Button variant="primary" size="sm" className="rounded-xl">Manage</Button>
            <Button variant="primary" size="sm" className="rounded-xl">Preview</Button>
          </div>
        </div>
      </div>
    </div>
  );
}