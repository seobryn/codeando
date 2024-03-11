export function cleanStringForImport(str) {
  let structuredStr = str.replace(/[@\-/]+/g, "_")

  if (structuredStr.startsWith("_")) {
    structuredStr = structuredStr.substring(1)
  }

  const result = structuredStr.split("_").map((word) => {
    const wordArr = word.split("")
    return wordArr.shift().toUpperCase() + wordArr.join("")
  })

  return result.join("")
}
