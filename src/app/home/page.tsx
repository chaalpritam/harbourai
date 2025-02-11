export default function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'linear-gradient(215.63deg, #F5641C 2.71%, #DC451F 37.53%, #EC5429 72.34%)' }}>

            <div style={{ width: '1220px', height: '52px', margin: '0 auto', paddingTop: '60px', paddingBottom: '120px', display: 'grid', gridTemplateColumns: '1fr 3fr 1fr' }}>
                <div>
                    left
                </div>
                <ul style={{ display: 'flex', gap: '30px', color: '#fff ', justifySelf: 'center' }}>
                    <li style={{ padding: '30px 0', margin: '0 14px', float: 'left' }}>Building</li>
                    <li style={{ padding: '30px 0', margin: '0 14px', float: 'left' }}>Communities</li>
                    <li style={{ padding: '30px 0', margin: '0 14px', float: 'left' }}>Together</li>
                </ul>
                <div style={{ textAlign: 'right' }}>
                    right
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '70px', lineHeight: '80px', fontWeight: 'bold', color: '#fff' }}>every communities foundation <br /> should be a DAO which are <br /> truly decentralized</h3>
                <p style={{ fontSize: '18px', lineHeight: '26px', fontWeight: 'normal', padding: '30px 0 60px 0', color: '#fff', opacity: 0.75 }}>A better way to manage your sales, team, clients & marketing <br /> — on a single platform. Powerful, affordable & easy.</p>
            </div>
        </div>
    );
}