var jokes = [
  'A day without sunshine is like, night.',
  'At what age is it appropriate to tell my dog that he\'s adopted?',
  'I intend to live forever, or die trying'
]

module.exports = {
  allJokes : jokes,
  getRandomJoke : function(){
    var i = Math.floor(Math.random() * jokes.length);
    if(i === jokes.length){
      i-=1;
    }
    return jokes[i];
  },
  addJoke : function(joke){
    jokes.push(joke);
  }
}
