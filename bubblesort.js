
var arr=[];
var len=1,i=0,j=0;
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
	if(arr[j]>arr[j+1])
	{
		let x=arr[j];
		arr[j]=arr[j+1];
		arr[j+1]=x;
	}
	j+=1;
	if(j>arr.length-i)
	{
		j=0;
		i+=1;
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