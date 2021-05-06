import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '1',
          name: 'Fortaleza',
          slug: 'fortaleza',
          location: {
            latitude: 9,
            longitude: -4
          }
        }
      ]}
    />
  )
}
