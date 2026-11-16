import Image from 'next/image';
import Link from 'next/link';

export default function Lesson2Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 md:p-12 font-sans" dir="rtl">
      <div className="max-w-4xl mx-auto bg-slate-800/80 border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-md">
        <Link href="/" className="text-blue-400 text-sm font-medium hover:underline mb-6 inline-block">&larr; العودة للرئيسية</Link>

        <span className="text-blue-400 font-bold text-sm block mb-2">الدرس الثاني</span>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6">سيناريو درس تحليل البيانات</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            يستعرض الجدول التالي مراحل سير الدرس والأزمنة المحددة ودور كل من المعلمة والمتعلم وفقاً للسيناريو التعليمي المعتمد:
          </p>

          {/* إضافة صورة الدرس الثاني هنا */}
          <div className="my-8">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-950">
              <Image 
                src="/images/3.jpg" 
                alt="صورة سيناريو الدرس الثاني - تحليل البيانات" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <p className="text-center text-xs text-gray-400 mt-2">شكل توضيحي: سيناريو ومراحل سير الدرس الثاني</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600/30 border-b border-white/10 text-white">
                  <th className="p-3">المرحلة</th>
                  <th className="p-3">دور المعلمة</th>
                  <th className="p-3">دور المتعلم</th>
                  <th className="p-3">الزمن</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-3 font-bold text-blue-300">المقدمة والتمهيد</td>
                  <td className="p-3">عرض صورة درجات الطلاب وطرح أسئلة حول معرفة الأعلى ومتوسط الدرجات.</td>
                  <td className="p-3">الاستماع باهتمام والمشاركة في الإجابة.</td>
                  <td className="p-3">12 دقيقة</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-blue-300">مفهوم وتحليل البيانات</td>
                  <td className="p-3">عرض البيانات وتنظيمها في جداول وشرح الاستفادة منها.</td>
                  <td className="p-3">ملاحظة البيانات وتحديد المعلومات المهمة.</td>
                  <td className="p-3">13 دقيقة</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-blue-300">الأنشطة والتقييم</td>
                  <td className="p-3">طرح الأسئلة وتقديم التغذية الراجعة وتقييم الفهم.</td>
                  <td className="p-3">العمل في مجموعات والإجابة شفهياً وإلكترونياً.</td>
                  <td className="p-3">20 دقيقة</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-8 border-t border-white/10 flex justify-between">
            <Link href="/lesson1" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition font-medium">
              &rarr; الدرس الأول
            </Link>
            <Link href="/lesson3" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl transition font-medium">
              الدرس الثالث &larr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}