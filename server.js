const express = require("express");
const cors = require("cors");
const Joi = require("joi");
const app = express();

const corsOptions = {
    origin:'https://csce242project-z84c.onrender.com',
    methods:'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization'
};

app.use(cors(corsOptions));
app.use(express.static("public"));

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const records = [

    
      
            {
                "record_id":"01",
                "record_title":"Most Points All-Time NBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-pts-img-nba.jpg",
                "record_description":"This record is held by the player has acrewd the most points total throughout their career. This record has always been a part of basketball but was only offcial tracked stating in 1970.",

                        "record_holder":"Lebron James - 40,474",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/LeBron-James.jpg",
                        "record_holder_desc":"LeBron James made history in 2023 by surpassing Kareem Abdul-Jabbars long-standing record for the most points in NBA history, a feat that had remained untouched for nearly 30 years. His achievement is a testament to his unparalleled versatility and ability to dominate the game over two decades. Known for his athleticism, basketball IQ, and leadership on the court, LeBron has consistently evolved his playstyle to adapt to the ever-changing dynamics of the league. Whether it was his explosive scoring, playmaking, or defensive impact, LeBrons all-around game made him one of the most complete players in basketball history. Despite reaching this monumental milestone, LeBron remains motivated to continue building his legacy and increasing the scoring gap between himself and future contenders. His longevity and sustained excellence, even after 20 years in the league, suggest that he is far from finished. As he continues to compete at an elite level with no signs of slowing down, LeBron aims to push the boundaries of what is possible in professional basketball, ensuring that his record, like Kareem's before him, may stand for many years to come.",
                        "prev_record_holder":"Kareen Abdul-Jabar - 38,387",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/kareem-abdul-jabar.jpg",
                        "prev_record_holder_desc":"Kareem Abdul-Jabbar, renowned for his signature skyhook shot, became the NBAs all-time leading scorer in 1984, surpassing Wilt Chamberlain's record. His dominance on the court was unmatched, as he maintained this scoring title for nearly four decades. Over his 20-year career, Kareem showcased remarkable consistency and longevity, becoming a central figure for both the Milwaukee Bucks and the Los Angeles Lakers. His ability to evolve his game and remain a top scorer into his late 30s speaks to his work ethic and basketball intelligence. Beyond scoring, Kareem's impact was felt in all facets of the game. He was a complete player, earning six MVP awards, the most by any player in NBA history, and leading his teams to six NBA championships. His leadership, defensive prowess, and playmaking abilities were pivotal in the success of both the Bucks, where he won his first championship, and the Lakers, where he added five more titles. Off the court, Kareem was also a trailblazer, using his platform to advocate for civil rights and social justice, further solidifying his legacy as not just a basketball legend but a cultural icon."
            }
        ,
     
            {
                "record_id":"02",
                "record_title":"Most Steals All-Time NBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-stls-img-nba.jpg",
                "record_description":"This record is held by the player with the most steals in their career. THis player is the shiftiest and has gained their team mnay a turnover in their day.",

            
                        "record_holder":"John Stockton - 3,265",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/john-stockton.jpg",
                        "record_holder_desc":"John Stockton holds the NBA's all-time steals record, a testament to his defensive prowess and incredible basketball IQ. Over his 19-year career with the Utah Jazz, Stockton established himself as one of the greatest point guards in history, not only because of his playmaking but also his ability to disrupt opponents' offenses. His record of 3,265 steals, far ahead of the nearest competitor, reflects his quick hands, anticipation, and tireless work ethic on the defensive end. Stockton's combination of leadership, precision passing, and defensive intensity made him a formidable force and a model of consistency throughout his career.",
                        "prev_record_holder":"Jason Kidd - 2,684",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/jason-kidd.jpg",
                        "prev_record_holder_desc":"Jason Kidd ranks second in NBA history for all-time steals, showcasing his defensive brilliance and court awareness over a stellar 19-year career. Known for his tenacity and high basketball IQ, Kidd amassed 2,684 steals, placing him just behind John Stockton. His ability to read passing lanes, anticipate plays, and pressure ball handlers made him a nightmare for opposing offenses. Kidd’s defensive skills, combined with his exceptional playmaking and rebounding abilities as a point guard, cemented his legacy as one of the most well-rounded and impactful players in NBA history."
                
            }
        ,
       
            {
                "record_id":"03",
                "record_title":"Most Blocks All-Time NBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-blks-img-nba.jpg",
                "record_description":"This record is held by the player who has acrewed the most blocks throgout their career. Blocking is one of the hardes parts of basketball as you have to predict where the offense is going to shoot or dunk.",
                
                        "record_holder":"Hakeem Olajuwon - 3,830",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/hakeem-olajuwon.jpg",
                        "record_holder_desc":"Hakeem Olajuwon holds the NBA's all-time record for blocks, solidifying his reputation as one of the greatest defenders in basketball history. Over his 18-year career, Olajuwon recorded an astounding 3,830 blocks, showcasing his impeccable timing, athleticism, and defensive instincts. His ability to protect the rim made him a dominant force on the defensive end, intimidating opponents and altering countless shots. Known for his footwork and agility, Olajuwons defensive prowess complemented his offensive mastery, particularly with his famous Dream Shake in the post, making him one of the most complete players the game has ever seen.",
                        "prev_record_holder":"Dikembe Mutombo - 3,289",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/dikembe-mutombo.jpg",
                        "prev_record_holder_desc":"Dikembe Mutombo ranks second in NBA history for all-time blocks, known for his dominant shot-blocking ability and defensive presence. Over his 18-year career, Mutombo accumulated 3,289 blocks, making him a fearsome rim protector and a key figure on the defensive end for every team he played on. His signature finger-wag after rejecting shots became iconic, symbolizing his relentless defense and ability to alter games by shutting down the paint. Mutombo's imposing size, timing, and instincts made him one of the most feared defenders in the league, earning him four NBA Defensive Player of the Year awards and a lasting legacy as one of the game's premier shot blockers."
                 
            }
        ,
      
            {
                "record_id":"04",
                "record_title":"Most TDs All-Time NBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-TD-img-nba.jpg",
                "record_description":"This record encompasses the player that has attained the most triple double games in their career. This means that they got double digits in three different stats througout the course of the game.",
                
                        "record_holder":"Russell Westbrook - 199",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/russell-westbrook.jpg",
                        "record_holder_desc":"Russell Westbrook holds the NBA's all-time record for triple-doubles, solidifying his place as one of the most dynamic and versatile players in basketball history. With 198 triple-doubles (and counting) throughout his career, Westbrook surpassed Oscar Robertson’s long-standing record in 2021. Known for his relentless energy, explosive athleticism, and all-around impact, Westbrook consistently contributes in scoring, rebounding, and playmaking. His ability to fill the stat sheet across all categories redefined the triple-double, making it a regular feature of his game. Westbrook’s unique blend of speed, power, and competitive spirit has reshaped expectations for what a point guard can achieve, cementing his legacy as the ultimate triple-double king in NBA history.",
                        "prev_record_holder":"Oscar Robertson - 181",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/osacr-robertson.jpg",
                        "prev_record_holder_desc":"Oscar Robertson ranks second in NBA history for all-time triple-doubles, a testament to his exceptional all-around ability and versatility on the court. Nicknamed The Big O, Robertson recorded 181 triple-doubles over his illustrious 14-year career, a feat that once stood as the most in NBA history for decades. His ability to score, rebound, and facilitate the offense with equal prowess made him one of the most complete players the league has ever seen. Robertson was a trailblazer in showing the value of a well-rounded game, and his dominance as a triple-double machine helped redefine what it meant to be an elite point guard in the NBA."
                  
            }
        ,
     
            {
                "record_id":"05",
                "record_title":"Most Rebounds All-Time NBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-rebnd-img-nba.jpg",
                "record_description":"This record shows the player with the most amount of rebounds in their career. Some of the best defenders in the history of the sport have battled for this record.",
                
                        "record_holder":"Wilt Chamberlin - 23,924",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/wilt-chamberlin.jpg",
                        "record_holder_desc":"Wilt Chamberlain holds the NBA's all-time record for rebounds, a testament to his unmatched dominance and physicality on the court. Over his 14-year career, Chamberlain grabbed an astonishing 23,924 rebounds, a record that has stood the test of time. Known for his size, strength, and athleticism, Chamberlain controlled the glass like no other player, often pulling down rebounds at will against multiple defenders. His ability to dominate both ends of the court, particularly in securing defensive and offensive boards, made him a force of nature. Chamberlain’s rebounding record, along with his legendary scoring feats, solidified his status as one of the greatest and most unstoppable players in NBA history.",
                        "prev_record_holder":"Bill Russell - 21,620",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/bill-russell.jpg",
                        "prev_record_holder_desc":"Bill Russell ranks second in NBA history for all-time rebounds, with a total of 21,620 over his legendary 13-year career. Known for his exceptional defensive skills and tenacity, Russell was a master of positioning and timing, which allowed him to dominate the boards despite not being the biggest player on the court. His ability to grab crucial rebounds, particularly in high-pressure situations, was instrumental in leading the Boston Celtics to 11 NBA championships. Russell’s rebounding prowess, combined with his leadership and defensive brilliance, made him one of the most impactful and influential players in the history of the game."
                  
            }
        ,
    
            {
                "record_id":"06",
                "record_title":"Most Assists All-Time NBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-ass-img-nba.jpg",
                "record_description":"This record is given to the player with the most assists throughout their career. This player is one of the best teamates of all time as they give up the glory of scoring to help their team.",
               
                        "record_holder":"John Stockton - 15,806",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/john-stockton.jpg",
                        "record_holder_desc":"John Stockton holds the NBA's all-time record for assists, an extraordinary achievement that highlights his status as the greatest playmaker in basketball history. Over his 19-year career, Stockton dished out an unparalleled 15,806 assists, a record that stands far above any other player. Known for his pinpoint passing and incredible basketball IQ, Stockton had an uncanny ability to find his teammates in perfect scoring positions, particularly his long-time pick-and-roll partner Karl Malone. His consistency, durability, and leadership helped the Utah Jazz become perennial contenders. Stockton's assist record, combined with his steals record, firmly establishes him as one of the most elite and unselfish point guards to ever play the game.",
                        "prev_record_holder":"Jason Kidd - 12,091",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/jason-kidd.jpg",
                        "prev_record_holder_desc":"Jason Kidd ranks second in NBA history for all-time assists, with an impressive 12,091 assists over his 19-year career. Known for his extraordinary court vision and basketball IQ, Kidd was a masterful playmaker who could orchestrate an offense with precision. His ability to find open teammates and make difficult passes look effortless made him one of the greatest point guards in the game’s history. Kidd’s leadership and passing skills were key to the success of every team he played for, and his ranking as second in assists cements his legacy as one of the NBA’s most prolific and unselfish floor generals."
                 
            }
        ,
  
            {
                "record_id":"07",
                "record_title":"Most Points All-Time WNBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-pts-img-wnba.jpg",
                "record_description":"This record is held by the player has acrewd the most points total throughout their career. This record has always been a part of basketball but was only offcial tracked stating in 1970.",

                        "record_holder":"Diana Taurasi - 10,646",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/diana-taurasi.jpg",
                        "record_holder_desc":"Diana Taurasi, often hailed as one of the greatest basketball players of all time, holds the record for the most points scored in WNBA history. Her incredible scoring ability, combined with her versatility on the court, has allowed her to accumulate over 9,000 points throughout her career. Taurasi's journey to this milestone has been marked by numerous accolades, including multiple championships and MVP awards, showcasing her skill and determination. Her record not only highlights her individual talent but also her significant impact on the game, inspiring countless players and fans alike. As she continues to play, Taurasi’s legacy only grows, solidifying her place in WNBA history.",
                        "prev_record_holder":"Tina Charles - 7,696",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/tina-charles.jpg",
                        "prev_record_holder_desc":"Tina Charles is a standout figure in the WNBA, holding the record for the second most points scored in league history. With her powerful presence in the paint and exceptional scoring prowess, Charles has consistently demonstrated her ability to dominate games throughout her career. Accumulating over 7,000 points, she has earned multiple All-Star selections and MVP honors, reflecting her remarkable talent and hard work. Known for her versatility as both a forward and center, Charles has not only contributed to her teams' success but has also played a crucial role in elevating the visibility of women's basketball. As she continues to compete, her legacy as one of the league's all-time greats is firmly established, inspiring future generations of players."
                   
            }
        ,
     
            {
                "record_id":"08",
                "record_title":"Most Steals All-Time WNBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-stls-img-wnba.jpg",
                "record_description":"This record is held by the player with the most steals in their career. THis player is the shiftiest and has gained their team mnay a turnover in their day.",

                        "record_holder":"Tamika Catchings - 1,074",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/tamika-catchings.jpg",
                        "record_holder_desc":"Tamika Catchings, a legendary figure in women's basketball, holds the all-time record for the most steals in WNBA history, a testament to her incredible defensive prowess and relentless work ethic. Over her illustrious career, which spanned from 2002 to 2016 with the Indiana Fever, Catchings amassed a staggering 1,050 steals, a feat that highlights her ability to anticipate plays and disrupt opposing offenses. Her defensive skills, combined with her leadership and versatility on the court, helped the Fever secure a WNBA championship in 2012 and earned her numerous accolades, including five Defensive Player of the Year awards. Catchings' record for steals not only showcases her exceptional talent but also cements her legacy as one of the greatest players in WNBA history, inspiring future generations of athletes to excel both defensively and offensively.",
                        "prev_record_holder":"Ticha Penicheiro - 764",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/ticha-penicheiro.jpg",
                        "prev_record_holder_desc":"Ticha Penicheiro is renowned for her defensive prowess, holding the record for the second most steals in WNBA history. Known for her quick hands and exceptional anticipation, Penicheiro was a relentless defender who could disrupt opposing offenses with her ability to read the game. Throughout her illustrious career, she racked up over 700 steals, showcasing her skill in turning defense into offense. Her tenacity and basketball IQ not only made her a formidable presence on the court but also set a standard for defensive excellence in the league. Penicheiro's impact on the game is felt in her numerous accolades and the inspiration she provides to aspiring players, proving that defense is just as crucial as scoring in basketball."
                    
            }
        ,
    
            {
                "record_id":"09",
                "record_title":"Most Blocks All-Time WNBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-blks-img-wnba.jpg",
                "record_description":"This record is held by the player who has acrewed the most blocks throgout their career. Blocking is one of the hardes parts of basketball as you have to predict where the offense is going to shoot or dunk.",
                
                        "record_holder":"Margo Dydek - 877",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/margo-dydek.jpg",
                        "record_holder_desc":"Margo Dydek, a dominant force in women's basketball, holds the WNBA record for the most career blocks, solidifying her reputation as one of the league's greatest defensive players. Over her career from 1998 to 2008, Dydek recorded an astonishing 877 blocks, a testament to her incredible height of 7 feet 2 inches and her remarkable timing and anticipation on the court. Her shot-blocking ability not only deterred opponents but also energized her teammates and fans alike. Dydek played the majority of her career with the Utah Starzz and the San Antonio Silver Stars, where she consistently showcased her defensive prowess. Her record for blocks highlights her impact on the game, emphasizing the importance of defense in achieving success. Margo Dydek's legacy as a shot-blocking icon continues to inspire future generations of players, reminding them of the crucial role defense plays in basketball.",
                        "prev_record_holder":"Lisa Leslie - 822",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/lisa-leslie.jpg",
                        "prev_record_holder_desc":"Lisa Leslie, a trailblazer in women's basketball, holds the record for the second most career blocks in WNBA history, a reflection of her exceptional defensive skills and dominance in the paint. Over her illustrious career from 1997 to 2009, Leslie recorded 877 blocks, showcasing her incredible height, athleticism, and timing that allowed her to effectively protect the rim. As a key player for the Los Angeles Sparks, she was known for her shot-blocking ability, which often shifted the momentum of games and frustrated opposing teams. Leslie's defensive prowess complemented her offensive talents, making her a versatile threat on the court. Her impressive block total not only highlights her individual achievements but also cements her legacy as one of the greatest players in WNBA history, inspiring future generations of athletes to excel in both offensive and defensive aspects of the game."
                   
            }
        ,
        
            {
                "record_id":"10",
                "record_title":"Most TDs All-Time WNBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-TD-img-wnba.jpg",
                "record_description":"This record encompasses the player that has attained the most triple double games in their career. This means that they got double digits in three different stats througout the course of the game.",
                
                        "record_holder":"Alyssa Thomas -15",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/alyssa-thomas.jpg",
                        "record_holder_desc":"Alyssa Thomas has solidified her place in WNBA history by holding the record for the most career triple-doubles in the league. Known for her extraordinary versatility and relentless playing style, Thomas has consistently demonstrated her ability to impact the game in multiple ways, whether it’s through scoring, rebounding, or facilitating for her teammates. As a key player for the Connecticut Sun, she has achieved an impressive number of triple-doubles, showcasing her exceptional court vision and basketball IQ. Thomas's record highlights not only her individual talent but also her commitment to team success, as she often elevates her teammates’ performances. Her accomplishments have redefined expectations for forwards in the league, inspiring future generations of players to embrace the all-around game and strive for excellence in every aspect of their performance.",
                        "prev_record_holder":"Sabrina Ionescu - 3",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/sabrina-ionescu.jpg",
                        "prev_record_holder_desc":"Sabrina Ionescu has emerged as one of the most dynamic talents in the WNBA, holding the record for the second most triple-doubles in league history. Since her debut in 2020, Ionescu has showcased her exceptional versatility and playmaking ability, recording multiple triple-doubles that highlight her capacity to excel in scoring, rebounding, and assisting. Her basketball IQ, combined with her skill set, allows her to impact the game in various ways, making her a formidable presence on the court. Ionescu's record for triple-doubles not only underscores her individual brilliance but also reflects her leadership and ability to elevate her teammates. As she continues to develop her game, her achievements are paving the way for future generations of players, illustrating the significance of well-rounded performances in achieving success in basketball."
                    
            }
        ,
       
            {
                "record_id":"11",
                "record_title":"Most Rebounds All-Time WNBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-rebnd-img-wnba.jpg",
                "record_description":"This record shows the player with the most amount of rebounds in their career. Some of the best defenders in the history of the sport have battled for this record.",
                
                        "record_holder":"Tina Charles - 4,007",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/tina-charles.jpg",
                        "record_holder_desc":"Tina Charles, a dominant force in women's basketball, holds the record for the most career rebounds in WNBA history, a testament to her exceptional skills as a rebounder and her relentless work ethic on the court. Throughout her illustrious career, which began in 2010, Charles has consistently showcased her ability to secure the ball both offensively and defensively, amassing an impressive total of over 3,500 rebounds. Standing at 6 feet 4 inches tall, her combination of size, strength, and timing allows her to excel in contested situations, making her one of the most formidable post players in the league. Charles's rebounding prowess not only emphasizes her individual talent but also underscores her impact on her teams, contributing significantly to their success. Her record for rebounds cements her legacy as one of the greatest players in WNBA history, inspiring future generations of athletes to prioritize hustle and determination in their own games.",
                        "prev_record_holder":"Sylvia Fowles - 4,006",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/sylvia-fowles.jpg",
                        "prev_record_holder_desc":"Sylvia Fowles is celebrated as one of the greatest centers in WNBA history, holding the record for the second most career rebounds in the league. Over her remarkable career, which began in 2008 and spanned multiple teams, including the Chicago Sky and Minnesota Lynx, Fowles has consistently demonstrated her exceptional rebounding ability, amassing over 3,500 rebounds. Standing at 6 feet 6 inches, her combination of height, strength, and impeccable timing allows her to dominate the boards, securing crucial possessions for her team. Fowles's rebounding prowess not only highlights her individual skill set but also underscores her role as a leader on the court, contributing to her teams’ success in both the regular season and playoffs. Her impressive rebounding total serves as an inspiration for aspiring players, exemplifying the importance of tenacity and determination in achieving greatness in basketball."
                    
            }
        ,
        
            {
                "record_id":"12",
                "record_title":"Most Assists All-Time WNBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-ass-img-wnba.jpg",
                "record_description":"This record is given to the player with the most assists throughout their career. This player is one of the best teamates of all time as they give up the glory of scoring to help their team.",
                
                        "record_holder":"Sue Bird - 3,234",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/sue-bird.jpg",
                        "record_holder_desc":"Sue Bird, a legendary figure in women's basketball, holds the record for the most career assists in WNBA history, a remarkable achievement that underscores her unparalleled playmaking abilities and basketball intelligence. Over her illustrious 21-year career, primarily with the Seattle Storm, Bird amassed over 3,500 assists, showcasing her exceptional court vision, precision passing, and ability to create scoring opportunities for her teammates. Known for her calm demeanor and leadership on the court, Bird consistently delivered clutch performances, guiding her team to four WNBA championships and earning numerous accolades along the way, including multiple All-Star selections. Her record for assists not only highlights her individual talent but also reflects her commitment to elevating her teammates' performances, making her one of the most respected and influential players in the history of the league. As she retires, Bird leaves behind a legacy that inspires future generations of athletes to embrace the art of playmaking and the importance of teamwork in basketball.",
                        "prev_record_holder":"Courtney-Vandersloot - 2,850",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/courtney-vandersloot.jpg",
                        "prev_record_holder_desc":"Courtney Vandersloot has established herself as one of the premier playmakers in WNBA history, holding the record for the second most assists of all time in the league. Since entering the league in 2011, Vandersloot has been known for her exceptional court vision, precision passing, and ability to orchestrate her team's offense effectively. Her remarkable skill set has allowed her to accumulate over 2,000 assists, showcasing her ability to create scoring opportunities for her teammates. Playing primarily for the Chicago Sky, Vandersloot has consistently demonstrated her leadership on the court, often stepping up in crucial moments to deliver key plays. Her impressive assist total not only reflects her individual talent but also emphasizes her commitment to team success, making her a vital asset to any roster. As she continues to build her legacy, Vandersloot's accomplishments inspire future generations of players to prioritize teamwork and playmaking in their games."
                    
            }
        ,
       
            {
                "record_id":"13",
                "record_title":"Most Points All-Time FIBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-pts-img-fiba.jpg",
                "record_description":"This record is held by the player has acrewd the most points total throughout their career. This record has always been a part of basketball but was only offcial tracked stating in 1970.",

                        "record_holder":"Pau Gasol - 1,183",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/pau-gasol.jpg",
                        "record_holder_desc":"Pau Gasol, one of the greatest international basketball players in history, holds the record for the most points scored all-time in FIBA competition. As the centerpiece of Spain’s national team for over two decades, Gasol's scoring ability, versatility, and basketball IQ have made him an unstoppable force on the global stage. With his exceptional post play, mid-range shooting, and leadership, Gasol has led Spain to numerous championships, including two EuroBasket titles and Olympic medals. His scoring record in FIBA reflects his consistency and dominance in international play, where he has often been the go-to player in critical moments. Gasol’s legacy in international basketball is unparalleled, and his impact on the game is celebrated worldwide, inspiring players across generations.",
                        "prev_record_holder":"Tony Parker - 1,104",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/tony-parker.jpg",
                        "prev_record_holder_desc":"Tony Parker, one of the most iconic international basketball players, holds the record for the second most points scored all-time in FIBA competition. Known for his quickness, crafty playmaking, and lethal scoring ability, Parker was a dominant force for the French national team. Throughout his FIBA career, he consistently led France with his dynamic offensive game, helping them achieve significant success, including a European Championship in 2013. Parker's scoring record in FIBA competition is a testament to his longevity and his ability to perform on the biggest international stages. His achievements have solidified his place as one of the greatest European players, inspiring a new generation of talent to follow in his footsteps."
                    
            }
        ,
     
            {
                "record_id":"14",
                "record_title":"Most Steals All-Time FIBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-stls-img-fiba.jpg",
                "record_description":"This record is held by the player with the most steals in their career. THis player is the shiftiest and has gained their team mnay a turnover in their day.",

                        "record_holder":"Rudy Fernandez - 52",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/rudy-fernandez.jpg",
                        "record_holder_desc":"Rudy Fernández, a defensive specialist and versatile guard, holds the record for the most steals all-time in FIBA competition. Known for his quick hands, sharp instincts, and relentless energy on defense, Fernández has been a key figure for Spain's national team for many years. His ability to anticipate passes and disrupt opposing offenses has made him a defensive powerhouse in international play, often turning steals into fast-break opportunities for his team. Fernández's record for steals reflects not only his individual talent but also his commitment to the team’s success, as his defensive efforts have helped Spain secure multiple EuroBasket championships and Olympic medals. His legacy as one of FIBA's best defenders is firmly established, and his impact continues to inspire players who prioritize defense and hustle.",
                        "prev_record_holder":"Ricky Rubio - 50",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/ricky-rubio.jpg",
                        "prev_record_holder_desc":"Ricky Rubio, known for his exceptional court vision and defensive tenacity, holds the record for the second most steals all-time in FIBA competition. From a young age, Rubio displayed a knack for disrupting opposing offenses, using his quick hands and sharp instincts to intercept passes and create fast-break opportunities for his team. His defensive presence has been a crucial part of Spain's national team success, helping them win multiple international titles, including a FIBA World Cup and EuroBasket championships. Rubio's ability to read the game and anticipate plays has made him one of the most feared defenders in international basketball. His ranking as second all-time in FIBA steals solidifies his status as an elite defender and playmaker, contributing immensely to Spain’s dominance on the world stage."
                   
            }
        ,
       
            {
                "record_id":"15",
                "record_title":"Most Blocks All-Time FIBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-blks-img-fiba.jpg",
                "record_description":"This record is held by the player who has acrewed the most blocks throgout their career. Blocking is one of the hardes parts of basketball as you have to predict where the offense is going to shoot or dunk.",
               
                        "record_holder":"Pau Gasol - 47",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/pau-gasol.jpg",
                        "record_holder_desc":"Pau Gasol, widely regarded as one of the most skilled and versatile big men in basketball, holds the record for the most blocks all-time in FIBA competition. Known for his incredible basketball IQ, length, and timing, Gasol has been a dominant force on both ends of the court for Spain’s national team. His shot-blocking ability, combined with his defensive leadership, has anchored Spain's defense in numerous international tournaments, helping them to secure multiple EuroBasket titles, World Cup victories, and Olympic medals. Gasol's record for the most blocks in FIBA reflects his consistency and presence as a rim protector, showcasing his ability to alter the course of games with his defensive efforts. His legacy in international basketball is defined not just by his scoring, but by his all-around game, including his ability to protect the paint.",
                        "prev_record_holder":"Andrei Kirilenko - 35",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/andrei-kirilenko.jpg",
                        "prev_record_holder_desc":"Andrei Kirilenko, a towering presence on the court known for his defensive versatility, holds the record for the second most blocks all-time in FIBA competition. With his extraordinary athleticism, long wingspan, and impeccable timing, Kirilenko was a nightmare for opposing players, consistently protecting the rim and altering shots. As a key figure for the Russian national team, his shot-blocking ability played a pivotal role in their defensive success during numerous international tournaments. Kirilenko's elite defense helped Russia secure significant achievements, including a EuroBasket title and an Olympic bronze medal. His record for blocks in FIBA competition highlights his dominance on the defensive end, cementing his legacy as one of the best shot-blockers and defenders in international basketball history."
                    
            }
        ,
    
            {
                "record_id":"16",
                "record_title":"Most TDs All-Time FIBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-TD-img-fiba.jpg",
                "record_description":"This record encompasses the player that has attained the most triple double games in their career. This means that they got double digits in three different stats througout the course of the game.",
                
                        "record_holder":"Lebron James - 2",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/LeBron-James.jpg",
                        "record_holder_desc":"LeBron James, known for his all-around game and versatility, does not hold the record for the most triple-doubles all-time in FIBA competition, as triple-doubles are rare in international play and not a common statistic tracked in FIBA. However, during his time representing Team USA, LeBron showcased his ability to excel in every aspect of the game, whether it was scoring, rebounding, or playmaking. His unique combination of size, skill, and basketball IQ allowed him to be a constant triple-double threat in any game he played. LeBron's contributions to Team USA led to multiple Olympic gold medals and FIBA World Championship successes, solidifying his place as one of the greatest international players, even without specific triple-double records.",
                        "prev_record_holder":"Nikola Jokic - 1",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/nikola-jokic.jpg",
                        "prev_record_holder_desc":"Nikola Jokić, known for his extraordinary playmaking and versatility as a center, does not officially hold the record for the second most triple-doubles in FIBA competition. However, his unique ability to contribute across all aspects of the game—scoring, rebounding, and especially his remarkable passing—makes him a constant triple-double threat in any competition, whether it’s for the NBA or for the Serbian national team. Jokić’s court vision and basketball IQ are unparalleled for a big man, and his contributions have helped Serbia remain a powerhouse in international basketball. Though triple-doubles are uncommon in FIBA play, Jokić's all-around brilliance consistently stands out, making him one of the most impactful players on the world stage. His performances in major tournaments like the FIBA World Cup and the Olympics further cement his status as a global basketball icon."
                   
            }
        ,
       
            {
                "record_id":"17",
                "record_title":"Most Rebounds All-Time FIBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-rebnd-img-fiba.jpg",
                "record_description":"This record shows the player with the most amount of rebounds in their career. Some of the best defenders in the history of the sport have battled for this record.",
                
                        "record_holder":"Hamed Haddadi - 333",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/hamed-haddadi.jpg",
                        "record_holder_desc":"Hamed Haddadi, the towering center from Iran, holds the record for the most blocks all-time in FIBA competition. Known for his incredible shot-blocking ability, Haddadi has been a dominant defensive force on the international stage for many years. Standing at 7'2, his imposing presence in the paint has allowed him to consistently alter and reject shots, making it difficult for opponents to score around the rim. As the centerpiece of Iran’s national team, Haddadi’s defensive prowess has been a key factor in the team's success in Asian competitions, including multiple FIBA Asia Cup titles. His record for the most blocks in FIBA showcases his elite rim protection and cements his legacy as one of the best defensive players in international basketball.",
                        "prev_record_holder":"Luis Scola - 311",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/luis-scola.jpg",
                        "prev_record_holder_desc":"Luis Scola is celebrated for his longevity and versatility in international basketball, but he does not hold the record for the second most blocks all-time in FIBA competition. While Scola is primarily known for his scoring ability, leadership, and rebounding skills, he was not typically recognized as a dominant shot-blocker. His contributions to the Argentine national team, however, are immense, as he played a crucial role in leading Argentina to numerous international successes, including an Olympic gold medal in 2004 and a FIBA World Cup silver in 2019. Scola’s legacy is defined by his all-around game, leadership, and consistent excellence over two decades of international competition, making him one of the greatest players in FIBA history."
                   
            }
        ,
   
            {
                "record_id":"18",
                "record_title":"Most Assists All-Time FIBA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-ass-img-fiba.jpg",
                "record_description":"This record is given to the player with the most assists throughout their career. This player is one of the best teamates of all time as they give up the glory of scoring to help their team.",
               
                        "record_holder":"Ricky Rubio - 214",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/ricky-rubio.jpg",
                        "record_holder_desc":"Ricky Rubio, renowned for his exceptional playmaking abilities and vision on the court, holds the record for the most assists all-time in FIBA competition. With his incredible basketball IQ and skillful passing, Rubio has consistently demonstrated his ability to create scoring opportunities for his teammates throughout his international career. Representing Spain, he has been instrumental in the team's success, contributing to their gold medal at the 2006 FIBA World Championship and multiple EuroBasket titles. His record for assists in FIBA highlights not only his individual talent but also his unselfishness and commitment to team play, solidifying his legacy as one of the greatest playmakers in international basketball history. Rubio's ability to control the pace of the game and facilitate offensive flow has made him a crucial asset for the Spanish national team, inspiring future generations of players with his skill and vision.",
                        "prev_record_holder":"Marcelinho Huertas - 182",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/marce-h.jpg",
                        "prev_record_holder_desc":"Marcelinho Huertas, the talented Brazilian point guard, holds the record for the second most assists all-time in FIBA competition, solidifying his status as one of the premier playmakers in international basketball. Known for his exceptional court vision, creativity, and ability to orchestrate the offense, Huertas has consistently demonstrated his skills on the global stage while representing Brazil. His precise passing and knack for finding open teammates have been key to Brazil's success in various international tournaments, including the FIBA World Cup and the Olympics. Huertas's record for assists reflects his unselfish playing style and dedication to team success, showcasing his ability to elevate those around him. With a career spanning over a decade at the international level, Huertas has not only made significant contributions on the court but has also inspired future generations of Brazilian players with his leadership and skill."
                    
            }
        ,
       
            {
                "record_id":"19",
                "record_title":"Most Points All-Time NCAA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-pts-img-ncaa.jpg",
                "record_description":"This record is held by the player has acrewd the most points total throughout their career. This record has always been a part of basketball but was only offcial tracked stating in 1970.",

                        "record_holder":"Pete Maravich - 3,667",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/pete-maravich.jpg",
                        "record_holder_desc":"Pete Maravich, often regarded as one of the greatest basketball players of all time, holds the record for the most points scored in NCAA Division I history, with an astounding total of 3,667 points during his college career at Louisiana State University (LSU) from 1967 to 1970. Maravich achieved this remarkable feat in just three seasons, as the NCAA did not allow freshmen to play varsity basketball at the time. Known for his dazzling ball-handling skills, exceptional shooting ability, and creativity on the court, Maravich revolutionized the game with his flashy style and high-scoring performances. He averaged an unprecedented 44.2 points per game over his college career, a record that still stands today. His impact on the game and ability to score from anywhere on the court made him a legend, and he continues to inspire countless players and fans with his extraordinary legacy in college basketball.",
                        "prev_record_holder":"Antoine Davis - 3,664",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/antoine-davis.jpg",
                        "prev_record_holder_desc":"Antoine Davis, a standout guard from Detroit Mercy, holds the record for the second most points scored all-time in NCAA Division I basketball history. His remarkable scoring ability and offensive prowess allowed him to accumulate over 3,600 points during his college career, placing him just behind the legendary Pete Maravich. Known for his exceptional shooting range, ball-handling skills, and competitive spirit, Davis consistently showcased his talent throughout his four years at Detroit Mercy. He became a prolific scorer, earning numerous accolades and breaking several records along the way. Davis's achievement not only highlights his individual skill but also reflects his dedication to the game, solidifying his legacy as one of the greatest scorers in college basketball history and inspiring future generations of players to strive for excellence."
                   
            }
        ,
       
            {
                "record_id":"20",
                "record_title":"Most Steals All-Time NCAA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-stls-img-ncaa.jpg",
                "record_description":"This record is held by the player with the most steals in their career. THis player is the shiftiest and has gained their team mnay a turnover in their day.",

                        "record_holder":"Jacob Gilyard - 1,175",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/jacob-gilyard.jpg",
                        "record_holder_desc":"Jacob Gilyard, a standout guard from the University of Richmond, holds the record for the most steals all-time in NCAA Division I basketball history, with an impressive total of 1,175 steals throughout his collegiate career. Gilyard's tenacious defensive skills, quick hands, and relentless pursuit of the ball allowed him to excel in creating turnovers and disrupting opposing offenses. Known for his ability to read the game and anticipate plays, he became a formidable defender, consistently leading the nation in steals during his time at Richmond. Gilyard's record-breaking achievement not only highlights his individual talent but also emphasizes the importance of defense in basketball, showcasing how a player's defensive prowess can significantly impact a team's success. His remarkable achievement has earned him recognition as one of the greatest defenders in college basketball history, inspiring future generations of players to prioritize defensive excellence.",
                        "prev_record_holder":"John Linehan - 385",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/john-linehan.jpg",
                        "prev_record_holder_desc":"John Linehan, a former point guard for the University of Rhode Island, holds the record for the second most steals all-time in NCAA Division I basketball history, with an impressive total of 385 steals throughout his collegiate career from 1996 to 2000. Renowned for his tenacious defense, quick reflexes, and relentless work ethic, Linehan was a disruptive force on the court, often pressuring opponents and creating turnovers. His ability to read plays and anticipate passes allowed him to excel in stealing the ball, earning him recognition as one of the best defensive players of his era. Linehan's record underscores the significance of defensive prowess in basketball, showcasing how effective defense can change the dynamics of a game. His legacy continues to inspire young players to focus on their defensive skills and understand the critical role that defense plays in achieving success on the court."
                    
            }
        ,
       
            {
                "record_id":"21",
                "record_title":"Most Blocks All-Time NCAA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-blks-img-ncaa.jpg",
                "record_description":"This record is held by the player who has acrewed the most blocks throgout their career. Blocking is one of the hardes parts of basketball as you have to predict where the offense is going to shoot or dunk.",
              
                        "record_holder":"Jarvis Varnado - 564",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/jarvis-varnado.jpg",
                        "record_holder_desc":"Jarvis Varnado, a standout center for Mississippi State University, holds the record for the most blocks all-time in NCAA Division I basketball history, with an astounding total of 572 blocks during his collegiate career from 2006 to 2010. Known for his exceptional shot-blocking ability, athleticism, and defensive instincts, Varnado became a dominant force in the paint, consistently altering and rejecting shots from opponents. His remarkable defensive prowess earned him numerous accolades, including the SEC Defensive Player of the Year multiple times and recognition as an All-American. Varnado’s record for blocks underscores not only his individual talent but also the crucial role that rim protection plays in basketball, illustrating how a strong defensive presence can shift the momentum of a game. His legacy as one of the greatest shot-blockers in NCAA history continues to inspire future generations of players to focus on their defensive skills and the importance of being a formidable presence in the paint.",
                        "prev_record_holder":"Wojciech Myrda - 535",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/wojciech-myrda.jpg",
                        "prev_record_holder_desc":"Wojciech Myrda, a standout center from Poland, holds the record for the second most blocks all-time in NCAA Division I basketball history, with a remarkable total of 455 blocks during his college career at the University of Nebraska from 1997 to 2001. Known for his imposing size and exceptional shot-blocking ability, Myrda was a dominant presence in the paint, consistently altering opponents' shots and protecting the rim. His combination of athleticism, timing, and defensive awareness made him a formidable force on the court, helping his team excel defensively. Myrda's achievement not only highlights his individual talent but also underscores the importance of rim protection in basketball, illustrating how a strong defensive presence can significantly impact a team's success. His legacy as one of the greatest shot-blockers in NCAA history continues to inspire future generations of players to prioritize defense and strive for excellence in the paint."
                    
            }
        ,
       
            {
                "record_id":"22",
                "record_title":"Most TDs All-Time NCAA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-TD-img-ncaa.jpg",
                "record_description":"This record encompasses the player that has attained the most triple double games in their career. This means that they got double digits in three different stats througout the course of the game.",
               
                        "record_holder":"Kyle Collinsworth - 12",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/kyle-collinsworth.jpg",
                        "record_holder_desc":"Kyle Collinsworth, a former guard for Brigham Young University (BYU), holds the record for the most triple-doubles all-time in NCAA Division I basketball history, achieving an impressive total of 12 triple-doubles during his collegiate career from 2012 to 2016. Known for his versatility, Collinsworth excelled at scoring, rebounding, and playmaking, making him a unique threat on the court. His ability to contribute in multiple areas of the game allowed him to consistently fill up the stat sheet, earning him accolades and recognition as one of the most well-rounded players in college basketball. Collinsworth's record for triple-doubles highlights not only his individual talent but also his impact on the game, demonstrating how a player can influence both the offensive and defensive aspects of play. His legacy continues to inspire aspiring players to develop a well-rounded game and strive for excellence in all facets of basketball.",
                        "prev_record_holder":"Michael Anderson - 10",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/michael-anderson.jpg",
                        "prev_record_holder_desc":"Michael Anderson, a former point guard for La Salle University, holds the record for the second most triple-doubles all-time in NCAA Division I basketball history, with an impressive total of 10 triple-doubles during his collegiate career from 1982 to 1986. Known for his exceptional passing ability, scoring prowess, and rebounding skills, Anderson was a versatile player who could impact the game in multiple ways. His remarkable ability to fill the stat sheet made him a standout in college basketball, as he consistently contributed to his team’s success. Anderson’s record for triple-doubles underscores the importance of a well-rounded skill set in basketball, showcasing how a player can significantly influence both ends of the court. His legacy continues to inspire future generations of players to develop their all-around game and strive for excellence in every aspect of basketball."
                  
            }
        ,
     
            {
                "record_id":"23",
                "record_title":"Most Rebounds All-Time NCAA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-rebnd-img-ncaa.jpg",
                "record_description":"This record shows the player with the most amount of rebounds in their career. Some of the best defenders in the history of the sport have battled for this record.",
                
                        "record_holder":"Tom Gola - 2,201",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/tom-gola.jpg",
                        "record_holder_desc":"Tom Gola, a legendary player for La Salle University, holds the record for the most rebounds all-time in NCAA Division I basketball history, amassing an incredible total of 2,201 rebounds during his collegiate career from 1950 to 1955. Known for his exceptional athleticism, strength, and relentless work ethic, Gola was a dominant force on the boards, consistently outmatching opponents and securing crucial possessions for his team. His rebounding prowess, combined with his scoring ability and playmaking skills, helped lead La Salle to a national championship in 1954. Gola’s remarkable achievement underscores the critical role that rebounding plays in basketball, highlighting how controlling the boards can significantly impact a team's success. His legacy as one of the greatest rebounders in NCAA history continues to inspire future generations of players to prioritize hard work, determination, and a commitment to excellence in their game.",
                        "prev_record_holder":"Joe Holup - 2,030",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/joe-holup.jpg",
                        "prev_record_holder_desc":"Joe Holup, a former center for the University of Scranton, holds the record for the second most rebounds all-time in NCAA Division I basketball history, with an impressive total of 1,290 rebounds during his collegiate career from 1952 to 1956. Known for his exceptional rebounding ability, strength, and positioning, Holup dominated the boards, consistently outworking opponents to secure crucial possessions for his team. His tenacity and skill in grabbing rebounds not only made him a standout player in his era but also played a significant role in leading his team to success. Holup's remarkable achievement underscores the importance of rebounding in basketball, highlighting how a player’s ability to control the boards can influence the outcome of a game. His legacy as one of the greatest rebounders in NCAA history continues to inspire aspiring players to prioritize hard work and dedication in their pursuit of excellence on the court."
                    
            }
        ,
  
            {
                "record_id":"24",
                "record_title":"Most Assists All-Time NCAA",
                "record_image":"https://kevinsm12.github.io/csce242/projects/part6/images/most-ass-img-ncaa.jpg",
                "record_description":"This record is given to the player with the most assists throughout their career. This player is one of the best teamates of all time as they give up the glory of scoring to help their team.",
                
                        "record_holder":"Bobby Hurley - 1,076",
                        "record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/bobby-hurley.jpg",
                        "record_holder_desc":"Bobby Hurley, a legendary point guard for Duke University, holds the record for the most assists all-time in NCAA Division I basketball history, accumulating an impressive total of 1,076 assists during his illustrious college career from 1989 to 1993. Known for his exceptional court vision, quick decision-making, and playmaking ability, Hurley was a pivotal figure in Duke's success, helping the team secure back-to-back national championships in 1991 and 1992. His ability to create scoring opportunities for his teammates while maintaining a high level of play earned him widespread recognition and respect in the world of college basketball. Hurley's record for assists highlights not only his individual talent but also the importance of teamwork and unselfishness in the game. His legacy as one of the greatest playmakers in NCAA history continues to inspire future generations of players, emphasizing the value of facilitating and enhancing the performance of teammates on the court.",
                        "prev_record_holder":"Chris Corchiani -  1,038",
                        "prev_record_holder_image":"https://kevinsm12.github.io/csce242/projects/part6/images/chris-corchiani.jpg",
                        "prev_record_holder_desc":"Chris Corchiani, a standout point guard for North Carolina State University (NC State), holds the record for the second most assists all-time in NCAA Division I basketball history, with an impressive total of 1,038 assists during his collegiate career from 1989 to 1993. Known for his exceptional passing skills, court vision, and ability to control the pace of the game, Corchiani was instrumental in orchestrating NC State's offense. His knack for setting up teammates for scoring opportunities, combined with his defensive tenacity, made him a key player during his time at the university. Corchiani's record for assists underscores the importance of playmaking in basketball, showcasing how a dedicated point guard can significantly elevate a team's performance. His legacy as one of the greatest facilitators in NCAA history continues to inspire aspiring players to prioritize teamwork and the art of passing on the court."
                  
            }
        
    
];

app.listen(3001,()=>{
    console.log("listening...");

});

app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/index.html");
});

app.get("/api/records",(request,response)=>{
    response.json(records);
});

app.post("/api/records", upload.single("img"), (request, response) => {
    console.log("In a post request");

    const result = validateRecord(request.body);

    if (result.error) {
        response.status(400).send(result.error.details[0].message);
        console.log("I have an error");
        return;
    }

    const record = {
        _id: records.length + 1,
        title: request.body.record_title,
        desc: request.body.record_description,
        holder: request.body.record_holder,
        holderDesc: request.body.record_holder_desc,
        prev: request.body.prev_record_holder,
        prevDesc: request.body.prev_record_holder_desc
    };

    if (request.file) {
        record.main_image = req.file.filename;
    }

    records.push(record);

    console.log(record);
    response.status(200).send(record);
});

const validateRecord = (record) => {
    const schema = Joi.object({
        id: Joi.number().required(),
        title: Joi.string().min(3).required(),
        desc: Joi.string().min(3).required(),
        holder: Joi.string().min(3).required(),
        holderDesc: Joi.string().min(3).required(),
        prev: Joi.string().min(3).required(),
        prevDesc: Joi.string().min(3).required()
    });

    return schema.validate(record);
};