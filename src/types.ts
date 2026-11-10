export type CategoriaPrato = 'doce' | 'salgado'
export type CategoriaBebida = 'refri' | 'sucos' | 'especiais'

export type Prato = {
  id: string
  nome: string
  categoria: CategoriaPrato
  descricao: string
  imagem: string
  alt: string
}

export type Bebida = {
  id: string
  nome: string
  categoria: CategoriaBebida
  imagem: string
  alt: string
}
