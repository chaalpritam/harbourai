"use client"

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'linear-gradient(215.63deg, #F5641C 2.71%, #DC451F 37.53%, #EC5429 72.34%)' }}>

      <div style={{ width: '1220px', height: '52px', margin: '60px auto 100px auto', display: 'grid', gridTemplateColumns: '1fr 3fr 1fr' }}>
        <button style={{ padding: '14px 0', width: '160px', background: '#5F100D', color: '#FFF' }}>
          harbour ai
        </button>
        <ul style={{ display: 'flex', gap: '10px', color: '#fff ', justifySelf: 'center' }}>
          <li style={{ padding: '14px 0', margin: '0 30px', float: 'left' }}>Building</li>
          <li style={{ padding: '14px 0', margin: '0 30px', float: 'left' }}>Communities</li>
          <li style={{ padding: '14px 0', margin: '0 30px', float: 'left' }}>Together</li>
        </ul>
        <button onClick={() => router.push('/chat')} style={{ padding: '14px 0', margin: '0 30px', background: '#FF8A1E', color: '#FFF' }}>
          Goto Agent
        </button>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '70px', lineHeight: '80px', fontWeight: 'bold', color: '#fff' }}>every communities foundation <br /> should be a DAO which are <br /> truly decentralized</h3>
        <p style={{ fontSize: '18px', lineHeight: '26px', fontWeight: 'normal', padding: '30px 0 60px 0', color: '#fff', opacity: 0.75 }}>A better way to manage your community needs, all with a DAO <br /> — on a single platform. Powerful, affordable & easy.</p>
        <button style={{ padding: '14px 20px', background: '#FFF', color: '#151515', fontWeight: 'bold', fontSize: '14px' }}>
          EXPLORE ABOUT DAO
        </button>
      </div>
    </div>
  );
}