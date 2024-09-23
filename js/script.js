let QuizTxt = document.querySelector('.QuizTxt')
let anwsers = document.querySelectorAll('.anwsers')
let anwser1 = document.querySelector('.anwser1')
let anwser2 = document.querySelector('.anwser2')
let anwser3 = document.querySelector('.anwser3')
let anwser4 = document.querySelector('.anwser4')
let Lisson = document.querySelectorAll('.Lisson')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
let second = document.getElementById('second')
let minute = document.getElementById('minute')
// let theme = document.getElementById('theme')
let GetReport = document.querySelector('.GetReport')
let report = document.querySelector('.report')
let statuse = document.getElementById('status')
let QuestionCount = document.getElementById('QuestionCount')
let TrueQuestion = document.getElementById('TrueQuestion')
let FalseQuestion = document.getElementById('FalseQuestion')
let EmptyQuestion = document.getElementById('EmptyQuestion')
let Exit = document.getElementById('Exit')
let timer = document.querySelector('.timer')
let ReportSecond = document.getElementById('ReportSecond')
let ReportMinute = document.getElementById('ReportMinute')
let StartQuiz = document.getElementById('StartQuiz')
let Intro = document.querySelector('.Intro')
let Nasb10 = document.querySelector('.Nasb10')
let ListenName = document.querySelector('.ListenName')
let MsgBox = document.querySelector('.MsgBox')
let yes = document.getElementById('yes')
let no = document.getElementById('no')
let real = document.querySelector('.real')
let MsgEnd = document.querySelector('.MsgEnd')
let SeeReport = document.getElementById('SeeReport')
let DontSee = document.getElementById('DontSee')



let QuizArray = [
   { id: 1, Name: 'نصب و راه اندازی سیستم های رایانه ای', question: 'کدام یک از کابل های زیر علاوه بر انتقال ویدیو صدا را نیز میتواند انتقال دهد؟', MainAnwser: 'گزینه های 2 و 3', anwser1: 'DVI', anwser2: 'HDMI', anwser3: 'Display Port', anwser4: 'گزینه های 2 و 3' },
   { id: 2, Name: 'نصب و راه اندازی سیستم های رایانه ای', question: 'کدام دسته از کلید های صفحه کلید به تنهایی یا در ترکیب با یکدیگر کلید ها برای انجام اقدامات خاص مورد استفاده قرار میگیرد؟', MainAnwser: 'کلید های کنترلی', anwser1: 'کلید های کنترلی', anwser2: 'کلید های نوشتن', anwser3: 'کلید های تابعی', anwser4: 'کلید های هدایت' },
   { id: 3, Name: 'نصب و راه اندازی سیستم های رایانه ای', question: 'مهم ترین نرم افزار سیستمی کدام است؟', MainAnwser: 'سیستم عامل', anwser1: 'utillty', anwser2: 'سیستم عامل', anwser3: 'Bios', anwser4: 'راه انداز ها' },
   { id: 4, Name: 'نصب و راه اندازی سیستم های رایانه ای', question: 'برای نمایش میزکار در ویندوز 10 از چه روشی استفاده میشود؟', MainAnwser: 'همه موارد', anwser1: 'استفاده از دکمه Show Desktop در انتهای نوار وظیفه', anwser2: 'کلیک راست روی قسمت خالی نوار وظیفه و انتخاب گزینه show the desktop', anwser3: 'فشردن کلید ترکیبی ویندوز + D', anwser4: 'همه موارد' },
]

function NewQuiz() {
   ListenName.innerHTML = QuizArray[QuizIndex].Name
   QuizTxt.innerHTML = QuizArray[QuizIndex].question
   anwser1.innerHTML = QuizArray[QuizIndex].anwser1
   anwser2.innerHTML = QuizArray[QuizIndex].anwser2
   anwser3.innerHTML = QuizArray[QuizIndex].anwser3
   anwser4.innerHTML = QuizArray[QuizIndex].anwser4
}

function Clear() {
   anwser1.style.backgroundColor = '#cb5bec'
   anwser2.style.backgroundColor = '#cb5bec'
   anwser3.style.backgroundColor = '#cb5bec'
   anwser4.style.backgroundColor = '#cb5bec'
}

let QuizIndex = 0

function NextQuiz() {
   QuizIndex++

   if (QuizIndex > QuizArray.length - 1) {
      QuizIndex = QuizArray.length - 1
      MsgEnd.style.opacity = '1'
      MsgEnd.style.visibility = 'visible'
      real.style.opacity = '.2'
   }
   NewQuiz()
   Clear()
}

function prevQuiz() {
   QuizIndex--

   if (QuizIndex < 0) {
      QuizIndex = QuizArray.length - QuizArray.length
   }
   NewQuiz()
   Clear()
}




anwsers.forEach(function (anwser) {
   anwser.addEventListener('click', function () {
      let Main = QuizArray.some(function (quiz) {
         return anwser.innerHTML === quiz.MainAnwser
      })

      if (Main) {
         anwser.style.backgroundColor = 'green'
         TrueQuiz++
         setTimeout(() => {
            NextQuiz()
         }, 1000);
      }

      else {
         anwser.style.backgroundColor = 'red'
         FalseQuiz++
         setTimeout(() => {
            NextQuiz()
         }, 1000);
      }
   })
})

window.addEventListener('load', NewQuiz)
next.addEventListener('click', NextQuiz)
prev.addEventListener('click', prevQuiz)




// theme.addEventListener('click', function () {
//    theme.classList.toggle('active')

//    if (theme.className === 'bx bx-sun active') {
//       theme.setAttribute('class', 'bx bx-moon')
//       theme.classList.add('active')
//       document.body.style.backgroundColor = 'black'
//    }
//    else {
//       theme.setAttribute('class', 'bx bx-sun')
//       theme.classList.remove('active')
//       document.body.style.backgroundColor = 'white'
//    }
// })

let AllCountQuestions = QuizArray.length
let TrueQuiz = 0
let FalseQuiz = 0


StartQuiz.addEventListener('click', function () {

   Intro.style.top = '-5000px'

   let timers = setInterval(() => {
      second.innerHTML++

      if (second.innerHTML < 10) {
         second.innerHTML = '0' + second.innerHTML
      }
      if (minute.innerHTML.indexOf('0') && minute.innerHTML < 10) {
         minute.innerHTML = '0' + minute.innerHTML
      }
      if (second.innerHTML === '59') {
         second.innerHTML = 0
         minute.innerHTML++
      }
   }, 1000);


   GetReport.addEventListener('click', function () {

      ReportSecond.innerHTML = second.innerHTML
      ReportMinute.innerHTML = minute.innerHTML

      QuestionCount.innerHTML = AllCountQuestions
      TrueQuestion.innerHTML = TrueQuiz
      FalseQuestion.innerHTML = FalseQuiz
      EmptyQuestion.innerHTML = AllCountQuestions - (Number(TrueQuestion.innerHTML) + Number(FalseQuestion.innerHTML))

      if (TrueQuiz > FalseQuiz) {
         statuse.innerHTML = 'ایول ، کارت عالی بود'
         statuse.style.color = '#44d418'
      }
      if (TrueQuiz === Number(EmptyQuestion.innerHTML) + Number(FalseQuestion.innerHTML)) {
         statuse.innerHTML = 'با کمی تلاش میتونی بهتر شی'
         statuse.style.color = 'orange'
      }
      if (TrueQuiz < Number(EmptyQuestion.innerHTML) + Number(FalseQuestion.innerHTML)) {
         statuse.innerHTML = 'ای بابا ، کم خونده بودی؟'
         statuse.style.color = 'red'
      }
      real.style.opacity = '.2'
      MsgBox.style.visibility = 'visible'
      MsgBox.style.opacity = '1'

      yes.addEventListener('click', function () {
         clearInterval(timers)
         report.style.top = '50%'
         MsgBox.style.visibility = 'hidden'
         MsgBox.style.opacity = '0'
         real.style.opacity = '1'
      })
      no.addEventListener('click', function () {
         MsgBox.style.visibility = 'hidden'
         MsgBox.style.opacity = '0'
         real.style.opacity = '1'
      })
   })

})


Exit.addEventListener('click', function () {
   location.href = 'index.html'
})


SeeReport.addEventListener('click', function () {
   report.style.top = '50%'
   MsgEnd.style.opacity='0'
   MsgEnd.style.visibility='hidden'
   real.style.opacity = '1'


   ReportSecond.innerHTML = second.innerHTML
   ReportMinute.innerHTML = minute.innerHTML

   QuestionCount.innerHTML = AllCountQuestions
   TrueQuestion.innerHTML = TrueQuiz
   FalseQuestion.innerHTML = FalseQuiz
   EmptyQuestion.innerHTML = AllCountQuestions - (Number(TrueQuestion.innerHTML) + Number(FalseQuestion.innerHTML))

   if (TrueQuiz > FalseQuiz) {
      statuse.innerHTML = 'ایول ، کارت عالی بود'
      statuse.style.color = '#44d418'
   }
   if (TrueQuiz === Number(EmptyQuestion.innerHTML) + Number(FalseQuestion.innerHTML)) {
      statuse.innerHTML = 'با کمی تلاش میتونی بهتر شی'
      statuse.style.color = 'orange'
   }
   if (TrueQuiz < Number(EmptyQuestion.innerHTML) + Number(FalseQuestion.innerHTML)) {
      statuse.innerHTML = 'ای بابا ، کم خونده بودی؟'
      statuse.style.color = 'red'
   }


})


DontSee.addEventListener('click', function () {
   location.href = 'index.html'
})



