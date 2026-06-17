import React, { useState } from "react";
import { AppIcon } from "../../components/icons";
import { Button } from "../../components/UI/Button";
import { Tabs } from "../../components/UI/Tabs";

const COURSES = [
  { code: "CSC301", units: "3 units", name: "Data Structures & Algorithms", resources: 8,  tutors: 3, status: "unlocked" },
  { code: "CSC303", units: "2 units", name: "Computer Organisation",        resources: 5,  tutors: 2, status: "locked"   },
  { code: "CSC305", units: "3 units", name: "Database Management Systems",  resources: 10, tutors: 4, status: "unlocked" },
  { code: "CSC307", units: "2 units", name: "Operating Systems",            resources: 6,  tutors: 2, status: "locked"   },
  { code: "MAT301", units: "3 units", name: "Mathematical Methods",         resources: 6,  tutors: 2, status: "unlocked" },
];

const RESOURCES = [
  { icon: "file", bg: "bg-primary-soft", color: "text-primary", type: "PDF",    title: "Data Structures Notes",   course: "CSC301", size: "2.4 MB",  status: "free"   },
  { icon: "file", bg: "bg-accent-soft",  color: "text-accent",  type: "PDF",    title: "Past Questions 2023",     course: "CSC305", size: "1.1 MB",  status: "free"   },
  { icon: "file", bg: "bg-accent-soft",  color: "text-accent",  type: "Video",  title: "Tutorial Videos",         course: "MAT301", size: "4 videos",status: "locked" },
  { icon: "file", bg: "bg-warning-soft", color: "text-warning", type: "PDF",    title: "Exam Guide & Tips",       course: "CSC303", size: "800 KB",  status: "locked" },
  { icon: "file", bg: "bg-primary-soft", color: "text-primary", type: "Slides", title: "Lecture Slides Week 1-6", course: "CSC305", size: "5.2 MB",  status: "free"   },
  { icon: "file", bg: "bg-accent-soft",  color: "text-accent",  type: "eBook",  title: "Database Fundamentals",   course: "CSC305", size: "8.4 MB",  status: "free"   },
];

const TUTORS = [
  { icon: "profile",       iconColor: "text-primary", bg: "bg-primary-soft", name: "Tunde Adesanya", subjects: "Data Structures · Algorithms · CSC301", price: "₦3,000/hr", rating: "4.9" },
  { icon: "graduationCap", iconColor: "text-accent",  bg: "bg-accent-soft",  name: "Chisom Eze",     subjects: "Thermodynamics · Physics 201",           price: "₦2,500/hr", rating: "4.7" },
  { icon: "profile",       iconColor: "text-accent",  bg: "bg-accent-soft",  name: "Emeka Obi",      subjects: "Linear Algebra · Calculus 300",          price: "₦2,000/hr", rating: "4.8" },
  { icon: "profile",       iconColor: "text-warning", bg: "bg-warning-soft", name: "Fatima Bello",   subjects: "Database Systems · CSC305",              price: "₦2,800/hr", rating: "4.9" },
];

const SKILLS = [
  { icon: "palette", iconColor: "text-accent",  bg: "bg-accent-soft",  title: "UI/UX Design Fundamentals", instructor: "Kolade Adeyemi", students: 12, price: "₦5,000",  tags: ["Beginner",     "6 weeks"]  },
  { icon: "laptop",  iconColor: "text-accent",  bg: "bg-accent-soft",  title: "Web Development Bootcamp",  instructor: "Ada Nwosu",      students: 8,  price: "₦8,000",  tags: ["Intermediate", "10 weeks"] },
  { icon: "target",  iconColor: "text-primary", bg: "bg-primary-soft", title: "Data Analysis with Python", instructor: "Yemi Falola",    students: 15, price: "₦6,500",  tags: ["Beginner",     "8 weeks"]  },
  { icon: "brain",   iconColor: "text-warning", bg: "bg-warning-soft", title: "Intro to Machine Learning", instructor: "Kemi Ojo",       students: 6,  price: "₦12,000", tags: ["Advanced",     "12 weeks"] },
];

const MY_RESOURCES = [
  { icon: "file", bg: "bg-primary-soft", color: "text-primary", course: "CSC301", label: "Data Structures Notes", tag: "↓ PDF",  tagColor: "text-primary" },
  { icon: "file", bg: "bg-accent-soft",  color: "text-accent",  course: "CSC305", label: "Past Questions 2023",   tag: "↓ PDF",  tagColor: "text-primary" },
  { icon: "lock", bg: "bg-accent-soft",  color: "text-accent",  course: "MAT301", label: "Tutorial Videos",       tag: "Locked", tagColor: "text-warning" },
];

const PROGRESS = [
  { label: "Courses Unlocked",     val: 3,  total: 8,  pct: 37 },
  { label: "Resources Downloaded", val: 14, total: 35, pct: 40 },
  { label: "Tutor Sessions",       val: 2,  total: 5,  pct: 40 },
];

const HUB_TABS = [
  { id: "courses",   icon: <AppIcon name="academicHub" className="w-3.5 h-3.5" />,   label: "Courses"   },
  { id: "resources", icon: <AppIcon name="file" className="w-3.5 h-3.5" />,          label: "Resources" },
  { id: "tutors",    icon: <AppIcon name="graduationCap" className="w-3.5 h-3.5" />, label: "Tutors"    },
  { id: "skills",    icon: <AppIcon name="target" className="w-3.5 h-3.5" />,        label: "Skills"    },
];

export default function AcademicHubPage() {
  const [activeTab, setActiveTab] = useState("courses");
  const [search, setSearch] = useState("");

  return (
    <main className="lg:ml-60 bg-bg-secondary min-h-screen px-3 sm:px-4 py-6 lg:px-8 md:mb-0 mb-20">

      {/* Identity Banner */}
      <div className="bg-card rounded-xl border border-border p-4 sm:p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="w-full">
          <div className="text-xs font-semibold tracking-widest uppercase text-muted mb-1">Your Academic Profile</div>
          <h1 className="text-lg sm:text-xl font-bold font-heading text-text mb-1">Computer Science — 300 Level</h1>
          <p className="text-sm text-muted mb-3">CampusPlug · 2025/2026 Session</p>
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-primary-soft text-primary">
              <AppIcon name="academicHub" className="w-3 h-3" /> 8 Courses
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-bg-secondary text-muted">
              <AppIcon name="file" className="w-3 h-3" /> 14 Resources
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-bg-secondary text-muted">
              <AppIcon name="graduationCap" className="w-3 h-3" /> 2 Sessions
            </span>
          </div>
        </div>
        <Button variant="card" size="sm" className="flex items-center gap-2 flex-shrink-0 rounded-lg">
          <AppIcon name="edit" className="w-3.5 h-3.5" /> Edit Profile
        </Button>
      </div>

      {/* Hub Tabs — using Tabs component */}
      <Tabs
        tabs={HUB_TABS}
        activeTab={activeTab}
        onChange={setActiveTab}
        variant="default"
        className="mb-6"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5 items-start">
        <div className="space-y-5">

          {/* COURSES */}
          {activeTab === "courses" && (
            <div className="bg-card rounded-xl border border-border p-4 sm:p-5">
              <h2 className="font-bold font-heading text-text flex items-center gap-2 mb-4">
                <AppIcon name="academicHub" className="w-4 h-4 text-primary" /> CSC 300 Level Courses
              </h2>
              <div className="space-y-2.5">
                {COURSES.map(({ code, units, name, resources, tutors, status }) => (
                  <div key={code} className="flex flex-col sm:flex-row sm:items-center gap-3 p-3.5 border border-border rounded-xl cursor-pointer transition-all hover:border-primary-mid hover:bg-primary-soft">

                    {/* Top row on mobile: badge + name */}
                    <div className="flex items-center gap-3 sm:contents">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary-soft flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-[10px] sm:text-xs font-extrabold text-primary tracking-wide">{code}</span>
                        <span className="text-[10px] sm:text-xs text-muted">{units}</span>
                      </div>

                      <div className="flex-1 min-w-0 sm:hidden">
                        <div className="text-sm font-semibold text-text mb-1">{name}</div>
                        <div className={`flex items-center gap-1 text-xs font-medium ${status === "unlocked" ? "text-primary" : "text-warning"}`}>
                          <AppIcon name={status === "unlocked" ? "check" : "lock"} className="w-3 h-3" />
                          {status === "unlocked" ? "Unlocked" : "Locked"}
                        </div>
                      </div>
                    </div>

                    {/* Middle: name + meta (desktop only) */}
                    <div className="flex-1 min-w-0 hidden sm:block">
                      <div className="text-sm font-semibold text-text mb-1">{name}</div>
                      <div className="flex items-center gap-3 text-xs text-muted flex-wrap">
                        <span className="flex items-center gap-1"><AppIcon name="file" className="w-3 h-3" /> {resources} resources</span>
                        <span className="flex items-center gap-1"><AppIcon name="graduationCap" className="w-3 h-3" /> {tutors} tutors</span>
                        <span className={`flex items-center gap-1 font-medium ${status === "unlocked" ? "text-primary" : "text-warning"}`}>
                          <AppIcon name={status === "unlocked" ? "check" : "lock"} className="w-3 h-3" />
                          {status === "unlocked" ? "Unlocked" : "Locked"}
                        </span>
                      </div>
                    </div>

                    {/* Meta row on mobile */}
                    <div className="flex items-center gap-3 text-xs text-muted sm:hidden px-1">
                      <span className="flex items-center gap-1"><AppIcon name="file" className="w-3 h-3" /> {resources} resources</span>
                      <span className="flex items-center gap-1"><AppIcon name="graduationCap" className="w-3 h-3" /> {tutors} tutors</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 flex-shrink-0">
                      <Button variant="ghost" size="sm" className="rounded-lg text-xs">Resources</Button>
                      <Button variant="card" size="sm" className="rounded-lg text-xs">Tutors</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RESOURCES */}
          {activeTab === "resources" && (
            <div className="bg-card rounded-xl border border-border p-4 sm:p-5">
              <div className="flex items-center justify-between mb-4 gap-3">
                <h2 className="font-bold font-heading text-text flex items-center gap-2 min-w-0">
                  <AppIcon name="file" className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="truncate">Course Resources</span>
                </h2>
                <div className="relative flex-shrink-0">
                  <AppIcon name="search" className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted" />
                  <input
                    type="text"
                    placeholder="Search…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-8 pr-3 py-1.5 border border-border rounded-lg text-xs outline-none focus:border-primary w-28 sm:w-36 transition-colors bg-bg-secondary text-text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RESOURCES.filter(r => r.title.toLowerCase().includes(search.toLowerCase())).map(({ icon, bg, color, type, title, course, size, status }) => (
                  <div key={title} className="border border-border rounded-xl p-4 cursor-pointer transition-all hover:border-primary-mid hover:shadow-md bg-card">
                    <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-3`}>
                      <AppIcon name={icon} className={`w-5 h-5 ${color}`} />
                    </div>
                    <div className="text-xs font-bold tracking-widest uppercase text-muted mb-1">{type}</div>
                    <div className="text-sm font-semibold text-text mb-1 leading-snug">{title}</div>
                    <div className="text-xs text-muted mb-3">{course} · {size}</div>
                    <div className="flex items-center justify-between gap-2">
                      {status === "free"
                        ? <span className="flex items-center gap-1 text-xs font-semibold text-primary"><AppIcon name="check" className="w-3 h-3" /> Free</span>
                        : <span className="flex items-center gap-1 text-xs font-semibold text-warning"><AppIcon name="lock" className="w-3 h-3" /> Locked</span>
                      }
                      <Button
                        variant={status === "free" ? "ghost" : "card"}
                        size="sm"
                        className="flex items-center gap-1 rounded-lg text-xs"
                      >
                        <AppIcon name={status === "free" ? "download" : "lock"} className="w-3 h-3" />
                        {status === "free" ? "Download" : "Unlock"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TUTORS */}
          {activeTab === "tutors" && (
            <div className="bg-card rounded-xl border border-border p-4 sm:p-5">
              <h2 className="font-bold font-heading text-text flex items-center gap-2 mb-4">
                <AppIcon name="graduationCap" className="w-4 h-4 text-primary" /> Available Tutors
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {TUTORS.map(({ icon, iconColor, bg, name, subjects, price, rating }) => (
                  <div key={name} className="bg-card border border-border rounded-xl p-4 cursor-pointer transition-all hover:border-primary-mid hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0 ${bg}`}>
                        <AppIcon name={icon} className={`w-5 h-5 ${iconColor}`} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-text truncate">{name}</div>
                        <div className="flex items-center gap-1 text-xs text-muted">
                          <AppIcon name="star" className="w-3 h-3 text-warning" /> {rating}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted mb-3 line-clamp-2">{subjects}</div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-text">{price}</span>
                      <Button variant="primary" size="sm" className="flex items-center gap-1.5 rounded-lg text-xs flex-shrink-0">
                        <AppIcon name="calendar" className="w-3 h-3" /> Book
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SKILLS */}
          {activeTab === "skills" && (
            <div className="bg-card rounded-xl border border-border p-4 sm:p-5">
              <h2 className="font-bold font-heading text-text flex items-center gap-2 mb-4">
                <AppIcon name="target" className="w-4 h-4 text-primary" /> Skill Learning
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {SKILLS.map(({ icon, iconColor, bg, title, instructor, students, price, tags }) => (
                  <div key={title} className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer transition-all hover:border-primary-mid hover:shadow-md hover:-translate-y-0.5">
                    <div className={`h-16 sm:h-20 flex items-center justify-center ${bg}`}>
                      <AppIcon name={icon} className={`w-8 h-8 sm:w-10 sm:h-10 ${iconColor}`} />
                    </div>
                    <div className="p-3 sm:p-3.5">
                      <div className="text-sm font-semibold text-text mb-1 line-clamp-1">{title}</div>
                      <div className="flex items-center gap-1 text-xs text-muted mb-2 flex-wrap">
                        <AppIcon name="profile" className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">by {instructor}</span>
                        <span>· {students} students</span>
                      </div>
                      <div className="flex gap-1.5 flex-wrap mb-3">
                        {tags.map((tag) => (
                          <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded bg-bg-secondary text-muted">{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold text-text">{price}</span>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1 rounded-lg text-xs flex-shrink-0">
                          <AppIcon name="add" className="w-3 h-3" /> Enroll
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-4">
          <div className="relative rounded-xl p-5 text-white overflow-hidden bg-gradient-to-br from-navy-background to-[#1A3447]">
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/10" />
            <div className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">Wallet Balance</div>
            <div className="relative z-10 text-3xl font-bold font-heading mb-4">₦24,500.00</div>
            <div className="relative z-10 flex gap-2">
              <Button variant="primary" size="sm" className="flex-1 rounded-lg">Fund Wallet</Button>
              <button className="flex-1 py-2 rounded-lg text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors border-none cursor-pointer">Withdraw</button>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-navy-background to-[#1A3447] rounded-xl p-5 text-white overflow-hidden">
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-primary/10" />
            <div className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Semester Progress</div>
            {PROGRESS.map(({ label, val, total, pct }) => (
              <div key={label} className="mb-3">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-white/70">{label}</span>
                  <span className="font-semibold text-white">{val}/{total}</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold font-heading text-text">My Resources</h2>
              <a className="text-xs font-medium text-primary cursor-pointer hover:underline">View library</a>
            </div>
            <div className="space-y-1">
              {MY_RESOURCES.map(({ icon, bg, color, course, label, tag, tagColor }) => (
                <div key={label} className="flex items-center gap-2.5 p-2 rounded-lg cursor-pointer hover:bg-bg-secondary transition-colors">
                  <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                    <AppIcon name={icon} className={`w-3.5 h-3.5 ${color}`} />
                  </div>
                  <div className="text-xs text-text flex-1 truncate"><strong>{course}</strong> — {label}</div>
                  <span className={`flex items-center gap-1 text-xs font-semibold flex-shrink-0 ${tagColor}`}>
                    <AppIcon name={icon === "lock" ? "lock" : "download"} className="w-3 h-3" /> {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}