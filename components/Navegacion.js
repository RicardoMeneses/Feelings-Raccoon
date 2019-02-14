import Link from 'next/link'
import Logo from '../raccoon.png'

const Navegacion = () => (
    <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container'>
            <Link href='/'><a className='navbar-brand'><img src={Logo} height='60' /></a></Link>
        </div>

        <style jsx>{`
            nav{
                background:#E11C4C;
                height:80px;
            }
        `}
        </style>
    </nav>
)

export default Navegacion;