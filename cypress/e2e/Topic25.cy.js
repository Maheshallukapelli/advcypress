/*
#------ This feature file consists of all Testcases related to Login
 
Feature: Login Funtionality

     Background:
          Given User is on "chrome" browser and nagivated to "https://....."        
 
      @valid
      Scenario: Valid Login Test
          When User enters "user123" and "abcd@123"
          And Clicks on Login Button
 
          Then Login should be successful
          And Message "Welcome to user123" should be displayed

      @invalid
      Scenario: Invalid Login Test
          When User enters "userXYZ" and "abcd@123"
          And Clicks on Login Button
 
          Then Login should be failed
          And Message "Invalid Username or password. Retry again" should be displayed          

     @blank
     Scenario: Blank field Login Test
          When User enters "user123" and ""
          And Clicks on Login Button
 
          Then Login should be failed
          And Message "Password required. Retry again" should be displayed           */