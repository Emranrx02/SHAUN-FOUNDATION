import './globals.css'

export const metadata = {
  title: 'SHAUN | Walk with SHAUN, enjoy an extraordinary life.',
  description: 'SHAUN Foundation incubates its first ecosystem application.',
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
