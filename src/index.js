const graphql = require("graphql.js");

const graph = graphql("http://localhost:3000/graphql", {
  method: "POST",
  asJSON: true
});

graph(
  `
	query {
		items {
			id
			name
		}
	}
	`
)()
  .then(console.log)
  .catch(console.error);
