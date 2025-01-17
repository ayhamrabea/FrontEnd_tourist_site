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


document.addEventListener('DOMContentLoaded', function () {

   

    
    // دالة عامة للتحقق من صحة الحقول
    function validateField(field, condition, errorMessage) {
        if (!condition) {         // إذا كان الحقل غير صالح
            field.classList.add('is-invalid');
            if (errorMessage) {
                let error = field.nextElementSibling;
                if (!error || !error.classList.contains('error-message')) {
                    error = document.createElement('div');
                    error.classList.add('error-message', 'text-danger', 'mt-1');
                    field.parentNode.appendChild(error);
                }
                error.textContent = errorMessage;
            }
            return false;
        } else {
            field.classList.remove('is-invalid');
            const error = field.nextElementSibling;
            if (error && error.classList.contains('error-message')) {
                error.remove();
            }
            return true;
        }
    }

    // نموذج تسجيل الدخول
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let isValid = true;

            // التحقق من البريد الإلكتروني
            const email = document.getElementById('exampleFormControlInput1');
            isValid &= validateField(email, email.value && email.checkValidity());

            // التحقق من كلمة المرور
            const password = document.getElementById('inputPassword');
            isValid &= validateField(password, password.value);

            // إذا كانت المدخلات صحيحة
            if (isValid) {
                alert('تم تسجيل الدخول بنجاح!');
                window.location.href = 'index.html';
            }
        });
    }

    // نموذج تسجيل الحساب
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let isValid = true;

            // التحقق من اسم المستخدم
            const fullName = document.getElementById('fullName');
            isValid &= validateField(fullName, fullName.value, 'يرجى إدخال الاسم الكامل.');

            // التحقق من تاريخ الميلاد
            const dob = document.getElementById('dob');
            isValid &= validateField(dob, dob.value, 'يرجى إدخال تاريخ الميلاد.');

            // التحقق من البريد الإلكتروني
            const email = document.getElementById('email');
            isValid &= validateField(email, email.value && email.checkValidity(), 'يرجى إدخال بريد إلكتروني صالح.');

            // التحقق من كلمة المرور
            const password = document.getElementById('password');
            isValid &= validateField(password, password.value, 'يرجى إدخال كلمة المرور.');

            // التحقق من تأكيد كلمة المرور
            const confirmPassword = document.getElementById('confirmPassword');
            isValid &= validateField(
                confirmPassword,
                confirmPassword.value && confirmPassword.value === password.value,
                'يجب أن تتطابق كلمة المرور مع التأكيد.'
            );

            // إذا كانت المدخلات صحيحة
            if (isValid) {
                alert('تم تسجيل الحساب بنجاح!');
                window.location.href = 'index.html';
            }
        });
    }



    if (window.location.pathname === '/egypt.html'){
        const contentDiv = document.getElementById('content');
        // استبدال كلمة "مصر" بعنصر <span> مخصص
        contentDiv.innerHTML = contentDiv.innerHTML.replace(/مصر/g, '<span class="highlight">مصر</span>');
    
    }
});






