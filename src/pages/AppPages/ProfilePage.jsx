import React, { useState } from "react";
import { AppIcon } from "../../components/icons";

const INITIAL_DATA = {
  name: "Adeola Bello",
  firstName: "Adeola",
  lastName: "Bello",
  subtitle: "University of Lagos · Computer Science · 300 Level · 2025/2026",
  avatar: "AB",
  verified: true,
  stats: { courses: 8, resources: 14, sessions: 5, rating: 4.8 },
  about:
    "Computer Science student at the University of Lagos. Passionate about software engineering, data structures, and UI/UX design. Currently building projects with React and Python. Open to collaborations and study groups!",
  skills: ["React", "Python", "Data Structures", "UI/UX Design", "SQL"],
  academic: {
    institution: "University of Lagos",
    department: "Computer Science",
    level: "300 Level",
    session: "2025/2026",
    matricNo: "190401027",
    semester: "2nd Semester",
  },
  contact: {
    email: "adeola.bello@student.unilag.edu.ng",
    phone: "+234 810 234 5678",
    linkedin: "linkedin.com/in/adeola-bello",
  },
};

const TABS = [
  { key: "overview", label: "Overview" },
  { key: "edit", label: "Edit Info" },
  { key: "badges", label: "Badges & Achievements" },
  { key: "activity", label: "Activity" },
];

const ACADEMIC_FIELDS = [
  { label: "Institution", key: "institution" },
  { label: "Department", key: "department" },
  { label: "Level", key: "level" },
  { label: "Session", key: "session" },
  { label: "Matric No", key: "matricNo" },
  { label: "Semester", key: "semester" },
];

const STAT_ITEMS = (s) => [
  {
    value: s.courses,
    label: "Courses",
    msg: `${s.courses} courses completed.`,
  },
  {
    value: s.resources,
    label: "Resources",
    msg: `${s.resources} resources downloaded.`,
  },
  {
    value: s.sessions,
    label: "Sessions",
    msg: `${s.sessions} tutoring sessions completed.`,
  },
];

const CONTACT_ITEMS = (c) => [
  { icon: "messages", text: c.email, cls: "text-navy" },
  { icon: "phone", text: c.phone, cls: "text-navy" },
  {
    icon: "share",
    text: c.linkedin,
    cls: "text-green-600 cursor-pointer hover:underline",
  },
];

const PERSONAL_FIELDS = [
  { label: "First Name", path: "firstName", type: "text" },
  { label: "Last Name", path: "lastName", type: "text" },
  { label: "Email Address", path: "contact.email", type: "email", span: true },
  { label: "Phone Number", path: "contact.phone", type: "tel", span: true },
  {
    label: "LinkedIn Profile",
    path: "contact.linkedin",
    type: "text",
    span: true,
  },
];

const ACADEMIC_EDIT_FIELDS = [
  { label: "Institution", path: "academic.institution", type: "text" },
  { label: "Department", path: "academic.department", type: "text" },
  {
    label: "Level",
    path: "academic.level",
    type: "select",
    options: ["100 Level", "200 Level", "300 Level", "400 Level", "500 Level"],
  },
  { label: "Session", path: "academic.session", type: "text" },
  { label: "Matric Number", path: "academic.matricNo", type: "text" },
  { label: "Semester", path: "academic.semester", type: "text" },
];

const BADGES = [
  {
    icon: "graduationCap",
    name: "First Session",
    desc: "Completed 1st tutoring session",
  },
  {
    icon: "academicHub",
    name: "Resource Hunter",
    desc: "Downloaded 10+ resources",
  },
  { icon: "community", name: "Community Star", desc: "Made 20+ posts" },
  {
    icon: "marketplace",
    name: "First Purchase",
    desc: "Bought your first item",
  },
  { icon: "verified", name: "Verified Student", desc: "Student ID confirmed" },
  {
    icon: "star",
    name: "Top Reviewer",
    desc: "Leave 5 reviews (2/5)",
    inactive: true,
  },
];

const ACTIVITIES = [
  {
    icon: "download",
    background: "bg-green-100",
    text: "Downloaded <strong>CSC301 Notes PDF</strong> from Academic Hub",
    time: "2h ago",
  },
  {
    icon: "community",
    background: "bg-blue-100",
    text: "Posted in <strong>CSC 300L Study Circle</strong> community group",
    time: "5h ago",
  },
  {
    icon: "marketplace",
    background: "bg-orange-100",
    text: "Ordered <strong>TI-84 Calculator</strong> from Marketplace",
    time: "2 days ago",
  },
  {
    icon: "graduationCap",
    background: "bg-green-100",
    text: "Booked tutoring session with <strong>Tunde Adesanya</strong>",
    time: "4 days ago",
  },
  {
    icon: "palette",
    background: "bg-purple-100",
    text: "Enrolled in <strong>UI/UX Design Fundamentals</strong> skill course",
    time: "1 week ago",
  },
];

const card =
  "bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm";
const inputCls =
  "w-full px-3 py-2 sm:py-2.5 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-xs sm:text-sm";
const ghostBtn =
  "px-3 sm:px-4 py-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white rounded-lg text-xs sm:text-sm font-semibold transition-all w-full sm:w-auto min-h-10";
const statBox =
  "text-center p-2 sm:p-3 border-2 border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all cursor-pointer";

const getVal = (obj, path) => path.split(".").reduce((o, k) => o?.[k], obj);

const FormSection = ({
  title,
  fields,
  formData,
  onChange,
  onSave,
  onCancel,
  section,
}) => (
  <div className={card}>
    <h3 className="text-sm font-bold text-navy mb-4 sm:mb-6">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
      {fields.map((f, i) => (
        <div key={i} className={f.span ? "sm:col-span-2" : ""}>
          <label className="block text-xs font-semibold text-gray-600 mb-2">
            {f.label}
          </label>
          {f.type === "select" ? (
            <select
              value={getVal(formData, f.path)}
              onChange={(e) => onChange(e, f.path)}
              className={inputCls}
            >
              {f.options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          ) : f.type === "textarea" ? (
            <textarea
              rows={f.rows || 4}
              value={getVal(formData, f.path)}
              onChange={(e) => onChange(e, f.path)}
              className={`${inputCls} font-sans`}
            />
          ) : (
            <input
              type={f.type}
              value={getVal(formData, f.path)}
              onChange={(e) => onChange(e, f.path)}
              className={inputCls}
            />
          )}
        </div>
      ))}
    </div>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
      <button
        onClick={() => onSave(section)}
        className="px-4 sm:px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs sm:text-sm font-semibold transition-all w-full sm:w-auto inline-flex items-center justify-center gap-2"
      >
        <AppIcon name="check" className="w-4 h-4" />
        Save Changes
      </button>
      <button
        onClick={() => onCancel(section)}
        className="px-4 sm:px-6 py-2 bg-gray-200 hover:bg-gray-300 text-navy rounded-lg text-xs sm:text-sm font-semibold transition-all w-full sm:w-auto inline-flex items-center justify-center gap-2"
      >
        <AppIcon name="close" className="w-4 h-4" />
        Cancel
      </button>
    </div>
  </div>
);

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [profileData, setProfileData] = useState(INITIAL_DATA);
  const [formData, setFormData] = useState({ ...INITIAL_DATA });
  const [editMode, setEditMode] = useState({
    personal: false,
    academic: false,
    contact: false,
    about: false,
  });

  const handleInputChange = (e, path) => {
    const keys = path.split(".");
    const updated = { ...formData };
    let obj = updated;
    for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
    obj[keys[keys.length - 1]] = e.target.value;
    setFormData(updated);
  };

  const saveChanges = (section) => {
    setProfileData({ ...formData });
    setEditMode({ ...editMode, [section]: false });
  };
  const cancelChanges = (section) => {
    setFormData({ ...profileData });
    setEditMode({ ...editMode, [section]: false });
  };

  const heroBadges = [
    {
      icon: "verified",
      text: "Verified Student",
      cls: "bg-green-600 text-white",
    },
    {
      icon: "academicHub",
      text: `${profileData.stats.courses} Courses`,
      cls: "bg-white/10 border border-white/20 text-white",
    },
    {
      icon: "graduationCap",
      text: `${profileData.stats.sessions} Sessions`,
      cls: "bg-white/10 border border-white/20 text-white",
    },
    {
      icon: "star",
      text: `${profileData.stats.rating} Rating`,
      cls: "bg-white/10 border border-white/20 text-white",
    },
  ];

  return (
    <main className="lg:ml-60 bg-gray-100 min-h-screen px-4 sm:px-6 py-5 sm:py-7 lg:px-8 md:mb-0 mb-20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-navy to-blue-900 rounded-lg sm:rounded-2xl p-4 sm:p-7 mb-4 sm:mb-6 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-200 opacity-10" />
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-wrap">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-green-200 text-green-600 border-4 border-green-300 flex items-center justify-center text-3xl font-bold">
              {profileData.avatar}
            </div>
            <button
              onClick={() => alert("Avatar upload feature coming soon.")}
              className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs cursor-pointer border-2 border-navy hover:bg-green-600 transition-all"
            >
              <AppIcon name="camera" className="w-3 h-3 text-white" />
            </button>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              {profileData.name}
            </h1>
            <p className="text-xs sm:text-sm text-white/60 mb-2 sm:mb-3 line-clamp-2">
              {profileData.subtitle}
            </p>
            <div className="flex flex-wrap gap-2 w-full">
              {heroBadges.map((b, i) => (
                <span
                  key={i}
                  className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold line-clamp-1 inline-flex items-center gap-1 ${b.cls}`}
                >
                  <AppIcon name={b.icon} className="w-3.5 h-3.5" />
                  {b.text}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 flex-wrap w-full">
            <button
              onClick={() => setActiveTab("edit")}
              className="px-3 sm:px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs sm:text-sm font-semibold transition-all w-full sm:w-auto min-h-10 inline-flex items-center justify-center gap-2"
            >
              <AppIcon name="edit" className="w-4 h-4" />
              Edit Profile
            </button>
            <button
              onClick={() =>
                alert(
                  "Profile link copied.\n\nhttps://campuslink.app/profile/adeola-bello",
                )
              }
              className={`${ghostBtn} inline-flex items-center justify-center gap-2`}
            >
              <AppIcon name="share" className="w-4 h-4" />
              Share Profile
            </button>
            <button
              onClick={() => alert("Opening public profile preview...")}
              className={`${ghostBtn} inline-flex items-center justify-center gap-2`}
            >
              <AppIcon name="preview" className="w-4 h-4" />
              View as Public
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border-b-2 border-gray-300 mb-4 sm:mb-6 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap border-b-2 transition-all ${activeTab === tab.key ? "text-green-600 border-green-600 font-semibold" : "text-gray-500 border-transparent hover:text-navy"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="md:col-span-2 lg:col-span-3 space-y-4 sm:space-y-6">
            <div className={card}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-navy">About Me</h3>
                <button
                  onClick={() => setActiveTab("edit")}
                  className="text-xs font-medium text-green-600 cursor-pointer hover:underline"
                >
                  Edit
                </button>
              </div>
              <p className="text-sm text-navy leading-relaxed mb-4">
                {profileData.about}
              </p>
              <div className="flex flex-wrap gap-3">
                {profileData.skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className={card}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-navy">
                  Academic Details
                </h3>
                <button
                  onClick={() => setActiveTab("edit")}
                  className="text-xs font-medium text-green-600 cursor-pointer hover:underline"
                >
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {ACADEMIC_FIELDS.map((f, i) => (
                  <div key={i}>
                    <div className="text-xs font-semibold text-gray-500 mb-1 uppercase">
                      {f.label}
                    </div>
                    <div className="text-sm font-semibold text-navy">
                      {profileData.academic[f.key]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className={card}>
              <h3 className="text-xs sm:text-sm font-bold text-navy mb-3 sm:mb-4">
                Stats
              </h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {STAT_ITEMS(profileData.stats).map((s, i) => (
                  <div key={i} onClick={() => alert(s.msg)} className={statBox}>
                    <div className="text-lg sm:text-xl font-bold text-navy">
                      {s.value}
                    </div>
                    <div className="text-xs text-gray-600 mt-0.5 sm:mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={card}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-navy">Contact Info</h3>
                <button
                  onClick={() => setActiveTab("edit")}
                  className="text-xs font-medium text-green-600 cursor-pointer hover:underline"
                >
                  Edit
                </button>
              </div>
              <div className="space-y-3">
                {CONTACT_ITEMS(profileData.contact).map((c, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <AppIcon name={c.icon} className="w-4 h-4 text-gray-500" />
                    <span className={`text-xs ${c.cls}`}>{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Info */}
      {activeTab === "edit" && (
        <div className="space-y-4 sm:space-y-6">
          <FormSection
            title="Personal Information"
            fields={PERSONAL_FIELDS}
            formData={formData}
            onChange={handleInputChange}
            onSave={saveChanges}
            onCancel={cancelChanges}
            section="personal"
          />
          <FormSection
            title="Academic Information"
            fields={ACADEMIC_EDIT_FIELDS}
            formData={formData}
            onChange={handleInputChange}
            onSave={saveChanges}
            onCancel={cancelChanges}
            section="academic"
          />
          <FormSection
            title="About Me"
            fields={[
              {
                label: "Bio",
                path: "about",
                type: "textarea",
                span: true,
                rows: 4,
              },
            ]}
            formData={formData}
            onChange={handleInputChange}
            onSave={saveChanges}
            onCancel={cancelChanges}
            section="about"
          />
        </div>
      )}

      {/* Badges */}
      {activeTab === "badges" && (
        <div className={card}>
          <h3 className="text-sm font-bold text-navy mb-4 sm:mb-6">
            Earned Badges
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {BADGES.map((b, i) => (
              <div
                key={i}
                onClick={() =>
                  alert(
                    b.inactive
                      ? `Locked Badge\n\n${b.desc}\n\nKeep working to unlock this badge!`
                      : `${b.name}\n\n${b.desc}\n\nGreat achievement!`,
                  )
                }
                className={`text-center p-3 sm:p-4 border-2 border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all cursor-pointer ${b.inactive ? "opacity-40" : ""}`}
              >
                <div className="mb-2 sm:mb-3 inline-flex items-center justify-center rounded-full bg-gray-100 p-3">
                  <AppIcon
                    name={b.inactive ? "lock" : b.icon}
                    className="w-7 h-7 text-navy"
                  />
                </div>
                <div className="text-xs font-semibold text-navy line-clamp-2">
                  {b.name}
                </div>
                <div className="text-xs text-gray-600 mt-0.5 sm:mt-1 line-clamp-1">
                  {b.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Activity */}
      {activeTab === "activity" && (
        <div className={card}>
          <h3 className="text-sm font-bold text-navy mb-4 sm:mb-6">
            Recent Activity
          </h3>
          <div className="space-y-2 sm:space-y-3">
            {ACTIVITIES.map((a, i) => (
              <div
                key={i}
                onClick={() =>
                  alert(
                    `Activity: ${a.text.replace(/<[^>]*>/g, "")}\n\n${a.time}`,
                  )
                }
                className="flex gap-2 sm:gap-3 p-2 sm:p-3 border-2 border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all cursor-pointer"
              >
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${a.background} flex items-center justify-center text-base sm:text-lg flex-shrink-0`}
                >
                  <AppIcon name={a.icon} className="w-4 h-4 text-navy" />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-xs sm:text-sm text-navy leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: a.text }}
                  />
                </div>
                <div className="text-xs text-gray-600 flex-shrink-0 whitespace-nowrap ml-1">
                  {a.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
