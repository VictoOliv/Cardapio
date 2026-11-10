import type { Bebida, Prato } from '../types'
import { formatOrderDate } from '../utils'

type Props = {
  doce?: Prato
  salgado?: Prato
  bebidas: Bebida[]
  data: string
  minData: string
  nome: string
  falta: string
  onData: (valor: string) => void
  onNome: (valor: string) => void
  onConfirmar: () => void
}

export function OrderPanel({
  doce,
  salgado,
  bebidas,
  data,
  minData,
  nome,
  falta,
  onData,
  onNome,
  onConfirmar,
}: Props) {
  const diaFormatado = data ? formatOrderDate(data) : null
  const pronto = falta === ''

  return (
    <section className="order-panel" aria-labelledby="pedido-titulo">
      <h2 id="pedido-titulo">Seu pedido</h2>

      <div className="fields">
        <div className="field">
          <label htmlFor="dia">Dia</label>
          <input
            id="dia"
            type="date"
            min={minData}
            value={data}
            required
            onChange={(event) => onData(event.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="nome">Seu nome (eu sei que é Gabryela)</label>
          <input
            id="nome"
            type="text"
            autoComplete="name"
            maxLength={80}
            value={nome}
            placeholder="Como quer ser chamado"
            onChange={(event) => onNome(event.target.value)}
          />
        </div>
      </div>

      <div className="summary" aria-live="polite">
        <h3>Resumo</h3>
        <p>
          <span>Doce</span>
          {doce ? doce.nome : '—'}
        </p>
        <p>
          <span>Salgado</span>
          {salgado ? salgado.nome : '—'}
        </p>
        <p>
          <span>Bebida(s)</span>
          {bebidas.length > 0 ? bebidas.map((item) => item.nome).join(', ') : '—'}
        </p>
        <p>
          <span>Dia</span>
          {diaFormatado ?? '—'}
        </p>
        {nome.trim() ? (
          <p>
            <span>Nome</span>
            {nome.trim()}
          </p>
        ) : null}
      </div>

      {pronto ? (
        <button type="button" className="cta" onClick={onConfirmar}>
          Confirmar pelo WhatsApp
        </button>
      ) : (
        <p className="missing">{falta}</p>
      )}
    </section>
  )
}
