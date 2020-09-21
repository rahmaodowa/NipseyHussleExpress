var thumbUp = document.getElementsByClassName("fa fa-heart");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    "I think everybody's trying to get to a place in themselves where they conquer what they was afraid of; they achieve some of their life goals, kept their word about what they were trying to do.",
    '"I always had passion for rap music and I was always trying to create a situation to where I could do this fulltime.  "',
    "Thought is powerful in all phases. Even in my career even in my life things end up exactly how I visualized them.  ",

         "I never wanted to alienate my brand for business. I always wanted to keep it authentic and keep as pure as I could.  ",
      "On a mission your worst enemy is idle time.  ",


         "I'm about seeing longterm seeing a vision understanding nothing really worthwhile happens overnight and just sticking to your script long enough to make something real happen.  ",


         "If you dont know your fullthrottle history the whole story of how you came to where you are it's kind of hard to put things together.  ",
   "To me respect comes first.  ",

         "My thing is that I dont give no person that much power over my path that I'm walking. Not one person can make or break what I'm doing except me or God.  ",


         "Without a game plan and without a strong sense of faith in what you're doing it's gonna be real hard to accomplish anything.  ",


         "And it's possible to monetize your art without compromising the integrity of it for commerce.  ",


         "I'm focusing on the music but I still got a cold library of books that Ive either read or I plan on getting to.  ",

         "Most important thing is to get rid of doubt. If you got doubt in what you're doing it's not gonna work.  ",

       "I knew I wanted to work for myself when I was about eleven.  ",


         "Before rap my last name was my lifestyle and when I visualize success it looked like right now.  ",


         "If youve got a plan it's not just like a pipe dream. You have a stepbystep list of things to do to get to your goal.  ",

       "I feel that luck is a product of hard work.  ",

       "We're not the cause we're the effect.  ",

         "You've got to have faith in what you're doing and not take no for an answer.  ",

         "Your parents are supposed to tell you to make decisions that are gonna help you and thatll have a positive effect on your life and your wellbeing.  ",


         "I hit the league straight out the streets with no talent scout.  ",


         "Success to me is just being able to do what you love to do and support yourself all through.  ",


         "If you sharing your success and not your struggle yous a fool.  ",

         "If you dont have a plan it's very hard to really have faith in what you're doing cause soon as something pop up it's gonna look like the endall.  ",


         "I'm more focused on giving solutions and inspiration more than anything.  ",


         "I'm at peace with what I'm doing I feel good with what I wake up doing and about my lifestyle.  ",


         "Most the time when it rains it start pouring but how we grind it make the weather change for us.  ",

       "Hope opportunity dont knock when opportunists in your group.  ",

       "Dedication hard work plus patience.  ",


         "We got turned down we failed had setbacks had to start over a lot of times. But we kept going at it. In anybodys case thats always the distinguishing factor.  ",


         "Instead of trying to build a brick wall lay a brick every day. Eventually youll look up and youll have a brick wall.  ",


         "Luck is just being prepared at all times so when the door opens you're ready.  ",

         "I just believe in ownership. I believe in investing in yourself. Your foundation should be strong.  ",

         "Success or greatness come with a rollercoaster ride anybody can apply the marathon concept to what they do.  ",


         "Sometimes you have to take two steps back to take ten forward.  ",

         "Instead of trying to build a brick wall lay a brick everyday. Eventually youll look up and youll have a brick wall.   ",


         "Most important thing is to get rid of doubt. If you got doubt in what you're doing it's not gonna work.   ",

         "Youve got to have faith in what you're doing and not take no for an answer.    ",

         " Success to me is just being able to do what you love to do and support yourself all through.    ",


         "We got turned down we failed had set backs had to start over a lot of times. But we kept going at it. In anybodys case thats always the distinguishing factor.    ",

         "Without a game plan and without a strong sense of faith in what you're doing it's gonna be real hard to accomplish anything.    ",


         "I just believe in ownership I believe in investing in yourselfYour foundation should be strong.   ",

         "Sometimes you have to take two steps back to take ten forward.   ",


         "I never wanted to alienate my brand for business  I always wanted to keep it authentic and keep as pure as I could.    ",


         "My thing is that I dont give no person that much power over my path that I'm walking. Not one person can make or break what I'm doing except me or God.    ",

       "so check out these Lil Peep quotes about love life and music.",


         "Luck is just bein prepared at all times so when the door opens you're ready.    ",

         "Seize the opportunity believe and take control of it. Then get on your marathon and grind it til it's over with.    ",


         "Your parents are supposed to tell you to make decisions that are gonna help you and thatll have a positive effect on your life and your wellbeing.     ",


         "I'm more focused on giving solutions and inspiration more than anything.    ",


         "I'm focusing on the music but I still got a cold library of books that Ive either read or I plan on getting to.    ",
    "To me respect comes first.    ",


         "Hopin what I'm doing truly make my mama proud Cause for a very long time I was the reason for her frowns.   ",


         "Be truthful with yourself and other people and try your best to make decisions outside of your ego.    ",


         "I'd rather invest in real estate  invest in some assets as opposed to trick all my money in diamonds and cars  it look good but at the end of the day you're losing value. It aint appreciating it's depreciating. I'm trying to get a real asset. Take care of my people.    ",


         "Material things aint nothing you feel me At the end of the day it's who you is.    ",


         "Success or greatness come with a rollercoaster ride anybody can apply the marathon concept to what they do.    ",

       "we're not the cause we're the effect.   ",


         "I'm at peace with what I'm doing I feel good with what I wake up doing and about my lifestyle.   ",


         "If you dont know your fullthrottle history the whole story of how you came to where you are it's kind of hard to put things together.   ",

       "On a mission your worst enemy is idle time.   ",


         "I always had passion for rap music and I was always trying to create a situation to where I could do this fulltime.    ",


         "And it's possible to monetize your art without compromising the integrity of it for commerce.   ",

         "Before rap my last name was my lifestyle and when I visualize success it looked like right now.   ",

       "Most of the time I look inside And find the answers waitin.   ",


         "I hit the league straight out the streets wit no talent scout.   ",


         "Aint gone be no east cost west coast war. Aint gone be no black men killing black men.    ",


         "We playing the long game. We dont want the money to stop when we go. When we cant work no more. We want it to outlive us we want it to be generational    ",

         "I call it dropping the rope. Youve got to drop a rope. Everybody got to climb up but you gotta drop the rope.    ",


         "If youve got a plan it's not just like a pipe dream. You have a stepbystep list of things to do to get to your goal.    ",

         "I believe that economics is based on scarcity of markets and it's possible to monetize your art without compromising the integrity of it for commerce.    ",

       "Circle got smaller everybody cant go    ",

         "Thought is powerful in all phases. Even in my career even in my life things end up exactly how I visualized them.    ",


         "I think you can give a pure artistic product if you understand how to build your own industry.    ",
  "I knew I wanted to work for myself when I was about eleven   ",

         "I'm about seeing longterm seeing a vision understanding nothing really worthwhile happens overnight and just sticking to your script long enough to make something real happen.   ",
  "None of my peers avoided prison. None of em.   ",

         "I realized the power of hiphop. I realized how influential this music and this culture are.   ",

         "Black people in America people from the struggle immigrants it's no generational wealth that we are attached to so we are tasked to create  in one generation  closing the gap. Thats why we so Doomsday about getting to the check cause it's life or death for real.   ",

         "If I wasnt involved in this hiphop sht Id probably be breakin the law to eat and feed my family and maintain the lifestyle that I'm used to.    ",
  "Every artist wants something different out the game.   ",
 "Life is what you make it I hope you make a movement.    ",

         "I grew up in an environment where being polite was taken as a weakness. So I just fought everybody.   ",

         "When I became a man and I started to understand the difference between the truth and what your parents are supposed to tell you theres a difference know what I mean    ",

         "I intend to inspire people with my story motivate young people that grew up like myself or even not like myself. Just you know go through the human experience.   ",

         "Gangbanging is a survival instinct regardless of how anybody tries to paint it.    ",

         "Even as you make progress you need the discipline to keep from backtracking and sabotaging the success as it's happening.   ",

         "And it can be as simple as it seems If you never doubt yourself and learn from everything you see   ",

         "I'm the type person my safe place to be emotional is the booth.   ",

         "I was never ignorant as far as being experienced in classrooms and learning about different subjects and actually soaking it up.    ",

         "You're not going to scare me into being somebody I dont want to be.   ",

         "An artist always know everything he does you know what I'm saying all the record he starts and dont end up in the public and just sit on the harddrive.    ",
 "I identify myself as a hustler since I was a young kid.   ",

         "As gang members as young dudes in the streets especially in L.A. we're the effect of a situation. We didnt wake up and create our own mindstate and our environment we adapted our survival instincts.    ",
 "I built a company at the same time I built a career.   ",

         "Obviously from childhood to my teenage years I really came into my own. I left the house early I was on the streets when I was like . Ive been holdin my own since that age.    ",

         "I say it's worth it I wont say it's fair Find your purpose or you wastin air.    ",
  "Turning up my hustles how I give myself a raise    ",
"Started out the trunk ended up at the dealership    ",

         "If you're a hustler you should find somewhere to capitalize off that and turn it into some money.    ",

         "I dont know about hell I dont know about heaven All I know is bout right now and this lifestyle is interesting    ",

         "Every step is like chess The wrong move gets you killed So we act on how we think And never speak on how we feel.    ",

         "And what good is dreaming If you cant make your sht come true    ",
  "What good is a team When everyone depends on you    ",

         "Cause if you sharing your success And not your struggle yous a fool.    ",
 "I'm tryin to live my life so when it's over I got no regrets    ",

         "Try to have more faith and less fear Try to express it to your peers I'm talking bout dreams Better to do it and let it be seen cause then it's so clear    ",
"I hate to lose so I play too rough    ",
  "Finish what we started reach them heights you know    ",
     "Play the game like Ive never won once    ",
        "Gotta cross my Ts and dot my Is or I cant sleep well    ",

         "Dont worry bout what people gon say girl do what you want to    ",
         "Dont waste your time it dont make you rich    ",

         "When you let go of your pride youll find a lesson in your pain    ",

         "This technology has empowered everybody. And it's giving people you know it's as big as you wanna make it and you know it's as far as you take it    ",

         "it's strictly business in this game still they faking friendly. Dont let em take advantage of you and it make em envy    ",

         "If you look at the people in your circle and dont get inspired then you dont have a circle. You have a cage.    ",

         "Be more fearless. All my radical moonshots have defined me. That dont be my downfall my downfall will be not going crazy not having a higher expectation. Anytime I done set my sight on something that seemed way outlandish it always come back exactly how I seen it. So I think I would tell myself to just put way bigger goals on the wall. Just have a bigger vision have a higher expectation.    ",

         "You will never be criticized by someone who is doing more than you. You will only be criticized by someone who is doing less than you. Remember that.    ",

         "The best thing you can do for a person is to inspire them. Thats the best currency you can offer inspiration.    ",
         "A speaker of truth has no friends.    ",

         "Define who you are and what you are and be clear on that. Meditate on that and then live and die by that. You cant break the rules the fundamental rules. Be a man of your word do what you say you're gonna do respect people the way you would like to be respected.    ",

         "Most important thing to get rid of is doubt. If you got doubt in what you're doing it's not going to work.   ",

         "The company you keep has a large influence on the situations you bring to yourself.    ",

         "I taught all my people how to fish. Some caught more than others. Some said they rather be fed. Some passed me up in the process. But at the end of it all I know I aint hide the game from my people and I'm real for that.   ",

         "I took my wildest dreams then mapped them out. I go for mine like it's overtime me and my nggas had to struggle so we overshine.    ",

         "If you're going to write about rap music and hip-hop, and you don't love it, then we don't need your opinion, and we revoke your opinion."

];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})
