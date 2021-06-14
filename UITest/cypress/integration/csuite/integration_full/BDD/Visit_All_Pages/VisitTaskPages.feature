Feature: Visit Task Pages

  Scenario:
    Given I am logged in as an administrator
    When I visit Add Tasks
    Then the page should say Create Task
    When I visit Current Tasks
    Then the page should say Tasks
    When I visit All My Tasks
    Then the page should show all Tasks
    When I visit Assigned Tasks
    Then the page should say Assigned Tasks
    When I visit Completed Tasks
    Then the page should say Completed Tasks
    When I visit Shared Tasks
    Then the page should say Tasks Shared
    When I visit Home
    Then the page should say Your Information
