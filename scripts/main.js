var database = [
    "Adventure Time" = [
        "Dancing Jake.gif",
        "Dark Knight.gif",
        "Jammin Jake.gif",
    ],
    "Corgis": {
        "Fishing.gif",
        "Lifejacket Jump.gif",
        "Pet Me.gif",
        "Snowball.gif",
        "Swing.gif",
        "Wake Up.gif",
    },
    "Facepalms": {
        "Beast.gif",
        "Owl.gif",
        "Wolverine.gif",
    },
    "Penguins": {
        "Boss.gif",
        "Drama.gif",
        "Feets.gif",
        "Mass.gif",
        "Newspaper.gif",
        "Penguin vs Sea Lion.gif",
        "Sliding.gif",
        "Superheroes.gif",
    },
    "Pugs": {
        "Awkward.gif",
        "Chocolate Factory.gif",
        "Confused Pugs.gif",
        "Confused.gif",
        "Hulk.gif",
        "Piano.gif",
        "Running Derp.gif",
        "Shopping.gif",
        "Smiling.gif",
        "WUT.gif",
        "Windshield Wipers.gif",
    },
]

var load_gifs = function()
{
	var i = database.length
	while (i--)
	{
		console.log(database[i])
	}
}