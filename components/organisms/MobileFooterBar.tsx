export default function MobileFooterBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-3 px-5 py-3 border-t border-border-subtle"
      style={{ background: 'rgba(10,13,23,0.85)', backdropFilter: 'blur(12px)' }}
    >
      <div className="flex items-center gap-4">
        <a href="https://github.com/ChristianBega" target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent transition-colors">
          <i className="ti ti-brand-github text-[18px]" aria-hidden="true" />
        </a>
        <a href="https://www.linkedin.com/in/christianbega/" target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent transition-colors">
          <i className="ti ti-brand-linkedin text-[18px]" aria-hidden="true" />
        </a>
        <a href="/Christian_Bega_Resume_2026.pdf" className="text-text-dim hover:text-accent transition-colors">
          <i className="ti ti-file-text text-[18px]" aria-hidden="true" />
        </a>
      </div>
      <a
        href="mailto:chrisb3ga@gmail.com"
        className="flex items-center gap-2 bg-accent text-base text-sm font-medium px-4 py-2 rounded-lg transition-colors hover:opacity-90"
      >
        <i className="ti ti-mail text-[14px]" aria-hidden="true" />
        Get in touch
      </a>
    </div>
  )
}
