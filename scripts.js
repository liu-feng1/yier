const questions = [
    "你愿意以后所有的钱都给我吗",
    "你愿意放弃你的爱好来陪我吗？",
    "你愿意每天都给我做饭吗？",
    "你是不是觉得我很勤快？",
    "你愿意为我改变你的生活习惯吗？",
    "你觉得我是不是有点无聊？",
    "你觉得我是不是有点控制欲？",
    "我是不是世上最帅的男人？",
];

let currentQuestionIndex = 0;

document.getElementById('agreeButton').addEventListener('click', function() {
    let agreeButton = document.getElementById('agreeButton');
    let disagreeButton = document.getElementById('disagreeButton');
    let questionImage = document.getElementById('questionImage');
    let questionText = document.querySelector('main p');
    agreeButton.style.transform = 'scale(1)';
    disagreeButton.style.marginLeft = '0';

    questionImage.src = 'assets/agree.jpeg';

    questionText.classList.add('fade');
    setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        questionText.textContent = questions[currentQuestionIndex];
        questionImage.src = 'assets/normal.jpeg';
        questionText.classList.remove('fade');
    }, 1000); // 更新为1秒，以适应2秒的动画时间
});

document.getElementById('disagreeButton').addEventListener('click', function() {
    let agreeButton = document.getElementById('agreeButton');
    let disagreeButton = document.getElementById('disagreeButton');
    let questionImage = document.getElementById('questionImage');
    let currentScale = parseFloat(agreeButton.style.transform.replace('scale(', '').replace(')', '')) || 1;
    agreeButton.style.transform = `scale(${currentScale + 0.1})`;
    disagreeButton.style.marginLeft = `${(currentScale + 0.1) * 5}%`;
    questionImage.src = 'assets/disagree.jpeg';
});
