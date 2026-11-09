export const site = {
  name: "Bhaskar Aryal",
  role: "Machine learning enthusiast",
  email: "you@example.com", // TODO: put your real email
  github: "https://github.com/bhaskararyal5",
  university: "Tribhuvan University",
  location: "Nepal",
  tagline: ["patterns.", "meaning.", "signal in noise.", "better answers."],
  intro:
    "Machine learning enthusiast who loves turning raw data into models that actually work. I explore datasets, train and tune algorithms, and ship them as real apps people can try.",
};

export const skills = [
  { title: "Machine learning", icon: "ML", level: 80, tools: ["scikit-learn", "Random Forest", "Regression", "Model tuning", "Evaluation"], text: "Comparing models, tuning them and judging them honestly." },
  { title: "Python and data", icon: "Py", level: 85, tools: ["pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"], text: "Cleaning, exploring and visualising real datasets." },
  { title: "APIs and backend", icon: "API", level: 70, tools: ["FastAPI", "Pydantic", "REST"], text: "Serving trained models through validated endpoints." },
];

export const projects = [
  {
    slug: "mindscore",
    image: "/projects/mindscore.svg",
    title: "MindScore: Student Mental Health Predictor",
    kind: "Machine learning, full-stack",
    summary: "Predicts a student mental health score (0 to 10) from social media habits and lifestyle.",
    intro: "A full-stack project: a scikit-learn model behind a FastAPI backend and a responsive frontend.",
    stats: [["Records", "5,000"], ["Features", "12"], ["Best model", "Random Forest"], ["Test R²", "0.878"]],
    repo: "https://github.com/bhaskararyal5/Mental_Health_Predictor",
    sections: [
      ["Data and preprocessing", ["Duplicates were dropped and negative activity hours clipped to zero. Countries outside the top 10 were grouped as Other. Stress level was encoded as an ordered scale, study hours were log-transformed and scaled, and the remaining categories were one-hot encoded. Everything lives in one pipeline, so raw input goes straight into predict()."]],
      ["Model results", ["Evaluated on a 30% hold-out set:", ["Linear Regression: R² 0.740, MAE 0.536, RMSE 0.676", "Random Forest (default, deployed): R² 0.878, MAE 0.347, RMSE 0.464", "Random Forest (tuned): R² 0.865, MAE 0.369, RMSE 0.487"]]],
      ["The app", ["A FastAPI backend with Pydantic validation exposes a /predict endpoint. The frontend has sliders, an animated score gauge, personalised insights, dark and light themes and a live API connection indicator."]],
      ["Limitations", ["The data only covers ages 18 to 24, and the gap between training R² (0.98) and test R² (0.88) points to some overfitting. The data looks survey-style or synthetic, and the model finds correlations, not causes. This is an educational project, not a medical tool."]],
    ],
  },
  {
    slug: "nyc-airbnb-classifier",
    image: "/projects/nyc-airbnb-classifier.svg",
    title: "NYC Airbnb Classifier",
    kind: "Machine learning, web app",
    summary: "A model trained on the NYC Airbnb 2019 listings dataset, wrapped in a small web app.",
    intro: "Explore and clean the data in a notebook, train a model, save it, and serve it to a simple frontend.",
    stats: [["Dataset", "AB_NYC_2019"], ["Language", "Python"], ["Model", "Saved .pkl"], ["Interface", "Web"]],
    repo: "https://github.com/bhaskararyal5/NYC-Airbnb-Classifier",
    sections: [
      ["How it fits together", [["Notebook: exploration, preprocessing and training", "Model file: the trained model saved as a pickle", "Backend: main.py loads the model and serves predictions", "Frontend: index.html, style.css and script.js"]]],
      ["Source", ["Code, notebook and dataset are in the GitHub repository."]],
    ],
  },
];

export const about = [
  "I'm Bhaskar Aryal, a computer engineering student at Tribhuvan University with a deep interest in machine learning. I like taking a messy dataset, understanding what it is really saying, and turning it into a model that can make useful predictions.",
  "My work so far covers the full path from notebook to app: cleaning data, comparing and tuning models, and then wrapping the best one in a FastAPI backend and a clean frontend so anyone can try it. MindScore and the NYC Airbnb Classifier are two examples.",
  "I enjoy being honest about results, including the limits of a model, and I'm always looking for the next problem where data can help.",
];

export const education = [
  { title: "B.E. in Computer Engineering", school: "Tribhuvan University", note: "Currently studying" },
  { title: "SEE (Secondary Education Examination)", school: "Pioneers Higher Education Academy", note: "Completed" },
  { title: "SLC (School Leaving Certificate)", school: "Pioneers Higher Education Academy", note: "Completed" },
];

export const facts = [["Focus", "Machine learning"], ["Studying", "Computer Engineering"], ["Based in", "Nepal"]];
