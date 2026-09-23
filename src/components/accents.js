/** Shared accent palette so program areas keep one colour identity across pages. */
export const accents = {
  saffron: {
    bar: 'bg-saffron-500',
    text: 'text-saffron-500',
    soft: 'bg-saffron-50',
    chip: 'bg-saffron-50 text-saffron-600 border-saffron-200',
    ring: 'hover:border-saffron-500/60',
  },
  leaf: {
    bar: 'bg-leaf-500',
    text: 'text-leaf-500',
    soft: 'bg-leaf-50',
    chip: 'bg-leaf-50 text-leaf-600 border-leaf-500/25',
    ring: 'hover:border-leaf-500/60',
  },
  navy: {
    bar: 'bg-navy-700',
    text: 'text-navy-700',
    soft: 'bg-navy-50',
    chip: 'bg-navy-50 text-navy-700 border-navy-700/20',
    ring: 'hover:border-navy-700/60',
  },
  plum: {
    bar: 'bg-[#7A4EA8]',
    text: 'text-[#7A4EA8]',
    soft: 'bg-[#F3EDFA]',
    chip: 'bg-[#F3EDFA] text-[#5F3A86] border-[#7A4EA8]/20',
    ring: 'hover:border-[#7A4EA8]/60',
  },
}

export const accentOf = (key) => accents[key] || accents.saffron
