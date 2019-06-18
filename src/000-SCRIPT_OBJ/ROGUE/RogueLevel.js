App.Rogue = App.Rogue || { };

App.Rogue.Level = function(depth) {

    this._depth = depth;

    /* FIXME data structure for storing entities */
    this._beings = {};

    /* FIXME map data */
    this._size = new App.Rogue.XY(80, 40);
    this._map = {};
    this._walls = {};
    this._freeCells = { };
    this._borders = { };
    this._entrance = { };
    this._exit = { };
    this._treasure = { };

    this._empty = new App.Rogue.Entity({ch:".", fg:"#888", bg:null});

    this.getSize = function() {
        return this._size;
    };

    /**
     * Create a Cave map.
     * 0 = free space, 1 = wall;
     * @param {number} w width (x axis)
     * @param {number} h height (y axis)
     */

    this.generateMap = function(w, h) {

        this._map = new ROT.Map.Cellular(w, h, { connected: true });
        this._map.randomize(0.5);

        /* make a few generations */
        for (var i=0; i<4; i++) this._map.create();

        this._map.connect(this._createCB.bind(this), 1, this._connectCB.bind(this));
    };

    this._createCB = function(x,y,v) {
        var xy = new App.Rogue.XY(x, y);
        if (v) {
            this._freeCells[xy] = new App.Rogue.Entity( { ch:null, fg:null, bg:null });
            //this._freeCells[xy].setPosition(xy, this);
        } else {
            this._walls[xy] = new App.Rogue.Entity( { ch:'*', fg:"#888", bg:null });
        }
    };
    this._connectCB = function( from, to) {
        //console.log("from="+from+", to="+to);
        //this._cells[from] = new App.Rogue.Entity( { ch:"X", fg:"#777", bg:null });
        //this._cells[to] = new App.Rogue.Entity( { ch:"O", fg:"#777", bg:null });
    };

    this.getWalls = function() { return this._walls; };
    this.getFreeCells = function() { return this._freeCells; };
    this.getBorders = function() { return this._borders; };

    /**
     * Fill in the borders of the map.
     * Generate an entrance and save it.
     * @param {number} w width, x axis
     * @param {number} h height, y axis
     */
    this.fillBorders = function(w, h) {

        var key = {};
        for (var i = 0; i < w; i++ ) {
            // Top of map.
            key = new App.Rogue.XY(i, 0);
            if (typeof this._freeCells[key] !== 'undefined') delete this._freeCells[key];
            if (typeof this._walls[key] !== 'undefined') delete this._walls[key];
            this._borders[key] = new App.Rogue.Entity( {ch:'#', fg:"white", bg:null });

            // Bottom of map.
            key = new App.Rogue.XY(i, h-1);
            if (typeof this._freeCells[key] !== 'undefined') delete this._freeCells[key];
            if (typeof this._walls[key] !== 'undefined') delete this._walls[key];
            this._borders[key] = new App.Rogue.Entity( {ch:'#', fg:"white", bg:null });
        }

        for( i = 0; i < h; i++) {
            // Left of map.
            key = new App.Rogue.XY(0, i);
            if (typeof this._freeCells[key] !== 'undefined') delete this._freeCells[key];
            if (typeof this._walls[key] !== 'undefined') delete this._walls[key];
            this._borders[key] = new App.Rogue.Entity( {ch:'#', fg:"white", bg:null });

            // Right of map.
            key = new App.Rogue.XY(w-1, i);
            if (typeof this._freeCells[key] !== 'undefined') delete this._freeCells[key];
            if (typeof this._walls[key] !== 'undefined') delete this._walls[key];
            this._borders[key] = new App.Rogue.Entity( {ch:'#', fg:"white", bg:null });
        }
    };

    this.cellsAtRadius = function(x, y, r, free)
    {
        var cells = [ ];

        const startY = Math.max( 0,(y - r));
        const endY = Math.min(this._size.y - 1, (y + r));
        const startX = Math.max(0, x - r);
        const endX = Math.min(this._size.x - 1, x + r);

       // console.log("startY="+startY+",endY="+endY);

        for(var row = startY ; row <= endY ; row++){
            const dy = row - y;
            var rangeX = r - Math.abs(row - y);
            //console.log("rangeX"+rangeX+",startX="+startX+",endX="+endX);

            for (var col = startX; col <= endX; col++){
                const dx = col - x;
                if (Math.sqrt(dx * dx + dy * dy) > r) continue;
                var xy = col+","+row;
                if(free == true && typeof this._freeCells[xy] !== 'undefined') {
                    cells.push(xy);
                } else if (free == false) {
                    cells.push(xy);
                }
            }
        }

        return cells;
    };

    this.cellsOutsideRadius = function(x, y, r, free)
    {
        var cells = [ ];
        // Get inclusion cells
        var inside =  this.cellsAtRadius(x, y, r, free);

        cells = Object.keys(this._freeCells).filter(function(key) { return inside.includes(key) == false; });
        if (free == false) cells = cells.concat(Object.keys(this._walls).filter(function(key) { return inside.includes(key) == false }));

        return cells;
    };

    /**
     * Each  level can have up to 10 treasure spots on it. The chance is basically 1% per depth for each spot.
     */
    this.genTreasure = function()
    {
        var count = 0;
        for (var i = 0; i < 10; i++) {
            if ((Math.round(Math.random() * 100)+1) <= 100 ) count++;
        }

        if (count < 1) return; // noop
        var cells = Object.keys(this._freeCells);
        //Remove stairs from array
        cells = $.grep(cells, function(e) { return (e != this._exit.toString() && e != this._entrance.toString())}.bind(this));
        for (i = 0; i < count; i++) {
            var treasure = cells[Math.floor(Math.random() * cells.length)];
            var XY = new App.Rogue.XY();
            XY.setStr(treasure);
            this._treasure[treasure] = XY;
            this._freeCells[XY] = new App.Rogue.Entity({ ch:'*', fg:'#A52A2A', bg:null });
            this._freeCells[XY].Type = 'dig_spot';
        }
    };

    this.genMonsters = function()
    {
        console.log("genMonsters() called");
        // Select generic monster encounters.
        var tLevel = this._depth;
        console.log("tLevel="+tLevel);
        var Mobs = App.Data.Abamond.Mobs['COMMON'].filter( o => 
            o.level >=  ( tLevel - 10) &&
            o.level <= tLevel);

        console.log(Mobs);
        var MobPool = ((tLevel * 5) * Math.random())

        while(MobPool > 0 && Mobs.length >= 1) {
            let m = Mobs[Math.floor(Math.random() * Mobs.length)];
            MobPool -= m.level;
            this._placeMonster(m);
        }

    };

    // Place the monster we just generated
    this._placeMonster = function(Mob)
    {

        var entity = new App.Rogue.Being( { ch: Mob.symbol, fg: Mob.color, bg: null });
        entity.Name = Mob.name;
        entity.Encounter = Mob.encounter;
        var that = this;
        var cells = Object.keys(this._freeCells).filter( c => 
            c != that._entrance.toString() &&
            c != that._exit.toString() &&
            Object.keys(that._beings).includes(c) == false
            );
        var place = cells[Math.floor(Math.random() * cells.length)];
        var XY = new App.Rogue.XY();
        XY.setStr(place);
        console.log("Placing mob:" +Mob.name + " at " + XY.toString());
        this.setEntity(entity, XY);

    }

    this.isTreasure = function(xy) {
        return this._treasure[xy] || null;
    };

    /**
     * Real gross hack for now, need to fix with future refactor
     */
    this.digAt = function(xy) {
        var nothing = (50 - this._depth);
        var loot = { };

        delete this._treasure[xy];
        delete this._freeCells[xy];

        this._freeCells[xy] = new App.Rogue.Entity( { ch:null, fg:null, bg:null });

        // no loot
        if (nothing > 0 && (nothing > Math.random() * 100)) {
            App.Rogue.Engine._textBuffer.write("You find nothing!");
            return;
        }

        //Hack for Quest(s) {
            if (setup.player.QuestFlags.hasOwnProperty("FINDING_YOUR_BALLS_2")
                && setup.player.QuestFlags["FINDING_YOUR_BALLS_2"] == "ACTIVE"
                && (typeof setup.player.GetItemByName("rare ore") === 'undefined')
                && (Math.random() * 100 < this._depth)) {
                    setup.player.AddItem("QUEST", "rare ore", 1);
                    App.Rogue.Engine._textBuffer.write("You find: a rare ore!");
                    return;
                }

        var coins = Math.ceil(1 + ( Math.random() * (this._depth * 5)));
        if ( Math.random() * 100 > 40 ) {
            // Money
            setup.player.AdjustMoney(coins);
            App.Rogue.Engine._textBuffer.write("You find "+coins+" coins!");
            App.PR.RefreshTwineMoney();
        } else {

            if ( coins > 400 ) { // legendary
                loot = App.PR.GetRandomListItem(App.Data.Loot["DUNGEON_LEGENDARY"]);
            } else if (coins > 300 ) { // rare
                loot = App.PR.GetRandomListItem(App.Data.Loot["DUNGEON_RARE"]);
            } else if (coins > 150 ) { // uncommon
                loot = App.PR.GetRandomListItem(App.Data.Loot["DUNGEON_UNCOMMON"]);
            } else { // common
                loot = App.PR.GetRandomListItem(App.Data.Loot["DUNGEON_COMMON"]);
            }

            var count = (Math.max( loot.min, (Math.round(Math.random() * loot.max) )));
            setup.player.AddItem(loot.category, loot.tag, count);
            var name = setup.player.GetItemByName(loot.tag);
            if (typeof name !== 'undefined' && name != null ) {
                App.Rogue.Engine._textBuffer.write("You find: "+name.Name+"!");
            } else {
                App.Rogue.Engine._textBuffer.write("You find: "+ loot.tag +"(bug)!");
            }

        }

    };
    /**
     * Pick a random free cell and plop down the staircase up/out
     */
    this.genEntrance = function()
    {
        var entrance = Object.keys(this._freeCells)[Math.floor(Math.random() * Object.keys(this._freeCells).length)];
        this._entrance = new App.Rogue.XY();
        this._entrance.setStr(entrance);
        this._freeCells[entrance] = new App.Rogue.Entity({ ch:'O', fg:'#3f3', bg:null});
        this._freeCells[entrance].Type = 'stairs_up';

    };

    /**
     * Pick a random free cell minimum distance of 30 spaces away
     */
    this.genExit = function()
    {
        if (this._depth >= 100) return;

        if(typeof this._entrance === 'undefined') this.genEntrance();
        var cells = this.cellsOutsideRadius(this._entrance.x, this._entrance.y, 30, true);
        var exit = cells[Math.floor(Math.random() * cells.length)];
        this._exit = new App.Rogue.XY();
        this._exit.setStr(exit);
        this._freeCells[exit] = new App.Rogue.Entity(( { ch:'X', fg: '#1ABC9C', bg:null}));
        this._freeCells[exit].Type = 'stairs_down';
    };

    this.getEntrance = function () { return this._entrance; };
    /** @returns{App.Rogue.XY} */
    this.getExit = function() { return this._exit };

    this.removeBeing = function(entity)
    {
        if (entity.Level == this) {
            var key = entity.XY;
            delete this._beings[key];
            if (App.Rogue.Engine._level == this) {
                App.Rogue.Engine.draw(key);
            }
        }
    };
    
    this.setEntity = function(entity, xy) {
        /* FIXME remove from old position, draw */
        if (entity.Level == this) {
            var oldXY = entity.XY;
            delete this._beings[oldXY];
            if (App.Rogue.Engine._level == this) { App.Rogue.Engine.draw(oldXY); }
        }

        entity.setPosition(xy, this); /* propagate position data to the entity itself */

        /* FIXME set new position, draw */
        this._beings[xy] = entity;
        if (App.Rogue.Engine._level == this) {
            App.Rogue.Engine.draw(xy);
            //App.Rogue.Engine._textBuffer.write("An entity moves to " + xy + ".");
        }
    };

    this.getEntityAt = function(xy) {
        return this._beings[xy] || this._walls[xy] || this._freeCells[xy] || this._borders[xy];
    };

    this.getBeings = function() {
        /* FIXME list of all beings */
        return this._beings;
    };

};
