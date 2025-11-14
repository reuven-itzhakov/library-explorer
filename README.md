## Future ReadMe ##

# requirements #

# main screen:
- Logo
- Title
* SearchBar
* SortOptions
* BookList
* FilterOptions

# SortOptions
- on top of BookList
- drop box
- by Title(A->Z / Z->A)
- by Rating(High->Low / Low->High)
- show number of books in BookList

# FilterOptions:
* FilterTab (one for tags, one for stars, and one for favorites)
- clear button

# FliterTab
- title
- opened/closed tab
- filterOption

# FilterFavorites
- toggle favorites only
- get data from the localStorage

# FilterTabSelection
- toggle tabs selection

# FilterTabStars
- 5 stars
- ★☆☆☆☆ will show books with minimum 1 star rating
- ★★★★★ will show books with minimum 5 star rating

# SearchBar
- placeholder of "Search for book or author"
- case-insensitive
- levinstein distance? not required so no need to implement (but good to have)
- suggestions? not required but also good to have, so will be implemented. Answers for princples of shniderman:
    1. Reduce Short-Term Memory Load
    2. Internal Locus of Control
- suggetion onClick: complete the text in searchBar
- search button right side with appropriate svg

# BookList
- grid of 3 or 4 columns
- wrapper for BookCard
- logic of fetching the books
- useEffect for fetching books
- useState for storing books

# BookCard
- heart: add to favorites and store in the localStorage
- image placeholder
- title
- author
- year
- rating
- tags

