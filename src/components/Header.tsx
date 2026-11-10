import { BUSINESS_NAME, PAGE_TITLE } from '../config'

export function Header() {
  return (
    <header className="site-header">
      <div className="ornament" aria-hidden="true">
        <span />
        <span className="diamond" />
        <span />
      </div>
      <p className="eyebrow">Pedido pelo WhatsApp</p>
      <h1>{PAGE_TITLE}</h1>
      {BUSINESS_NAME ? <p className="brand-line">{BUSINESS_NAME}</p> : null}
      <p className="lede">Escolha um doce, um salgado, as bebidas e o dia</p>
    </header>
  )
}
