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
            path: path.resolve(__dirname, 'bulid'),
            publicPath: '/',
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
            new CleanWebpackPlugin(),  // لأيقاف توليد الملفات
            new MiniCssExtractPlugin({
                filename: "css/style.css"
            })
        ],

        performance: {    // لأنشاء مجلد و ملف ال css
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }

};