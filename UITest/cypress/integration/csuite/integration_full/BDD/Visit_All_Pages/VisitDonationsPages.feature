Feature: VisitDonationsPages
	Scenario: Visit Donations Pages
		Given I am logged in as an administrator
		When I visit donations
		Then the page should say donation
		When I visit Add task
		Then the page should say Me
		When I visit Reports
		Then the page should say Reports
		When I visit Filter reports 
		Then the page should say Donations
		When I visit Recurring
		Then the page should say Donations
		When I visit Create
		Then the page should say Donations
		When I visit Show Till
		Then the page should say Till
		When I visit Tax Receipts 
		Then the page should say Donations
		When I visit Donation Types 
		Then the page should say Donations
		When I Visit List Imports
		Then the page should say Donations
		When I visit Import Donations
		Then the page should say Donations
		When I visit Export Donations
		Then the page should say Donations
		When I visit Permission
		Then the page should say Donations