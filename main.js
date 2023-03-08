var a=30;
var b=50;
var c=10;
if((a<b)&&(a<c))
{
	if(b<c){
		console.log(a,b,c);
	}
    else
{
	console.log(a,c,b);
}
}
if((b<a)&&(b<c))
{
	if(c<a){
		console.log(b,c,a);
	}
	else{
		console.log(b,a,c);
	}
}
 if((c<a)&&(c<b))
 {
	 if(a<b)
	 {
		 console.log(c,a,b);
	 }
	 else{
		 console.log(c,b,a);
	 }
 }
 