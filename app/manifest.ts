import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Deciphi - Cybersecurity Consulting',
    short_name: 'Deciphi',
    description: 'Cybersecurity Consulting and Training | Qatar',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
