// Javascript for popover project descriptions

$('.popover-dismiss').popover({
    trigger: 'focus'
});

$(function() {
    $('[data-toggle="popover"]').popover()
});

//===================================
// this code does not work, below is what I would like it to do:
//===================================

// Javascript for display message for email form, ideally this would display after the email has been sent, in place of the JSON object that appears on the following page. 

//0. add Ajax & Jquery cdn

//1. send message (.send_Email)

//2. new page (#feedback)

//3. display confirmation meassage for 7-10 seconds. (#name) for the 'name value from the form

//4. redirect back to 'contact' page. 

//5. form data has been cleared out. 

$('.send_Email').submit(function(e) {
    e.preventDefault();
    $.post('send_Email', function(data) {
        var name = $('#name').val();
        $('#feedback').html('Thanks! ' + name + ' your message to Max M. Jackson, M.Ed. has been submitted directly to him. Max usually returns his messages witin 24-48 business hours.');
    });
    return false;
});