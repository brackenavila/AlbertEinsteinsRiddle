$(function(){
	i=o=0, d=di=im='', b='body', c=function(){$(this).removeClass('c')}
	n=[['norwegian','dunhill','water','cats'],
		['dane','blends','tea','horses'],
		['brit','pallmall','milk','birds'],
		['german','marlborough','coffee','fish'],
		['sweden','camel','beer','dogs']]
	sd='The Sweden keeps dogs as pets.'
	dt='The Dane drinks tea.'
	bc='The man who smokes Blend lives next to the one who keeps cats and has a neighbor who drinks water.'
	pb='The person who smokes Pall Mall rears birds.'
	gp='The German smokes marlborough.'
	bb='The owner who smokes camel drinks beer.'
	t=[['The Norwegian lives in the first house and next to the blue house.','The man who keeps horses lives next to The owner of the yellow house who smokes Dunhill.','The man who smokes Blend has a neighbor who drinks water.',bc],
		[dt,bc,dt,'The man who keeps horses lives next to the man who smokes Dunhill.'],
		['The brit lives in the red house',pb,'The man living in the house right in the center drinks milk.',pb],
		[gp,gp,'The green house owner drinks coffee.','fish'],
		[sd,bb,bb,sd]]
	while(N=n[o]){
		while(N[i]){
			im+='<img src=img/'+N[i]+'.jpg title="'+t[o][i++]+'">'
		}i=0
		$('<div>'+im).appendTo(b)
		im='', o++
	}i=0
	while(i++<5)d+='<div id=H'+i+'></div>'
	$('<div class=H>'+d).prependTo(b)
	$('img').on({dragstart:function(){$(this).addClass('dragged')},dragend:function(){$(this).removeClass('dragged')}})
	$('.H>div').on({dblclick:function(){$(this).addClass('c')},click:c,mouseleave:c,dragover:function(){return false},dragstart:function(){$(this).addClass('P')},dragenter:function(){$(this).addClass('z').siblings().removeClass('z'), $('.P').insertBefore($(this))},drop:function(){$('.dragged').appendTo(this), $('.P').removeClass('P c'), $(this).removeClass('z')}})})
