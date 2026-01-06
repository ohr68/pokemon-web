export function handleBackgroundColorByType (type: string) {
  switch (type) {
    case 'fire':
      return 'from-orange-300/60 to-red-700/90'
    case 'grass':
      return 'from-green-300/60 to-emerald-700/90'
    case 'water':
      return 'from-sky-300/60 to-blue-700/90'
    case 'electric':
      return 'from-yellow-100/60 to-yellow-600/90'
    case 'ghost':
      return 'from-violet-200/60 to-violet-700/90'
    case 'fairy':
      return 'from-pink-200/60 to-pink-600/90'
    case 'poison':
      return 'from-fuchsia-200/60 to-fuchsia-600/90'
    case 'ground':
      return 'from-amber-300/60 to-amber-700/90'
    case 'rock':
      return 'from-gray-200/60 to-gray-600/90'
    case 'psychic':
      return 'from-indigo-100/60 to-indigo-600/90'
    case 'fighting':
      return 'from-neutral-100/60 to-neutral-600/90'
    case 'bug':
      return 'from-lime-100/60 to-lime-600/90'
    case 'normal':
      return 'from-slate-200/60 to-slate-800/90'
    case 'ice':
      return 'from-sky-100/60 to-sky-400/90'
    case 'dragon':
      return 'from-sky-100/60 to-emerald-400/90'
    case 'dark':
      return 'from-slate-600/60 to-slate-800/90'
    case 'steel':
      return 'from-zinc-400/60 to-zinc-100/90'
    case 'flying':
      return 'from-sky-500/60 to-sky-200/90'
  }
}
