fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple&encode=url3986')
.then(res => res.json())
.then((response.results) => response.results.map())