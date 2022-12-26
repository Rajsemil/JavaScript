<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>while sum</title>
</head>
<body>
  <script type="text/javascript">
  	let sum = 0;
	let number = parseInt(prompt('Enter a number: '));
	while(number >= 0) {
    	document.write("Number is: ",number,"<br>")
    	sum += number;
    	number = parseInt(prompt('Enter a number: '));
	}
	document.write(`Sum is: ${sum}.`);
  </script>
</body>
</html>