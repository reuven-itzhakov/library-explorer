## Development Decisions & Tradeoffs ##

# 1. Search Implementation
I considered two approaches for the search feature:
- **Auto-search on keypress**: More convenient since users don't need to press "Enter", but requires debouncing to prevent unnecessary API calls.
- **Search button + Enter key** (chosen): Simpler implementation and better performance since we only search when needed. More predictable for users.

# 2. Favorites Storage
I thought about using `useContext` to manage favorites and pass the context to relevant components, but decided to stick with `localStorage` directly because of the small database size. This can be refactored in the future to improve performance and reduce unnecessary reads if the dataset grows.

# 3. Design & Styling
I'm not as strong in design as I am in functionality, so I started with basic styling. While working on the design, I discovered it wasn't as bad as I thought and started learning more about CSS. Worth mentioning that we focused more on Tailwind at college, which is a more fun and convenient tool for styling websites.

# 4. Book Card Images
I wanted to include images for each book card, but since there are no images in the database, I decided to leave the cards without images or images placeholder for now.

# 5. Display Format
I considered displaying books as a table initially, but that was less visually appealing. Cards are more modern and user-friendly.

# 6. Favorites Icon
Although the requirements specified using a star icon for favorites, I changed it to a heart icon. Stars are more commonly associated with ratings, while a heart better conveys the "I like this" feeling for favorites.


