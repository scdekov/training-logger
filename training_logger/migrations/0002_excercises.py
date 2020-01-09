from django.db import migrations


EXCERCISES = set([
    "Rickshaw Carry",
    "Single-Leg Press",
    "Atlas Stones",
    "Incline Hammer Curls",
    "Wrist Rotations with Straight Bar",
    "Single-Arm Linear Jammer",
    "Side Laterals to Front Raise",
    "T-Bar Row with Handle",
    "One-Arm Medicine Ball Slam",
    "Palms-Down Wrist Curl Over A Bench",
    "Clean from Blocks",
    "Weighted Pull Ups",
    "Landmine 180's",
    "Dips - Triceps Version",
    "Barbell Full Squat",
    "Standing Palm-In One-Arm Dumbbell Press",
    "Palms-Up Barbell Wrist Curl Over A Bench",
    "Farmer's Walk",
    "Romanian Deadlift With Dumbbells",
    "Barbell Glute Bridge",
    "Clean Deadlift",
    "Deficit Deadlift",
    "Tire Flip",
    "Clean and Press",
    "Barbell Deadlift",
    "Standing Palms-Up Barbell Behind The Back Wrist Curl",
    "Lying Face Down Plate Neck Resistance",
    "Decline EZ Bar Triceps Extension",
    "Push Press",
    "Snatch",
    "Clean and Jerk",
    "Hang Clean",
    "Finger Curls",
    "Suspended Fallout",
    "Wide-Grip Standing Barbell Curl",
    "Standing Palms-In Dumbbell Press",
    "Standing Military Press",
    "One-Arm Kettlebell Push Press",
    "Box Squat",
    "Dumbbell Floor Press",
    "Sumo Deadlift",
    "Reverse Band Box Squat",
    "Plank",
    "Standing Cable Lift",
    "Bottoms Up",
    "Spell Caster",
    "Dumbbell V-Sit Cross Jab",
    "Dumbbell Bench Press",
    "Pullups",
    "Pushups",
    "Reverse Grip Bent-Over Rows",
    "Smith Machine Shrug",
    "Spider Curl",
    "Decline Reverse Crunch",
    "Front Squats With Two Kettlebells",
    "Power Snatch",
    "Romanian Deadlift from Deficit",
    "Single Leg Push-off",
    "Hip Circles (prone)",
    "Smith Machine Calf Raise",
    "Seated Two-Arm Palms-Up Low-Pulley Wrist Curl",
    "Seated Barbell Military Press",
    "Rope Jumping",
    "Power Clean from Blocks",
    "Spider Crawl",
    "Barbell Walking Lunge",
    "Dumbbell Flyes",
    "Close-Grip Barbell Bench Press",
    "Cross-Body Crunch",
    "Chin-Up",
    "Wrist Roller",
    "Triceps Pushdown - V-Bar Attachment",
    "One-Arm Side Laterals",
    "EZ-Bar Curl",
    "Power Partials",
    "Barbell Hip Thrust",
    "Olympic Squat",
    "Axle Deadlift",
    "Leverage Shrug",
    "One-Arm High-Pulley Cable Side Bends",
    "Floor Glute-Ham Raise",
    "Elbow to Knee",
    "Hyperextensions (Back Extensions)",
    "Hammer Curls",
    "Zottman Curl",
    "Weighted Bench Dip",
    "Seated Dumbbell Press",
    "Standing Dumbbell Straight-Arm Front Delt Raise Above Head",
    "Reverse Flyes",
    "Incline Dumbbell Press",
    "Kettlebell Pistol Squat",
    "Step Mill",
    "Natural Glute Ham Raise",
    "Standing Dumbbell Press",
    "Low Cable Crossover",
    "Cocoons",
    "Biceps Curl To Shoulder Press",
    "Decline Dumbbell Flyes",
    "Plate Twist",
    "Concentration Curls",
    "Dips - Chest Version",
    "Kneeling Cable Triceps Extension",
    "Thigh Adductor",
    "Barbell Curl",
    "Reverse Grip Triceps Pushdown",
    "Gorilla Chin/Crunch",
    "Decline Crunch",
    "Overhead Cable Curl",
    "Hanging Pike",
    "Narrow Stance Squats",
    "Rocky Pull-Ups/Pulldowns",
    "Flexor Incline Dumbbell Curls",
    "Dumbbell Lying One-Arm Rear Lateral Raise",
    "Standing Dumbbell Triceps Extension",
    "Barbell Bench Press - Medium Grip",
    "Front Dumbbell Raise",
    "Seated One-Arm Dumbbell Palms-Up Wrist Curl",
    "Seated Palms-Down Barbell Wrist Curl",
    "Bear Crawl Sled Drags",
    "Alternating Deltoid Raise",
    "Machine Bicep Curl",
    "Bodyweight Flyes",
    "One-Arm Long Bar Row",
    "Hanging Oblique Knee Raise",
    "Bodyweight Lunge",
    "One-Arm Dumbbell Row",
    "Standing Calf Raises",
    "One-Legged Cable Kickback",
    "Incline Cable Flye",
    "Dumbbell Shoulder Press",
    "Push-Ups - Close Triceps Position",
    "Box Squat with Bands",
    "Squat with Chains",
    "Weighted Jump Squat",
    "Single-Leg High Box Squat",
    "EZ-Bar Skullcrusher",
    "Single Dumbbell Raise",
    "Car Drivers",
    "Standing Alternating Dumbbell Press",
    "Weighted Suitcase Crunch",
    "Oblique Cable Crunch",
    "Snatch-Grip Behind-The-Neck Overhead Press",
    "Bent Over One-Arm Long Bar Row",
    "Wide-Grip Decline Barbell Bench Press",
    "Front Barbell Squat",
    "Lying Leg Curls",
    "Triceps Pushdown - Rope Attachment",
    "Smith Machine Overhead Shoulder Press",
    "Cable One Arm Tricep Extension",
    "Arnold Dumbbell Press",
    "Exercise Ball Pull-In",
    "Cable Crunch",
    "V-Bar Pulldown",
    "Barbell Ab Rollout",
    "Hanging Leg Raise",
    "Dumbbell Bicep Curl",
    "Decline Close-Grip Bench To Skull Crusher",
    "Dumbbell Lying Supination",
    "Bicycling",
    "Rowing, Stationary",
    "Leverage Shoulder Press",
    "Kneeling Cable Crunch With Alternating Oblique Twists",
    "Muscle Up",
    "Shotgun Row",
    "Incline Dumbbell Press Reverse-Grip",
    "T-Bar Row",
    "Barbell Squat",
    "Bent Over Two-Arm Long Bar Row",
    "Wide-Grip Barbell Bench Press",
    "Decline Barbell Bench Press",
    "Dumbbell Squat",
    "Ab Roller",
    "Barbell Ab Rollout - On Knees",
    "Front Plate Raise",
    "Cross Body Hammer Curl",
    "Close-Grip EZ Bar Curl",
    "Seated Triceps Press",
    "Incline Barbell Triceps Extension",
    "Snatch Deadlift",
    "Side to Side Box Shuffle",
    "Weighted Crunches",
    "Dumbbell Goblet Squat",
    "Wide-Grip Pull-Up",
    "Hyperextensions With No Hyperextension Bench",
    "Dumbbell Lunges",
    "Leg Press",
    "Butt Lift (Bridge)",
    "Reverse Crunch",
    "Air Bike",
    "Narrow Stance Hack Squats",
    "Narrow Stance Leg Press",
    "Barbell Curls Lying Against An Incline",
    "Dumbbell Lying Pronation",
    "Groiners",
    "Elliptical Trainer",
    "Stairmaster",
    "Double Leg Butt Kick",
    "Standing Long Jump",
    "Ball Leg Curl",
    "Incline Push-Up",
    "Single Leg Glute Bridge",
    "Dumbbell Incline Row",
    "Close-Grip EZ-Bar Press",
    "Bodyweight Mid Row",
    "Burpee",
    "Reverse Barbell Preacher Curls",
    "Close-Grip Front Lat Pulldown",
    "Bent Over Two-Dumbbell Row With Palms In",
    "Stiff-Legged Dumbbell Deadlift",
    "Incline Dumbbell Flyes",
    "Barbell Lunge",
    "Seated Cable Rows",
    "Cable Crossover",
    "V-Bar Pullup",
    "Dip Machine",
    "Preacher Curl",
    "Standing One-Arm Cable Curl",
    "Standing Dumbbell Calf Raise",
    "Neck Press",
    "Seated Close-Grip Concentration Barbell Curl",
    "Dumbbell One-Arm Shoulder Press",
    "Tricep Dumbbell Kickback",
    "Standing Bent-Over Two-Arm Dumbbell Triceps Extension",
    "Front Two-Dumbbell Raise",
    "Mountain Climbers",
    "Drop Push",
    "Bodyweight Squat",
    "Standing Hip Circles",
    "Trap Bar Deadlift",
    "Ring Dips",
    "Parallel Bar Dip",
    "Chair Squat",
    "3/4 Sit-Up",
    "Otis-Up",
    "Clam",
    "Machine Squat",
    "Barbell Incline Bench Press Medium-Grip",
    "Front Cable Raise",
    "Crunches",
    "Dumbbell Rear Lunge",
    "Alternate Incline Dumbbell Curl",
    "Power Clean",
    "Wide-Grip Rear Pull-Up",
    "Handstand Push-Ups",
    "Dumbbell Alternate Bicep Curl",
    "One Arm Dumbbell Preacher Curl",
    "Bench Dips",
    "Standing Dumbbell Upright Row",
    "Goblet Squat",
    "Kettlebell Sumo High Pull",
    "Trail Running/Walking",
    "Deadlift with Bands",
    "Hang Snatch",
    "External Rotation with Cable",
    "Incline Push-Up Medium",
    "Incline Cable Chest Press",
    "Lunge Pass Through",
    "Rope Straight-Arm Pulldown",
    "Step-up with Knee Raise",
    "Bent Over Barbell Row",
    "Barbell Step Ups",
    "Smith Machine Squat",
    "Dumbbell Shrug",
    "Reverse Cable Curl",
    "Seated Calf Raise",
    "Calf-Machine Shoulder Shrug",
    "Rocking Standing Calf Raise",
    "Calf Press On The Leg Press Machine",
    "Front Incline Dumbbell Raise",
    "Barbell Shoulder Press",
    "Lying Close-Grip Barbell Triceps Extension Behind The Head",
    "Seated Palm-Up Barbell Wrist Curl",
    "Two-Arm Kettlebell Military Press",
    "Bench Press - Powerlifting",
    "Cable Chest Press",
    "Dumbbell Bench Press with Neutral Grip",
    "Rope Climb",
    "Standing Concentration Curl",
    "Standing Bradford Press",
    "Dumbbell Rear Delt Row",
    "Palms-Up Dumbbell Wrist Curl Over A Bench",
    "Dumbbell Side Bend",
    "Incline Dumbbell Curl",
    "Cable Lying Triceps Extension",
    "Close-Grip Standing Barbell Curl",
    "Standing Overhead Barbell Triceps Extension",
    "One-Arm Kettlebell Clean",
    "Kettlebell Turkish Get-Up (Squat style)",
    "Deadlift with Chains",
    "Rope Crunch",
    "Leverage Incline Chest Press",
    "Triceps Overhead Extension with Rope",
    "Single-Arm Push-Up",
    "Standing Rope Crunch",
    "Single-Arm Cable Crossover",
    "Dead Bug",
    "Standing Olympic Plate Hand Squeeze",
    "Wide-Grip Lat Pulldown",
    "Crunch - Hands Overhead",
    "Preacher Hammer Dumbbell Curl",
    "Alternate Hammer Curl",
    "Seated Dumbbell Curl",
    "JM Press",
    "Cable Internal Rotation",
    "Standing One-Arm Dumbbell Curl Over Incline Bench",
    "Knee/Hip Raise On Parallel Bars",
    "Triceps Pushdown",
    "Side Lateral Raise",
    "Alternating Kettlebell Press",
    "One-Arm Kettlebell Snatch",
    "Kettlebell One-Legged Deadlift",
    "Kettlebell Thruster",
    "Kneeling Squat",
    "Front Box Jump",
    "Split Squat with Dumbbells",
    "Band Hip Adductions",
    "Sledgehammer Swings",
    "Decline Push-Up",
    "Battling Ropes",
    "Hammer Grip Incline DB Bench Press",
    "Bent Over Low-Pulley Side Lateral",
    "Pushups (Close and Wide Hand Positions)",
    "Jackknife Sit-Up",
    "Push-Ups With Feet Elevated",
    "One Leg Barbell Squat",
    "Push-Ups With Feet On An Exercise Ball",
    "Standing Biceps Cable Curl",
    "Low Pulley Row To Neck",
    "Decline Oblique Crunch",
    "External Rotation",
    "Stomach Vacuum",
    "Barbell Rear Delt Row",
    "Alternating Renegade Row",
    "Clean",
    "Good Morning",
    "Wide Stance Stiff Legs",
    "Scissors Jump",
    "Calf Press",
    "Seated Cable Shoulder Press",
    "Decline Dumbbell Bench Press",
    "Leg Extensions",
    "Barbell Hack Squat",
    "Underhand Cable Pulldowns",
    "Decline Dumbbell Triceps Extension",
    "One-Arm Incline Lateral Raise",
    "Drag Curl",
    "Press Sit-Up",
    "Butterfly",
    "One Arm Dumbbell Bench Press",
    "Gironda Sternum Chins",
    "Seated One-arm Cable Pulley Rows",
    "Dumbbell One-Arm Triceps Extension",
    "Hang Clean - Below the Knees",
    "Rack Pull with Bands",
    "Leverage Chest Press",
    "Bosu Ball Cable Crunch With Side Bends",
    "Incline Push-Up Wide",
    "Jumping Jacks",
    "Lying Face Up Plate Neck Resistance",
    "Straight-Arm Dumbbell Pullover",
    "Hack Squat",
    "Barbell Shrug",
    "Freehand Jump Squat",
    "Tuck Crunch",
    "Lying Dumbbell Tricep Extension",
    "Cable Rope Rear-Delt Rows",
    "Dumbbell Raise",
    "Weighted Sissy Squat",
    "Seated Dumbbell Palms-Down Wrist Curl",
    "Front Leg Raises",
    "Skating",
    "Face Pull",
    "Glute Ham Raise",
    "Band Skull Crusher",
    "Isometric Wipers",
    "Pallof Press",
    "Jog In Place",
    "Man Maker",
    "Palms-Down Dumbbell Wrist Curl Over A Bench",
    "Incline Dumbbell Bench With Palms Facing In",
    "Flat Bench Lying Leg Raise",
    "Seated Flat Bench Leg Pull-In",
    "Exercise Ball Crunch",
    "Russian Twist",
    "Side To Side Chins",
    "One Arm Pronated Dumbbell Triceps Extension",
    "One Arm Supinated Dumbbell Triceps Extension",
    "Seated Bent-Over Rear Delt Raise",
    "Side Wrist Pull",
    "One-Arm Kettlebell Clean and Jerk",
    "Running, Treadmill",
    "Leverage Iso Row",
    "Clock Push-Up",
    "Decline Smith Press",
    "Cable Iron Cross",
    "Plie Dumbbell Squat",
    "Incline Dumbbell Flyes - With A Twist",
    "Standing Low-Pulley Deltoid Raise",
    "Oblique Crunches",
    "Machine Preacher Curls",
    "Plate Pinch",
    "Reverse Triceps Bench Press",
    "Upright Barbell Row",
    "Seated Side Lateral Raise",
    "Seated One-Arm Dumbbell Palms-Down Wrist Curl",
    "Advanced Kettlebell Windmill",
    "Bottoms-Up Clean From The Hang Position",
    "Rack Pulls",
    "Split Jerk",
    "Chain Handle Extension",
    "Band Good Morning (Pull Through)",
    "Leverage Decline Chest Press",
    "Linear Acceleration Wall Drill",
    "Dumbbell Seated Box Jump",
    "Push-Up Wide",
    "Barbell Rollout from Bench",
    "Barbell Thruster",
    "Straight-Arm Pulldown",
    "Bent Over Two-Dumbbell Row",
    "Stiff-Legged Barbell Deadlift",
    "Glute Kickback",
    "Butt-Ups",
    "Smith Machine Bench Press",
    "Middle Back Shrug",
    "Iron Cross",
    "Lying Supine Dumbbell Curl",
    "Barbell Shrug Behind The Back",
    "Superman",
    "Cross Over - With Bands",
    "Two-Arm Dumbbell Preacher Curl",
    "Flutter Kicks",
    "Front Raise And Pullover",
    "Elevated Cable Rows",
    "Dumbbell Lying Rear Lateral Raise",
    "Weighted Ball Hyperextension",
    "Standing One-Arm Dumbbell Triceps Extension",
    "Bicycling, Stationary",
    "Jogging-Treadmill",
    "Floor Press",
    "Bench Press with Chains",
    "Chest Push (multiple response)",
    "Incline Push-Up Depth Jump",
    "Internal Rotation with Band",
    "Straight Raises on Incline Bench",
    "Kneeling Single-Arm High Pulley Row",
    "Cobra Triceps Extension",
    "Bodyweight Reverse Lunge",
    "Yates Row Reverse Grip",
    "Bent-Arm Dumbbell Pullover",
    "Bent Over Dumbbell Rear Delt Raise With Head On Bench",
    "Lying Cable Curl",
    "Cable Hammer Curls - Rope Attachment",
    "Mixed Grip Chin",
    "Cable Hip Adduction",
    "Lying Rear Delt Raise",
    "One-Arm Kettlebell Row",
    "Recumbent Bike",
    "Walking, Treadmill",
    "Inverted Row",
    "Standing Cable Chest Press",
    "Cable Reverse Crunch",
    "Body Tricep Press",
    "Band Pull Apart",
    "Dumbbell Clean",
    "Butt Kicks",
    "Neutral-Grip Pull Ups",
    "Machine-Assisted Pull-Up",
    "Wide-Stance Barbell Squat",
    "Alien Squat",
    "Reverse Barbell Curl",
    "Dumbbell Step Ups",
    "Thigh Abductor",
    "Low Cable Triceps Extension",
    "Standing Barbell Calf Raise",
    "Machine Bench Press",
    "Bradford/Rocky Presses",
    "Seated Bent-Over Two-Arm Dumbbell Triceps Extension",
    "Kettlebell Turkish Get-Up (Lunge style)",
    "Iliotibial Tract-SMR",
    "Power Jerk",
    "Supine Chest Throw",
    "Cable Rear Delt Fly",
    "Reverse Machine Flyes",
    "Standing Cable Wood Chop",
    "Anti-Gravity Press",
    "Single Leg Deadlift",
    "Seated Back Extension",
    "Pendlay Rown",
    "Stiff Leg Barbell Good Morning",
    "Full Range-Of-Motion Lat Pulldown",
    "Cable Rope Overhead Triceps Extension",
    "Tate Press",
    "Back Flyes - With Bands",
    "Seated Good Mornings",
    "Box Jump (Multiple Response)",
    "Knee Tuck Jump",
    "Close-Grip Dumbbell Press",
    "Upright Cable Row",
    "Bent-Knee Hip Raise",
    "Smith Machine Bent Over Row",
    "Standing Dumbbell Reverse Curl",
    "Zercher Squats",
    "Lying Triceps Press",
    "Lying Close-Grip Barbell Triceps Press To Chin",
    "Cable Shoulder Press",
    "Cable Russian Twists",
    "Romanian Deadlift",
    "Bent-Arm Barbell Pullover",
    "Lying Machine Squat",
    "Machine Shoulder (Military) Press",
    "Standing Low-Pulley One-Arm Triceps Extension",
    "Smith Machine Incline Bench Press",
    "Cuban Press",
    "Ab Crunch Machine",
    "Weighted Sit-Ups - With Bands",
    "Jefferson Squats",
    "Windmills",
    "Jerk Dip Squat",
    "Yoke Walk",
    "Rocket Jump",
    "Smith Machine Leg Press",
    "Wind Sprints",
    "Bodyweight Walking Lunge",
    "Smith Machine Hip Raise",
    "Romanian Deadlift with Kettlebell",
    "Fire Hydrant",
    "Body-Up",
    "Wall Ball Squat",
    "Alternate Heel Touchers",
    "Smith Machine Close-Grip Bench Press",
    "Reverse Flyes With External Rotation",
    "Incline Inner Biceps Curl",
    "Plyo Kettlebell Pushups",
    "Depth Jump Leap",
    "Reverse Hyperextension",
    "Alternating Cable Shoulder Press",
    "Seated Leg Curl",
    "Cable Shrugs",
    "Overhead Squat",
    "Alternating Kettlebell Row",
    "Single-Leg Leg Extension",
    "Pistol Squat",
    "Lying T-Bar Row",
    "Lying One-Arm Lateral Raise",
    "Lateral Raise - With Bands",
    "High Cable Curls",
    "Standing Bent-Over One-Arm Dumbbell Triceps Extension",
    "Standing Barbell Press Behind Neck",
    "Band Good Morning",
    "Leverage High Row",
    "Overhead Slam",
    "Pallof Press With Rotation",
    "Close-Grip EZ-Bar Curl with Band",
    "Kneeling High Pulley Row",
    "Upright Row - With Bands",
    "Barbell Side Split Squat",
    "Leg-Up Hamstring Stretch",
    "Sumo Deadlift with Chains",
    "Physioball Hip Bridge",
    "Suspended Reverse Crunch",
    "Kettlebell Pirate Ships",
    "Side Lunge",
    "Walking High Knees",
    "Close-Hands Push-Up",
    "See-Saw Press (Alternating Side Press)",
    "Cable Wrist Curl",
    "Dumbbell One-Arm Upright Row",
    "Dumbbell Scaption",
    "Smith Machine Behind the Back Shrug",
    "Flat Bench Leg Pull-In",
    "Speed Squats",
    "Cable Seated Crunch",
    "Smith Single-Leg Split Squat",
    "Seated Leg Press",
    "Kettlebell Curtsy Lunge",
    "Frog Sit-Ups",
    "Kettlebell Windmill",
    "Kettlebell Figure 8",
    "Side Leg Raises",
    "Board Press",
    "Circus Bell",
    "Frankenstein Squat",
    "Single Leg Butt Kick",
    "Cable Deadlifts",
    "One-Arm Plank Dumbbell Biceps Curl",
    "Around The Worlds",
    "Incline Bench Pull",
    "Dumbbell Prone Incline Curl",
    "Band Assisted Pull-Up",
    "Suspended Row",
    "Jump Squat",
    "Tiger-Bend Push-Up",
    "Seated Head Harness Neck Resistance",
    "Barbell Seated Calf Raise",
    "Shoulder Press - With Bands",
    "Kneeling Jump Squat",
    "Barbell Bench Press-Wide Grip",
    "One-Arm Side Deadlift",
    "Zottman Preacher Curl",
    "Sit-Up",
    "Seated Bent-Over One-Arm Dumbbell Triceps Extension",
    "Two-Arm Kettlebell Clean",
    "Vertical Swing",
    "Inchworm",
    "Cable Preacher Curl",
    "Side Bridge",
    "Balance Board",
    "Double Kettlebell Push Press",
    "Split Jump",
    "Plyo Push-up",
    "Bench Jump",
    "Isometric Neck Exercise - Sides",
    "Standing Leg Curl",
    "Leg Pull-In",
    "Standing Inner-Biceps Curl",
    "Dumbbell Incline Shoulder Raise",
    "One-Arm Kettlebell Swings",
    "Machine Triceps Extension",
    "Prowler Sprint",
    "Barbell Front Raise",
    "Barbell Squat To A Bench",
    "Oblique Crunches - On The Floor",
    "Janda Sit-Up",
    "Seated Dumbbell Inner Biceps Curl",
    "Donkey Calf Raises",
    "Pull Through",
    "Incline Push-Up Close-Grip",
    "Smith Machine Upright Row",
    "Crunch - Legs On Exercise Ball",
    "Side Jackknife",
    "Kettlebell Pass Between The Legs",
    "Moving Claw Series",
    "Suspended Push-Up",
    "Dumbbell Walking Lunge",
    "Flat Bench Cable Flyes",
    "One Arm Floor Press",
    "Wide-Grip Decline Barbell Pullover",
    "Smith Machine Reverse Calf Raises",
    "Two-Arm Kettlebell Row",
    "Front Cone Hops (or hurdle hops)",
    "Lateral Bound",
    "One Arm Lat Pulldown",
    "Close-Grip Push-Up off of a Dumbbell",
    "Smith Machine Decline Press",
    "Dumbbell Seated One-Leg Calf Raise",
    "Weighted Squat",
    "Clean Pull",
    "Smith Machine One-Arm Upright Row",
    "Machine Lateral Raise",
    "Cable Incline Pushdown",
    "Reverse Plate Curls",
    "Standing Front Barbell Raise Over Head",
    "Ankle Circles",
    "Hip Extension with Bands",
    "Kipping Muscle Up",
    "Isometric Chest Squeezes",
    "Cable Incline Triceps Extension",
    "Lying Close-Grip Bar Curl On High Pulley",
    "Groin and Back Stretch",
    "Push Up to Side Plank",
    "Wide-Grip Pulldown Behind The Neck",
    "Seated Leg Tucks",
    "Standing Biceps Stretch",
    "Dumbbell Squat To A Bench",
    "Smith Machine Stiff-Legged Deadlift",
    "Scissor Kick",
    "Pin Presses",
    "London Bridges",
    "90-Degree Jump Squat Twist",
    "Barbell Side Bend",
    "One-Arm Overhead Kettlebell Squats",
    "Kettlebell Seated Press",
    "Double Kettlebell Jerk",
    "Smith Machine Pistol Squat",
    "Bench Sprint",
    "Wide-Stance Leg Press",
    "Toe Touchers",
    "Backward Drag",
    "Alternate Leg Diagonal Bound",
    "Sled Push",
    "Backward Medicine Ball Throw",
    "Kettlebell Arnold Press",
    "Clean Shrug",
    "Landmine Linear Jammer",
    "Standing Toe Touches",
    "Barbell Guillotine Bench Press",
    "Upward Stretch",
    "Shoulder Circles",
    "Intermediate Groin Stretch",
    "Standing Hamstring and Calf Stretch",
    "Monster Walk",
    "Squat with Plate Movers",
    "Side To Side Push-Up",
    "Piriformis-SMR",
    "Scapular Pull-Up",
    "Cable Seated Lateral Raise",
    "Standing Towel Triceps Extension",
    "Lower Back Curl",
    "Straight Bar Bench Mid Rows",
    "Leg Lift",
    "One-Arm Flat Bench Dumbbell Flye",
    "Barbell Incline Shoulder Raise",
    "Push Press - Behind the Neck",
    "Suspended Split Squat",
    "Isometric Neck Exercise - Front And Back",
    "Weighted Ball Side Bend",
    "Inverted Row with Straps",
    "Peroneals-SMR",
    "Atlas Stone Trainer",
    "Knee Circles",
    "Intermediate Hip Flexor and Quad Stretch",
    "Lying Hamstring",
    "Dumbbell Tricep Extension -Pronated Grip",
    "Bent Press",
    "One Arm Chin-Up",
    "Extended Range One-Arm Kettlebell Floor Press",
    "Seated Dumbbell Palms-Up Wrist Curl",
    "Lying Cambered Barbell Row",
    "Snatch Shrug",
    "Sit Squats",
    "Crucifix",
    "Hip Lift with Band",
    "Alternating Floor Press",
    "Calves-SMR",
    "Forward Drag with Press",
    "Shoulder Stretch",
    "Hamstring Stretch",
    "Medicine Ball Chest Pass",
    "Lying High Bench Barbell Curl",
    "One Arm Against Wall",
    "Squats - With Bands",
    "Dynamic Chest Stretch",
    "Catch and Overhead Throw",
    "Smith Machine Hang Power Clean",
    "Rhomboids-SMR",
    "Neck Bridge Prone",
    "Standing Gastrocnemius Calf Stretch",
    "Chain Press",
    "Bench Press - With Bands",
    "Tricep Side Stretch",
    "Hamstring-SMR",
    "Fast Skipping",
    "Hug A Ball",
    "Dancer's Stretch",
    "Upper Back-Leg Grab",
    "Kneeling Hip Flexor",
    "Quadriceps-SMR",
    "Front Barbell Squat To A Bench",
    "Calf Stretch Hands Against Wall",
    "Kettlebell Dead Clean",
    "Neck Bridge Prone",
    "Standing Gastrocnemius Calf Stretch",
    "Chain Press",
    "Bench Press - With Bands",
    "Tricep Side Stretch",
    "Hamstring-SMR",
    "Fast Skipping",
    "Hug A Ball",
    "Dancer's Stretch",
    "Upper Back-Leg Grab",
    "Kneeling Hip Flexor",
    "Quadriceps-SMR",
    "Front Barbell Squat To A Bench",
    "Calf Stretch Hands Against Wall",
    "Kettlebell Dead Clean",
    "Supine Two-Arm Overhead Throw",
    "Partner Farmer's Walk Competition",
    "Child's Pose",
    "Round The World Shoulder Stretch",
    "Spinal Stretch",
    "Elbow Circles",
    "Seated Hamstring",
    "Anterior Tibialis-SMR",
    "Kneeling Forearm Stretch",
    "Iron Crosses (stretch)",
    "Pelvic Tilt Into Bridge",
    "Seated Floor Hamstring Stretch",
    "Arm Circles",
    "90/90 Hamstring",
    "All Fours Quad Stretch",
    "Seated Biceps",
    "Torso Rotation",
    "Cable Judo Flip",
    "Cat Stretch",
    "Calf Stretch Elbows Against Wall",
    "Behind Head Chest Stretch",
    "Quad Stretch",
    "Alternating Hang Clean",
    "Calf Raises - With Bands",
    "Side Neck Stretch",
    "Elbows Back",
    "Dynamic Back Stretch",
    "Calf Raise On A Dumbbell",
    "Ankle On The Knee",
    "Triceps Stretch",
    "Seated Barbell Twist",
    "One Half Locust",
    "Latissimus Dorsi-SMR",
    "Seated Overhead Stretch",
    "Lower Back-SMR",
    "Seated Front Deltoid",
    "Hug Knees To Chest",
    "Standing Hip Flexors",
    "World's Greatest Stretch",
    "Looking At Ceiling",
    "The Straddle",
    "Upper Back Stretch",
    "Split Squats",
    "Standing Soleus And Achilles Stretch",
    "Seated Calf Stretch",
    "Shoulder Raise",
    "Chair Upper Body Stretch",
    "Downward Facing Balance",
    "Adductor",
    "Kneeling Arm Drill",
    "Frog Hops",
    "Overhead Stretch",
    "Crossover Reverse Lunge",
    "Middle Back Stretch",
    "Side Lying Groin Stretch",
    "Chin To Chest Stretch",
    "Chest Stretch on Stability Ball",
    "Runner's Stretch",
    "One Handed Hang",
    "Adductor/Groin",
    "Knee Across The Body",
    "Medicine Ball Scoop Throw",
    "Rear Leg Raises",
    "Peroneals Stretch",
    "On Your Side Quad Stretch",
    "On-Your-Back Quad Stretch",
    "Overhead Triceps",
    "Brachialis-SMR",
    "Standing Lateral Stretch",
    "Chair Lower Back Stretch",
    "Standing Pelvic Tilt",
    "Seated Glute",
    "Chest And Front Of Shoulder Stretch",
    "Double Kettlebell Windmill",
    "Lying Glute",
    "Lying Bent Leg Groin",
    "Neck-SMR",
    "Standing Elevated Quad Stretch",
    "Foot-SMR",
    "One Knee To Chest",
    "Wrist Circles",
    "Chair Leg Extended Stretch",
    "IT Band and Glute Stretch",
    "Lying Crossover",
    "Pyramid",
    "Overhead Lat",
    "Posterior Tibialis Stretch",
    "Side-Lying Floor Stretch",
    "Smith Incline Shoulder Raise",
    "One-Arm Kettlebell Jerk",
    "One-Arm Kettlebell Floor Press",
    "One-Arm Kettlebell Military Press To The Side",
    "One-Arm Kettlebell Para Press",
    "Two-Arm Kettlebell Jerk",
    "One-Arm Kettlebell Split Jerk",
    "Leg-Over Floor Press",
    "Kettlebell Hang Clean",
    "Double Kettlebell Alternating Hang Clean",
    "Seated Hamstring and Calf Stretch",
    "Box Squat with Chains",
    "Car Deadlift",
    "Good Morning off Pins",
    "Hang Snatch - Below Knees",
    "Jerk Balance",
    "Keg Load",
    "Log Lift",
    "Muscle Snatch",
    "Squat with Bands",
    "Sandbag Load",
    "Sled Drag - Harness",
    "Squat Jerk",
    "Sumo Deadlift with Bands",
    "Floor Press with Chains",
    "Snatch from Blocks",
    "Split Clean",
    "Reverse Band Deadlift",
    "Reverse Band Power Squat",
    "Reverse Band Sumo Deadlift",
    "Chest Push (single response)",
    "Hurdle Hops",
    "Return Push from Stance",
    "Side Hop-Sprint",
    "Single-Leg Hop Progression",
    "Standing Two-Arm Overhead Throw",
    "Stride Jump Crossover",
    "External Rotation with Band",
    "Hip Crossover",
    "Hip Flexion with Band",
    "Plank with Twist",
    "Carioca Quick Step",
    "Side Standing Long Jump",
    "Single-Cone Sprint Drill",
    "Linear 3-Part Start Technique",
    "Linear Depth Jump",
    "Elevated Back Lunge",
    "Seated Band Hamstring Curl",
    "Speed Band Overhead Triceps",
    "Sled Overhead Triceps Extension",
    "Incline Push-Up Reverse Grip",
    "Lunge Sprint",
    "Single Arm Overhead Kettlebell Squat",
    "Suitcase Crunch",
    "Glute Bridge Hamstring Walkout",
    "Seated Scissor Kick",
    "Punches",
    "Slow Jog",
    "Defensive Slide",
    "Cross Crunch",
    "Square Hop",
    "Lateral Speed Step",
    "Stiff-Legged Deadlift",
    "Suspended Chest Fly",
    "Staggered Push-Up",
    "JM Press",
    "JM Press With Bands",
    "Rockers (Pullover To Press) Straight Bar",
    "Straight-Legged Hip Raise",
    "Partner Supermans With Alternating High-Five",
    "Partner Facing Planks With Alternating High-Five",
    "Partner Facing Side Plank With Band Row",
    "Partner Facing Feet-Elevated Side Plank With Band Row",
    "Partner 3-Touch Motion Russian Twist",
    "Partner Side-To-Side Russian Twist & Pass",
    "Medicine-Ball Push-Up",
    "Partner Flat-Bench Back Extension",
    "Partner Flat-Bench Back Extension With Hold",
    "Partner Hanging Knee Raise With Throw Down",
    "Partner Hanging Knee Raise With Manual Resistance",
    "Lateral Band Walk",
    "Dumbbell Squat To Shoulder Press",
    "Dumbbell Overhead Squat",
    "Single-Arm Dumbbell Overhead Squat",
    "Single-Arm Landmine Row",
    "Medicine Ball Rotational Throw",
    "Suspended Leg Curl",
    "Suspended Crunch",
    "Bosu Ball Crunch",
    "Triceps Plank Extension",
    "Single-Leg Box Jump",
    "Suspended Push-Up",
    "Burpee Over Barbell",
    "Hand Stand Push-Up",
    "Kettlebell Sumo Squat",
    "Barbell Reverse Lunge",
    "Assisted Chin-Up",
    "Stability Ball Pike With Knee Tuck",
    "Diamond Push-Up",
    "Typewriter Push-Up",
    "Clapping Push-Up",
    "Triple Clap Push-Up",
    "Weighted Push-Up",
    "One-Arm Push-Up",
    "Close-Stance Dumbbell Front Squat",
    "Front Dumbbell Raise Using Towel",
    "Shoulder Tap",
    "V-Sit Dumbbell Triceps Extension",
    "Barbell Deadlift Bent Row Complex",
    "Bar Throw And Press",
    "Decline Explosive Push-Up",
    "Around The World Pull-Up",
    "Plate Shoulder Circle Big To Small Rotation",
    "Double Under",
    "Jumping Jack",
    "Sprawl Frog Kick",
    "Kettlebell Side Squat",
    "Kettlebell Thruster Progression",
    "Kettlebell 3-Point Extension",
    "Running Lunge",
    "Southpaw Sprawl",
    "Bear Crawl Fire Feet",
    "Breakdancer",
    "Lunge Heel Kick",
    "Gorilla Squat",
    "Burppe Box Jump",
    "Dumbbell Squat Snatch",
    "Wall Shoulder Tap",
    "Bear Crawl Shoulder Tap",
    "Thigh Killa",
    "Double Kettlebell Snatch",
    "One-Arm Kettlebell Split Snatch",
    "Open Palm Kettlebell Clean",
    "One-Arm Open Palm Kettlebell Clean",
    "Kettlebell Seesaw Press",
    "Lying Prone Quadriceps",
    "Conan's Wheel",
    "Hanging Bar Good Morning",
    "Heaving Snatch Balance",
    "Power Stairs",
    "Rack Delivery",
    "Snatch Balance",
    "Snatch Pull",
    "Split Snatch",
    "Rickshaw Deadlift",
    "Power Snatch from Blocks",
    "Reverse Band Bench Press",
    "Box Skip",
    "Chest Push from 3 point stance",
    "Chest Push with Run Release",
    "Heavy Bag Thrust",
    "Lateral Box Jump",
    "Lateral Cone Hops",
    "Medicine Ball Full Twist",
    "Quick Leap",
    "Single-Leg Lateral Hop",
    "Single-Leg Stride Jump",
    "Star Jump",
    "Supine One-Arm Overhead Throw",
    "Leverage Deadlift",
    "Sled Overhead Backward Walk",
    "Sled Reverse Flye",
    "Sled Row",
    "Platform Hamstring Slides",
    "Prone Manual Hamstring",
    "Speed Box Squat",
    "Neck Bridge Supine",
    "Feet Jack",
    "Fast Kick With Arm Circles",
    "Football Up-Down",
    "Jump Lunge To Feet Jack",
    "Vertical Mountain Climber",
    "Seated Glute Stretch",
    "Slide Jump Shot",
    "High Knee Jog",
    "Axle Clean And Press",
    "Suspended Back Fly",
    "Front-To-Back Squat With Belt",
    "Bench Press With Short Bands",
    "Plate Row",
    "Bosu Ball Squat",
    "Partner Target Sit-Up",
    "Partner Lying Leg Raise With Throw Down",
    "Partner Facing Plank With Band Row",
    "Partner Sit-Up With High-Five",
    "Partner Lying Leg Raise With Lateral Throw Down",
    "Partner Suitcase Carry Competition",
    "Alternating Leg Swing",
    "Hip Circle",
    "Forward Band Walk",
    "Tall Muscle Snatch",
    "Barbell Squat To A Box",
    "Suspended Curl",
    "Suspended Hip Thrust",
    "Suspended Triceps Press",
    "Bosu Ball Push-Up",
    "Single-Leg Balance",
    "Half-kneeling Dumbbell Shoulder Press",
    "Ice Skater",
    "Suitcase Dumbbell Carry",
    "Yates Row",
    "Split Squat With Kettlebells",
    "Burpee Pull-Up",
    "Negative Pull-Up",
    "Hand Release Push-Up",
    "Wall Walk",
    "Dumbbell Clean And Jerk",
    "Walking Lunge With Overhead Weight",
    "Waiter's Carry",
    "High Kick",
    "Knee To Chest",
    "Hip Stretch With Twist",
    "Svend Press",
    "Wide-Hands Push-Up",
    "Dive Bomber Push-Up",
    "Front Squat Push Press",
    "Front Squat (Bodybuilder)",
    "Front Squat (Clean Grip)",
    "Single-Leg Squat To Box",
    "Single-Leg Skater Squat",
    "Wall Squat",
    "Pop Squat",
    "Trap Bar Jump",
    "Skin The Cat To Push-Up",
    "Weighted Push-Up",
    "Dumbbell Lunge and Curl",
    "Dumbbell Jump Squat",
    "Svend Press",
    "Wide-Hands Push-Up",
    "Dive Bomber Push-Up",
    "Front Squat Push Press",
    "Front Squat (Bodybuilder)",
    "Front Squat (Clean Grip)",
    "Single-Leg Squat To Box",
    "Single-Leg Skater Squat",
    "Wall Squat",
    "Pop Squat",
    "Trap Bar Jump",
    "Skin The Cat To Push-Up",
    "Weighted Push-Up",
    "Dumbbell Lunge and Curl",
    "Dumbbell Jump Squat",
    "Lateral Hop Holding Dumbbells",
    "Dumbbell Front Squat",
    "Lateral Hop 4 Times To Sprint",
    "L-Sit Chin-Up",
    "Body Triceps Press Using Flat Bench",
    "Russian Bar Dip",
    "Wide-Stance Jump Squat To Close-Stance",
    "Bar Push-Up Smith Machine",
    "Burpee To Medicine Ball Press",
    "V-Sit Lying Down Ball Throw And Catch",
    "Superman Push-Up",
    "Barbell Front-To-Back Squat",
    "Seated Straight-Bar Curl Superset",
    "Hammer Plate Curl",
    "Dumbbell Pistol Squat",
    "Svend Press",
    "Wide-Hands Push-Up",
    "Dive Bomber Push-Up",
    "Front Squat Push Press",
    "Front Squat (Bodybuilder)",
    "Front Squat (Clean Grip)",
    "Single-Leg Squat To Box",
    "Single-Leg Skater Squat",
    "Wall Squat",
    "Pop Squat",
    "Trap Bar Jump",
    "Skin The Cat To Push-Up",
    "Weighted Push-Up",
    "Dumbbell Lunge and Curl",
    "Dumbbell Jump Squat",
    "Dumbbell Alternating Lunge",
    "Side Lunge Touching Heel",
    "Jumping Knee Up Down",
    "Burpee Tuck Jump",
    "Wall Sprawl",
    "Wall Mountain Climber",
    "Full Moon",
    "Medicine Ball Ninja",
    "Kettlebell Fire Feet",
    "Reverse Burpee",
    "Feet-Elevated TRX Push-Up",
    "Crab Toe Touch",
    "Kettlebell Squat Clean",
    "Burpee Box Jump",
    "Svend Press",
    "Wide-Hands Push-Up",
    "Dive Bomber Push-Up",
    "Front Squat Push Press",
    "Front Squat (Bodybuilder)",
    "Front Squat (Clean Grip)",
    "Single-Leg Squat To Box",
    "Single-Leg Skater Squat",
    "Wall Squat",
    "Pop Squat",
    "Trap Bar Jump",
    "Skin The Cat To Push-Up",
    "Weighted Push-Up",
    "Dumbbell Lunge and Curl",
    "Dumbbell Jump Squat",
    "Lateral Hop Holding Dumbbells",
    "Dumbbell Front Squat",
    "Lateral Hop 4 Times To Sprint",
    "L-Sit Chin-Up",
    "Body Triceps Press Using Flat Bench",
    "Russian Bar Dip",
    "Wide-Stance Jump Squat To Close-Stance",
    "Bar Push-Up Smith Machine",
    "Burpee To Medicine Ball Press",
    "V-Sit Lying Down Ball Throw And Catch",
    "Superman Push-Up",
    "Barbell Front-To-Back Squat",
    "Seated Straight-Bar Curl Superset",
    "Hammer Plate Curl",
    "Dumbbell Pistol Squat",
    "Svend Press",
    "Wide-Hands Push-Up",
    "Dive Bomber Push-Up",
    "Front Squat Push Press",
    "Front Squat (Bodybuilder)",
    "Front Squat (Clean Grip)",
    "Single-Leg Squat To Box",
    "Single-Leg Skater Squat",
    "Wall Squat",
    "Pop Squat",
    "Trap Bar Jump",
    "Skin The Cat To Push-Up",
    "Weighted Push-Up",
    "Dumbbell Lunge and Curl",
    "Dumbbell Jump Squat",
    "Svend Press",
    "Wide-Hands Push-Up",
    "Dive Bomber Push-Up",
    "Front Squat Push Press",
    "Front Squat (Bodybuilder)",
    "Front Squat (Clean Grip)",
    "Single-Leg Squat To Box",
    "Single-Leg Skater Squat",
    "Wall Squat",
    "Pop Squat",
    "Trap Bar Jump",
    "Skin The Cat To Push-Up",
    "Weighted Push-Up",
    "Dumbbell Lunge and Curl",
    "Dumbbell Jump Squat",
    "Lateral Hop Holding Dumbbells",
    "Dumbbell Front Squat",
    "Lateral Hop 4 Times To Sprint",
    "L-Sit Chin-Up",
    "Body Triceps Press Using Flat Bench",
    "Russian Bar Dip",
    "Wide-Stance Jump Squat To Close-Stance",
    "Bar Push-Up Smith Machine",
    "Burpee To Medicine Ball Press",
    "V-Sit Lying Down Ball Throw And Catch",
    "Superman Push-Up",
    "Barbell Front-To-Back Squat",
    "Seated Straight-Bar Curl Superset",
    "Hammer Plate Curl",
    "Dumbbell Pistol Squat"
])


def create_excercises(apps, schema_editor):
    Excercise = apps.get_model('training_logger', 'Excercise')
    excercises = [Excercise(name=e) for e in EXCERCISES]
    Excercise.objects.bulk_create(excercises)

class Migration(migrations.Migration):

    dependencies = [
        ('training_logger', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_excercises),
    ]
