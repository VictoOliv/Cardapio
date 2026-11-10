import { MIN_DAYS_AHEAD, WHATSAPP_NUMBER } from './config'
import type { Bebida, Prato } from './types'

export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}

export function addLocalDays(days: number): Date {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() + days)
}

export function toDateInputValue(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function parseLocalDate(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (!match) return null
  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])
  const date = new Date(year, month - 1, day)
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null
  }
  return date
}

export function minOrderDateValue(): string {
  return toDateInputValue(addLocalDays(MIN_DAYS_AHEAD))
}

export function formatOrderDate(value: string): string | null {
  const date = parseLocalDate(value)
  if (!date) return null
  const dia = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  const semana = date.toLocaleDateString('pt-BR', { weekday: 'long' })
  return `${dia} (${semana})`
}

export function isDateAllowed(value: string): boolean {
  const date = parseLocalDate(value)
  if (!date) return false
  const min = addLocalDays(MIN_DAYS_AHEAD)
  return date.getTime() >= min.getTime()
}

function formatFaltas(faltas: string[]): string {
  if (faltas.length === 0) return ''
  if (faltas.length === 1) return `Falta escolher ${faltas[0]}.`
  if (faltas.length === 2) return `Falta escolher ${faltas[0]} e ${faltas[1]}.`
  const ultimo = faltas[faltas.length - 1]
  const resto = faltas.slice(0, -1).join(', ')
  return `Falta escolher ${resto} e ${ultimo}.`
}

export function missingMessage(
  doce: Prato | undefined,
  salgado: Prato | undefined,
  bebidas: Bebida[],
  data: string,
): string {
  const faltas: string[] = []
  if (!doce) faltas.push('um doce')
  if (!salgado) faltas.push('um salgado')
  if (bebidas.length === 0) faltas.push('as bebidas')
  if (!data || !isDateAllowed(data)) faltas.push('o dia')
  return formatFaltas(faltas)
}

export function buildWhatsAppMessage(
  doce: Prato | undefined,
  salgado: Prato | undefined,
  bebidas: Bebida[],
  data: string,
  nome: string,
): string {
  const dia = formatOrderDate(data) ?? data
  const listaBebidas = bebidas.map((item) => item.nome).join(', ')
  const linhas = [
    'Nosso jantar super hiper mega romântico está marcado!',
    '',
  ]
  if (doce) linhas.push(`Doce: ${doce.nome}`)
  if (salgado) linhas.push(`Salgado: ${salgado.nome}`)
  linhas.push(`Bebida(s): ${listaBebidas}`, `Dia: ${dia}`)

  const nomeLimpo = nome.trim()
  if (nomeLimpo) {
    linhas.push(`Nome: ${nomeLimpo}`)
  }

  linhas.push('', 'Aguardo a confirmação, obrigada!')
  return linhas.join('\n')
}

export function whatsAppUrl(mensagem: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`
}
