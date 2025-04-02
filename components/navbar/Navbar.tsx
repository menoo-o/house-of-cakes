import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import './nav.css'

export default function Navbar() {
  return (
    <>
      <div className="desktop-navbar">
        <DesktopNav />
      </div>
      <div className="mobile-navbar">
        <MobileNav />
      </div>
    </>
  );
}
