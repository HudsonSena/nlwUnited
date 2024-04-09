import nlwHeaderIcon from '../assets/nlwUnite-icon.svg';
import { NavLink } from './nav-link';

export function Header() {
    return (
        <div className='flex items-center gap-5'>
            <img src={nlwHeaderIcon} alt="" />

            <nav className='flex items-center gap-5 py-2'>
                <NavLink href='/eventos' className='text-zinc-300'>Eventos</NavLink>
                <NavLink href='/participantes'>Participantes</NavLink>
            </nav>
            
        </div>
    )
}