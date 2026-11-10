export const site = {
  name: "Bhaskar Aryal",
  role: "Machine learning enthusiast",
  email: "you@example.com", // TODO: put your real email
  github: "https://github.com/bhaskararyal5",
  linkedin: "https://www.linkedin.com/in/bhaskar-aryal-5a1520406/",
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
    featured: true,
    image: "/projects/mindscore.svg",
    title: "MindScore: Student Mental Health Predictor",
    kind: "Machine learning, full-stack",
    summary: "Predicts a student mental health score (0 to 10) from social media habits and lifestyle.",
    intro: "MindScore is a full-stack machine learning project. It takes a student's daily habits, such as social media use, sleep and stress, and predicts a mental health score between 0 and 10. A scikit-learn model sits behind a FastAPI backend, and a responsive web page lets anyone try it.",
    stats: [["Records", "5,000"], ["Features", "12"], ["Best model", "Random Forest"], ["Test R²", "0.878"]],
    repo: "https://github.com/bhaskararyal5/Mental_Health_Predictor",
    repoLabel: "View on GitHub",
    sections: [
      ["The idea", ["Heavy social media use is often linked to how students feel, but the link is hard to see by eye. This project asks a simple question: given a student's habits, how well can a model estimate their mental health score? The goal was to build the whole thing, from raw data to a working app, not just a notebook."]],
      ["Data and preprocessing", ["The dataset has 5,000 student records and 12 input features. Before training, duplicate rows were dropped and negative activity hours were clipped to zero, since they cannot be real.", "Countries outside the top 10 were grouped into one Other category so rare values would not add noise. Stress level was encoded as an ordered scale because Low, Medium and High have a natural order. Study hours were log-transformed and scaled to tame skew, and the remaining categories were one-hot encoded.", "All of these steps live in one scikit-learn pipeline. That means the exact same cleaning runs in training and in the live app, and raw input goes straight into predict()."]],
      ["Model results", ["Models were compared on a 30% hold-out set that they never saw during training. R² shows how much of the variation in scores the model explains (1.0 is perfect). MAE is the average size of the error in score points, and RMSE punishes large mistakes more.", ["Linear Regression: R² 0.740, MAE 0.536, RMSE 0.676", "Random Forest (default, deployed): R² 0.878, MAE 0.347, RMSE 0.464", "Random Forest (tuned): R² 0.865, MAE 0.369, RMSE 0.487"], "The Random Forest wins because habits interact in ways a straight line cannot capture. Tuning did not beat the default settings, so the simpler default model was kept."]],
      ["The app", ["A FastAPI backend with Pydantic validation exposes a /predict endpoint, so bad inputs are rejected with a clear message instead of crashing the model. The frontend has sliders for each habit, an animated score gauge, personalised insights on sleep, usage and stress, dark and light themes, and a live indicator that shows whether the API is connected."]],
      ["Limitations", ["The data only covers ages 18 to 24, and the gap between training R² (0.98) and test R² (0.88) points to some overfitting. The data looks survey-style or synthetic, and the model finds correlations, not causes. This is an educational project, not a medical tool."]],
      ["Tech stack", [["Python, pandas and scikit-learn for data and modelling", "FastAPI and Pydantic for the API", "HTML, CSS and JavaScript for the frontend"]]],
    ],
  },
  {
    slug: "nyc-airbnb-classifier",
    featured: true,
    image: "/projects/nyc-airbnb-classifier.svg",
    title: "NYC Airbnb Classifier",
    kind: "Machine learning, web app",
    summary: "A model trained on the NYC Airbnb 2019 listings dataset, wrapped in a small web app.",
    intro: "This project works with the public NYC Airbnb 2019 listings dataset. The data is explored and cleaned in a Jupyter notebook, a model is trained and saved to a file, and a small Python backend loads that model so a web page can use it for predictions.",
    stats: [["Dataset", "AB_NYC_2019"], ["Language", "Python"], ["Model", "Saved .pkl"], ["Interface", "Web"]],
    repo: "https://github.com/bhaskararyal5/NYC-Airbnb-Classifier",
    repoLabel: "View on GitHub",
    sections: [
      ["The idea", ["Airbnb listings in New York differ a lot by neighbourhood, room type and price. This project uses that public data to train a model that learns from those patterns, then makes it usable through a simple web page instead of leaving it inside a notebook."]],
      ["How it works", ["The work moves through four stages, each in its own file in the repository:", ["Notebook: explore the AB_NYC_2019 data, clean it and train the model", "Model file: the trained model is saved as a pickle so it never needs retraining", "Backend: main.py loads the saved model and returns predictions", "Frontend: index.html, style.css and script.js give users a simple form"]]],
      ["Why save the model?", ["Training can take time, but using a trained model is instant. By saving it once and loading it in the backend, the web app answers in a fraction of a second and always uses exactly the model that was tested in the notebook."]],
      ["Tech stack", [["Python and Jupyter Notebook for analysis and training", "A saved .pkl model file", "A Python backend (main.py)", "HTML, CSS and JavaScript for the interface"]]],
    ],
  },
  {
    slug: "light-detector-wheatstone-bridge",
    featured: false,
    image: "/projects/light-detector.svg",
    title: "Light Detector using a Wheatstone Bridge",
    kind: "Electronics, analog circuit",
    summary: "An analog circuit that senses light with an LDR in a Wheatstone bridge and switches an LED on.",
    intro: "This circuit senses whether light is falling on it. A light dependent resistor (LDR) sits in a Wheatstone bridge, an LM741 op-amp compares the two sides of the bridge, and a BC547 transistor switches an LED on when light is detected. With a relay added, the same idea can control mains appliances.",
    stats: [["Sensor", "LDR"], ["Comparator", "LM741"], ["Switch", "BC547"], ["Supply", "9 V battery"]],
    repo: "https://circuitdigest.com/electronic-circuits/light-detector-circuit-using-wheatstone-bridge",
    repoLabel: "View circuit reference",
    sections: [
      ["The idea", ["Lights are often left on by accident, which wastes electricity. A circuit that can tell light from dark can switch things automatically, for example a street light that turns on at night. This design uses the Wheatstone bridge idea to do that sensing in a clean, adjustable way."]],
      ["The Wheatstone bridge", ["A Wheatstone bridge is four resistors arranged in a diamond with two midpoints, here called C and D. When the ratios of the two arms are equal, the voltage between C and D is zero and the bridge is balanced.", "In this circuit one arm holds the LDR and a 10 k potentiometer, and the other arm holds two fixed 10 k resistors. The potentiometer sets the balance point, so it works as a sensitivity adjustment."]],
      ["How the circuit works", ["An LDR is a resistor made of cadmium sulphide whose resistance drops when light hits it, from around a megaohm in the dark to a few hundred ohms in bright light.", ["Light falls on the LDR and its resistance drops", "The voltage at point C rises compared with point D", "The LM741 op-amp, used as a comparator, sees pin 3 above pin 2 and its output goes HIGH", "The HIGH output drives the base of the BC547 transistor, which switches the LED on", "In the dark, point D is higher, the output stays LOW, the transistor stays off and the LED stays dark"]]],
      ["Components", [["LDR (light dependent resistor)", "LM741 op-amp IC", "BC547 NPN transistor", "10 k potentiometer", "10 k and 330 ohm resistors", "Red LED", "9 V battery"]]],
      ["What each part does", ["The LDR is the sensor, and the bridge turns its changing resistance into a small voltage difference. The LM741 amplifies that tiny difference into a clear ON or OFF signal. The BC547 acts as a switch because an op-amp output alone should not drive a load directly."]],
      ["Where it can be used", ["Automatic street lights, bedroom lights, burglar alarms, light meters, and obstacle detection when paired with an LED. Adding a relay lets the same circuit switch AC home appliances."]],
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
  { title: "+2 (Higher Secondary Education)", school: "Pioneers Higher Education Academy", note: "Completed" },
  { title: "SEE (Secondary Education Examination)", school: "Pioneers Higher Education Academy", note: "Completed" },
];

export const facts = [["Focus", "Machine learning"], ["Studying", "Computer Engineering"], ["Based in", "Nepal"]];
