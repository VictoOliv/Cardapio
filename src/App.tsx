import { useMemo, useState } from 'react'
import { ChefSpotlight } from './components/ChefSpotlight'
import { DrinkGrid } from './components/DrinkGrid'
import { DishGrid } from './components/DishGrid'
import { Header } from './components/Header'
import { OrderPanel } from './components/OrderPanel'
import { bebidas as listaBebidas, pratos } from './data/menu'
import type { CategoriaPrato } from './types'
import {
  buildWhatsAppMessage,
  isDateAllowed,
  minOrderDateValue,
  missingMessage,
  whatsAppUrl,
} from './utils'

export default function App() {
  const [pratosIds, setPratosIds] = useState<Record<CategoriaPrato, string | null>>(
    { doce: null, salgado: null },
  )
  const [bebidaIds, setBebidaIds] = useState<string[]>([])
  const [data, setData] = useState('')
  const [nome, setNome] = useState('')
  const minData = useMemo(() => minOrderDateValue(), [])

  const doce = pratos.find((item) => item.id === pratosIds.doce)
  const salgado = pratos.find((item) => item.id === pratosIds.salgado)
  const bebidasEscolhidas = listaBebidas.filter((item) =>
    bebidaIds.includes(item.id),
  )
  const dataValida = data && isDateAllowed(data) ? data : ''
  const falta = missingMessage(
    doce,
    salgado,
    bebidasEscolhidas,
    dataValida,
  )

  function selectPrato(categoria: CategoriaPrato, id: string) {
    setPratosIds((atual) => ({
      ...atual,
      [categoria]: atual[categoria] === id ? null : id,
    }))
  }

  function toggleBebida(id: string) {
    setBebidaIds((atual) =>
      atual.includes(id) ? atual.filter((item) => item !== id) : [...atual, id],
    )
  }

  function onData(valor: string) {
    if (valor && !isDateAllowed(valor)) {
      setData('')
      return
    }
    setData(valor)
  }

  function confirmar() {
    if (!doce || !salgado || bebidasEscolhidas.length === 0 || !dataValida) return
    const mensagem = buildWhatsAppMessage(
      doce,
      salgado,
      bebidasEscolhidas,
      dataValida,
      nome,
    )
    window.open(whatsAppUrl(mensagem), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="page">
      <Header />
      <main>
        <DishGrid
          pratos={pratos}
          selecionados={pratosIds}
          onSelect={selectPrato}
        />
        <DrinkGrid
          bebidas={listaBebidas}
          selecionadas={bebidaIds}
          onToggle={toggleBebida}
        />
        <ChefSpotlight />
        <OrderPanel
          doce={doce}
          salgado={salgado}
          bebidas={bebidasEscolhidas}
          data={data}
          minData={minData}
          nome={nome}
          falta={falta}
          onData={onData}
          onNome={setNome}
          onConfirmar={confirmar}
        />
      </main>
    </div>
  )
}
