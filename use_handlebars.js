( () => {

console.log("Hello world!");
const template = Handlebars.compile("{{foo}}");
template({});
console.log("Template compiled woah");

})();
