/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function SubjectsPage() {
  const subjects = [
    {
      id: 1,
      title: 'الدرس الأول: مقدمة عن تحليل البيانات',
      desc: 'مفهوم تحليل البيانات والأهداف المعرفية والمهارية والوجدانية[cite: 1].',
      href: '/lesson1',
      borderColor: 'border-r-blue-500',
      btnBg: 'bg-blue-600 hover:bg-blue-500',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'الدرس الثاني: السيناريو التعليمي',
      desc: 'مراحل الدرس، دور المعلمة والمتعلم والأزمنة المحددة[cite: 1].',
      href: '/lesson2',
      borderColor: 'border-r-indigo-500',
      btnBg: 'bg-indigo-600 hover:bg-indigo-500',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'الدرس الثالث: التقييم والختام',
      desc: 'أسئلة المناقشة، تقييم الفهم، والتغذية الراجعة وخاتمة الدرس[cite: 1].',
      href: '/lesson3',
      borderColor: 'border-r-cyan-500',
      btnBg: 'bg-cyan-600 hover:bg-cyan-500',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: 'الاختبار التفاعلي (Exam)',
      desc: 'اختبر فهمك لمحتوى تحليل البيانات والذكاء الاصطناعي[cite: 1].',
      href: '/Exam',
      borderColor: 'border-r-emerald-500',
      btnBg: 'bg-emerald-600 hover:bg-emerald-500',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 md:p-12 font-sans" dir="rtl">
      <div className="max-w-4xl mx-auto bg-slate-800/80 border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-md">
        <Link href="/" className="text-blue-400 text-sm font-medium hover:underline mb-6 inline-block">
          &rarr; العودة للرئيسية
        </Link>

        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">مقرر تحليل البيانات (Subjects)</h1>
        <p className="text-gray-300 mb-8">اختر القسم أو الدرس المطلوب استعراضه:</p>

        <div className="grid gap-6">
          {subjects.map((sub) => (
            <div 
              key={sub.id} 
              className={`bg-white/5 border border-white/10 ${sub.borderColor} border-r-4 rounded-2xl overflow-hidden hover:border-white/20 transition flex flex-col md:flex-row items-center justify-between group shadow-lg`}
            >
              {/* Header Image */}
              <div className="relative w-full md:w-48 h-40 md:h-full shrink-0">
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  src={sub.image} 
                  alt={sub.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 grow flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition">{sub.title}</h3>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">{sub.desc}</p>
                </div>

                {/* Styled Button Link */}
                <div className="mt-6 flex justify-end">
                  <Link 
                    href={sub.href}
                    className={`${sub.btnBg} text-white text-sm font-bold px-6 py-2.5 rounded-xl shadow-md transition flex items-center gap-2`}
                  >
                    <span>عرض الدرس</span>
                    <span className="text-lg">&larr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}