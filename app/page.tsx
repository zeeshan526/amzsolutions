const features = [
  {
    title: "Modern Stack",
    text: "Next.js 16 with React 19 gives you the current production-ready frontend foundation.",
    icon: "rocket",
  },
  {
    title: "Tailwind Styling",
    text: "Utility-first styling lets you build a refined, fast storefront layout with minimal CSS.",
    icon: "paint brush",
  },
  {
    title: "Semantic UI",
    text: "High-quality components make navigation and content blocks easier to assemble and polish.",
    icon: "check circle",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-800">
      <div className="mx-auto max-w-5xl">
        <div className="ui segment padded very raised">
          <h1 className="ui huge header center aligned">Welcome to AMZ Website</h1>
          <p className="mb-6 text-center text-lg text-slate-600">
            A modern Next.js storefront using Tailwind utilities and Semantic UI components.
          </p>

          <div className="ui buttons centered">
            <button className="ui primary button large">
              <i className="shopping cart icon" /> Shop Now
            </button>
            <button className="ui secondary button large">Learn More</button>
          </div>
        </div>

        <div className="ui three cards mt-8">
          {features.map((feature) => (
            <div className="ui card" key={feature.title}>
              <div className="content">
                <i className={`${feature.icon} icon big teal`} />
                <div className="header mt-3">{feature.title}</div>
                <div className="description">{feature.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
