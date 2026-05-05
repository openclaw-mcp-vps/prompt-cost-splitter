export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          AI Cost Management
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Split AI prompt costs<br />
          <span className="text-[#58a6ff]">across your team</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Track every team member's AI API usage, calculate proportional cost splits, and generate monthly billing reports — automatically.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start for $15/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Learn more
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span>✓ OpenAI</span>
          <span>✓ Anthropic</span>
          <span>✓ Google AI</span>
          <span>✓ Per-member tracking</span>
          <span>✓ Monthly reports</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-wide mb-2">Team Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$15</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Up to 20 team members</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'API key proxying for all major providers',
              'Per-member usage dashboard',
              'Proportional cost splitting',
              'Monthly PDF billing reports',
              'Slack & email notifications',
              'CSV export for accounting',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No setup fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does usage tracking work?</h3>
            <p className="text-[#8b949e] text-sm">You route your team's AI API calls through our proxy endpoint. We log token counts and costs per member without storing your prompts or responses — only metadata.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which AI providers are supported?</h3>
            <p className="text-[#8b949e] text-sm">OpenAI (GPT-4, GPT-3.5), Anthropic (Claude), and Google AI (Gemini) are fully supported. More providers are added based on demand.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I export data for our accounting team?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Every monthly report is available as a PDF and CSV export, broken down by team member, provider, and date range — ready for expense reporting.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Prompt Cost Splitter. All rights reserved.
      </footer>
    </main>
  )
}
