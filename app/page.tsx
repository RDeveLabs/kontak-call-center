'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
import dosen from "./data/kontakDosen";
import callCenter from "./data/callCenter";
import Header from "./component/header";

export default function Home() {
    const [search, setSearch ] = useState("");
    const [menu, setMenu] = useState("dosen");
    console.log(menu);
    const tabDosen = () => {
        setMenu("dosen");
    }
    const tabCallCenter = () => {
        setMenu("callCenter");
    }
    const filterDosen = dosen.filter((d) => d.nama.toLowerCase().includes(search.toLowerCase()));
    const filterCallCenter = callCenter.filter((c) => c.nama.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="min-w-max max-w-max h-max flex flex-col items-end justify-center">
      <Header search={search} setSearch={setSearch} />
      <div className="body-card h-100 w-full rounded-tr-2xl rounded-bl-2xl p-4">
        <div className="flex flex-col items-center justify-start h-full bg-gray-500 rounded-xl overflow-y-scroll box-border">
          {menu === "dosen" && filterDosen.map((d) => (
                <div key={d.id} className="flex items-center justify-between p-2 m-2 text-black bg-white rounded-lg shadow-md w-[calc(100%-1rem)] shrink-0">
                  <div>
                    <h2 className="text-xl font-bold">{d.nama}</h2>
                    <table>
                      <tbody>
                        <tr>
                          <th className="text-left font-normal">NIDN</th>
                          <th className="text-left font-normal pl-1 pr-1">:</th>
                          <td className="text-sm">{d.nidn}</td>
                        </tr>
                        <tr>
                          <th className="text-left font-normal">Email</th>
                          <th className="text-left font-normal pl-1 pr-1">:</th>
                          <td className="text-sm">{d.email}</td>
                        </tr>
                        <tr>
                          <th className="text-left font-normal">Telepon</th>
                          <th className="text-left font-normal pl-1 pr-1">:</th>
                          <td className="text-sm">{d.telp}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex items-center justify-center mr-10 gap-10">
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${d.email}`} target="_blank" rel="noopener noreferrer">
                      <Image src="/gmail.svg" alt="gmail" width={40} height={40} />
                    </a>
                    <a href={`https://wa.me/+62${d.telp}`} target="_blank" rel="noopener noreferrer">
                      <Image src="/whatsapp.svg" alt="whatsapp" width={40} height={40} />
                    </a>
                  </div>
                </div>
              ))}
            {menu === "callCenter" && filterCallCenter.map((c) => (
                <div key={c.id} className="flex items-center justify-between p-2 m-2 text-black bg-white rounded-lg shadow-md w-[calc(100%-1rem)] shrink-0">
                  <div>
                    <h2 className="text-xl font-bold">{c.nama}</h2>
                    <table>
                      <tbody>
                        <tr>
                          <th className="text-left font-normal">Telepon</th>
                          <th className="text-left font-normal pl-1 pr-1">:</th>
                          <td className="text-sm">{c.telp}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex items-center justify-center mr-10 gap-10">
                    <a href={`https://wa.me/+62${c.telp}`} target="_blank" rel="noopener noreferrer">
                      <Image src="/whatsapp.svg" alt="whatsapp" width={40} height={40} />
                    </a>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <div className="tab flex justify-center gap-1">
        <button onClick={tabDosen} className={`border-2 rounded-bl-2xl p-1 pr-2 pl-2 hover:bg-gray-200 ${menu === "dosen" ? "bg-gray-200" : ""}`}>Kontak Dosen</button>
        <button onClick={tabCallCenter} className={`border-2 rounded-br-2xl p-1 pr-2 pl-2 hover:bg-gray-200 ${menu === "callCenter" ? "bg-gray-200" : ""}`}>Call Center</button>
      </div>
    </div>
  );
}
