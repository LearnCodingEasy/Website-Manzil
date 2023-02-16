/** Gulp Help
 *
 *
 * Done: Create Project
 * قالب المشروع
 * => npm init
 *
 *
 * Done: Create Structure
 * انشاء مجلد
 * => project
 * => dist
 * انشاء ملف
 * => gulpfile.js
 *
 *
 * Done: Install
 *   عالمي فى النظام Gulp تنزيل
 * => npm i gulp -g
 * => npm install --global gulp-cli
 *  Gulp اصدار
 * => gulp -v
 *  فى المشروع Gulp تنزيل
 * => npm i --save-dev gulp
 *  فى المشروع بي اصدار معين Gulp تنزيل
 * => npm i --save-dev gulp@3.9.1
 * File: Work With Gulp File
 * Gulp استدعاء
 * => const gulp = require("gulp");
 * 
 * 
 * 1
 * Done: Concat All Files In One File
 * اضافة لدامج الملفات زاى ملفات Css & Js
 * Link: (https://www.npmjs.com/package/gulp-concat)
 * concat تنزيل الاضافة
 * => npm install --save-dev gulp-concat
 * File: Work With Gulp File
 * Concat استدعاء
 * => const concat = require("gulp-concat");
 * Concat استخدام
 * => .pipe(concat("all.js"))
 * 
 * 2
 * Done: AutoPrefixer For Css 3 Properties
 *  Prefixer اضافة خاصة بى
 *  الخاصة المتصفح فى خواص الس اس 3
 * Link: (https://www.npmjs.com/package/gulp-autoprefixer)
 * AutoPrefixer تنزيل الاضافة
 * => npm install --save-dev gulp-autoprefixer
 * File: Work With Gulp File
 * AutoPrefixer استدعاء
 * => const autoprefixer = require("gulp-autoprefixer");
 * AutoPrefixer استخدام
 * => .pipe(autoprefixer("last 2 versions"))
 *
 * 3
 * Done: Compile Sass Files
 * Sass اضافة خاص بى تشغيل ال
 * Link: (https://www.npmjs.com/package/gulp-sass)
 * Sass تنزيل الاضافة
 * => npm install sass gulp-sass --save-dev
 * File: Work With Gulp File
 * Sass استدعاء
 * => const sass = require("gulp-sass")(require("sass"));
 * Sass استخدام
 * => .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
 *
 * 4
 * Done: Compile Pug
 * Pug اضافة خاص بى تشغيل ال
 * Link: (https://www.npmjs.com/package/gulp-pug)
 * Sass تنزيل الاضافة
 * => npm i gulp-pug
 * File: Work With Gulp File
 * Pug استدعاء
 * => const pug = require("gulp-pug");
 * Pug استخدام
 * => .pipe(pug({ pretty: true }))
 *
 * 5
 * Done: Local Server
 * Local Server اضافة خاص بى تشغيل ال
 * Link: (https://www.npmjs.com/package/static-server)
 * Local Server تنزيل الاضافة
 * => npm i static-server -save
 * File: Work With Gulp File
 * انشاء ملف
 * => server.js
 * داخل الملف
 * => var StaticServer = require("static-server");
 * => var server = new StaticServer({
          rootPath: "./dist/",
          port: 1010,
      });
 * => server.start(function() {
        console.log("Server Started At Port ", server.port);
      });
 * Local Server استخدام
 * => require("./server.js");
 *
 * 
 * 6
 * Done: Live Reload
 * Live Reload اضافة خاص بى تشغيل ال
 * Link: (https://www.npmjs.com/package/gulp-livereload)
 * Live Reload تنزيل الاضافة
 * => npm install --save-dev gulp-livereload
 * File: Work With Gulp File
 * live Reload استدعاء
 * => const livereload = require('gulp-livereload');
 * live Reload استخدام
 * Tasks استخدام الاضافة فى جميع ال
 * => .pipe(livereload());
 * Tasks Watch استخدام الاضافة فى
 * =>  livereload.listen();
 * Live Reload اضافة الاسكرابت الخاص بى ال
 * Index.Pug فى ملف ال 
 * =>  script(src="http://localhost:35729/livereload.js")
 *
 *
 * 7
 * Done: Source Maps
 * Source Maps اضافة خاص بى تشغيل ال
 * Link: (https://www.npmjs.com/package/gulp-sourcemaps)
 * Source Maps تنزيل الاضافة
 * => npm i gulp-sourcemaps --save-dev
 * File: Work With Gulp File
 * Source Maps استدعاء
 * => const sourcemaps = require("gulp-sourcemaps");
 * Source Maps استخدام
 * => .pipe(sourcemaps.init())
 * => .pipe(sourcemaps.write("."))
 *
 *
 * 8
 * Done: Minifying Js Files With Uglify
 * Uglify اضافة بتضغاط ملف الجافا اسكربت
 * Link: (https://www.npmjs.com/package/gulp-uglify)
 * Uglify تنزيل الاضافة
 * => npm install --save-dev gulp-uglify
 * File: Work With Gulp File
 * Uglify استدعاء
 * => const uglify = require("gulp-uglify");
 * Uglify استخدام
 * => .pipe(uglify())
 *
 *
 * 9
 * Done: Show Notification With Notify
 * Notify اضافة تنبية بى انو التاسك تم الانتهاء
 * Link: (https://www.npmjs.com/package/gulp-notify)
 * Notify تنزيل الاضافة
 * => npm i gulp-notify --save-dev
 * File: Work With Gulp File
 * Notify استدعاء
 * => const notify = require("gulp-notify");
 * Notify استخدام
 * => .pipe(notify("Task ... Is Done"));
 *
 *
 * 10
 * Done: Babel
 * Babel اضافة تنبية بى انو التاسك تم الانتهاء
 * ECMAScript 2015+ الى كود JavaScript تحويل  كود
 * Link: (https://www.npmjs.com/package/gulp-babel)
 * Babel تنزيل الاضافة
 * => npm i gulp-babel
 * => npm install --save-dev gulp-babel @babel/core @babel/preset-env
 * File: Work With Gulp File
 * Babel استدعاء
 * => const babel = require("gulp-babel");
 * Babel استخدام
 * => .pipe(babel({presets: ["@babel/preset-env"],}))
 *
 *
 * Number-11
 * Done: Compress Files With Zip
 * Zip اضافة لعمال المشروع مضغوط
 * Link: (https://www.npmjs.com/package/gulp-zip)
 * Babel تنزيل الاضافة
 * => npm install --save-dev gulp-zip
 * File: Work With Gulp File
 * Zip استدعاء
 * => const zip = require("gulp-zip");
 * Compress فى تاسك الى  Zip استخدام
 * => // ===== Task Zpi Compress =====
    gulp.task("compress", function () {
    return gulp
        .src("dist/**\/*")
        .pipe(zip("website.zip"))
        .pipe(gulp.dest("."))
        .pipe(notify("Files Is Compressed To Zip "));
    });
 * 
 * Number-12
 * Done: Upload Files With Ftp 
 * Vinyl-Ftp اضافة تحميل الموقع على الاستضافة 
 * Link: (https://www.npmjs.com/package/vinyl-ftp)
 * Vinyl-Ftp تنزيل الاضافة
 * => npm i vinyl-ftp 
 * File: Work With Gulp File
 * Vinyl-Ftp استدعاء
 * => const ftp = require('vinyl-ftp');
 * Vinyl-Ftp استخدام
 * => .pipe(babel({presets: ["@babel/preset-env"],}))
 *
 *
 * Number-13
 * Done: typescript
 * typescript 
 * Link: (https://www.npmjs.com/package/gulp-typescript)
 * typescript تنزيل الاضافة
 * => npm install gulp-typescript
 * File: Work With Gulp File
 * typescript استدعاء
 * => const ts = require("gulp-typescript");
 * typescript استخدام
 * => .pipe(ts({noImplicitAny: true, removeComments: false, sourceMap: true, noImplicitReturns: true, noUnusedLocals: true, noUnusedParameters: false, allowUnreachableCode: false, outFile: 'output.js' }))
 *
 * 
 * => var ts = require('gulp-typescript');
 * 
 * Number-14
 * Done: webp
 * webp اضافة لضغط الصور
 * Link: (https://www.npmjs.com/package/gulp-webp)
 * webp تنزيل الاضافة
 * => npm install --save-dev gulp-webp
 * File: Work With Gulp File
 * webp استدعاء
 * => const webp = require("gulp-webp");
 * webp استخدام
 * => .pipe(webp())
 * 
 * Number-15
 * ? Json Server
 * Json Server اضافة لعمال ملاف جسان كا دات بيس
 * Link: (https://www.npmjs.com/package/gulp-json-server)
 * Json Server تنزيل الاضافة
 * => npm install -g json-server
 * => npm i gulp-json-server
 * Json Server استخدام
 * json-server --watch db.json
 *
 *
 * Done: Input And Output
 * هو مصدار الملفات اللى انت شغال عليه Src
 * => .src("project/pug/*.pug")
 *
 * هى  ميثاد بياخد مناك الملف و تعمل عليه التعديلات Pipe
 * المطلوبة فى جميع التاسكات ورا بعض
 *
 *  اللى هو مسار الفلدار اللى هيخارج فية الملاف Gulp.Dest
 * => .pipe(gulp.dest("dist"))
 * !: طريقة اختيار الملفات
 * نقل ملف من خلال اسم الملف
 * => .src("project/index.html")
 * Html نقل جميع الملفات اللى نوعها
 * => .src("project/*.html")
 * نقل جميع الملفات بجميع الامتدادات
 * => .src("project/*.*")
 * نقل ملفات معينة انت عاوز تنقلها هى بس
 * => .src(['project/index.html', 'project/style.css'])
 * نقل جميع الملفات ما عدا ملف معين
 * => .src(['project/scss/**\/*.scss', '!test.scss'])
 *
 * =>
 * Link: Tasks
 *
// ===== Task Html =====
gulp.task("html", function () {
  return gulp
    .src("project/pug/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(livereload())
    .pipe(notify("Html Task Is Done"));
});

// ===== Task Scss  =====
gulp.task("scss", function () {
  return gulp
    .src("project/css/scss/**\/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(concat("style.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload())
    .pipe(notify("Scss Task Is Done"));
});

// ===== Task Libs Css =====
gulp.task("libs-css", function () {
  return gulp
    .src("project/libs-css/**\/*")
    .pipe(gulp.dest("dist/css/libs"))
    .pipe(livereload())
    .pipe(notify("Libs Css Task Is Done"));
});

// ===== Task Js =====
gulp.task("js", function () {
  return gulp
    .src("project/js/**\/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(sourcemaps.init())
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js"))
    .pipe(notify("Js Task Is Done"))
    .pipe(livereload());
});

// ===== Task Ts =====
gulp.task("ts", function () {
  return (
    gulp
      .src("project/ts/**\/*.ts")
      .pipe(
        ts({
          // 9 قم بتمكين الإبلاغ عن الخطأ عن التعبيرات والإعلانات بنوع
          // 9 'any' type.
          // 9 Enable error reporting for expressions and declarations with an implied 'any' type.
          noImplicitAny: true,
          // 9 إزالة التعليقات في ملف
          // 9 JavaScript
          // 9 Remove Comments In File Javascript
          removeComments: false,
          // 9 خريطة المصدر للملف
          // 9 JavaScript
          // 9 Source Map For File Javascript
          sourceMap: true,
          // 9 سوف تحقق من جميع مسارات التعليمات البرمجية في
          // 9 Function
          // 9 لضمان إرجاع قيمة
          // 9 Will Check All Code Paths In A Function To Ensure They Return A Value
          noImplicitReturns: true,
          // 9 الإبلاغ عن الأخطاء عن المتغيرات المحلية غير المستخدمة
          // 9 Report Errors On Unused Local Variables
          noUnusedLocals: true,
          // 9 الإبلاغ عن الأخطاء على
          // 9 Parameters
          // 9 غير المستخدمة في
          // 9 Function .
          // 9 Report Errors On Unused Parameters In Functions.
          noUnusedParameters: false,
          // 9 قم بتعطيل الإبلاغ عن الخطأ للحصول على رمز لا يمكن الوصول إليها
          // 9 Disable error reporting for unreachable code
          allowUnreachableCode: false,
          // outFile: "../js/testTs1.js",
          outFile: "output.js",
          // outFile: "output.js",
          // outFile: "output.js",
        })
      )
      .pipe(
        babel({
          presets: ["@babel/preset-env"],
        })
      )
      // .pipe(flatten())
      // .pipe(sourcemaps.init())
      .pipe(concat("scriptTsToJs.js"))
      .pipe(uglify())
      // .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("dist/js"))
      .pipe(notify("Ts Task Is Done"))
      .pipe(livereload())
  );
});

// ===== Task Libs Js =====
gulp.task("libs-js", function () {
  return gulp
    .src("project/libs-js/**\/*")
    .pipe(gulp.dest("dist/js/libs"))
    .pipe(livereload())
    .pipe(notify("Libs js Task Is Done"));
});

// ===== Task Images Compress =====
gulp.task("compressImages", function () {
  return gulp
    .src("project/images/**\/*")

    .pipe(webp())
    .pipe(gulp.dest("dist/images"));
});

// ===== Task Zpi Compress =====
gulp.task("compress", function () {
  return gulp
    .src("dist/**\/*")
    .pipe(zip("website.zip"))
    .pipe(gulp.dest("."))
    .pipe(notify("Files Is Compressed To Zip "));
});

// ===== Task Ftp =====
gulp.task("deploy", function () {
  var conn = ftp.create({
    host: "ftpupload.net",
    user: "epiz_29431807",
    password: "vz5QI9xYpD",
    parallel: 10,
  });

  return (
    gulp
      .src(["dist/**\/*.*"], { base: ".", buffer: false })
      // .pipe(conn.newer("/public_html"))
      // .pipe(conn.newer("/htdocs/output"))
      .pipe(conn.newer("/htdocs"))
      //   .pipe(conn.dest("/public_html"))
      // .pipe(conn.dest("/htdocs/output"))
      .pipe(conn.dest("/htdocs"))

      .pipe(livereload())
      .pipe(notify("Files Is Upload To Host "))
  );
});

// ===== Task Watch =====
gulp.task("watch", function () {
  require("./server.js");
  livereload.listen();
  // = Html
  gulp.watch("project/pug/**\/*.pug", gulp.series("html"));
  // = Css
  gulp.watch("project/css/scss/**\/*.scss", gulp.series("scss"));
  gulp.watch("project/libs-css/**\/*", gulp.series("libs-css"));
  // = Javascript
  gulp.watch("project/js/**\/*.js", gulp.series("js"));
  // gulp.watch("project/ts/**\/*.ts", gulp.series("ts"));
  gulp.watch("project/libs-js/**\/*", gulp.series("libs-js"));
  // = Images
  gulp.watch("project/images/**\/*", gulp.series("compressImages"));
  // = Zip
  gulp.watch("dist/**\/*.*", gulp.series("compress"));
  // = Upload
  // gulp.watch("dist/**\/*.*", gulp.series("deploy"));
});
// = Default
gulp.task("default", gulp.series("watch"));

 * To Run 
 * => gulp watch
 */

/**
 * ? Github Help
 *
 * ? CLONE REPOSITORY
 * نثخ المستودع من الجات اب
 * Todo : => git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
 *
 * _________________________________________________________________
 * _________________________________________________________________
 *
 * ? Status
 * مراجعة التغييرات
 * Todo : => git status
 * _________________________________________________________________
 * _________________________________________________________________
 *
 * ? GIT ADD
 * Staging Area أضف جميع الملفات الجديدة والمتغيرة إلى
 * Todo : => git add *
 * Todo : => git add File-Name
 * Todo : => Viscode
 * !      => Icone Git And Click Write Click And choose Stage Changes
 *
 * _________________________________________________________________
 * _________________________________________________________________
 *
 * ? GIT RESET
 * ازالة ملف من Staging Area
 * يقوم هذا الأمر بازالة ملاف من
 * (Staging Area)
 *  لكى يتم عدام اضافته الملفات مع الملفات
 *  اللتى سوف يتمم اضافتها الى المشروع على
 * Github
 * Todo: => git reset head FileName
 * Todo : => Viscode
 * !      => Icone Git And Click Write Click And choose UnStage Changes
 *
 * _________________________________________________________________
 * _________________________________________________________________
 *
 * ? GIT COMMIT
 * يقوم هذا الأمر بارسال الملاف من
 *  ( Staging Area ) الى ( Local Repo )
 * قم بإنشاء
 * ( New Commit )
 *  يحتوي على المحتويات الحالية للفهرس
 * ورسالة السجل المحددة التي تصف التغييرات.
 * Todo: => git commit -m "Commit Explain Code"
 *
 * _________________________________________________________________
 * _________________________________________________________________
 *
 * ? GIT BRANCH
 * يقوم هذا الأمر طباعة جميع الفروع الموجودة فى
 * ( Local Repo )
 * Todo: => git branch
 *
 * الامر ده بيجيب جميع الفروع الموجودة فى المشروع
 * Todo: => git branch -a
 *
 * انشاء فارع جديد
 * Todo: => git branch newBranch
 *
 * الدخول فى الفرع الذى تم انشائة
 * Todo: => git checkout newBranch
 *
 * حذف فرع من الفروع
 * -d
 *  بيحزاف التعديلات التى تم عمل
 * Marging
 *  ليها
 * Todo: => git branch -d newBranch
 *
 *
 * حذف فرع من الفروع
 * -D
 * بيحزاف التعديلات التى تم عمل
 * Marging
 * ليها لو لم يتم عمل لها
 * Marg
 * Todo: => git branch -D newBranch
 *
 * انشاء فارع و الدخول جوه الفرع الجديد
 * Todo: => git checkout -b newBranch
 *
 * للتنقال بين الفروع
 * Todo: => git checkout branchName
 *
 * علشان تغير اسم الفارع اللى انت انشاتو
 * Todo: => git branch -m NewName
 *
 *
 * _________________________________________________________________
 * _________________________________________________________________
 *
 * ? GIT REMOTE
 * يقوم هذا الأمر طباعة
 * ( Remote Name )
 * الخاص بى المشروع على
 * ( Github )
 * Todo: => git remote
 *
 * _________________________________________________________________
 * _________________________________________________________________
 *
 * ? GIT PUSH
 * يقوم هذا الأمر بارسال الملاف من
 * ( Local Repo ) الى ( Remote Repo )
 * ارسال الملفات من مساحة العمال الخاصة بى المشروع على
 * ( Pc )
 *  الى المشروع على
 * ( Github )
 * Todo: => git push origin main
 *
 * _________________________________________________________________
 * _________________________________________________________________
 *
 * ? GIT PULL
 * دمج التغييرات من مستودع بعيد إلى الفرع الحالي
 * تحميل جميع التغيرات اللتى تامت فى
 * ( Repository )
 * ( فى حالة لو شغال مع Team )
 *  ودمج التغييرات فى المشروع على
 * ( Pc )
 * Todo: => git pull
 * Todo: => git pull origin
 * Todo: => git pull origin main
 *
 * _________________________________________________________________
 * _________________________________________________________________
 *
 * ? GIT CONFIG
 *
 * قائمة الاعدادات الخاصة بى ال
 * ( Git )
 * Todo: => git config -l
 * Todo: => git config --list
 *
 * يقوم هذا الامر بفتح الاعدادات
 * ( Manual )
 *  فى المتصفح
 * Todo: => git help config
 *
 * يقوم هذا الامر بعرض القيمة المطلوبة
 * Todo: => git config --global user.email
 *
 * يقوم هذا الامر بتغير القيمة المطلوبة
 * Todo: => git config --global user.email "mail@gmail.com"
 *
 * يقوم هذا الامر بعرض مصادار الملفات التى يتم جالب الاعدادات و البيانات منها
 * Todo: => git config --l --show-origin
 *
 * يقوم هذا الامر بحذف القيمة المطلوب حذفها
 * Todo: => git config --global --unset user.email
 *
 * يقوم هذا الامر بفتح مححر النصوص للتعديل
 * فى ملف الاعدادات الخاصة بى ال
 * ( Git )
 * Todo: => git config --global --edit
 *
 * يقوم هذا الامر بخراج الكنفاج الموجود فى الجهاز
 * Todo: => cat ~/.gitconfig
 *
 * ____________________________________
 * ? ALIASES
 * Aliases طريقة استخدام الاسم المستعار فى الاوامر
 * بتكتاب اسم الاختصار اللى انت عاوز تعملو و
 * بعدين بتكتب اسم الاملا اللى عمالو اختصار
 * الالياس مش بيلغى الامر
 * هو بيعمل اسم مستعار بس ممكن تكتب بى الامر عادى
 *
 * Todo: => git config --global alias.st status
 *
 * طريقة الاستخدام
 * Todo: =>git st
 *
 * الامر اللي فيه مسافه بتكتبو بين ضابال كوت
 * Todo: => git config --global alias.cm "commit -m"
 *
 * _________________________________________________________________
 * _________________________________________________________________
 *
 * ? PUBLIC KEY
 *
 *انشاء
 * Public Key
 * Todo: => ssh-keygen -t rsa -b 4096 -C "YourEmail@example.com"
 *
 * الامر دة بيجيب محتوى اى فيل
 * Todo: => cat ~/.ssh/id_rsa.pub
 *
 * ! اضافة ال
 * ! Public Key
 * ! الى
 * ! Github
 * بتنسخ محتو الملف
 * بتروح على الجات اب و على ال
 * Seting => SSH and GPG Keys => New SSH Kay
 *
 *
 * التواصل مع ال
 * Public Key
 * Todo: => ssh -T git@github.com
 *
 * _________________________________________________________________
 * _________________________________________________________________
 *
 * ? Repo From Existing Project
 *
 *  طريقة انشاء ريبو من الجهاز ورافع المشروع
 *  على الجات اب لو امشروع موجود و جاهز بالفعل
 *
 *
 * بتروح على الجات اب و بتعمال نيو ريبو
 * متضفش ملاف
 * ReadMe
 * تبدا تاخد الاوامر و تتاكد انو انت على Ssh
 *
 * Todo: => git init
 *
 * اضافة الملف الجديد فى
 * Staging Area
 * Todo: => git add *
 *
 * انشاء كمانت على التغييرات التي تامت فى الملف
 * Todo: => git commit -m "Created The Main Project Structure"
 *
 *  بتغيار البرانش من
 *  Master الى Main
 * Todo: => git branch -M main
 *
 * الامر داه بياخد الريبو اللى انت انشاتو و بيحطو على الريموات
 * Todo: => git remote add origin git@github.com:LearnCodingEasy/reposName.git
 *
 * الامر داه بيرفاع الملاف على الجات اب
 * و حرف اليو معناه يجيب اخر تعديلات من على الجات
 * لانو انت لو شغال مع تيم و بيرفعو حجات يجيب
 * اخر تعديلات تامت و بعدين يرفاع الملفات الجديدة اللى انت عملتها
 * Todo: => git push -u origin main
 * Todo: => git push -u origin master
 *
 * _________________________________________________________________
 * _________________________________________________________________
 *
 * ? MERGING
 * علشان اعمال دامج بين البرانش الاساسى اللى فى الجات
 * و الفارع اللى انا انشاتو
 * بتدخال على الفارع الاساسى اللى فى الجات اب
 * اللى هو المين او الماستار على حساب انت الفارع الاساسى ايه عنداك
 *
 *
 *
 * Todo: => git checkout -b newBranch
 * Todo: => touch index.html
 * Todo: => git add *
 * Todo: => git commit -m "Commit"
 * Todo: => git checkout main
 *
 * وبعدين بتكتب الامر ده و بتكتب اسم الفارع اللى انت انشاتو
 * Todo: => git merge branchName
 *
 * تقدار تمسح الفرع بعد ما عملتلو
 * Merge
 * Todo: => git branch -d branchName
 *
 * ارسال الملفات من مساحة العمال الخاصة بى المشروع على
 * ( Pc )
 * الى المشروع على
 * ( Github )
 * Todo: => git push origin main
 *
 *
 * ? __________________________________________
 *
 * ? طريقة انشاء اكتر من فرع
 * ? و كل فرع لية التعديلات اللى بتبنى بيهء المشرو لاخرة
 *
 *
 * Todo: => git checkout -b newBranch
 * Todo: => touch index.html
 * Todo: => git add *
 * Todo: => git commit -m "Commit"
 * Todo: => git push origin branchName
 *
 *
 * _________________________________________________________________
 * _________________________________________________________________
 *
 * ? STASH
 * Stash
 *  هو مخباء لملفات انت مش عاوزها تترفع دلوات على المشروع
 *  و فى نفس الواقت ميظهاروش فى امر الجات استيتاس
 *  اللى بيعرفك ايه الجديد فى المشروع
 *
 * Todo: => touch BuildWebsite.txt
 * Todo: => git add *
 * Todo: => git stash
 * Todo: => git pull origin main
 * Todo: => git push origin main
 *
 * قامة الملفات الموجوده فى الصندوق
 * Todo: => git stash list
 *
 *  فى حالة انو انا عاوز و انا بضيف الملف فى الصندوق عاوز
 *  Save تاكسات يفكرتى ايه الملاف اللى فى الصندوق
 * Todo: => git stash save "Your Massage"
 *
 * الامر ده بيجيب الملفات اللى انا خبيتها فى الصندوق
 * علشان استخدما او ارفعها
 * و امر الباب بيجيب اخر ملاف تم اضافتو فى الصندوق
 * Todo: => git stash pop
 *
 *  الابلاي بيرجع اخر ملاف حتيطو فى الصندوق
 *  بس بيسيبو فى الصندوق زاى ماهوة
 * Todo: => git stash apply
 *
 * لو عاوز تجيب صندوق معين بى الايدي الخاص بيه
 * Todo: => git stash pop stash@{1}
 *
 * لو عاوز تحذاف اخر صندوق
 * Todo: => git stash drop
 *
 * لو عاوز تحذاف صندوق بي رقمو فى الصناديق
 * Todo: => git stash drop stash@{1}
 *
 * امر الشاو بيجيب اخر ملاف تام تاخباته
 * Todo: => git stash show
 *
 * لو عاوز تعراف الفيل اللى جوه الصندوق بتكتاب رقم الايدي
 * Todo: => git stash show stash@{1}
 *
 * امر الكلير بيحزاف جميع الصناديق بى الملفات اللى جوها
 * Todo: => git stash clear
 *
 * _________________________________________________________________
 * _________________________________________________________________
 *
 * ? CLEAN
 *  حزف الملفات اللى زيادة فى المشروع
 *
 * الامر داه بيعرضلاك الملفات اللى انت هتحزفها
 * لو انت نزلته من الاساجان ارياء
 *
 * لانو انت لو عاوز ترجاع ملاف الى الاستاجان اريا بترجعو قابل الحزف
 * Todo: => git clean -n
 *
 * الامر ده بيحزاف الملفات اللى مش على الاستاجان اريا
 * Todo: => git clean -f
 *
 * _________________________________________________________________
 * _________________________________________________________________
 *
 * ? Formatting Syntax
 *
 *
 * ! Header
 * Todo: => # The largest heading
 * Todo: => ## The second largest heading
 * Todo: => ###### The smallest heading
 *
 * ! Bold
 * Todo: => **This is bold
 * Todo: => This is bold**
 * Todo: => __This is bold
 * Todo: => This is bold__
 *
 * ! Italic
 * Todo: => *This text is italicized*
 * Todo: => _This text is italicized_
 *
 * ! Bold and nested italic
 * Todo: => **This text is _extremely_ important**
 *
 * ! All bold and italic
 * Todo: => ***All this text is important***
 *
 * ! Strike Through
 * ! نص مشطوب علية
 * Todo: => ~~This was mistaken text~~
 *
 * ! Subscript
 * ! نصر مكتوب لتحت النص العادي
 * Todo: => <sub>This is a subscript text</sub>
 *
 * ! Superscript
 * ! نصر مكتوب لفوق النص العادي
 * Todo: => <sup>This is a superscript text</sup>
 *
 * ! Quoting Text
 * ! علامة نقلا عن النص
 * Todo: => > Text that is a quote
 *
 * ! Quoting Code
 * ! علامة نقلا عن كود
 * Todo: => > Use `git status` to list all new
 *
 * ! Links
 * Todo: => [GitHub Pages](https://pages.github.com/)
 *
 * ! Links In Your Repository
 * Todo: => [Contribution guidelines for this project](docs/CONTRIBUTING.md)
 *
 * ! Images
 * Todo: => ![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)
 *
 * ! Lists
 * Todo: => - George Washington
 * Todo: => - John Adams
 * Todo: => - Thomas Jefferson
 *
 * ! Lists with a number
 * Todo: => 1. James Madison
 * Todo: => 2. James Monroe
 * Todo: => 3. John Quincy Adams
 *
 * ! Nested Lists
 * Todo: => 1. First list item
 * Todo: =>    - First nested list item
 * Todo: =>      - Second nested list item
 *
 * ! Task lists
 * Todo: => - [x] #739
 * Todo: => - [ ] https://github.com/octo-org/octo-repo/issues/740
 * Todo: => - [ ] Add delight to the experience :tada:
 *
 * ! Using Emoji
 * Todo: => @octocat :+1: This PR merge! :shipit:
 *
 * ! Copy Build Project
 * Todo: => ```
 * Todo: => npm install
 * Todo: => ```
 *
 *
 * _________________________________________________________________
 * _________________________________________________________________
 *
 *  ? IGNORING
 * تجاهل ملفات او فلدرات علشان متترفعش مع ملفات المشروع
 *
 * .gitignore بتنشاء ملاف ال
 * Todo: => touch .gitignore
 *
 * Vscode فتح الملاف فى برنامج
 * Todo: => code .gitignore
 *
 * داخل الملف
 * جميع الملفات اللى امتداده
 * .Log
 * مش هتترفع مع المشروع
 * Todo: => *.log
 *
 * فى حالة انو انا عاوز ملاف امتدادو
 * .Log
 *  يترفع مع المشروع بتضيف الكود ده
 * Todo: => !fileName.log
 *
 * تقدار تضيف ملف ميترفعش مع المشروع و ميشفوش فى امر
 * Git Stats
 * Todo: => node_modules/
 *
 *  تقدار تكتاب اسم ملف بعينو هو ده اللى ميترفعش
 * Todo: => fileName.text
 *
 *  تقدار تتجاهل ملاف موجود فى ال
 *  Gitignore
 *  و تضيفو فى ملفات المشروع على ال
 *  Github
 * Todo: => git add --force fileName.text
 * Todo: => git add -f fileName.text
 *
 *
 * _________________________________________________________________
 * _________________________________________________________________
 *
 * Todo: =>
 *
 *
 */
