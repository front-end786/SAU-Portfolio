export default function App() {
  return (
    <Hero />
  )
}
function Hero() {
  <header>
    <Navbar />
  </header>
}
function Navbar() {
  return (
    <nav>
      <img src="public/Asad-logo.png" alt="Asad-Logo" />
      <div className="nav-item-parent">
        <a href="/">Work</a>
        <a href="/projects">Testimonails</a>
        <a href="/resume">Blog</a>
        <a href="/">Contact</a>
      </div>
    </nav>
  )
}