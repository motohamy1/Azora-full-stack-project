import "../App.css";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between w-full">
        {/* the logo at the left side of the navbar */}
        <div className="flex gap-1 p-4 items-center">
          <img src="/icons/Vector.svg" alt="Logo" className="w-6 h-6" />
          <h1 className="text-text">Azora</h1>
        </div>

        {/* the items  at the right side */}
        <div className="flex items-center gap-4 text-text text-sm">
          <div className="flex justify-center gap-4">
            <a href="">
              <span>How it works</span>
            </a>
            <a href="">
              <span>All apps</span>
            </a>
            <a href="">
              <span>Pricing</span>
            </a>
            <a href="">
              <span>For Teams</span>
            </a>
            <a href="">
              <span>Blog</span>
            </a>
            <a href="">
              <span>Podcast</span>
            </a>
          </div>

          <span> | </span>

          <div className="flex items-center justify-between gap-4">
            <img src="/icons/en.svg.png" alt="flag" className="w-4 h-4" />
            <span>Sign in </span>
          </div>
          <button className="rounded-xl border-2 border-text bg-transparent h-8 mr-2">
            <span className="p-6">Try free</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
