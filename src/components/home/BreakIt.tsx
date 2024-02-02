import breakify from "../../helpers/breakify";

export default function BreakIt({ text }: { text: string }) {
  const brokenTextArray = breakify(text);
  const exist = brokenTextArray.length;
  return exist ? (
    <p>
      {brokenTextArray[0]}
      <span>{brokenTextArray[1]}</span>
      {brokenTextArray[2]}
    </p>
  ) : (
    <p>{text}</p>
  );
}
