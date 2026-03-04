import { useState } from 'react';

const WEB3FORMS_KEY = 'b522aa47-79b8-415c-9edb-ab1c3d1baf19';
import { Send, CheckCircle, Microscope, FileText, Globe, Users } from 'lucide-react';

type ConnectionType = 'scientist' | 'journalist' | 'policy' | 'educator' | 'general';

const connectionTypes: { value: ConnectionType; label: string }[] = [
  { value: 'scientist', label: 'Ecology / Conservation scientist — review data or contribute findings' },
  { value: 'journalist', label: 'Journalist — use data in reporting or request source documentation' },
  { value: 'policy', label: 'Policy researcher — contribute governance analysis' },
  { value: 'educator', label: 'Educator — use this resource in teaching' },
  { value: 'general', label: 'General — other collaboration or question' },
];

const whoWeWantToHear = [
  { icon: Microscope, label: 'Scientists', example: 'e.g. "I can verify your extinction rate figures"' },
  { icon: FileText, label: 'Journalists', example: 'e.g. "I\'m writing about AI and biodiversity"' },
  { icon: Globe, label: 'Policy researchers', example: 'e.g. "I study AI governance in agriculture"' },
  { icon: Users, label: 'Educators', example: 'e.g. "I want to use this in my course"' },
];

export function ConnectPage() {
  const [form, setForm] = useState({
    name: '',
    role: '',
    type: '' as ConnectionType | '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `AI Extinction Clock — Connect: ${form.type}`,
        from_name: form.name || 'Anonymous',
        role: form.role || 'Not specified',
        connection_type: form.type,
        message: form.message,
      }),
    });
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F7FFF7] flex items-center justify-center section-padding">
        <div className="card-dark p-10 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-[#8B5CF6] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#111827] mb-2">Message received</h2>
          <p className="text-[#6B7280] mb-6">
            Thank you for reaching out. We review all messages and will follow up
            where we can.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', role: '', type: '', message: '' }); }}
            className="px-6 py-2 text-sm font-medium text-[#111827] bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7FFF7]">
      {/* Header */}
      <div className="section-padding pb-0 max-w-2xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#8B5CF6] bg-[#8B5CF6]/10 rounded-full mb-4">
          Get Involved
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
          Connect
        </h1>
        <p className="text-lg text-[#6B7280]">
          AI Extinction Clock improves through expert input. If you have data to contribute,
          findings to share, or want to collaborate — send a message below.
        </p>
      </div>

      {/* Who we want to hear from */}
      <section className="section-padding pb-0 max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-3 mb-10">
          {whoWeWantToHear.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="card-dark p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-[#8B5CF6]" />
                  <p className="text-sm font-bold text-[#111827]">{item.label}</p>
                </div>
                <p className="text-xs text-[#6B7280]">{item.example}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form */}
      <section className="section-padding pt-0 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-[#111827] mb-2">Name (optional)</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[#111827] placeholder:text-[#6B7280]/50 focus:outline-none focus:border-[#8B5CF6]/50 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#111827] mb-2">Role / field (optional)</label>
              <input
                type="text"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                placeholder="e.g. Conservation biologist"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[#111827] placeholder:text-[#6B7280]/50 focus:outline-none focus:border-[#8B5CF6]/50 transition-colors text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111827] mb-2">
              How do you want to connect? <span className="text-[#8B5CF6]">*</span>
            </label>
            <select
              required
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value as ConnectionType })}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[#111827] focus:outline-none focus:border-[#8B5CF6]/50 transition-colors text-sm appearance-none"
            >
              <option value="" disabled className="bg-[#F7FFF7]">Select a type...</option>
              {connectionTypes.map((t) => (
                <option key={t.value} value={t.value} className="bg-[#F7FFF7]">
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111827] mb-2">
              Your message <span className="text-[#8B5CF6]">*</span>
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us what you'd like to contribute or discuss..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-[#111827] placeholder:text-[#6B7280]/50 focus:outline-none focus:border-[#8B5CF6]/50 transition-colors text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3 bg-[#8B5CF6] text-white font-medium rounded-lg hover:bg-[#8B5CF6]/90 transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            {loading ? 'Sending...' : 'Send message'}
          </button>
        </form>

        <p className="mt-6 text-xs text-[#6B7280]/60">
          All messages are reviewed manually. This site is a living resource — expert input
          directly shapes what gets added or corrected.
        </p>
      </section>
    </div>
  );
}
