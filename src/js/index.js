import $ from 'jquery';     //// من المهم استيراد الملفات بهذا الشكل و الترتيب
import Popper from 'popper.js';
// import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
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


// src/index.js

// التحقق إذا كانت الصفحة هي الصفحة الرئيسية فقط
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    // التحقق من أن العنصر navbar موجود في الصفحة
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        // التحقق من أن DOM قد تم تحميله بالكامل
        document.addEventListener('DOMContentLoaded', function () {
            window.addEventListener('scroll', function () {
                if (window.scrollY > 250) {  // إذا كان التمرير أكبر من 250px
                    navbar.classList.add('navbar-scrolled');  // إضافة الفئة (class)
                } else {
                    navbar.classList.remove('navbar-scrolled');  // إزالة الفئة (class)
                }
            });
        });
    }

}


document.addEventListener('DOMContentLoaded', function () {
    // الحصول على النموذج
    const form = document.getElementById('loginForm');

    // التحقق عند إرسال النموذج
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // منع الإرسال الفعلي للنموذج

        // التحقق من المدخلات
        let isValid = true;

        // التحقق من البريد الإلكتروني
        const email = document.getElementById('exampleFormControlInput1');
        if (!email.value || !email.checkValidity()) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        // التحقق من كلمة السر
        const password = document.getElementById('inputPassword');
        if (!password.value || !password.checkValidity()) {
            password.classList.add('is-invalid');
            isValid = false;
        } else {
            password.classList.remove('is-invalid');
        }

        // إذا كانت المدخلات صحيحة، يمكن إرسال النموذج
        if (isValid) {
            // يمكنك إضافة الكود هنا لإرسال النموذج أو تنفيذ عملية أخرى بعد التحقق من المدخلات.
            alert("تم تسجيل الدخول بنجاح!");
            window.location.href = "index.html";
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();  // منع الإرسال الفعلي للنموذج

        let isValid = true;

        // التحقق من اسم المستخدم
        const fullName = document.getElementById('fullName');
        if (!fullName.value) {
            fullName.classList.add('is-invalid');
            isValid = false;
        } else {
            fullName.classList.remove('is-invalid');
        }

        // التحقق من تاريخ الميلاد
        const dob = document.getElementById('dob');
        if (!dob.value) {
            dob.classList.add('is-invalid');
            isValid = false;
        } else {
            dob.classList.remove('is-invalid');
        }

        // التحقق من البريد الإلكتروني
        const email = document.getElementById('email');
        if (!email.value || !email.checkValidity()) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        // التحقق من كلمة المرور
        const password = document.getElementById('password');
        if (!password.value) {
            password.classList.add('is-invalid');
            isValid = false;
        } else {
            password.classList.remove('is-invalid');
        }

        // التحقق من تأكيد كلمة المرور
        const confirmPassword = document.getElementById('confirmPassword');
        if (!confirmPassword.value || confirmPassword.value !== password.value) {
            confirmPassword.classList.add('is-invalid');
            isValid = false;
        } else {
            confirmPassword.classList.remove('is-invalid');
        }

        // إذا كانت المدخلات صحيحة، يمكن إرسال النموذج
        if (isValid) {
            alert('تم تسجيل الحساب بنجاح!');
            // يمكن إضافة كود إرسال النموذج إلى الخادم هنا
            window.location.href = "index.html";
        }
    });
});
