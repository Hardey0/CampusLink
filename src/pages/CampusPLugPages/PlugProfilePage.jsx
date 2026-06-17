import React, { useState } from "react";
import { AppIcon } from "../../components/icons";

const INITIAL_DATA = {
  name: "TechLink Stores",
  subtitle: "CampusPlug Business · University of Lagos & Covenant University",
  avatar: "TL",
  verified: true,
  mode: "CampusPlug",
  about:
    "We are a student-focused tech store operating across UNILAG and Covenant University campuses. We sell quality electronics, provide repair services, and offer tutoring and skill courses to help students succeed.",
  businessDetails: {
    name: "TechLink Stores",
    type: "Product Seller + Tutor",
    cacNo: "RC1234567",
    memberSince: "January 2025",
    email: "hello@techlink.ng",
    phone: "+234 810 999 1234",
    whatsapp: "+234 810 999 1234",
    instagram: "@techlink.ng",
    yearFounded: "2025",
  },
  stats: { orders: "31", revenue: "₦664k", rating: "4.8", fulfillment: "98%" },
  services: [
    "Electronics",
    "Laptop Repair",
    "Tutoring",
    "Printing",
    "Delivery",
  ],
  campuses: [
    {
      icon: "campusPrimary",
      name: "University of Lagos",
      type: "Primary",
      orders: "22 orders",
      status: "Active",
    },
    {
      icon: "campusSecondary",
      name: "Covenant University",
      type: "Secondary",
      orders: "9 orders",
      status: "Active",
    },
  ],
  reviews: [
    {
      avatar: "AB",
      name: "Adeola B.",
      rating: 5,
      date: "28 Feb 2026",
      text: "Bought the Lenovo ThinkPad and it was delivered same day to my hostel. TechLink is seriously the best on campus. Great customer service too!",
    },
    {
      avatar: "EO",
      name: "Emeka O.",
      rating: 5,
      date: "25 Feb 2026",
      text: "The tutoring session was excellent. Very patient, explained everything clearly. Already booked two more sessions.",
    },
    {
      avatar: "CE",
      name: "Chisom E.",
      rating: 4,
      date: "20 Feb 2026",
      text: "Good quality headphones. Delivery was a bit slow but overall great experience. Would recommend to anyone looking for affordable campus tech.",
    },
  ],
};

const TABS = [
  { key: "overview", label: "Overview" },
  { key: "edit", label: "Edit Info" },
  { key: "campuses", label: "Campus Coverage" },
  { key: "reviews", label: "Reviews (48)" },
];

const HERO_BADGES = (rating) => [
  {
    icon: "verified",
    text: "Verified CampusPlug",
    cls: "bg-blue-500 text-white",
  },
  {
    icon: "products",
    text: "12 Listings",
    cls: "bg-white/10 border border-white/20 text-white",
  },
  {
    icon: "academicHub",
    text: "4 Courses",
    cls: "bg-white/10 border border-white/20 text-white",
  },
  {
    icon: "star",
    text: `${rating} Rating`,
    cls: "bg-white/10 border border-white/20 text-white",
  },
];

const DETAIL_FIELDS = [
  { label: "Business Name", key: "name" },
  { label: "Type", key: "type" },
  { label: "CAC Registration", key: "cacNo" },
  { label: "Member Since", key: "memberSince" },
  { label: "Contact Email", key: "email" },
  { label: "Phone", key: "phone" },
];

const STAT_ITEMS = (stats) => [
  {
    value: stats.orders,
    label: "Orders (30d)",
    msg: `${stats.orders} orders in the last 30 days`,
  },
  {
    value: stats.revenue,
    label: "Revenue",
    msg: `Generated ₦${stats.revenue.slice(1)} in revenue`,
  },
  {
    value: stats.rating,
    label: "Rating",
    msg: `Customer rating: ${stats.rating}/5`,
  },
  {
    value: stats.fulfillment,
    label: "Fulfillment",
    msg: `Order fulfillment rate: ${stats.fulfillment}`,
  },
];

const EDIT_FIELDS = [
  { label: "Business Name", path: "businessDetails.name", type: "text" },
  {
    label: "Business Type",
    path: "businessDetails.type",
    type: "select",
    options: [
      "Product Seller",
      "Product Seller + Tutor",
      "Tutor Only",
      "Service CampusPlug",
    ],
  },
  { label: "Contact Email", path: "businessDetails.email", type: "email" },
  { label: "Phone Number", path: "businessDetails.phone", type: "tel" },
  { label: "WhatsApp", path: "businessDetails.whatsapp", type: "tel" },
  { label: "Instagram", path: "businessDetails.instagram", type: "text" },
  {
    label: "Business Description",
    path: "about",
    type: "textarea",
    span: true,
  },
  {
    label: "CAC Registration Number",
    path: "businessDetails.cacNo",
    type: "text",
  },
  { label: "Year Founded", path: "businessDetails.yearFounded", type: "text" },
];

const card =
  "bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm";
const inputCls =
  "w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm";
const statBox =
  "text-center p-2 sm:p-3 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer";
const ghostBtn =
  "px-3 sm:px-4 py-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white rounded-lg text-xs sm:text-sm font-semibold transition-all w-full sm:w-auto min-h-10";

const getNestedValue = (obj, path) =>
  path.split(".").reduce((o, k) => o?.[k], obj);

export default function CampusPlugProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [campusPlugData, setCampusPlugData] = useState(INITIAL_DATA);
  const [formData, setFormData] = useState({ ...INITIAL_DATA });

  const handleInputChange = (e, path) => {
    const keys = path.split(".");
    const updated = { ...formData };
    let obj = updated;
    for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
    obj[keys[keys.length - 1]] = e.target.value;
    setFormData(updated);
  };

  const saveChanges = () => {
    setCampusPlugData({ ...formData });
    setActiveTab("overview");
  };

  const cancelChanges = () => setFormData({ ...campusPlugData });

  const renderStars = (n) => (
    <span className="inline-flex gap-1 text-yellow-500">
      {Array.from({ length: n }).map((_, i) => (
        <AppIcon key={i} name="star" className="w-3.5 h-3.5 fill-current" />
      ))}
    </span>
  );

  return (
    <main className="lg:ml-60 bg-gray-100 min-h-screen px-4 sm:px-6 py-5 sm:py-7 lg:px-8 md:mb-0 mb-20">
      <div className="bg-gradient-to-r from-navy to-blue-900 rounded-lg sm:rounded-2xl p-4 sm:p-7 mb-4 sm:mb-6 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-400 opacity-10" />
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-wrap">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-blue-300 text-blue-500 border-4 border-blue-400 flex items-center justify-center text-3xl font-bold">
              {campusPlugData.avatar}
            </div>
            <button
              onClick={() => alert("Avatar upload feature coming soon")}
              className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs cursor-pointer border-2 border-navy hover:bg-blue-600 transition-all"
            >
              <AppIcon name="camera" className="w-3 h-3 text-white" />
            </button>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              {campusPlugData.name}
            </h1>
            <p className="text-xs sm:text-sm text-white/60 mb-2 sm:mb-3 line-clamp-2">
              {campusPlugData.subtitle}
            </p>
            <div className="flex flex-wrap gap-2 w-full">
              {HERO_BADGES(campusPlugData.stats.rating).map((b, i) => (
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
              className="px-3 sm:px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs sm:text-sm font-semibold transition-all w-full sm:w-auto min-h-10 inline-flex items-center justify-center gap-2"
            >
              <AppIcon name="edit" className="w-4 h-4" />
              Edit Profile
            </button>
            <button
              onClick={() =>
                alert(
                  "Store link copied\n\nhttps://campuslink.app/store/techlink-stores",
                )
              }
              className={`${ghostBtn} inline-flex items-center justify-center gap-2`}
            >
              <AppIcon name="share" className="w-4 h-4" />
              Share Store
            </button>
            <button
              onClick={() => alert("Opening public store preview")}
              className={`${ghostBtn} inline-flex items-center justify-center gap-2`}
            >
              <AppIcon name="preview" className="w-4 h-4" />
              Preview Public Page
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-0 border-b-2 border-gray-300 mb-4 sm:mb-6 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap border-b-2 transition-all ${activeTab === tab.key ? "text-blue-600 border-blue-600 font-semibold" : "text-gray-500 border-transparent hover:text-navy"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="md:col-span-2 lg:col-span-3 space-y-4 sm:space-y-6">
            <div className={card}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-navy">
                  About TechLink Stores
                </h3>
                <button
                  onClick={() => setActiveTab("edit")}
                  className="text-xs font-medium text-blue-600 cursor-pointer hover:underline"
                >
                  Edit
                </button>
              </div>
              <p className="text-sm text-navy leading-relaxed mb-4">
                {campusPlugData.about}
              </p>
              <div className="flex flex-wrap gap-3">
                {campusPlugData.services.map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className={card}>
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h3 className="text-sm font-bold text-navy">
                  Business Details
                </h3>
                <button
                  onClick={() => setActiveTab("edit")}
                  className="text-xs font-medium text-blue-600 cursor-pointer hover:underline"
                >
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {DETAIL_FIELDS.map((f, i) => (
                  <div key={i}>
                    <div className="text-xs font-semibold text-gray-500 mb-1 uppercase">
                      {f.label}
                    </div>
                    <div className="text-sm font-semibold text-navy">
                      {campusPlugData.businessDetails[f.key]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className={card}>
              <h3 className="text-xs sm:text-sm font-bold text-navy mb-3 sm:mb-4">
                Performance
              </h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {STAT_ITEMS(campusPlugData.stats).map((s, i) => (
                  <div key={i} onClick={() => alert(s.msg)} className={statBox}>
                    <div className="text-base sm:text-lg font-bold text-navy">
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
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h3 className="text-xs sm:text-sm font-bold text-navy">
                  Campus Coverage
                </h3>
                <button
                  onClick={() => setActiveTab("campuses")}
                  className="text-xs font-medium text-blue-600 hover:underline cursor-pointer"
                >
                  Manage
                </button>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {campusPlugData.campuses.map((c, i) => (
                  <div
                    key={i}
                    className={`flex gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg border-2 transition-all ${c.type === "Primary" ? "border-blue-300 bg-blue-50" : "border-gray-200 hover:border-blue-300"}`}
                  >
                    <AppIcon
                      name={c.icon}
                      className="w-5 h-5 text-blue-600 mt-0.5"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-xs sm:text-sm text-navy">
                        {c.name}
                      </div>
                      <div className="text-xs text-gray-600 mt-0.5">
                        {c.orders}
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold whitespace-nowrap ${c.status === "Active" ? "text-blue-600" : "text-green-600"}`}
                    >
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "edit" && (
        <div className="space-y-4 sm:space-y-6">
          <div className={card}>
            <h3 className="text-sm font-bold text-navy mb-4 sm:mb-6">
              Business Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              {EDIT_FIELDS.map((f, i) => (
                <div key={i} className={f.span ? "sm:col-span-2" : ""}>
                  <label className="block text-xs font-semibold text-gray-600 mb-2">
                    {f.label}
                  </label>
                  {f.type === "select" ? (
                    <select
                      value={getNestedValue(formData, f.path)}
                      onChange={(e) => handleInputChange(e, f.path)}
                      className={inputCls}
                    >
                      {f.options.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  ) : f.type === "textarea" ? (
                    <textarea
                      rows="3"
                      value={getNestedValue(formData, f.path)}
                      onChange={(e) => handleInputChange(e, f.path)}
                      className={`${inputCls} resize-vertical`}
                    />
                  ) : (
                    <input
                      type={f.type}
                      value={getNestedValue(formData, f.path)}
                      onChange={(e) => handleInputChange(e, f.path)}
                      className={inputCls}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={saveChanges}
                className="px-4 sm:px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs sm:text-sm font-semibold transition-all min-h-10 inline-flex items-center gap-2"
              >
                <AppIcon name="check" className="w-4 h-4" />
                Save Changes
              </button>
              <button
                onClick={cancelChanges}
                className="px-4 sm:px-6 py-2 bg-gray-200 hover:bg-gray-300 text-navy rounded-lg text-xs sm:text-sm font-semibold transition-all min-h-10 inline-flex items-center gap-2"
              >
                <AppIcon name="close" className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "campuses" && (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold text-navy">Campus Coverage</h3>
            <button
              onClick={() => alert("Add new campus feature coming soon")}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs font-semibold transition-all inline-flex items-center gap-2"
            >
              <AppIcon name="add" className="w-4 h-4" />
              Add Campus
            </button>
          </div>
          <div className="space-y-4">
            {campusPlugData.campuses.map((c, i) => (
              <div
                key={i}
                className={`p-4 border-2 rounded-lg space-y-3 ${c.type === "Primary" ? "border-blue-300 bg-blue-50" : "border-gray-200"}`}
              >
                <div className="flex items-center gap-3">
                  <AppIcon name={c.icon} className="w-6 h-6 text-blue-600" />
                  <div className="flex-1">
                    <div className="font-semibold text-navy">{c.name}</div>
                    <div className="text-xs text-gray-600 mt-1">
                      {c.type} Campus · Active since{" "}
                      {c.type === "Primary" ? "Jan 2025" : "Mar 2025"}
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded text-xs font-semibold ${c.status === "Active" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"}`}
                  >
                    {c.status}
                  </span>
                </div>
                <div className="flex gap-2 pl-9">
                  <button
                    onClick={() => alert(`Editing zone for ${c.name}`)}
                    className="px-3 py-1 bg-white text-navy border-2 border-gray-300 rounded text-xs font-semibold hover:border-blue-500 transition-all"
                  >
                    Edit Zone
                  </button>
                  <button
                    onClick={() => alert(`Removed ${c.name} from coverage`)}
                    className="px-3 py-1 bg-red-50 text-red-600 border-2 border-red-200 rounded text-xs font-semibold hover:border-red-400 transition-all"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500 cursor-pointer hover:border-blue-400 hover:text-blue-600 transition-all inline-flex items-center justify-center gap-2 w-full">
              <AppIcon name="add" className="w-4 h-4" />
              Add another campus
            </div>
          </div>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="mb-6">
            <h3 className="text-sm font-bold text-navy">Customer Reviews</h3>
            <p className="text-xs text-gray-600 mt-1">
              4.8 / 5 overall · 48 reviews
            </p>
          </div>
          <div className="space-y-4">
            {campusPlugData.reviews.map((r, i) => (
              <div
                key={i}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-all"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm inline-flex items-center justify-center">
                    {r.avatar}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-navy">
                      {r.name}
                    </div>
                    <div className="mt-1">{renderStars(r.rating)}</div>
                  </div>
                  <div className="text-xs text-gray-600 text-right flex-shrink-0">
                    {r.date}
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mt-2">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
