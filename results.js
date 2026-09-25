

const finalScore =
    document.getElementById(
        "finalScore"
    );

const resultText =
    document.getElementById(
        "resultText"
    );

const restartBtn =
    document.getElementById(
        "restartBtn"
    );



const score =
    Number(
        localStorage.getItem(
            "quizScore"
        )
    ) || 0;



finalScore.textContent =
    score;



if (score === questions.length) {

    resultText.textContent =
        "Perfect Score! 🏆 Excellent work!";

}

else if (score >= 7) {

    resultText.textContent =
        "Great Job! 🎉 Keep it up!";

}

else if (score >= 5) {

    resultText.textContent =
        "Good Effort! 👍 Keep practicing!";

}

else {

    resultText.textContent =
        "Keep learning and try again! 💪";

}



restartBtn.addEventListener(
    "click",
    function () {

        localStorage.removeItem(
            "quizScore"
        );


        window.location.href =
            "./quiz.html";

    }
);