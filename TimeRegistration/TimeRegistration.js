$(document).ready(function() {
    $.get('http://localhost:54003/api/Tasks', function(data) {
        console.log(data)

        // $('#tasks').html($.map(data, function(){
        //     return $('<option/>', {text: data.TaskName})
        // }))

        var select = $('#tasks')
        $(data).each(function(){
            select.append($('<option>').attr('value', this.TaskName).text(this.TaskName))
        })
    }, 'JSON')
})