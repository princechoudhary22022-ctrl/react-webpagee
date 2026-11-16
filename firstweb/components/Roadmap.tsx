import { steps } from "../data/resources";

type Props = {
  current: number;
  onSelect: (n: number) => void;
};

export default function Roadmap({ current, onSelect }: Props) {
  return (
    <ol className="roadmap">
      {steps.map((s) => (
        <li key={s.n}>
          <button className={current === s.n ? "on" : ""} onClick={() => onSelect(s.n)}>
            <span className="dot">{s.n}</span> {s.title}
          </button>
        </li>
      ))}
    </ol>
  );
}