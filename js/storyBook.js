// Story data: each step contains a title and content
const steps = [
    {
        title: "Step 1: Find a Comfortable Position",
        content: "Sit down comfortably, either on a chair or on the floor. Keep your back straight but not stiff, and rest your hands gently on your knees.",
    },
    {
        title: "Step 2: Close Your Eyes",
        content: "Gently close your eyes to block out distractions. This helps you focus on your inner self.",
    },
    {
        title: "Step 3: Breathe Deeply",
        content: "Take a deep breath in through your nose, hold it for a few seconds, and then exhale slowly through your mouth. Repeat this three times.",
    },
    {
        title: "Step 4: Focus on the Present",
        content: "Notice the sensations in your body. Feel the rise and fall of your chest with each breath, and let go of any lingering thoughts.",
    },
    {
        title: "Step 5: Gradually Return",
        content: "When you're ready, open your eyes slowly and take a moment to adjust. Carry this sense of calm with you throughout your day.",
    },
];

let currentStep = 0; // Start at the first step

const stepTitle = document.getElementById("step-title");
const stepContent = document.getElementById("step-content");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateStory() {
    stepTitle.textContent = steps[currentStep].title;
    stepContent.textContent = steps[currentStep].content;

    // Enable/disable buttons based on step index
    prevBtn.disabled = currentStep === 0;
    nextBtn.disabled = currentStep === steps.length - 1;
    prevBtn.classList.toggle("btn-disabled", currentStep === 0);
    nextBtn.classList.toggle("btn-disabled", currentStep === steps.length - 1);
}

prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        updateStory();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateStory();
    }
});

// Initialize the story
updateStory();