import './globals.css'

export const metadata = {
  title: 'SHAUN | Build Together. Grow Together.',
  description: 'A community-led ecosystem initiative focused on open participation, education and collaboration.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
