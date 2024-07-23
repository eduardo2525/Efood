class Menu {
  description: string
  image: string
  infos: string[]
  note: number
  assessment: string
  title: string
  id: number
  to: string

  constructor(
    id: number,
    to: string,
    description: string,
    image: string,
    infos: string[],
    note: number,
    assessment: string,
    title: string
  ) {
    this.id = id
    this.to = to
    this.description = description
    this.image = image
    this.infos = infos
    this.note = note
    this.assessment = assessment
    this.title = title
  }
}

export default Menu
