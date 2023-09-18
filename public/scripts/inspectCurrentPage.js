const colors = [
  "#f00",
  "#0f0",
  "#00f",
  "#ff0",
]

const allElements = document.querySelectorAll("body *") || []

allElements.forEach((element) => {
  const elementHasChildElements = element.children.length
  const colorIndex = +(element.parentElement?.dataset?.oci) || 0;
  const newColorIndex = (colorIndex + 1) % 4

  console.log(colorIndex, newColorIndex)

  element.style.setProperty("outline", `2px solid ${colors[newColorIndex]}`)
  elementHasChildElements && element.style.setProperty("outline-offset", `2px`)

  element.dataset.oci = newColorIndex;
})
