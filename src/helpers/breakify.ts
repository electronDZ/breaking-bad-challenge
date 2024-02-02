import elements from "../config/elements";

export default function breakify(text: string) {
  let foundChemicalElement: string | undefined;
  let result: string[] = [];
  const textLowerCase = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (text[i + 1]) {
      foundChemicalElement = elements.find(
        (el) =>
          `${textLowerCase[i]}${textLowerCase[i + 1]}` === el.toLowerCase()
      );
      if (foundChemicalElement) {
        result = [
          text.slice(0, i),
          foundChemicalElement,
          text.slice(i + 2, text.length),
        ];
        break;
      }
    }
    if (!foundChemicalElement) {
      foundChemicalElement = elements.find(
        (el) => textLowerCase[i] === el.toLowerCase()
      );
      if (foundChemicalElement) {
        result = [
          text.slice(0, i),
          foundChemicalElement,
          text.slice(i + 1, text.length),
        ];
        break;
      }
    }
  }
  return result;
}
