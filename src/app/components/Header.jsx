import Image from 'next/image';
import Logo from '@/app/assets/logo.png';

export function Header() {
    return (
        <header className="fixed z-10 flex items-center h-16 border-b-4 border-blue-900 bg-stone-100" style={{width:"99.29%"}}>
            <div className="flex justify-center w-full">
                <Image src={Logo} alt="Logo" className="" />
            </div>
        </header>
    );
}
