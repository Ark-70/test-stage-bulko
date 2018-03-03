$(function(){

  let $mailinput = $('.input__mail'),
    $telinput = $('.input__tel');
    // $nominput = $('.input__nom'),
    // $msginput = $('.input__msg');

  function isMailValid(){
    let patternMail = new RegExp("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$");
    let mail = $mailinput.val();

    return patternMail.test(mail);
  }

  function isTelValid(){
    let patternTel = new RegExp("^0+[0-9]{9}$");
    let tel = $telinput.val();

    return patternTel.test(tel);
  }

  $('button').click(function(){
    if(isMailValid() && isTelValid()){
      $('form').submit();
    }
  });


})(jQuery);
