export default function App() {
  return (
    <Hero />
  )
}
function Hero() {
  return (
    <header>
      <Navbar />
      <HeroText />
    </header>
  )
}
function Navbar() {
  return (
    <nav>
      <img src="Asad-logo.png" alt="Asad-Logo" />
      <div className="nav-item-parent">
        <a href="/">Work</a>
        <a href="/projects">Testimonails</a>
        <a href="/resume">Blog</a>
        <a href="/">Contact</a>
      </div>
    </nav>
  )
}

function HeroText() {
  return (
    <div>
      <h1>Hi I'm Asad</h1>
      <p>Hello! This is Sayyed Asad Ullah. I'm a front end web developer and interface designer — who builds UX rich, accessible & performant websites </p>
      <a href="#">Need help...</a>
    </div>
  )
}