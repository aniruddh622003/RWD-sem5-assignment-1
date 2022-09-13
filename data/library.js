const libData = {
  books: [
    {
      title: "Popisho",
      id: null,
      author: "Leone Ross",
      link: "https://openlibrary.org/works/OL20849886W",
      image: "https://covers.openlibrary.org/b/olid/OL28229066M-L.jpg",
      date_finished: "In progress",
      notes: null,
    },
    {
      title: "The Book of Form and Emptiness",
      id: null,
      author: "Ruth Ozeki",
      link: "https://openlibrary.org/works/OL24197713W",
      image: "https://covers.openlibrary.org/b/olid/OL35354576M-L.jpg",
      date_finished: "08/28/2022",
      notes:
        "While at times Ruth Ozeki's writing is lyrical and magical, mostly this book felt kind of sterile. Neither of the main characters feel deeply explored and the most interesting characters (the aleph and the bottleman) are really only side events. Overall the book tasted like it had been aged in steel barrels and I was left wanting something more full bodied, more lyrical, more vivid.",
    },
    {
      title: "Assassin's Fate",
      id: null,
      author: "Robin Hobb",
      link: "https://openlibrary.org/works/OL19098683W",
      image: "https://covers.openlibrary.org/b/id/8417258-L.jpg",
      date_finished: "06/11/2022",
      notes:
        "Oof. That concludes reading all 16 of the realm of the elderlings books. I haven't kept detailed notes on them but I'm so glad that I read them all and read them in order. In many ways Nighteyes is the main character. These last three books tie together so many threads and loose ends - the storyline is dark but the ending is magical. Robin Hobb has such a powerful command of both small characters and giant worlds.",
    },
    {
      title: "Fool's quest",
      id: null,
      author: "Robin Hobb",
      link: "https://openlibrary.org/works/OL20005636W",
      image: "https://covers.openlibrary.org/b/olid/OL32221420M-L.jpg",
      date_finished: "05/02/2022",
      notes: null,
    },
    {
      title: "Fool's Assassin",
      id: null,
      author: "Robin Hobb",
      link: "https://openlibrary.org/works/OL17268025W",
      image: "https://covers.openlibrary.org/b/olid/OL27933228M-L.jpg",
      date_finished: "04/11/2022",
      notes: null,
    },
    {
      title: "Blood of Dragons",
      id: null,
      author: "Robin Hobb",
      link: "https://openlibrary.org/works/OL24788835W",
      image: "https://covers.openlibrary.org/b/id/11548993-L.jpg",
      date_finished: "03/11/2022",
      notes: null,
    },
    {
      title: "City of dragons",
      id: null,
      author: "Robin Hobb",
      link: "https://openlibrary.org/works/OL16442335W",
      image: "https://covers.openlibrary.org/b/olid/OL26704388M-L.jpg",
      date_finished: "02/24/2022",
      notes: null,
    },
    {
      title: "Dragon Haven",
      id: null,
      author: "Robin Hobb",
      link: "https://openlibrary.org/works/OL14962810W",
      image: "https://covers.openlibrary.org/b/id/6298448-L.jpg",
      date_finished: "02/08/2022",
      notes: null,
    },
    {
      title: "Dragon Keeper",
      id: null,
      author: "Robin Hobb",
      link: "https://openlibrary.org/works/OL24710497W",
      image: "https://covers.openlibrary.org/b/olid/OL32800595M-L.jpg",
      date_finished: "01/17/2021",
      notes: null,
    },
    {
      title: "Fool's fate",
      id: null,
      author: "Robin Hobb",
      link: "https://openlibrary.org/works/OL2707195W",
      image: "https://covers.openlibrary.org/b/id/374007-L.jpg",
      date_finished: "12/22/2021",
      notes:
        "Are there stronger characters than the Fitz and the Fool? What depth of emotion. This series is a magical climax and feels like it rivals the original assassin trilogy! Loved reading this series.",
    },
    {
      title: "The Golden Fool",
      id: null,
      author: "Robin Hobb",
      link: "https://openlibrary.org/works/OL2707218W",
      image: "https://covers.openlibrary.org/b/id/5206-L.jpg",
      date_finished: "12/01/2021",
      notes:
        "WHAT! So many mysteries unraveling, starting, crossing. Such emotionally charged scenes. Not giving anything away but this book is a big one.",
    },
    {
      title: "Fool's Errand",
      id: null,
      author: "Robin Hobb",
      link: "https://openlibrary.org/works/OL2707194W",
      image: "https://covers.openlibrary.org/b/id/373090-L.jpg",
      date_finished: "11/09/2021",
      notes:
        "LOVE returning to Fitz and the Fool. I'm so deep in the Robin Hobb world now....",
    },
    {
      title: "Ship of Destiny",
      id: null,
      author: "Robin Hobb",
      link: "https://openlibrary.org/works/OL20084374W",
      image: "https://covers.openlibrary.org/b/id/8753566-L.jpg",
      date_finished: "10/07/2021",
      notes:
        "Wow! Another trilogy down. I love the callbacks and hints for the original series. Onwards!",
    },
    {
      title: "The Mad Ship",
      id: null,
      author: "Robin Hobb",
      link: "https://openlibrary.org/works/OL2707227W",
      image: "https://covers.openlibrary.org/b/id/1180-L.jpg",
      date_finished: "08/09/2021",
      notes:
        "Now things are getting interesting! Love the origin story for the live ships - what an incredible dark backdrop to the whole saga.",
    },
    {
      title: "Ship of Magic",
      id: null,
      author: "Robin Hobb",
      link: "https://openlibrary.org/works/OL2707209W",
      image: "https://covers.openlibrary.org/b/olid/OL32335046M-L.jpg",
      date_finished: "06/26/2021",
      notes:
        'Onwards into the Robin Hobb cinematic universe! This series starts somewhat slowly but I love the all new (or is it!) version of live ships and their unique "magic".',
    },
    {
      title: "Assassin's Quest",
      id: null,
      author: "Robin Hobb",
      link: "https://openlibrary.org/works/OL2707231W",
      image: "https://covers.openlibrary.org/b/id/4873-L.jpg",
      date_finished: "04/19/2021",
      notes:
        "I love this trilogy so much. This is my third or fourth full re-read since I was a teenager and it remains magical each time. Such world building, characters and adventure. Onwards to the remaining.... *checks notes*.... 14 books!",
    },
    {
      title: "Royal Assassin",
      id: null,
      author: "Robin Hobb",
      link: "https://openlibrary.org/works/OL2707223W",
      image: "http://covers.openlibrary.org/b/id/4871-L.jpg",
      date_finished: "03/24/2021",
      notes:
        "That last line!! Such depth of characters. I really love this series. World building, unique ideas around magic, politics, love, wolves, assassins! Love it. Just as good as I remember.",
    },
    {
      title: "Assassin's Apprentice",
      id: null,
      author: "Robin Hobb",
      link: "https://openlibrary.org/works/OL2707210W",
      image: "http://covers.openlibrary.org/b/id/4869-L.jpg",
      date_finished: "03/08/2021",
      notes:
        "Diving back into an epic read of the 17 Robin Hobb books. The farseer trilogy is my all time fave and I've read these books several times before but I'm starting here to read them all in order.",
    },
    {
      title: "The mushroom at the end of the world",
      id: null,
      author: "Anna Lowenhaupt Tsing",
      link: "https://openlibrary.org/works/OL20015789W",
      image: "http://covers.openlibrary.org/b/id/8881648-L.jpg",
      date_finished: "In progress...",
      notes:
        "A really magical exploration of global capitalism and... mushrooms?!",
    },
    {
      title: "A Memory Called Empire",
      id: null,
      author: "Arkady Martine",
      link: "https://www.amazon.com/Memory-Called-Empire-Arkady-Martine-ebook/dp/B07C7BCB88",
      image: null,
      date_finished: "02/10/2021",
      notes:
        "What richness! The first time I've read sci-fi that felt a bit like Iain M Banks. Deep, complex, rich worlds with strong characters. An absolute treat - spanning langauge, poetry, politics, identity, memory and more. I cannot wait for the followup. After reading so much poorly written sci fi recently (Dune, The Ministry of the Future, Exhalation..) this was a refreshing breath of fresh air.",
    },
    {
      title: "Laughter in the Dark",
      id: null,
      author: "Vladamir Nabakov",
      link: "https://www.amazon.com/Laughter-Vintage-International-Vladimir-Nabokov-ebook-dp-B004KABE1K/dp/B004KABE1K/",
      image: null,
      date_finished: "01/17/2021",
      notes:
        "An airbnb read. Just lovely poetic writing - a breath of fresh air after a bunch of badly-written scifi.",
    },
    {
      title: "The Ministry for the Future",
      id: null,
      author: "Kim Stanley Robinson",
      link: "https://www.amazon.com/Ministry-Future-Kim-Stanley-Robinson-ebook/dp/B084FY1NXB",
      image: null,
      date_finished: "01/10/2021",
      notes:
        "Abandoned during the free preview. Everyone is raving about this book but honestly the writing felt incredibly flat. I'm tired of sci-fi stories having bad writing :(",
    },
    {
      title: "Exhalation",
      id: null,
      author: "Ted Chiang",
      link: "https://www.amazon.com/Exhalation-Stories-Ted-Chiang-ebook/dp/B07GD46PQZ",
      image: null,
      date_finished: "01/04/2021",
      notes:
        "Abandoned 2/3 of the way through :( - while I quite enjoyed some of the provocations in the stories ultimately the writing didn't captivate me. Left me feeling bored so I gave it up.",
    },
    {
      title: "Multidimensional Executive Coaching",
      id: null,
      author: "Ruth L. Orenstein",
      link: "https://www.amazon.com/Multidimensional-Executive-Coaching-Ruth-Orenstein/dp/0826125662",
      image: null,
      date_finished: "01/06/2021",
      notes:
        "Some great thought provoking ideas about coaching, consulting and being embedded inside organizations as an outsider. I especially love the concept in the book of overbounded or underbounded organizations.",
    },
    {
      title: "The Player of Games",
      id: null,
      author: "Iain M. Banks",
      link: "https://www.amazon.com/Player-Games-Culture-Iain-Banks/dp/0316005401",
      image: null,
      date_finished: "12/01/2020",
      notes:
        "I have fond memories of the first time reading this and felt like it left a big impression on me. Re-reading this book I still loved it but the shine has come off a little - I think other culture books are perhaps better. Still, the world building (universe building!) that Iain M Banks does is like no other.",
    },
    {
      title: "Dune",
      id: null,
      author: "Frank Herbert",
      link: "https://www.amazon.com/Dune-Frank-Herbert/dp/0441172717",
      image: null,
      date_finished: "11/31/2020",
      notes:
        "Started reading this while traveling through Utah and Arizona to get a feel for desert living. I enjoyed the book but definitely didn't feel like it lived up to the hype. Inventive but the characters felt a little stale.",
    },
    {
      title: "The Uncertainty Mindset",
      id: null,
      author: "Vaughn Tan",
      link: "https://www.amazon.com/Uncertainty-Mindset-Innovation-Insights-Frontiers-ebook/dp/B0825CZQR8",
      image: null,
      date_finished: "08/31/2020",
      notes:
        "A wonderful rich book exploring the world of high end culinary R&D to find lessons applicable for other types of organizations. A really fun read - great stories about high end cooking as well as sharp insights about food.",
    },
    {
      title: "Tomorrow Lies in Ambush",
      id: null,
      author: "Bob Shaw",
      link: "https://www.amazon.com/Tomorrow-Lies-Ambush-Bob-Shaw-ebook/dp/B00GVFQJDU",
      image: null,
      date_finished: "08/22/20",
      notes:
        "Classic sci-fi short stories recommended by Matt Webb. Some really lovely ideas and great writing! All the stories are very character-driven and often reflect more strongly on the individual characters motives and identities over the larger sci-fi conceits! Lovely. Thanks Matt!",
    },
    {
      title: "East of Eden",
      id: null,
      author: "John Steinbeck",
      link: "https://www.amazon.com/East-Eden-Penguin-Orange-Collection/dp/0143129481",
      image: null,
      date_finished: "07/29/20",
      notes:
        "What a magnificent - truly epic work. I'm a big Steinbeck fan already and I think I even read this one previously but loved immersing myself in this wonderful story. The biblical theme is almost too strong at times but is richly counterbalanced by Steinbeck's incredibly loving character portraits. Amazing.",
    },
    {
      title: "Veil",
      id: null,
      author: "Eliot Peper",
      link: "https://www.amazon.com/Veil-Eliot-Peper-ebook/dp/B085PSTJNC",
      image: null,
      date_finished: "06/08/20",
      notes:
        "A really great fast-paced read. Eliot has a great knack for constructing plausible near-futures and then situating fully realized human stories within those futures. Thought provoking and enjoyable.",
    },
    {
      title: "The Memory Police",
      id: null,
      author: "Yoko Ogawa",
      link: "https://www.amazon.com/Memory-Police-Novel-Yoko-Ogawa/dp/1101870605",
      image: null,
      date_finished: "05/17/20",
      notes:
        "While the writing style at times is captivating - like a penny falling into a deep well - often the writing was unremarkable and the plot unfolded fairly slowly. All in the book was, ironically, forgettable. That said - the ending, where bodies start to fade away really resonated during this period of lockdown and isolation - it captures the essence of my embodied self fading away into an infinite series of zoom screens.",
    },
    {
      title: "An Introduction to Haiku",
      id: null,
      author: "Harold Gould Henderson",
      link: "https://www.amazon.com/Introduction-Haiku-Anthology-Poems-Poets/dp/0385093764",
      image: null,
      date_finished: "03/12/20",
      notes:
        "Brian suggested I get into Haiku and pick up this book and I'm glad I did! Beautiful, easy to read intro to Haiku. The author gives great context for what Haiku is, the main poets and how to read Haiku poetry. Recommended!",
    },
    {
      title: "Tears of the Trufflepig",
      id: null,
      author: "Fernando A. Flores",
      link: "https://www.amazon.com/Tears-Trufflepig-Novel-Fernando-Flores/dp/0374538336",
      image: null,
      date_finished: "01/09/20",
      notes:
        "A wonderful book. Like an absurdist Cormac McCarthy x Kurt Vonnegut mashup. Lyrical descriptions, wonderful characters and a wild imagination. Highly recommended.",
    },
    {
      title: "A Winter’s Promise",
      id: null,
      author: "Christelle Dabos",
      link: "https://www.amazon.com/Winters-Promise-Mirror-Visitor-Quartet-ebook/dp/B07B8WK17G",
      image: null,
      date_finished: "12/30/19",
      notes:
        "There are moments when the lavish fantasy world and the magic contained in it sucked me in - but ultimately the character development and plot just didn't hang together to keep me reading. Good escapist reading but there are better fantasy worlds to lose yourself in than this one.",
    },
    {
      title: "Less",
      id: null,
      author: "Andrew Sean Greer",
      link: "https://www.amazon.com/Less-Winner-Pulitzer-Prize-Novel/dp/0316316121",
      image: null,
      date_finished: "12/20/19",
      notes:
        "A truly delightful novel - with hints of PG Wodehouse. This book really sucked me in with magical lush writing and a great wry tone. Definitely recommended.",
    },
    {
      title: "Infinite Detail",
      id: null,
      author: "Tim Maughan",
      link: "https://www.amazon.com/Infinite-Detail-Novel-Tim-Maughan/dp/0374175411",
      image: null,
      date_finished: "12/1/19",
      notes:
        "A fun quick read. There's some good language and some nice world-setting but I wish some of the characters had been more fully developed and I wish the central idea had been stronger. The ending kind of fizzles out and there could have been room for so much more here.. Good for a little lightweight-dytopia though.",
    },
    {
      title: "Dead Astronauts",
      id: null,
      author: "Jeff VanderMeer",
      link: "https://www.amazon.com/Dead-Astronauts-Novel-Jeff-VanderMeer/dp/0374276803",
      image: null,
      date_finished: "11/15/19",
      notes:
        "I think perhaps I made a mistake. I didn't realize until after I'd read it that it was part of the Borne series. Maybe that would have been useful because this book made zero sense. Like a William Burroughs book it was somehow interesting and riveting at times despite literally making no sense. Did I mention it makes no sense? The first section with the three astronauts was the most compelling..... Maybe I should read the other Borne books and it'll make more sense? But I doubt it.",
    },
    {
      title: "The Nix",
      id: null,
      author: "Nathan Hill",
      link: "https://www.amazon.com/Nix-Nathan-Hill/dp/1101970340",
      image: null,
      date_finished: "10/28/19",
      notes:
        "Abandoned 500 pages in. I tried to keep going but just couldn't. A Very Bad Book. Highly un-recommended. <a href='https://www.currentaffairs.org/2017/09/how-novelty-ruined-the-novel'>This is a good takedown</a>. So many characters are badly written sexually frustrated males and it's just all round a bad book. Couple sentences worth savoring but.. ugh.",
    },
    {
      title: "A Gentleman in Moscow",
      id: null,
      author: "Amor Towles",
      link: "https://www.amazon.com/Gentleman-Moscow-Novel-Amor-Towles-ebook/dp/B01COJUEZ0",
      image: null,
      date_finished: "10/03/19",
      notes:
        "Amor is a wonderful writer with so many lyrical touches, flourishes and turns of phrase. The feel of the book of politics, culture and acting in the proper way is great. Without posting spoilers there's a few themes in the book that make me feel like the book was written by a man - that some of the more emotionally rich moments are skipped over... But overall highly recommended as a fun, engaging and lyrical book.",
    },
    {
      title: "Conversation -  How Talk Can Change Our Lives",
      id: null,
      author: "Theodore Zeldin",
      link: "https://www.amazon.com/Conversation-How-Talk-Change-Lives/dp/1587680009",
      image: null,
      date_finished: "09/04/19",
      notes:
        "A delightful little book that was a gift from my friend Brian. A little meditation on conversations, how important they are and some of the explicit and implicit ways they can go wrong. At first I thought this was going to offer solutions and ideas but mostly it just offers poetry and provocations. I think it'll stick with me for a long time though - and the art from the author scattered through the book makes a lovely little object. Thanks Brian!",
    },
    {
      title: "Recursion",
      id: null,
      author: "Blake Crouch",
      link: "https://www.amazon.com/Recursion-Novel-Blake-Crouch-ebook/dp/B07HDSHP7N",
      image: null,
      date_finished: "9/3/19",
      notes:
        "A fast-paced, high-action read. A fun time-travel romp with some great characters. Ultimately I thought the premise was smart and the writing handled it well but the whole novel felt a little shallow. There were some really meaty ideas about identity and family wrapped up here that kind of got sidelined for the sake of the technology-driven plot and I thought that was a shame. Fun read though.",
    },
    {
      title: "Way Station",
      id: null,
      author: "Clifford D. Simak",
      link: "https://www.amazon.com/Way-Station-Clifford-D-Simak-ebook/dp/B00YO78RRS",
      image: null,
      date_finished: "8/25/19",
      notes:
        "Lovely vintage sci-fi recommended by Chris Butler. There's aliens, teleporting and... magic? But nothing flashy happens - it's an incredibly human story. This is a really thoughtful and fresh story. Highly recommended.",
    },
    {
      title: "Idiots First",
      id: null,
      author: "Bernard Malamud",
      link: "https://www.amazon.com/Idiots-First-Bernard-Malamud/dp/0374174202",
      image: null,
      date_finished: "8/15/19",
      notes:
        "The opening line of Idiot's First is a masterpiece. 'The thin ticking of the tin clock stopped'. Loved a few of the other stories but some were definitely forgettable. I'd recommend dipping your toe in and at the very least reading the title story Idiots First.",
    },
    {
      title: "The Scar",
      id: null,
      author: "China Miéville",
      link: "https://www.amazon.com/Scar-China-Mi%C3%A9ville/dp/0345460014",
      image: null,
      date_finished: "08/06/19",
      notes:
        "Ah what delicious sludgy, dark, human texture. China Miéville's descriptive language and world building is unparalleled. This is book two (after reading Perdido Street Station last year). These books are long and luxurious so perhaps not the best entry point if you're new to his writing but if you like this kind of thing there's nothing better. My only quarrel with this book was the ending... It felt somewhat unsatisfying, or rather unfinished - where a typical book resolves this felt like the open sea was still in front of you? But it's a very minor comment as mostly the strength of this book was that every page told a lifetime of texture. Definitely going to read book three of this trilogy after a break.",
    },
    {
      title: "Last Night",
      id: null,
      author: "James Salter",
      link: "https://www.amazon.com/Last-Night-Stories-James-Salter/dp/1400078415",
      image: null,
      date_finished: "07/14/19",
      notes:
        "After reading All That Is I had to wash my palette and get back to some of his delicious writing. This was much more in line with Light Years and contained some lovely moments. None of the short stories will linger with me too long but it's a short read and I'd recommend it.",
    },
    {
      title: "Emissaries Guide to Worlding",
      id: null,
      author: "Ian Cheng",
      link: "https://serpentine-galleries.myshopify.com/products/coming-soon-ian-cheng-emissaries-guide-to-worlding",
      image:
        "https://cdn.shopify.com/s/files/1/2113/7453/products/Cover_-_FINAL_002_1024x.jpg?v=1524225901",
      date_finished: "7/8/19",
      notes:
        "The core idea of the masks - the cartoonist, the director, the hacker and the emissary - is wonderful and a new lens to look at the world through, so overall I'd recommend the book. But there was also an incredible over-indulgence from the author to live inside his own worlds (which feels very finite game like, not infinite game like). And the lack of people anywhere in his worlds is also problematic. That said - the book as an object is beautiful and wonderfully designed.",
    },
    {
      title: "The Prisoner",
      id: null,
      author: "Thomas M. Disch",
      link: "https://www.amazon.com/Prisoner-Novel-Thomas-M-Disch/dp/014311722X",
      image: null,
      date_finished: "7/7/19",
      notes:
        "I really enjoyed this - a delightfully British story of being trapped, like a combination of Kafka and PG Wodehouse. The plot derailed itself in a few places and there was a whole Shakespere reference that kind of went over my head but the writing was wonderful. Recommended.",
    },
    {
      title: "Oval",
      id: null,
      author: "Elvia Wilk",
      link: "https://www.amazon.com/Oval-Novel-Elvia-Wilk/dp/1593764057",
      image: null,
      date_finished: "6/24/19",
      notes:
        "I really loved this. Distinctive, fresh writing that captures so much of the present weirdness in society while also somehow feeling timeless. The middle third dragged slightly for me but the descent into ecological weird towards the end is just wonderful and reminds me of the Annihiliation series by Jeff Vandermeer. Oh and the whole book centers on this premise of artists becoming 'consultants' which is magnificent. Recommended. Verdict- 👍🌲",
    },
    {
      title: "All That Is",
      id: null,
      author: "James Salter",
      link: "https://www.amazon.com/dp/B007WKFMGS",
      image: null,
      date_finished: "06/09/2019",
      notes:
        "A wildly disappointing read. Not that it was so bad but that having recently read Light Years I was expecting so much more. There were moments of brilliance in the writing and some of the scenes will linger with me overall the book didn't really make me feel anything. Definitely read Light Years instead.",
    },
    {
      title: "Borderless",
      id: null,
      author: "Eliot Peper",
      link: "https://www.amazon.com/dp/B07BM7F9SF",
      image: null,
      date_finished: "5/20/2019",
      notes:
        "Book two of the Analog series. Overall I connected less with the main character in this one but connected more with the overall premise which is very thought provoking. It feels today that we are actively living through the end (or at least a phase transition) of sovereignty. Compelling and a quick read.",
    },
    {
      title: "Bandwidth",
      id: null,
      author: "Eliot Peper",
      link: "https://www.amazon.com/dp/B075CLV95J/",
      image: null,
      date_finished: "5/13/2019",
      notes:
        "I completely devoured this book. The characters and pace keeps it flowing but the ideas will stick with me - it's grounded in a very near future and the concepts are well thought through. Excited to keep diving into Borderless next.",
    },
    {
      title: "The Gone Away World",
      id: null,
      author: "Nick Harkaway",
      link: "https://www.amazon.com/dp/B001EL6R9W/",
      image: null,
      date_finished: "5/07/2019",
      notes:
        "A majestic feat of imagination - whirlwind story of a gong-fu epic in a world gone mad. Definitely feels like it needed better editing or structuring and was about 100 pages too long but the strength of imagination and grasp of poetry really captivated me. Picked this up off the street on the way home from kung-fu training (approriate!). I'll be reading more of his work.",
    },
    {
      title: "Light Years",
      id: null,
      author: "James Salter",
      link: "https://www.amazon.com/dp/B004G8PIOA/",
      image: null,
      date_finished: "4/12/2019",
      notes:
        "This book completely destroyed me. The writing is dense and poetic like almost no one I've ever read. Did you know glass is a liquid and slowly 'flows'? This book operates on a time horizon and 'flows' through lives in a deeply transformative way. Found via <a href='https://www.gyford.com/phil/writing/2019/02/15/light-years-james-salter/'>Phil Gyford</a>",
    },
    {
      title: "Delirious New York",
      id: null,
      author: "Rem Koolaas",
      link: "https://www.amazon.com/dp/B00JYVYUUW/",
      image: null,
      date_finished: "3/18/2019",
      notes:
        "It's architecture writing but lyrical, magical and opinionated. A tour de force through New York's history with tons of interesting characters, ideas, explorations and more. Ideas include congestion as an organizing principle of the city, and every block being an archipelago. Wonderful and highly recommended.",
    },
    {
      title: "Tomorrow In The Battle Think On Me",
      id: null,
      author: "Javier Marias",
      link: "https://www.amazon.com/dp/0307950751",
      image: null,
      date_finished: "2/17/2019",
      notes:
        "Abandoned. I think somewhere in this book is buried a wonderful treasure. The looping self-aware story is fundamentally interesting and new but the language that wraps around it chokes it to death. Abandoned about half way through.",
    },
    {
      title: "Summerland",
      id: null,
      author: "Hannu Rajaniemi",
      link: "https://www.amazon.com/dp/B0756K1Q8D/",
      image: null,
      date_finished: "1/21/2019",
      notes:
        "A wonderful original work - full of interesting characters. Ghosts! Spys! Old London! Really enjoyed this and tore through it super fast.",
    },
    {
      title: "Finite & Infinite Games",
      id: null,
      author: "James Carse",
      link: "https://www.amazon.com/dp/B004W3FM4A/",
      image: null,
      date_finished: "1/10/2019",
      notes:
        "Great unique book, wonderful analogy to finite and infinite writing....",
    },
    {
      title: "The Power",
      id: null,
      author: "Naomi Alderman",
      link: "https://www.amazon.com/dp/B01N0Z1EY0",
      image: null,
      date_finished: "12/30/2018",
      notes:
        "Provocative premise but I felt it squandered an opportunity at a deeper political and/or emotional exploration of what would happen if teenage girls gained a new incredible power. Somehow it resorted to.... fucking and fighting?",
    },
    {
      title: "Perdido Street Station",
      id: null,
      author: "China Mieville",
      link: "https://www.amazon.com/dp/B000FBFO8C/",
      image: null,
      date_finished: "12/01/2018",
      notes:
        "A staggering, creative, filthy, engrossing tour through a world with such magical and rich depths. No one can build worlds like China.",
    },
    {
      title: "Satin Island",
      id: null,
      author: "Tom McCarthy",
      link: "https://www.amazon.com/dp/B00MZWA678/",
      image: null,
      date_finished: "03/21/2018",
      notes:
        "William Gibson meets Kafka. A corporate strategy consultant / ethnographer ponders the meaning of life and searches for the Great Report.",
    },
    {
      title: "The Dark Dark",
      id: null,
      author: "Samantha Hunt",
      link: "https://www.amazon.com/dp/B01N0TDSVM/",
      image: null,
      date_finished: "02/15/2018",
      notes:
        "Tender, oozing, lyrical, dark, DARK stories of being human. Did I mention they are dark? What writing though! What imagination!",
    },
    {
      title: "Pattern Recognition",
      id: null,
      author: "William Gibson",
      link: "https://openlibrary.org/works/OL15014715W",
      image: "https://covers.openlibrary.org/b/id/8373619-L.jpg",
      date_finished: null,
      notes:
        "The consultant allergic to brands. Marketing agencies that wield global influence over culture.",
    },
    {
      title: "Satin Island",
      id: null,
      author: "Tom McCarthy",
      link: "https://openlibrary.org/works/OL20936732W",
      image: "https://covers.openlibrary.org/b/id/10304991-L.jpg",
      date_finished: null,
      notes:
        "Then the Great Report would not be something that was either to-come or completed, in-the-past: it would be all now. Present-tense anthropology; anthropology as way-of-life. That was it: Present-Tense Anthropology™; an anthropology that bathed in presence, and in nowness—bathed in it as in a deep, bubbling and nymph-saturated well. And yet … And yet … And yet. The Great Report still had to be composed. That was the deal: with Peyman, with the age. Even if it wasn’t composed in a way that conformed to any previous anthropological model, it nonetheless had, somehow, to find a form. It was all a question of form. What fluid, morphing hybrid could I come up with to be equal to that task? What medium, or media, would it inhabit? Would it tell a story? If so, how, and about what, or whom? If not, how would it all congeal, around what cohere? How could I elevate the photos I had pinned about my walls, the sketches, doodles, musings, all the stuff cached on my hard-drive, the audio-files and diaries not my own—how could I elevate all these from secondary sources to be quantified, sucked dry, then cast away, to primary players in this story, or non-story? Above and beyond this, how could life as lived become transmogrified from field-work into work, the Work?",
    },
    {
      title: "The Sleep Consultant",
      id: null,
      author: "Robin Sloan",
      link: "https://desert.glass/archive/sleep-consultant/#text",
      image: "https://tomcritchlow.com/images/sleepconsultant.jpg",
      date_finished: null,
      notes:
        "A one-off print run zine fiction from Robin Sloan. The corporate sleep consultant asleep for 5 years. <a href='https://desert.glass/archive/sleep-consultant/#text'>Now online!</a>",
    },
    {
      title: "The Art of Gig",
      id: null,
      author: "Venkatesh Rao",
      link: null,
      image:
        "https://206hwf3fj4w52u3br03fi242-wpengine.netdna-ssl.com/wp-content/uploads/2015/03/16panel.png",
      date_finished: null,
      notes:
        "A wonderful madcap dash through an engagement as an indie consultant deploying <em>Structured Conversation Operations</em> and encountering McKinsey (who come in like a SWAT team). Love it. <a href='https://www.ribbonfarm.com/2015/03/19/the-art-of-gig/'>Read it here</a>.",
    },
    {
      title: "A Mathematician's Apology",
      id: null,
      author: "G. H. Hardy",
      link: "https://openlibrary.org/works/OL11373174W",
      image: "https://covers.openlibrary.org/b/olid/OL21520619M-L.jpg",
      date_finished: null,
      notes:
        "A haunting look at a retiring mathematician who knows he is past his prime. For those who have never experienced advanced maths this is a wonderful short book that hints at the poetry and beauty involved.",
    },
    {
      title: "Fermat's Last Theorum",
      id: null,
      author: "Simon Singh",
      link: "https://openlibrary.org/works/OL31155W",
      image: "https://covers.openlibrary.org/b/olid/OL22471139M-L.jpg",
      date_finished: null,
      notes:
        "This is what rockstar maths looks like - being lonely and scared for 10 years followed by depression and then immortality. The story of how one of the most famous problems ever was solved by a single genius. Fascinating reading. Made me cry.",
    },
    {
      title: "Gödel, Escher, Bach",
      id: null,
      author: "Douglas R. Hofstadter",
      link: "https://openlibrary.org/works/OL716850W",
      image: "https://covers.openlibrary.org/b/olid/OL4097086M-L.jpg",
      date_finished: null,
      notes:
        "This book is sort of about Godel's incompleteness theorem. It also changed my life. I'm not kidding! Technically challenging for most non-maths people I think but still accessible with work. Did I mention it changed my life?",
    },
    {
      title: "Logicomix",
      id: null,
      author: "Apostolos Doxiadis",
      link: "https://openlibrary.org/works/OL14996971W",
      image: "https://covers.openlibrary.org/b/olid/OL23999375M-L.jpg",
      date_finished: null,
      notes:
        "If there was ever a maths superhero, Bertrand Russell might be right up there. This comic is funny, moving, emotional and accessible. Everyone should read this, regardless of how much you like maths.",
    },
    {
      title: "Uncle Petros and Goldbach's Conjecture",
      id: null,
      author: "Apostolos Doxiadis",
      link: "https://openlibrary.org/works/OL8386744W",
      image: "https://covers.openlibrary.org/b/olid/OL7857601M-L.jpg",
      date_finished: null,
      notes:
        "A novel by the same guy behind Logicomix. This is a bit more mathsy but also a cracking story. More about sense of purpose, redemption and the quest for knowledge than it is about maths.",
    },
    {
      title: "Flatland",
      id: null,
      author: "Edwin A Abbott",
      link: "https://openlibrary.org/works/OL118420W",
      image: "https://covers.openlibrary.org/b/olid/OL22587917M-L.jpg",
      date_finished: null,
      notes:
        "A delightful little story about a two dimensional object wrestling with the concept of three dimensions. Poetic.",
    },
  ],
};

export default libData;
