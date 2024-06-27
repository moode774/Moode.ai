const API_KEY = 'MgHcrQ8QL3BTmtyVFlp2IjDJC9cwsMh'؛
const API_URL = 'https://api.ai21.com/studio/v1/j2-jumbo-instruct/complete'; // رابط API لـ AI21 Jurassic-2

وظيفة تزامن الحصول على. الرد (رسالة.) {الرد (رسالة.) {
 حاول. {. {. 
 استجابة const = الانتظار. الانتظار جلب (Api_url، { 
 الطريقة: "POST"، . "POST"، . 
 MEME: رؤوس: { { 
 "التفويض": "الدبيرة $ {API_KEY}"، . 
 "نوع المحتوى": "التطبيق / الابن" 
 }, 
 الجسم: JSON.stringify ({ stringify ({ 
 موجه: رسالة، 
 maxTokens: 50, // يمكنك تعديل عدد الرموز المسموح بها في الرد 50, // يمكنك تعديل عدد الرموز المسموح بها في الرد 
 درجة الحرارة: 0.7, // يمكنك تعديل درجة الإبداع في الرد 0.7, // يمكنك تعديل درجة الإبداع في الرد 
 stopSequences: [] // يمكنك إضافة تسلسلات لإيقاف توليد النص [] // يمكنك إضافة تسلسلات لإيقاف توليد النص 
 }) 
 }); 

 بيانات CONST = انتظار الاستجابة.json () ؛ json () ؛ 
 إرجاع البيانات.completions[0].data.text; // استخراج الرد من الاستجابة completions[0].data.text; // استخراج الرد من الاستجابة 
 } الصيد (خطأ..) { 
 وحدة التحكم.error ("خطأ في الاتصال بـ AI21 API":، خطأ.) ؛ error ("خطأ في الاتصال بـ AI21 API":، خطأ.) ؛ 
 العودة. حدث خطأ في الاتصال بالخادم'; '; '; 
 } 
}

وظيفة. إضافةMessage (نوع، نص.) {إضافةMessage (نوع، نص.) {
 const chatBox = وثيقة.getElementById ("chat-box") ؛ 
 عنصر الرسالة = وثيقة.createElement ('div') ؛ createElement ('div') ؛ 
 عنصر الرسالة.classList.add ('رسالة'، نوع.) قائمة الطبقة.add ('رسالة'، نوع.) ؛ 
 عنصر الرسالة.textالمحتوى = نص؛ نص المحتوى = نص؛ 
 chatBox.appendالطفل (عنصر الرسالة) ؛ appendالطفل (عنصر الرسالة) ؛ 
 chatBox.scrollTop = chatBox.scrollHeight. scrollTop = chatBox.scrollHeight. 
}

مقبض وظيفةKeyPress (الحدث) {وظيفةKeyPress (الحدث) {
 إذا (event.key === 'Enter') { 
 مدخلات const = document.getElementById ("المدخلات") ؛ const = document.getElementById ("المدخلات") ؛ 
 رسالة const = input.value.trim () ؛ const = input.value.trim () ؛ 
 إذا (رسالة!== ") { 
 إضافة رسالة ('مرسلة'، رسالة) ؛ رسالة ('مرسلة'، رسالة) ؛ 
 المدخلات.القيمة = "؛ القيمة = "؛ 
 getReply (رسالة).ثم (الرد => إضافة رسالة ('تلقي'، الرد)) ؛ 
 } 
 } 
}

// رسالة ترحيب ابتدائية.
addMessage ('تم استلامها', 'مرحبا ياابني كيف اخدمك اليوم؟');

وثيقة.getElementById ("المدخلات").addEventListener ("keypress"، handleKeyPress) ؛getElementById ("المدخلات").addEventListener ("keypress"، handleKeyPress) ؛
