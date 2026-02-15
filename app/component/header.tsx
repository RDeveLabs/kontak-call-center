'use client';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderProps {
    search: string;
    setSearch: (value: string) => void;
}

export default function Header({ search, setSearch }: HeaderProps) {
    return (
        <div className="header">
            <div className="judul">
            <h1 className="text-3xl font-bold">Daftar Seluruh Kontak</h1>
            <p className="text-lg">Universitas Pelita Bangsa</p>
            </div>

            <div className="flex items-center justify-center">
            <div className="relative ml-6 ">
                <FontAwesomeIcon className="absolute top-3 left-3 w-6" icon={faMagnifyingGlass}/>
                <input className="border-2 rounded-4xl pl-10 p-1.5 pr-3 text-lg w-md" type="text" id="cari" placeholder="Cari Nama Kontak" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            </div>
      </div>
    );
}