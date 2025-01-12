import $ from 'jquery';     //// من المهم استيراد الملفات بهذا الشكل و الترتيب
import Popper from 'popper.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '@laylazi/bootstrap-rtl/dist/js/bootstrap.bundle.min.js';
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all'


import AOS from 'aos';
import 'aos/dist/aos.css';

// تفعيل المكتبة
AOS.init({
    duration: 300, // مدة التأثير بالمللي ثانية
    easing: 'ease-in-out', // نوع الحركة
    offset: 200, // المسافة قبل بدء التأثير
    delay: 75, // تأخير البداية بالمللي ثانية
});



//// background navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar'); // تحديد العنصر
    if (window.scrollY > 250) {  // إذا كان التمرير أكبر من 50px
        navbar.classList.add('navbar-scrolled');  // إضافة الفئة (class)
    } else {
        navbar.classList.remove('navbar-scrolled');  // إزالة الفئة (class)
    }
});






// login-invalid
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // منع الإرسال الفعلي للنموذج

    const email = document.getElementById('exampleFormControlInput1');
    const password = document.getElementById('inputPassword');

    // تحقق من المدخلات
    let isValid = true;

    if (!email.value) {
        email.classList.add('is-invalid');  // إضافة is-invalid للبريد الإلكتروني إذا كان فارغًا
        isValid = false;
    } else {
        email.classList.remove('is-invalid'); // إزالة is-invalid إذا كان المدخل صحيحًا
    }

    if (!password.value) {
        password.classList.add('is-invalid');  // إضافة is-invalid لكلمة السر إذا كانت فارغة
        isValid = false;
    } else {
        password.classList.remove('is-invalid'); // إزالة is-invalid إذا كان المدخل صحيحًا
    }

    if (isValid) {
        alert("تم تسجيل الدخول بنجاح!");
        // أضف الكود هنا لإرسال النموذج أو القيام بإجراء آخر
    }
});
