from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "AI Learning Study Assistant Backend is Running!"


@app.route("/study", methods=["POST"])
def study():
    data = request.get_json()

    subject = data.get("subject", "")
    topic = data.get("topic", "")
    hours = data.get("hours", "1")

    plan = f"""
    Day 1: Learn the basic concepts of {topic}.
    
    Day 2: Study important concepts and examples in {subject}.
    
    Day 3: Practice simple exercises related to {topic}.
    
    Day 4: Solve questions and practical problems.
    
    Day 5: Revise {topic} and take a self-test.
    
    Daily study time: {hours} hour(s).
    """

    return jsonify({
        "subject": subject,
        "topic": topic,
        "hours": hours,
        "plan": plan
    })


if __name__ == "__main__":
    app.run(debug=True)
