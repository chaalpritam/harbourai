"use client"

import { useRouter } from 'next/navigation';
import { SetStateAction, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState({
    heading: 'Build Your Social DAO in Minutes, Not Months',
    paragraph: 'Turn your community into a self-governed DAO with AI-curated templates, automated smart contracts, and onchain execution. No code, no chaos—just decentralized collaboration.',
    buttonText: 'Start Your DAO Journey →'
  });

  const handleMouseEnter = (newText: SetStateAction<{ heading: string; paragraph: string; buttonText: string; }>) => {
    setText(newText);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'linear-gradient(215.63deg, #F5641C 2.71%, #DC451F 37.53%, #EC5429 72.34%)' }}>

      <div style={{ width: '1220px', height: '52px', margin: '60px auto 100px auto', display: 'grid', gridTemplateColumns: '1fr 3fr 1fr' }}>
        <button style={{ padding: '14px 0', width: '160px', background: '#5F100D', color: '#FFF' }}>
          harbour ai
        </button>
        <ul style={{ display: 'flex', gap: '20px', color: '#fff ', justifySelf: 'center' }}>
          <li onMouseEnter={() => handleMouseEnter({
            heading: 'Build Your Social DAO in Minutes, Not Months',
            paragraph: 'Turn your community into a self-governed DAO with AI-curated templates, automated smart contracts, and onchain execution. No code, no chaos—just decentralized collaboration.',
            buttonText: 'Start Your DAO Journey →'
          })} style={{ padding: '14px 30px 13px 30px', margin: 0, float: 'left' }}>Building</li>
          <li onMouseEnter={() => handleMouseEnter({
            heading: 'From Group Chats to Onchain Governance',
            paragraph: 'Empower your members to propose, vote, and govern together. Integrate Discord, Telegram, or Twitter and evolve your community into a transparent, decision-making force.',
            buttonText: 'Join the Movement →'
          })} style={{ padding: '14px 30px 13px 30px', margin: 0, float: 'left' }}>Communities</li>
          <li onMouseEnter={() => handleMouseEnter({
            heading: 'Governance by the People, Powered by AI',
            paragraph: 'Align your community’s vision with AI-driven insights, real-time analytics, and trustless execution. Build, vote, and grow—together, onchain.',
            buttonText: 'Collaborate Onchain →'
          })} style={{ padding: '14px 30px 13px 30px', margin: 0, float: 'left' }}>Together</li>
        </ul>
        <button onClick={() => router.push('/chat')} style={{ padding: '14px 0', margin: '0 30px', background: '#FF8A1E', color: '#FFF' }}>
          Goto Agent
        </button>
      </div>

      <div style={{ textAlign: 'center' }}>
        <h3 style={{ width: '950px', margin: '0 auto', textAlign: 'center', fontSize: '70px', lineHeight: '80px', fontWeight: 'bold', color: '#fff', transition: 'transform 0.5s', transform: 'translateX(0)' }}>{text.heading}</h3>
        <p style={{ width: '900px', margin: '0 auto', textAlign: 'center', fontSize: '18px', lineHeight: '26px', fontWeight: 'normal', padding: '30px 0 60px 0', color: '#fff', opacity: 0.75, transition: 'transform 0.5s', transform: 'translateX(0)' }}>{text.paragraph}</p>
        <button style={{ padding: '14px 20px', background: '#FFF', color: '#151515', fontWeight: 'bold', fontSize: '14px', transition: 'transform 0.5s', transform: 'translateX(0)' }}>{text.buttonText}</button>
      </div>
    </div>
  );
}