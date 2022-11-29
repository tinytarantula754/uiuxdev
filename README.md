# Development


### Link to Deployed Website
`https://tinytarantula754.github.io/uiuxdev`

### Goal and Value of the Application

The goal of this application is to allow Pokemon trainers to choose Pokemon for their 6-member lineups, and then display aggregate statistics about their lineup. This allows Pokemon trainers to quickly evaluate the average strength, speed and stamina of different lineups of Pokemon. Additionally, it allows Pokemon trainers to quickly sort through their list of Pokemon with filters based on level and type.

### Usability Principles Considered

To establish hierarchy, I used a high-contrast color palette (black, white and gray) with a clear sans-serif font and different font weights to indicate headers from other text. Additionally, I used a two-column layout that mimics many list formats -- on one side is the list of items, on the other side is the aggregate view. This has a clear cause-and-effect flow - you click the items on one side to include them in your aggregate.

### Organization of Components

I use three components: App, PokemonItem and PokemonLineup. App is the overall container which places the filter/sort features, Pokemon item cards and Pokemon lineup view together. For each of our Pokemon, we place a PokemonItem component in the left list -- these show the Pokemon's name, type, level, strength, speed and stamina, and react to a user's click by toggling the Pokemon in the lineup. The PokemonLineup component shows the Pokemon that are currently toggled and calculates and displays strength/speed/stamina averages of the lineup. 

### How Data is Passed Down Through Components

Data is passed through props. To allow the PokemonLineup and PokemonItem to toggle which Pokemon are in the lineup, I pass a togglePokemon callback, which takes the index of the Pokemon that should be toggled. Additionally, I pass individual Pokemon objects to PokemonItem, so that PokemonItem knows which Pokemon to display. I also pass the list of selected Pokemon to PokemonLineup, so it knows which Pokemon to include in the lineup display/statistics.

### How the User Triggers State Changes

The user triggers state changes by clicking on Pokemon (either the PokemonItem cards or the Pokemon displayed in PokemonLineup). When the user clicks on these Pokemon, they call a togglePokemon callback. This callback mutates a state variable (selected) which then causes React to rerender the page. 
