import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className='logo'>BookStay Hotels</span>
            <div className="navItems">
                <button className='navButton'>Connect your wallet</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar