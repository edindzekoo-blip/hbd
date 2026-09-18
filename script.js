const text =
    "Hari ini bukan sekadar bertambahnya usia, tetapi bertambahnya cerita, pengalaman, dan harapan baru. ✨";

const typingElement = document.getElementById("typing");

let index = 0;

function typeText() {

    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;

        setTimeout(typeText, 45);
    }
}

typeText();


function openGift() {

    const gift = document.getElementById("gift");

    if (gift.style.display === "block") {
        gift.style.display = "none";
        return;
    }

    gift.style.display = "block";

    createHearts();
}


function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = ["♡", "✦", "♥", "✨"][
            Math.floor(Math.random() * 4)
        ];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize =
            Math.random() * 20 + 10 + "px";

        heart.style.pointerEvents = "none";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        heart.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(-110vh) rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 3000 + Math.random() * 3000,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}
