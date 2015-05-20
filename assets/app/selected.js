$('#chat-tab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#chat-tab a:last').tab('show')