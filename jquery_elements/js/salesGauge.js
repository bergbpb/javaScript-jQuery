		
$( document ).ready( function() {

	// can also set the percentage variiable with a data attr
	// var percentage = parseInt( $( '.svgContainer' ).data( 'percentage' ) );

	if( $( '.svgContainer' ).length ) {
	//call the funtion on page  and pass it the container id and the % completed value
		drawGraph( '#gaugeSVG', 0 );

	} // end if

	//function for drawing the sales guage svg 
	function drawGraph( elementName, percentage ) {

		// set default to 0
		if ( isNaN( percentage ) || ( percentage === ' ' ) ) {

			percentage = 0;

		}

		//define the svg container element
		var s = Snap( elementName );

		//STYLE VARIABLES -------------------------------------------------
		//colors
		var pctCompColor = '#9ac5e8',

		pctRemColor = '#1c639c',

		botCircleColor = '#e0e0e0',

		needleColor = '#808080',

		needleBaseColor = '#4d4d4d',

		//text
		pctFont = 'HelveticaNeue-CondensedBlack',

		pctFontSize = '5em',

		pctFontColor = '#FFF',

		//SVG PATHS -------------------------------------------------------
		//get the svg container dimensions from the DOM
		svgHeight = s.attr( 'height' ),

		svgWidth = s.attr( 'width' ),

		//find the verticle center of the svg container
		Vcenter = svgHeight / 2,

		//find the horizontal center of the svg container
		Hcenter = svgWidth / 2,

		//set the radius equal to i/2 the width and store it in a variable
		radius = Hcenter,

		//store the percentage input in a variable
		val = percentage,

		val = Math.min( Math.max( parseInt( val ), 0 ), 100 );

		//takes in the value in percent and converts it to degrees divide by 2 
		//to limit it to 180 deg to allow it to take up only half the circle.
		var deg = ( ( val / 100 ) * 360 ) / 2,

		degr = deg - 90,

		//converts the degree value to radians 
		radians = ( degr ) * Math.PI / 180,
		
		//keeps the end point of the radius on the circle on the x axis
		x = Hcenter + radius * Math.sin( radians ),

		//keeps the end point of the radius on the circle on the y axis
		y = Vcenter - radius * Math.cos( radians ),

		//svg for the top background
		topCircle = 'M ' + ( Hcenter - radius ) + ', ' + Vcenter + ' H ' + ( radius + radius ) + ' A ' + radius + ', ' + radius + ' 0 0 0 ' + ( Hcenter - radius ) + ', ' + Vcenter;
		
		var bgSemiCircleTop = s.path( topCircle );

		//define top background semi-circle styles 
		bgSemiCircleTop
		.attr( {
			fill: pctRemColor
		} );

		//svg for the bottom background
		var bottomCircle = 'M ' + ( Hcenter - radius ) + ', ' + Vcenter + ' H ' + ( radius + radius ) + ' A ' + radius + ', ' + radius + ' 1 0, 1 ' + ( Hcenter - radius ) + ', ' + Vcenter;

		var bgSemiCircleBottom = s.path( bottomCircle );

		//define bottom background semi-circle styles 
		bgSemiCircleBottom 
		.attr( {
			fill: botCircleColor
		} );

		//concatenate the svg path for the pie section
		var pieSection = 'M ' + ( Hcenter - radius ) + ', ' + Vcenter + ' H ' + radius + ' L ' + x + ' ' + y + 'M ' + x + ',' + y + ' A ' + radius + ', ' + radius + ' 1 0, 0 ' + ( Hcenter - radius ) + ', ' + Vcenter;

		//pass the gauge path to a variable 
		var arc = s.path( pieSection ) ;

		//define pie section styles
		arc
		.attr( {
     		fill: pctCompColor,
        } );
       	 			
		//group the gauge svg components into a single variable
        var gaugeGroup = s.group( bgSemiCircleTop, bgSemiCircleBottom, arc ),

        //concatenate the svg path for the needle
        needlePath = 'M ' + Hcenter + ', ' + Vcenter + ' m -' + ( radius * 0.29 ) + ' ' + ( radius * 0.06 ) + ', a ' + ( radius / 3.333 ) + ', ' + ( radius / 3.333 ) + ', 0 1 0 0 -' + ( radius / 8 ) + ' l -' + ( radius - ( radius / 3.636 ) ) + ' ' + ( radius * 0.065 ) + ' z'; 

        //pass the needle path to a variable 
        var needle = s.path( needlePath );

        //define needle styles
        needle
        .attr( {
        	fill: needleColor
        } );

        //add the needle to a group so it can have the transform/animation applied
        var needleGroup = s.group( needle );

        needleGroup.attr({
        	'id': 'needle'
        });

        //apply the transform to the needle -- uncomment this section if no animation is desired
       	// needleGroup
       	// .attr({
       	// 	// 'transform' : 'rotate(' + deg + ', ' + Hcenter+ ', ' + Vcenter +')'
       	// }),

       	//NEEDLE ANIMATION ----------------------------------------------------------------------------------
       	//comment out this line if no animation is desired
       	needleGroup.animate( { transform: 'r' + deg + ', ' + Hcenter + ', ' + Vcenter }, 3000, mina.elastic );

       	//create the circle at the base of the needle
       	var needleBase = s.circle( Hcenter, Vcenter, svgHeight / 10 );

       	//style the circle at the base of the needle
        needleBase
        .attr( {
        	fill: needleBaseColor
        } );

        //SVG MASK ----------------------------------------------------------------------------
			//define svg background mask, the background mask is white (transparent) and 
			//covers the entire svg, the center section is the actual mask (technically 
			//speaking it is masking portions of the background mask) and is black 
			//(masked), this approach was easier than using defining a new path for a clip-path.
        var bgMask = s.rect( 0, 0, 0, 0, 0, 0 );

		bgMask
		.attr( {
			'width': '100%',
			'height': '100%',
			'fill': '#fff'
		} );

		//the mask for the gauge components
		var gaugeMaskRectangle = s.rect( ( Vcenter - radius ), Hcenter, ( radius + radius ), ( svgHeight / 20 ), 0, 0 ),

		gaugeMaskCircle = s.circle( Vcenter, Hcenter, svgHeight / 5 ),

		//collect the parts off the mask in a variable so attributes can be applied to the entire mask
		finalGaugeMask =  s.group( bgMask, gaugeMaskRectangle, gaugeMaskCircle );

		finalGaugeMask
		.attr( {
			'fill': '#000',
		} ),

		//apply the mask to the gauge
		gaugeGroup
		.attr( {
			'mask': finalGaugeMask
		} );

		//SVG TEXT -----------------------------------------------------------------------------------
		//percentage text positioning and formatting
		
		if( deg === 180 ) {
		 	var text = s.text( ( Hcenter * 0.06 ), ( Vcenter * 0.9 ), val + '%' ).attr( {
				'font-family': pctFont,
				'font-size': pctFontSize,
				'fill': pctFontColor
			} );
		} else if ( ( deg <= 29 ) && ( deg > 18 ) ) {
		 	var text = s.text( ( Hcenter * 0.39 ), ( Vcenter * 0.5 ), val + '%' ).attr( {
		 		'font-family': pctFont,
				'font-size': pctFontSize,
				'fill': pctCompColor
			} );
 		} else if ( ( deg >= 0 ) && ( deg <= 18 ) ) {
			 var text = s.text( ( Hcenter * 0.25 ), ( Vcenter * 0.7 ), val + '%' ).attr( {
			 	'font-family': pctFont,
 				'font-size': pctFontSize,
 				'fill': pctCompColor
 			} );
 		} else {
 			var text = s.text( ( Hcenter * 0.15 ), ( Vcenter * 0.9 ), val + '%' ).attr( {
 				'font-family': pctFont,
 				'font-size': pctFontSize,
 				'fill': pctFontColor
 			} );
 		}

	} //end svg function

	// Enable the graph to be controlled by DOM elements
	// enable submit by hitting the enter key
	$( '#pctInput' ).on( 'keyup', function( e ) {

		// event.which records which key is pressed,
		// this works for mouse events as well,
		// 13 is the key code for the enter key
		if( e.which === 13 ) {

			$( 'button#pct' ).click();
		}

	} );

	// clear the input value by hitting the esc key
	$(document).on( 'keyup', function( e ) {

		// 27 is the key code for the esc key
		if( e.which === 27 ) {

			$( '#pctInput' ).val( '' );
		}

	});


	$( 'button#pct' ).click( function() {

		//get the input value and store it in a variable
 		var input = $( '#pctInput' ).val().trim();
console.log(input);
 		if ( isNaN( input ) || ( input === ' ' ) ) {

			input = 0;

		}

 		//reset the gauge on button click
		$( '#gaugeSVG' ).text( ' ' );

		//call the function and pass it the container id and the input value
		drawGraph( '#gaugeSVG', input );

	} );	

			





} ); //end ready
