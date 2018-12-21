$(document).ready(function() {

    // get Tasks
    $.get('http://localhost:54003/api/Tasks', function(data) {
        console.log(data)

        // $('#tasks').html($.map(data, function(){
        //     return $('<option/>', {text: data.TaskName})
        // }))

        var select = $('#tasks')
        $(data).each(function(){
            select.append($('<option>').attr('value', this.TaskName).attr('id', this.Id).text(this.TaskName))
        })

    }, 'JSON')

    // default checked element
    var checkedElement = $('input:checked')[0]
    // listener for radio buttons
    $("input[type='radio']").click(function(){
        $(checkedElement).removeAttr("checked")
        $(this).attr("checked", "checked")
    })

    // default selected option
    var selectedElement = $("#tasks option:selected")[0]
    // listener for dropdown
    $("#tasks").change(function(){
        var selectedOption = $('#tasks option:selected')[0]
        $(selectedElement).removeAttr("selected")
        $(selectedOption).attr("selected", "selected")
    })

    // get data input from user and do Post
    $('#submit').click(function(){

        var EmployeeId = 1
        var taskId = $('option[selected]')[0].id
        var TaskId = parseInt(taskId)
        var hours = $('#hours')[0].value
        var Hours = parseInt(hours)
        var DateOfEntry = $('#date')[0].value
        var AbsenceReason = $('input[checked]')[0].value
        var Message = $('#message')[0].value

        //console.log($('option[selected]')[0].id)

        var sendObject = {
            EmployeeId: EmployeeId,
            TaskId: TaskId,
            Hours: Hours,
            DateOfEntry: DateOfEntry,
            AbsenceReason: AbsenceReason,
            Message: Message
        }

        console.log(sendObject)

        $.post('http://localhost:54003/api/Entry/post', sendObject, function(result){
            console.log(result)
        })
    })
})