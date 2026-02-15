'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
import dosen from "./data/kontakDosen";

export default function Home() {

  return (
    <div className="min-w-max max-w-max h-max flex flex-col items-center justify-center">
      <div className="header">
        <div className="judul">
          <h1 className="text-3xl font-bold">Daftar Kontak Dosen</h1>
          <p className="text-lg">Universitas Pelita Bangsa</p>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative ml-6 ">
            <FontAwesomeIcon className="absolute top-3 left-3 w-6" icon={faMagnifyingGlass}/>
            <input className="border-2 rounded-4xl pl-10 p-1.5 pr-3 text-lg w-md" type="text" id="cari" placeholder="Cari Nama Dosen" />
          </div>
        </div>
      </div>
      <div className="body-card h-100 w-full rounded-tr-2xl rounded-bl-2xl rounded-br-2xl p-4">
        <div className="flex flex-col items-center justify-start h-full bg-gray-500 rounded-xl overflow-y-scroll box-border">
          {dosen.map((d) => (
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
        </div>
      </div>
    </div>
  );
}
