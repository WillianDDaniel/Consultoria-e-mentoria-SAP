export default function Header() {
  return (
    <header>
      <div className="
        flex h-18 justify-between items-center
        px-20 py-15
      ">
        <img src="/lucas-lins-logo-black.png" alt="Lucas Lins Logo"
          className="
            h-10
          "
        />

        <nav>
          <ul className="flex gap-15">
            <li>Inicio</li>
            <li>Serviços</li>
            <li>Sobre mim</li>
            <li>Portfolio</li>
            <li>Contato</li>
          </ul>
        </nav>

        <button className="bg-blue-200 px-8 py-2 rounded-md cursor-pointer">
          Contratar-me
        </button>
      </div>
    </header>
  );
}