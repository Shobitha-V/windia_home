import './globals.css'
import Clientshell from './Clientshell'
 
export const metadata = {
  title: 'WIN-DIA — The Divine Healthy Crunch',
  description: 'Ancient wisdom meets modern wellness. Crafted with love, backed by science.',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Clientshell>{children}</Clientshell>
      </body>
    </html>
  )
}
 












