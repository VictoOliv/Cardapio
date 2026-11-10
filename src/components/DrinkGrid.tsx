import { rotulosBebida } from '../data/menu'
import type { Bebida, CategoriaBebida } from '../types'
import { assetUrl } from '../utils'

type Props = {
  bebidas: Bebida[]
  selecionadas: string[]
  onToggle: (id: string) => void
}

const ordem: CategoriaBebida[] = ['refri', 'sucos', 'especiais']

export function DrinkGrid({ bebidas, selecionadas, onToggle }: Props) {
  return (
    <section className="menu-section" aria-labelledby="bebidas-titulo">
      <h2 id="bebidas-titulo" className="section-title">
        Bebidas
      </h2>

      {ordem.map((categoria) => {
        const itens = bebidas.filter((bebida) => bebida.categoria === categoria)
        const legendId = `bebidas-${categoria}`
        return (
          <div
            key={categoria}
            className="category-block"
            role="group"
            aria-labelledby={legendId}
          >
            <h3 id={legendId} className="category-title">
              {rotulosBebida[categoria]}
            </h3>
            <div className="card-grid drinks">
              {itens.map((bebida) => {
                const ativo = selecionadas.includes(bebida.id)
                return (
                  <label
                    key={bebida.id}
                    className={`card picker-card drink-card ${ativo ? 'is-selected' : ''}`}
                  >
                    <input
                      type="checkbox"
                      className="picker-input"
                      checked={ativo}
                      onChange={() => onToggle(bebida.id)}
                      name="bebidas"
                      value={bebida.id}
                    />
                    <span className="picker-mark" aria-hidden="true" />
                    <div className="card-media">
                      <img
                        src={assetUrl(bebida.imagem)}
                        alt={bebida.alt}
                        width={1200}
                        height={900}
                        loading="lazy"
                      />
                    </div>
                    <div className="card-body">
                      <strong>{bebida.nome}</strong>
                    </div>
                  </label>
                )
              })}
            </div>
          </div>
        )
      })}
    </section>
  )
}
