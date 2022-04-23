function randomColor() {
  return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")";
}
var a_idx = 0;
var a_click = 1;
var a = new Array(
  "♫♪˙‿˙♫♪", "ˇε ˇ", "( ⊙‿⊙)", "⚈ ̫ ⚈", "（⊃‿⊂）", "@（･ o ･）@", "（⌒.－）", "（≧∀≦）", "（⊙ᗜ⊙）", "╮(╯▽╰)╭",
  "o(￣┰￣*)ゞ", "<(ˍ ˍ*)", "(='_'=)", "(｡ŏ_ŏ)", "(*΄ิ‵ *)", "(*￣︿￣)", ",,Ծ‸Ծ,,", "( ° ∇ ° )", "( ^ω^)",
  "۞ ∧ ۞", "凸( •̀_•́ )凸", "( ื▿ ื) ", "ᕦ(ò_óˇ)ᕤ", "(。≖ˇェˇ≖｡)", "(￣ε(#￣)", "(。⌒∇⌒)。", "(✿◠‿◠)",
  "(o>▽<)", "(ΘェΘ)", "(Θ３Θ)", "(●′ω`●)", "(=′∇`=）", "ʕ·ᴥʔ",
  "(・ˍ・*)", "(・ε・●)　", "(・－・。)", "o(*////▽////*)o", "(๑> 灬 <)", "(ฅ´ω`ฅ)", "ฅ( ̳• ◡ • ̳)ฅ", "(º﹃º)",
  "ρ(´-＿-｀●)", "(っಠ‿ಠ)っ", "(つ◉_◉)つ", "⊂◉‿◉つ", "(＾ω＾)",
  "(●´^｀●)", "☜Ҩↂ⼼ↂҨ☞", "(⊙_☉)", "(ಥ﹏ಥ)", "ヾ(・ω・ｏ)",
  "╭∩╮◕ل͜◕)╭∩╮", "（ ÒㅅÓ)", "(^^(〃▽〃)", "(-@Д@)", "(｀･ω･´) ｂ", "(ó﹏ò｡)", "(´▽`ʃ♡ƪ)",
  "⊙ω⊙", "(◕‿◕)", "ヾ(◍°∇°◍)ﾉﾞ", "╭∩╮༼☯۝☯༽", "ʕ•̀ω•́ʔ");
jQuery(document).ready(function ($) {
  $("body").click(function (e) {
    var frequency = 2;
    if (a_click % frequency === 0) {
      var $i = $("<span/>").text(a[a_idx]);
      a_idx = (a_idx + 1) % a.length;
      var x = e.pageX,
        y = e.pageY;
      $i.css({
        "z-index": 9999,
        "top": y - 20,
        "left": x,
        "position": "absolute",
        "font-weight": "bold",
        "color": randomColor(),
        "-webkit-user-select": "none",
        "-moz-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none"
      });
      $("body").append($i);
      $i.animate({
        "top": y - 180,
        "opacity": 0
      },
        1500,
        function () {
          $i.remove();
        });
    }
    a_click++;
  });
});
// $(function () {
//   $.backstretch([
//     "https://i.imgtg.com/2022/04/23/xEhKg.png",
//     "https://i.imgtg.com/2022/04/23/xEi0B.jpg",
//     "https://i.imgtg.com/2022/04/23/xEnws.jpg",
//     "https://i.imgtg.com/2022/04/23/xE71K.jpg",
//     "https://i.imgtg.com/2022/04/23/xENHa.jpg",
//     "https://i.imgtg.com/2022/04/23/xEyBi.jpg",
//     "https://i.imgtg.com/2022/04/23/xEgKX.jpg",
//     "https://i.imgtg.com/2022/04/23/xEm0t.jpg"
//   ], { duration: 60000, fade: 1500 });
// });
$(function () {
  $("div.home-avatar")
    .attr('style',
      "background: url(https://ghchart.rshah.org/FFA500/yunzhaoyu2050);background-repeat: no-repeat;background-position: center;background-size: auto 7.5rem;");
});
function getCurrentDateString() {
  var now = new Date();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  return "" + now.getFullYear() + (month < 10 ? "0" + month : month) + (day < 10 ? "0" + day : day) + (hour < 10 ? "0" + hour : hour);
}
window.onload = function () {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      $('[rel="icon"]').attr('href', "/favicon.ico");
      $('[rel="shortcut icon"]').attr('href', "/favicon.ico");
      document.title = '⊙︿⊙';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "/favicon-32x32.png");
      $('[rel="shortcut icon"]').attr('href', "/favicon-32x32.png");
      document.title = '٩(●˙ε˙●)۶';
      titleTime = setTimeout(function () {
        document.title = OriginTitile;
      }, 2000);
    }
  });
}