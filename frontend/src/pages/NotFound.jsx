import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center px-4 font-sans">
      <h1 className="text-9xl font-extrabold text-blue-500 tracking-widest">404</h1>
      <div className="bg-blue-600 text-white px-3 py-1 text-sm rounded rotate-12 absolute font-semibold">
        Halaman Tidak Ditemukan
      </div>
      <p className="text-slate-400 text-lg mt-8 mb-6 max-w-md">
        Maaf, alamat URL yang kamu tuju tidak ditemukan atau sudah dipindahkan.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-200"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;