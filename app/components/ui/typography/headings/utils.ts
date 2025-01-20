export const createHeadingId = (text: string) => {
  const id = text.toString().toLowerCase().replace(/\s/g, '-')

  return id
}
