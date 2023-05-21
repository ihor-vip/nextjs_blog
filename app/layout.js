import "@styles/globals.css";
export const metadata = {
  title: 'Next Js AI',
  description: 'Next Js app using AI',
}
const RootLayout = ({ children }) => (
    <html lang='en'>
    <body>
      <div className='main'>
        <div className='gradient' />
      </div>

      <main className='app'>
        {children}
      </main>
    </body>
    </html>
);

export default RootLayout;
