export default function App() {
  return (
    <Hero />
  )
}
function Hero() {
  return (
    <header >
      <Navbar />
      <HeroText />
    </header>
  )
}

const navItem = [
  { name: 'Work', href: 'sau' },
  { name: 'Blog', href: 'sau' },
  { name: 'Testimonal', href: 'sau' },
  { name: 'Contact', href: 'sau' }
];
function Navbar() {
  return (
    <nav className="row">
      <img src="Asad-logo.png" alt="Asad-Logo" />
      <div className="nav-item-parent"  >
        {navItem.map(item => (
          <NavIcon itemObj={item} key={item.name} />
        ))}
      </div>
    </nav >
  )
}
function NavIcon({ itemObj }) {
  return (
    <a href={itemObj.href}>{itemObj.name}</a>
  )
}
function HeroText() {
  return (
    <div className="hero-text">
      <h1>Hi I'm Asad</h1>
      <p>Hello! This is Sayyed Asad Ullah. I'm a front end web developer and interface designer — who builds UX rich, accessible & performant websites </p>
      <div className="btn-parent">
        <a href="#" className="btn-dark">Need help...</a>
        <a href="#" className="btn-light">Visit Projects</a>
      </div>
    </div>
  )
}
