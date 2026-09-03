import SparkSkanskaDemo from "./spark-demo/SparkSkanskaDemo";
import SkanskaPropertyDemo from "./skanska-property-demo/SkanskaPropertyDemo";

function DemoHub() {
  return (
    <main className="demo-hub">
      <div className="demo-hub__mark">NEXUS</div>
      <p>NOSMO TECHNOLOGY</p>
      <h1>Nexus x SKANSKA MVP</h1>
      <div className="demo-hub__choices">
        <a href="/spark-skanska-demo">
          <small>SPARK 4.0</small>
          <strong>Residential Circular Construction</strong>
          <span>Open demo →</span>
        </a>
        <a href="/skanska-property-demo">
          <small>COMMERCIAL OPERATIONS</small>
          <strong>Property and Building Graph</strong>
          <span>Open demo →</span>
        </a>
      </div>
    </main>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/spark-skanska-demo" || path === "/residential") return <SparkSkanskaDemo />;
  if (path === "/skanska-property-demo" || path === "/property") return <SkanskaPropertyDemo />;
  return <DemoHub />;
}
