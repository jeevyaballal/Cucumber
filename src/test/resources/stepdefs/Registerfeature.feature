Feature: Register

  Scenario Outline: User provided valid data
    When Browser is opened and site is loaded
    Then User inputs username as "<username>"
    And User inputs phone number as "<phone>"
    And User inputs location
    And User inputs password as "<password>"
    Then Press Register button
    Then Username should load on page
    Examples:
      | username | password | phone |
      | abc  | abc | 9898989888 |


#  Scenario Outline: User provides invalid credentials
#    When Browser is opened and site is loaded
#    Then User inputs the "<username>" and "<password>"
#    Then Press login button
#    Then Error should be displayed
#    Examples:
#      | username  | password |
#      | abcdd     | dasd     |
#      | 123443@33 | 0338@123 |
#      | !@#$%     | !#$#$    |




#  Scenario: User provides empty credentials
#    When Browser is opened and site is loaded
#    Then Press login button
#    Then Error should be displayed