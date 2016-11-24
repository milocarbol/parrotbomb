var parrot = {
  
  bomb : function(request, response) {
    var number = parseInt(request.query.text) || 108;
    var text = '';
    for (var i = 0; i < number; i++) {
      text += ':shuffleparrot::shufflefurtherparrot:';
    }
    response.json({
      'response_type': 'in_channel',
      'text': text
    });
  }
  
};

module.exports = parrot;