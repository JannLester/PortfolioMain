const textElement = document.querySelector(".typewriter-text");
const words = ["BSIT STUDENT", "Web Developer", "Cybersecurity Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // Normal typing speed
let pauseTime = 2000;  // Pause time after typing a full word

function typeEffect() {
    if (!textElement) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        // When the full word is typed, wait for a moment before deleting
        isDeleting = true;
        setTimeout(typeEffect, pauseTime);
        return; // Stop the function from executing further
    } 

    if (isDeleting && charIndex === 0) {
        // When word is fully deleted, move to the next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : typingSpeed);
}

// Start typing when the page loads
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
    
    // Demo reel modal functionality
    const modal = document.getElementById("demo-reel-modal");
    const demoReelTrigger = document.getElementById("demo-reel-trigger");
    const closeModal = document.querySelector(".close-modal");
    const video = document.getElementById("demo-video");
    
    if (demoReelTrigger && modal) {
        // Open modal when clicking on the demo reel text
        demoReelTrigger.addEventListener("click", function() {
            modal.style.display = "block";
            setTimeout(() => {
                modal.classList.add("show");
            }, 10);
            if (video) {
                video.play(); // Auto-play when opened
            }
        });
        
        // Close modal when clicking X button
        if (closeModal) {
            closeModal.addEventListener("click", function() {
                modal.classList.remove("show");
                setTimeout(() => {
                    modal.style.display = "none";
                    if (video) {
                        video.pause(); // Pause video when closed
                        video.currentTime = 0; // Reset video to beginning
                    }
                }, 300);
            });
        }
        
        // Close modal when clicking outside the video
        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.classList.remove("show");
                setTimeout(() => {
                    modal.style.display = "none";
                    if (video) {
                        video.pause();
                        video.currentTime = 0;
                    }
                }, 300);
            }
        });
    }
});

function hamburg() {
    document.querySelector('.dropdown').style.transform = 'translateX(0)';
}

function cancel() {
    document.querySelector('.dropdown').style.transform = 'translateX(-100%)';
}

