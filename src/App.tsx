import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SplashScreen from "./pages/SplashScreen";
import OnboardingScreen from "./pages/OnboardingScreen";
import AuthScreen from "./pages/AuthScreen";
import UserTypeScreen from "./pages/UserTypeScreen";
import ProfileSetupScreen from "./pages/ProfileSetupScreen";
import HomeScreen from "./pages/HomeScreen";
import ChatScreen from "./pages/ChatScreen";
import EventsScreen from "./pages/EventsScreen";
import ProfileScreen from "./pages/ProfileScreen";
import DiscoverScreen from "./pages/DiscoverScreen";
import LanguageScreen from "./pages/LanguageScreen";
import MatchFilterScreen from "./pages/MatchFilterScreen";
import VideoProfileScreen from "./pages/VideoProfileScreen";
import CoachingScreen from "./pages/CoachingScreen";
import MentalHealthScreen from "./pages/MentalHealthScreen";
import EducationScreen from "./pages/EducationScreen";
import SafetyScreen from "./pages/SafetyScreen";
import SubscriptionScreen from "./pages/SubscriptionScreen";
import LikesScreen from "./pages/LikesScreen";
import MyProfileScreen from "./pages/MyProfileScreen";
import SettingsScreen from "./pages/SettingsScreen";
import AccountSettingsScreen from "./pages/settings/AccountSettingsScreen";
import NotificationSettingsScreen from "./pages/settings/NotificationSettingsScreen";
import PrivacySettingsScreen from "./pages/settings/PrivacySettingsScreen";
import AppearanceSettingsScreen from "./pages/settings/AppearanceSettingsScreen";
import HelpSupportScreen from "./pages/settings/HelpSupportScreen";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/onboarding" element={<OnboardingScreen />} />
          <Route path="/auth" element={<AuthScreen />} />
          <Route path="/user-type" element={<UserTypeScreen />} />
          <Route path="/profile-setup" element={<ProfileSetupScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/discover" element={<DiscoverScreen />} />
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/events" element={<EventsScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/language" element={<LanguageScreen />} />
          <Route path="/filters" element={<MatchFilterScreen />} />
          <Route path="/video-profile" element={<VideoProfileScreen />} />
          <Route path="/coaching" element={<CoachingScreen />} />
          <Route path="/mental-health" element={<MentalHealthScreen />} />
          <Route path="/education" element={<EducationScreen />} />
          <Route path="/safety" element={<SafetyScreen />} />
          <Route path="/subscription" element={<SubscriptionScreen />} />
          <Route path="/likes" element={<LikesScreen />} />
          <Route path="/my-profile" element={<MyProfileScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/settings/account" element={<AccountSettingsScreen />} />
          <Route path="/settings/notifications" element={<NotificationSettingsScreen />} />
          <Route path="/settings/privacy" element={<PrivacySettingsScreen />} />
          <Route path="/settings/appearance" element={<AppearanceSettingsScreen />} />
          <Route path="/settings/help" element={<HelpSupportScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
