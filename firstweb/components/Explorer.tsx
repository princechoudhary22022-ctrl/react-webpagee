"use client";
import { useEffect, useState } from "react";
import { resources } from "../data/resources";
import Roadmap from "./Roadmap";
import SearchFilter from "./SearchFilter";
import ResourceCard from "./ResourceCard";

export default function Explorer() {
  const [step, setStep] = useState(0);
  const [level, setLevel] = useState("Sab");
  const [query, setQuery] = useState("");
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("done");
    if (saved) setDone(JSON.parse(saved));
  }, []);

  function toggle(name: string) {
    const next = done.includes(name) ? done.filter((d) => d !== name) : [...done, name];
    setDone(next);
    localStorage.setItem("done", JSON.stringify(next));
  }

  const list = resources.filter(
    (r) =>
      (step === 0 || r.step === step) &&
      (level === "Sab" || r.level === level) &&
      JSON.stringify(r).toLowerCase().includes(query.toLowerCase())
  );
  const percent = Math.round((done.length / resources.length) * 100);

  return (
    <section id="explorer">
      <h2>Tumhara roadmap</h2>
      <div className="progress"><div style={{ width: percent + "%" }} /></div>
      <p className="mute">{done.length} / {resources.length} complete ({percent}%)</p>

      <Roadmap current={step} onSelect={setStep} />
      <button className="reset" onClick={() => setStep(0)}>Saare steps dikhao</button>

      <div id="sites" />
      <SearchFilter query={query} level={level} onQuery={setQuery} onLevel={setLevel} />

      <div className="grid">
        {list.map((r) => (
          <ResourceCard key={r.name} item={r} done={done.includes(r.name)} onToggle={() => toggle(r.name)} />
        ))}
      </div>
      {list.length === 0 && <p className="mute">Kuch nahi mila.</p>}
    </section>
  );
}