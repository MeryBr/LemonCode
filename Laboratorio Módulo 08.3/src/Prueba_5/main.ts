console.log("Demostración 5");

interface CardInfo {
    id: number;
    url: string;
};

let deck: CardInfo[] = [
    {
        id: 1,
        url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
    },
    {
        id: 2,
        url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
    },
    {
        id: 3,
        url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
    },
    {
        id: 4,
        url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
    },
    {
        id: 5,
        url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
    },
    {
        id: 6,
        url: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
    },
]

function shuffleArray<T>(arr: T[]) {
    let currentIndex = arr.length;
    let randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
}

shuffleArray(deck);
console.log(deck);

const getImageSrc = (index: string): string => {
    switch (index) {
        case "0":
        case "1":
            return deck[parseInt(index)].url;
        default:
            return "\src\content\images\card-back.jpg";
    }
}

const setImageSrc = (src: string, elementId: string) => {
    const imgElement = document.getElementById(elementId);
    if (imgElement instanceof HTMLImageElement)
        imgElement.src = src;
}

const flipCard = (container: HTMLDivElement) => {
    const indexId = container.getAttribute("data-index-id");
    if (indexId) {
        const imgId = (`image-${indexId}`);
        const src = getImageSrc(indexId);
        setImageSrc(src, imgId);
    }
}

const container0 = document.getElementById("container-0");
if (container0 && container0 instanceof HTMLDivElement) {
    container0.addEventListener("click", () => flipCard(container0));
}

const container1 = document.getElementById("container-1");
if (container1 && container1 instanceof HTMLDivElement) {
    container1.addEventListener("click", () => flipCard(container1));
}
