import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to : '/home', text: 'หน้าหลัก' },
  { to : '/cash', text: 'เติมเงิน' },
  { to : '/', text: 'Login' },
  { to : '/register', text: 'Sing-up' },

]

const userNav = [
  { to : '/', text: 'หน้าหลัก' },
  { to : '/cash', text: 'เติมเงิน' },
  { to : '/new', text: 'Hi,Korawit P:1,000$' },
]

export default function Header() {
  const {user, logout} = useAuth()
  const finalNav = user?.id ? userNav : guestNav

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Sever</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          { finalNav.map( el => (
            <li key={el.to} >
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          { user?.id && (
            <li>
              <Link to='#' onClick={hdlLogout}>logout</Link>
            </li>
          ) }
        </ul>
      </div>
    </div>
  );
}
