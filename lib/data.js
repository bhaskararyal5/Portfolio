export const site = {
  name: "Bhaskar Aryal",
  role: "Machine learning enthusiast",
  email: "aryalbhaskar5@gmail.com",
  github: "https://github.com/bhaskararyal5",
  linkedin: "https://www.linkedin.com/in/bhaskar-aryal-5a1520406/",
  instagram: "https://www.instagram.com/bhaskar_5960/",
  facebook: "https://www.facebook.com/bhaskar.aryal.524",
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
    image: "/projects/mindscore-poster.jpg",
    video: "/projects/mindscore-demo.webm",
    title: "MindScore: Student Mental Health Predictor",
    kind: "Machine learning, full-stack",
    summary: "Predicts a student mental health score (0 to 10) from social media habits and lifestyle.",
    intro: "MindScore is a full-stack machine learning project. It takes a student's daily habits, such as social media use, sleep and stress, and predicts a mental health score between 0 and 10. A scikit-learn model sits behind a FastAPI backend, and a responsive web page lets anyone try it.",
    stats: [["Records", "5,000"], ["Features", "12"], ["Best model", "Random Forest"], ["Test R²", "0.878"]],
    repo: "https://github.com/bhaskararyal5/Mental_Health_Predictor",
    repoLabel: "View on GitHub",
    sections: [
      ["The idea", ["Heavy social media use is often linked to how students feel, but the link is hard to see by eye. This project asks a simple question: given a student's habits, how well can a model estimate their mental health score? The goal was to build the whole thing, from raw data to a working app, not just a notebook."]],
      ["Data and preprocessing", ["The dataset has 5,000 student records. The 12 input features are age, gender, country, academic level, most used platform, purpose of use, average daily usage hours, daily phone unlocks, study hours, physical activity hours, sleep hours per night and stress level, and the target is the mental health score. Two duplicate rows were dropped, leaving 4,998, and an outlier check flagged some unrealistic physical activity values, so negative hours were clipped to zero.", "Countries outside the top 10 were grouped into one Other category so rare values would not add noise. Stress level was encoded as an ordered scale because Low, Medium and High have a natural order. Study hours were log-transformed and scaled to tame skew, and the remaining categories were one-hot encoded.", "All of these steps live in one scikit-learn pipeline. That means the exact same cleaning runs in training and in the live app, and raw input goes straight into predict()."]],
      ["Model results", ["Models were compared on a 30% hold-out set that they never saw during training. R² shows how much of the variation in scores the model explains (1.0 is perfect). MAE is the average size of the error in score points, and RMSE punishes large mistakes more.", ["Linear Regression: R² 0.740, MAE 0.536, RMSE 0.676", "Random Forest (default, deployed): R² 0.878, MAE 0.347, RMSE 0.464", "Random Forest (tuned): R² 0.865, MAE 0.369, RMSE 0.487"], "The Random Forest wins because habits interact in ways a straight line cannot capture. Tuning used RandomizedSearchCV with 15 combinations and 5-fold cross-validation (best: 200 trees, max depth 15, min split 5, min leaf 2). It lowered the training R² from 0.98 to 0.95, but the test R² dipped slightly to 0.865, so the simpler default model was kept."]],
      ["The app", ["A FastAPI backend with Pydantic validation exposes a /predict endpoint, so bad inputs are rejected with a clear message instead of crashing the model. The frontend has sliders for each habit, an animated score gauge, personalised insights on sleep, usage and stress, dark and light themes, and a live indicator that shows whether the API is connected."]],
      ["Limitations", ["The data only covers ages 18 to 24, and the gap between training R² (0.98) and test R² (0.88) points to some overfitting. The data looks survey-style or synthetic, and the model finds correlations, not causes. This is an educational project, not a medical tool."]],
      ["Tech stack", [["Python, pandas and scikit-learn for data and modelling", "FastAPI and Pydantic for the API", "HTML, CSS and JavaScript for the frontend"]]],
    ],
  },
  {
    slug: "nyc-airbnb-classifier",
    featured: true,
    image: "/projects/nyc-airbnb-poster.jpg",
    video: "/projects/nyc-airbnb-demo.webm",
    title: "NYC Airbnb Classifier",
    kind: "Machine learning, web app",
    summary: "A classifier trained on 48,895 NYC Airbnb listings that predicts the room type from location, price and host details.",
    intro: "This project trains a classifier on the public NYC Airbnb 2019 listings dataset. Given a listing's borough, neighbourhood, coordinates, price and host details, it predicts whether the listing is an entire home, a private room or a shared room. The model is saved to a file and served by a small Python backend to an interactive web page.",
    stats: [["Listings", "48,895"], ["Room types", "3"], ["Best model", "Random Forest"], ["CV accuracy", "0.852"]],
    repo: "https://github.com/bhaskararyal5/NYC-Airbnb-Classifier",
    repoLabel: "View on GitHub",
    sections: [
      ["The idea", ["Airbnb listings in New York differ a lot by neighbourhood, price and host. This project asks whether those details are enough to tell what kind of room a listing is: Entire home/apt, Private room or Shared room. It then makes the answer usable through a web page instead of leaving it inside a notebook."]],
      ["Data and cleaning", ["The dataset has 48,895 listings and 16 columns, with no duplicate rows. Missing values appeared in last_review and reviews_per_month (10,052 each, because many listings have no reviews yet), plus a few in name and host_name.", ["Dropped identifier and text columns that do not describe the listing itself: id, name, host_id, host_name and last_review", "Filled missing reviews_per_month with 0, since no reviews means zero reviews", "Capped extreme price and minimum_nights values at the 99th percentile instead of deleting rows"]]],
      ["Class imbalance", ["The three room types are not equally common, and Shared room is a small minority. Plain accuracy can hide this, because a model can score well by mostly ignoring the rare class. So the data was split 70/30 with stratification to keep the same class proportions in training and testing, the models used balanced class weights, and macro F1 was tracked alongside accuracy because it treats every class equally."]],
      ["Preprocessing", ["Everything is wrapped in one scikit-learn pipeline, so training and prediction use identical steps:", ["Numeric features (price, minimum nights, reviews, reviews per month, host listings, availability, latitude, longitude): median imputation, then standard scaling", "Categorical features (borough and neighbourhood): most-frequent imputation, then one-hot encoding that safely ignores unseen values"]]],
      ["Model comparison", ["Four models were compared with 3-fold cross-validation on the training data:", ["Logistic Regression: accuracy 0.658, macro F1 0.522", "Decision Tree: accuracy 0.786, macro F1 0.651", "Random Forest: accuracy 0.852, macro F1 0.711", "Gradient Boosting: accuracy 0.849, macro F1 0.705"], "Random Forest came out on top, with Gradient Boosting very close behind. Logistic Regression struggled because room type depends on location and price in non-linear ways."]],
      ["Tuning", ["The Random Forest was tuned with RandomizedSearchCV (10 random combinations, 3-fold cross-validation, scored on macro F1). It searched over the number of trees (100 to 300), the maximum depth (8 to 20, or unlimited) and the minimum samples to split a node (2, 5 or 10). The best pipeline was evaluated on the held-out 30% test set with accuracy, macro F1 and a confusion matrix."]],
      ["The app", ["The interface is themed around the New York skyline. You pick a borough, choose a neighbourhood, set the latitude and longitude, then fill in the nightly price, minimum nights and how many listings the host has. As you fill the form, windows in the skyline light up to show your progress. Press predict and the model tells you what kind of room the listing is likely to be."]],
      ["How it fits together", [["Notebook: explore the data, clean it and train the model", "Model file: the best pipeline is saved with joblib as model_nyc_airbnb.pkl, so it never needs retraining", "Backend: main.py loads the saved model and returns predictions", "Frontend: index.html, style.css and script.js give users the form"]]],
      ["Tech stack", [["Python, pandas, NumPy, scikit-learn, seaborn and Matplotlib for analysis and modelling", "Jupyter Notebook for the experiments", "joblib for saving the model", "A Python backend (main.py)", "HTML, CSS and JavaScript for the interface"]]],
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
