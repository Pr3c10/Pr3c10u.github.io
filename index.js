
const historyTitle = "A history of everything you copy";
const historyText = "Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.";
const snippetsTitle = "Keep track of your snippets";
const snippetsText = "Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.";
const searchTitle = "Quick Search Easily";
const searchText = "Easily search your snippets by content, category, web address, application, and more.";
const syncTitle = "iCloud Sync";
const syncText = "Instantly saves and syncs snippets across all your devices.";
const historyTitle2 = "Complete History";
const historyText2 = "Retrieve any snippets from the first moment you started using the app.";
const accessTitle = "Access Clipboard Anywhere";
const accessText = "Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.";
const superchargeTitle = "Supercharge your workflow";
const superchargeText = "We’ve got the tools to boost your productivity.";
const blacklistTitle = "Create blacklists";
const blacklistText = "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.";
const plainTextTitle = "Plain text snippets";
const plainTextText = "Remove unwanted formatting from copied text for a consistent look.";
const sneakPreviewTitle = "Sneak preview";
const sneakPreviewText = "Quick preview of all snippets on your Clipboard for easy access.";
const downloadTitle = "Clipboard for iOS and Mac OS";
const downloadText = "Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.";


document.querySelector("h1").innerHTML = `<b>${historyTitle}</b>`;
document.querySelector("p").innerHTML = historyText;

document.querySelectorAll("h2")[0].innerHTML = `<b>${snippetsTitle}</b>`;
document.querySelectorAll("p")[1].innerHTML = snippetsText;

document.querySelector(".computer-content h4").innerHTML = searchTitle;
document.querySelector(".computer-content p").innerHTML = searchText;

document.querySelectorAll(".computer-content h4")[1].innerHTML = syncTitle;
document.querySelectorAll(".computer-content p")[1].innerHTML = syncText;

document.querySelectorAll(".computer-content h4")[2].innerHTML = historyTitle2;
document.querySelectorAll(".computer-content p")[2].innerHTML = historyText2;

document.querySelectorAll("h2")[1].innerHTML = accessTitle;
document.querySelectorAll("p")[3].innerHTML = accessText;

document.querySelector("h3").innerHTML = superchargeTitle;
document.querySelectorAll("p")[4].innerHTML = superchargeText;

document.querySelectorAll(".container div p b")[0].innerHTML = blacklistTitle;
document.querySelectorAll(".container div p")[0].innerHTML = blacklistText;

document.querySelectorAll(".container div p b")[1].innerHTML = plainTextTitle;
document.querySelectorAll(".container div p")[1].innerHTML = plainTextText;

document.querySelectorAll(".container div p b")[2].innerHTML = sneakPreviewTitle;
document.querySelectorAll(".container div p")[2].innerHTML = sneakPreviewText;

document.querySelectorAll("h3")[1].innerHTML = downloadTitle;
document.querySelectorAll("p")[5].innerHTML = downloadText;
