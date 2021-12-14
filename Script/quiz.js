var score = 0
var questionSet0 = $('.fillerQuestion');
var questionSet1 = $('.firstQuestion');
var questionSet2 = $('.secondQuestion');
var resultsBtn = $('.Results');
var resultsShow = $('.Results-show');

var choice1 = $("#btn1");
var choice2 = $("#btn2");
var choice3 = $("#btn3");
var choice4 = $("#btn4");
var choice5 = $("#btn5");

var choice6 = $("#btn6");
var choice7 = $("#btn7");
var choice8 = $("#btn8");
var choice9 = $('#btn9');
var choice10 = $('#btn10');

var choice11 = $('#btn11');
var choice12 = $('#btn12');
var choice13 = $('#btn13');

var choice_checker = 0;

function filler1() {

  if (choice_checker == 0) {
    questionSet1.css('visibility', 'visible');
    choice11.addClass('selected');
    choice_checker = 1;
  }

}
function filler2() {
  if (choice_checker == 0) {

    questionSet1.css('visibility', 'visible');
    choice12.addClass('selected');
    choice_checker = 1;
  }
}
function filler3() {
  if (choice_checker == 0) {

    questionSet1.css('visibility', 'visible');
    choice13.addClass('selected');
    choice_checker = 1;
  }
}

function happy() {

  if (choice_checker == 1) {
    score = 1

    choice1.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;

  }
}

function sad() {
  if (choice_checker == 1) {
    score = 2

    choice2.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;
  }
}

function angry() {

  if (choice_checker == 1) {
    score = 3
    choice3.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;
  }

}

function nervous() {

  if (choice_checker == 1) {
    score = 4
    choice4.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;
  }

}

function sleepy() {

  if (choice_checker == 1) {

    score = 5
    choice5.addClass('selected');
    questionSet2.css('visibility', 'visible');
    choice_checker = 2;

  }

}

function rock() {

  if (choice_checker == 2) {

    score = score * 7;
    choice6.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
function rap() {

  if (choice_checker == 2) {

    score = score * 11;
    choice7.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
function pop() {
  if (choice_checker == 2) {

    score = score * 13;
    choice8.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
function alt() {

  if (choice_checker == 2) {

    score = score * 17;
    choice9.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}
function country() {

  if (choice_checker == 2) {

    score = score * 19;
    choice10.addClass('selected');
    resultsBtn.css('visibility', 'visible');
    choice_checker = 3;

  }

}

function checkResults() {
  if (questionSet0.css('display') === "inline" && questionSet1.css('display') === "inline" && questionSet2.css('display') === "inline") {
    questionSet0.css('display', 'none')
    questionSet1.css('display', 'none')
    questionSet2.css('display', 'none')

  }
  else if (questionSet0.css('display') === "none" && questionSet1.css('display') === "none" && questionSet2.css('display') === "none") {
    resultsBtn.innerHTML = "Check My responses";
    questionSet0.css('display', 'inline')
    questionSet1.css('display', 'inline')
    questionSet2.css('display', 'inline')

  }
  if (score === 7) {
    // resultsBtn.css('background','#93A681');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
    <h4>It's a nice day outside, or inside. Either way, pump up the music and dance to enjoy it!</h4>
    <iframe src="https://open.spotify.com/embed/playlist/071qTrW2k22BfUqwpqVyFb" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `);
  } else if (score === 11) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
    <h4>Glad you're feeling good. Treat yourself to something nice today while you enjoy these sick beats. You deserve it :D</h4>
    <iframe src="https://open.spotify.com/embed/playlist/3NrmIll0DsfwYEQg2JNSPE" 
    width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `);
  } else if (score === 13) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
    <h4>Happy you're doing well today! Hit up a friend and share something cool with them (they might enjoy your playlist too)</h4>
    <iframe src="https://open.spotify.com/embed/playlist/6XXO0Xkyp1OhSqibqdtqNF" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `);
  } else if (score === 17) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
    <h4>Take a second out of your day to appreciate something good that happened today, no matter how small it was! Don't forget moments like these. </h4><iframe src="https://open.spotify.com/embed/playlist/5Yd7Q4JW3sHapDSSzS0nCx" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 19) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
    <h4>There's something refreshing about spending time outside. Channel your inner country and breathe in the open road! </h4><iframe src="https://open.spotify.com/embed/playlist/4C0I1PcvcNotVDfSXRRogI" 
    width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 14) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
    <h4>It's okay to feel down sometimes. Take some time to acknowledge how you feel and let it all out. You got this :)</h4>
    <iframe src="https://open.spotify.com/embed/playlist/6dx08QdKiNd2F01AWilGSy" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 22) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>There's no shame in being upset. Something that helps me: the worst days are still only 24 hours long! We believe in you <3 </h4>
     <iframe src="https://open.spotify.com/embed/playlist/7hkb1yqHpauYPoetJFyQJM" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 26) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>"This is for everybody going through tough times, believe me, been there done that, but everyday above ground is a great day. Remember that" -- The legend Pitbull Mr. Worldwide</h4><iframe src="https://open.spotify.com/embed/playlist/0642Z3mSc6R2cVlqGPxKz1" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 34) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>It's okay if you need time by yourself, but theres no shame in relying on friends, family or others if you have to. </h4>
     <iframe src="https://open.spotify.com/embed/playlist/1wUaUuVOLXWnMfcmHr1doU" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 38) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Even cowboys get the blues...if you need to be distracted, try some relaxing hobbies to pass the time. </h4>
    <iframe src="https://open.spotify.com/embed/playlist/1Ay0VQZXLOrkzqCyERcKA5" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 21) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Listen to something loud and fast! Being angry sometimes is okay too.</h4>
     <iframe src="https://open.spotify.com/embed/playlist/1jmwNo7A5rq3dZKUenLmgf" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 33) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Your feelings are valid no matter what. One way to let it out is to exercise (enjoy this playlist while you do, haha)</h4>
     <iframe src="https://open.spotify.com/embed/playlist/5voJxVydB212pyb0v5CQ5x" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

    `)
  } else if (score === 39) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Don't be afraid to distance yourself from a stressful situation if you have to. Your mental health impacts a lot of your physical health as well. </h4><iframe src="https://open.spotify.com/embed/playlist/1UqANNNyB2HqPQzdKWNkFD" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 51) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Take a second to breathe and pause to assess the situation. Sometimes taking it slow is a good thing when you're angry as well.</h4><iframe src="https://open.spotify.com/embed/playlist/6E5vzipZVkkdLDgKCrlsgn" 
    width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

    `)
  } else if (score === 57) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Try writing out why you're mad in a letter or email. Once you've perfected and completed it, delete it once you're ready to let go. </h4>
     <iframe src="https://open.spotify.com/embed/playlist/1x8oaRzFEgH4Bb8XwPrtQ7" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 28) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Jitters are completely normal. Distract yourself with something fast and loud!</h4>
     <iframe src="https://open.spotify.com/embed/playlist/1nh99Lsz8qJ02zjdH4GZQ0" 
    width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

    `)
  } else if (score === 44) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>If something has the potential to go horribly wrong, it also has the potential of going fantastically well. You never know! </h4>
     <iframe src="https://open.spotify.com/embed/playlist/5yMOriqeGLjcC8ZfkGCuGe" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

    `)
  } else if (score === 52) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Make sure to treat yourself once you've finished what you're nervous or tense about. Get excited for it!</h4>
     <iframe src="https://open.spotify.com/embed/playlist/67GiPoY4OEO5RzrigwDlBk" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)

  } else if (score === 68) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Talk it out with a friend! Being nervous or tense together is better than worrying alone. </h4>
     <iframe src="https://open.spotify.com/embed/playlist/16NnaEucp5u5GG5K9NwirB" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

    `)
  } else if (score === 76) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4> Express how you feel in whatever way you can. Make charts to organize your thoughts, or write emails or letters to yourself. Surprising how much it can help!</h4>
     <iframe src="https://open.spotify.com/embed/playlist/3m8qdIVMIjqoye9qWVZnMP" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `)
  } else if (score === 19) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>You've been working hard. Go get some rest! Your body will thank you.</h4>
     <iframe src="https://open.spotify.com/embed/playlist/0JROZmzXdpVRFkE7JeKEJJ" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

    `)
  } else if (score === 35) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Need to go to sleep but can't? Try tensing your muscles for a few seconds, then releasing them completely. Repeat a few times, and you'll be asleep before you know it! Goodnight~~</h4>
     <iframe src="https://open.spotify.com/embed/playlist/0JROZmzXdpVRFkE7JeKEJJ" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>


    `)
  } else if (score === 55) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Sometimes life gets in the way of a good sleep schedule. Little by little, take the time to make relaxing part of your day. </h4>
     <iframe src="https://open.spotify.com/embed/playlist/13kyz1Ys4DMDmBmjwSZm85" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

    `)
  } else if (score === 65) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>You've been working hard. Go get some rest! Your body will thank you.</h4>
     <iframe src="https://open.spotify.com/embed/playlist/2eWNBUoOeK5HJexGMVn0NG" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>


    `)
  } else if (score === 85) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Studies have shown that people who sleep between 8-9.5 hours at night tend to wake up happier. Gotta start somewhere!</h4>
     <iframe src="https://open.spotify.com/embed/playlist/0TQnU4rbbrGNr2hdEDgtoO" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>


    `)
  } else if (score === 95) {
    // resultsBtn.css('background','#FFD400');
    resultsBtn.css('visibility', 'hidden');
    resultsShow.append(`
    <h3>Here are your results!</h3>
     <h4>Time to hit the hay...give your eyes a break! You'll see how much better you'll feel :)</h4>
     <iframe src="https://open.spotify.com/embed/playlist/0fIY27i9Y2vzW5Tx79JB3o" 
width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>



    `)
  }
}






