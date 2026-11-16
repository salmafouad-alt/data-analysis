import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col items-center text-center w-full">
      
      {/* اسم الطالبة */}
      <div className="inline-flex items-center gap-3 bg-linear-to-r from-blue-950/80 via-slate-900/80 to-indigo-950/80 border border-blue-400/40 text-blue-200 px-6 py-3 rounded-full text-base sm:text-lg font-bold mb-8 shadow-xl backdrop-blur-md">
        <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
        <span>إعداد الطالبة: <span className="text-white font-extrabold text-3xl">سلمى فؤاد أحمد</span> | الفرقة الرابعة</span>
      </div>

      {/* كارت العنوان الرئيسي */}
      <div className="w-full max-w-4xl bg-slate-900/70 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-md mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6">
          مقدمة في تحليل البيانات <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-300 to-indigo-300 block mt-2">والذكاء الاصطناعي</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          يساعدنا تحليل البيانات في جمعها وتنظيمها واستخراج معلومات مفيدة لدعم اتخاذ القرارات في عصر التكنولوجيا والذكاء الاصطناعي.
        </p>
      </div>

      {/* الأزرار */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
        <Link 
          href="/lesson1" 
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition flex items-center gap-2"
        >
          <span>ابدأ الدرس الأول</span>
          <span>&larr;</span>
        </Link>
        <Link 
          href="/Exam" 
          className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl transition"
        >
          اختبر معلوماتك (Exam)
        </Link>
      </div>

      {/* كروت الدروس السريعة */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl text-right">
        <div className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
          <span className="text-blue-400 font-bold text-xs uppercase tracking-wider block mb-1">الدرس الأول</span>
          <h3 className="text-lg font-bold text-white mb-2">مفهوم تحليل البيانات</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">التعريف والأهداف المعرفية والمهارية والوجدانية للدرس.</p>
          <Link href="/lesson1" className="text-blue-400 font-semibold text-sm hover:underline">عرض الدرس &larr;</Link>
        </div>

        <div className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
          <span className="text-blue-400 font-bold text-xs uppercase tracking-wider block mb-1">الدرس الثاني</span>
          <h3 className="text-lg font-bold text-white mb-2">السيناريو التعليمي</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">مراحل سير الدرس، دور المعلمة والمتعلم، والأزمنة المحددة.</p>
          <Link href="/lesson2" className="text-blue-400 font-semibold text-sm hover:underline">عرض الدرس &larr;</Link>
        </div>

        <div className="bg-slate-900/50 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
          <span className="text-blue-400 font-bold text-xs uppercase tracking-wider block mb-1">الدرس الثالث</span>
          <h3 className="text-lg font-bold text-white mb-2">التطبيقات والتقييم</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">التغذية الراجعة، الأسئلة الشفهية والإلكترونية، وخاتمة الدرس.</p>
          <Link href="/lesson3" className="text-blue-400 font-semibold text-sm hover:underline">عرض الدرس &larr;</Link>
        </div>
      </div>

    </div>
  );
}