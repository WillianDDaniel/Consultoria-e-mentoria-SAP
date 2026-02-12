import Nav from "../Nav";
import Social from "../Social";
import Contact from "../Contact";
import Dev from "../Dev";

export default function Footer() {
  return (
    <footer className="h-106.5 py-10">
        
        <div className="flex justify-center items-center flex-col  space-y-10">

          {/* Logo */}
          <img src="/lucas-lins-logo-black.png" alt="Lucas Lins Logo"
            className="
              h-10
            "
          />

          {/* Nav */}
          <Nav />

          {/* Social */}
          <Social />

          {/* Contact */}
          <Contact />

          {/* Dev */}
          <Dev />
        </div>

    </footer>
  );
}