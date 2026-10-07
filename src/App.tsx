import React from 'react';
import { ClinicProvider } from './context/ClinicContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickReservationSection } from './components/QuickReservationSection';
import { WhyUs } from './components/WhyUs';
import { ServicesSection } from './components/ServicesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { PatientJourney } from './components/PatientJourney';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SymptomChecker } from './components/SymptomChecker';
import { BookingSection } from './components/BookingSection';
import { BranchesSection } from './components/BranchesSection';
import { FaqSection } from './components/FaqSection';
import { TechnologySection } from './components/TechnologySection';
import { TrustStrip } from './components/TrustStrip';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { SaaSConfigDrawer } from './components/SaaSConfigDrawer';
import { ReceptionDashboardModal } from './components/ReceptionDashboardModal';
import { Toast } from './components/Toast';

export default function App() {
  return (
    <ClinicProvider>
      <div className="min-h-screen bg-[#FAF9F5] text-[#1E293B] antialiased selection:bg-[#1F8A9B]/20 selection:text-[#167280]">
        {/* Floating Glass Navigation */}
        <Navbar />

        <main>
          {/* 1. Hero Signature Section (Saudi Man & Woman, Zero Nav Buttons) */}
          <Hero />

          {/* 2. Quick Reservation Bar Placed on the Next Section */}
          <QuickReservationSection />

          {/* 3. Why Us Interactive Storytelling Stack */}
          <WhyUs />

          {/* 4. Specialized Services Grid & Detail Modals */}
          <ServicesSection />

          {/* 5. The Innovative Doctors Stage with 3D Depth & Morphing Blob */}
          <DoctorsSection />

          {/* 6. Interactive Split-Image Drag Slider Before & After */}
          <BeforeAfterSection />

          {/* 7. Patient Journey 4-Step Animated Timeline */}
          <PatientJourney />

          {/* 8. Verified Patient Testimonials */}
          <TestimonialsSection />

          {/* 9. Interactive Symptom Checker */}
          <SymptomChecker />

          {/* 10. Multi-Step Booking Core & WhatsApp Sync */}
          <BookingSection />

          {/* 11. Saudi Branches & Interactive Navigation Map */}
          <BranchesSection />

          {/* 12. Accordion Medical FAQs */}
          <FaqSection />

          {/* 13. Cinematic Architectural Gallery of the Clinic */}
          <TechnologySection />

          {/* 14. Trust Strip with Animated Numbers & Insurance Logos (Moved to End of Web Page) */}
          <TrustStrip />

          {/* 15. Final Calm Conversion Banner */}
          <FinalCta />
        </main>

        {/* 16. Comprehensive Footer */}
        <Footer />

        {/* Floating Mobile Bottom Action Bar (15% height limit compliant) */}
        <MobileBottomBar />

        {/* SaaS Preset Configurator Drawer */}
        <SaaSConfigDrawer />

        {/* SaaS Reception Leads Tracking Dashboard */}
        <ReceptionDashboardModal />

        {/* Notification Toast */}
        <Toast />
      </div>
    </ClinicProvider>
  );
}
