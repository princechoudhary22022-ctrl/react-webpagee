type Props = {
  query: string;
  level: string;
  onQuery: (v: string) => void;
  onLevel: (v: string) => void;
};

const levels = ["Sab", "Beginner", "Medium", "Advanced"];

export default function SearchFilter({ query, level, onQuery, onLevel }: Props) {
  return (
    <div>
      <input
        className="search"
        placeholder="Search karo: animation, hindi, deploy..."
        value={query}
        onChange={(e) => onQuery(e.target.value)}
      />
      <div className="chips">
        {levels.map((l) => (
          <button key={l} className={level === l ? "on" : ""} onClick={() => onLevel(l)}>
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}