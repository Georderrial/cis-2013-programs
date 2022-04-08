
//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function () 
{

//lines 12-18 declares and sets variables with respective DOM input. lines 19-25 declare variables needed for calculations
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);

alert ("The Rectangle area is " + rectArea(floatRectWidth,floatRectHeight) + 
	" and the perimeter is " + rectPerim (floatRectWidth,floatRectHeight) + 
	"\n\n" + "The Triangle area is " + 	triArea(floatTriSide1,floatTriSide2,floatTriSide3) + 
	" and the perimeter is " + 
	triPerim(floatTriSide1,floatTriSide2,floatTriSide3) + "\n\n" +
	"The Circle area is " + circleArea(floatRadius) + 
	" and the circumference is " + circleCircum(floatRadius));

	
	

};

/*
 * the calcCircleCircum function is activated when the calc_circle_cirum button on the DOM
 * is clicked.  It reads the radius information from the DOM and then reports the circle
 * circumference in an alert box, using the circleCircum function to perform the calculation
 */
var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};

function circleCircum(floatRadius_par)
{
	var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
	return floatCircum.toFixed(2);
}

var calcRectArea = function()
{
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);

	alert ("The rectangle area is " + rectArea(floatRectWidth,floatRectHeight));	
};

function rectArea(width,height)
{
	var floatRectArea = parseFloat (width * height);
	return floatRectArea.toFixed(2);
}

var calcRectPerim = function()
{
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);

	alert ("The rectangle perimeter is " + rectPerim(floatRectWidth,floatRectHeight));	
};

function rectPerim(width,height)
{
	var floatRectPerim = parseFloat (2 * width + 2 * height);
	return floatRectPerim.toFixed(2);
}

var calcCircleArea = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle area is " + circleArea(floatRadius));	
};

function circleArea(radius)
{
	var floatCircleArea = Math.PI * Math.pow(radius,2);
	return floatCircleArea.toFixed(2);
}

var calcTriArea = function()
{
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);

	alert ("The triangle area is " + triArea(floatTriSide1, floatTriSide2, floatTriSide3));	
};

function triArea(S1, S2, S3)
{
	var floatS = (S1 + S2 + S3)/2;
	var floatTriArea = Math.sqrt((floatS*(floatS-S1)*(floatS-S2)*(floatS-S3)));
	return floatTriArea.toFixed(2);
}

var calcTriPerim = function()
{
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);

	alert ("The triangle perimeter is " + triArea(floatTriSide1, floatTriSide2, floatTriSide3));	
};

function triPerim(S1, S2, S3)
{
	var floatTriPerim = S1 + S2 + S3;
	return floatTriPerim.toFixed(2);
}




window.onload = function () 
{
    //lines 51-56 clear the DOM values..
//    $("rect_width").value = "";
//    $("rect_height").value = "";
//    $("tri_side1").value = "";
//    $("tri_side2").value = "";
//    $("tri_side3").value = "";
//    $("radius").value = "";
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked
    $("calc_circle_circum").onclick = calcCircleCircum;
    $("calc_rect_area").onclick = calcRectArea;
    $("calc_rect_perim").onclick = calcRectPerim;
    $("calc_circle_area").onclick = calcCircleArea;
    $("calc_tri_area").onclick = calcTriArea;
    $("calc_tri_perim").onclick = calcTriPerim;
    
};