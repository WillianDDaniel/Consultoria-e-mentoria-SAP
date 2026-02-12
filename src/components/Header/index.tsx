import Nav from "../Nav";

export default function Header() {
  return (
    <header>
      <div className="
        flex h-18 justify-between items-center
        px-20 py-15
      ">
        {/* Logo */}
        <img src="/lucas-lins-logo-black.png" alt="Lucas Lins Logo"
          className="
            h-10
          "
        />

        {/* Nav */}
        <Nav />

        {/* CTA */}
        <button className="bg-blue-200 px-8 py-2 rounded-md cursor-pointer">
          Contratar-me
        </button>
      </div>
    </header>
  );
}