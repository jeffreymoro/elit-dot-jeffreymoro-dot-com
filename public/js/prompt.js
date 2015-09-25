/*
// Link to the specific page. [Original]
function prompt()
      {
        var promptElement = document.getElementById("input");
        var promptInput = promptElement.value;
        window.location.href = "http://elit.jeffreymoro.com/" + promptInput.toLowerCase();
      };
*/

// Get a game from the Internet Archive
function gamePrompt(){
  var gameSearch = prompt("What game would you like to play?");
  window.location.href = "https://archive.org/details/internetarcade?and[]=" + gameSearch.toLowerCase();
}

// Hey it's a little text adventure right here!

// Link to the specific page. [Revised w/ easter eggs]
function commandPrompt(){
  var promptElement = document.getElementById("input");
  var promptInput = promptElement.value;
  promptInput = promptInput.toLowerCase();
  promptInput = promptInput.trim();
  if (promptInput === "gallery") {
    window.location.href = "/gallery";
  } else if ( promptInput === "afternoon" || 
              promptInput === "afternoon, a story" ||
              promptInput === "afternoon a story") {
    window.location.href = "/gallery/afternoon-joyce/";
  } else if ( promptInput === "my boyfriend came back from the war" || 
              promptInput === "mbcbftw" ||
              promptInput === "my boyfriend") {
    window.location.href = "/gallery/mbcbftw-lialina/";
  } else if ( promptInput === "the letter and the fly") {
    window.location.href = "/gallery/letter-lattanzi/";
  } else if ( promptInput === "slippingglimpse") {
    window.location.href = "/gallery/slippingglimpse-strickland/";
  } else if ( promptInput === "the hypermacbeth" || 
              promptInput === "hypermacbeth") {
    window.location.href = "/gallery/hypermacbeth-dlsan/";
  } else if ( promptInput === "little movies") {
    window.location.href = "/gallery/movies-manovich/";
  } else if ( promptInput === "zork" || 
              promptInput === "dungeon" ||
              promptInput === "zork (dungeon)") {
    window.location.href = "/gallery/zork-anderson/";
  } else if ( promptInput === "ad verbum" || 
              promptInput === "adverbum") {
    window.location.href = "/gallery/adverbum-montfort/";
  } else if ( promptInput === "game, game, game and again game" || 
              promptInput === "game game game..." ||
              promptInput === "game game game and again game") {
    window.location.href = "/gallery/game-nelson/";
  } else if ( promptInput === "agrippa, a book of the dead" || 
              promptInput === "agrippa a book of the dead" ||
              promptInput === "agrippa") {
    window.location.href = "/gallery/agrippa-gibson/";
  } else if ( promptInput === "the struggle continues") {
    window.location.href = "/gallery/struggle-yhchi/";
  } else if ( promptInput === "star wars, one letter at a time" || 
              promptInput === "star wars" ||
              promptInput === "star wars one letter at a time") {
    window.location.href = "/gallery/starwars-stefans/";
  } else if (promptInput === "course"){
    window.location.href = "/course";
  } else if (promptInput === "screening"){
    window.location.href = "/screening";
  } else if ( promptInput === "carrots and peas" || 
              promptInput === "carrots & peas" ||
              promptInput === "carrots peas") {
    window.location.href = "/screening/carrots-frampton/";
  } else if ( promptInput === "crossings and meetings" || 
              promptInput === "crossings & meetings" ||
              promptInput === "crossings meetings") {
    window.location.href = "/screening/crossings-emshwiller/";
  } else if ( promptInput === "h is for house") {
    window.location.href = "/screening/house-greenaway/";
  } else if ( promptInput === "super mario movie") {
    window.location.href = "/screening/mario-arcangel/";
  } else if ( promptInput === "monster movie") {
    window.location.href = "/screening/monster-murata/";
  } else if ( promptInput === "pixilation" || 
              promptInput === "pixillation" ||
              promptInput === "pixelation") {
    window.location.href = "/screening/pixillation-schwartz/";
  } else if ( promptInput === "vertical roll") {
    window.location.href = "/screening/vertical-jonas/";
  } else if ( promptInput === "technology transformation: wonder woman" || 
              promptInput === "technology transformation wonder woman" ||
              promptInput === "technology transformation" ||
              promptInput === "wonder woman") {
    window.location.href = "/screening/wonder-birnbaum/";
  } else if ( promptInput === "zorns lemma2" || 
              promptInput === "zorns lemma 2" ||
              promptInput === "zornslemma2") {
    window.location.href = "/screening/zorns-bookchin/";
  } else if (promptInput === "about"){
    window.location.href = "/about";
  } else if (promptInput === "otters"){
    window.location.href = "https://www.youtube.com/watch?v=epUk3T2Kfno";
  } else if (promptInput === "five college digital humanities" || promptInput === "5colldh"){
    window.location.href = "http://5colldh.org";
  } else if (promptInput === "game") {
    gamePrompt();
  } else if (promptInput === "secrets") {
    alert("Wouldn't you like to know?");
  } else {
    alert("I'm afraid I can't do that.");
  }
}

// // Let you type wherever!
// function inputFocus(){
//     document.getElementById("input").focus();
// }
// window.onkeydown = inputFocus;

// Execute the prompt on Enter.
jQuery(document).ready(function()
{
    jQuery(document).keypress(function(e) {
        if(e.which == 13) {
            commandPrompt();
        }
    });
});
