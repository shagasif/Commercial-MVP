import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Check,
  CheckCircle2,
  CircleHelp,
  Clock3,
  Droplets,
  Leaf,
  Menu,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  X,
} from 'lucide-react'

const products = [
  {
    id: 'miracle-oil',
    name: 'HairGrow Miracle Oil (100ml)',
    detail: '100 ml · small-batch botanical blend',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Amber botanical hair oil bottle with natural ingredients',
    label: 'The original',
    description: 'A concentrated botanical scalp ritual for stronger roots and softer, naturally glossy lengths.',
    volume: '100 ml',
  },
  {
    id: 'mega-volume-pack',
    name: 'HairGrow Mega Volume Pack (250ml)',
    detail: '250 ml · extended volume ritual',
    price: 2600,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Botanical hair and skin care bottles arranged in natural light',
    label: 'More to love',
    description: 'A generous 250 ml supply of our signature oil for an easy, consistent weekly routine.',
    volume: '250 ml',
  },
  {
    id: 'root-ritual-double-pack',
    name: 'Root Ritual Double Pack',
    detail: '2 × 100 ml · the signature oil duo',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Premium botanical cosmetic oil bottles in a soft studio setting',
    label: 'The daily duo',
    description: 'Two easy-to-reach bottles: keep one at home and one close to your everyday routine.',
    volume: '2 × 100 ml',
  },
]

function formatPrice(amount) {
  return `Rs. ${amount.toLocaleString('en-PK')}`
}

function createOrderReference() {
  const dateCode = new Date().toISOString().slice(2, 10).replaceAll('-', '')
  const randomCode = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `HG-${dateCode}-${randomCode}`
}

const testimonials = [
  {
    quote: '14 din ke baad hair fall noticeably kam hua. The oil feels so light, and my roots feel stronger.',
    name: 'Ayesha K.',
    handle: '@ayeshakhan',
    initials: 'AK',
    tone: 'rose',
  },
  {
    quote: 'Finally, something that feels like a proper scalp ritual. My hair has a lovely natural shine now.',
    name: 'Mariam S.',
    handle: '@mariamsays',
    initials: 'MS',
    tone: 'green',
  },
  {
    quote: 'Simple ingredients, no heavy feeling, and the dropper makes it easy to reach the roots. Love it.',
    name: 'Zara R.',
    handle: '@zararauf',
    initials: 'ZR',
    tone: 'amber',
  },
]

const steps = [
  {
    number: '01',
    title: 'Gentle root drop',
    body: 'Warm 4–5 drops between your palms, then apply directly to your scalp with the precision dropper.',
    icon: Droplets,
    color: 'amber',
  },
  {
    number: '02',
    title: 'Fingertip massage',
    body: 'Use gentle circular motions to massage your scalp for five minutes. Let your roots take it in.',
    icon: Sparkles,
    color: 'green',
  },
  {
    number: '03',
    title: 'Wash to active shine',
    body: 'Leave in for two hours or overnight, then rinse with your favourite gentle, sulfate-free shampoo.',
    icon: Leaf,
    color: 'amber',
  },
]

function Logo({ onClick }) {
  return (
    <a className="brand" href="#home" onClick={onClick} aria-label="HairGrow home">
      <span className="brand-mark" aria-hidden="true"><Droplets size={21} strokeWidth={1.8} /><span /></span>
      <span className="brand-word">hair<span>grow</span></span>
    </a>
  )
}

function Header({ count, onCart, cartButtonRef }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo onClick={closeMenu} />
        <nav id="main-navigation" className={`desktop-nav ${menuOpen ? 'mobile-open' : ''}`} aria-label="Main navigation">
          <a href="#catalog" onClick={closeMenu}>Catalog</a>
          <a href="#ritual" onClick={closeMenu}>The ritual</a>
          <a href="#stories" onClick={closeMenu}>Stories</a>
          <a className="nav-order" href="#catalog" onClick={closeMenu}>Order now <ArrowRight size={14} /></a>
        </nav>
        <div className="header-actions">
          <button ref={cartButtonRef} className="cart-trigger" onClick={onCart} aria-label={`Open shopping bag, ${count} items`}>
            <ShoppingBag size={18} strokeWidth={1.8} /><span className="cart-label">Bag</span><span key={count} className={`cart-count ${count > 0 ? 'cart-count-updated' : ''}`} aria-live="polite">{count}</span>
          </button>
          <button className="menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="main-navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-image" role="img" aria-label="Botanical oils and a glass bottle in warm natural light" />
      <div className="hero-shade" />
      <div className="hero-content page-width">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> Rooted in nature, made by hand</span>
          <h1>Pure Hair Oil &amp; Organic Cosmetics Solutions</h1>
          <p>100% Hand-Crafted Organic Batches Designed to Restore Root Volume and Accelerate Natural Glow.</p>
          <div className="hero-actions">
            <a className="button button-green" href="#catalog">Shop the ritual <ArrowRight size={16} /></a>
            <a className="text-link" href="#ritual">Discover how <ArrowDown size={15} /></a>
          </div>
          <div className="hero-trust"><ShieldCheck size={16} /><span>Made in small batches</span><span className="trust-separator" /><span>Thoughtfully sourced</span></div>
        </div>
        <div className="hero-note"><span className="note-rule" /><span>Care, grown slowly.</span><span>01 / 03</span></div>
      </div>
    </section>
  )
}

function OilBottleGraphic({ item, index }) {
  return (
    <div className="product-photo">
      <img className="w-full h-48 md:h-56 object-cover rounded-t-xl" src={item.image} alt={item.imageAlt} />
      <span className="product-tag"><Leaf size={13} /> {item.label}</span>
      <span className="photo-index">HG / 00{index + 1}</span>
    </div>
  )
}

function ProductRating() {
  return <span className="product-rating" role="img" aria-label="Rated 5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={13} fill="currentColor" />)}<span>5.0</span></span>
}

function ProductShowcase({ quantities, onQuantityChange, onAdd, onViewIngredients }) {
  return (
    <section className="catalog-section section-pad" id="catalog">
      <div className="page-width">
        <div className="section-intro">
          <div><span className="eyebrow section-eyebrow">The HairGrow edit</span><h2>Good hair days,<br /><em>grown naturally.</em></h2></div>
          <p>Small-batch care, made with intention. Start with our signature scalp ritual, crafted to bring your roots back to life.</p>
        </div>
        <div className="product-grid">
          {products.map((item, index) => {
            const quantity = quantities[item.id]

            return (
              <article className="product-card" key={item.id}>
                <OilBottleGraphic item={item} index={index} />
                <div className="product-info">
                  <div className="product-title-row">
                    <div><span className="product-kicker">Scalp &amp; hair treatment</span><h3>{item.name}</h3></div>
                    <span className="price">{formatPrice(item.price)}</span>
                  </div>
                  <div className="product-detail-row"><ProductRating /><button className="ingredients-trigger" onClick={() => onViewIngredients(item)}>View Ingredients <ArrowRight size={13} /></button></div>
                  <p className="product-description">{item.description}</p>
                  <div className="product-bottom">
                    <div className="quantity-control" aria-label={`${item.name} quantity`}>
                      <button onClick={() => onQuantityChange(item.id, Math.max(1, quantity - 1))} aria-label={`Decrease ${item.name} quantity`} disabled={quantity === 1}><Minus size={14} /></button>
                      <span aria-live="polite">{quantity}</span>
                      <button onClick={() => onQuantityChange(item.id, Math.min(10, quantity + 1))} aria-label={`Increase ${item.name} quantity`} disabled={quantity === 10}><Plus size={14} /></button>
                    </div>
                    <button className="button button-amber add-button" onClick={(event) => onAdd(item.id, quantity, event)}>Add to Cart <ArrowRight size={16} /></button>
                  </div>
                  <div className="product-meta"><span><Check size={13} /> Carefully batch-made</span><span><Check size={13} /> Made in Pakistan</span></div>
                </div>
              </article>
            )
          })}
        </div>
        <section className="serum-feature" aria-labelledby="serum-title">
          <div className="serum-feature-media">
            <img className="serum-feature-image w-full h-48 md:h-56 object-cover rounded-t-xl" src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=2200&q=90" alt="Premium botanical skincare arranged in warm natural light" />
            <div className="serum-image-mask" />
            <strong className="serum-launch-overlay">COMING SOON — PREMIUM BOTANICAL SKINCARE RITUALS</strong>
            <span className="serum-feature-index">HAIRGROW SKIN · 004</span>
          </div>
          <div className="serum-feature-details">
            <div className="serum-feature-copy">
              <span className="eyebrow"><span className="eyebrow-dot" /> The next HairGrow ritual</span>
              <h3 id="serum-title">Aura Glow<br /><em>Cosmetic Serum</em></h3>
              <p>A considered botanical formula is taking shape. A new kind of glow, coming soon.</p>
            </div>
            <div className="cream-box-stage" role="img" aria-label="HairGrow Aura Glow premium cream box packaging illustration">
              <span className="cream-box-glow" />
              <span className="cream-box-side" />
              <div className="cream-box">
                <span className="cream-box-brand">HAIRGROW <Leaf size={11} /></span>
                <span className="cream-box-rule" />
                <span className="cream-box-name">AURA<br /><em>GLOW</em></span>
                <span className="cream-box-product">BOTANICAL<br />SKINCARE SERUM</span>
                <span className="cream-box-seal"><Sparkles size={15} /></span>
                <span className="cream-box-volume">30 ml · 1.0 fl oz</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

function RitualSection() {
  return (
    <section className="ritual-section section-pad" id="ritual">
      <div className="page-width">
        <div className="ritual-heading"><div><span className="eyebrow section-eyebrow">Your five-minute reset</span><h2>A softer routine.<br /><em>Stronger roots.</em></h2></div><p>Consistency is the secret ingredient. Here’s how to make every drop count.</p></div>
        <div className="steps-grid">{steps.map(({ number, title, body, icon: Icon, color }) => <article className="step" key={number}><div className={`step-top ${color}`}><span>{number}</span><Icon size={20} strokeWidth={1.7} /></div><h3>{title}</h3><p>{body}</p><span className="step-line" /></article>)}</div>
        <div className="ritual-footnote"><Clock3 size={15} /><span>Use 2–3 times weekly for a ritual that fits real life.</span></div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="stories-section section-pad" id="stories">
      <div className="page-width">
        <div className="stories-heading"><div><span className="eyebrow section-eyebrow">Notes from your roots</span><h2>Good things are<br /><em>being said.</em></h2></div><div className="review-score"><div className="score-stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={15} fill="currentColor" />)}</div><span>Real words from our community</span></div></div>
        <div className="testimonial-grid">{testimonials.map((review) => <article className="testimonial" key={review.handle}><div className="testimonial-stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={14} fill="currentColor" />)}</div><blockquote>“{review.quote}”</blockquote><div className="reviewer"><span className={`avatar ${review.tone}`}>{review.initials}</span><span><strong>{review.name}</strong><small>{review.handle}</small></span><CheckCircle2 size={16} className="verified" aria-label="Verified customer" /></div></article>)}</div>
      </div>
    </section>
  )
}

function Footer({ onHelp }) {
  return (
    <footer className="site-footer">
      <div className="page-width footer-top">
        <div className="footer-brand"><Logo /><p>Nature, made personal.<br />A little care, every day.</p></div>
        <div className="footer-links"><div><span>Explore</span><a href="#catalog">Catalog</a><a href="#ritual">Our ritual</a><a href="#stories">Your stories</a></div><div><span>Good to know</span><a href="#privacy" onClick={(e) => { e.preventDefault(); onHelp('Privacy Policy') }}>Privacy policy</a><a href="#terms" onClick={(e) => { e.preventDefault(); onHelp('Terms & Conditions') }}>Terms &amp; conditions</a><a href="mailto:hello@hairgrow.pk">Get in touch</a></div></div>
        <div className="footer-contact"><span>Need a hand?</span><a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">Message us on WhatsApp <ArrowRight size={14} /></a><small>We usually reply within a day.</small></div>
      </div>
      <div className="page-width footer-bottom"><span>© 2026 HairGrow Organic. All rights reserved.</span><span>Made with care, in small batches <Leaf size={13} /></span></div>
    </footer>
  )
}

function CartDrawer({ open, items, itemCount, subtotal, onClose, onQuantityChange, onCheckout }) {
  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKeyDown)
    document.body.classList.add('drawer-open')
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.classList.remove('drawer-open') }
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="drawer-layer" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <div className="drawer-header"><div><span className="eyebrow section-eyebrow">Your selections</span><h2 id="cart-title">Your bag <span>({itemCount})</span></h2></div><button className="icon-button" onClick={onClose} aria-label="Close shopping bag"><X size={20} /></button></div>
        <div className="drawer-content">
          {itemCount === 0 ? <div className="empty-bag"><span className="empty-icon"><ShoppingBag size={24} /></span><h3>A good ritual starts here.</h3><p>Your bag is waiting for something naturally good.</p><button className="button button-green" onClick={onClose}>Browse the edit <ArrowRight size={15} /></button></div> : <>
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <div className="cart-thumb"><img src={item.image} alt={item.imageAlt} /></div>
                <div className="cart-item-info">
                  <span className="product-kicker">Scalp &amp; hair treatment</span>
                  <h3>{item.name}</h3>
                  <p>{item.detail}</p>
                  <div className="cart-item-bottom">
                    <div className="quantity-control">
                      <button onClick={() => onQuantityChange(item.id, item.quantity - 1)} aria-label={`Decrease ${item.name} quantity`}><Minus size={13} /></button>
                      <span aria-live="polite">{item.quantity}</span>
                      <button onClick={() => onQuantityChange(item.id, item.quantity + 1)} aria-label={`Increase ${item.name} quantity`}><Plus size={13} /></button>
                    </div>
                    <strong>{formatPrice(item.price * item.quantity)}</strong>
                  </div>
                </div>
              </article>
            ))}
            <div className="shipping-note"><Leaf size={16} /><span>Thoughtfully packed and sent with care.</span></div>
          </>}
        </div>
        {itemCount > 0 && <div className="drawer-footer"><div className="subtotal-row"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><span className="shipping-caption">Shipping calculated at checkout</span><button className="button button-green checkout-button" onClick={onCheckout}>Proceed to express checkout <ArrowRight size={16} /></button><div className="secure-note"><ShieldCheck size={14} /> Secure, simple, one-page checkout</div></div>}
      </aside>
    </div>
  )
}

function CheckoutModal({ open, items, itemCount, subtotal, order, onClose, onSubmit, complete, onReset }) {
  const [payment, setPayment] = useState('cod')
  const [errors, setErrors] = useState({})
  const [orderConfirmationOpen, setOrderConfirmationOpen] = useState(false)

  function dismissOrderConfirmation() {
    setOrderConfirmationOpen(false)
    onReset()
  }

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      if (orderConfirmationOpen) {
        dismissOrderConfirmation()
        return
      }
      onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.classList.add('drawer-open')
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.classList.remove('drawer-open') }
  }, [open, onClose, orderConfirmationOpen])

  if (!open) return null

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const values = { name: form.get('name')?.trim(), phone: form.get('phone')?.trim(), address: form.get('address')?.trim() }
    const nextErrors = {}
    if (!values.name) nextErrors.name = 'Please enter your name.'
    if (!values.phone || !/^[+\d][\d\s()-]{8,17}$/.test(values.phone)) nextErrors.phone = 'Enter a valid WhatsApp number.'
    if (!values.address || values.address.length < 10) nextErrors.address = 'Please enter your complete shipping address.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      onSubmit({ ...values, payment })
      setErrors({})
      setPayment('cod')
    }
  }

  return (
    <div className="checkout-layer" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget && !complete) onClose() }}>
      <section className={`checkout-panel ${complete ? 'invoice-panel' : ''}`} role="dialog" aria-modal="true" aria-labelledby="checkout-title">
        <div className="checkout-top"><Logo /><button className="icon-button" onClick={complete ? onReset : onClose} aria-label={complete ? 'Close invoice' : 'Close checkout'}><X size={20} /></button></div>
        {complete ? <>
          <div className="invoice-paper">
            <div className="invoice-brand"><Logo /><span className="invoice-label">Digital invoice</span></div>
            <div className="invoice-heading">
              <div><span className="invoice-kicker">Order confirmed</span><h1 id="checkout-title">Your invoice</h1><p>Thank you, {order.name.split(' ')[0]}. Your order is confirmed.</p></div>
              <div className="invoice-reference"><span>Order reference</span><strong>{order.reference}</strong><span>{new Intl.DateTimeFormat('en-PK', { dateStyle: 'long' }).format(new Date(order.createdAt))}</span></div>
            </div>
            <div className="invoice-details">
              <div><span className="invoice-kicker">Customer</span><strong>{order.name}</strong></div>
              <div><span className="invoice-kicker">Contact number</span><strong>{order.phone}</strong></div>
              <div className="invoice-address"><span className="invoice-kicker">Full shipping address</span><strong>{order.address}</strong></div>
            </div>
            <div className="invoice-items">
              <div className="invoice-table-head"><span>Item</span><span>Qty</span><span>Unit price</span><span>Amount</span></div>
              {order.items.map((item) => <div className="invoice-table-row" key={item.id}><div><strong>{item.name}</strong><small>{item.detail}</small></div><span>{item.quantity}</span><span>{formatPrice(item.price)}</span><strong>{formatPrice(item.price * item.quantity)}</strong></div>)}
            </div>
            <div className="invoice-summary"><div><span>Payment method</span><strong>{order.payment === 'cod' ? 'Cash on Delivery' : 'Easypaisa'}</strong></div><div className="invoice-total"><span>Grand total</span><strong>{formatPrice(order.subtotal)}</strong></div></div>
            <div className="invoice-thanks"><span><Leaf size={15} /> Made with care, in small batches.</span><span>HairGrow Organic · hello@hairgrow.pk</span></div>
          </div>
          <div className="invoice-actions"><button className="button button-green" onClick={() => window.print()}><ArrowDown size={16} /> Download Invoice PDF</button><button className="invoice-manifest-link" onClick={() => setOrderConfirmationOpen(true)}>Complete Order <ArrowRight size={15} /></button></div>
        </> : <>
          <div className="checkout-heading"><span className="eyebrow section-eyebrow">Just one more thing</span><h1 id="checkout-title">Express checkout</h1><p>Share a few details and we’ll take care of the rest.</p></div>
          <form className="checkout-form" onSubmit={handleSubmit} noValidate>
            <label className={errors.name ? 'field-error' : ''}>Full name<input type="text" name="name" autoComplete="name" placeholder="e.g. Ayesha Khan" aria-invalid={Boolean(errors.name)} />{errors.name && <small>{errors.name}</small>}</label>
            <label className={errors.phone ? 'field-error' : ''}>WhatsApp number<input type="tel" name="phone" autoComplete="tel" placeholder="+92 300 1234567" aria-invalid={Boolean(errors.phone)} />{errors.phone && <small>{errors.phone}</small>}</label>
            <label className={errors.address ? 'field-error' : ''}>Complete shipping address<textarea name="address" autoComplete="street-address" rows="3" placeholder="House, street, area, city" aria-invalid={Boolean(errors.address)} />{errors.address && <small>{errors.address}</small>}</label>
            <fieldset className="payment-options"><legend>Payment method</legend><label className={`payment-option ${payment === 'cod' ? 'selected' : ''}`}><input type="radio" name="payment" value="cod" checked={payment === 'cod'} onChange={() => setPayment('cod')} /><span className="payment-radio" /><span><strong>Cash on Delivery</strong><small>Pay when your order arrives</small></span><span className="payment-side">COD</span></label><label className={`payment-option ${payment === 'wallet' ? 'selected' : ''}`}><input type="radio" name="payment" value="wallet" checked={payment === 'wallet'} onChange={() => setPayment('wallet')} /><span className="payment-radio" /><span><strong>Easypaisa</strong><small>Direct mobile wallet transfer</small></span><span className="wallet-mark">e</span></label></fieldset>
            <div className="checkout-items" aria-label="Order summary">{items.map((item) => <div key={item.id}><span>{item.quantity} × {item.name}</span><strong>{formatPrice(item.price * item.quantity)}</strong></div>)}</div>
            <div className="checkout-total"><span>Order total <small>{itemCount} item{itemCount === 1 ? '' : 's'}</small></span><strong>{formatPrice(subtotal)}</strong></div>
            <button className="button button-green checkout-button" type="submit">Place order <ArrowRight size={16} /></button>
            <p className="form-note"><ShieldCheck size={14} /> Your details are only used to deliver your order.</p>
          </form>
        </>}
      </section>
      {orderConfirmationOpen && <div className="order-confirmation-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) dismissOrderConfirmation() }}><section className="order-confirmation-popup" role="alertdialog" aria-modal="true" aria-labelledby="order-confirmation-title"><button className="icon-button order-confirmation-close" onClick={dismissOrderConfirmation} aria-label="Dismiss order confirmation"><X size={19} /></button><span className="order-confirmation-mark"><CheckCircle2 size={27} /></span><span className="eyebrow section-eyebrow">Thank you for choosing HairGrow</span><h2 id="order-confirmation-title">Order Confirmed</h2><p>Your order <strong>{order.reference}</strong> is confirmed. Our team (Merchant) will contact you on WhatsApp very soon to share your parcel tracking number.</p></section></div>}
    </div>
  )
}

function IngredientsDialog({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined
    const onKeyDown = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKeyDown)
    document.body.classList.add('drawer-open')
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.classList.remove('drawer-open') }
  }, [item, onClose])

  if (!item) return null

  const ingredients = ['Organic Rosemary Extract', 'Premium Kalonji Seeds', 'Cold-Pressed Coconut Oil', 'Amla Bio-nutrients', 'Vitamin E']

  return <div className="info-layer" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><section className="info-panel ingredients-panel" role="dialog" aria-modal="true" aria-labelledby="ingredients-title"><div className="info-heading"><div><span className="eyebrow section-eyebrow">Botanical ingredients</span><h2 id="ingredients-title">{item.name}</h2></div><button className="icon-button" onClick={onClose} aria-label="Close ingredients"><X size={19} /></button></div><p>Thoughtfully selected components in this HairGrow ritual:</p><ul className="ingredient-list">{ingredients.map((ingredient) => <li key={ingredient}><Check size={15} /><span>{ingredient}</span></li>)}</ul></section></div>
}

function InfoDialog({ title, onClose }) {
  return <div className="info-layer" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><section className="info-panel" role="dialog" aria-modal="true" aria-labelledby="info-title"><div className="info-heading"><h2 id="info-title">{title}</h2><button className="icon-button" onClick={onClose} aria-label="Close"><X size={19} /></button></div><p>We respect your trust. HairGrow only uses your contact and delivery details to process your order and coordinate delivery. We never sell personal information. For questions about our policies or your order, contact <a href="mailto:hello@hairgrow.pk">hello@hairgrow.pk</a>.</p><button className="button button-green" onClick={onClose}>Got it <Check size={15} /></button></section></div>
}

export default function App() {
  const cartButtonRef = useRef(null)
  const nextFlyTokenId = useRef(0)
  const [cart, setCart] = useState({})
  const [flyTokens, setFlyTokens] = useState([])
  const [productQuantities, setProductQuantities] = useState(() => Object.fromEntries(products.map(({ id }) => [id, 1])))
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [order, setOrder] = useState(null)
  const [infoTitle, setInfoTitle] = useState('')
  const [ingredientsProduct, setIngredientsProduct] = useState(null)

  const items = products.filter(({ id }) => cart[id] > 0).map((item) => ({ ...item, quantity: cart[item.id] }))
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  function addToCart(productId, amount, event) {
    const source = event.currentTarget.getBoundingClientRect()
    const target = cartButtonRef.current?.getBoundingClientRect()

    if (target) {
      const id = nextFlyTokenId.current++
      setFlyTokens((current) => [...current, {
        id,
        amount,
        x: source.left + source.width / 2,
        y: source.top + source.height / 2,
        deltaX: target.left + target.width / 2 - (source.left + source.width / 2),
        deltaY: target.top + target.height / 2 - (source.top + source.height / 2),
      }])
    }

    setCart((current) => ({ ...current, [productId]: (current[productId] || 0) + amount }))
  }

  function changeCartQuantity(productId, quantity) {
    setCart((current) => ({ ...current, [productId]: Math.max(0, Math.min(99, quantity)) }))
  }

  function startCheckout() {
    setCartOpen(false)
    setCheckoutOpen(true)
  }

  function finishOrder(details) {
    setOrder({ ...details, items, itemCount, subtotal, reference: createOrderReference(), createdAt: new Date().toISOString() })
    setOrderComplete(true)
    setCart({})
    setProductQuantities(Object.fromEntries(products.map(({ id }) => [id, 1])))
  }

  function resetOrder() {
    setOrderComplete(false)
    setOrder(null)
    setCheckoutOpen(false)
    setCartOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Header count={itemCount} cartButtonRef={cartButtonRef} onCart={() => setCartOpen(true)} />
      <main><Hero /><ProductShowcase quantities={productQuantities} onQuantityChange={(productId, quantity) => setProductQuantities((current) => ({ ...current, [productId]: quantity }))} onAdd={addToCart} onViewIngredients={setIngredientsProduct} /><RitualSection /><Testimonials /></main>
      <Footer onHelp={setInfoTitle} />
      <div className="cart-fly-layer" aria-hidden="true">{flyTokens.map((token) => <span key={token.id} className="cart-fly-token" style={{ left: token.x, top: token.y, '--fly-x': `${token.deltaX}px`, '--fly-y': `${token.deltaY}px` }} onAnimationEnd={() => setFlyTokens((current) => current.filter(({ id }) => id !== token.id))}>+{token.amount}</span>)}</div>
      <CartDrawer open={cartOpen} items={items} itemCount={itemCount} subtotal={subtotal} onClose={() => setCartOpen(false)} onQuantityChange={changeCartQuantity} onCheckout={startCheckout} />
      <CheckoutModal open={checkoutOpen} items={items} itemCount={itemCount} subtotal={subtotal} order={order} onClose={() => setCheckoutOpen(false)} onSubmit={finishOrder} complete={orderComplete} onReset={resetOrder} />
      <IngredientsDialog item={ingredientsProduct} onClose={() => setIngredientsProduct(null)} />
      {infoTitle && <InfoDialog title={infoTitle} onClose={() => setInfoTitle('')} />}
      <a className="help-tab" href="https://wa.me/923001234567" target="_blank" rel="noreferrer" aria-label="Contact HairGrow on WhatsApp"><CircleHelp size={17} /><span>Need help?</span></a>
    </>
  )
}