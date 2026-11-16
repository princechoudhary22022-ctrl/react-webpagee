export type Resource = {
    name: string;
    url: string;
    step: number;
    level: "Beginner" | "Medium" | "Advanced";
    price: string;
    what: string;
    use: string;
};

export const steps = [
    { n: 1, title: "HTML, CSS aur JS basics" },
    { n: 2, title: "JavaScript pakki karo" },
    { n: 3, title: "React seekho" },
    { n: 4, title: "Next.js seekho" },
    { n: 5, title: "Animation aur UI" },
    { n: 6, title: "Deploy aur practice" },
];

export const resources: Resource[] = [
    { name: "W3Schools", url: "https://www.w3schools.com", step: 1, level: "Beginner", price: "Free", what: "HTML, CSS, JS ke chhote tutorials.", use: "Bilkul shuruat mein basics seekhne ho." },
    { name: "MDN Web Docs", url: "https://developer.mozilla.org", step: 1, level: "Beginner", price: "Free", what: "Web ka sabse bharosemand reference.", use: "Kisi tag ya property ka matlab dekhna ho." },
    { name: "CodeWithHarry", url: "https://www.youtube.com/@CodeWithHarry", step: 1, level: "Beginner", price: "Free", what: "Hindi mein HTML, JS, React playlists.", use: "Hindi mein easy tarike se seekhna ho." },
    { name: "javascript.info", url: "https://javascript.info", step: 2, level: "Medium", price: "Free", what: "Modern JavaScript ka gehra tutorial.", use: "Async, closures clear karne hon." },
    { name: "Chai aur Code", url: "https://www.youtube.com/@chaiaurcode", step: 2, level: "Medium", price: "Free", what: "Hindi mein JS aur React ki series.", use: "Projects ke saath concept samajhna ho." },
    { name: "React Docs", url: "https://react.dev", step: 3, level: "Medium", price: "Free", what: "React ki official site aur tutorials.", use: "React shuru karo ya hooks dekhne ho." },
    { name: "CodeSandbox", url: "https://codesandbox.io", step: 3, level: "Beginner", price: "Free", what: "Browser mein React chalane ka editor.", use: "Bina install kiye React try karna ho." },
    { name: "Next.js Docs", url: "https://nextjs.org/docs", step: 4, level: "Medium", price: "Free", what: "Routing aur SEO ka official guide.", use: "Fast, SEO-friendly website banani ho." },
    { name: "Aceternity UI", url: "https://ui.aceternity.com", step: 5, level: "Medium", price: "Free + Paid", what: "Animated React + Tailwind components.", use: "Portfolio ko wow look dena ho." },
    { name: "Magic UI", url: "https://magicui.design", step: 5, level: "Medium", price: "Free + Paid", what: "Copy-paste animated components.", use: "Landing page pe glow aur text effects chahiye." },
    { name: "Vercel", url: "https://vercel.com", step: 6, level: "Beginner", price: "Free + Paid", what: "Next.js ki company ki hosting.", use: "Site live karni ho." },
    { name: "GitHub", url: "https://github.com", step: 6, level: "Beginner", price: "Free", what: "Code save karne ki jagah.", use: "Project save karna aur portfolio banana ho." },
];