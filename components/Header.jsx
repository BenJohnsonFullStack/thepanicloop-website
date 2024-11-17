import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-start px-4 py-4 sm:py-6 bg-black text-white">
      <NavLinks />
    </header>
  );
}
