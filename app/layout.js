import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

export const metadata = {
  title: 'مقرر تحليل البيانات والذكاء الاصطناعي',
  description: 'إعداد الطالبة سلمى فؤاد أحمد',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-indigo-950 text-white font-sans flex flex-col justify-between relative overflow-x-hidden">
        
        {/* تأثيرات الإضاءة الخلفية */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* الشريط العلوي */}
        <header className="w-full container mx-auto px-6 py-6 flex justify-between items-center border-b border-white/10 relative z-20 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900/90 border border-blue-400/30 px-3 py-1.5 rounded-2xl shadow-lg flex items-center gap-2">
              <Image 
                src="/images/2.jpeg" 
                alt="شعار كلية تكنولوجيا التعليم" 
                width={130} 
                height={130}
                className="object-contain rounded-xl"
              />
              <span className="text-sm font-bold text-white hidden sm:inline">كلية تكنولوجيا التعليم</span>
            </div>

            <span className="hidden md:inline text-lg font-medium text-gray-300 border-r border-white/20 pr-3 mr-1">
              مقرر تحليل البيانات
            </span>
          </div>
          
          <nav className="flex items-center gap-5 text-lg font-semibold">
            <Link href="/" className="text-blue-400 transition hover:text-blue-300">الرئيسية</Link>
            <Link href="/subjects" className="text-white hover:text-blue-400 transition">المقرر</Link>
            <Link href="/lesson1" className="text-white hover:text-blue-400 transition">الدرس الأول</Link>
            <Link href="/lesson2" className="text-white hover:text-blue-400 transition">السيناريو</Link>
            <Link href="/lesson3" className="text-white hover:text-blue-400 transition">الختام</Link>
            <Link href="/Exam" className="text-white hover:text-blue-400 transition">الاختبار</Link>
          </nav>
        </header>

        {/* محتوى الصفحات */}
        <main className="grow relative z-10">
          {children}
        </main>

        {/* الفوتر */}
        <footer className="w-full container mx-auto px-6 py-6 border-t border-white/10 text-center text-gray-400 text-sm relative z-20">
          <p>© {new Date().getFullYear()} إعداد الطالبة سلمى فؤاد أحمد | جميع الحقوق محفوظة</p>
        </footer>

      </body>
    </html>
  );
}