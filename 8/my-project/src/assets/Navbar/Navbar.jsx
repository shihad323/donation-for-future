const Navbar = () => {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/faq", name: "FAQ" },
      ];
      
    return (
        <nav>
            <p className="text-red-800">shiahd</p>
            <ul className="md:flex">
            {
                routes.map(route=><li className="text-red-600" key ={route.id}> 
                <a href={`route.path`}>{route.name}</a></li>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;