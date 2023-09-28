import { Link } from 'react-router-dom'
const Header=()=>{
    return (
        <nav>
        <ul>
            <li>
                <Link to='/'>HOME</Link>
            </li>
            <li>
                <Link to='/ControlledComponent'>Controlled Component</Link>
            </li>
            <li>
                <Link to='/UnControlledComponent'>UnControlled Component</Link>
            </li>
            <li>
                <Link to='/User'>User</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Header