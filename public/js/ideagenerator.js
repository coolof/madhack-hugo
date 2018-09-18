$(document).ready(function() {
  function randomize(settings) {
    var solutions = $('.generator__options--solution li').map(function() {return $(this).text();}).get();
    var subjects = $('.generator__options--subject li').map(function() {return $(this).text();}).get();

    var randomSolution = solutions[Math.floor(Math.random()*solutions.length)];
    var randomSubject = subjects[Math.floor(Math.random()*subjects.length)];

    var generated = Math.floor(Math.random() * (subjects.length - 1 + 1) + 1);

    $('.generated__value').addClass('animate');

    setTimeout(function(){
      $('.generated__value').removeClass('animate');
      $('.generated__value--solution').text(randomSolution);
      $('.generated__value--subject').text(subjects[generated - 1]);
      $('.generated__value--fact').hide();
      $('.generated__value--fact').eq(generated - 1).show();
    }, 310);
  }

  randomize();

  setInterval(function(){
    randomize()
  },4000)
});
