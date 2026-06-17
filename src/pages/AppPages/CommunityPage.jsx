import React, { useState } from "react";
import { AppIcon } from "../../components/icons";

const INITIAL_POSTS = [
  {
    id: 1,
    author: "Chisom Eze",
    avatar: "CE",
    tag: "CSC 300L",
    school: "UNILAG",
    department: "Computer Science",
    time: "2h ago",
    content:
      "Anyone have the full CSC305 notes from last semester? The ones the lecturer uploaded are incomplete from chapter 7 onwards. Willing to swap for my MAT301 compiled notes.",
    likes: 18,
    comments: 7,
    liked: false,
    saved: false,
  },
  {
    id: 2,
    author: "Tunde Adesanya",
    avatar: "TA",
    tag: "Tutor",
    school: "UNILAG",
    department: "400L Alumni",
    time: "5h ago",
    content:
      "Free Data Structures crash session this Friday at 3PM. I'll be covering trees, graphs, and recursion. Drop your school email to get the link. 300L CSC students, this is for you.",
    likes: 42,
    comments: 15,
    liked: false,
    saved: false,
  },
  {
    id: 3,
    author: "Funmi Ade",
    avatar: "FA",
    tag: "400L",
    school: "Covenant University",
    department: "Law",
    time: "Yesterday",
    image: "announcement",
    content:
      "Just finished recording the second module of my Public Speaking course on CampusLink. Covers persuasion, debate structure & body language. Enrollment still open at ₦3,500!",
    likes: 29,
    comments: 9,
    liked: false,
    saved: false,
  },
  {
    id: 4,
    author: "Emeka Obi",
    avatar: "EO",
    tag: "Tutor",
    school: "UNILAG",
    department: "Mathematics",
    time: "2 days ago",
    content:
      "Reminder: MAT301 past questions 2015–2024 compiled PDF is now available for free on the Academic Hub. No strings attached. Let me know if you need help understanding any solutions.",
    likes: 61,
    comments: 12,
    liked: false,
    saved: false,
  },
];

const INITIAL_GROUPS = [
  {
    id: 1,
    name: "CSC 300L Study Circle",
    members: "142 members",
    joined: false,
  },
  {
    id: 2,
    name: "UNILAG Classroom Swap",
    members: "89 members",
    joined: false,
  },
  {
    id: 3,
    name: "Mathematics Enthusiasts",
    members: "234 members",
    joined: true,
  },
  { id: 4, name: "Law Lectures Hub", members: "156 members", joined: false },
];

const TRENDING = [
  { rank: 1, name: "CSC305 Notes", count: "1.2k posts" },
  { rank: 2, name: "Exam Preparation", count: "892 posts" },
  { rank: 3, name: "Study Tips", count: "673 posts" },
];

const EVENTS = [
  {
    id: 1,
    day: "07",
    month: "Mar",
    title: "Free Data Structures Session — Tunde Adesanya",
    meta: "Online · Google Meet · 3:00 PM",
    badge: "Open · 24 RSVP",
    badgeIcon: "verified",
  },
  {
    id: 2,
    day: "10",
    month: "Mar",
    title: "UNILAG Tech Fest 2026 — Hackathon Day 1",
    meta: "Engineering Hall · 9:00 AM – 6:00 PM",
    badge: "Register · ₦1,000",
    badgeIcon: "ticket",
  },
  {
    id: 3,
    day: "14",
    month: "Mar",
    title: "Campus Career Fair — IT & Engineering Focus",
    meta: "Faculty of Science Auditorium · 10:00 AM",
    badge: "Free · 67 RSVP",
    badgeIcon: "verified",
  },
  {
    id: 4,
    day: "21",
    month: "Mar",
    title: "Debate Championship — Quarter Finals",
    meta: "SUB Hall A · 2:00 PM",
    badge: "Register · Free",
    badgeIcon: "ticket",
  },
];

const QUESTIONS = [
  {
    id: 1,
    author: "Anonymous",
    avatar: "AN",
    tag: "CSC 300L",
    detail: "Posted in Academic Q&A",
    time: "1h ago",
    body: "Can anyone explain the difference between DFS and BFS in plain terms? I keep mixing them up in CSC301 assignments.",
    votes: 12,
    answers: 5,
    status: "answered",
    statusIcon: "verified",
  },
  {
    id: 2,
    author: "Nkechi Olu",
    avatar: "NO",
    tag: "CSC 200L",
    detail: "Posted in Academic Q&A",
    time: "3h ago",
    body: "Which textbook does Prof. Okafor use for Database Management Systems? The course outline lists two different ones.",
    votes: 8,
    answers: 3,
    status: "pending",
    statusIcon: "pending",
  },
];

const TABS = [
  { key: "feed", label: "Feed", icon: "home" },
  { key: "groups", label: "Groups", icon: "groups" },
  { key: "events", label: "Events", icon: "calendar" },
  { key: "qa", label: "Q&A", icon: "question" },
];

const BANNER_BADGES = [
  { icon: "community", text: "5 Groups Joined" },
  { icon: "groups", text: "1,240 Members" },
  { icon: "announcement", text: "32 Posts Today" },
];

const PostCard = ({ post, onLike, onSave, onComment }) => (
  <div className="bg-white border-2 border-gray-200 rounded-lg sm:rounded-2xl p-4 sm:p-5 mb-3 transition-all hover:border-green-200 hover:shadow-lg">
    <div className="flex gap-2 sm:gap-3 mb-3">
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center text-base sm:text-lg flex-shrink-0">
        {post.avatar}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2">
          <span className="text-xs sm:text-sm font-semibold text-navy block sm:inline">
            {post.author}
          </span>
          <span className="inline-block px-2 py-0.5 sm:py-1 bg-green-100 text-green-600 text-xs font-bold rounded w-fit">
            {post.tag}
          </span>
        </div>
        <div className="text-xs text-gray-500">
          {post.school} · {post.department}
        </div>
      </div>
      <div className="text-xs text-gray-500">{post.time}</div>
    </div>
    {post.image && (
      <div className="w-full rounded-lg bg-gray-100 h-40 flex items-center justify-center mb-3">
        <AppIcon name={post.image} className="w-12 h-12 text-gray-500" />
      </div>
    )}
    <div className="text-xs sm:text-sm text-navy leading-relaxed mb-3">
      {post.content}
    </div>
    <div className="flex items-center gap-2 sm:gap-4 pt-2 sm:pt-3 border-t border-gray-200 flex-wrap">
      <button
        onClick={() => onLike(post.id)}
        className={`flex items-center gap-1 text-xs transition-all px-2 py-1 rounded ${post.liked ? "text-green-600" : "text-gray-500 hover:bg-gray-100"}`}
      >
        <AppIcon name="heart" className="w-3.5 h-3.5" /> {post.likes}
      </button>
      <button
        onClick={() => onComment(post.id)}
        className="flex items-center gap-1 text-xs text-gray-500 hover:bg-gray-100 px-2 py-1 rounded"
      >
        <AppIcon name="community" className="w-3.5 h-3.5" /> {post.comments}
      </button>
      <button
        onClick={() => alert("Post shared.")}
        className="flex items-center gap-1 text-xs text-gray-500 hover:bg-gray-100 px-2 py-1 rounded"
      >
        <AppIcon name="share" className="w-3.5 h-3.5" /> Share
      </button>
      <button
        onClick={() => onSave(post.id)}
        className={`flex items-center gap-1 text-xs transition-all px-2 py-1 rounded ml-auto ${post.saved ? "text-green-600 bg-green-50" : "text-gray-500 hover:bg-gray-100"}`}
      >
        <AppIcon name="bookmark" className="w-3.5 h-3.5" />{" "}
        {post.saved ? "Saved" : "Save"}
      </button>
    </div>
  </div>
);

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("feed");
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [groups, setGroups] = useState(INITIAL_GROUPS);
  const [showAllGroups, setShowAllGroups] = useState(false);

  const toggleLike = (id) =>
    setPosts(
      posts.map((p) =>
        p.id === id
          ? {
              ...p,
              liked: !p.liked,
              likes: p.liked ? p.likes - 1 : p.likes + 1,
            }
          : p,
      ),
    );
  const toggleSave = (id) =>
    setPosts(posts.map((p) => (p.id === id ? { ...p, saved: !p.saved } : p)));
  const toggleJoinGroup = (id) =>
    setGroups(
      groups.map((g) => (g.id === id ? { ...g, joined: !g.joined } : g)),
    );

  return (
    <main className="lg:ml-60 bg-gray-100 min-h-screen px-4 sm:px-6 py-5 sm:py-7 lg:px-8 md:mb-0 mb-20">
      {/* Banner */}
      <div className="bg-gradient-to-r from-navy to-blue-900 rounded-lg sm:rounded-2xl p-4 sm:p-7 mb-4 sm:mb-6 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-green-200 opacity-10" />
        <div className="relative z-10">
          <div className="text-xs font-bold uppercase text-white/40 mb-1 sm:mb-2">
            Campus Community
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-1">
            Connect with Fellow Students
          </h1>
          <p className="text-xs sm:text-sm text-white/60 mb-2 sm:mb-4">
            University of Lagos · UNILAG Hub
          </p>
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
            {BANNER_BADGES.map((b, i) => (
              <span
                key={i}
                className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white/80 inline-flex items-center gap-1"
              >
                <AppIcon name={b.icon} className="w-3.5 h-3.5" />
                {b.text}
              </span>
            ))}
          </div>
          <button
            onClick={() => alert("Create post flow coming soon.")}
            className="px-4 sm:px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2"
          >
            <AppIcon name="add" className="w-4 h-4" />
            Create Post
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border-b-2 border-gray-300 mb-4 sm:mb-6 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap border-b-2 transition-all inline-flex items-center gap-2 ${activeTab === tab.key ? "text-green-600 border-green-600 font-semibold" : "text-gray-500 border-transparent hover:text-navy"}`}
          >
            <AppIcon name={tab.icon} className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="md:col-span-2 lg:col-span-3">
          {/* Create Post Box */}
          <div className="bg-gray-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-5 flex flex-col sm:flex-row gap-2 sm:gap-3 border-2 border-transparent hover:border-green-300 hover:bg-white transition-all cursor-pointer">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
              AB
            </div>
            <span className="text-xs sm:text-sm text-gray-600 flex-1">
              Share something with your campus…
            </span>
            <div className="flex gap-1 sm:gap-2">
              {[
                { label: "Photo", icon: "image" },
                { label: "File", icon: "file" },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={() => alert(`${btn.label} upload coming soon!`)}
                  className="px-2 sm:px-3 py-1 bg-white border border-gray-300 rounded text-xs font-medium text-gray-600 hover:border-green-500 hover:text-green-600 transition-all inline-flex items-center gap-1"
                >
                  <AppIcon name={btn.icon} className="w-3.5 h-3.5" />
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Feed */}
          {activeTab === "feed" &&
            posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onLike={toggleLike}
                onSave={toggleSave}
                onComment={(id) => alert(`Open comments for post ${id}.`)}
              />
            ))}

          {/* Groups */}
          {activeTab === "groups" && (
            <div className="flex flex-col gap-2 sm:gap-3">
              {groups.map((g) => (
                <div
                  key={g.id}
                  className="bg-white border-2 border-gray-200 rounded-lg p-3 flex items-center gap-2 sm:gap-3 hover:border-green-200 hover:bg-green-50 transition-all cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gray-100 flex items-center justify-center text-base sm:text-lg flex-shrink-0">
                    <AppIcon name="groups" className="w-5 h-5 text-navy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm font-semibold text-navy line-clamp-1">
                      {g.name}
                    </div>
                    <div className="text-xs text-gray-600">{g.members}</div>
                  </div>
                  <button
                    onClick={() => toggleJoinGroup(g.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${g.joined ? "bg-gray-100 text-gray-600 hover:bg-gray-200" : "bg-green-100 text-green-600 hover:bg-green-600 hover:text-white"}`}
                  >
                    {g.joined ? "Joined" : "Join"}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Events */}
          {activeTab === "events" && (
            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                <h3 className="text-xs sm:text-sm font-bold text-navy">
                  Upcoming Events
                </h3>
                <button className="px-3 sm:px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs sm:text-sm font-semibold transition-all w-full sm:w-auto">
                  Host Event
                </button>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {EVENTS.map((e) => (
                  <div
                    key={e.id}
                    className="flex gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg border-2 border-gray-200 hover:border-green-200 hover:bg-green-50 cursor-pointer transition-all"
                  >
                    <div className="w-12 flex-shrink-0 text-center">
                      <div className="text-lg sm:text-xl font-bold text-navy">
                        {e.day}
                      </div>
                      <div className="text-xs font-semibold text-gray-500 uppercase">
                        {e.month}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-semibold text-navy line-clamp-1 sm:line-clamp-none">
                        {e.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {e.meta}
                      </div>
                      <div className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">
                        <span className="inline-flex items-center gap-1">
                          <AppIcon name={e.badgeIcon} className="w-3 h-3" />
                          {e.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Q&A */}
          {activeTab === "qa" && (
            <div>
              <div className="flex justify-end mb-4">
                <button className="px-4 sm:px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2">
                  <AppIcon name="question" className="w-4 h-4" />
                  Ask a Question
                </button>
              </div>
              {QUESTIONS.map((q) => (
                <div
                  key={q.id}
                  className="bg-white border-2 border-gray-200 rounded-lg sm:rounded-2xl p-4 sm:p-5 mb-3 transition-all hover:border-green-200 hover:shadow-lg"
                >
                  <div className="flex gap-2 sm:gap-3 mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center text-base sm:text-lg flex-shrink-0">
                      {q.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2">
                        <span className="text-xs sm:text-sm font-semibold text-navy block">
                          {q.author}
                        </span>
                        <span className="inline-block px-2 py-0.5 sm:py-1 bg-green-100 text-green-600 text-xs font-bold rounded w-fit">
                          {q.tag}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {q.detail}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 flex-shrink-0">
                      {q.time}
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm text-navy leading-relaxed mb-3">
                    {q.body}
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 pt-2 sm:pt-3 border-t border-gray-200 flex-wrap">
                    <button className="flex items-center gap-1 text-xs text-gray-500 hover:bg-gray-100 px-2 py-1 rounded transition-all">
                      <AppIcon name="thumbsUp" className="w-3.5 h-3.5" />{" "}
                      {q.votes}
                    </button>
                    <button className="flex items-center gap-1 text-xs text-gray-500 hover:bg-gray-100 px-2 py-1 rounded transition-all">
                      <AppIcon name="community" className="w-3.5 h-3.5" />{" "}
                      {q.answers} Answers
                    </button>
                    <button
                      className={`flex items-center gap-1 text-xs px-2 py-1 rounded ml-auto ${q.status === "answered" ? "text-green-600" : "text-amber-500"}`}
                    >
                      <AppIcon name={q.statusIcon} className="w-3.5 h-3.5" />
                      {q.status === "answered" ? "Answered" : "Pending"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-2xl p-5 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-navy">My Groups</h3>
              <button
                onClick={() => setShowAllGroups(!showAllGroups)}
                className="text-xs font-medium text-green-600 hover:underline cursor-pointer"
              >
                {showAllGroups ? "Hide" : "See all"}
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {(showAllGroups ? groups : groups.slice(0, 3)).map((g) => (
                <button
                  key={g.id}
                  onClick={() => alert(`Opened group: ${g.name}`)}
                  className="w-full text-xs p-2 rounded text-left cursor-pointer hover:bg-gray-100 transition-all bg-transparent border-none"
                >
                  <div className="font-semibold text-navy">{g.name}</div>
                  <div className="text-gray-500 mt-1">{g.members}</div>
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-5">
            <h3 className="text-xs sm:text-sm font-bold text-navy mb-3 sm:mb-4">
              Trending Topics
            </h3>
            <div className="flex flex-col gap-2 sm:gap-3">
              {TRENDING.map((t) => (
                <div
                  key={t.rank}
                  onClick={() => alert(`Filter by topic: ${t.name}`)}
                  className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded cursor-pointer hover:bg-gray-100 transition-all"
                >
                  <span className="text-xs sm:text-sm font-bold text-green-600 w-4 sm:w-5">
                    {t.rank}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm font-semibold text-navy line-clamp-1">
                      {t.name}
                    </div>
                    <div className="text-xs text-gray-500">{t.count}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
