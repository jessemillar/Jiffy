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
    "nope",
    "oh my",
    "patterns",
    "penguins",
    "pokemon",
    "pugs",
    "sad",
    "smile",
    "star wars",
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
        "ballet.gif",
        "belly flop.gif",
        "bmx practice.gif",
        "bunk bed.gif",
        "card magic.gif",
        "catch the wave.gif",
        "chair split lift.gif",
        "chuck norris split.gif",
        "crane machine.gif",
        "crazy kid.gif",
        "dad instincts.gif",
        "death ray laser bot.gif",
        "djokovic.gif",
        "epic groceries.gif",
        "evade death.gif",
        "eyes in the back of his head.gif",
        "f1 pitstop.png",
        "fire whip.gif",
        "freaking nerds.gif",
        "gravity shift.gif",
        "happy birthday.gif",
        "hexapod.gif",
        "hover landing.gif",
        "how to sunglasses.gif",
        "i got dis.gif",
        "jackie chan and daughter.gif",
        "juggling otter.gif",
        "kia hamsters.gif",
        "little girl split.gif",
        "manly.gif",
        "mech.gif",
        "not an airplane.gif",
        "obstacle course.gif",
        "off to school.gif",
        "office warfare.gif",
        "paper airplane dump.gif",
        "ping pong boss.gif",
        "pull my finger.gif",
        "quadcopter formation.gif",
        "ready to ride.gif",
        "robot samurai.gif",
        "rugby run.gif",
        "shockwave.gif",
        "skate rope.gif",
        "skiing the waterfall.gif",
        "smooth crash.gif",
        "soccer.gif",
        "split.gif",
        "street fighter.gif",
        "subliminal.gif",
        "surprise sea lion.gif",
        "sweet bmx trick.gif",
        "thug life.gif",
        "treadmill.gif",
        "unemployed hogwarts wizard.gif",
        "virtual hug.gif",
        "vr sandbox.gif",
        "waddles pancake.gif",
        "windmilling.gif",
        "winning at life.gif",
    ],
    [
        "kiss.gif",
        "let me love you.gif",
        "no kisses.gif",
        "white guys.gif",
    ],
    [
        "thor banhammer.gif",
        "wwe.gif",
    ],
    [
        "batman hotdog.gif",
        "batman robin jammin.gif",
        "batman.gif",
        "move your body.gif",
    ],
    [
        "cat call.gif",
        "cutest bear attack.gif",
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
        "at the door.gif",
        "battle of the beasts.gif",
        "cat fight in the making.gif",
        "caterpillar.gif",
        "cumulus kitty.gif",
        "finger paint.gif",
        "fire cat.gif",
        "guitar.gif",
        "helping with house work.gif",
        "how do you do.gif",
        "it was you.gif",
        "iz safe.gif",
        "jedi kittens.gif",
        "just friends.gif",
        "minecraft.gif",
        "no kisses.gif",
        "pizza.gif",
        "predator.gif",
        "racoon thief.gif",
        "regret.gif",
        "sacrifice is acceptable.gif",
        "sky diving.gif",
        "stealth mode enabled.gif",
        "watching you.gif",
        "wut is dis.gif",
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
        "corgi collision.gif",
        "corgi goggles.gif",
        "corgi heaven.gif",
        "fat legs.gif",
        "fishing.gif",
        "floppy corgi.gif",
        "floppy fail.gif",
        "lifejacket jump.gif",
        "mind blown.gif",
        "pet me.gif",
        "running corgi.gif",
        "snowball.gif",
        "swing.gif",
        "wake up.gif",
        "when your phone is on one percent.gif",
    ],
    [
        "awarwharwharwha.gif",
        "baby chipmunk.gif",
        "bat yawn.gif",
        "birthday horse.gif",
        "bunny piano.gif",
        "caught staring.gif",
        "coming through.gif",
        "confused dog.gif",
        "corgi goggles.gif",
        "crocs are made for walking.gif",
        "excited for food.gif",
        "finger paint.gif",
        "floof.gif",
        "floop.gif",
        "floppy fail.gif",
        "focus on me.gif",
        "hamster band.gif",
        "head scratches.gif",
        "hedgehog weigh in.gif",
        "hedgehog yawn.gif",
        "hop hop hop.gif",
        "juggling otter.gif",
        "kwalla hitchhiker.gif",
        "learning to catch.gif",
        "lemur lollipops.gif",
        "life of a bird.gif",
        "mistimed bunnies.gif",
        "my jam.gif",
        "owl hat.gif",
        "penguins.gif",
        "petting an owl.gif",
        "private.gif",
        "ready for adventure.gif",
        "running corgi.gif",
        "secret agent.gif",
        "so satisfied.gif",
        "time for sleep.gif",
        "trash pandas.gif",
        "water dogs want belly rubs.gif",
        "where are the people.gif",
        "who is your best friend.gif",
        "wut.gif",
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
        "ninja turtles.gif",
        "shufflin robot.gif",
        "spider club.gif",
        "stormtroopin.gif",
        "suddenly dancing.gif",
        "yoda.gif",
    ],
    [
        "do not care crow.gif",
        "hamster.gif",
        "legolas.gif",
        "limited edition frog.gif",
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
        "head meet wall.gif",
        "joey.gif",
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
        "lick paddle lick.gif",
        "shiba inuws 1.gif",
        "shiba inuws 2.gif",
        "shiba inuws 3.gif",
        "shiba inuws 4.gif",
        "space.gif",
        "work.gif",
    ],
    [
        "alligator chase.gif",
        "avengers.gif",
        "awarwharwharwha.gif",
        "awesome dog diver.gif",
        "awkward.gif",
        "barkour backflip.gif",
        "barkour.gif",
        "bobble.gif",
        "butt scoot.gif",
        "bye.gif",
        "calculations.gif",
        "calm down.gif",
        "chocolate factory.gif",
        "clever dog.gif",
        "clingy.gif",
        "common pug.gif",
        "confused dog.gif",
        "confused pugs.gif",
        "confused.gif",
        "conga.gif",
        "cool dogs do not look at explosions.gif",
        "corgi collision.gif",
        "corgi goggles.gif",
        "corgi heaven.gif",
        "crawling.gif",
        "crocs are made for walking.gif",
        "cruising.gif",
        "cushions.gif",
        "dance.gif",
        "desert beast.gif",
        "dig a hole.gif",
        "dinner time.gif",
        "distracted human.gif",
        "dog groceries.gif",
        "dog leap.gif",
        "dog rave.gif",
        "doga.gif",
        "dogs wasting children.gif",
        "dolphin kiss.gif",
        "doting.gif",
        "drama.gif",
        "dripping swag.gif",
        "dug.gif",
        "epic fetch.gif",
        "excited for food.gif",
        "expert dog.gif",
        "fab eyebrows.gif",
        "fat legs.gif",
        "fine whatever.gif",
        "firework dog.gif",
        "fishing.gif",
        "floof.gif",
        "floop.gif",
        "floppy corgi.gif",
        "floppy fail.gif",
        "flying.gif",
        "focus on me.gif",
        "forever unwrapping.gif",
        "forgetting how to dog.gif",
        "fridge.gif",
        "front flip.gif",
        "get in the car.gif",
        "go go go.gif",
        "grabbing the mail.gif",
        "great dane running.gif",
        "guard dog.gif",
        "hanging out.gif",
        "head scratches.gif",
        "hoodie.gif",
        "hot.gif",
        "how dare you.gif",
        "how dogs drink.gif",
        "hulk.gif",
        "i hate carrot cake.gif",
        "i love these balls.gif",
        "i will tell my grandchildren of your sacrifice.gif",
        "innocent.gif",
        "jack in the box.gif",
        "jumping fluff.gif",
        "just friends.gif",
        "king pug.gif",
        "lazy fetch.gif",
        "lick paddle lick.gif",
        "lifejacket jump.gif",
        "lifejacket.gif",
        "liftoff.gif",
        "lone pug is cool.gif",
        "look at me.gif",
        "look at the camera.gif",
        "magic for dogs.gif",
        "michael bay.gif",
        "mind blown.gif",
        "monster.gif",
        "mop dogs.gif",
        "mummy.gif",
        "my jam.gif",
        "near a stream.gif",
        "nice to meet you.gif",
        "nom.gif",
        "not good as escalators.gif",
        "ocd.gif",
        "offended ancestors.gif",
        "oh boy.gif",
        "oh the majesty.gif",
        "parent pug.gif",
        "parkour dog.gif",
        "party taim.gif",
        "pat pat.gif",
        "peek a boo.gif",
        "perpetual motion.gif",
        "pet me.gif",
        "pew pug.gif",
        "piano.gif",
        "picnic.gif",
        "practical joke.gif",
        "pug life.gif",
        "pug pile.gif",
        "puppy.gif",
        "reaction to a puppy.gif",
        "ready for adventure.gif",
        "ready for bed.gif",
        "ready for the outdoors.gif",
        "receipt.gif",
        "running corgi.gif",
        "running derp.gif",
        "scary fish.gif",
        "scary puppy.gif",
        "shake.gif",
        "shopping.gif",
        "sleepy.gif",
        "smiling.gif",
        "snowball.gif",
        "so majestic.gif",
        "so satisfied.gif",
        "socks.gif",
        "space.gif",
        "stairs.gif",
        "staring contest.gif",
        "stolen.gif",
        "swim fail.gif",
        "swing.gif",
        "tasted a lemon.gif",
        "this dog loves tennis.gif",
        "this dog wins.gif",
        "this is dog.gif",
        "toilet.gif",
        "trampoline bulldog.gif",
        "trust.gif",
        "tug of war dogs.gif",
        "unicorn.gif",
        "wake up.gif",
        "walking a hooman.gif",
        "wampa.gif",
        "washing the dog.gif",
        "when your phone is on one percent.gif",
        "which one of you got into the garbage.gif",
        "who is your best friend.gif",
        "windshield wipers.gif",
        "wink and smile.gif",
        "wink.gif",
        "work.gif",
        "wut is a lime.gif",
        "wut.gif",
        "you rang.gif",
    ],
    [
        "hand wipe.gif",
    ],
    [
        "airbags.gif",
        "angry owl.gif",
        "animation process.gif",
        "battery life.gif",
        "birds do this to simulate rain.gif",
        "cd bubbles.gif",
        "chicken powered image stabilizer.gif",
        "chlorine and brake fluid.gif",
        "coraline.gif",
        "corn shucking.gif",
        "corn syrup.gif",
        "curve ball.gif",
        "eclipse from a plane.gif",
        "fire with battery.gif",
        "how dogs drink.gif",
        "how keys work.gif",
        "how to pour.gif",
        "how to troll.gif",
        "illogical boarding.gif",
        "milk.gif",
        "ocean movement.gif",
        "one horse power.gif",
        "origami rhino.gif",
        "peripheral.gif",
        "pit stop.gif",
        "pop tart factory.jpg",
        "radian.gif",
        "refraction.gif",
        "shockwave.gif",
        "slow motion woodpecker.gif",
        "smores dip.gif",
        "solar system.gif",
        "stabbing a phone battery.gif",
        "steadycam.gif",
        "stop being stupid.gif",
        "titanic.gif",
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
        "bboy bear.gif",
        "cookie monster.gif",
        "dis gon b gud.gif",
        "excited baby.gif",
        "excited kids.gif",
        "fist pump.gif",
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
        "wooo.gif",
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
        "caught from behind.gif",
        "caught.gif",
        "cushions.gif",
        "dance.gif",
        "denied.gif",
        "do not cheat traffic.gif",
        "dog leap.gif",
        "drunk robots.gif",
        "fireworks oops.gif",
        "floppy corgi.gif",
        "floppy fail.gif",
        "forever unwrapping.gif",
        "forklift crash.gif",
        "go slow.gif",
        "hobbits.gif",
        "i will tell my grandchildren of your sacrifice.gif",
        "jedi dog.gif",
        "lag.gif",
        "landing.gif",
        "liftoff.gif",
        "lighter dancing.jpg",
        "luck.gif",
        "mascot.gif",
        "military simulator.gif",
        "minion flop.gif",
        "monday crash.gif",
        "pitch.gif",
        "ran a red light.gif",
        "seems legit.gif",
        "semester slinky.gif",
        "skate party wipeout.gif",
        "ten out of ten.gif",
        "thanks obama.gif",
        "the perfect fake.gif",
        "the stig.gif",
        "unipoop.gif",
        "we have liftoff.gif",
    ],
    [
        "50 cent.gif",
        "arghhhhh.gif",
        "aww yisssss.gif",
        "backwards cotton candy.gif",
        "ballin so hard.gif",
        "banana man.gif",
        "benny the bull.gif",
        "biking food.gif",
        "birthday horse.gif",
        "bloody kids.gif",
        "bored to death.gif",
        "breadcrumbs.gif",
        "broken windshield wipers.gif",
        "busy day at the office.gif",
        "calculations.gif",
        "cheezy.gif",
        "cool dogs do not look at explosions.gif",
        "cushions.gif",
        "denied.gif",
        "destroy all the evidence.gif",
        "dogs wasting children.gif",
        "don't freak out.gif",
        "fabulous waterbender.gif",
        "false advertising.gif",
        "fifa skills.gif",
        "frog.gif",
        "get the camera.gif",
        "getting into character.gif",
        "go kart tactics.gif",
        "good day to you sir.gif",
        "good to be home.gif",
        "gullzilla.gif",
        "guuuuuuurl please.gif",
        "hacked.gif",
        "hand off.gif",
        "head scratches.gif",
        "heavy metal.gif",
        "how canadians cheat.gif",
        "how to properly change lanes.gif",
        "how to win a fight.gif",
        "i got you.gif",
        "image not found.gif",
        "in the hood.gif",
        "instagram.gif",
        "jaws.gif",
        "just graduated college.gif",
        "just stop.gif",
        "king kong.gif",
        "laser pointer.gif",
        "lebron super sayan.gif",
        "like a bro.gif",
        "link and pots.gif",
        "monday.gif",
        "moth pit.gif",
        "muscle car.gif",
        "oh no.gif",
        "ought to know.gif",
        "out a window.gif",
        "paper towels.gif",
        "poker face.gif",
        "procrastination.gif",
        "rainbow worm sacrifice.gif",
        "red.gif",
        "secret agent.gif",
        "stahp.gif",
        "sucka.gif",
        "tactical reload.gif",
        "teasing leo.gif",
        "that escalated quickly.gif",
        "tourists.gif",
        "trex chasing a jeep.gif",
        "truly disgusting.gif",
        "user experience.gif",
        "waste of money.gif",
        "whale hello there.gif",
        "what is this thing.gif",
        "when your phone is on one percent.gif",
        "who farted.gif",
        "whoopie.gif",
        "wizard chores.gif",
        "working out.gif",
    ],
    [
        "how to goat.gif",
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
        "crossing the finish line.gif",
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
        "no comment.gif",
        "oh my gosh wut.gif",
        "willis.gif",
    ],
    [
        "nope.jpg",
    ],
    [
        "austin powers.gif",
        "fresh prince.gif",
        "why.gif",
    ],
    [
        "hurts my brain.gif",
        "infinite eye.gif",
        "magic donut.gif",
        "pleasant.gif",
        "starry night reflections.gif",
        "static.gif",
        "sync your breathing.gif",
    ],
    [
        "boss.gif",
        "cheezy.gif",
        "drama.gif",
        "feets.gif",
        "mass.gif",
        "newspaper.gif",
        "penguins.gif",
        "private.gif",
        "sliding.gif",
        "superheroes.gif",
        "thought you were a rock.gif",
        "where are the people.gif",
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
        "pokepeeps.gif",
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
        "desert beast.gif",
        "doting.gif",
        "fridge.gif",
        "hoodie.gif",
        "hulk.gif",
        "jack in the box.gif",
        "king pug.gif",
        "lone pug is cool.gif",
        "monster.gif",
        "mummy.gif",
        "nom.gif",
        "ocd.gif",
        "offended ancestors.gif",
        "oh the majesty.gif",
        "parent pug.gif",
        "party taim.gif",
        "pew pug.gif",
        "piano.gif",
        "picnic.gif",
        "pug life.gif",
        "pug pile.gif",
        "puppy.gif",
        "running derp.gif",
        "scary puppy.gif",
        "shake.gif",
        "shopping.gif",
        "sleepy.gif",
        "smiling.gif",
        "so majestic.gif",
        "stairs.gif",
        "toilet.gif",
        "unicorn.gif",
        "wampa.gif",
        "windshield wipers.gif",
        "wink and smile.gif",
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
        "school starts next week.gif",
    ],
    [
        "arnold.gif",
        "library creeper.gif",
        "obama selfie.gif",
    ],
    [
        "more stomrtroopin.gif",
        "storm trooper accuracy.gif",
        "stormtroopin.gif",
        "vader.gif",
    ],
    [
        "audience member.gif",
        "batman.gif",
        "chinese.gif",
        "chuck norris.gif",
        "levar burton.gif",
        "obama biden.gif",
        "suits.gif",
        "terminator.gif",
    ],
]
