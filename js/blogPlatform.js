// Blog data
const blogs = {
    1: {
      title: "5 Tips for Daily Meditation",
      content: "Here are five tips to help you make meditation a daily habit: 1. Start small with just 5 minutes a day. 2. Find a quiet space. 3. Use guided meditations. 4. Focus on your breathing. 5. Be consistent.",
    },
    2: {
      title: "Breathing Techniques for Beginners",
      content: "Mindful breathing can transform your meditation practice. Techniques include box breathing, alternate nostril breathing, and diaphragmatic breathing. Practice these daily for improved focus and relaxation.",
    },
    3: {
      title: "Mindfulness Practices for Stress Relief",
      content: "Simple mindfulness practices can help you reduce stress and stay calm. These include body scans, mindful eating, and focusing on present sensations.",
    },
  };

  // Show modal with dynamic content
  function showModal(blogId) {
    const modal = document.getElementById("blogModal");
    const title = document.getElementById("modalTitle");
    const content = document.getElementById("modalContent");

    title.textContent = blogs[blogId].title;
    content.textContent = blogs[blogId].content;

    modal.classList.add("modal-open");
  }

  // Close modal
  function closeModal() {
    const modal = document.getElementById("blogModal");
    modal.classList.remove("modal-open");
  }