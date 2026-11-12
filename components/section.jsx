import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
import "./sections.css";

export const wrap = "vx-wrap";
export const card = "vx-card";

export function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="vx-page-header">
      <div className="vx-page-orbit" aria-hidden="true" />
      <div className={wrap}>
        {eyebrow && <p className="vx-eyebrow" data-reveal>{eyebrow}</p>}
        <div className="vx-page-header-row" data-reveal>
          <h1>{title}</h1>
          {intro && <p className="vx-intro">{intro}</p>}
        </div>
      </div>
    </section>
  );
}

export function Section({ id, eyebrow, title, intro, children, className }) {
  return (
    <section id={id} className="vx-section">
      <div className={cn(wrap, className)}>
        {(title || eyebrow || intro) && (
          <div className="vx-section-heading" data-reveal>
            {eyebrow && <p className="vx-eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {intro && <p className="vx-intro">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function DashboardIllustration({ mobile = false, chart = false }) {
  if (mobile) return (
    <div className="vx-phone-scene" aria-hidden="true">
      <div className="vx-phone vx-phone-back"><i className="vx-phone-camera" /><div className="vx-phone-map"><span /><span /><span /></div><div className="vx-ui-line" /><div className="vx-ui-line short" /><div className="vx-ui-pill" /></div>
      <div className="vx-phone"><i className="vx-phone-camera" /><div className="vx-ui-avatar" /><div className="vx-ui-line" /><div className="vx-ui-line short" /><div className="vx-phone-banner"><i /><i /><i /></div>{[0, 1, 2].map(i => <div className="vx-phone-row" key={i}><b>✓</b><span><i /><i /></span></div>)}<div className="vx-ui-pill" /></div>
      <i className="vx-scene-bubble" />
    </div>
  );
  return (
    <div className={cn("vx-dashboard", chart && "vx-dashboard-chart")} aria-hidden="true">
      <div className="vx-window-bar"><i /><i /><i /><span /></div>
      <div className="vx-dashboard-layout">
        <div className="vx-dashboard-sidebar"><b /><i /><i /><i /><i /><i /></div>
        <div className="vx-dashboard-content">
          <div className="vx-ui-line" /><div className="vx-ui-line short" />
          <div className="vx-dashboard-stats">{[0, 1, 2].map(i => <div key={i}><i /><b /><span /></div>)}</div>
          {chart ? <div className="vx-chart-bars">{[35, 55, 43, 70, 58, 87, 72, 94, 80, 100].map((h, i) => <i key={i} style={{ height: h + "%" }} />)}</div> : <div className="vx-dashboard-table">{[0, 1, 2, 3].map(i => <div key={i}><i /><span /><span /><b /></div>)}</div>}
        </div>
      </div>
    </div>
  );
}

export function Visual({ image, alt = "", icon: Icon, className }) {
  if (image) return <img src={image} alt={alt} loading="lazy" className={cn("vx-visual vx-visual-image", className)} />;
  const mobile = /mobile|field service/i.test(alt);
  const chart = /sales|insight|data|ai|seo/i.test(alt);
  return (
    <div className={cn("vx-visual", mobile && "vx-visual-mobile", chart && "vx-visual-data", className)} role="img" aria-label={alt + " — conceptual interface illustration"}>
      <div className="vx-visual-dots" aria-hidden="true" />
      <DashboardIllustration mobile={mobile} chart={chart} />
      {Icon && <span className="vx-visual-icon" aria-hidden="true"><Icon size={20} strokeWidth={1.6} /></span>}
    </div>
  );
}

export function CTA() {
  return (
    <section className="vx-section vx-cta-section">
      <div className={wrap}>
        <div className="vx-cta">
          <div className="vx-cta-orbit" aria-hidden="true" />
          <div className="vx-cta-content">
            <h2>Have a project in mind? Let&rsquo;s talk.</h2>
            <div className="vx-cta-bottom">
              <p>Tell us what you&rsquo;re trying to solve and we&rsquo;ll reply with honest next steps.</p>
              <Button href="/start-project" variant="accent">Start a project</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InfoPage({ eyebrow, title, blocks }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} />
      <section className="vx-section vx-info-section">
        <div className="vx-info-content">
          {blocks.map(([h, p], i) => (
            <div key={h} className="vx-info-block">
              <span className="vx-info-number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <div><h2>{h}</h2><p>{p}</p></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
