const API = "https://web1-api.vercel.app/api";
const loadData = async (request, templateId, viewId) => {
  const response = await fetch(`${API}/${request}`);
  const data = await response.json();
  console.log(data);
  var source = document.getElementById(templateId).innerHTML;
  var template = Handlebars.compile(source);
  var context = { data: data };
  var view = document.getElementById(viewId);
  view.innerHTML = template(context);
};
const loadData1 = async (request, templateId, viewId) => {
  const response = await fetch(`${API}/${request}`);
  const data = await response.json();
  console.log(data);
  var source = document.getElementById(templateId).innerHTML;
  var template = Handlebars.compile(source);
  var context = { data: data.data };
  console.log(context);
  var view = document.getElementById(viewId);
  view.innerHTML = template(context);
};
