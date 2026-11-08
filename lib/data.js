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
  { title: "Machine learning", text: "Preprocessing, model comparison, tuning and evaluation with scikit-learn.", level: 80 },
  { title: "Python and data", text: "pandas, NumPy, matplotlib, seaborn and Jupyter notebooks.", level: 85 },
  { title: "APIs and backend", text: "Serving models through FastAPI with validated inputs.", level: 70 },
  { title: "Web frontend", text: "HTML, CSS and JavaScript interfaces for ML apps.", level: 70 },
];

export const projects = [
  {
    slug: "mindscore",
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
