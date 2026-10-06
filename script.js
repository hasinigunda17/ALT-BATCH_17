const messages =
    document.getElementById("messages");

const questionInput =
    document.getElementById("question");

const fileInput =
    document.getElementById("fileInput");

const fileList =
    document.getElementById("fileList");

const fileCount =
    document.getElementById("fileCount");

const documentNumber =
    document.getElementById("documentNumber");



/* ================= NAVIGATION ================= */

function setActive(element) {

    const links =
        document.querySelectorAll(".menu a");

    links.forEach(function(link) {

        link.classList.remove("active");

    });

    element.classList.add("active");
}



/* ================= CHAT ================= */

function sendMessage() {

    const question =
        questionInput.value.trim();


    if (question === "") {

        alert(
            "Please enter your question."
        );

        return;

    }


    addUserMessage(question);

    questionInput.value = "";


    showTyping();


    setTimeout(function() {

        removeTyping();


        const answer =
            getAnswer(question);


        addBotMessage(answer);


    }, 800);

}



/* USER MESSAGE */

function addUserMessage(text) {

    const message =
        document.createElement("div");


    message.className =
        "message user";


    message.innerHTML = `

        <div>

            <div class="bubble">

                ${text}

            </div>

            <small>
                Just now
            </small>

        </div>

    `;


    messages.appendChild(message);


    messages.scrollTop =
        messages.scrollHeight;

}



/* BOT MESSAGE */

function addBotMessage(text) {

    const message =
        document.createElement("div");


    message.className =
        "message bot";


    message.innerHTML = `

        <div class="avatar">
            U
        </div>

        <div>

            <div class="bubble">

                ${text}

            </div>

            <small>
                Just now
            </small>

        </div>

    `;


    messages.appendChild(message);


    messages.scrollTop =
        messages.scrollHeight;

}



/* TYPING */

function showTyping() {

    const typing =
        document.createElement("div");


    typing.id = "typing";

    typing.className =
        "message bot";


    typing.innerHTML = `

        <div class="avatar">
            U
        </div>

        <div>

            <div class="bubble">

                🤖 UniAssist is thinking...

            </div>

        </div>

    `;


    messages.appendChild(typing);


    messages.scrollTop =
        messages.scrollHeight;

}



/* REMOVE TYPING */

function removeTyping() {

    const typing =
        document.getElementById("typing");


    if (typing) {

        typing.remove();

    }

}



/* ================= AI ANSWERS ================= */

function getAnswer(question) {

    const q =
        question.toLowerCase();


    if (
        q.includes("rag") ||
        q.includes("retrieval")
    ) {

        return `

            <b>Retrieval-Augmented Generation
            (RAG)</b> is a technique where
            the system first retrieves relevant
            information from documents and then
            uses AI to generate an answer.

            <br><br>

            In UniAssist AI, university study
            materials can be used as the knowledge
            source.

            <br><br>

            📚 <b>Source:</b>
            Academic Study Material

        `;

    }



    if (
        q.includes("exam") ||
        q.includes("important")
    ) {

        return `

            📖 <b>Important Exam Points</b>

            <br><br>

            • Understand the main definitions

            <br>

            • Learn important concepts

            <br>

            • Practice examples

            <br>

            • Revise important formulas

            <br>

            • Review previous questions

        `;

    }



    if (
        q.includes("simple") ||
        q.includes("explain")
    ) {

        return `

            Sure! 😊

            <br><br>

            UniAssist AI searches the academic
            documents, finds relevant information
            and explains the topic in simple words.

        `;

    }



    if (
        q.includes("hello") ||
        q.includes("hi")
    ) {

        return `

            Hello! 👋

            <br><br>

            I am <b>UniAssist AI</b>.

            <br><br>

            I can help you with academic
            questions, notes, quizzes and
            exam preparation.

        `;

    }



    return `

        I received your question:

        <br><br>

        <b>${question}</b>

        <br><br>

        In the complete RAG implementation,
        the system will search your uploaded
        university documents and generate an
        answer using the relevant information.

        <br><br>

        📚 <b>RAG Source Retrieval</b> will
        provide the relevant academic content.

    `;

}



/* ================= SUGGESTIONS ================= */

function askQuestion(question) {

    questionInput.value =
        question;


    sendMessage();

}



/* ================= NEW CHAT ================= */

function newChat() {

    messages.innerHTML = `

        <div class="message bot">

            <div class="avatar">
                U
            </div>

            <div>

                <div class="bubble">

                    Hello! 👋

                    <br><br>

                    I'm ready to help you
                    with your academic questions.

                </div>

                <small>
                    Just now
                </small>

            </div>

        </div>

    `;


    questionInput.value = "";

}



/* ================= ENTER KEY ================= */

questionInput.addEventListener(
    "keypress",
    function(event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    }
);



/* ================= FILE UPLOAD ================= */

fileInput.addEventListener(
    "change",
    function() {


        fileList.innerHTML = "";


        const files =
            fileInput.files;


        fileCount.innerText =
            files.length +
            (
                files.length === 1
                ? " file"
                : " files"
            );


        documentNumber.innerText =
            files.length;



        for (
            let i = 0;
            i < files.length;
            i++
        ) {


            const file =
                files[i];


            const item =
                document.createElement("div");


            item.className =
                "file-item";


            item.innerHTML = `

                <span>
                    📄 ${file.name}
                </span>

                <button
                    onclick="deleteFile(this)">

                    Delete

                </button>

            `;


            fileList.appendChild(item);

        }

    }
);



/* DELETE FILE */

function deleteFile(button) {

    const item =
        button.parentElement;


    item.remove();


    const items =
        document.querySelectorAll(
            ".file-item"
        );


    fileCount.innerText =
        items.length +
        (
            items.length === 1
            ? " file"
            : " files"
        );


    documentNumber.innerText =
        items.length;

}



/* ================= STUDY NOTES ================= */

function generateNotes() {

    document.getElementById(
        "notesOutput"
    ).innerHTML = `

        <h3>
            📄 Generated Study Notes
        </h3>

        <br>

        <b>Retrieval-Augmented Generation</b>

        <br><br>

        • RAG combines information retrieval
        with AI generation.

        <br>

        • It searches relevant documents.

        <br>

        • Retrieved information is given
        to the AI model.

        <br>

        • The AI generates a useful answer.

        <br>

        • It can help students understand
        academic material.

    `;

}



function importantPoints() {

    document.getElementById(
        "notesOutput"
    ).innerHTML = `

        <h3>
            ⭐ Important Points
        </h3>

        <br>

        • Main concepts

        <br>

        • Important definitions

        <br>

        • Key examples

        <br>

        • Important formulas

        <br>

        • Exam-related topics

        <br>

        • Frequently asked concepts

    `;

}



function generateDefinitions() {

    document.getElementById(
        "notesOutput"
    ).innerHTML = `

        <h3>
            📖 Important Definitions
        </h3>

        <br>

        <b>RAG:</b>
        Retrieval-Augmented Generation.

        <br><br>

        <b>Retrieval:</b>
        Finding relevant information
        from documents.

        <br><br>

        <b>Generation:</b>
        Creating an answer using an
        AI model.

        <br><br>

        <b>Knowledge Source:</b>
        Documents used by the system
        to answer questions.

    `;

}



/* ================= QUIZ ================= */

function generateQuiz() {

    const number =
        document.getElementById(
            "questionNumber"
        ).value;


    const difficulty =
        document.getElementById(
            "difficulty"
        ).value;


    let output = `

        <h3>
            🧠 Practice Quiz
        </h3>

        <p>
            Difficulty:
            <b>${difficulty}</b>
        </p>

        <br>

    `;


    const questions = [

        "What is Retrieval-Augmented Generation?",

        "What is the purpose of document retrieval?",

        "What is a knowledge source?",

        "How does RAG help students?",

        "What is the difference between retrieval and generation?",

        "Why are source references useful?",

        "What type of documents can be used?",

        "What is an AI-generated answer?",

        "How can RAG reduce incorrect information?",

        "What is academic document retrieval?"

    ];


    for (
        let i = 0;
        i < number;
        i++
    ) {

        output += `

            <p>
                <b>${i + 1}.</b>
                ${questions[i]}
            </p>

        `;

    }


    document.getElementById(
        "quizOutput"
    ).innerHTML = output;

}



/* ================= EXAM ================= */

function examQuestions(marks) {

    let questions = "";


    if (marks === 2) {

        questions = `

            1. Define RAG.

            <br><br>

            2. What is document retrieval?

            <br><br>

            3. What is a knowledge source?

            <br><br>

            4. What is an AI chatbot?

        `;

    }


    if (marks === 5) {

        questions = `

            1. Explain the working of
            Retrieval-Augmented Generation.

            <br><br>

            2. Explain the main components
            of a RAG chatbot.

            <br><br>

            3. Explain how RAG can help
            university students.

        `;

    }


    if (marks === 10) {

        questions = `

            1. Explain the complete architecture
            of a Retrieval-Augmented Generation
            based academic chatbot.

            <br><br>

            2. Explain document retrieval,
            knowledge sources and AI generation
            in a RAG system.

        `;

    }


    document.getElementById(
        "examOutput"
    ).innerHTML = `

        <h3>
            📖 ${marks}-Mark Questions
        </h3>

        <br>

        ${questions}

    `;

}



function quickRevision() {

    document.getElementById(
        "examOutput"
    ).innerHTML = `

        <h3>
            ⚡ Quick Revision
        </h3>

        <br>

        <b>Remember these points:</b>

        <br><br>

        1. RAG means
        Retrieval-Augmented Generation.

        <br><br>

        2. Documents are used as
        knowledge sources.

        <br><br>

        3. Relevant information is retrieved.

        <br><br>

        4. AI generates the final answer.

        <br><br>

        5. Source references help students
        understand where information came from.

    `;

}