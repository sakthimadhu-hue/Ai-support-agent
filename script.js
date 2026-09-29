async function getStudyPlan() {
    const subject = document.getElementById("subject").value;
    const topic = document.getElementById("topic").value;
    const hours = document.getElementById("hours").value;
    const result = document.getElementById("result");

    if (subject === "" || topic === "" || hours === "") {
        result.innerHTML = "⚠️ Please enter all details.";
        return;
    }

    result.innerHTML = "⏳ Generating your study plan...";

    try {
        const response = await fetch("http://127.0.0.1:5000/study", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                subject: subject,
                topic: topic,
                hours: hours
            })
        });

        const data = await response.json();

        result.innerHTML = `
            <h3>🎯 Your Study Plan</h3>
            <p><b>Subject:</b> ${data.subject}</p>
            <p><b>Topic:</b> ${data.topic}</p>
            <p><b>Daily Study Hours:</b> ${data.hours}</p>
            <p><b>📌 Plan:</b></p>
            <p>${data.plan}</p>
        `;

    } catch (error) {
        result.innerHTML =
            "❌ Backend is not running. Please start the backend.";
    }
}


// Quick Quiz
function checkAnswer(answer) {
    const quizResult = document.getElementById("quizResult");

    if (answer === "A") {
        quizResult.innerHTML = "✅ Correct! Python is a programming language.";
    } else {
        quizResult.innerHTML = "❌ Incorrect. Try again!";
    }
}
