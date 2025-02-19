const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const loadingDiv = document.getElementById("loading");
const errorDiv = document.getElementById("error");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
  });
}

async function downloadImages() {
  // Clear previous content
  output.innerHTML = "";
  errorDiv.innerHTML = "";
  loadingDiv.style.display = "block"; // Show loading spinner

  try {
    const imageElements = await Promise.all(images.map(img => downloadImage(img.url)));
    imageElements.forEach(img => output.appendChild(img));
  } catch (error) {
    errorDiv.textContent = error.message;
  } finally {
    loadingDiv.style.display = "none"; // Hide loading spinner
  }
}

// Attach event listener to button
btn.addEventListener("click", downloadImages);
