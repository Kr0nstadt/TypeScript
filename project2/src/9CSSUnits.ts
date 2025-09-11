//  9. Создайте тип CSSUnits, который представляет собой union всех возможных CSS-единиц
//  измерения: px, em, rem, %. Затем создайте тип CSSValue, который является строкой,
//  оканчивающейся на одну из этих единиц (например, "100px" или "2.5em").

type CSSUnits = "px" | "em" | "rem" | "%";
type CSSValue = `${number}${CSSUnits}`;

const width: CSSValue = "100px";
const height: CSSValue = "2.5em";
const fontSize: CSSValue = "1.2rem";
const margin: CSSValue = "10%";

function createCSSValue(value: number, unit: CSSUnits): CSSValue {
    return `${value}${unit}`;
}

const padding = createCSSValue(20, "px"); 
const lineHeight = createCSSValue(1.5, "em"); 
