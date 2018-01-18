
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

			// enable submit by hitting the enter key
			$( $arrayInput ).on( 'keyup', function( e ) {

				// event.which records which key is pressed,
				// this works for mouse events as well,
				// 13 is the key code for the enter key
				if( e.which === 13 ) {

					$( '#arraySubmitButton' ).click();
				}

			} );

			// clear the output div by hitting the esc key
			$(document).on( 'keyup', function( e ) {

				// 27 is the key code for the esc key
				if( e.which === 27 ) {

					$( '#arrayClearButton' ).click();
				}

			});

			$( '#arraySubmitButton' ).click( function( e ) {

				e.preventDefault();

				// get the text from the input and remove white space from the beginning and end
				var $arrayInputText = $( '.arrayInput' ).val().trim();

				// if the input is empty, dont submit the input text
				if( $arrayInputText === '' ) {

					return false;
				}

				// if the input is not empty, add the input text to the output div
				$outputDiv.append( '<span class="outputText" style="display: none;">' + $arrayInputText + '</span><br/>' );

				$( 'span.outputText' ).fadeIn(500);

				// animate the input text color to transparent white value and then remove it, 
				// fadeOut() jQuery method doesn't work on input text it affects the input element
				$arrayInput.animate( { 

					'color': 'rgba(255,255,255, 0)', 

				}, 500, 

				function() {

					$arrayInput.val( '' )
						   	   .css( 'color', 'black' );

				} );
				 
			} );

			// clear the output div 
			$( '#arrayClearButton' ).click( function() {

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

			// clear the last item in the output div 
			$( '#arrayClearItemButton' ).click( function() {

				// get the text and <br> tags and select the last 2 items 
				// (the <span> and the <br> tags)
				var $outputTextItem = $( 'span.outputText, br' ).slice( -2 );

				var $liItem = $('ul li:last');
				console.log($liItem);

				// animate the text opacity to 0 and remove it from the output div
				($outputTextItem).animate( { 

					'opacity': '0', 

				}, 500, 

				function() {

					$outputTextItem.remove();
							 
				} ); 

				// clear animation for the ul list items
				($liItem).animate( { 

					'opacity': '0', 

				}, 500, 

				function() {

					$liItem.remove();
							 
				} ); 

			} );

			// make an array from the text in the output div
			$( '#userInputArray' ).click( function() {

				var textArray =[];

				// get the text from the output div and store it in a variable
				var $outputTextArray = $( 'span.outputText' );
					
				// use an each() loop to iterate through the text object array
				// get the text and push it to the textArray array
				$outputTextArray.each( function() {

					var text = $( this ).text();

					textArray.push( text );

				});

				console.log( textArray );

			} );

			// make an array from the text in the output div
			$( '#colorsArray' ).click( function() {

				$( '.outputDiv' ).html( '' );

				// get the text from the output div and store it in a variable
				var $outputColorArray = $( 'span.outputText' );

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

				var colorArray =[];

				// use an each() loop to iterate through the colorName array
				// merge it with the color value array and push it to the colorArray array
				$.each(colorName, function( i, item ) {

				    var createColorItem = ( colorName[ i ] + ':' + colorValue[ i ] );

				    colorArray.push( createColorItem );

				});

				console.log( colorArray );

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

				// call the shuffleArray function and pass it colorArray as an argument
				shuffleArray( colorArray );

				console.log( colorArray );

				// convert the colorArray to a string, seperate it at the commas,
				// and create a new array of color/value pairs as array items
				var colorsConversionOne = colorArray.join( ',' ).split( ':' );

				// convert the colorsConversionOne array to a string, seperate it at the commas,
				// and create a new array of alternating color/value pairs as array items
				var colorsConversionTwo = colorsConversionOne.join( ',' ).split( ',' );

				console.log( colorsConversionTwo );

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

				// create a new ul in the DOM to hold the colors ul
				$( '.outputDiv' ).append( '<ul class="colorsListUl"></ul>' );

				// use an each() loop to iterate through the newKeys array
				// and concatenate a <li> for each item that includes a style attribute 
				// that recieves the matching index from the newValues array
				// and inserts each <li> into the DOM
				$.each( newKeys, function( i, item ) {

				   	var colorsList = '<li id="color-' + newKeys[ i ] + ' " style="color: ' + newValues[ i ] 
				   					 + '; list-style-type: none; display: none;">' + newKeys[ i ] + '</li>';

				   	$( '.colorsListUl' ).append( colorsList );

				} );

				$( '.colorsListUl li' ).fadeIn(500);

			} );

		} );//end ready