console.log("just checking");
$(document).ready(function() {
    
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










    
});
