
var arr=[];
var i=0;
var j=1;
function setup()
{
	createCanvas(1280, 480);
	for(let x=0;x<50;x++)
	{
		arr[x]=random(height);
	}  
}

function draw(){
	
	background(0);  

	if(arr[j]<arr[i])
	{
		var x=arr[j];
		arr[j]=arr[i];
		arr[i]=x;
	}
	j+=1;
	if(j==arr.length)
	{
		i++;
		j=i+1;
	}
	if(i>arr.length)
	{
		noLoop();
	}
	for(let x=0;x<arr.length;x++)
	{  
		fill(255,0,0);
		stroke('black');
		rect( x*12*2,height-arr[x] , 12*2,arr[x]);
	} 
}