import type { Resource } from "../data/resources";

type Props = {
  item: Resource;
  done: boolean;
  onToggle: () => void;
};

export default function ResourceCard({ item, done, onToggle }: Props) {
  return (
    <article className="card">
      <div className="tags">
        <span>Step {item.step}</span>
        <span>{item.level}</span>
        <span>{item.price}</span>
      </div>
      <h3>{item.name}</h3>
      <p>{item.what}</p>
      <p className="mute"><b>Kab use karein:</b> {item.use}</p>
      <div className="row">
        <a href={item.url} target="_blank" rel="noopener noreferrer">Website kholo</a>
        <label>
          <input type="checkbox" checked={done} onChange={onToggle} /> Seekh liya
        </label>
      </div>
    </article>
  );
}