import { rotulosPrato } from '../data/menu'
import type { CategoriaPrato, Prato } from '../types'
import { assetUrl } from '../utils'

type Props = {
  pratos: Prato[]
  selecionados: Record<CategoriaPrato, string | null>
  onSelect: (categoria: CategoriaPrato, id: string) => void
}

const ordem: CategoriaPrato[] = ['doce', 'salgado']

export function DishGrid({ pratos, selecionados, onSelect }: Props) {
  return (
    <section className="menu-section" aria-labelledby="pratos-titulo">
      <h2 id="pratos-titulo" className="section-title">
        Pratos
      </h2>

      {ordem.map((categoria) => {
        const itens = pratos.filter((prato) => prato.categoria === categoria)
        const tituloId = `pratos-${categoria}`
        return (
          <div key={categoria} className="category-block">
            <h3 id={tituloId} className="category-title">
              {rotulosPrato[categoria]}
            </h3>
            <div className="card-grid" role="group" aria-labelledby={tituloId}>
              {itens.map((prato) => {
                const ativo = selecionados[categoria] === prato.id
                return (
                  <label
                    key={prato.id}
                    className={`card picker-card ${ativo ? 'is-selected' : ''}`}
                  >
                    <input
                      type="checkbox"
                      className="picker-input"
                      checked={ativo}
                      onChange={() => onSelect(categoria, prato.id)}
                    />
                    <span className="picker-mark" aria-hidden="true" />
                    <div className="card-media">
                      <img
                        src={assetUrl(prato.imagem)}
                        alt={prato.alt}
                        width={1200}
                        height={900}
                        loading="lazy"
                      />
                    </div>
                    <div className="card-body">
                      <strong>{prato.nome}</strong>
                      <p>{prato.descricao}</p>
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
