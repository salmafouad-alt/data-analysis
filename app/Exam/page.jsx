'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const questions = [
  {
    id: 1,
    question: "ما هو الدور الأساسي لتحليل البيانات في عصر الذكاء الاصطناعي؟",
    options: [
      "تخزين الأرقام عشوائياً بدون استجابة",
      "جمع البيانات وتنظيمها ومعالجتها لاستخراج معلومات مفيدة لاتخاذ القرارات",
      "زيادة حجم الملفات الرقمية فقط",
      "الاستغناء عن أجهزة الكمبيوتر"
    ],
    answer: 1
  },
  {
    id: 2,
    question: "أي مما يلي يُعد من الأهداف المعرفية للدرس؟",
    options: [
      "أن يُعرّف الطالب مفهوم تحليل البيانات تعريفًا صحيحًا",
      "أن يهرب الطالب من حجرة التعلم",
      "أن يكتب برمجيات معقدة بدون دراسة",
      "أن يتجاهل الطالب الجداول والرسوم البيانية"
    ],
    answer: 0
  },
  {
    id: 3,
    question: "في سيناريو الدرس، كيف يتم قياس فهم الطلاب للمادة؟",
    options: [
      "من خلال الأسئلة الشفهية والأنشطة الإلكترونية التفاعلية",
      "عن طريق إلغاء الأنشطة تماماً",
      "بعدم طرح أي أسئلة",
      "من خلال قراءة النصوص فقط بصمت"
    ],
    answer: 0
  },
  {
    id: 4,
    question: "ما هي الخطوة الأولى التي تقوم بها المعلمة في تمهيد الدرس الثاني؟",
    options: [
      "إنهاء الحصة فوراً",
      "عرض صورة درجات الطلاب وطرح أسئلة حول معرفة الأعلى ومتوسط الدرجات",
      "توزيع واجبات منزلية صعبة",
      "تشغيل مقطع فيديو ترفيهي لا علاقة له بالدرس"
    ],
    answer: 1
  },
  {
    id: 5,
    question: "ما الفائدة الأساسية من استخدام الجداول والرسوم البيانية في تحليل البيانات؟",
    options: [
      "تصعيب قراءة المعلومات على المستخدم",
      "تنظيم البيانات واستخراج المعلومات المهمة بسهولة لفهم الظواهر",
      "ملء المساحات الفارغة في الصفحة فقط",
      "تقليل جودة عرض المعلومات"
    ],
    answer: 1
  },
  {
    id: 6,
    question: "من الأهداف الوجدانية المستهدفة في الدرس:",
    options: [
      "الالتزام بالأمانة والموضوعية عند تفسير النتائج وتقدير أهمية تحليل البيانات",
      "حفظ الكود البرمجي صماً دون فهم",
      "تجنب العمل الجماعي تماماً",
      "إهمال تنظيم البيانات"
    ],
    answer: 0
  },
  {
    id: 7,
    question: "ما هو الغرض من مرحلة الختام والتغذية الراجعة في نهاية الدرس؟",
    options: [
      "مغادرة الفصل مبكراً",
      "تصحيح الإجابات، تقديم التغذية الراجعة، ومراجعة وتلخيص أهم المعلومات",
      "زيادة صعوبة الأسئلة دون توضيح",
      "إلغاء الدروس السابقة"
    ],
    answer: 1
  }
];

export default function ExamPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 md:p-12 font-sans flex flex-col items-center justify-center" dir="rtl">
      <div className="w-full max-w-2xl bg-slate-800/80 border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-md">
        <Link href="/" className="text-blue-400 text-sm font-medium hover:underline mb-6 inline-block">&larr; العودة للرئيسية</Link>

        {/* إضافة صورة الاختبار 5.jpg */}
        {!showResult && (
          <div className="mb-6">
            <div className="relative w-full h-40 sm:h-52 rounded-2xl overflow-hidden border border-white/20 bg-slate-950 shadow-lg">
              <Image 
                src="/images/5.jpg" 
                alt="صورة اختبار تقييم المعلومات" 
                fill 
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          </div>
        )}

        {!showResult ? (
          <div>
            <div className="flex justify-between items-center mb-6 text-sm text-gray-400 border-b border-white/10 pb-4">
              <span>السؤال {currentQuestion + 1} من {questions.length}</span>
              <span>الدرجة الحالية: {score}</span>
            </div>

            <h2 className="text-2xl font-bold mb-6">{questions[currentQuestion].question}</h2>

            <div className="space-y-3 mb-8">
              {questions[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-right p-4 rounded-xl border transition ${
                    selectedOption === idx 
                      ? 'bg-blue-600 border-blue-400 text-white shadow-lg' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`w-full py-4 rounded-xl font-bold text-white transition shadow-lg ${
                selectedOption === null 
                  ? 'bg-gray-700 cursor-not-allowed opacity-50' 
                  : 'bg-blue-600 hover:bg-blue-500'
              }`}
            >
              {currentQuestion + 1 === questions.length ? 'إنهاء الاختبار وعرض النتيجة' : 'السؤال التالي'}
            </button>
          </div>
        ) : (
          <div className="text-center py-8">
            <h2 className="text-3xl font-extrabold mb-4 text-blue-400">نتيجة الاختبار</h2>
            <p className="text-xl mb-6">لقد حصلت على {score} من {questions.length}</p>
            <p className="text-gray-300 mb-8">
              {score === questions.length ? 'ممتاز! لقد استوعبت درس تحليل البيانات بكفاءة.' : 'أداء جيد! يمكنك مراجعة محتوى الدروس لتحسين النتيجة.'}
            </p>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowResult(false);
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition"
            >
              إعادة الاختبار
            </button>
          </div>
        )}
      </div>
    </div>
  );
}