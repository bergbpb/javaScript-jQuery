
$( document ).ready( function() {

			// refresh the page
			var refreshButton1 = $( '#pageRefresh1' );

			var refreshButton2 = $( '#pageRefresh2' );

			var refreshButton3 = $( '#pageRefresh3' );

			refreshButton1.click( function( e ) {

				e.preventDefault();

				location.reload();

			});

			refreshButton2.click( function( e ) {

				e.preventDefault();

				location.reload();

			});

			refreshButton3.click( function( e ) {

				e.preventDefault();

				location.reload();

			});

			/*
			 .d888              888                    888 d8b                  d8b
			d88P"               888                    888 Y8P                  Y8P
			888                 888                    888
			888888 8888b.   .d88888  .d88b.        .d88888 888 888  888        8888 .d8888b
			888       "88b d88" 888 d8P  Y8b      d88" 888 888 888  888        "888 88K
			888   .d888888 888  888 88888888      888  888 888 Y88  88P         888 "Y8888b.
			888   888  888 Y88b 888 Y8b.          Y88b 888 888  Y8bd8P          888      X88
			888   "Y888888  "Y88888  "Y8888        "Y88888 888   Y88P           888  88888P'
			                                                                    888
			                                                                   d88P
			                                                                 888P"
			*/

			// Fade divs function --------------------------------------------------------------------->

			var colors = [' red','blue','green','black' ];

			var elem = document.querySelectorAll(".elem" );

			var buttons = $( 'button[href="#"]' );

			$( buttons) .each( function( i, propArray ) {

				var propArray = [];

				$( elem ).each( function( i, item ) {

		    		var cssProp = $( this )
		    			.attr( 'style' )
		    			.replace( /background-color: /g,'' )
		    			.replace( /;/g,'' );

		    		propArray.push( cssProp );

				});

				$( this ).text( 'hide ' + propArray[i] );

			});

			$( 'button[href="#"]' ).click( function( e ) {

				var $this= $( this );

				var text = $this.text();

				var randomColor = colors[ Math.floor( Math.random() * colors.length )];

				$( 'button[href="#"]' ).removeClass( 'active' );

				$this.toggleClass( 'active' );

				if( $this.next().is( ':visible' ) ) {

					$this.next().fadeOut( 1000, function() {

						$this.next().css( 'background-color', randomColor );

						var color = $this.next().css( ["backgroundColor"] );

						var active = $( '.active' );

						switch( color.backgroundColor ) {
							case( "rgb(0, 0, 0)" ) :
								if( $this.hasClass('active' ) ) {
									active.text( 'show black' );
								}
							break;
							case( "rgb(0, 0, 255)" ) :
								if( $this.hasClass( 'active' ) ) {
									active.text( 'show blue' );
								}
							break;
							case( "rgb(0, 128, 0)" ) :
								if( $this.hasClass( 'active' ) ) {
									active.text( 'show green' );
								}
							break;
							case( "rgb(255, 0, 0)" ) :
								if($this.hasClass( 'active' ) ) {
									active.text( 'show red' );
								}
							break;
							default :
								console.log( 'color undefined' );
						}
					});

				} else {

					$this.next().fadeIn( 1000, function() {

						var color = $this.next().css( ["backgroundColor"] );

						switch( color.backgroundColor ) {
							case( "rgb(0, 0, 0)" ) :
								$this.text( 'hide black' );
							break;
							case( "rgb(0, 0, 255)" ) :
								$this.text( 'hide blue' );
							break;
							case( "rgb(0, 128, 0)" ) :
								$this.text( 'hide green' );
							break;
							case( "rgb(255, 0, 0)" ) :
								$this.text( 'hide red' );
							break;
							default :
								console.log( 'color undefined' );
						}

					});
				}

			});

			// Object dot notation example
			var obj = {
				param1 : 'hide div one',
				param2 : 'hide div two',
				param3 : 'hide div three',
				param4 : 'hide div four'
			};

			$( '.div1' ).append( "<p>" + obj.param1 + "</p>" );

			$( '.div2' ).append( "<p>" + obj.param2 + "</p>" );

			$( '.div3' ).append( "<p>" + obj.param3 + "</p>" );

			$( '.div4' ).append( "<p>" + obj.param4 + "</p>" );

			/*
			                                              888 d8b                           d8b
			                                              888 Y8P                           Y8P
			                                              888
			 8888b.   .d8888b .d8888b .d88b.  888d888 .d88888 888  .d88b.  88888b.         8888 .d8888b
			    "88b d88P"   d88P"   d88""88b 888P"  d88" 888 888 d88""88b 888 "88b        "888 88K
			.d888888 888     888     888  888 888    888  888 888 888  888 888  888         888 "Y8888b.
			888  888 Y88b.   Y88b.   Y88..88P 888    Y88b 888 888 Y88..88P 888  888         888      X88
			"Y888888  "Y8888P "Y8888P "Y88P"  888     "Y88888 888  "Y88P"  888  888         888  88888P'
			                                                                                888
			                                                                               d88P
			                                                                             888P"
			*/

			// Toggle visibility of hidden content function----------------------------------------------------------->
			$( '.block' ).click( function( e ) {

				var $self = $( this );

				var hidden = $( '.block2' );

				if( hidden.is( ':visible' ) ) {

					hidden.slideUp( 500, function() {

						hidden.remove();

						if( $self.hasClass('blockOpen') ) {

							$( 'div').removeClass( 'blockOpen' );

							return false;

						} else {

							$( 'div' ).removeClass( 'blockOpen' );

							$self.addClass( 'blockOpen' ).after( '<div class="block2"></div>' );

							var hide = $( '.block2' );

							hide.hide();

							hide.slideDown( 500 );

							$( '.block2' ).text( 'hidden content' );

						}

					});

				} else {

					$self.addClass( 'blockOpen' ).after( '<div class="block2"></div>' );

					var hide = $( '.block2' );

					hide.hide();

					hide.slideDown( 500 );

					$( '.block2' ).text( 'hidden content' );

				}

			});

			/*
					                                   888              d8b
			                                           888              Y8P
			                                           888
			.d8888b   .d88b.   8888b.  888d888 .d8888b 88888b.         8888 .d8888b
			88K      d8P  Y8b     "88b 888P"  d88P"    888 "88b        "888 88K
			"Y8888b. 88888888 .d888888 888    888      888  888         888 "Y8888b.
			     X88 Y8b.     888  888 888    Y88b.    888  888         888      X88
			 88888P'  "Y8888  "Y888888 888     "Y8888P 888  888         888  88888P'
			                                                            888
			                                                           d88P
			                                                         888P"
			*/

			// Function that creates an object with the key/value pairs set by the values of the corresponding DOM objects -------->

			// character counter bound to keyup event ------------------------------>
			$( '#searchQuery' ).attr( { maxLength: 100 } ).on( 'keyup', function() {

				$( '.characterCount1, .maxChar' ).fadeIn(1000);

				$( '.characterCount1 span' ).text( $( '#searchQuery' ).val().length );

			} );

			$( '#searchQuery2' ).attr( { maxLength: 100 } ).on( 'keyup', function() {

				$( '.characterCount2, .maxChar' ).fadeIn(1000);

				$( '.characterCount2 span' ).text( $( '#searchQuery2' ).val().length );

			} );

			// search function
			$( '#searchSubmitButton' ).click( function() {

				var dropDownVal1 = $( '#searchBy' ).find(':selected').text();

		    	var dropDownVal2 = $( '#searchBy2' ).find(':selected').text();

		    	var searchParams =  {};

				// Set dropdown val to be the object keys,
				// input value to be the object values
				searchParams[dropDownVal1] = $( '#searchQuery' ).val();

				searchParams[dropDownVal2] = $( '#searchQuery2' ).val();

				console.log( searchParams );

				// fade out the current results
				$( '.searchResultsText p.results' ).fadeOut( 1000 );

				// set timeout for removing the current results
				setTimeout( function() {

					$( '.searchResultsText p.results' ).remove();

				},1000);

				// set timeout for appending the new results and show the memo
				setTimeout(function() {

					$( '.searchResultsText').append('<p class="results" style="display: none;">' + dropDownVal1 + ': ' + searchParams[dropDownVal1] + '<br/> ' + dropDownVal2 + ': ' + searchParams[dropDownVal2] + '</p>' );

					$( '.searchResultsText p.results' )
					.css( { 'textTransform': 'uppercase',
							'fontSize': '12px',
							'line-height': '24px',
							'letterSpacing': '1px' } )
					.fadeIn( 1000 );

					$( '.searchMemo, .searchContainer h5' ).fadeIn( 1000 );

					},1000 );

				});

			/*
			 .d888 888                   888              d8b
			d88P"  888                   888              Y8P
			888    888                   888
			888888 888  8888b.  .d8888b  88888b.         8888 .d8888b
			888    888     "88b 88K      888 "88b        "888 88K
			888    888 .d888888 "Y8888b. 888  888         888 "Y8888b.
			888    888 888  888      X88 888  888         888      X88
			888    888 "Y888888  88888P' 888  888         888  88888P'
			                                              888
			                                             d88P
			                                           888P"
			*/

			// Flash animation ( setInterval ) function ------------------------------------------------------------------------------------------>

			var flashButton = $( '#flashSubmitButton' );

			var flashResetText = $('.flashLabel');

			// the parentheses around the following anonymous function - (function(){...})() - turn the function into an expression,
			// the empty set of parentheses at the end of the function invokes the function immediately after it is defined,
			// this is an example of a self-invoking anonymous function, or immediately invoked function expression (IIFE),
			// the variables declared in this function are scoped only to this function and are not scoped globally,
			// this keeps the variables from "leaking" out of the function and cluttering the global scope,
			// ES6 provides "let" ( example: { let variableName = value; }; ),
			// or "const" ( (short for constant), example: const VAR_NAME = value; ),
			// to provide variables that are block-scoped (var declarations are function-scoped).

			flashButton.click( (function() {

				// ensure the var values are not 'undefined'
				var borderAnimation = null;

				var buttonAnimation = null;

				return function() {

					// BORDER ANIMATION
					// if the animation is running, clear the interval
					if(borderAnimation) {

						clearInterval(borderAnimation);

						// stop the animation and remove the "flash" class
						flashButton
							.finish()
							.stop( true, true )
							.removeClass( 'flash' );

						flashResetText.fadeIn(500);

						// reset var value to 'null' to clear the value if the var has
						// an interval set already (set on previous click ).
						borderAnimation = null;

					} else {

						// if the animation is not running, set the interval for the
						// box-shadow animation, uses shadow animation plugin -
						// https://bitstorm.org/jquery/shadow-animation/
						borderAnimation = setInterval( function () {

							// fade in box-shadow
							flashButton.animate( {

								boxShadow: '0 0 10px rgba(122, 201, 67, 1 )'

							}, 500 );

							// fade out box-shadow
							flashButton.animate( {

								boxShadow: '0 0 10px rgba( 122, 201, 67, 0 )'

							}, 500 );

						},1000 );

						flashResetText.fadeOut(500);

					}
					// BUTTON ANIMATION
					// if the animation is running, clear the interval
					if(buttonAnimation) {

						clearInterval(buttonAnimation);

						// stop the animation and remove the "flash" class
						flashButton
							.finish()
							.stop( true, true )
							.removeClass( 'flash' );

						// reset var value to 'null' to clear the value if the var has
						// an interval set already (set on previous click ).
						buttonAnimation = null;

					} else {

						// if the animation is not running, set the interval
						buttonAnimation = setInterval( function () {

							flashButton.toggleClass( 'flash', 'linear');

						}, 500 );

					}
				};

			}()));// END CLICK

			//start the animation on page load
			flashButton.click();

			/*
						                                               d8b
			                                                           Y8P

			 8888b.  888d888 888d888 8888b.  888  888 .d8888b         8888 .d8888b
			    "88b 888P"   888P"      "88b 888  888 88K             "888 88K
			.d888888 888     888    .d888888 888  888 "Y8888b.         888 "Y8888b.
			888  888 888     888    888  888 Y88b 888      X88         888      X88
			"Y888888 888     888    "Y888888  "Y88888  88888P'         888  88888P'
			                                      888                  888
			                                 Y8b d88P                 d88P
			                                  "Y88P"                888P"
			*/

			// Arrays and loops  ------------------------------------------------------------------------------------------------------>

			// get a reference for the div that outputs the results
			var $outputDiv = $( '.outputDiv' );

			// get a reference for the input
			var $arrayInput = $('.arrayInput');

			// this shuffle function is a computer optimized version
			// of the Fisher-Yates Shuffle, a randomization algorithm that swaps a random item
			// from the front of the array with one from the back of the array.
			// ( see - https://bost.ocks.org/mike/shuffle/ )

			function shuffleArray( array ) {

					var items = array.length, newElement, index;

					// While there remain elements to shuffle…
					while ( items ) {

					// Pick a remaining element…
					index = Math.floor( Math.random() * items-- );

					// And swap it with the current element.
					newElement = array[ items ];

					array[ items ] = array[ index ];

					array[ index ] = newElement;

					}

					// return the result so it is available to be used in other function calls
					return array;
			}

			function randomArrayItem( array ) {

					var items = array.length, newElement, index;

					// While there remain elements to shuffle…
					while ( items ) {

					// Pick a remaining element…
					index = Math.floor( Math.random() * items-- );

					// And swap it with the current element.
					newElement = array[ items ];

					array[ items ] = array[ index ];

					array[ index ] = newElement;

					}

					// return the result so it is available to be used in other function calls
					return array[0];
			}

			function randomInteger( min, max ) {

				min = Math.ceil( min );

			  max = Math.floor( max );

				var result = Math.floor( Math.random() * ( max - min ) ) + min;

				Math.round ( result );

			  return result;
			}

			// clear the output div by hitting the esc key
			$( document ).on( 'keyup', function( e ) {

				// 27 is the key code for the esc key
				if( e.which === 27 ) {

					$( '#arrayClearButton' ).click();
				}

			});

			// set counter for incrementing output text ids
			var focusCounter = 0;

			// add the container for the input text and a <br> tag
			$arrayInput.on( 'focus', function( e ) {

				// increment counter
				focusCounter++;

				// use focusCounter var to output span with a unique id to hold the input text
				var textContainer = $( '<span class="outputUserContent" id="' + focusCounter + '"></span>' );

				// if the input isn't empty, clear it and add a line break to the output div
				if( $arrayInput.val() != '' ) {

						$arrayInput.val( '' );

						$outputDiv.append( '<span class="lineBreak" style="display:block;"></span>' );

				}

				// add the container
				$outputDiv.append( textContainer );

			} );

			// add the input text to the output div on keyup event
			$arrayInput.on( 'keyup', function( e ) {

				// input text
				newText = e.target.value;

					// add the input text to the most recently added span
					$( 'span' ).last('.outputContent').text( newText );

			} );

			// Creates line breaks when the '+' anchor in the input is clicked
			// this is intended to make elements to add to an array after filtering
			$( '.userInputAutoText' ).click( function( e ) {

				e.preventDefault();

				// get the text from the input and remove white space from the beginning and end
				var $arrayInputText = $( '.arrayInput' ).val().trim();

				// if the input is empty, dont submit the input text
				if( $arrayInputText != '' ) {

					// if the input is not empty, add a line break to the output div
					$outputDiv.append( '<span class="lineBreak" style="display:block;"></span>' );

				}

				// animate the input text color to transparent white value and then remove it,
				// fadeOut() jQuery method doesn't work on input text it affects the input element
				$arrayInput.animate( {

					'color': 'rgba(255,255,255, 0)',

				}, 500,

				function() {

					$arrayInput.val( '' ).css( 'color', 'black' );

					$arrayInput.focus();

				} );

			} );

			// store the number array
			var numberArray = [];
			// set an interval to output random numbers to the output div
			// when the 'generate numbers' button is clicked
			// and stop the interval whne the 'set length' button is clicked
			$( '#numbersArray' ).click( function() {
				// set the interval
				var interval = setInterval( function () {
						// generate a random number
						randomNumber = Math.random().toFixed( 2 ) * 100;
						// round it down
						Math.floor( randomNumber );
						// if it is a whole numder ( no decimals ), output it to the div
						if( randomNumber === parseInt( randomNumber, 10 ) ) {

							console.log($('.outputDiv'));

							$( '.outputDiv' ).append( $( '<span class="outputContent" id="' + randomNumber + '">' + randomNumber + '</span><span class="lineBreak" style="display:block;"></span>' ) );

							numberArray.push( randomNumber );

							$( '.outputContent' ).last().fadeIn( 500 );

						}

					}, 500 );
					// stop the interval and create an array from the numbers in the output div
					$( '#numbersArraySetLength' ).click( function() {

						clearInterval( interval );

						console.log( numberArray );

					} );

			} );

			// store the text array
			var textArray =[];
			// make an array from the text in the output div
			$( '#userInputArray' ).click( function() {

				// get the text from the output div and store it in a variable
				var $outputTextArray = $( 'span.outputContent' );

				// use an each() loop to iterate through the text object array
				// get the text and push it to the textArray array
				$outputTextArray.each( function() {
					// convert text to string so we can check for empty string
					var text = $( this ).text().toString();
					// filter out empty text strings
					if( text != "" ) {

						textArray.push( text );

					}

				});

				console.log( textArray );

			} );


			var colorArray =[];
			// make an array from the color text in the output div
			$( '#colorsArray' ).click( function() {
				// get the text from the output div and store it in a variable
				var $outputColorArray = $( 'span.outputContent' );

				var colors = {
					'red': '#FF0000',
					'orange': '#FFA500',
					'yellow': '#FFFF00',
					'green': '#008000',
					'blue': '#0000FF',
					'indigo': '#4B0082',
					'violet': '#9400D3',
					'brown': '#8B4513',
					'black': '#000000',
					'gray': '#808080'
				};

				// colors object keys array
				var colorName = Object.keys( colors );

				// colors object values array
				var colorValue = Object.values( colors );

				// use an each() loop to iterate through the colorName array
				// merge it with the color value array and push it to the colorArray array
				$.each(colorName, function( i, item ) {

				    var createColorItem = ( colorName[ i ] + ':' + colorValue[ i ] );

				    colorArray.push( createColorItem );

				});

				// call the shuffleArray function and pass it colorArray as an argument
				shuffleArray( colorArray );

				// convert the colorArray to a string, seperate it at the commas,
				// and create a new array of color/value pairs as array items
				var colorsConversionOne = colorArray.join( ',' ).split( ':' );

				// convert the colorsConversionOne array to a string, seperate it at the commas,
				// and create a new array of alternating color/value pairs as array items
				var colorsConversionTwo = colorsConversionOne.join( ',' ).split( ',' );

				// new keys array
				var newKeys = [];

				// new values array
				var newValues = [];

				for ( var i = 0; i < colorsConversionTwo.length; i++ ) {

					// the modulus operator ( % ) returns the remainder of the numerator ( ( i + 2 ) )
					// divided by the denominator ( 2 ), in this case if the result is 0,
					// the current index is an even number
    				if ( ( i + 2 ) % 2 == 0 ) {

    				// seperate the even numbered array items into a new array
				        newKeys.push( colorsConversionTwo[i] );

					// add the odd numbered array items into another new array
				    } else {

				        newValues.push( colorsConversionTwo[i] );
				    }

				}

				console.log( newKeys, newValues) ;

				var colorHTMLArray = [];
				// use an each() loop to iterate through the newKeys array
				// and concatenate a <li> for each item that includes a style attribute
				// that recieves the matching index from the newValues array
				// and inserts each <li> into the DOM
				$.each( newKeys, function( i, item ) {

				   	var colorItemHTML = '<span class="outputColor" id="color-' + newKeys[ i ] + ' " style="color: ' + newValues[ i ]
				   					 + '; list-style-type: none; display: none;">' + newKeys[ i ] + '</span><span class="lineBreak" style="display:block;"></span>';

				   	colorHTMLArray.push( colorItemHTML );

				} );

				var intervalColor = setInterval( function () {
						// generate a random color
						randomColor = shuffleArray( colorHTMLArray );
						// select the first item in the color array
						randomColorHtml = randomColor[ 1 ];

						$outputDiv.append( randomColorHtml );

						$( '.outputColor' ).fadeIn( 500 );

					}, 500 );
					// stop the interval and create an array from the numbers in the output div
					$( '#colorsArraySetLength' ).click( function() {

						clearInterval( intervalColor );

						console.log( numberArray );

					} );

			} );

			var prepositionsArray = [ 'aboard','about', 'above', 'across', 'after', 'against', 'along', 'amid', 'among', 'anti', 'around', 'as', 'at', 'before', 'behind', 'below', 'beneath', 'beside', 'besides', 'between', 'beyond', 'but', 'by', 'concerning', 'considering', 'despite', 'down', 'during', 'except', 'excepting', 'excluding', 'following', 'for', 'from', 'in', 'inside', 'into', 'like', 'minus', 'near', 'of', 'off', 'on', 'onto', 'opposite', 'outside', 'over', 'past', 'per', 'plus', 'regarding', 'round', 'save', 'since', 'than', 'through', 'to', 'toward', 'towards', 'under', 'underneath', 'unlike', 'until', 'up', 'upon', 'versus', 'via'];

			var prepositionsArrayHTML = [];

			$.each( prepositionsArray, function( i, item ) {

					var prepositionItemHTML = '<span class="outputPreposition" id="preposition-' + [ i ] + '"style="display: none;">' + [ item ] + '</span><span class="lineBreak" style="display:block;"></span>';

					prepositionsArrayHTML.push( prepositionItemHTML );

			} );

			$( '#prepositionsArray' ).click( function() {

				var intervalPreposition = setInterval( function () {
						// generate a random color
						randomPrepositon = shuffleArray( prepositionsArrayHTML );
						// select the first item in the color array
						randomPrepositionHtml = prepositionsArrayHTML[ 1 ];

						$outputDiv.append( randomPrepositionHtml );

						$( '.outputPreposition' ).fadeIn( 500 );

					}, 500 );
					// stop the interval and create an array from the numbers in the output div
					$( '#prepositionsArraySetLength' ).click( function() {

						clearInterval( intervalPreposition );

					} );

				} );

				$( '#shapesArray' ).click( function() {

					$outputDiv.append('<div class="svg-container"><svg width="100%" height="100%" class="outputShape" id="svg-container"></svg></div>');

					var shapesCounter = 0,
					shapeItemId = $( '#shape' + shapesCounter );

					var intervalShape = setInterval( function ( ) {

							shapesCounter++;

							var shapeColors = [
								'transparent',
								'rgba( 246, 139, 31, 0.7 )',
								'#f68b1f',
								'rgba( 109, 200, 191, 0.3 )',
								'#6dc8bf',
								'rgba( 82, 79, 161, 0.5 )',
								'#524fa1',
								'rgba( 0, 166, 81, 0.6 )',
								'#00a651',
								'rgba( 237, 28, 36, 0.2 )',
								'#ed1c24',
								'rgba( 203, 219, 42, 0.5 )',
								'#cbdb2a',
								'rgba( 255, 242, 0, 0.4 )',
								'#fff200'
							],
							squareValue = randomInteger( 1, 300 ),
							shapesArray = [
								'<rect class="svg-element one" id="' + shapesCounter + '" x="' + randomInteger( 1, 600 ) + '" y="' + randomInteger( 1, 400 ) + '" width="' + randomInteger( 20, 600 ) + '" height="' + randomInteger( 20, 400 ) + '" stroke="' + randomArrayItem( shapeColors ) + '" fill="' + randomArrayItem( shapeColors ) + '" stroke-width="' + randomInteger( 1, 6 ) + '"/></rect>',
								'<rect class="svg-element two square" id="' + shapesCounter + '" x="' + squareValue + '" y="' + squareValue + '" width="' + squareValue + '" height="' + squareValue + '" stroke="' + randomArrayItem( shapeColors ) + '" fill="' + randomArrayItem( shapeColors ) + '" stroke-width="' + randomInteger( 1, 6 ) + '"/></rect>',
								'<ellipse class="svg-element three" id="' + shapesCounter + '" cx="' + randomInteger( 1, 600 ) + '" cy="' + randomInteger( 1, 400 ) + '" rx="' + randomInteger( 20, 600 ) + '" ry="' + randomInteger( 20, 400 ) + '" stroke="' + randomArrayItem( shapeColors ) + '" fill="' + randomArrayItem( shapeColors ) + '" stroke-width="' + randomInteger( 1, 6 ) + '"/></ellipse>',
								'<circle class="svg-element four" id="' + shapesCounter + '" cx="' + randomInteger( 1, 600 ) + '" cy="' + randomInteger( 1, 400 ) + '" r="' + randomInteger( 1, 600 ) + '" stroke="' + randomArrayItem( shapeColors ) + '" fill="' + randomArrayItem( shapeColors ) + '" stroke-width="' + randomInteger( 1, 6 ) + '"/></circle>',
								'<line class="svg-element five" id="' + shapesCounter + '" x1="' + randomInteger( 1, 600 ) + '" x2="' + randomInteger( 1, 600 ) + '" y1="' + randomInteger( 1, 400 ) + '" y2="' + randomInteger( 1, 400 ) + '" stroke="' + randomArrayItem( shapeColors ) + '" stroke-width="' + randomInteger( 1, 6 ) + '"/></line>'
							],
							randomShapeItem = randomArrayItem( shapesArray ),

							itemToRemove = [],

							itemToRotate = [],

							itemToMove = [],

							itemToScale = [],

							item = [ $( '.svg-element' ) ],

							elementToScale = randomArrayItem( item[0] );

							$( '.outputShape' ).append( randomShapeItem );

							$( '.outputShape' ).find( '#' + ( shapesCounter - 1 ) ).removeClass( 'fade-in' );

							$( '.outputShape' ).find( '#' + shapesCounter ).addClass( 'fade-in' );

							$( ".svg-container" ).html( $( ".svg-container" ).html() );

							$( '.outputShape' ).find( '.fade-out' ).removeClass( 'fade-out' ).remove();

							if ( shapesCounter < 5 ) {

								itemToScale = [];

								return false;

							}

							if ( shapesCounter >= 5 ) {

								var elementToScale = randomArrayItem( item[0] );

							}

							var elementCheck = $( elementToScale ).prop( 'tagName' );

							var squareCheck = elementToScale.getAttribute( 'class' );

							if ( elementCheck === 'rect' &&  squareCheck.indexOf( 'square' ) < 0  ) {

								$( elementToScale ).addClass( 'scale' );

							}

							if ( elementCheck === 'rect' && ( squareCheck.indexOf( 'square' ) >= 0 ) ) {

								var getSquareElementValue = parseInt( elementToScale.getAttribute( 'width' ) );

								console.log(getSquareElementValue, 'square');

								var attrWidthSquare = randomInteger( getSquareElementValue, randomInteger( getSquareElementValue, 300 ) ).toString();

								var scaleItem = function ( elemWidth ) {

									$( elementToScale ).animate( {

										width: elemWidth,

								    height: elemWidth

								  }, 1000, mina.easeinout );

								}
								scaleItem( attrWidthSquare );

							}

							if ( elementCheck === 'ellipse' ) {

								var getEllipseElementRx = parseInt( elementToScale.getAttribute( 'rx' ) );

								var getEllipseElementRy = parseInt( elementToScale.getAttribute( 'ry' ) );

								var attr_rx = randomInteger( getEllipseElementRx, randomInteger( getEllipseElementRx, 300 ) ).toString();

								var attr_ry = randomInteger( getEllipseElementRy, randomInteger( getEllipseElementRy, 300 ) ).toString();

								var scaleItem = function ( elem_rx, elem_ry ) {

									$( elementToScale ).animate( {

										rx: elem_rx,

								    ry: elem_ry

								  }, 1000, mina.easeinout );

								}
								scaleItem( attr_rx, attr_ry );

							}

							if ( elementCheck === 'circle' ) {

								var getCircleElementRadius = parseInt( elementToScale.getAttribute( 'r' ) );

								var attrRadiusCircle = randomInteger( getCircleElementRadius, randomInteger( getCircleElementRadius, 300 ) ).toString();

								var scaleItem = function ( elemRadius ) {

									$( elementToScale ).animate( {

										r: elemRadius

								  }, 1000, mina.easeinout );

								}
								scaleItem( attrRadiusCircle );

							}

							if ( shapesCounter < 5 ) {

								itemToMove = [];

							}

							if ( shapesCounter > 5 ) {

								item = [ $( '.svg-element' ) ];

								var elementToMove = randomArrayItem( item[0] );

								if( item.length > 1 ) {

									console.log( 'long - remove' );

									itemToMove = $( ".svg-element[id='" + shapesCounter + "']" );

								}

							}

							var moveItem = function ( ) {

								$( elementToMove ).animate( {

									x: randomInteger( 0, 300 ),

							    y: randomInteger( 0, 200 )

							  }, 1000, mina.easeinout );

							}

							moveItem();

							if ( shapesCounter < 20 ) {

								itemToRotate =[];

							}

							if ( shapesCounter > 20 ) {

								item = [ $( '.svg-element' ) ];

								var elementToRotate = randomArrayItem( item[0] );

								if( item.length > 1 ) {

									console.log( 'long - remove' );

									itemToRotate = $( ".svg-element[id='" + shapesCounter + "']" );

								}

							}

							var rotation = function () {

							  $( elementToRotate ).rotate( {

							    angle: 0,

							    animateTo:randomInteger( 1, 360 )

							  }, 1000, mina.elastic );

							}

							rotation();

							if ( shapesCounter < 30 ) {

								itemToRemove = [];

							}

							if ( shapesCounter > 30 ) {

								item = [ $( '.svg-element' ) ];

								var elementToRemove = randomArrayItem( item[0] );

								if( item.length > 1 ) {

									console.log( 'long - remove' );

									itemToRemove = $( ".svg-element[id='" + shapesCounter + "']" );

								}

							}

							$( elementToRemove ).addClass( 'fade-out' );

						}, 1000 );
						// stop the interval and create an array from the numbers in the output div
						$( '#shapesArraySetLength' ).click( function() {

							clearInterval( intervalShape );

						} );

					} );

			// clear the last item in the output div
			$( '#arrayClearItemButton' ).click( function() {

				// get the span tags and select the last 2 items
				// ( the 'outputContent' <span> and the ' lineBreak' <span> tags )
				var lastContentItem = $( '.outputDiv span' ).slice(-2),
				// if the shapes ouput is visible, get the last shape
				lastSVG = $( '.outputShape' ).children().last();

				// animate the text opacity to 0 and remove it from the output div
				( lastContentItem ).animate( {

					'opacity': '0',

				}, 500,

				function() {

					lastContentItem.remove();

				} );

				// if the shapes output is visible, animate the last SVG opacity to 0
				// and remove it from the output div
				( lastSVG ).animate( {

					'opacity': '0',

				}, 500,

				function() {

					lastSVG.remove();

				} );


			} );

			// clear the output div
			$( '#arrayClearButton' ).click( function() {
				// clear the arrays
				numberArray = [];

				colorArray = [];

				textArray = [];

				// get the text and <br> tags
				var $outputContent = $( '.outputDiv' ).children();

				// animate the text opacity to 0 and remove it from the output div
				$outputContent.animate( {

					'opacity': '0',

				}, 500,

				function() {

					$outputContent.remove();

				} );

			} );

		} );//end ready
