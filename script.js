function generateLink() {
    let url = document.getElementById("urlInput").value;
    let text = document.getElementById("textInput").value;

    if (url && text) {
        let outputDiv = document.getElementById("output");
        let linkElement = document.createElement("a");
        linkElement.href = url;
        linkElement.textContent = text;
        linkElement.target = "_blank";

        outputDiv.innerHTML = "";
        outputDiv.appendChild(linkElement);

        document.getElementById("copyBtn").style.display = "inline-block";
    } else {
        alert("Please enter both URL and text!");
    }
}

function copyLink() {
    let url = document.getElementById("urlInput").value;
    let text = document.getElementById("textInput").value;

    if (url && text) {
        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = `<a href="${url}" target="_blank">${text}</a>`;
        document.body.appendChild(tempDiv);

        let range = document.createRange();
        range.selectNode(tempDiv);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();

        document.body.removeChild(tempDiv);

        alert("Clickable link copied! Paste it anywhere.");
    } else {
        alert("Generate a link first!");
    }
}
