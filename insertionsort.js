
var arr=[];
var len=1,i=1;
var y=arr[1],j=i;
function setup()
{
	createCanvas(1280, 480);
	for(let x=0;x<50;x++)
	{
		arr[x]=random(height);
	}
	y=arr[1];
}
function draw(){
	
	background(0); 
	console.log(j+" "+y+" "+arr[j-1]+" "+i);
	if(j-1>=0 && y<arr[j-1])
	{
		arr[j]=arr[j-1]; 
		j--;  
	}
	if(j==0 || (j-1>=0 && y>arr[j-1]))
	{
		arr[j]=y;
		i++;
		j=i;
		y=arr[i];
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