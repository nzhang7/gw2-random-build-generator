var classList = [
    "Guardian",
    "Warrior",
    "Engineer",
    "Ranger",
    "Thief",
    "Elementalist",
    "Mesmer",
    "Necromancer",
    "Revenant"
];

// [classNum][traitlineNum]
var traitlines = [
    ["Zeal","Radiance","Valor","Honor","Virtues","Dragonhunter","Firebrand"],
    ["Strength","Arms","Defense","Tactics","Discipline","Berserker","Spellbreaker"],
    ["Explosives","Firearms","Inventions","Alchemy","Tools","Scrapper","Holosmith"],
    ["Marksmanship","Skirmishing","Wilderness Survival","Nature Magic","Beastmastery","Druid","Soulbeast"],
    ["Deadly Arts","Critical Strikes","Shadow Arts","Acrobatics","Trickery","Daredevil","Deadeye"],
    ["Fire","Air","Earth","Water","Arcane","Tempest","Weaver"],
    ["Domination","Dueling","Chaos","Inspiration","Illusions","Chronomancer","Mirage"],
    ["Spite","Curses","Death Magic","Blood Magic","Soul Reaping","Reaper","Scourge"],
    ["Devastation","Corruption","Retribution","Salvation","Invocation","Herald","Renegade"]
];

// [classNum][traitlineNum][traitNum]
var traits = [
    [["Wrathful Spirit","Fiery Wrath","Zealous Scepter",
     "Binding Jeopardy","Zealous Blade","Kindled Zeal",
     "Eternal Armory","Shattered Aegis","Symbolic Avenger"],
    ["Inner Fire","Right-Hand Strength","Healer's Retribution",
     "Wrath of Justice","Radiant Fire","Retribution",
     "Amplified Wrath","Perfect Inscriptions","Righteous Instincts"],
    ["Strength of the Fallen","Smiter's Boon","Focus Mastery",
     "Stalwart Defender","Strength in Numbers","Communal Defenses",
     "Altruistic Healing","Monk's Focus","Retributive Armor"],
    ["Invigorated Bulwark","Protective Reviver","Protector's Impact",
     "Honorable Staff","Pure of Heart","Empowering Might",
     "Pure of Voice","Writ of Persistence","Force of Will"],
    ["Unscathed Contender","Retaliatory Subconscious","Master of Consecrations",
     "Virtuous Solace","Absolute Resolution","Glacial Heart",
     "Permeating Wrath","Battle Presence","Indomitable Courage"],
    ["Piercing Light","Dulled Senses","Soaring Devastation",
     "Hunter's Determination","Zealot's Aggression","Bulwark",
     "Hunter's Fortification","Heavy Light","Big Game Hunter"],
    ["Unrelenting Criticism","Liberator's Vow","Archivist of Whispers",
    "Weighty Terms","Stalwart Speed","Legendary Lore",
    "Stoic Demeanor","Quickfire","Loremaster"]],

    [["Brave Stride","Restorative Strength","Peak Performance",
     "Body Blow","Forceful Greatsword","Great Fortitude",
     "Berserker's Power","Might Makes Right","Merciless Hammer"],
    ["Wounding Precision","Signet Mastery","Opportunist",
     "Unsuspecting Foe","Rending Strikes","Blademaster",
     "Burst Precision","Furious","Dual Wielding"],
    ["Shield Master","Dogged March","Cull the Weak",
     "Defy Pain","Armored Attack","Sundering Mace",
     "Last Stand","Cleansing Ire","Rousing Resilience"],
    ["Leg Specialist","Quick Breathing","Empowered",
     "Shrug It Off","Burning Arrows","Empower Allies",
     "Powerful Synergy","Vigorous Shouts","Phalanx Strength"],
    ["Crack Shot","Warrior's Sprint","Vengeful Return",
     "Inspiring Battle Standard","Destruction of the Empowered","Brawler's Recovery",
     "Axe Mastery","Heightened Focus","Burst Mastery"],
    ["Smash Brawler","Last Blaze","Savage Instinct",
     "Blood Reaction","Heat the Soul","Dead or Alive",
     "Bloody Roar","King of Fires","Eternal Champion"],
    ["Pure Strike","Guard Counter","No Escape",
    "Loss Aversion","Slow Counter","Sun and Moon Style",
    "Enchantment Collapse","Revenge Counter","Magebane Tether"]],

    [["Grenadier","Blasting Zone","Glass Cannon",
     "Aim-Assisted Rocket","Big Boomer","Short Fuse",
     "Orbital Command","Shrapnel","Minesweeper"],
    ["Chemical Rounds","Heavy Armor Exploit","High Caliber",
     "Pinpoint Distribution","Skilled Marksman","No Scope",
     "Juggernaut","Modified Ammunition","Incendiary Powder"],
    ["Over Shield","Automated Medical Response","Autodefense Bomb Dispenser",
     "Experimental Turrets","Soothing Detonation","Mecha Legs",
     "Advanced Turrets","Bunker Down","Medical Dispersion Field"],
    ["Invigorating Speed","Protection Injection","Health Insurance",
     "Inversion Enzyme","Self-Regulating Defenses","Backpack Regenerator",
     "HGH","Stimulant Supplier","Iron Blooded"],
    ["Static Discharge","Reactive Lenses","Power Wrench",
     "Streamlined Kits","Lock On","Takedown Round",
     "Kinetic Battery","Adrenal Implant","Gadgeteer"],
    ["Shocking Speed","Perfectly Weighted","Recovery Matrix",
     "Rapid Regeneration","Expert Examination","Mass Momentum",
     "Adaptive Armor","Final Salvo","Applied Force"],
    ["Light Density Amplifier","Prismatic Converter","Solar Focusing Lens",
    "Crystal Configuration: Storm","Crystal Configuration: Eclipse","Crystal Configuration: Zephyr",
    "Thermal Release Valve","Enhanced Capacity Storage Unit","Photonic Blasting Module"]],

    [["Stoneform","Hunter's Gaze","Clarion Bond",
     "Brutish Seals","Steady Focus","Moment of Clarity",
     "Predator's Onslaught","Remorseless","Lead the Wind"],
    ["Sharpened Edges","Primal Reflexes","Trapper's Expertise",
     "Spotter","Strider's Defense","Hidden Barbs",
     "Quick Draw","Light on your Feet","Vicious Quarry"],
    ["Soften the Fall","Oakheart Salve","Taste for Danger",
     "Ambidexterity","Refined Toxins","Shared Anguish",
     "Empathic Bond","Wilderness Knowledge","Poison Master"],
    ["Bountiful Hunter","Instinctive Reaction","Allies' Aid",
     "Evasive Purity","Spirited Arrival","Windborne Notes",
     "Nature's Vengeance","Protective Ward","Invigorating Bond"],
    ["Go for the Eyes","Potent Ally","Resounding Timbre",
     "Wilting Strike","Two-Handed Training","Natural Healing",
     "Beastly Warden","Zephyr's Speed","Honed Axes"],
    ["Druidic Clarity","Cultivated Synergy","Primal Echoes",
     "Celestial Shadow","Verdant Etching","Natural Stride",
     "Grace of the Land","Lingering Light","Ancient Seeds"],
    ["Fresh Reinforcement","Live Fast","Unstoppable Union",
    "Second Skin","Essence of Speed","Predator's Cunning",
    "Eternal Bond","Leader of the Pack","Oppressive Superiority"]],

    [["Dagger Training","Mug","Trappers Respite",
     "Deadly Trapper","Panic Strike","Revealed Training",
     "Potent Poison","Improvisation","Executioner"],
    ["Assassin's Fury","Signets of Power","Twin Fangs",
     "Sundering Strikes","Practiced Tolerance","Ankle Shots",
     "No Quarter","Hidden Killer","Invigorating Precision"],
    ["Last Refuge","Concealed Defeat","Shadow's Embrace",
     "Shadow Protector","Hidden Thief","Leeching Venoms",
     "Cloaked in Shadow","Shadow's Rejuvenation","Rending Shade"],
    ["Instant Reflexes","Vigorous Recovery","Pain Response",
     "Guarded Initiation","Swindler's Equilibrium","Hard to Catch",
     "Assassin's Reward","Upper Hand","Don't Stop"],
    ["Uncatchable","Burst of Agility","Thrill of the Crime",
     "Bountiful Theft","Trickster","Pressure Striking",
     "Quick Pockets","Sleight of Hand","Bewildering Ambush"],
    ["Havoc Mastery","Weakening Strikes","Brawler's Tenacity",
     "Staff Master","Escapist's Absolution","Impacting Disruption",
     "Lotus Training","Unhindered Combatant","Bounding Dodger"],
    ["Revealed Malice","Iron Sight","One in the Chamber",
    "Silent Scope","Unforgiving","Peripheral Vision",
    "Maleficent Seven","Be Quick or Be Killed","Fire for Effect"]],

    [["Burning Precision","Conjurer","Burning Fire",
     "Pyromancer's Training","One with Fire","Power Overwhelming",
     "Persisting Flames","Pyromancer's Puissance","Blinding Ashes"],
    ["Zephyr's Boon","One with Air","Ferocious Winds",
     "Inscription","Aeromancer's Training","Tempest Defense",
     "Bolt to the Heart","Fresh Air","Lightning Rod"],
    ["Earth's Embrace","Serrated Stones","Elemental Shielding",
     "Strength of Stone","Rock Solid","Geomancer's Training",
     "Diamond Skin","Written in Stone","Stone Heart"],
    ["Soothing Ice","Piercing Shards","Stop, Drop, and Roll",
     "Soothing Disruption","Cleansing Wave","Aquamancer's Training",
     "Cleansing Water","Powerful Aura","Soothing Power"],
    ["Arcane Precision","Renewing Stamina","Arcane Abatement",
     "Arcane Resurrection","Elemental Contingency","Final Shielding",
     "Evasive Arcana","Elemental Surge","Bountiful Power"],
    ["Gale Song","Latent Stamina","Unstable Conduit",
     "Tempestuous Aria","Invigorating Torrents","Harmonious Conduit",
     "Imbued Melodies","Lucid Singularity","Elemental Bastion"],
    ["Superior Elements","Elemental Pursuit","Master's Fortitude",
    "Weaver's Prowess","Swift Revenge","Bolstered Elements",
    "Elements of Rage","Woven Stride","Invigorating Strikes"]],

    [["Confounding Suggestions","Empowered Illusions","Rending Shatter",
     "Shattered Concentration","Blurred Inscriptions","Furious Interruption",
     "Imagined Burden","Mental Anguish","Power Block"],
    ["Phantasmal Fury","Desperate Decoy","Duelist's Discipline",
     "Blinding Dissipation","Evasive Mirror","Fencer's Finesse",
     "Superiority Complex","Ineptitude","Deceptive Evasion"],
    ["Descent into Madness","Illusionary Defense","Master of Manipulation",
     "Mirror of Anguish","Chaotic Transference","Chaotic Dampening",
     "Chaotic Interruption","Prismatic Understanding","Bountiful Disillusionment"],
    ["Medic's Feedback","Restorative Mantras","Persisting Images",
     "Warden's Feedback","Restorative Illusions","Protected Phantasms",
     "Mental Defense","Illusionary Inspiration","Temporal Enchanter"],
    ["Compounding Power","Persistence of Memory","The Pledge",
     "Shattered Strength","Phantasmal Haste","Maim the Disillusioned",
     "Phantasmal Force","Master of Fragmentation","Malicious Sorcery"],
    ["Delayed Reactions","Time Catches Up","All's Well That Ends Well",
     "Danger Time","Illusionary Reversion","Improved Alacrity",
     "Lost Time","Seize the Moment","Chronophantasma"],
    ["Self-Deception","Renewing Oasis","Riddle of Sand",
    "Desert Distortion","Mirage Mantle","Mirrored Axes",
    "Infinite Horizon","Elusive Mind","Dune Cloak"]],

    [["Spiteful Talisman","Spiteful Renewal","Bitter Chill",
     "Chill of Death","Rending Shroud","Unholy Fervor",
     "Signets of Suffering","Close to Death","Spiteful Spirit"],
    ["Terrifying Descent","Plague Sending","Chilling Darkness",
     "Master of Corruption","Path of Corruption","Terror",
     "Weakening Shroud","Parasitic Contagion","Lingering Curse"],
    ["Flesh of the Master","Shrouded Removal","Putrid Defense",
     "Necromantic Corruption","Reaper's Protection","Deadly Strength",
     "Death Nova","Corrupter's Fervor","Unholy Sanctuary"],
    ["Ritual of Life","Quickening Thirst","Blood Bond",
     "Life from Death","Banshee's Wail","Vampiric Presence",
     "Vampiric Rituals","Unholy Martyr","Transfusion"],
    ["Unyielding Blast","Soul Marks","Speed of Shadows",
     "Spectral Mastery","Vital Persistence","Fear of Death",
     "Foot in the Grave","Death Perception","Dhuumfire"],
    ["Augury of Death","Chilling Nova","Relentless Pursuit",
     "Soul Eater","Chilling Victory","Decimate Defenses",
     "Blighter's Boon","Deathly Chill","Reaper's Onslaught"],
    ["Abrasive Gift","Fell Beacon","Nourishing Rot",
    "Desert Empowerment","Sadistic Searing","Unending Corruption",
    "Sand Savant","Demonic Lore","Feed from Corruption"]],

    [["Ferocious Strikes","Vicious Lacerations","Jade Echo",
     "Malicious Reprisal","Nefarious Momentum","Assassin's Presence",
     "Swift Termination","Dismantle Fortifications","Assassin's Annihilation"],
    ["Replenishing Despair","Demonic Defiance","Venom Enhancement",
     "Bolstered Anguish","Abyssal Chill","Spontaneous Destruction",
     "Diabolic Inferno","Maniacal Persistence","Pulsating Pestilence"],
    ["Planar Protection","Close Quarters","Improved Aggression",
     "Eye for an Eye","Retaliatory Evasion","Dwarven Battle Training",
     "Vicious Reprisal","Versed in Stone","Steadfast Rejuvenation"],
    ["Nourishing Roots","Blinding Truths","Tranquil Balance",
     "Tranquil Benediction","Eluding Nullification","Invoking Harmony",
     "Selfless Amplification","Natural Abundance","Momentary Pacification"],
    ["Cleansing Channel","Forceful Persistence","Fierce Infusion",
     "Spirit Boon","Rapid Flow","Incensed Response",
     "Song of the Mists","Charged Mists","Roiling Mists"],
    ["Swift Gale","Radiant Revival","Hardening Persistence",
     "Bolster Fortifications","Shared Empowerment","Harmonize Continuity",
     "Elder's Force","Soothing Bastion","Enhanced Bulwark"],
    ["Ashen Demeanor","Blood Fury","Wrought-Iron Will",
    "Sudden Reversal","Heartpiercer","All for One",
    "Vindication","Lasting Legacy","Righteous Rebel"]]
    ];

// [classNum][utilNum]
// Heals 0-4, Util 5-28, Elite 29-32
// Elite Specs: 4, 25-28, 32. [HoT, PoF]
var skills = [
    ["\"Receive the Light!\"","Litany of Wrath","Shelter","Signet of Resolve",["Purification","Mantra of Solace"],
    "Hallowed Ground","Purging Flames","Sanctuary","Wall of Reflection",
    "Contemplation of Purity","Judge's Intervention","Merciful Intervention","Smite Condition",
    "\"Hold the Line!\"","\"Retreat!\"","\"Save Yourselves!\"","\"Stand Your Ground!\"",
    "Bane Signet","Signet of Judgement","Signet of Mercy","Signet of Wrath",
    "Bow of Truth","Hammer of Wisdom","Shield of the Avenger","Sword of Justice",
    ["Fragments of Faith","Mantra of Flame"],["Light's Judgement","Mantra of Lore"],["Test of Faith","Mantra of Truth"],["Procession of Blades","Mantra of Potence"],
    "\"Feel My Wrath!\"","Renewed Focus","Signet of Courage",["Dragon's Maw","Mantra of Liberation"]],

    ["Defiant Stance","Healing Signet", "\"To the Limit!\"","Mending",["Blood Reckoning","Natural Healing"],
    "Banner of Defense","Banner of Discipline","Banner of Strength","Banner of Tactics",
    "Bull's Charge","Kick","Stomp","Throw Bolas",
    "\"Fear Me!\"","\"For Great Justice!\"","\"On My Mark!\"","\"Shake It Off!\"",
    "Dolyak Signet","Signet of Fury","Signet of Might","Signet of Stamina",
    "Balanced Stance","Berserker Stance","Endure Pain","Frenzy",
    ["Outrage","Sight beyond Sight"],["Shattering Blow","Featherfoot Grace"],["Sundering Leap","Imminent Threat"],["Wild Blow","Break Enchantments"],
    "Battle Standard","Rampage","Signet of Rage",["Head Butt","Winds of Disenchantment"]],

    ["A.E.D.","Elixir H","Healing Turret","Med Kit",["Medic Gyro","Coolant Blast"],
    "Bomb Kit","Grenade Kit","Elixir Gun","Flamethrower","Tool Kit",
    "Elixir B","Elixir C","Elixir R","Elixir S","Elixir U",
    "Personal Battering Ram","Rocket Boots","Slick Shoes","Throw Mine","Utility Goggles",
    "Flame Turret","Net Turret","Rifle Turret","Rocket Turret","Thumper Turret",
    ["Shredder Gyro","Spectrum Shield"],["Bulwark Gyro","Hard Light Arena"],["Purge Gyro","Laser Disk"],["Blast Gyro Tag","Photon Wall"],
    "Elite Mortar Kit","Elixir X","Supply Crate",["Sneak Gyro","Prime Light Beam"]],

    ["\"We Heal As One!\"","Healing Spring","Troll Unguent","Water Spirit",["Glyph of Rejuvenation","Bear Stance"],
    "\"Guard!\"","\"Protect Me!\"","\"Search and Rescue!\"","\"Sic 'Em!\"",
    "Signet of Renewal","Signet of Stone","Signet of the Hunt","Signet of the Wild",
    "Frost Spirit","Stone Spirit","Storm Spirit","Sun Spirit",
    "Lightning Reflexes","Muddy Terrain","Quickening Zephyr","Sharpening Stone",
    "Flame Trap","Frost Trap","Spike Trap","Viper's Nest",
    ["Glyph of Alignment","Dolyak Stance"],["Glyph of Equality","Griffon Stance"],["Glyph of the Tides","Moa Stance"],["Glyph of Empowerment","Vulture Stance"],
    "Entangle","\"Strength of the Pack!\"","Spirit of Nature",["Glyph of Unity","One Wolf Pack"]],

    ["Hide in Shadows","Signet of Malice","Skelk Venom","Withdraw",["Channeled Vigor","Malicious Restoration"],
    "Blinding Powder","Shadow Refuge","Shadowstep","Smoke Screen",
    "Assassin's Signet","Infiltrator's Signet","Signet of Agility","Signet of Shadows",
    "Ambush","Needle Trap","Shadow Trap","Tripwire",
    "Caltrops","Haste","Roll for Initiative","Scorpion Wire",
    "Devourer Venom","Ice Drake Venom","Skale Venom","Spider Venom",
    ["Bandit's Defense","Binding Shadow",],["Distracting Daggers","Mercy"],["Fist Flurry","Shadow Flare"],["Impairing Daggers","Shadow Gust"],
    "Basilisk Venom","Dagger Storm","Thieves Guild",["Impact Strike","Shadow Meld"]],

    ["Arcane Brilliance","Ether Renewal","Glyph of Elemental Harmony","Signet of Restoration",["\"Wash the Pain Away!\"","Aquatic Stance"],
    "Arcane Blast","Arcane Power","Arcane Shield","Arcane Wave",
    "Armor of Earth","Cleansing Fire","Lightning Flash","Mist Form",
    "Conjure Earth Shield","Conjure Flame Axe","Conjure Frost Bow","Conjure Lightning Hammer",
    "Glyph of Elemental Power","Glyph of Lesser Elementals","Glyph of Renewal","Glyph of Storms",
    "Signet of Air","Signet of Earth","Signet of Fire","Signet of Water",
    ["\"Feel the Burn!\"","Primordial Stance"],["\"Eye of the Storm!\"","Stone Resonance"],["\"Aftershock!\"","Unravel"],["\"Flash-Freeze!\"","Twist of Fate"],
    "Conjure Fiery Greatsword","Glyph of Elementals","Tornado",["\"Rebound!\"","Weave Self"]],

    ["Ether Feast","Mantra of Recovery","Mirror","Signet of Ether",["Well of Eternity","False Oasis"],
    "Decoy","Mirror Images","Feedback","Null Field","Portal Entre","Veil",
    "Arcane Thievery","Blink","Illusion of Life","Mimic",
    "Mantra of Concentration","Mantra of Distraction","Mantra of Pain","Mantra of Resolve",
    "Phantasmal Defender","Phantasmal Disenchanter",
    "Signet of Domination","Signet of Illusions","Signet of Inspiration","Signet of Midnight",
    ["Well of Action","Crystal Sands"],["Well of Calamity","Illusionary Ambush"],["Well of Precognition","Mirage Advance"],["Well of Recall","Sand Through Glass"],
    "Mass Invisibility","Signet of Humility","Time Warp",["Gravity Well","Jaunt"]],

    ["Consume Conditions","Signet of Vampirism","Summon Blood Fiend","Well of Blood",["\"Your Soul Is Mine!\"","Sand Flare"],
    "Blood Is Power","Corrosive Poison Cloud","Corrupt Boon","Epidemic",
    "Summon Bone Fiend","Summon Bone Minions","Summon Flesh Wurm","Summon Shadow Fiend",
    "Plague Signet","Signet of Spite","Signet of the Locust","Signet of Undeath",
    "Spectral Armor","Spectral Grasp","Spectral Walk","Spectral Wall",
    "Well of Corruption","Well of Darkness","Well of Power","Well of Suffering",
    ["\"Nothing Can Save You!\"","Trail of Anguish"],["\"Rise!\"","Dessicate"],["\"Suffer!\"","Sand Swell"],["\"You Are All Weaklings!\"","Serpent Siphon"],
    "Lich Form","Plaguelands","Summon Flesh Golem",["\"Chilled to the Bone!\"","Ghastly Breach"]]
    ];

var weapons = [
    // guard: longbow, axe/
    ["Mace","Scepter","Sword","Greatsword","Hammer","Staff","Longbow","Axe",
    "Focus","Shield","Torch"],
    // warr: torch, dagger/dagger
    ["Axe","Mace","Sword","Greatsword","Hammer","Rifle","Longbow","Dagger",
    "Axe","Mace","Shield","Sword","Warhorn","Torch","Dagger"],
    // engi: hammer, sword/
    ["Pistol","Rifle","Hammer","Sword",
    "Pistol","Shield"],
    // ranger: staff, /dagger
    ["Sword","Axe","Greatsword","Longbow","Shortbow","Staff","Dagger",
    "Axe","Dagger","Torch","Warhorn"],
    // thief: staff, rifle
    ["Dagger","Pistol","Sword","Shortbow","Staff","Rifle",
    "Dagger","Pistol"],
    // ele: /warhorn, sword/
    ["Dagger","Scepter","Staff","Sword",
    "Dagger","Focus","Warhorn"],
    // mesmer: /shield, axe/
    ["Scepter","Sword","Greatsword","Staff","Axe",
    "Focus","Pistol","Sword","Torch","Shield"],
    // necro: greatsword, /torch
    ["Axe","Dagger","Scepter","Staff","Greatsword",
    "Dagger","Focus","Warhorn","Torch"],
    // rev: /shield, shortbow
    ["Mace","Sword","Hammer","Staff","Shortbow",
    "Axe","Sword","Shield"]
    ];

// 29 total
var amulets = [
    "Assassin","Avatar","Barbarian","Berserker","Carrion","Cavalier",
    "Celestial","Deadshot","Demolisher","Destroyer","Diviner","Grieving",
    "Harrier","Knight","Magi","Marauder","Marhsal","Mender",
    "Paladin","Rabid","Rampager","Sage","Seeker","Sinister",
    "Swashbuckler","Valkyrie","Viper","Wanderer","Wizard"
];

// 28 total
var sigils = [
    "Absorption","Agility","Agony","Annulment","Battle","Cleansing",
    "Compounding","Confusion","Courage","Doom","Energy","Enhancement",
    "Escape","Exploitation","Exposure","Fallibility","Intelligence","Misery",
    "Opportunity","Peril","Purging","Revocation","Ruthlessness","Savagery",
    "Separation","Smoldering","Stagnation","Venom"
];

// 83 total
var runes = [
    "Adventure","Air","Altruism","Balthazar","Divinity","Dwayna",
    "Earth","Evasion","Exuberance","Fire","Grenth","Hoelbrak",
    "Ice","Infiltration","Leadership","Lyssa","Melandru","Orr",
    "Radiance","Rage","Rata Sum","Resistance","Sanctuary","Scavenging",
    "Speed","Strength","Surging","the Afflicted","the Aristocracy","the Baelfire",
    "the Berserker","the Centaur","the Citadel","the Chronomancer","the Daredevil","the Deadeye",
    "the Dolyak","the Dragonhunter","the Druid","the Eagle","the Elementalist","the Engineer",
    "the Fighter","the Firebrand","the Flame Legion","the Flock","the Forge","the Grove",
    "the Guardian","the Herald","the Holosmith","the Krait","the Lynx","the Mad King",
    "the Mesmer","the Mirage","the Monk","the Necromancer","the Nightmare","the Pack",
    "the Ranger","the Reaper","the Renegade","the Revenant","the Scholar","the Scrapper",
    "the Soldier","the Soulbeast","the Spellbreaker","the Sunless","the Svanir","the Tempest",
    "the Thief","the Trapper","the Traveler","the Undead","the Warrior","the Water",
    "the Weaver","the Wurm", "Thorns","Tormenting","Vampirism"
];

// Last 1 ES
var revStances = [
    "Legendary Assassin Stance",
    "Legendary Centaur Stance",
    "Legendary Demon Stance",
    "Legendary Dwarf Stance",
    ["Legendary Dragon Stance",
    "Legendary Renegade Stance"]
];

var rangerPets = [
    "Alpine Wolf","Arctodus","Black Bear","Black Moa","Black Widow Spider",
    "Blue Moa","Boar","Brown Bear","Carrion Devourer","Cave Spider",
    "Eagle","Fern Hound","Forest Spider","Hawk","Hyena",
    "Ice Drake","Jaguar","Jungle Spider","Jungle Stalker","Krytan Drakehound",
    "Lashtail Devourer","Lynx","Marsh Drake","Murellow","Owl",
    "Pig","Pink Moa","Polar Bear","Raven","Red Moa",
    "Reef Drake","River Drake","Salamander Drake","Siamoth","Snow Leopard",
    "Warthog","Whiptail Devourer","White Moa","White Raven","Wolf",
    "Bristleback","Electric Wyvern","Fire Wyvern","Smokescale","Tiger",
    "Cheetah","Fanged Iboga","Jacaranda","Rock Gazelle","Sand Lion"
];