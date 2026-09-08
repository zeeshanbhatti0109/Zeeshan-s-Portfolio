import { capabilityStrip } from "../data/tech";

export default function CapabilityStrip() {
  return (
    <section className="capstrip" aria-label="Technical capabilities">
      <div className="container capstrip__inner">
        {capabilityStrip.map((item, i) => (
          <span className="capstrip__item" key={item}>
            {item}
            {i < capabilityStrip.length - 1 && <span className="capstrip__sep" aria-hidden="true" />}
          </span>
        ))}
      </div>
    </section>
  );
}
