var categories = [
    "adventure time",
    "aha",
    "awesome",
    "awkward",
    "banhammer",
    "batman",
    "bears",
    "boom",
    "burn",
    "careful",
    "cats",
    "cinemagraphs",
    "clap",
    "confident",
    "contempt",
    "corgis",
    "cute",
    "dancing",
    "deal with it",
    "defused",
    "derp",
    "disgust",
    "distracted",
    "doge",
    "dogs",
    "done",
    "education",
    "epic",
    "excited",
    "facepalms",
    "fail",
    "funny",
    "goats",
    "gravity falls",
    "haters gonna",
    "he-man",
    "hiding",
    "high five",
    "mind blown",
    "motivational",
    "no idea",
    "oh my",
    "patterns",
    "penguins",
    "pokemon",
    "pugs",
    "sad",
    "smile",
    "star wars",
    "the office",
    "thumbs-up",
]
var gifs = [
    [
        "dancing jake.gif",
        "dark knight.gif",
        "giphy.gif",
        "jammin jake.gif",
    ],
    [
        "aha.gif",
    ],
    [
        "balance.gif",
        "bunk bed.gif",
        "chuck norris split.gif",
        "death ray laser bot.gif",
        "djokovic.gif",
        "epic groceries.gif",
        "false advertising.gif",
        "fire whip.gif",
        "freaking nerds.gif",
        "happy birthday.gif",
        "jackie chan and daughter.gif",
        "kia hamsters.gif",
        "obstacle course.gif",
        "off to school.gif",
        "office warfare.gif",
        "pull my finger.gif",
        "skate rope.gif",
        "soccer.gif",
        "split.gif",
        "surprise sea lion.gif",
        "thug life.gif",
        "treadmill.gif",
        "virtual hug.gif",
    ],
    [
        "kiss.gif",
        "let me love you.gif",
        "white guys.gif",
    ],
    [
        "thor banhammer.gif",
        "wwe.gif",
    ],
    [
        "batman hotdog.gif",
        "batman robin jammin.gif",
        "move your body.gif",
    ],
    [
        "cat call.gif",
        "cutest bear attack.gif",
        "forrest dance.gif",
        "jammin.gif",
        "majestic.gif",
        "no idea who you are.gif",
        "stolen gun.gif",
        "tupperware.gif",
    ],
    [
        "atomic bomb.gif",
        "booyah.gif",
        "fist bump.gif",
        "nuke.gif",
    ],
    [
        "regular show.gif",
    ],
    [
        "sand bag.gif",
    ],
    [
        "cat fight in the making.gif",
        "caterpillar.gif",
        "cumulus kitty.gif",
        "guitar.gif",
        "it was you.gif",
        "jedi kittens.gif",
        "just friends.gif",
        "minecraft.gif",
        "pizza.gif",
        "racoon thief.gif",
        "regret.gif",
        "sacrifice is acceptable.gif",
        "sky diving.gif",
        "wuzzit.gif",
    ],
    [
        "dancing panda.gif",
        "dat kickflip.gif",
        "giraffe wink.gif",
        "hypnoball.gif",
        "pour.gif",
        "raining.gif",
    ],
    [
        "applause.gif",
        "bumblebee.gif",
        "clap.gif",
        "conan.gif",
    ],
    [
        "black man.gif",
        "confident.gif",
        "fox.gif",
    ],
    [
        "dwight.gif",
        "enough internet.gif",
        "max smart.gif",
        "neil degrasse tyson.gif",
        "oh please.gif",
        "simon cowel.gif",
    ],
    [
        "fishing.gif",
        "lifejacket jump.gif",
        "mind blown.gif",
        "pet me.gif",
        "snowball.gif",
        "swing.gif",
        "wake up.gif",
    ],
    [
        "bat yawn.gif",
        "caught staring.gif",
        "hamster band.gif",
        "hedgehog yawn.gif",
        "learning to catch.gif",
        "lemur lollipops.gif",
        "owl hat.gif",
    ],
    [
        "bane.gif",
        "batman.gif",
        "beer arm.gif",
        "care to dance.gif",
        "dancin.gif",
        "dumblin.gif",
        "hammer time.gif",
        "joe.gif",
        "more stomrtroopin.gif",
        "napoleon-dance.gif",
        "ninja turtles.gif",
        "shufflin robot.gif",
        "spider club.gif",
        "stormtroopin.gif",
        "suddenly dancing.gif",
        "yoda.gif",
    ],
    [
        "hamster.gif",
        "legolas.gif",
        "money baller.gif",
        "paul rudd.gif",
        "skateboard.gif",
        "slide.gif",
        "sloth.gif",
        "squirtle.gif",
    ],
    [
        "macgyver.gif",
    ],
    [
        "business deal.gif",
        "confused.gif",
        "thoon.gif",
    ],
    [
        "angry panda.gif",
        "depp.gif",
        "disgust.gif",
        "disgusted.gif",
        "gangsta.gif",
        "lion king.gif",
        "ted.gif",
        "uh yeah.gif",
    ],
    [
        "up.gif",
    ],
    [
        "dance.gif",
        "firefox.gif",
        "space.gif",
        "work.gif",
    ],
    [
        "bye.gif",
        "clever dog.gif",
        "crawling.gif",
        "dig a hole.gif",
        "dinner time.gif",
        "dog rave.gif",
        "dolphin kiss.gif",
        "dug.gif",
        "get in the car.gif",
        "go go go.gif",
        "i hate carrot cake.gif",
        "just friends.gif",
        "nice to meet you.gif",
        "not good as escalators.gif",
        "peek a boo.gif",
        "practical joke.gif",
        "ready for the outdoors.gif",
        "receipt.gif",
        "staring contest.gif",
        "tasted a lemon.gif",
        "this dog wins.gif",
        "which one of you got into the garbage.gif",
        "you rang.gif",
    ],
    [
        "hand wipe.gif",
    ],
    [
        "animation process.gif",
        "birds do this to simulate rain.gif",
        "chicken powered image stabilizer.gif",
        "coraline.gif",
        "corn syrup.gif",
        "how keys work.gif",
        "how to troll.gif",
        "ocean movement.gif",
        "one horse power.gif",
        "paper towels.gif",
        "pop tart factory.jpg",
        "radian.gif",
        "solar system.gif",
        "stop being stupid.gif",
    ],
    [
        "beard slap.gif",
        "bulldozer.gif",
        "stickman adventure.gif",
        "supersnail.gif",
        "techno viking.gif",
    ],
    [
        "ace ventura.gif",
        "ahhh yiss.gif",
        "bboy bear.gif",
        "cookie monster.gif",
        "excited baby.gif",
        "excited kids.gif",
        "fist pump.gif",
        "fitty cent.gif",
        "giggle.gif",
        "github yissssss.gif",
        "happy dance.gif",
        "kip.gif",
        "levar burton.gif",
        "magic trick.gif",
        "noice.gif",
        "snoop.gif",
        "super happy men.gif",
        "super jelly boy.gif",
        "thumbs up.gif",
        "wooo.gif",
        "yessss.gif",
        "zoolander.gif",
    ],
    [
        "beast.gif",
        "owl.gif",
        "picard.gif",
        "wolverine.gif",
        "worf.gif",
    ],
    [
        "baby fight.gif",
        "dance.gif",
        "forklift crash.gif",
        "hobbits.gif",
        "jedi dog.gif",
        "lag.gif",
        "mascot.gif",
        "monday crash.gif",
        "seems legit.gif",
        "skate party wipeout.gif",
        "thanks obama.gif",
        "the perfect fake.gif",
        "the stig.gif",
    ],
    [
        "backwards cotton candy.gif",
        "banana man.gif",
        "busy day at the office.gif",
        "destroy all the evidence.gif",
        "gullzilla.gif",
        "guuuuuuurl please.gif",
        "heavy metal.gif",
        "just graduated college.gif",
        "laser pointer.gif",
        "moth pit.gif",
        "teasing leo.gif",
        "tourists.gif",
        "who farted.gif",
    ],
    [
        "thirsty.gif",
    ],
    [
        "bite.gif",
        "cavorting.gif",
        "dipper.gif",
        "gnome.gif",
        "love.gif",
        "pat.gif",
        "peck.gif",
        "pig.gif",
        "pretending.gif",
        "regrets.gif",
        "title.gif",
        "woo.gif",
        "wut.gif",
    ],
    [
        "darth haters.gif",
        "lizard machine.gif",
        "moonwalking minihorse.gif",
        "power wheel.gif",
    ],
    [
        "punch.gif",
        "transform.gif",
        "unicorn.gif",
        "wall.gif",
    ],
    [
        "hiding.gif",
        "homer.gif",
    ],
    [
        "corgi.gif",
        "racoon.gif",
        "turtles.gif",
    ],
    [
        "commercial.gif",
        "jimmy.gif",
        "liftoff.gif",
        "magic.gif",
        "mind blown.gif",
        "old spice.gif",
        "russell brand.gif",
    ],
    [
        "you are flawless.gif",
    ],
    [
        "doge.gif",
        "driving.gif",
        "frantic spaceman.gif",
        "leap.gif",
        "maintenance.gif",
    ],
    [
        "austin powers.gif",
        "fresh prince.gif",
    ],
    [
        "hurts my brain.gif",
        "pleasant.gif",
        "starry night reflections.gif",
    ],
    [
        "boss.gif",
        "drama.gif",
        "feets.gif",
        "mass.gif",
        "newspaper.gif",
        "penguin vs sea lion.gif",
        "sliding.gif",
        "superheroes.gif",
    ],
    [
        "adorable stantler.gif",
        "always hungry.gif",
        "baby faces.gif",
        "camping.gif",
        "captain.gif",
        "charmander.gif",
        "denied.gif",
        "epic flight.gif",
        "group photo.gif",
        "hair puzzle.gif",
        "hat.gif",
        "high five.gif",
        "illiterate chansey.gif",
        "ketchup.gif",
        "no idea.gif",
        "olympics.gif",
        "squirtle squad.gif",
        "surfing.gif",
        "there there.gif",
    ],
    [
        "avengers.gif",
        "awkward.gif",
        "bobble.gif",
        "calm down.gif",
        "chocolate factory.gif",
        "common pug.gif",
        "confused pugs.gif",
        "confused.gif",
        "conga.gif",
        "doting.gif",
        "fridge.gif",
        "hoodie.gif",
        "hulk.gif",
        "jack in the box.gif",
        "king pug.gif",
        "monster.gif",
        "mummy.gif",
        "ocd.gif",
        "offended ancestors.gif",
        "oh the majesty.gif",
        "party taim.gif",
        "pew pug.gif",
        "piano.gif",
        "picnic.gif",
        "pug life.gif",
        "puppy.gif",
        "running derp.gif",
        "shake.gif",
        "shopping.gif",
        "sleepy.gif",
        "smiling.gif",
        "so majestic.gif",
        "stairs.gif",
        "toilet.gif",
        "unicorn.gif",
        "windshield wipers.gif",
        "wink.gif",
        "wut.gif",
    ],
    [
        "bugs bunny.gif",
        "gushing.gif",
        "jim.gif",
        "obama.gif",
        "peter parker.gif",
        "pooh.gif",
    ],
    [
        "arnold.gif",
        "library creeper.gif",
        "obama selfie.gif",
    ],
    [
        "vader.gif",
    ],
    [
        "scissor me.gif",
    ],
    [
        "audience member.gif",
        "chinese.gif",
        "chuck norris.gif",
        "levar burton.gif",
        "obama biden.gif",
        "suits.gif",
        "terminator.gif",
    ],
]
