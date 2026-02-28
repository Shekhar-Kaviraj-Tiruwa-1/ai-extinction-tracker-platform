import { Github, Mail, Twitter, Microscope, FileText, Globe } from 'lucide-react';

const socialLinks = [
  {
    label: 'GitHub',
    description: 'View the source code, report issues, or contribute',
    icon: Github,
    href: 'https://github.com',
    color: '#F9FAFB',
  },
  {
    label: 'Twitter / X',
    description: 'Follow for updates on new data and research',
    icon: Twitter,
    href: 'https://x.com',
    color: '#1D9BF0',
  },
  {
    label: 'Email',
    description: 'For media enquiries, collaborations, or expert contributions',
    icon: Mail,
    href: 'mailto:contact@extinctionClock.org',
    color: '#EF4444',
  },
];

const contributionTypes = [
  {
    icon: Microscope,
    title: 'Ecology & Conservation Scientists',
    description: 'Help us review species data, challenge our extinction linkage reasoning, or contribute unpublished findings that bear on the AI–extinction connection.',
  },
  {
    icon: FileText,
    title: 'Environmental Journalists',
    description: 'Use this data freely in your reporting. We can provide source documentation, methodological notes, or expert contacts for any statistic on this site.',
  },
  {
    icon: Globe,
    title: 'Policy Researchers',
    description: 'Contribute analysis of governance mechanisms — subsidy reform, supply chain regulation, AI governance frameworks — that we could add to the Action page.',
  },
];

export function ConnectPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1A]">
      {/* Header */}
      <div className="section-padding pb-0 max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#8B5CF6] bg-[#8B5CF6]/10 rounded-full mb-4">
          Get Involved
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[#F9FAFB] mb-4">
          Connect
        </h1>
        <p className="text-lg text-[#9CA3AF]">
          Extinction Clock is an open research platform. If you have expertise to contribute,
          data to share, or a correction to flag, we want to hear from you.
        </p>
      </div>

      {/* About the Project */}
      <section className="section-padding max-w-3xl mx-auto">
        <div className="card-dark p-6 lg:p-8 mb-8">
          <h2 className="text-xl font-bold text-[#F9FAFB] mb-4">About This Project</h2>
          <p className="text-sm text-[#9CA3AF] mb-4">
            Extinction Clock was built to make the connection between artificial intelligence,
            industrial animal agriculture, and biodiversity loss visible and understandable —
            to non-experts as well as researchers.
          </p>
          <p className="text-sm text-[#9CA3AF] mb-4">
            We draw exclusively on peer-reviewed research and authoritative conservation assessments.
            The Methodology page explains exactly what we claim and how we calculate it.
          </p>
          <p className="text-sm text-[#9CA3AF]">
            This is not a finished product. It is a living resource that improves as new IUCN
            assessments, WWF reports, and agricultural AI research are published.
          </p>
        </div>

        {/* Social Links */}
        <h2 className="text-xl font-bold text-[#F9FAFB] mb-4">Find Us</h2>
        <div className="space-y-3 mb-10">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card-dark hover:border-white/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 flex-shrink-0">
                  <Icon className="w-5 h-5" style={{ color: link.color }} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#F9FAFB] group-hover:text-[#EF4444] transition-colors">
                    {link.label}
                  </p>
                  <p className="text-xs text-[#9CA3AF]">{link.description}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Expert Contributions */}
        <h2 className="text-xl font-bold text-[#F9FAFB] mb-2">Expert Contributions</h2>
        <p className="text-sm text-[#9CA3AF] mb-5">
          We actively seek contributions from researchers and practitioners in ecology,
          conservation biology, agricultural AI, and environmental policy.
        </p>
        <div className="space-y-4">
          {contributionTypes.map((type, i) => {
            const Icon = type.icon;
            return (
              <div key={i} className="card-dark p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EF4444]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#EF4444]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#F9FAFB] mb-1">{type.title}</h3>
                  <p className="text-sm text-[#9CA3AF]">{type.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-lg">
          <p className="text-sm text-[#9CA3AF]">
            To contribute, email us at{' '}
            <a
              href="mailto:contact@extinctionClock.org"
              className="text-[#EF4444] hover:underline"
            >
              contact@extinctionClock.org
            </a>{' '}
            with the subject line "Expert Contribution — [Your Field]".
          </p>
        </div>
      </section>
    </div>
  );
}
