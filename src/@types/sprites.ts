import type { BaseSprite } from '@/@types/base-sprites.ts'
import type { OtherSprite } from '@/@types/other-sprite.ts'

export interface Sprite extends BaseSprite {
  backDefault: string,
  backFemale?: string,
  backShiny?: string,
  backShinyFemale?: string,
  frontDefault: string,
  frontFemale?: string,
  frontShiny?: string,
  frontShinyFemale?: string,
  other: OtherSprite
}
