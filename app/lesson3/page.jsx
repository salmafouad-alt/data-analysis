import Image from 'next/image';
import Link from 'next/link';

export default function Lesson3Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 md:p-12 font-sans" dir="rtl">
      <div className="max-w-4xl mx-auto bg-slate-800/80 border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-md">
        <Link href="/" className="text-blue-400 text-sm font-medium hover:underline mb-6 inline-block">&larr; العودة للرئيسية</Link>

        <span className="text-blue-400 font-bold text-sm block mb-2">الدرس الثالث</span>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6">التقييم، المناقشة والختام</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          
          {/* إضافة صورة الدرس الثالث هنا */}
          <div className="my-6">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-950">
              <Image 
                src="/images/4.jpg" 
                alt="صورة الدرس الثالث - التقييم والمناقشة والختام" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <p className="text-center text-xs text-gray-400 mt-2">شكل توضيحي: مرحلة التقييم والمناقشة الختامية</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-blue-400 mb-3">أسئلة المناقشة والتقييم</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
              <li>ما المقصود بتحليل البيانات؟</li>
              <li>ما أهمية تحليل البيانات في اتخاذ القرارات؟</li>
              <li>كيف يساعد تحليل البيانات في مجال البرمجة والذكاء الاصطناعي؟</li>
              <li>ما الفرق بين البيانات والمعلومات؟</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-blue-400 mb-3">التغذية الراجعة والختام</h3>
            <p className="text-sm text-gray-300">
              تقوم المعلمة بتصحيح الإجابات وتقديم تغذية راجعة مناسبة، بينما يستمع المتعلمون إلى التلخيص ويشاركون في مراجعة المعلومات والتعبير عن أكثر جزء استفادوا منه خلال الحصة.
            </p>
          </div>

          <div className="pt-8 border-t border-white/10 flex justify-between">
            <Link href="/lesson2" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition font-medium">
              &rarr; الدرس الثاني
            </Link>
            <Link href="/Exam" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl transition font-medium">
              اختبر معلوماتك الآن &larr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}