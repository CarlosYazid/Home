const logotext = "CARLOS";
const meta = {
    title: "Carlos Padilla",
    description: "I’m Carlos Padilla data scientist",
};

const introdata = {
    title: "I’m Carlos Padilla",
    animated: {
        first: "I love coding",
        second: "I code in Scala",
        third: "I develop ML models",
    },
    description: "From Data Science to Machine Learning Engineering, I transform raw data into powerful insights and scalable solutions. Let’s build the future with data-driven intelligence! 📊🤖",
    your_img_url: "https://i.postimg.cc/PJHXNbZp/1-w-Jt3v7-Gs46utic-TUj4y9zg.gif",
};

const dataabout = {
    title: "i am",
    aboutme: "Student at the National University of Colombia, Downhill enthusiast, and Dua Lipa fan. Passionate about technology, data science, and innovation, always eager to learn and take on new challenges. 🚀📊💡",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "TensorFlow",
        value: 90,
    },
    {
        name: "PyTorch",
        value: 85,
    },
    {
        name: "Spark",
        value: 80,
    },
    {
        name: "AWS",
        value: 60,
    },
    {
        name: "Azure",
        value: 85,
    },
];

const services = [{
        title: "📊 Data Science",
        description: "Transform raw data into actionable insights with advanced analytics, machine learning, and AI. From data cleaning to predictive modeling, I help businesses make smarter, data-driven decisions.",
    },
    {
        title: "🤖 Machine Learning Engineering",
        description: "Deploy and scale machine learning models efficiently with MLOps, automation, and cloud integration. Ensure reproducibility, monitoring, and performance to drive real-world impact.",
    },
    {
        title: "🛠️ Data Engineering",
        description: "Design, optimize, and manage robust data pipelines for seamless integration, storage, and processing. Ensure your data is accessible, reliable, and ready for analytics & AI.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "contact@carlospadilla.co",
    YOUR_FONE: "(350)777-9746",
    description: "Looking for a passionate Data Scientist & ML Engineer? I’m always open to exciting opportunities! Drop your email, and let’s explore how we can work together. 📩✨",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
    YOUR_PUBLIC_KEY: process.env.REACT_APP_PUBLIC_KEY,
};

const socialprofils = {
    github: "https://github.com/CarlosYazid",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/carlosyazid/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};