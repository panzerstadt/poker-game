import { calculate } from "./ranking";
import { Card } from "./stuff";
import "./styles.css";

const chk = [
  { types: "clubs", hand: "K" },
  { types: "clubs", hand: "Q" },
  { types: "spades", hand: "10" },
  { types: "clubs", hand: "10" },
  { types: "clubs", hand: "9" },
] as Card[];

const result = calculate(chk);

document.getElementById("app").innerHTML = `
<h1>Poker Game</h1>
<span>your hand:</span><strong>${JSON.stringify(result)}</strong>
<br/><br/>
<div>
${JSON.stringify(chk, null, "</br>")}
</div>
`;
