

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;


const questionNumber =
    document.getElementById("questionNumber");

const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const scoreElement =
    document.getElementById("score");

const nextBtn =
    document.getElementById("nextBtn");

const progressBar =
    document.getElementById("progressBar");

const message =
    document.getElementById("message");



function showQuestion() {

    const current =
        questions[currentQuestion];


    questionNumber.textContent =
        `${currentQuestion + 1} / ${questions.length}`;


    questionElement.textContent =
        current.question;


    optionsElement.innerHTML = "";


    selectedAnswer = null;

    nextBtn.disabled = true;

    message.textContent = "";

    message.className = "message";



    const progress =
        ((currentQuestion + 1) /
            questions.length) * 100;


    progressBar.style.width =
        progress + "%";



    current.options.forEach(
        function (option) {

            const button =
                document.createElement("button");


            button.textContent =
                option;


            button.classList.add(
                "option"
            );


            button.addEventListener(
                "click",
                function () {

                    selectAnswer(
                        button,
                        option
                    );

                }
            );


            optionsElement.appendChild(
                button
            );

        }
    );
}

function selectAnswer(
    clickedButton,
    answer
) {

    const allButtons =
        document.querySelectorAll(
            ".option"
        );


    allButtons.forEach(
        function (button) {

            button.classList.remove(
                "selected"
            );

        }
    );


    clickedButton.classList.add(
        "selected"
    );


    selectedAnswer =
        answer;


    nextBtn.disabled = false;
}



nextBtn.addEventListener(
    "click",
    function () {

        const current =
            questions[currentQuestion];



        if (
            selectedAnswer ===
            current.answer
        ) {

            score++;

            scoreElement.textContent =
                score;


            message.textContent =
                "Correct Answer! 🎉";


            message.className =
                "message correct";

        }

        else {

            message.textContent =
                "Wrong Answer!";

            message.className =
                "message wrong";

        }



        const allButtons =
            document.querySelectorAll(
                ".option"
            );


        allButtons.forEach(
            function (button) {

                button.disabled =
                    true;

            }
        );


        nextBtn.disabled = true;



        setTimeout(
            function () {

                currentQuestion++;



                if (
                    currentQuestion >=
                    questions.length
                ) {

                    localStorage.setItem(
                        "quizScore",
                        score
                    );


                    window.location.href =
                        "./results.html";

                    return;
                }


                showQuestion();

            },
            700
        );

    }
);

showQuestion();