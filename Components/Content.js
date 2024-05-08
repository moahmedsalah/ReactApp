import { Link } from 'react-router-dom';
import './Content.css'


function Content() {
    return(
        <>
        <div className='pop'>
        <ul>
            <li><Link className='btn' to={'/Home'}>Home</Link></li>
            <li><Link className='btn' to={'/product'}>Products</Link></li>
            <li><Link className='btn' to={'/about'}>About</Link></li>
            <li><Link className='btn' to={'/services'}>services</Link></li>
            </ul>
        </div>
        </>
    )
}


export default Content;