import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const WEB3FORMS_KEY = 'b522aa47-79b8-415c-9edb-ab1c3d1baf19';

type SuggestionType = 'data-correction' | 'new-species' | 'new-research' | 'ui-bug' | 'other';

const suggestionTypes: { value: SuggestionType; label: string }[] = [
  { value: 'data-correction', label: 'Data correction — a statistic is wrong or outdated' },
  { value: 'new-species', label: 'New species — add a case study not yet covered' },
  { value: 'new-research', label: 'New research — a recent paper we should include' },
  { value: 'ui-bug', label: 'UI bug — something is broken or displays incorrectly' },
  { value: 'other', label: 'Other' },
];

export function SuggestPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '' as SuggestionType | '',
    message: '',
    source: '',
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
        subject: `Extinction Clock — Suggest: ${form.type}`,
        from_name: form.name || 'Anonymous',
        ...(form.email && { email: form.email }),
        suggestion_type: form.type,
        source: form.source || 'Not provided',
        message: form.message,
      }),
    });
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#1B2838] flex items-center justify-center section-padding">
        <div className="card-dark p-10 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-[#10B981] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#F9FAFB] mb-2">Thank you</h2>
          <p className="text-[#9CA3AF] mb-6">
            Your suggestion has been received. We review all submissions and update the site
            when corrections or new data are verified.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', type: '', message: '', source: '' }); }}
            className="px-6 py-2 text-sm font-medium text-[#F9FAFB] bg-white/10 rounded-lg hover:bg-white/15 transition-colors"
          >
            Submit another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1B2838]">
      {/* Header */}
      <div className="section-padding pb-0 max-w-2xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#9CA3AF] bg-white/5 rounded-full mb-4">
          Community Input
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#F9FAFB] mb-4">
          Suggest a Change
        </h1>
        <p className="text-lg text-[#9CA3AF]">
          Found a data error? Know a species we should cover? Found a recent paper we missed?
          Tell us — this site improves through community corrections.
        </p>
      </div>

      {/* What we accept */}
      <section className="section-padding pb-0 max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-3 mb-10">
          {[
            { label: 'Data corrections', example: 'e.g. "The vaquita count is now under 10, not 20"' },
            { label: 'Missing species', example: 'e.g. "You should cover the Saola"' },
            { label: 'New research', example: 'e.g. "This 2025 IUCN study changes the picture"' },
            { label: 'UI / technical bugs', example: 'e.g. "The chart on AI Impact is blank on mobile"' },
          ].map((item, i) => (
            <div key={i} className="card-dark p-4">
              <p className="text-sm font-bold text-[#F9FAFB] mb-1">{item.label}</p>
              <p className="text-xs text-[#9CA3AF]">{item.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="section-padding pt-0 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-[#F9FAFB] mb-2">Name (optional)</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#F9FAFB] placeholder:text-[#9CA3AF]/50 focus:outline-none focus:border-[#EF4444]/50 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#F9FAFB] mb-2">Email (optional)</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="If you want a reply"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#F9FAFB] placeholder:text-[#9CA3AF]/50 focus:outline-none focus:border-[#EF4444]/50 transition-colors text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
              Type of suggestion <span className="text-[#EF4444]">*</span>
            </label>
            <select
              required
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value as SuggestionType })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#F9FAFB] focus:outline-none focus:border-[#EF4444]/50 transition-colors text-sm appearance-none"
            >
              <option value="" disabled className="bg-[#1B2838]">Select a type...</option>
              {suggestionTypes.map((t) => (
                <option key={t.value} value={t.value} className="bg-[#1B2838]">
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
              Source URL or reference (if applicable)
            </label>
            <input
              type="text"
              value={form.source}
              onChange={(e) => setForm({ ...form, source: e.target.value })}
              placeholder="e.g. https://www.iucnredlist.org/... or IUCN 2024 Red List"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#F9FAFB] placeholder:text-[#9CA3AF]/50 focus:outline-none focus:border-[#EF4444]/50 transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
              Your suggestion <span className="text-[#EF4444]">*</span>
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Describe the change, correction, or suggestion in as much detail as you can..."
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#F9FAFB] placeholder:text-[#9CA3AF]/50 focus:outline-none focus:border-[#EF4444]/50 transition-colors text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-6 py-3 bg-[#EF4444] text-white font-medium rounded-lg hover:bg-[#EF4444]/90 transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            {loading ? 'Sending...' : 'Submit suggestion'}
          </button>
        </form>

        <p className="mt-6 text-xs text-[#9CA3AF]/60">
          Submissions are reviewed manually. We aim to respond within 5 business days when an email is provided.
          All corrections are verified against the original source before being published.
        </p>
      </section>
    </div>
  );
}
