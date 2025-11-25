import { useState } from 'react';
import { Landing } from './components/pages/Landing';
import { SignUp } from './components/pages/SignUp';
import { BrandProfile } from './components/pages/BrandProfile';
import { VenueProfile } from './components/pages/VenueProfile';
import { Browse } from './components/pages/Browse';
import { MatchingProposal } from './components/pages/MatchingProposal';
import { Chat } from './components/pages/Chat';
import { QRPreview } from './components/pages/QRPreview';
import { AdminLayout } from './components/admin/AdminLayout';

export type UserRole = 'brand' | 'venue' | null;
export type Page = 'landing' | 'signup' | 'profile' | 'browse' | 'matching' | 'chat' | 'qr-preview' | 'admin';
export type AdminPage = 'dashboard' | 'members' | 'deals' | 'payments' | 'reports' | 'support';

export interface BrandProfileData {
  name: string;
  category: string;
  link: string;
  image: string;
  collaborationType: string[];
  priceRange: string;
  purpose?: string;
  atmosphere?: string[];
}

export interface VenueProfileData {
  name: string;
  location: string;
  images: string[];
  collaborationType: string[];
  revenueShare: string;
  atmosphere?: string[];
  duration?: string;
}

export interface MatchingData {
  brand: any;
  venue: any;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [userProfile, setUserProfile] = useState<BrandProfileData | VenueProfileData | null>(null);
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [matchingData, setMatchingData] = useState<MatchingData | null>(null);

  const handleRoleSelect = (role: UserRole) => {
    setUserRole(role);
    setCurrentPage('signup');
  };

  const handleSignUpComplete = () => {
    setCurrentPage('profile');
  };

  const handleProfileComplete = (profile: BrandProfileData | VenueProfileData) => {
    setUserProfile(profile);
    setCurrentPage('browse');
  };

  const handleCardSelect = (card: any) => {
    setSelectedCard(card);
    setCurrentPage('matching');
  };

  const handleProposalSend = (data: MatchingData) => {
    setMatchingData(data);
    // In real app, this would send proposal and wait for acceptance
    // For MVP, we'll simulate acceptance
    setTimeout(() => {
      setCurrentPage('chat');
    }, 1000);
  };

  const handleOpenQRPreview = () => {
    setCurrentPage('qr-preview');
  };

  const handleBackToBrowse = () => {
    setCurrentPage('browse');
  };

  const handleBackToChat = () => {
    setCurrentPage('chat');
  };

  // Add admin access
  const handleAdminAccess = () => {
    setCurrentPage('admin');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {currentPage === 'landing' && (
        <Landing onRoleSelect={handleRoleSelect} onAdminAccess={handleAdminAccess} />
      )}
      
      {currentPage === 'signup' && userRole && (
        <SignUp role={userRole} onComplete={handleSignUpComplete} />
      )}
      
      {currentPage === 'profile' && userRole === 'brand' && (
        <BrandProfile onComplete={handleProfileComplete} />
      )}
      
      {currentPage === 'profile' && userRole === 'venue' && (
        <VenueProfile onComplete={handleProfileComplete} />
      )}
      
      {currentPage === 'browse' && userProfile && (
        <Browse 
          userRole={userRole!} 
          userProfile={userProfile}
          onCardSelect={handleCardSelect}
        />
      )}
      
      {currentPage === 'matching' && selectedCard && userProfile && (
        <MatchingProposal
          userRole={userRole!}
          userProfile={userProfile}
          selectedCard={selectedCard}
          onSendProposal={handleProposalSend}
          onBack={handleBackToBrowse}
        />
      )}
      
      {currentPage === 'chat' && matchingData && (
        <Chat
          matchingData={matchingData}
          userRole={userRole!}
          onOpenQRPreview={handleOpenQRPreview}
          onBack={handleBackToBrowse}
        />
      )}
      
      {currentPage === 'qr-preview' && (
        <QRPreview onBack={handleBackToChat} />
      )}
      
      {currentPage === 'admin' && (
        <AdminLayout />
      )}
    </div>
  );
}