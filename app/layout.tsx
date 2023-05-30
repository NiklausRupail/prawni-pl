import Contact from 'components/Contact/Contact';
import '/styles/globals.scss';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';

export const metadata = {
  title: 'Prawni.pl',
  description: 'Generated by Niklaus Rupaił'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body>
        <Contact />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
