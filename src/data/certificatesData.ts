// Certificates data for the portfolio website
export interface Certificate {
  title: {
    en: string;
    bn: string;
  };
  image: string;
}

export const certificatesData = {
  title: {
    en: 'Certifications',
    bn: 'সার্টিফিকেশন',
  },
  certificates: [
    // Add your certificates here - this is just an example structure
    // The actual certificates are loaded from the main content file
  ] as Certificate[],
  verification: {
    en: 'Verify Certificate',
    bn: 'সার্টিফিকেট যাচাই করুন',
  },
  loading: {
    en: 'Loading certificates...',
    bn: 'সার্টিফিকেট লোড হচ্ছে...',
  },
  error: {
    en: 'Certificate image unavailable offline',
    bn: 'সার্টিফিকেট ছবি অফলাইন উপলব্ধ নয়',
  },
};