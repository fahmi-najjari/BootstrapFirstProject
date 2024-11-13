console.log("just checking");
$(document).ready(function() {
    $('#addCommentButton').on('click', function() {
        const commentText = $('#commentInput').val();
        
       
        if (commentText) {
            
       const newComment = $('<div class="comment"></div>').text(commentText);
    $('#commentsSection').append(newComment);
      $('#commentInput').val('');
        }
    });
    });
