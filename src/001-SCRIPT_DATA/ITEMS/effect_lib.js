App = App || { Data: { }, Entity: { } };

App.Data.EffectLib = {
//======================================
    /** UNIQUE POTIONS **/
//======================================	
	/** NEREID PHILTRE */
    "NEREID_PHILTRE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) {
                p.AdjustStat('Hormones', 5);
                p.AdjustStat('Femininity', 5);
                p.AdjustStat('Toxicity', 50);
                p.AdjustStatXP('Femininity', 100);
                p.AdjustStatXP('WillPower', 200);
                p.AdjustStatXP('Hormones', 300);
                p.AdjustBodyXP('Face', 500);
                p.AdjustBodyXP('Hair', 500);
                p.AdjustBodyXP('Lips', 500);
                p.AdjustBodyXP('Waist',-500);
                p.AdjustSkillXP('Dancing', 500);
                p.AdjustSkillXP('Singing', 500);
                p.AdjustSkillXP('Seduction', 500);
        },
        "VALUE" : 2000,
        "KNOWLEDGE" : [ "Female Hormones++++", "Femininity Up+++", "Femininity XP+++", "Toxicity Up---",
                        "Face Prettier++++", "Hair Growth++++", "Lips Fuller++++", "WillPower Up+++",
                        "Waist Narrower++++", "Dancing XP++++", "Singing XP++++", "Seduction XP++++" ]
    },
	/** SUCCUBUS PHILTRE */
    "SUCCUBUS_PHILTRE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) {
            p.AdjustStat('Hormones', 5);
            p.AdjustStat('Femininity', 5);
            p.AdjustStat('Toxicity', 50);
            p.AdjustStatXP('Femininity', 300);
            p.AdjustStatXP('WillPower', 200);
            p.AdjustStatXP('Hormones', 300);
            p.AdjustStatXP('Perversion', 500);
            p.AdjustBodyXP('Bust', 500);
            p.AdjustBodyXP('Ass', 500);
            p.AdjustBodyXP('Hips', 500);
            p.AdjustBodyXP('Waist',-500);
            p.AdjustSkillXP('Seduction', 500);
        },
        "VALUE" : 2000,
        "KNOWLEDGE" : [ "Female Hormones++++", "Femininity Up+++", "Femininity XP+++", "Toxicity Up---",
            "Bust Growth++++", "Ass Growth++++", "Hips Wider++++", "WillPower Up+++",
            "Waist Narrower++++", "Perversion XP----", "Seduction XP++++" ]
    },
    /** FEMALE MANDRAKE */
    "FEMALE_MANDRAKE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) {
            p.AdjustStat('Hormones', 10);
            p.AdjustStat('Femininity', 15);
            p.AdjustStat('Toxicity', 80);
            p.AdjustStatXP('Femininity', 200);
            p.AdjustStatXP('WillPower', 400);
            p.AdjustStatXP('Hormones', 300);
            p.AdjustStatXP('Perversion', 300);
            p.AdjustBodyXP('Lips', 300); 
            p.AdjustBodyXP('Bust', 300);
            p.AdjustBodyXP('Ass', 300);
            p.AdjustBodyXP('Hips', 300);
            p.AdjustBodyXP('Waist',-300);
            p.AdjustSkillXP('Seduction', 500);
        },
        "VALUE" : 2000,
        "KNOWLEDGE" : [ "Female Hormones++++", "Femininity Up+++", "Femininity XP+++", "Toxicity Up----",
            "Bust Growth+++", "Ass Growth+++", "Hips Wider+++", "WillPower Up+++",
            "Waist Narrower+++", "Lips Fuller+++", "Perversion XP+++", "Seduction XP++++" ]
    },
    /** MALE MANDRAKE */
    "MALE_MANDRAKE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) {
            p.AdjustStat('Hormones', -10);
            p.AdjustStat('Femininity', -15);
            p.AdjustStat('Toxicity', 80);
            p.AdjustStat('WillPower', 5);
            p.AdjustStatXP('Femininity', -200);
            p.AdjustStatXP('WillPower', 400);
            p.AdjustStatXP('Hormones', -300);
            p.AdjustStatXP('Perversion', 500);
            p.AdjustBodyXP('Lips', -300); 
            p.AdjustBodyXP('Bust', -300);
            p.AdjustBodyXP('Penis', 500);
            p.AdjustBodyXP('Balls', 500);
            p.AdjustBodyXP('Ass', -300);
            p.AdjustBodyXP('Hips', -300);
            p.AdjustBodyXP('Waist', 300);
            p.AdjustSkillXP('Seduction', -500);
        },
        "VALUE" : 2000,
        "KNOWLEDGE" : [ "Female Hormones----", "Femininity Down+++", "Femininity XP---", "Toxicity Up----",
            "Bust Growth---", "Ass Growth---", "Hips Wider---", "WillPower Up++++", "Balls XP++++",
            "Penis XP++++", "Waist Narrower---", "Lips Fuller---", "Perversion XP+++", "Seduction XP----" ]
    },    
	/** SIREN ELIXIR */
    "SIREN_ELIXIR" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) {
            p.AdjustStatXP('WillPower', 200);
            p.AdjustStatXP('Hormones', 200);
            p.AdjustStatXP('Perversion',-200);
            p.AdjustBodyXP('Face', 100);
            p.AdjustBodyXP('Bust', 100);
            p.AdjustBodyXP('Hips', 100);
            p.AdjustBodyXP('Ass', 100);
            p.AdjustBodyXP('Waist',-100);
            p.AdjustBodyXP('Hair', 100);
        },
        "VALUE" : 500,
        "KNOWLEDGE" : [ "Female Hormones+++", "Face Prettier++",
            "Bust Growth++", "Ass Growth++", "Hips Wider++", "WillPower Up+++",
            "Waist Narrower++", "Perversion Down++++" ]
    },
//======================================
    /** CORE STATS **/
//======================================
    /** ENERGY */
    "ENERGY_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Energy', 1); },
        "VALUE" : 20, "KNOWLEDGE" : [ "Energy Up+" ]
    },    
    "ENERGY_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
          function(o,p) { p.AdjustStat('Energy', 3); }, 
        "VALUE" : 50, "KNOWLEDGE" : [ "Energy Up++" ]
    },
    "ENERGY_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Energy', 5); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Energy Up+++" ]
    },
    "ENERGY_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Energy', 8); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Energy Up++++" ]
    },
    /** TOXICITY */
    "TOXICITY_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Toxicity', 10); },
        "VALUE" : 0, "KNOWLEDGE" : [ "Toxicity Up-" ]
    },
    "TOXICITY_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Toxicity', 30); },
        "VALUE" : 0, "KNOWLEDGE" : [ "Toxicity Up--" ]
    },
    "TOXICITY_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Toxicity', 50); },
        "VALUE" : 0, "KNOWLEDGE" : [ "Toxicity Up---" ]
    },
    "TOXICITY_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Toxicity', 80); },
        "VALUE" : 0, "KNOWLEDGE" : [ "Toxicity Up----" ]
    },
    "PURGE_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Toxicity',-30); },
        "VALUE" : 20, "KNOWLEDGE" : [ "Toxicity Down+" ]
    },
    "PURGE_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Toxicity',-50); },
        "VALUE" : 40, "KNOWLEDGE" : [ "Toxicity Down++" ]
    },
    "PURGE_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Toxicity',-80); },
        "VALUE" : 80, "KNOWLEDGE" : [ "Toxicity Down+++" ]
    },
    "PURGE_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Toxicity',-120); },
        "VALUE" : 160, "KNOWLEDGE" : [ "Toxicity Down++++" ]
    },
    /** WILLPOWER */
    "BREAK_WILL_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('WillPower',-50); },
        "VALUE" : 0, "KNOWLEDGE" : [ "WillPower Down-" ]
    },
    "BREAK_WILL_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('WillPower',-100); },
        "VALUE" : 0, "KNOWLEDGE" : [ "WillPower Down--" ]
    },
    "BREAK_WILL_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('WillPower',-200); },
        "VALUE" : 0, "KNOWLEDGE" : [ "WillPower Down---" ]
    },
    "BREAK_WILL_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('WillPower',-400); },
        "VALUE" : 0, "KNOWLEDGE" : [ "WillPower Down----" ]
    },
    "BOLSTER_WILL_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('WillPower', 50); },
        "VALUE" : 75, "KNOWLEDGE" : [ "WillPower Up+" ]
    },
    "BOLSTER_WILL_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('WillPower', 100); },
        "VALUE" :150, "KNOWLEDGE" : [ "WillPower Up++" ]
    },
    "BOLSTER_WILL_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('WillPower', 200); },
        "VALUE" : 300, "KNOWLEDGE" : [ "WillPower Up+++" ]
    },
    "BOLSTER_WILL_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('WillPower', 400); },
        "VALUE" : 600, "KNOWLEDGE" : [ "WillPower Up++++" ]
    },    
    /** NUTRITION  AND HUNGER */
    "NUTRITION_WEAK" : {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
        function(o,p) { p.AdjustStat('Nutrition', 5); },
    "VALUE" : 5, "KNOWLEDGE" : [ "Nutrition Up" ]
    },
    "NUTRITION_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Nutrition', 10); },
        "VALUE" : 10, "KNOWLEDGE" : [ "Nutrition Up+" ]
    },
    "NUTRITION_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Nutrition', 20); },
        "VALUE" : 20, "KNOWLEDGE" : [ "Nutrition Up++" ]
    },
    "NUTRITION_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Nutrition', 50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Nutrition Up+++" ]
    },
    "HUNGER_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Nutrition', -50); },
        "VALUE" : 0, "KNOWLEDGE" : [ "Nutrition Down---" ]
    },
    "NUTRITION_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Nutrition', 100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Nutrition Up++++" ]
    },
    "NUTRITION_XP_WEAK" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Nutrition', 10); },
        "VALUE" : 5, "KNOWLEDGE" : [ "Satiation Up" ]
    },
    "NUTRITION_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Nutrition', 25); },
        "VALUE" : 10, "KNOWLEDGE" : [ "Satiation Up+" ]
    },
    "NUTRITION_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Nutrition', 50); },
        "VALUE" : 20, "KNOWLEDGE" : [ "Satiation Up++" ]
    },
    "NUTRITION_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Nutrition', 100); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Satiation Up+++" ]
    },
    "NUTRITION_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Nutrition', 200); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Satiation Up++++" ]
    },
    /** Femininity **/
    "FEMININITY_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Femininity', 25); },
        "VALUE" : 10, "KNOWLEDGE" : [ "Femininity Up+" ]
    },
    "FEMININITY_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Femininity', 50); },
        "VALUE" : 20, "KNOWLEDGE" : [ "Femininity Up++" ]
    },
    "FEMININITY_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Femininity', 100); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Femininity Up+++" ]
    },
    "FEMININITY_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Femininity', 200); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Femininity Up++++" ]
    },
    "FEMININITY_DOWN_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Femininity', -200); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Femininity Down----" ]
    },
    /** HEALTH **/
    "HEAL_COMMON" : {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
        function(o,p) { p.AdjustStat('Health', 20); },
    "VALUE" : 20, "KNOWLEDGE" : [ "Health Up+" ]
    },
    "HEAL_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Health', 40); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Health Up++" ]
    },
    "HEAL_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Health', 75); p.AdjustStat('Toxicity',-50); },
        "VALUE" : 150, "KNOWLEDGE" : [ "Health Up+++" ]
    },
    "HEAL_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Health', 100); p.AdjustStat('Toxicity',-100); },
        "VALUE" : 300, "KNOWLEDGE" : [ "Health Up++++" ]
    },
    /** FITNESS */
    "FITNESS_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Fitness', 25); },
        "VALUE" : 10, "KNOWLEDGE" : [ "Fitness Up+" ]
    },
    "FITNESS_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Fitness', 50); },
        "VALUE" : 20, "KNOWLEDGE" : [ "Fitness Up++" ]
    },
    "FITNESS_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Fitness', 100); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Fitness Up+++" ]
    },
    "FITNESS_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Fitness', 200); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Fitness Up++++" ]
    },
    /** HORMONES */
    "MALE_HORMONE_XP_COMMON" : {
    "FUN" : /** @param {App.Entity.Player} p
     @param {App.Item.Consumable} o*/
        function(o,p) { p.AdjustStatXP('Hormones',-50); },
    "VALUE" : 25, "KNOWLEDGE" : [ "Male Hormones+" ]
    },
    "MALE_HORMONE_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Hormones',-100); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Male Hormones++" ]
    },
    "MALE_HORMONE_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Hormones',-200); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Male Hormones+++" ]
    },
    "MALE_HORMONE_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Hormones',-400); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Male Hormones++++" ]
    },
    "FEMALE_HORMONE_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Hormones', 50); },
        "VALUE" : 10, "KNOWLEDGE" : [ "Female Hormones+" ]
    },
    "FEMALE_HORMONE_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Hormones', 100); },
        "VALUE" : 20, "KNOWLEDGE" : [ "Female Hormones++" ]
    },
    "FEMALE_HORMONE_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Hormones', 200); },
        "VALUE" : 40, "KNOWLEDGE" : [ "Female Hormones+++" ]
    },
    "FEMALE_HORMONE_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Hormones', 400); },
        "VALUE" : 80, "KNOWLEDGE" : [ "Female Hormones++++" ]
    },
    "HORMONAL_BALANCE_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) {
            var h = p.GetStat("STAT","Hormones");
            p.CoreStats["Hormones"] = h > 100 ?  Math.min((h-10), 100) : Math.max((h+10), 100);

        },
        "VALUE" : 500, "KNOWLEDGE" : [ "Hormonal Balance+" ]
    },
    /** PERVERSION **/
    "PERVERSION_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Perversion', 25); },
        "VALUE" : 10, "KNOWLEDGE" : [ "Perversion Up+" ]
    },
    "PERVERSION_DOWN_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Perversion', -25); },
        "VALUE" : 10, "KNOWLEDGE" : [ "Perversion Down-" ]
    },
    "PERVERSION_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Perversion', 50); },
        "VALUE" : 20, "KNOWLEDGE" : [ "Perversion Up++" ]
    },
    "PERVERSION_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Perversion', 100); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Perversion Up+++" ]
    },
    "PERVERSION_DOWN_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Perversion', -100); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Perversion Down---" ]
    },
    "PERVERSION_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Perversion', 200); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Perversion Up++++" ]
    },
    "PERVERSION_DOWN_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('Perversion', -200); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Perversion Down----" ]
    },
//======================================
    /** BODY STATS **/
//======================================
    /** HEIGHT */
    "SHRINK_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Height',-50); },
        "VALUE" : 15, "KNOWLEDGE" : [ "Height Down-" ]
    },
    "SHRINK_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Height',-100); },
        "VALUE" : 30, "KNOWLEDGE" : [ "Height Down--" ]
    },
    "SHRINK_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Height',-200); },
        "VALUE" : 60, "KNOWLEDGE" : [ "Height Down---" ]
    },
    "SHRINK_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Height',-400); },
        "VALUE" : 120, "KNOWLEDGE" : [ "Height Down----" ]
    },
    /** HAIR */
    "HAIR_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Hair', 50); },
        "VALUE" : 25, "KNOWLEDGE" : [ "Hair Growth+" ]
    },
    "HAIR_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Hair', 100); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Hair Growth++" ]
    },
    "HAIR_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Hair', 200); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Hair Growth+++" ]
    },
    "HAIR_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Hair', 400); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Hair Growth++++" ]
    },
    /** FACE */
    "FACE_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Face', 50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Face Prettier+" ]
    },
    "FACE_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Face', 100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Face Prettier++" ]
    },
    "FACE_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Face', 200); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Face Prettier+++" ]
    },
    "FACE_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Face', 400); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Face Prettier++++" ]
    },
    /** BUST */
    "BUST_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Bust', 50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Bust Grow+" ]
    },
    "BUST_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Bust', 100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Bust Grow++" ]
    },
    "BUST_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Bust', 200); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Bust Grow+++" ]
    },
    "BUST_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Bust', 400); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Bust Grow++++" ]
    },
    /** ASS */
    "ASS_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Ass', 50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Ass Grow+" ]
    },
    "ASS_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Ass', 100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Ass Grow++" ]
    },
    "ASS_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Ass', 200); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Ass Grow+++" ]
    },
    "ASS_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Ass', 400); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Ass Grow++++" ]
    },
    /** HIPS */
    "HIPS_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Hips', 50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Hips Wider+" ]
    },
    "HIPS_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Hips', 100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Hips Wider++" ]
    },
    "HIPS_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Hips', 200); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Hips Wider+++" ]
    },
    "HIPS_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Hips', 400); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Hips Wider++++" ]
    },    
    /** LIPS */
    "LIPS_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Lips', 50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Lips Plumper+" ]
    },
    "LIPS_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Lips', 100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Lips Plumper++" ]
    },
    "LIPS_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Lips', 200); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Lips Plumper+++" ]
    },
    "LIPS_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Lips', 400); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Lips Plumper++++" ]
    },
    /** PENIS */
    "PENIS_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Penis', 50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Penis Grow+" ]
    },
    "PENIS_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Penis', 100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Penis Grow++" ]
    },
    "PENIS_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Penis', 200); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Penis Grow+++" ]
    },
    "PENIS_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Penis', 400); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Penis Grow++++" ]
    },
    /** BALLS */
    "BALLS_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Balls', 50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Balls Grow+" ]
    },
    "BALLS_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Balls', 100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Balls Grow++" ]
    },
    "BALLS_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Balls', 200); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Balls Grow+++" ]
    },
    "BALLS_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Balls', 400); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Balls Grow++++" ]
    },
    /** WAIST */
    "WAIST_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Waist', -50); },
        "VALUE" : 50, "KNOWLEDGE" : [ "Waist Narrower+" ]
    },
    "WAIST_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Waist', -100); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Waist Narrower++" ]
    },
    "WAIST_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Waist', -200); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Waist Grow+++" ]
    },
    "WAIST_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Waist', -400); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Waist Grow++++" ]
    },    
//======================================
    /** SKILLS **/
//======================================
    /** SAILING */
    "SAILING_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Sailing', 50); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Sailing XP+" ]
    },
    "SAILING_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Sailing', 100); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Sailing XP++" ]
    },
    "SAILING_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Sailing', 200); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Sailing XP+++" ]
    },
    "SAILING_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Sailing', 400); },
        "VALUE" : 800, "KNOWLEDGE" : [ "Sailing XP++++" ]
    },
    /** SWASHBUCKLING */
    "SWASHBUCKLING_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Swashbuckling', 50); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Swashbuckling XP+" ]
    },
    "SWASHBUCKLING_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Swashbuckling', 100); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Swashbuckling XP++" ]
    },
    "SWASHBUCKLING_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Swashbuckling', 200); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Swashbuckling XP+++" ]
    },
    "SWASHBUCKLING_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Swashbuckling', 400); },
        "VALUE" : 800, "KNOWLEDGE" : [ "Swashbuckling XP++++" ]
    },
    /** NAVIGATING */
    "NAVIGATING_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Navigating', 50); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Navigating XP+" ]
    },
    "NAVIGATING_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Navigating', 100); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Navigating XP++" ]
    },
    "NAVIGATING_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p

         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Navigating', 200); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Navigating XP+++" ]
    },
    "NAVIGATING_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Navigating', 400); },
        "VALUE" : 800, "KNOWLEDGE" : [ "Navigating XP++++" ]
    },
    /** SERVING **/
    "SERVING_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Serving', 50); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Serving XP+" ]
    },
    "SERVING_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Serving', 100); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Serving XP++" ]
    },
    "SERVING_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p

         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Serving', 200); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Serving XP+++" ]
    },
    "SERVING_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Serving', 400); },
        "VALUE" : 800, "KNOWLEDGE" : [ "Serving XP++++" ]
    },
    /** COOKING **/
    "COOKING_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Cooking', 50); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Cooking XP+" ]
    },
    "COOKING_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Cooking', 100); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Cooking XP++" ]
    },
    "COOKING_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p

         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Cooking', 200); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Cooking XP+++" ]
    },
    "COOKING_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Cooking', 400); },
        "VALUE" : 800, "KNOWLEDGE" : [ "Cooking XP++++" ]
    },
    /** CLEANING **/
    "CLEANING_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Cleaning', 50); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Cleaning XP+" ]
    },
    "CLEANING_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Cleaning', 100); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Cleaning XP++" ]
    },
    "CLEANING_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p

         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Cleaning', 200); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Cleaning XP+++" ]
    },
    "CLEANING_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Cleaning', 400); },
        "VALUE" : 800, "KNOWLEDGE" : [ "Cleaning XP++++" ]
    },
    /** SEDUCTION **/
    "SEDUCTION_XP_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Seduction', 50); },
        "VALUE" : 100, "KNOWLEDGE" : [ "Seduction XP+" ]
    },
    "SEDUCTION_XP_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Seduction', 100); },
        "VALUE" : 200, "KNOWLEDGE" : [ "Seduction XP++" ]
    },
    "SEDUCTION_XP_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p

         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Seduction', 200); },
        "VALUE" : 400, "KNOWLEDGE" : [ "Seduction XP+++" ]
    },
    "SEDUCTION_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('Seduction', 400); },
        "VALUE" : 800, "KNOWLEDGE" : [ "Seduction XP++++" ]
    },
    /** RANDOM SKILL XP */
    "RANDOM_SKILL_XP_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) {
            p.AdjustSkillXP( App.PR.GetRandomListItem( Object.keys(p.SkillsXP)), 400);
        },
        "VALUE" : 800, "KNOWLEDGE" : [ "Random Skill XP++++" ]
    },
//======================================
    /** FOOD **/
//======================================
    "SLAVE_GRUEL" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) {
                p.AdjustStat('Nutrition', 15);
                p.AdjustStatXP('Nutrition', 75);
                p.AdjustStatXP('WillPower',-25);
                p.AdjustStatXP('Perversion', 50);
                p.AdjustStatXP('Hormones', 50);
            },
        "VALUE" : 30, 
        "KNOWLEDGE" : [ "Nutrition Up++", "Satiation+++", "WillPower Down-", 
                        "Perversion Up+", "Female Hormones++"]
    },
    "SNACK" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStat('Nutrition', 5);p.AdjustStatXP('Nutrition', 10); },
        "VALUE" : 10,
        "KNOWLEDGE" : [ "Nutrition Up", "Satiation Up+" ]
    },
    "LIGHT_WHOLESOME_MEAL" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { 
            p.AdjustStat('Nutrition', 10);
            p.AdjustStatXP('Nutrition', 25);
            p.AdjustStat('Toxicity',-5);
        },
        "VALUE" : 30,
        "KNOWLEDGE" : [ "Nutrition Up+", "Satiation Up+", "Toxicity Down" ]
    },
    "WHOLESOME_MEAL" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) {
            p.AdjustStat('Nutrition', 20);
            p.AdjustStatXP('Nutrition', 50);
            p.AdjustStat('Toxicity',-10);
        },
        "VALUE" : 60,
        "KNOWLEDGE" : [ "Nutrition Up++", "Satiation Up++", "Toxicity Down" ]
    },
    "LIGHT_ALCOHOL" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) {
                p.AdjustStat('Nutrition', 5);
                p.AdjustStatXP('Nutrition', 15);
                p.AdjustStat('Toxicity', 5);
            },
        "VALUE" : 20,
        "KNOWLEDGE" : [ "Nutrition Up", "Satiation Up", "Toxicity Up" ]        
    },
    "HARD_ALCOHOL" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) {
            p.AdjustStat('Nutrition', 5);
            p.AdjustStatXP('Nutrition', 10);
            p.AdjustStat('Toxicity', 30);
            p.AdjustStatXP('WillPower', 50);
        },
        "VALUE" : 100,
        "KNOWLEDGE" : [ "Nutrition Up", "Satiation Up", "Toxicity Up--", "WillPower Up+" ]
    },
//======================================
    /** LOOT BOXES **/
//======================================    
    /** FOOD BOX */
    "FOOD_LOOT_BOX_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "FOOD", 0, 0); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+" ]
    },
    "FOOD_LOOT_BOX_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "FOOD", 20, 10); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++" ]
    },
    "FOOD_LOOT_BOX_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "FOOD", 30, 20); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+++" ]
    },
    "FOOD_LOOT_BOX_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "FOOD", 50, 30); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++++" ]
    },
    /** LANDLUBBER BOX */
    "LANDLUBBER_LOOT_BOX_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "LANDLUBBER", 0, 0); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+" ]
    },
    "LANDLUBBER_LOOT_BOX_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "LANDLUBBER", 20, 10); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++" ]
    },
    "LANDLUBBER_LOOT_BOX_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "LANDLUBBER", 30, 20); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+++" ]
    },
    "LANDLUBBER_LOOT_BOX_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "LANDLUBBER", 50, 30); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++++" ]
    },
    /** LOLITA_SISSY BOX */
    "LOLITA_SISSY_LOOT_BOX_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "LOLITA_SISSY", 0, 0); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+" ]
    },
    "LOLITA_SISSY_LOOT_BOX_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "LOLITA_SISSY", 20, 10); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++" ]
    },
    "LOLITA_SISSY_LOOT_BOX_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "LOLITA_SISSY", 30, 20); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+++" ]
    },
    "LOLITA_SISSY_LOOT_BOX_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "LOLITA_SISSY", 50, 30); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++++" ]
    },
    /** PATHETIC_LOSER BOX */
    "PATHETIC_LOSER_LOOT_BOX_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "PATHETIC_LOSER", 0, 0); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+" ]
    },
    "PATHETIC_LOSER_LOOT_BOX_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "PATHETIC_LOSER", 20, 10); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++" ]
    },
    "PATHETIC_LOSER_LOOT_BOX_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "PATHETIC_LOSER", 30, 20); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+++" ]
    },
    "PATHETIC_LOSER_LOOT_BOX_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "PATHETIC_LOSER", 50, 30); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++++" ]
    },
    /** PIRATE_BDSM BOX */
    "PIRATE_BDSM_LOOT_BOX_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "PIRATE_BDSM", 0, 0); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+" ]
    },
    "PIRATE_BDSM_LOOT_BOX_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "PIRATE_BDSM", 20, 10); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++" ]
    },
    "PIRATE_BDSM_LOOT_BOX_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "PIRATE_BDSM", 30, 20); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+++" ]
    },
    "PIRATE_BDSM_LOOT_BOX_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "PIRATE_BDSM", 50, 30); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++++" ]
    },
    /** SISSY_BIMBO BOX */
    "SISSY_BIMBO_LOOT_BOX_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "SISSY_BIMBO", 0, 0); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+" ]
    },
    "SISSY_BIMBO_LOOT_BOX_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "SISSY_BIMBO", 20, 10); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++" ]
    },
    "SISSY_BIMBO_LOOT_BOX_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "SISSY_BIMBO", 30, 20); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+++" ]
    },
    "SISSY_BIMBO_LOOT_BOX_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "SISSY_BIMBO", 50, 30); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++++" ]
    },
    /** DANCER_BIMBO BOX */
    "DANCER_BIMBO_LOOT_BOX_COMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "DANCER_BIMBO", 0, 0); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+" ]
    },
    "DANCER_BIMBO_LOOT_BOX_UNCOMMON" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "DANCER_BIMBO", 20, 10); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++" ]
    },
    "DANCER_BIMBO_LOOT_BOX_RARE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "DANCER_BIMBO", 30, 20); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box+++" ]
    },
    "DANCER_BIMBO_LOOT_BOX_LEGENDARY" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { return App.Item.DoLootBox(p, "DANCER_BIMBO", 50, 30); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Loot Box++++" ]
    },    
//======================================
    /** OTHER ITEMS**/
//======================================	
    "BLACK_HAIR_DYE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.HairColor = 'black'; },
        "VALUE" : 100,
        "KNOWLEDGE" : [ "Dye Hair Black" ]
    },
	    "BROWN_HAIR_DYE" : {
            "FUN" : /** @param {App.Entity.Player} p
             @param {App.Item.Consumable} o*/
            function(o,p) { p.HairColor = 'brown'; },
        "VALUE" : 100,
        "KNOWLEDGE" : [ "Dye Hair Brown" ]
    },
	    "RED_HAIR_DYE" : {
            "FUN" : /** @param {App.Entity.Player} p
             @param {App.Item.Consumable} o*/
            function(o,p) { p.HairColor = 'red'; },
        "VALUE" : 100,
        "KNOWLEDGE" : [ "Dye Hair Red" ]
    },
	    "BLOND_HAIR_DYE" : {
        "FUN" : /** @param {App.Entity.Player} p
                    @param {App.Item.Consumable} o*/
            function(o,p) { p.HairColor = 'blond'; },
        "VALUE" : 100,
        "KNOWLEDGE" : [ "Dye Hair Blond" ]
    },
    /** THE LOVERS - TAROT CARD */
    "THE_LOVERS" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) {p.AddItem("DRUGS", "siren elixir", 0);},
        "VALUE" : 500, "KNOWLEDGE" : [ "Add Item++++" ]
    },
    /** THE EMPRESS - TAROT CARD */
    "THE_EMPRESS" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) {p.AddItem("LOOT_BOX", "common food loot box", 0);},
        "VALUE" : 500, "KNOWLEDGE" : [ "Add Item++++" ]
    },    
//======================================
    /** CLOTHING PASSIVE WORN EFFECTS **/
//======================================
    "FEMININE_CLOTHING" : {
        "FUN" : /** @param {App.Entity.Player} p
                @param {App.Item.Clothing} o */
            function(o,p) {
                var gain = 0;
                var limit = 0;
                switch(o.o["Style"]) {
                    case 'COMMON': gain = 5; limit = 30; break;
                    case 'UNCOMMON': gain = 10; limit = 60; break;
                    case 'RARE': gain = 15; limit = 80; break;
                    case 'LEGENDARY': gain = 20; limit = 0; break;
                }
                switch(o.o["Type"]) {
                    case 'ACCESSORY': gain = Math.ceil(gain * 0.8); break;
                    case 'ONE PIECE': gain = Math.ceil(gain * 2.2); break;
                }
            p.AdjustStatXP('Femininity', gain, limit);
        },
        "VALUE" : 50,
        "KNOWLEDGE" : [ "Feminine ClothingRANK" ]
    },
    "SEXY_CLOTHING" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Clothing} o */
            function(o,p) {
            var gain = 0;
            var limit = 0;
            switch(o.o["Style"]) {
                case 'COMMON': gain = 5; limit = 30; break;
                case 'UNCOMMON': gain = 10; limit = 60; break;
                case 'RARE': gain = 15; limit = 80; break;
                case 'LEGENDARY': gain = 20; limit = 0; break;
            }
            switch(o.o["Type"]) {
                case 'ACCESSORY': gain = Math.ceil(gain * 0.8); break;
                case 'ONE PIECE': gain = Math.ceil(gain * 2.2); break;
            }
            p.AdjustStatXP('Femininity', gain, limit);
            p.AdjustSkillXP('Seduction', gain, limit);
        },
        "VALUE" : 50,
        "KNOWLEDGE" : [ "Sexy ClothingRANK" ]
    },
    "PERVERTED_CLOTHING" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Clothing} o */
            function(o,p) {
            var gain = 0;
            var limit = 0;
            switch(o.o["Style"]) {
                case 'COMMON': gain = 5; limit = 30; break;
                case 'UNCOMMON': gain = 10; limit = 60; break;
                case 'RARE': gain = 15; limit = 80; break;
                case 'LEGENDARY': gain = 20; limit = 0; break;
            }
            switch(o.o["Type"]) {
                case 'ACCESSORY': gain = Math.ceil(gain * 0.8); break;
                case 'ONE PIECE': gain = Math.ceil(gain * 2.2); break;
            }
            p.AdjustStatXP('Perversion', gain, limit);
        },
        "VALUE" : 100,
        "KNOWLEDGE" : [ "Pervert!RANK" ]
    },
    "KINKY_CLOTHING" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Clothing} o */
            function(o,p) {
            var gain = 0;
            var limit = 0;
            switch(o.o["Style"]) {
                case 'COMMON': gain = 5; limit = 15; break;
                case 'UNCOMMON': gain = 10; limit = 30; break;
                case 'RARE': gain = 15; limit = 40; break;
                case 'LEGENDARY': gain = 20; limit = 60; break;
            }
            switch(o.o["Type"]) {
                case 'ACCESSORY': gain = Math.ceil(gain * 0.8); break;
                case 'ONE PIECE': gain = Math.ceil(gain * 2.2); break;
            }
            p.AdjustStatXP('Perversion', gain, limit);
        },
        "VALUE" : 100,
        "KNOWLEDGE" : [ "KinkyRANK" ]
    },
    "SLAVE_COLLAR" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustStatXP('WillPower',-20, 50);p.AdjustStatXP("Perversion", 20, 50); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Slave Breaking--", "Kinky+" ]
    },
    "WAIST_CINCHING" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Waist',-20, 30); },
        "VALUE" : 100,
        "KNOWLEDGE" : [ "Waist Training+" ]
    },
    "WAIST_TRAINING" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Waist',-20, 20); },
        "VALUE" : 100,
        "KNOWLEDGE" : [ "Waist Training++" ]
    },
    "EXTREME_WAIST_TRAINING" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustBodyXP('Waist',-40, 0); },
        "VALUE" : 250,
        "KNOWLEDGE" : [ "Waist Training++++" ]
    },
    "GAPE_TRAINING" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) { p.AdjustSkillXP('AssFucking', 20, 80); },
        "VALUE" : 200,
        "KNOWLEDGE" : [ "Gape Training++" ]
    },
    "CHASTITY_CAGE" : {
        "FUN" : /** @param {App.Entity.Player} p
         @param {App.Item.Consumable} o*/
            function(o,p) {
                p.AdjustBodyXP('Penis',-20, 20);
                p.AdjustBodyXP('Balls',-20, 10);
                p.AdjustStatXP("Perversion", 20, 70); },
        "VALUE" : 0,
        "KNOWLEDGE" : [ "Ball Breaking--", "Kinky++" ]
    },
//======================================
    /** CLOTHING ACTIVE WORN EFFECTS **/
//======================================
    "SUCCUBUS_ALLURE" : {
        "FUN" : /** @param {string} s
         @param {App.Item.Consumable} o*/
            function(o,s) { return ( s == "Seduction") ? 20 : 0; },
        "VALUE" : 200,
        "KNOWLEDGE" : [ "Allure of the Succubus++++" ]
    },
    "FLIRTY" : {
        "FUN" : /** @param {string} s
         @param {App.Item.Consumable} o*/
            function(o,s) { return ( s == "Seduction") ? 10 : 0; },
        "VALUE" : 100,
        "KNOWLEDGE" : [ "Flirty++" ]
    },
    "MINOR_PIRATES_GRACE" : {
        "FUN" : /** @param {string} s
         @param {App.Item.Consumable} o*/
            function(o,s) { return (s == 'Navigating' || s == 'Sailing') ? 10 : 0; },
        "VALUE" : 200,
        "KNOWLEDGE" : [ "Pirate's Grace++" ]
    },
    "MAJOR_PIRATES_GRACE" : {
        "FUN" : /** @param {string} s
         @param {App.Item.Consumable} o*/
            function(o,s) { return (s == 'Navigating' || s == 'Sailing' || s == 'Swashbuckling') ? 20 : 0; },
        "VALUE" : 500,
        "KNOWLEDGE" : [ "Pirate's Grace++++" ]
    },
    "CUT_THROAT" : {
        "FUN" : /** @param {string} s
         @param {App.Item.Consumable} o*/
            function(o,s) { return ( s == "Swashbuckling") ? 10 : 0; },
        "VALUE" : 200,
        "KNOWLEDGE" : [ "Cut Throat++" ]
    },
    "MINOR_STRIPPERS_ALLURE" : {
        "FUN" : /** @param {string} s
         @param {App.Item.Consumable} o*/
            function(o,s) { return (s == 'Fitness' || s == 'Dancing' || s == 'Seduction') ? 10 : 0; },
        "VALUE" : 300,
        "KNOWLEDGE" : [ "Stripper's Allure++" ]
    },
    "MAJOR_STRIPPERS_ALLURE" : {
        "FUN" : /** @param {string} s
         @param {App.Item.Consumable} o*/
            function(o,s) { return (s == 'Fitness' || s == 'Dancing' || s == 'Seduction') ? 15 : 0; },
        "VALUE" : 500,
        "KNOWLEDGE" : [ "Stripper's Allure+++" ]
    },
    "GREATER_STRIPPERS_ALLURE" : {
        "FUN" : /** @param {string} s
         @param {App.Item.Consumable} o*/
            function(o,s) { return (s == 'Fitness' || s == 'Dancing' || s == 'Seduction') ? 20 : 0; },
        "VALUE" : 800,
        "KNOWLEDGE" : [ "Stripper's Allure++++" ]
    },
    "FANCY_MOVES" : {
        "FUN" : /** @param {string} s
         @param {App.Item.Consumable} o*/
            function(o,s) { return ( s == "Dancing") ? 10 : 0; },
        "VALUE" : 200,
        "KNOWLEDGE" : [ "Fancy Moves++" ]
    },
    "REALLY_FANCY_MOVES" : {
        "FUN" : /** @param {string} s
         @param {App.Item.Consumable} o*/
            function(o,s) { return (s == 'Dancing' || s == 'Seduction') ? 15 : 0; },
        "VALUE" : 600,
        "KNOWLEDGE" : [ "Fancy Moves+++" ]
    },
    "MAIDS_PROWESS" : {
        "FUN" : /** @param {string} s
         @param {App.Item.Consumable} o*/
            function(o,s) { return (s == 'Cooking' || s == 'Cleaning' || s == 'Serving') ? 10 : 0; },
        "VALUE" : 300,
        "KNOWLEDGE" : [ "Maid's Prowess++" ]
    }


};
