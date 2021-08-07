const quotes = [
    {
    quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author : "Nelson Mandela",
    },
    {
    quote : "The way to get started is to quit talking and begin doing.",
    author : "Walt Disney",
    },
    {
    quote : "If life were predictable it would cease to be life, and be without flavor.",
    author : "Eleanor Roosevelt",
    },
    {
    quote : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author : "James Cameron",
    },
    {
    quote : "Life is what happens when you're busy making other plans",    author : "John Lennon.",
    },
    {
    quote : "성실한 한마디의 말은 백만 마디의 헛된 찬사보다 낫다",
    author : "카네기",
    },
    {
    quote : "사람은 오조지 가슴으로만 올바로 볼 수 있다. 본질적인 것은 눈에 보이지 않는다.",
    author : "생텍쥐페리",
    },
    {
    quote : "화가 나면 10까지 세라 . ",
    author : "토마스 제퍼슨",
    },
    {
    quote : "빛을 퍼뜨릴 수 있는 두 가지 방법이 있다. 촛불이 되거나 또는 그것을 비추는 거울이 되는 것이다. ",
    author : "이디스 워튼",
    },
    {
    quote : "겨울이 오면 봄 또한 멀지 않으리. ",
    author : "셀리",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;