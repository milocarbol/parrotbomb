var parrot = {
  parrot_march : ':shuffleparrot::shufflefurtherparrot:',
  
  bomb : function(request, response) {
    var response_text = '';
    
    var command = request.query.text;
    if (command) {
      if (parseInt(command)) {
        // Default text, custom number.
        response_text = this.make_bomb(this.parrot_march, parseInt(command));
      }
      else if (command.split(' ').length == 1){
        // Custom text, default number.
        response_text = this.make_full_bomb(command);
      }
      else {
        var args = command.split(' ');
        if (parseInt(args[1])) {
          // Custom text, custom number.
          response_text = this.make_bomb(args[0], args[1]);
        }
        else {
          // Custom text, bad number (use default).
          response_text = this.make_full_bomb(args[0]);
        }
      }
    }
    else {
      // Default text, default number.
      response_text = this.make_full_bomb(this.parrot_march);
    }
    
    response.json({
      'response_type': 'in_channel',
      'text': response_text
    });
  },
  
  make_full_bomb : function(text) {
    return this.make_bomb(text, Math.floor(4000 / text.length));
  },
  
  make_bomb : function(text, repeats) {
    var bomb = '';
    for (var i = 0; i < repeats; i++) {
      bomb += text;
    }
    return bomb;
  }
  
};

module.exports = parrot;