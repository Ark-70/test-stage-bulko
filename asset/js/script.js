$(function(){

  let $mailinput = $('.input__mail'),
    $telinput = $('.input__tel');
    // $nominput = $('.input__nom'),
    // $msginput = $('.input__msg');

  function isMailValid(){
    let patternMail = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$");
    let mail = $mailinput.val();
    console.log(mail);
    console.log(patternMail.test(mail));

    return patternMail.test(mail);
  }

  function isTelValid(){
    let patternTel = new RegExp("^0+[0-9]{9}$");
    let tel = $telinput.val();

    console.log(tel);
    console.log(patternTel.test(tel));
    return patternTel.test(tel);
  }

  $('button').click(function(){
    console.log("ok");
    if(isMailValid() && isTelValid()){
      $('form').submit();
    }
  });


});
