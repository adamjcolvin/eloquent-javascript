let story = `Dave said 'This coffee isn't too bad' and ordered another one.`;
console.log(story.replace(/((?<!\w)'|'(?!\w))/g, '"'));
