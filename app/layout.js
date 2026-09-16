import './globals.css'

export const metadata = {
  title: 'SHAUN | Walk with SHUAN, enjoy an extraordinary life.',
  description: 'SHUAN Foundation incubates its first ecosystem application.',
  icons: {
    icon: '/assets/shaun-logo.jpg',
    apple: '/assets/shaun-logo.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
