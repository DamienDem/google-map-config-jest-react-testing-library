Given a user is on the map's page
When the user select the type restaurants
Then all restaurants should be display
And hotels should not be display

Given a user is on the map's page
When the user select rating above 4.0
Then item with a rate above 4.0 should be display
And item with a rate under 4.0 should not be display