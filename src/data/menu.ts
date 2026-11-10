import type { Bebida, Prato } from '../types'

/*
  Como adicionar um prato:
  1. Copie um objeto abaixo e ajuste id, nome, categoria e descricao.
  2. Coloque a foto em public/img/pratos/ (mesmo nome do campo imagem).
  3. Anote autor e licença em CREDITS.md.
*/

export const pratos: Prato[] = [
  {
    id: 'torta-cookie-nutella',
    nome: 'Torta de cookie com Nutella',
    categoria: 'doce',
    descricao: 'Torta de massa de cookie com recheio cremoso de Nutella.',
    imagem: 'img/pratos/torta-cookie-nutella.webp',
    alt: 'Torta de chocolate e avelã com cobertura de avelãs e fios de chocolate',
  },
  {
    id: 'brownie-de-chocolate',
    nome: 'Brownie de chocolate',
    categoria: 'doce',
    descricao: 'Brownie intenso com casquinha fina e centro macio.',
    imagem: 'img/pratos/brownie-de-chocolate.webp',
    alt: 'Brownie de chocolate com casquinha dourada, sorvete e calda',
  },
  {
    id: 'espaguete-molho-verde',
    nome: 'Espaguete ao molho verde de abobrinha',
    categoria: 'salgado',
    descricao: 'Espaguete com molho verde de abobrinha e manjericão.',
    imagem: 'img/pratos/espaguete-molho-verde-abobrinha.webp',
    alt: 'Prato de massa com molho verde de ervas e queijo',
  },
  {
    id: 'palha-italiana',
    nome: 'Palha italiana',
    categoria: 'doce',
    descricao: 'Quadradinhos de brigadeiro e biscoito com toque de açúcar.',
    imagem: 'img/pratos/palha-italiana.webp',
    alt: 'Palha italiana em quadrados de chocolate com pedaços de biscoito',
  },
  {
    id: 'explosao-de-snacks',
    nome: 'Explosão de snacks',
    categoria: 'doce',
    descricao: 'Mistura de balas, chocolates, chips e petiscos.',
    imagem: 'img/pratos/explosao-de-snacks.webp',
    alt: 'Chips, salgadinhos, balas coloridas e chocolates',
  },
  {
    id: 'macarrao-carbonara',
    nome: 'Macarrão à carbonara com bacon',
    categoria: 'salgado',
    descricao: 'Massa com bacon dourado e creme de gemas com queijo.',
    imagem: 'img/pratos/macarrao-carbonara-bacon.webp',
    alt: 'Espaguete à carbonara com bacon crocante e queijo',
  },
  {
    id: 'strogonoff-de-frango',
    nome: 'Strogonoff de frango',
    categoria: 'salgado',
    descricao: 'Frango cremoso ao molho, servido com arroz.',
    imagem: 'img/pratos/strogonoff-de-frango.webp',
    alt: 'Strogonoff de frango cremoso com arroz e batata frita',
  },
  {
    id: 'salgadinhos',
    nome: 'Salgadinhos',
    categoria: 'salgado',
    descricao: 'Porção de coxinha, risoles e outros fritos para petiscar.',
    imagem: 'img/pratos/salgadinhos.webp',
    alt: 'Porção de salgadinhos fritos com coxinhas e croquetes',
  },
  {
    id: 'sanduiche',
    nome: 'Sanduíche',
    categoria: 'salgado',
    descricao: 'Hambúrguer americano no pão, com queijo, alface e tomate.',
    imagem: 'img/pratos/sanduiche.webp',
    alt: 'Hambúrguer americano com queijo derretido, alface, cebola e tomate',
  },
]

/*
  Como adicionar uma bebida:
  1. Copie um objeto e ajuste id, nome e categoria (refri | sucos | especiais).
  2. Coloque a foto em public/img/bebidas/.
  3. Anote autor e licença em CREDITS.md.
*/

export const bebidas: Bebida[] = [
  {
    id: 'coca',
    nome: 'Coca',
    categoria: 'refri',
    imagem: 'img/bebidas/coca.webp',
    alt: 'Copo de refrigerante cola com gelo ao lado da lata',
  },
  {
    id: 'guarana',
    nome: 'Guaraná',
    categoria: 'refri',
    imagem: 'img/bebidas/guarana.webp',
    alt: 'Lata de guaraná segurada ao ar livre',
  },
  {
    id: 'pepsi',
    nome: 'Pepsi',
    categoria: 'refri',
    imagem: 'img/bebidas/pepsi.webp',
    alt: 'Lata azul de refrigerante cola sobre a mesa',
  },
  {
    id: 'fanta-laranja',
    nome: 'Fanta laranja',
    categoria: 'refri',
    imagem: 'img/bebidas/fanta-laranja.webp',
    alt: 'Refrigerante laranja sendo servido em um copo',
  },
  {
    id: 'suco-laranja',
    nome: 'Laranja',
    categoria: 'sucos',
    imagem: 'img/bebidas/suco-laranja.webp',
    alt: 'Copo de suco de laranja fresco',
  },
  {
    id: 'suco-frutas-vermelhas',
    nome: 'Frutas vermelhas',
    categoria: 'sucos',
    imagem: 'img/bebidas/suco-frutas-vermelhas.webp',
    alt: 'Copo de suco vermelho de frutas com gelo e hortelã',
  },
  {
    id: 'suco-uva',
    nome: 'Uva',
    categoria: 'sucos',
    imagem: 'img/bebidas/suco-uva.webp',
    alt: 'Copo de suco de uva ao lado de uvas frescas',
  },
  {
    id: 'suco-abacaxi',
    nome: 'Abacaxi',
    categoria: 'sucos',
    imagem: 'img/bebidas/suco-abacaxi.webp',
    alt: 'Copo de suco de abacaxi natural com espuma',
  },
  {
    id: 'vinho',
    nome: 'Vinho',
    categoria: 'especiais',
    imagem: 'img/bebidas/vinho.webp',
    alt: 'Taça de vinho tinto',
  },
  {
    id: 'energetico',
    nome: 'Energético',
    categoria: 'especiais',
    imagem: 'img/bebidas/energetico.webp',
    alt: 'Latas de energético geladas com gotas de condensação',
  },
]

export const rotulosBebida: Record<Bebida['categoria'], string> = {
  refri: 'Refri',
  sucos: 'Sucos',
  especiais: 'Especiais',
}

export const rotulosPrato: Record<Prato['categoria'], string> = {
  doce: 'Doce',
  salgado: 'Salgado',
}
