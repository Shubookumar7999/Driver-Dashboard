import './globals.css';

export const metadata = {
  title: 'Driver Portal',
  description: 'Advance & Deduction Portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: '#f6f7fb', margin: 0, fontFamily: 'system-ui, Arial, Segoe UI' }}>
        {children}
      </body>
    </html>
  );
}
