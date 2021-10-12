export const getRandomNumber = (max: number) => {
  const maximal = Math.floor(max)
  return Math.floor(Math.random() * (maximal - 1 + 1)) + 1
}
