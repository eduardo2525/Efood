class Menu {
  description: string
  image: string
  infos: string[]
  note: number
  assessment: string
  title: string
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    note: number,
    assessment: string,
    title: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.note = note
    this.assessment = assessment
    this.title = title
  }
}

export default Menu
