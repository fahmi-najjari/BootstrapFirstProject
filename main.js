console.log("just checking");

$(document).ready(function() {
    
    var currentPlayer = "X";
    var gameDiv = ["", "", "", "", "", "", "", "", ""]; 
    var gameOver = false;
    var winNumbers = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ];

    
    $(".box").click(function() {
        var index = $(this).attr("index");

        
        if (gameDiv[index] !== "" || gameOver === true) {
            return;
        } else {
            $(this).text(currentPlayer);
            gameDiv[index] = currentPlayer;
        }

       
        if (checkWinner(currentPlayer)) {
            $("#winLossDraw").text(currentPlayer + " Wins");
            gameOver = true;
            return;
        }

        
        var tie = true;
        for (var i = 0; i < gameDiv.length; i++) {
            if (gameDiv[i] === "") {
                tie = false;
                break;
            }
        }
        if (tie) {
            $("#winLossDraw").text("It's a draw!");
            gameOver = true;
            return;
        }

      
        currentPlayer = (currentPlayer === "X") ? "O" : "X";
    });

    
    function checkWinner(player) {
        for (var i = 0; i < winNumbers.length; i++) {
            var winCombination = winNumbers[i];
            if (gameDiv[winCombination[0]] === player &&
                gameDiv[winCombination[1]] === player &&
                gameDiv[winCombination[2]] === player) {
                return true;
            }
        }
        return false;
    }

    
    function addComment() {
        const commentText = $('#commentInput').val();

        if (commentText) {
            const newComment = $('<div class="comment"></div>').text(commentText);
            $('#commentsSection').append(newComment);

            $('#commentInput').val('');
        }
    }

    $('#addCommentButton').on('click', function() {
        addComment();

        
        $('#commentsSection').empty();
    });

    
    $('#commentInput').on('keypress', function(event) {
        if (event.key === 'Enter') {
            addComment();
        }
    });

    $('#btn').on('click', function() {
        
        gameDiv = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        gameOver = false;

      
        $(".box").text(""); 
        $("#winLossDraw").text(""); 
    });
});






























