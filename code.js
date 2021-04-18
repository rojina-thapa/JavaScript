H:\Websites\Localhost\SourceCode\JavaScript-Functions.html Thursday, November 12, 2015 1:05 PM
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>JavaScript Projects Discoveryvip.com</title>
<meta name="description" content="">
<meta name="author" content="Discoveryvip">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href=
"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
</head>
<body>
<div class="container">
<header>
<h1>Javascript 2</h1>
</header>
<nav>
<p>
<a href="/">Home</a>
</p>
<p>
<a href="/contact">Contact</a>
</p>
</nav>
<div>
<input type="button" onclick="addMe(5,5);" value="click me" />
</div>
<footer>
<p>
&copy; Copyright by discoveryvip
</p>
</footer>
</div>
<script>
var d = 0;
myFunction('hello',10,100);
console.log(addMe(7,8));
console.log(addMe(37,28));
console.log(addMe(3,28));
function myFunction(a,b,c) {
var b = 'hello 2';
console.log('within function '+ a + ' ' + b + ' ' + c);
}
function addMe(a,b){
d++;
var c = a * b + d;
console.log('d=' +d + ' c=' + c);
return c;
-1-
H:\Websites\Localhost\SourceCode\JavaScript-Functions.html Thursday, November 12, 2015 1:05 PM
}
</script>
</body>
</html>
-2-