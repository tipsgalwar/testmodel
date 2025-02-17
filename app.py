from flask import Flask, render_template, request, redirect, url_for
import json
from pymongo import MongoClient
import os
app = Flask(__name__)


client = MongoClient("mongodb+srv://tipsgalwar:tipsg%40alwar2104@tipsgalwar.fuiqn.mongodb.net/tipsG?retryWrites=true&w=majority&appName=TipsG")
db = client["tipsG"]
results_collection = db["results"]
registration_collection = db["registrations"]

def save_registration_local(Userdata):
    with open("registrations.json", "w") as file:
        json.dump(Userdata, file, indent=4)

# Save results to MongoDB
# Save registration data to MongoDB
def save_registration_mongodb(Userdata):
    # Insert a single registration entry
    result = registration_collection.insert_one(Userdata)
    # Add the inserted ID to the data for further reference
    Userdata["_id"] = str(result.inserted_id)
    return Userdata


def load_questions():
    with open("questions.json", "r") as file:
        return json.load(file)

# Save results locally
def save_results_local(results):
    with open("results.json", "w") as file:
        json.dump(results, file, indent=4)

def save_results_mongodb(results):
    results_collection.delete_many({})  # Clear previous data
    results_collection.insert_many(results)


# @app.route("/", methods=["GET", "POST"])
# def index():
#     if request.method == "POST":
#         # Collect registration form data
#         name = request.form.get("name")
#         mobile = request.form.get("mobile")
#         email = request.form.get("email")
#         institute = request.form.get("institute")
#         education = request.form.get("education")
#         city = request.form.get("city")

#         # Create a dictionary for registration data
#         Userdata = {
#             "name": name,
#             "mobile": mobile,
#             "email": email,
#             "institute": institute,
#             "education": education,
#             "city": city
#         }
        
#         # Save the registration data to MongoDB and local JSON file
#         saved_data = save_registration_mongodb(Userdata)  # Now saves to MongoDB
#         save_registration_local(Userdata)  # Saves locally to `registrations.json`

#         # Redirect to the test page with the user's details
#         return redirect(url_for("test"))
from datetime import datetime

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # Collect registration form data
        name = request.form.get("name")
        mobile = request.form.get("mobile")
        email = request.form.get("email")
        institute = request.form.get("institute")
        education = request.form.get("education")
        city = request.form.get("city")

        # Get the current date and time
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        # Create a dictionary for registration data
        Userdata = {
            "name": name,
            "mobile": mobile,
            "email": email,
            "institute": institute,
            "education": education,
            "city": city,
            "timestamp": timestamp  # Add timestamp column
        }
        
        # Save the registration data to MongoDB and local JSON file
        saved_data = save_registration_mongodb(Userdata)  # Now saves to MongoDB
        save_registration_local(Userdata)  # Saves locally to registrations.json

        # Redirect to the test page with the user's details
        return redirect(url_for("test"))

    return render_template("index.html")


# @app.route("/test", methods=["GET", "POST"])
# def test():
#     try:
#         # Load questions from the JSON file
#         questions = load_questions()
#         total_questions = len(questions)

#         if request.method == "POST":
#             # Extract user details (no validation required)
#             user_name = request.form.get("name")
#             user_mobile = request.form.get("mobile")

#             # Extract answers submitted by the user
#             user_answers = {key: value for key, value in request.form.items() if key not in ["name", "mobile"]}

#             # Correct answers from the JSON file
#             correct_answers = {str(q["id"]): q["answer"] for q in questions}

#             # Calculate the score
#             score = sum(1 for q_id, ans in user_answers.items() if correct_answers.get(q_id) == ans)

#             # Prepare the result entry
#             result = {
#                 "name": user_name,
#                 "mobile": user_mobile,
#                 "score": score,
#                 "total": total_questions,
#                 "result": f"{score} out of {total_questions}"
#             }

#             # Load existing results or initialize a new list
#             try:
#                 with open("results.json", "r") as file:
#                     results = json.load(file)
#             except FileNotFoundError:
#                 results = []

#             # Append the new result and sort by score
#             results.append(result)
#             results.sort(key=lambda x: x["score"], reverse=True)

#             # Add ranks to the sorted results
#             for idx, res in enumerate(results, start=1):
#                 res["rank"] = idx

#             # Save the updated results locally
#             with open("results.json", "w") as file:
#                 json.dump(results, file, indent=4)

#             # Save results to MongoDB
#             save_results_mongodb(results)

#             # Redirect to a "Thank You" page after submission
#             return redirect(url_for("thankyou"))

#         # Render the test page for GET requests
#         return render_template("test.html", questions=questions)

#     except Exception as e:
#         # Log the exception and return an error message
#         print(f"An error occurred: {e}")
#         return f"An error occurred: {e}", 500
from datetime import datetime

@app.route("/test", methods=["GET", "POST"])
def test():
    try:
        # Load questions from the JSON file
        questions = load_questions()
        total_questions = len(questions)

        if request.method == "POST":
            # Extract user details (no validation required)
            user_name = request.form.get("name")
            user_mobile = request.form.get("mobile")

            # Extract answers submitted by the user
            user_answers = {key: value for key, value in request.form.items() if key not in ["name", "mobile"]}

            # Correct answers from the JSON file
            correct_answers = {str(q["id"]): q["answer"] for q in questions}

            # Calculate the score
            score = sum(1 for q_id, ans in user_answers.items() if correct_answers.get(q_id) == ans)

            # Get the current date and time
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

            # Prepare the result entry
            result = {
                "name": user_name,
                "mobile": user_mobile,
                "score": score,
                "total": total_questions,
                "result": f"{score} out of {total_questions}",
                "timestamp": timestamp  # Add timestamp column
            }

            # Load existing results or initialize a new list
            try:
                with open("results.json", "r") as file:
                    results = json.load(file)
            except FileNotFoundError:
                results = []

            # Append the new result and sort by score
            results.append(result)
            results.sort(key=lambda x: x["score"], reverse=True)

            # Add ranks to the sorted results
            for idx, res in enumerate(results, start=1):
                res["rank"] = idx

            # Save the updated results locally
            with open("results.json", "w") as file:
                json.dump(results, file, indent=4)

            # Save results to MongoDB
            save_results_mongodb(results)

            # Redirect to a "Thank You" page after submission
            return redirect(url_for("thankyou"))

        # Render the test page for GET requests
        return render_template("test.html", questions=questions)

    except Exception as e:
        # Log the exception and return an error message
        print(f"An error occurred: {e}")
        return f"An error occurred: {e}", 500
            
@app.route("/thankyou", methods=["GET"])
def thankyou():
    result = request.args.get("result", "N/A")
    rank = request.args.get("rank", "N/A")
    return render_template("thankyou.html", result=result, rank=rank)


# if __name__ == "__main__":
#     app.run(debug=True)

if __name__ == "__main__":
    if not os.path.exists("questions.json"):
        print("Error: questions.json file is missing.")
    else:
        load_questions()
        app.run(host="0.0.0.0", port=5000, debug=True)


