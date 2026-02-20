'use client';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderProps {
    search: string;
    setSearch: (value: string) => void;
}

export default function HeaderMobile({ search, setSearch }: HeaderProps) {
    return (
        <div className="w-full h-max flex-col gap-1.5 flex text-black bg-(--bg-navbar)">
            <div className="h-max w-full p-2">
                <h1 className="text-[23px] font-bold text-(--text-navbar)">Daftar Seluruh Kontak</h1>
                <p className="text-lg text-(--text-navbar)">Universitas Pelita Bangsa</p>
            </div>
            <div className="flex items-center justify-center mb-2">
                <div className="relative">
                    <FontAwesomeIcon className="absolute top-2 left-3 w-6 text-(--text-navbar)" icon={faMagnifyingGlass}/>
                    <input className="border-2 border-black rounded-4xl pl-10 p-1 pr-3 text-sm w-full text-(--text-navbar) placeholder:text-(--text-navbar)" type="text" id="cari" placeholder="Cari Nama Kontak" value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>
            </div>
      </div>
    );
}