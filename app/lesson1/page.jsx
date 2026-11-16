import Image from 'next/image';
import Link from 'next/link';

export default function Lesson1() {
  return (
    <div className="container mx-auto px-6 py-12 text-white max-w-4xl" dir="rtl">
      
      {/* البادج ورأس الدرس */}
      <div className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-1.5 rounded-full text-sm mb-4 font-medium">
        مقرر البرمجة والذكاء الاصطناعي
      </div>
      
      <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-blue-400">
        الدرس الأول: مقدمة في تحليل البيانات
      </h1>
      
      {/* مقدمة الدرس */}
      <div className="bg-slate-900/60 border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-md mb-8">
        <p className="text-gray-200 leading-relaxed text-lg mb-4">
          في عصر التكنولوجيا والذكاء الاصطناعي، أصبحت البيانات جزءًا أساسيًا من حياتنا اليومية، فنحن نتعامل مع كميات هائلة من البيانات في مختلف المجالات، مثل التعليم والصحة والتجارة.
        </p>
        <div className="bg-blue-950/60 border-r-4 border-blue-500 p-4 rounded-xl text-blue-200">
          <p className="font-bold text-white text-lg mb-1">تساؤل هام: 🤔</p>
          <p className="text-sm md:text-base">
            هل يمكننا الاستفادة من هذه البيانات دون تنظيمها وفهمها؟ هنا يأتي دور <strong>تحليل البيانات</strong>، الذي يساعدنا على جمع البيانات وتنظيمها ومعالجتها، ثم استخراج معلومات مفيدة منها تساعدنا على فهم الظواهر واتخاذ القرارات الصحيحة.
          </p>
        </div>
      </div>

      {/* عرض صورة الدرس بأبعاد واضحة ومتناسقة */}
      <div className="my-10">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-950">
          <Image 
            src="/images/1.jpg" 
            alt="صورة الدرس الأول - البرمجة والذكاء الاصطناعي وتحليل البيانات" 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            priority
            className="object-contain p-2 hover:scale-105 transition duration-500"
          />
        </div>
        <p className="text-center text-xs text-gray-400 mt-2">شكل توضيحي: البيانات والتكنولوجيا في البرمجة والذكاء الاصطناعي</p>
      </div>

      {/* الأهداف التعليمية */}
      <div className="space-y-6 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
          <span>🎯</span>
          <span>الأهداف التعليمية للدرس</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* الأهداف المعرفية */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl border-t-4 border-t-blue-500">
            <h3 className="text-lg font-bold text-blue-400 mb-3">أولًا: الأهداف المعرفية</h3>
            <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
              <li>تعريف مفهوم تحليل البيانات تعريفًا صحيحًا.</li>
              <li>التمييز بين أنواع البيانات المختلفة.</li>
              <li>توضيح أهمية تحليل البيانات في البرمجة والذكاء الاصطناعي.</li>
              <li>ذكر خطوات تحليل البيانات بصورة صحيحة.</li>
              <li>تفسير النتائج المستخرجة من تحليل البيانات.</li>
            </ul>
          </div>

          {/* الأهداف المهارية */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl border-t-4 border-t-indigo-500">
            <h3 className="text-lg font-bold text-indigo-400 mb-3">ثانيًا: الأهداف المهارية</h3>
            <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
              <li>تصنيف البيانات وفقًا لأنواعها المختلفة.</li>
              <li>تنظيم مجموعة من البيانات في جداول مناسبة.</li>
              <li>استخراج المعلومات المهمة من البيانات المعطاة.</li>
              <li>استخدام الرسوم البيانية في تمثيل البيانات.</li>
              <li>استنتاج نتائج صحيحة من تحليل البيانات.</li>
            </ul>
          </div>

          {/* الأهداف الوجدانية */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl border-t-4 border-t-cyan-500">
            <h3 className="text-lg font-bold text-cyan-400 mb-3">ثالثًا: الأهداف الوجدانية</h3>
            <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
              <li>تقدير أهمية تحليل البيانات في اتخاذ القرارات.</li>
              <li>الحرص على الدقة في جمع وتنظيم البيانات.</li>
              <li>الالتزام بالأمانة والموضوعية عند تفسير النتائج.</li>
              <li>التعاون مع الزملاء في تنفيذ الأنشطة.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* أزرار التنقل */}
      <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
        <Link 
          href="/" 
          className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold transition inline-flex items-center gap-2"
        >
          <span>&rarr;</span>
          <span>العودة للرئيسية</span>
        </Link>

        <Link 
          href="/lesson2" 
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition inline-flex items-center gap-2"
        >
          <span>الدرس الثاني</span>
          <span>&larr;</span>
        </Link>
      </div>

    </div>
  );
}