function Header() {
  return (
    <header className="bg-flatfind-gray border-b border-flatfind-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="text-base font-medium text-flatfind-dark hover:text-flatfind-primary">
              FlatFind
            </a>
          </div>
          <nav className="md:flex space-x-10">
            <a href="#" className="text-base font-medium text-flatfind-dark hover:text-flatfind-primary">
              Home
            </a>
            <a href="#" className="text-base font-medium text-flatfind-dark hover:text-flatfind-primary">
              About
            </a>
            <a href="/Contact" className="text-base font-medium text-flatfind-dark hover:text-flatfind-primary">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
