export function Icon({ name }) {
  const paths = {
    cart: (
      <>
        <path d="M7 18a1.8 1.8 0 1 0 0 3.6A1.8 1.8 0 0 0 7 18Z" />
        <path d="M18 18a1.8 1.8 0 1 0 0 3.6A1.8 1.8 0 0 0 18 18Z" />
        <path d="M3 4h2l2.2 10.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 1.9-1.4L21 8H7" />
      </>
    ),
    user: (
      <>
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    check: <path d="M20 6 9 17l-5-5" />,
    shield: <path d="M12 3 5 6v5c0 4.8 3.1 8.4 7 10 3.9-1.6 7-5.2 7-10V6l-7-3Z" />,
    truck: (
      <>
        <path d="M3 7h11v8H3z" />
        <path d="M14 10h4l3 3v2h-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </>
    ),
    card: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </>
    ),
    map: (
      <>
        <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
        <path d="M9 3v15" />
        <path d="M15 6v15" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 7 9-7" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.5 19.5 0 0 1-8.5-3A19 19 0 0 1 5.1 12 19.5 19.5 0 0 1 2 3.8 2 2 0 0 1 4 1.6h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 1.9Z" />
    ),
    paint: (
      <>
        <path d="M4 16h13a3 3 0 0 0 0-6h-1" />
        <path d="M4 16v4h9v-4" />
        <path d="M5 8h10l1 2H4l1-2Z" />
        <path d="M8 8V5h4v3" />
      </>
    ),
    tool: <path d="m14 7 3-3 3 3-3 3m0-6-9 9-4 7 7-4 9-9" />,
    download: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  }

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

export function Button({
  children,
  icon,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}) {
  return (
    <button className={`button ${variant} ${className}`} type={type} onClick={onClick}>
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </button>
  )
}

export function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <span key={item}>
          {index > 0 && <span aria-hidden="true">›</span>}
          {item}
        </span>
      ))}
    </div>
  )
}

export function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`section-header ${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

export function FeatureTile({ icon, title, text }) {
  return (
    <article className="feature-tile">
      <span className="tile-icon">
        <Icon name={icon} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export function FeatureLine({ text }) {
  return (
    <div className="feature-line">
      <Icon name="check" />
      <p>{text}</p>
    </div>
  )
}

export function ProductCard({ item, action = 'Dodaj', navigate }) {
  return (
    <article className="product-card">
      <img src={item.image} alt="" />
      <div className="product-card-body">
        <p className="card-label">{item.category}</p>
        <h3>{item.title}</h3>
        {item.description && <p>{item.description}</p>}
        <div className="product-card-footer">
          <strong>{item.price}</strong>
          <button type="button" onClick={() => navigate?.('cart')}>
            <Icon name="cart" />
            {action}
          </button>
        </div>
      </div>
    </article>
  )
}

export function OrderLine({ image, title, meta, price }) {
  return (
    <div className="order-line">
      {image && <img src={image} alt="" />}
      <div>
        <h3>{title}</h3>
        <p>{meta}</p>
      </div>
      <strong>{price}</strong>
    </div>
  )
}

export function FaqSection({ title, text, items, grid = false }) {
  return (
    <section className="content-section">
      <SectionHeader title={title} text={text} />
      <div className={grid ? 'faq-grid' : 'faq-list'}>
        {items.map(([question, answer]) => (
          <details className="faq-item" key={question} open={!grid}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
