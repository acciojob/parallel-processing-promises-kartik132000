//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const loginDiv = document.getElementById("loading");
const errorDiv = document.getElementById("error");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

	function downloadImages(url){
		return new promise((resolve,reject) =>{
			const img = new Image();
			img.src=url;
			img.onload = () => resolve(img);
			img.oneerror = () => reject(new error(`failed to load image: ${url}`));			
		})
	}

async function downloadImages(){
	output.innerHTML = "";
	errorDiv.innerHTML = "";
	loadingDiv.style.HTML = "block";

try{
	const imageElements = await promise.all(image.map(img => downloadImages(img.url)));
	image.Elements.forEach(img => output.append.Child(img));
}cath(error){
	errorDiv.textcontent = error.message;
}finally{
	loadingDIv.style.display = "none";
}

}
btn.addEventListner("click", downloadImages);



