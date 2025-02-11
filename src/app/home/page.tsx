export default function Home() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ textAlign: 'center' }}>
                <p>Harbour AI Agent</p>
                <a href="/chat">click here to try the agent use /chat</a>
            </div>
        </div>
    );
}