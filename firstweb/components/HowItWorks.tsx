const items = [
  { title: "Seekho", text: "Basics se React aur Next.js tak, sahi order mein." },
  { title: "Banao", text: "Animation libraries se attractive site banao." },
  { title: "Live karo", text: "Deploy karo aur portfolio mein dikhao." },
];

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      {items.map((item, i) => (
        <div className="box" key={item.title}>
          <b>{i + 1}. {item.title}</b>
          <span>{item.text}</span>
        </div>
      ))}
    </section>
  );
}