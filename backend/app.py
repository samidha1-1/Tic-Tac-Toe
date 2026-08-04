from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "Tic Tac Toe Backend Running from aws ec2"


@app.route("/move", methods=["POST"])
def move():

    data = request.json

    board = data["board"]

    winner = check_winner(board)

    return jsonify({
        "winner": winner
    })


def check_winner(board):

    winning_positions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for pos in winning_positions:

        a,b,c = pos

        if board[a] == board[b] == board[c] != "":
            return board[a]

    if "" not in board:
        return "Draw"

    return None



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
