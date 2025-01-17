const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');


module.exports = {
    entry: './src/js/index.js',  // من أين يبدأ العمل
    stats: {
        children: true, // تم إضافة الخاصية بشكل صحيح
        errors: true,
    },

    output: {    // المكان الذي سوف يتم وضع الملفات المخرجة فيه
            filename: 'js/index.js',
            path: path.resolve(__dirname, 'docs'),
            publicPath: './',
        },


    module: {   // لتعامل مع التنسيقات و الصور و الخطوط
            rules: [
                {
                    test: /\.(sass|css|scss)$/,     // نهاية الملفات التي سنتعامل معها
                    
                    use: [  // يجب علينا تثبيت هذه الاضافات
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",       
                    ],
                },

                {                       // هنا قمنا بتعريف الصور
                    test: /\.(jpg|jpeg|png|gif|svg)$/, // تحديد أنواع الصور
                    type: 'asset/resource', // تحميل الصور كملفات منفصلة
                    generator: {
                        filename: 'images/[name][ext][query]', // حفظ الصور في مجلد images مع الحفاظ على أسمائها الأصلية
                    },
                },

                {   // لكي يتم تحميل الصور من ملف الhtml

                    test: /\.html$/i,

                    loader: 'html-loader',

                },


                {                       // هنا قمنا بتعريف الخطوط
                    test: /\.(svg|eot|woff|ttf)$/i,

                    use: [

                    {

                        loader: 'file-loader',

                        options: {

                        name: '[name].[ext]',   /// اسم الملف

                        outputPath: "fonts",    /// بقوم بأنشاء مجلد في bulid بهذا الاسم

                        }

                    },

                    ],
                },


            ],
        },

    devServer: {  // السيرفر المحلي

            static: {

                directory: path.join(__dirname, ' build'),

            },

            compress: true,    // لكي يقوم بضغط الملفات

            port: 9000,

        open: true,   // يفتح الموقع مباشرة

            devMiddleware: {

            writeToDisk: true, // لكي يقوم بكتابة ملف bulid عند التشغيل

            },

        },


        plugins: [
            new HtmlWebpackPlugin({
            template: './src/index.html',   // الملف الذي سوف يعمل عليه
            filename: 'index.html'    // اسم الملف عتدما يكون جاهز
            }),

            new HtmlWebpackPlugin({
                template: './src/singup.html',   
                filename: 'singup.html'    
            }),
            new HtmlWebpackPlugin({
                template: './src/login.html',   
                filename: 'login.html'    
            }),
            new HtmlWebpackPlugin({
                template: './src/egypt.html',   
                filename: 'egypt.html'    
            }),
            new HtmlWebpackPlugin({
                template: './src/tyurky.html',   
                filename: 'tyurky.html'    
            }),
                
            new CleanWebpackPlugin(),  // لأيقاف توليد الملفات
            new MiniCssExtractPlugin({
                filename: "css/style.css" // MiniCssExtractPlugin هو أداة قوية لتحسين الأداء في ويبباك عن طريق استخراج ملفات سسس من جافا إلى ملفات مستقلة. هذه الطريقة تساعد في تقليل حجم جافا وتحسين وقت التحميل، وتعزز التخزين المؤقت للمتصفح.
            })
        ],

        performance: {    //   هذا مفيد لتحديد حدود الحجم التي يجب أن تلتزم بها ملفات المشروع لتجنب المشاكل المتعلقة بالأداء. ويمكنك ضبط هذه القيم بناءً على متطلباتك.
            hints: false,   // لأظهار الأخطاء المتعلقة بالحجم
            maxEntrypointSize: 512000,  // ملفات الأدخال مثل index.js
            maxAssetSize: 512000   // متعلق بحجم الصور
        }

};