Feature:Test Facebook smoke scenario

  @Sanity
  Scenario Outline: Test Login eith valid credentials
    Given Open Firefox and start application
    When I enter valid "<username>" and valid "<password>"
    Then User should be able to login successfully
    Then The browser will close

    Examples:
      |username |password |
      | jeevya      | jeevya    |
      | geeta     | geeta    |
