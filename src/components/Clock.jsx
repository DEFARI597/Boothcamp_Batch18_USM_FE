import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString()); // inisiasi state awal jam

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString()); // memanggil fungsi setTime untuk update state time setiap 1 detik
        }, 1000); // 1000ms = 1 detik
        return () => clearInterval(interval); // membersihkan interval agar tidak terjadi kebocoran memori (memory leak)
    }, []); // [] digunakan agar useEffect hanya berjalan sekali saat komponen di-mount, jika tidak ada [] maka useEffect akan berjalan setiap kali komponen di-render

    return (
        <div>
            <h1>{time}</h1>
        </div>
    );
}
