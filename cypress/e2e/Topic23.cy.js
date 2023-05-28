
/*
# Requirement
#		==> Able to add 2 numbers

#*********************************************************************
#User Story:
#	As a User
#		I should be provided with an interface where I can provide numbers
#   So That
#		I can add 2 numbers 
#*********************************************************************

#---- Calculator Feature
Feature: Calculator Add Features
	This feature file consists of all calc operations related to add 
	Operations: add, subtract, multiply, divide, exponential
	
	Scenario: Adding two number_Level1
		Given User got access to calculator
		When User enters the first number
		And User selects addition symbol
		And User enters the second number
		And User selects equals button
		Then Calculator should display sum of those numbers
		
	Scenario: Adding two number_Level2
		Given User got access to calculator
		When User clicks on the first number
		And User clicks on + symbol
		And User clicks the second number
		And User clicks on equals button
		Then Calculator should display sum of those numbers		
	
	Scenario: Adding two number_Level3
		Given User got access to calculator
		When User clicks on the button with label "5"
		And User clicks on the button with label "+" symbol
		And User clicks on the button with label "8"
		And User clicks on the button with label "="
		Then Calculator should display "13" as result	
	
	Scenario: Adding two number_Level4
		Given User got access to calculator
		When User clicks on the first number
			| first numer | 10 |
		And User clicks on the following symbol
			| symbol | + |
		And User clicks the second number
			| second numer | 20 |
		And User clicks on equals button
		Then Calculator should display "30" as sum of those numbers		
	
	@ddt
	Scenario Outline: Adding two number_Level5
		Given User got access to calculator
		When User clicks on the button with label "<firstnum>"
		And User clicks on the button with label "+" symbol
		And User clicks on the button with label "<secondnum>"
		And User clicks on the button with label "="
		Then Calculator should display "<result>" as result	
	
		Examples:
			|	firstnum	|	secondnum	|	result	|
			|	10			|	20			|	30		|
			|	50			|	-30			|	20		|
			|	-5			|	-1			|	-6		|
		
	
	@ddt
	Scenario Outline: Adding two number_Level6
		Given User got access to calculator
		When User enters as per "<expression>"
		And User clicks on equal button
		Then Calculator should display "<result>" as result	
	
		Examples:
			|	expression			|	result		|
			|	10	+ 10			|	20			|
			|	50 + 5 + 20 		|	75			|
			|	1 + 2 + 3 + 5 + -1	|	10			|
			
*/