$(document).on("ready", function(){
  if($('.socket').length > 0){
    $('.connect').click(function(){
			$('.page1').hide();
			$('.page2').show();
      window.socket = io.connect('ws://192.168.10.106:3001');
      window.socket.emit('login','user login');
      window.socket.on('message', function(message){
        $('.show').append("<li>"+message+"</li>")
        console.log('收到的广播message: '+ message);
      })
    })
    $('.send').click(function(){
      var message = $('.message').val();
			$('.message').val(' ');
      console.log(message)
      window.socket.emit('message',message);
    })
  }
})
