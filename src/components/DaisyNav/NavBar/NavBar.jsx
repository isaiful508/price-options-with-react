import { useState } from "react";
import Link from "../../Link/Link";

import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";


const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [{ id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '/dashboard', name: 'Dashboard' }];

    
    return (
        <nav className="text-black p-6 bg-yellow-200">
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <RxCross1></RxCross1> :
                    <CiMenuFries></CiMenuFries>
                }
                
            </div>

            <ul className={ ` md:flex duration-1000 absolute md:static
            ${open ? 'top-16' : '-top-60'}
            px-6 bg-yellow-200`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>
                    )
                }
            </ul>
        </nav>
    );
};

export default NavBar;

// export default routes;