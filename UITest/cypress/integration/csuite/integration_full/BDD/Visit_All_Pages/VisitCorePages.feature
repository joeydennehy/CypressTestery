Feature: VisitCorePages
	Scenario: Visit Core Pages
		Given I am logged in as an administrator
		When I visit Financial
		Then the page says Financials
		When I visit Groups
		Then the page says Groups
		When I visit Logs
		Then the page says Logs
		When I visit Notes
		Then the page says Notes
		When I visit Profiles
		Then the page says Profiles
		When I visit Reports 
		Then the page says Reports
		When I visit System Data 
		Then the page says System Data
		When I visit Users
		Then the page says Users
		When I visit Migration
		Then the page says Migration