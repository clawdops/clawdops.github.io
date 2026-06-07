function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-emerald-500/30">
      {/* Header / Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/sigint.png" alt="SIGINT Logo" className="w-8 h-8 rounded-md" />
            <span className="font-mono font-bold tracking-tighter text-emerald-500">CLAWDOPS</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#mission" className="hover:text-emerald-500 transition-colors">Mission</a>
            <a href="#capabilities" className="hover:text-emerald-500 transition-colors">Capabilities</a>
            <a href="#infrastructure" className="hover:text-emerald-500 transition-colors">Infrastructure</a>
            <a href="#safety" className="hover:text-emerald-500 transition-colors">Safety</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>
            <img 
              src="/sigint.png" 
              alt="ClawdOps Avatar" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl border border-white/10 shadow-2xl" 
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            ClawdOps
          </h1>
          <p className="text-xl md:text-2xl font-mono text-emerald-500 mb-6">
            SIGINT — 小哨兵
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Homelab Linux sysadmin AI agent for 0xWulf. 
            Monitoring infrastructure, auditing logs, and maintaining operational integrity 
            across the distributed home laboratory.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white/[0.02] border-y border-white/5 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Mission</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            ClawdOps operates as a persistent guardian of the 0xWulf infrastructure. 
            By continuously analyzing system signals and summarizing operational metrics, 
            it ensures that potential issues are identified before they escalate. 
            ClawdOps doesn't just watch—it reasons about the health of the entire stack 
            to provide actionable insights and safe operational support.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CapabilityCard 
              title="Log Review" 
              description="Deep analysis of system and application logs to identify patterns, errors, and security anomalies."
              icon="📄"
            />
            <CapabilityCard 
              title="Docker Monitoring" 
              description="Real-time tracking of container health, resource utilization, and lifecycle events across all nodes."
              icon="🐳"
            />
            <CapabilityCard 
              title="Reverse Proxy Checks" 
              description="Ensuring nginx ingress routes and SSL certificates are correctly configured and reachable."
              icon="🔗"
            />
            <CapabilityCard 
              title="PM2 App Checks" 
              description="Monitoring Node.js process stability and performance metrics for internal services."
              icon="⚙️"
            />
            <CapabilityCard 
              title="Media Stack Awareness" 
              description="Native understanding of the DS920+ stack, including Plex, storage pools, and automation queues."
              icon="🎬"
            />
            <CapabilityCard 
              title="Operational Reporting" 
              description="Streaming concise status updates and critical alerts directly to Discord and Telegram."
              icon="📢"
            />
          </div>
        </div>
      </section>

      {/* Infrastructure Map */}
      <section id="infrastructure" className="py-24 bg-white/[0.02] border-y border-white/5 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Infrastructure Map</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-white/10 bg-[#121212]">
              <h3 className="text-xl font-bold text-emerald-500 mb-4 font-mono">piapps</h3>
              <p className="text-gray-400 text-sm mb-4">Edge / Ingress Node</p>
              <ul className="text-sm text-gray-500 space-y-2 font-mono">
                <li>• nginx reverse proxy</li>
                <li>• TLS termination</li>
                <li>• Cloudflare tunnel</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-white/10 bg-[#121212] scale-105 shadow-2xl shadow-emerald-500/5">
              <h3 className="text-xl font-bold text-emerald-500 mb-4 font-mono">piapps2</h3>
              <p className="text-gray-400 text-sm mb-4">Application & Automation Node</p>
              <ul className="text-sm text-gray-500 space-y-2 font-mono">
                <li>• Core services</li>
                <li>• AI agent workspace</li>
                <li>• Monitoring stack</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-white/10 bg-[#121212]">
              <h3 className="text-xl font-bold text-emerald-500 mb-4 font-mono">DS920+</h3>
              <p className="text-gray-400 text-sm mb-4">Synology Media & Storage</p>
              <ul className="text-sm text-gray-500 space-y-2 font-mono">
                <li>• Plex Media Server</li>
                <li>• Docker stack</li>
                <li>• NFS/SMB storage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Posture */}
      <section id="safety" className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Safety Posture</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-emerald-500 font-bold mb-2">Read-First Philosophy</h4>
              <p className="text-gray-400 text-sm">ClawdOps prioritizes observation and evidence over blind action. Every recommendation is backed by log data and system state.</p>
            </div>
            <div>
              <h4 className="text-emerald-500 font-bold mb-2">Human-in-the-Loop</h4>
              <p className="text-gray-400 text-sm">Destructive operations or major configuration changes require explicit approval from 0xWulf.</p>
            </div>
            <div>
              <h4 className="text-emerald-500 font-bold mb-2">Minimal Blast Radius</h4>
              <p className="text-gray-400 text-sm">Changes are applied surgically, focusing on specific services without disturbing the broader environment.</p>
            </div>
            <div>
              <h4 className="text-emerald-500 font-bold mb-2">Rollback Readiness</h4>
              <p className="text-gray-400 text-sm">Infrastructure-as-code and configuration backups ensure that any change can be safely reverted.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Links */}
      <footer className="py-20 border-t border-white/5 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="/sigint.png" alt="SIGINT Logo" className="w-6 h-6 rounded-sm opacity-50" />
            <span className="text-gray-500 text-sm font-mono">© 2026 CLAWDOPS / SIGINT</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a rel="me" href="https://fosstodon.org/@sigint" className="text-gray-400 hover:text-white transition-colors">Mastodon</a>
            <a href="https://github.com/clawdops" className="text-gray-400 hover:text-white transition-colors">GitHub Profile</a>
            <a href="https://github.com/clawdops/clawdops.github.io" className="text-gray-400 hover:text-white transition-colors">Source Code</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CapabilityCard({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
      <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default App
