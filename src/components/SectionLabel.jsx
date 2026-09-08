/**
 * Small structural label used to introduce a section.
 * Sentence case by design — avoids the tracked-out ALL-CAPS
 * eyebrow pattern that reads as generic template chrome.
 */
export default function SectionLabel({ children, index }) {
  return (
    <div className="section-label">
      {index && <span className="section-label__index">{index}</span>}
      <span>{children}</span>
    </div>
  );
}
