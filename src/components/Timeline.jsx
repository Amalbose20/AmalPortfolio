export default function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className="t-item" key={item.title}>
          <span className="t-dot"></span>
          <h3>{item.title}</h3>
          {item.meta && <div className="t-meta">{item.meta}</div>}
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}
