function generateLink() {
    let url = document.getElementById("urlInput").value;
    let text = document.getElementById("textInput").value;
    
    if (url && text) {
        let outputDiv = document.getElementById("output");
        outputDiv.innerHTML = `<a href="${url}" target="_blank" id="generatedLink">${text}</a>`;
        
        // Show the copy button
        document.getElementById("copyBtn").style.display = "inline-block";
    } else {
        alert("Please enter both URL and text!");
    }
}

function copyLink() {
    let generatedLink = document.getElementById("generatedLink");

    // Create a temporary input element to copy the link
    let tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = generatedLink.outerHTML; // Copies the HTML tag
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Link copied to clipboard!");
}
