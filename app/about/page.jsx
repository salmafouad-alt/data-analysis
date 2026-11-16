import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 md:p-12 font-sans" dir="rtl">
      <div className="max-w-4xl mx-auto bg-slate-800/80 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-2xl">
        <Link href="/" className="text-blue-400 text-sm font-medium hover:underline mb-6 inline-block">&larr; العودة للرئيسية</Link>
        
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-400">عن محتوى مقرر تحليل البيانات</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
            <h2 className="text-xl font-bold text-white mb-2">الجهة الأكاديمية</h2>
            <p>كلية التربية النوعية - جامعة عين شمس</p>
            <p className="text-blue-300 font-medium mt-1">قسم تكنولوجيا التعليم</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/5 grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-sm text-gray-400 font-medium">اسم الدرس</h3>
              <p className="text-base font-bold text-white mt-1">البرمجة والذكاء الاصطناعي (تحليل البيانات)</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 font-medium">إعداد الطالبة</h3>
              <p className="text-base font-bold text-white mt-1">سلمى فؤاد أحمد</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-400 font-medium">الفرقة</h3>
              <p className="text-base font-bold text-white mt-1">الفرقة الرابعة</p>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
            <h2 className="text-xl font-bold text-white mb-3">وصف المشروع (data-analysis)</h2>
            <p>
              يُعد مشروع <strong>data-analysis</strong> تطبيقاً تعليمياً تفاعلياً مبنياً بـ Next.js و Tailwind CSS، مصمماً خصيصاً لعرض محتوى درس تحليل البيانات وتوظيفه في البرمجة والذكاء الاصطناعي، متضمناً الأهداف التعليمية، السيناريو التفصيلي، والاختبارات التفاعلية للطلاب[cite: 1].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}