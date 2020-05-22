# Bootstrap

Website utilizando um conjunto de estilos para classes e componentes: o framework [Bootstrap](https://getbootstrap.com/ "Bootstrap") CDN, jQuery - minified version, Popper.js, StackPath, ProgressBar.js e Parallax.

[![](https://i.imgur.com/V7fphvN.png)](https://i.imgur.com/V7fphvN.png)

###### HTML
```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
	<title>You2 Agency - a sua agência web</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--Fonts Google-->
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;700&display=swap" rel="stylesheet">
	<!--Bootstrap-->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<!--Scripts-->
	<script
  	src="https://code.jquery.com/jquery-3.5.1.min.js"
  	integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  	crossorigin="anonymous"></script><!-- CDN jQuery - minified version-->
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script><!--CDN Popper.js-->
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script><!-- CDN StackPath-->
	<script src="https://kit.fontawesome.com/f3e7701c9e.js" crossorigin="anonymous"></script><!--Font Awesome-->
	<script src="js/progressbar.min.js"></script><!--ProgressBar.js-->
	<script src="https://cdn.jsdelivr.net/parallax.js/1.4.2/parallax.min.js"></script><!--CDN Parallax-->
</head>

<body>
	<header>
		<div class="container" id="nav-container">
			<nav class="navbar navbar-expand-lg fixed-top">
				<a href="#" class="navbar-brand">
					<img id="logo" src="img/logo.svg" alt="You2 Agency">You<span class="pink">2</span> Agency
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" 	aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
```

###### CSS
```css
#about-area .img-fluid{	
	background: 100%;	
	object-fit: cover;
}
.main-title{
	color: #696969;
	margin: 0 0 65px 0;
	font-size: 32px;
	text-align: center;
}
.main-title::after{
	content: "";
	border-top: 2px solid #828282;
	width: 15%;
	position: absolute;
	top: 60px;
	left: 42.5%;	
	align-items: center;
}
.about-title{
	font-size: 16px;
	color: #696969;
	text-transform: uppercase;
	font-weight: bold;
	word-spacing: 0.1rem;
}
.row p{
	text-align: justify;
}
#about-list{
	list-style: none;
	padding-left: 0;
}
#about-list li{
	line-height: 30px;	
}
#about-list i{
	color: #00BFFF;
	margin-right: 15px;
}
/*Serviços*/
.service-box{
	text-align: center;
	margin-bottom: 50px;
}
.service-box i, .service-box h4{
	transition: 0.5s;
}
.service-box i{
	font-size: 36px;
	margin-bottom: 20px;
	color: #696969;
}
```
###### JavaScript
```javascript
$(document).ready(function(){

	//Progress bar
	let containerA = document.getElementById("circleA");

	let circleA = new ProgressBar.Circle(containerA, {
		color: '#64DAF9',
		strokeWidth: 8,
		duration: 1400,
		from:{ color: '#AAA'},
		to:{ color: '#65DAF9'},
		step: function(state, circle){
			circle.path.setAttribute('stroke', state.color);
			let value = Math.round(circle.value() * 85);
			circle.setText(value);
		}
	});
```