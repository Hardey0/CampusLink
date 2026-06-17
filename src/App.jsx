import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext/ThemeProvider";
import { useState } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import Marketplace from "./pages/AppPages/MarketPlace/Marketplace";
import AcademicHubPage from "./pages/AppPages/AcademicHubPage";
import CommunityPage from "./pages/AppPages/CommunityPage";
import MessagesPage from "./pages/AppPages/MessagesPage";
import OrdersPage from "./pages/AppPages/OrdersPage";
import WalletPage from "./pages/AppPages/WalletPage";
import ProfilePage from "./pages/AppPages/ProfilePage";
import SettingsPage from "./pages/AppPages/SettingsPage";
import DashboardPage from "./pages/AppPages/DashboardPage";


import PlugDashboard from "./pages/CampusPLugPages/PlugDashboard";
import PlugTutoring from "./pages/CampusPLugPages/PlugTutoring";
import PlugListings from "./pages/CampusPLugPages/PlugListing/PlugListings";
import PlugServices from "./pages/CampusPLugPages/PlugServices";
import PlugSkillCourses from "./pages/CampusPLugPages/PlugSkillCourses";
import PlugMessage from "./pages/CampusPLugPages/PlugMessage";
import PlugOrders from "./pages/CampusPLugPages/PlugOrders/PlugOrders";
import PlugWallet from "./pages/CampusPLugPages/PlugWallet";
import PlugAnalytics from "./pages/CampusPLugPages/PlugAnalytics";
import PlugProfilePage from "./pages/CampusPLugPages/PlugProfilePage";
import PlugSettings from "./pages/CampusPLugPages/PlugSetting";


import AppLayout from "./layouts/appLayout/AppLayout";
import PlugLayout from "./layouts/PlugLayout/PlugLayout";
import "./index.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const updateQty = (id, delta) =>
    setCartItems((prev) =>
      prev.map((i) => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
    );

  const removeItem = (id) =>
    setCartItems((prev) => prev.filter((i) => i.id !== id));

  // ── Derived values ───────────────────────────────────────────────────────────
  const subtotal = cartItems.reduce((a, b) => a + b.price * b.qty, 0);
  const serviceFee = Math.round(subtotal * 0.01);
  const total = subtotal + serviceFee;

  const cartQty = cartItems.reduce((a, b) => a + b.qty, 0);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes (no layout) */}
          <Route path="/" element={<LandingPage />} />

          {/* App layout wrapper structure */}
          <Route path="/app" element={
            <AppLayout
              onOpenCart={() => setCartOpen(true)}
              cartQty={cartQty}
              cartOpen={cartOpen}
              onclose={() => setCartOpen(false)}
              cartItems={cartItems}
              updateQty={updateQty}
              removeItem={removeItem}
              subtotal={subtotal}
              serviceFee={serviceFee}
              total={total}
            />
          }>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />

            <Route path="marketplace" element={
              <Marketplace
                setCartOpen={setCartOpen}
                cartQty={cartQty}
                cartItems={cartItems}
                setCartItems={setCartItems}
                cartOpen={cartOpen}
              />
            } />

            <Route path="academic-hub" element={<AcademicHubPage />} />
            <Route path="community" element={<CommunityPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="wallet" element={<WalletPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>



          {/* CampusPlug layout structure */}
          <Route path="/plug" element={
            <PlugLayout
              onOpenCart={() => setCartOpen(true)}
              cartQty={cartQty}
              cartOpen={cartOpen}
              onclose={() => setCartOpen(false)}
              cartItems={cartItems}
              updateQty={updateQty}
              removeItem={removeItem}
              subtotal={subtotal}
              serviceFee={serviceFee}
              total={total}
            />
          }>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<PlugDashboard />} />
            <Route path="listing" element={<PlugListings />} />
            <Route path="services" element={<PlugServices />} />
            <Route path="tutoring" element={<PlugTutoring />} />
            <Route path="skill-courses" element={<PlugSkillCourses />} />
            <Route path="messages" element={<PlugMessage />} />
            <Route path="orders" element={<PlugOrders />} />
            <Route path="analytics" element={<PlugAnalytics />} />
            <Route path="wallet" element={<PlugWallet />} />
            <Route
              path="profile"
              element={<PlugProfilePage />}
            />
            <Route path="settings" element={<PlugSettings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
