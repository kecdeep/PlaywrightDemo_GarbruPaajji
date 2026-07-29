Feature: Login test

    Scenario: Successful Login

        Given I launch the application
        When I login as Admin
        Then I should see the Dashboard